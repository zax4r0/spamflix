// @ts-nocheck
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'
export interface MovieProps {
  poster_path?: String
  video?: String
  id: String
  overview?: String
  vote_count?: String
  adult?: String
  backdrop_path?: String
  vote_average?: String
  genre_ids?: String
  title?: String
  original_language?: String
  original_title?: String
  popularity?: String
  media_type?: String
}
const BASE_URL = 'https://image.tmdb.org/t/p/original/'

const Thumbnails = forwardRef((data, ref) => {
  // some redlines in vs code fix it or ignore

  return (
    <Link href="/p/[id]" as={`/p/${data.data.id}`}>
      <div
        ref={ref}
        className="group cursor-pointer p-3  mr-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      >
        {/* {JSON.stringify(data)} */}
        <a>
          <Image
            src={
              `${BASE_URL}${data.data.backdrop_path || data.data.poster_path}` || `${BASE_URL}${data.data.poster_path}`
            }
            layout="responsive"
            height={1080}
            width={1920}
            alt={data.data.original_title}
          ></Image>
          <h2 className="mt-1 truncate max-w-md text-pink-500 group-hover:text-yellow-400 text-2xl transition-all duration-150 ease-in-out group-hover:font-bold ">
            {data.data.original_title}
          </h2>
          <div className="flex items-center opacity-0 group-hover:opacity-100">
            <div className="p-2">
              <p className="truncate max-w-md">{data.data.overview}</p>
            </div>
            <ThumbUpIcon className="h-5 mx-2" />
          </div>
        </a>
      </div>
    </Link>
  )
})

export default Thumbnails
