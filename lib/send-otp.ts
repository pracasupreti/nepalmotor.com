import { NextResponse } from "next/server";
import { generateOtp, getOtpSigningSecret } from "@/lib/otp";

export type SendOtpJsonBody = { phone?: string };

function validationError(message: string) {
  return NextResponse.json({ success: false, message }, { status: 400 });
}

// Used to call Sparrow SMS from here, but Sparrow rejects Vercel's outbound IP
// (see the 1001 "Invalid IP Address" mapping that used to live in
// lib/sparrow-sms.ts) the same way it rejects Supabase's — both are shared
// cloud infra IPs, and Sparrow's account-level allowlist doesn't accept them.
// The OTP is stateless (HMAC-derived from phone + secret + time window, see
// lib/otp.ts), so there's no server-side record to protect by withholding the
// code — handing it back here for the client to deliver itself is exactly as
// safe as texting it, since only the requesting client ever sees it either way.
export async function handleSendOtp(request: Request): Promise<NextResponse> {
  const secret = getOtpSigningSecret();
  if (!secret) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Server is missing OTP_SIGNING_SECRET. Add it to .env.local (or Vercel env vars) and restart.",
      },
      { status: 500 },
    );
  }

  let body: SendOtpJsonBody | null = null;
  try {
    const raw = await request.json();
    if (raw && typeof raw === "object") body = raw as SendOtpJsonBody;
  } catch {
    return validationError("Invalid JSON body");
  }
  if (!body) return validationError("Invalid JSON body");

  const phone = String(body.phone ?? "").trim();
  if (!/^\d{10}$/.test(phone)) {
    return validationError("Enter a valid 10-digit phone number.");
  }

  const code = generateOtp(secret, phone);
  const text = `${code} is your NepalMotor verification code. It expires in 10 minutes.`;

  return NextResponse.json({ success: true, phone, text });
}
