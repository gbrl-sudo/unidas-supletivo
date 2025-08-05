import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Este domínio precisa ser verificado no Resend
      to: ['seu-email@dominio.com'], // Substitua pelo seu e-mail de recebimento
      subject: `Nova mensagem de ${name} - Site EJA`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return NextResponse.json({ error: 'Erro ao enviar a mensagem.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json({ error: 'Ocorreu um erro inesperado.' }, { status: 500 });
  }
}