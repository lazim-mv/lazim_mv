import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScroll/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lazim MV",
  description: "Portfolio by lazim mv",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </head>
      <body className={inter.className}><SmoothScrolling>{children}</SmoothScrolling></body>
    </html>
  );
}
