import Image from 'next/image'
import Link from 'next/link'
import bugsBunny from '../../public/bugs-bunny.svg'

export default function Welcome() {
  return (
    // <main className="welcome flex min-h-screen flex-col items-center justify-center p-24">
    //   <Image src={bugsBunny} alt="bugs bunny" height={800} width={500} />
    //   <Link href="/home" className="text-amber-500">
    //     Explore
    //   </Link>
    // </main>
    <div id="welcome-container">
      <div className="introduction"></div>
    </div>
  )
}
