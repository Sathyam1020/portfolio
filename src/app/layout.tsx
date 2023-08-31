
import { cn } from '@/lib/utils'
import { Montserrat } from 'next/font/google'


import './globals.css'
import LeftSidebar from '@/components/LeftSidebar'
import Bottombar from '@/components/Bottombar';
import Topbar from '@/components/Topbar'



// const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin']})

export const metadata = {
  title: 'Sathyam',
  description: "This is Sathyam's portfolio.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={montserrat.className}>
      <Topbar />
        <main className='flex'>
          <LeftSidebar />
            <section className='flex min-h-screen flex-1 flex-col items-center bg-[#000000] px-6 pb-10 pt-28 max-md:pb-32 sm:px-10'>
                <div className='w-full max-w-[1200px]'>
                  {children}
                </div>
            </section>

        </main>
      <Bottombar />
    </body>
  </html>
  )
}