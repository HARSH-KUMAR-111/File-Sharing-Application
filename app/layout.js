// @ts-nocheck
// {Outfit} is used to change the font of the page
import { Inter,Outfit,Teko } from "next/font/google"
import "./globals.css"
import Header from "./_components/Header"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

//Here we used outfit font
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
     <html lang="en">
      <body className={inter.className}>
              {children}
        </body>
     </html>
    </ClerkProvider>

  );
}
