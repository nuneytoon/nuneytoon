import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Matthew Nunemacher',
    default:
      'Matthew Nunemacher - Software engineer, freelancer, and aspiring gelato master',
  },
  description:
    "I'm Matt(hew), a seasoned software engineer based in Denver, Colorado. With nearly a decade of experience, I've had the privilege of working on a diverse range of projects, from building scalable web applications to developing robust backend systems. My passion for technology drives me to constantly seek out new challenges and innovative solutions. Whether you're a potential client looking for a skilled freelancer or a fellow developer interested in exploring my work, I invite you to take a closer look at my portfolio, browse through my featured projects, and reach out to discuss how we can collaborate to bring your ideas to life.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  authors: [{ name: 'Matthew Nunemacher' }],
  keywords: [
    'software',
    'engineer',
    'developer',
    'freelancer',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
