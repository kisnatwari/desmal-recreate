import Hero from '@/components/Hero'
import BanneredProducts from '@/components/BanneredProducts'
import TopRated from '@/components/TopRated'
import Image from 'next/image'
import AvailableProducts from '@/components/AvailableProducts'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main>
      <Hero />
      <TopRated />
      <BanneredProducts />
      <AvailableProducts />
      <Footer />
    </main>
  )
}
