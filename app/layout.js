import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Team Introduction",
  description: "転造加工チームの紹介",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-body text-white ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
