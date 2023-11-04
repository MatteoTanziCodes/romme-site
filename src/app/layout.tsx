import type { Metadata } from 'next'
import Favicon from '/public/favicon.ico';
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Romme',
  description: 'Explore the Beauty of Canada (and the Americas) with Romme',
  icons: [{ rel: 'icon', url: Favicon.src }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="shortcut icon" href={`/favicon.ico`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`/apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png`}/>
          <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png`}/>
        </Head>
        {children}
      </body>
    </html>
  )
}
