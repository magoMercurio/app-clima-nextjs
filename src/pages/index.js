import CurrentCard from '@/components/CurrentCard'
import FormSearch from '@/components/FormSearch'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
      <h1 className='mt-4 mb-4 text-2xl capitalize flex justify-center items-center'>
        app del clima
    </h1>
      <FormSearch />
      <CurrentCard />
      </main>
    </>
  )
}
