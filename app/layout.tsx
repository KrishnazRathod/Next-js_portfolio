import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Krishna Rathod',
    description: 'Krishna Rathod | Full Stack Web Developer',
    icons: '/favicon.png',
    creator: 'Krishna Rathod',

    authors: [
        {
            name: 'Krishna Rathod',
            url: 'https://github.com/KrishnazRathod',
        },
    ],
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`text-text bg-background dark`}>
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    )
}
