export type ContactEmailPayload = {
  to: string;
  cc: string;
  subject: string;
  fromName: string;
  fromEmail: string;
  body: string;
  attachmentName?: string;
};

export type ContactEmailResult = { ok: true };

// TODO: replace with real email service — see lib/mail.ts
export async function sendContactEmail(
  payload: ContactEmailPayload
): Promise<ContactEmailResult> {
  await new Promise((resolve) => window.setTimeout(resolve, 600));
  console.info("sendContactEmail stub", payload);
  return { ok: true };
}
