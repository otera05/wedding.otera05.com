import type { NextPage } from 'next'
import { Happiness } from '../src/libs/photoUtils'
import useSWR from 'swr'
import { GalleryTemplate } from '../src/components/gallery/index'

const fetcher = (url) => fetch(url).then((r) => r.json())

const Gallery: NextPage = () => {
  // const { data, error } = useSWR('./api/photos', fetcher)
  // if (error)
  //   return (
  //     <div>
  //       An error has occurred.
  //       <p>{error}</p>
  //     </div>
  //   )
  // if (!data) return <div>Loading...</div>

  return (
    <div class="container mx-auto">
      <section>
        <h3 class="font-serif text-4xl my-10">Happiness Checker</h3>
        <div class="grid sm:grid-cols-1 md:grid-cols-3 mb-10 justify-center">
          <GalleryTemplate></GalleryTemplate>
        </div>
      </section>
    </div>
  )
}
export default Gallery
