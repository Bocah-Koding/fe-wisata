import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProviders } from "@/component/SessionProviders";
import { Providers } from "@/component/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        template: "%s | Banyu-Go",
        default: "Banyu-Go",
    },
    description: "Aplikasi yang dibuat untuk membeli tiket wisata di banyumas.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className} suppressHydrationWarning={true}>
                <SessionProviders>
                    <Providers>{children}</Providers>
                </SessionProviders>
            </body>
        </html>
    );
}
