import { ar } from "@/lib/i18n/ar";

export default function Home() {
  return (
    <main style={{ maxWidth: 640, margin: "12vh auto", padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: 48, margin: 0 }}>{ar.appName}</h1>
      <p style={{ fontSize: 20 }}>{ar.tagline}</p>
      <p style={{ opacity: 0.7 }}>{ar.disclaimer}</p>
      <p style={{ color: "#0a7d5a" }}>● {ar.status}</p>
    </main>
  );
}
