import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"


const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookish',
  description: 'My Book Recommendations directly from Notion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system" >
          {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
