// import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '猫画像ジェネレーター - nextCatApp',
  description: 'Next.jsで猫画像ジェネレーターを作ろう | https://typescriptbook.jp/tutorials/nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  )
}
