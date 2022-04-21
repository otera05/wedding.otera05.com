import type { NextPage } from 'next'
import { Happiness } from '../src/libs/photoUtils'
import useSWR from 'swr'
import { GalleryTemplate } from '../src/components/gallery/index'

const Gallery: NextPage = () => {
  return (
    <div className="container mx-auto">
      <section>
        <h3 className="font-serif text-4xl my-10">Happiness Checker</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 mb-10 justify-center">
          <GalleryTemplate></GalleryTemplate>
        </div>
      </section>
    </div>
  )
}
export default Gallery
