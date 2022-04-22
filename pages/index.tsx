import type { NextPage } from 'next'
import { GalleryTemplate } from '../src/components/gallery/index'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <section>
        <h3 className="font-serif text-4xl my-10">Happiness Checker</h3>
        <div>
          <GalleryTemplate></GalleryTemplate>
        </div>
      </section>
    </div>
  )
}

export default Home
