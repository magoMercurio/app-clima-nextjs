import MainLayout from '@/layout/MainLayout'
import { WeatherProvider } from '@/Context/WeatherContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <WeatherProvider>
          <Component {...pageProps} />
        </WeatherProvider>
      </MainLayout>
    </>

  )
  
}
