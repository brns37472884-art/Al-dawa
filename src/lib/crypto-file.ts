import crypto from "crypto";

function key(): Buffer {
  const secret = process.env.LAB_ENC_KEY || process.env.JWT_SECRET;
  if (!secret) throw new Error("LAB_ENC_KEY or JWT_SECRET is required");
  return crypto.createHash("sha256").update(`aldawa-v2-file-key:${secret}`).digest();
}

/** AES-256-GCM envelope, returned as a base64 string (iv.tag.data). */
export function encryptBuffer(buf: Buffer): string {
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv("aes-256-gcm", key(), iv);
  const data = Buffer.concat([c.update(buf), c.final()]);
  return [iv, c.getAuthTag(), data].map((b) => b.toString("base64")).join(".");
}

export function decryptBuffer(envelope: string): Buffer {
  const [iv, tag, data] = envelope.split(".").map((p) => Buffer.from(p, "base64"));
  const d = crypto.createDecipheriv("aes-256-gcm", key(), iv);
  d.setAuthTag(tag);
  return Buffer.concat([d.update(data), d.final()]);
}

export function claimToken(): string {
  return crypto.randomBytes(24).toString("hex");
}
