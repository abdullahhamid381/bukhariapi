import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <div>
           <div style={{display:'flex',justifyContent:'center',gap:'0 20px'}}>
           <Link href='/' style={{textDecoration:'none'}}>Home</Link>
            <Link href='/bukharimethood' style={{textDecoration:'none'}}>Bukhari</Link>
           </div>
          
        </div>
        {children}</body>
    </html>
  );
}
