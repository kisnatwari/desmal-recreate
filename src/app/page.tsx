import Hero from '@/components/Hero'
import BanneredProducts from '@/components/BanneredProducts'
import TopRated from '@/components/TopRated'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <Hero />
      <TopRated />
      <BanneredProducts />
    </main>
  )
}
