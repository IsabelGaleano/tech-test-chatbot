import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AnimalSection from '@/components/AnimalSection'
import Chatbot from '@/components/Chatbot'
import ActivitiesSection from '@/components/ActivitiesSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className="bg-green-50">
      <Head>
        <title>Coffee & Cats</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <>
        <Navbar />
        <Hero />
        <AnimalSection />
        <ActivitiesSection/>
        <AboutSection/>
        <Footer/>
        
      </>


      <Chatbot />
    </div>
  )
}
