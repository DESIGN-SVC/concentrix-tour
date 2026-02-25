import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./client-layout";
import Script from "next/script";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Concentrix Tour",
  description:
    "Tour virtual imersivo da Concentrix, apresentando nossos espaços, cultura e a forma como transformamos tecnologia em experiências humanas.",
  keywords: ["tour virtual", "concentrix", "tecnologia", "cultura empresarial"],
  openGraph: {
    title: "Concentrix Tour",
    description:
      "Tour virtual imersivo da Concentrix, apresentando nossos espaços, cultura e a forma como transformamos tecnologia em experiências humanas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${montserrat.className}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XQN6HBD0JD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XQN6HBD0JD');
          `}
        </Script>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
