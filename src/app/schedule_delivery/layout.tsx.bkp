'use client'
//import type { Metadata } from "next";
import ReduxProvider from '@/lib/store/redux-provider';


/*export const metadata: Metadata = {
  title: "Tobros Logistics-Login",
  description: "Get your item delivered to its destination with a click",
};
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
    <>
    {children}
    </>
    </ReduxProvider>
  );
}
