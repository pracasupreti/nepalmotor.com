import { NextResponse } from "next/server";
import { getOtpSigningSecret, verifyOtp } from "@/lib/otp";

export type VerifyOtpJsonBody = { phone?: string; otp?: string };

function validationError(message: string) {
  return NextResponse.json({ success: false, valid: false, message }, { status: 400 });
}

export async function handleVerifyOtp(request: Request): Promise<NextResponse> {
  const secret = getOtpSigningSecret();
  if (!secret) {
    return NextResponse.json(
      {
        success: false,
        valid: false,
        message:
          "Server is missing OTP_SIGNING_SECRET. Add it to .env.local (or Vercel env vars) and restart.",
      },
      { status: 500 },
    );
  }

  let body: VerifyOtpJsonBody | null = null;
  try {
    const raw = await request.json();
    if (raw && typeof raw === "object") body = raw as VerifyOtpJsonBody;
  } catch {
    return validationError("Invalid JSON body");
  }
  if (!body) return validationError("Invalid JSON body");

  const phone = String(body.phone ?? "").trim();
  const otp = String(body.otp ?? "").trim();
  if (!/^\d{10}$/.test(phone) || !otp) {
    return validationError("Missing phone or code.");
  }

  const valid = verifyOtp(secret, phone, otp);
  return NextResponse.json({
    success: true,
    valid,
    message: valid ? undefined : "Incorrect code. Please try again.",
  });
}
