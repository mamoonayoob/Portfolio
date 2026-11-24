import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 },
      );
    }

    const formId = process.env.FORMSPREE_FORM_ID?.trim();

    if (!formId) {
      return NextResponse.json({
        ok: true,
        mode: "mailto",
        mailto: {
          to: process.env.CONTACT_TO_EMAIL || "mamoonayoob@gmail.com",
          subject: `Portfolio inquiry from ${name}`,
          body: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        },
      });
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio inquiry from ${name}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Unable to send message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, mode: "formspree" });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
