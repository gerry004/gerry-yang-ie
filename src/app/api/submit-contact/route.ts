import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import nodemailer from 'nodemailer';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gerry04y@gmail.com',
    // You'll need to create an app password for Gmail
    // Go to Google Account > Security > 2-Step Verification > App passwords
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, website, message } = await request.json();

    // Create Notion database entry
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Phone: {
          phone_number: phone,
        },
        "Company Website": {
          url: website || null,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        Source: {
          select: {
            name: "Services Website"
          }
        }
      },
    });

    // Send email notification
    await transporter.sendMail({
      from: 'gerry04y@gmail.com',
      to: 'gerry04y@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
} 