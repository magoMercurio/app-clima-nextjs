import CurrentCard from '@/components/CurrentCard'
import FormSearch from '@/components/FormSearch'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='flex flex-col justify-center items-center max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <h1 className='mt-4 mb-4 text-2xl flex justify-center items-center'>
        App del Clima
    </h1>
      <FormSearch />
      <CurrentCard />
      </main>
    </>
  )
}
