import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-500 dark:text-zinc-200 dark:hover:text-amber-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Matthew Nunemacher. I live in Denver, where I design the future.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="man-with-dog"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Matthew Nunemacher. I live in Denver, where I design the
            future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {/* TODO: continue updating template with real information */}
            <p>
              I&apos;ve loved making things for as long as I can remember, and
              wrote my first program when I was 11 years old, while in middle
              school to prank my class into thinking the shared computer was
              broken, so I could monopolize it to play online games.
            </p>
            <p>
              The only thing I loved more than computers as a kid was grilled
              cheese. When I was 6, it was the <em>only</em> food I would eat -
              for breakfast, lunch, and dinner. It got so bad, my mom actually
              took me to the doctor concerned about my nutrition, but the doc
              sided with me and told her as long as I was eating, I would
              probably grow out of it. The phase lasted longer than anyone
              expected, but eventually my love of dairy and creamy delicious
              foods evolved into an obsession with ice cream.
            </p>
            <p>
              I once ended up eating an entire ice cream cake by myself when my
              boss challenged my love affair with the delicious treat at an
              office party. From there, I wanted to learn everything I could
              about what went into my favorite food! I learned that ice cream
              was tricky to make with the right consistency and quality
              ingredients &#40;at least from home&#41;, but its exotic cousin,
              gelato, was a little bit easier.
            </p>
            <p>
              Then, a pandemic hit, and the world shut down. I was living in New
              York City at the time, and like everyone else, I was looking for
              ways to stay hopeful and entertained at home. Making bread became
              a trend for many new and aspiring bakers, which gave me
              inspiration to continue making things of my own. I did my research
              and gelato it was &#40;after some failed attempts at cocktails and
              becoming the world&apos;s greatest bartender&#41;. I haven&apos;t
              found a way to connect gelato to my love of making software just
              yet, but I will!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mnunemacher@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mnunemacher@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
