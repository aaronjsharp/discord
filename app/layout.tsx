import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'
import { ModalProvider } from '@/components/providers/modalProvider'
import { SocketProvider } from '@/components/providers/socketProvider'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord',
  description: 'A discord clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          font.className,
          "bg-white dark:bg-[#313338]"
        )}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            storageKey='discord-theme'
          >
            <SocketProvider>
              <ModalProvider />
              {children}
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
