import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './(components)/header';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Abedi.me',
    description: 'Personal blog',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header>
                    <Header />
                </header>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
