import type { ReactNode } from "react";
import { ar } from "@/lib/i18n/ar";

export const metadata = { title: `${ar.appName} | Al Dawa`, description: ar.tagline };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f5f9f8", color: "#12332e" }}>
        {children}
      </body>
    </html>
  );
}
