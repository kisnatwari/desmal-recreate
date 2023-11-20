import Hero from '@/components/Hero'
import MicroAdvertisement from '@/components/MicroAdvertisement'
import TopRated from '@/components/TopRated'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <Hero />
      <TopRated />
      <MicroAdvertisement />
    </main>
  )
}
