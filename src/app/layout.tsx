import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do List",
  description: "A simple to do list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={styles.html}>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
