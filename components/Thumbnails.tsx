// @ts-nocheck
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'

const BASE_URL = 'https://image.tmdb.org/t/p/original/'

const Thumbnails = forwardRef((data, ref) => {
  // i can't make typescript happy pz maeke it happy if u looking it
  const movie: {
    id
    original_language
    poster_path
    video
    overview
    vote_count
    adult
    backdrop_path
    vote_average
    genre_ids
    title
    original_title
    popularity
    media_type
  } = data.data
  return (
    <Link href="/p/[id]" as={`/p/${movie.id}`}>
      <div
        ref={ref}
        className="group cursor-pointer p-3  mr-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      >
        <a>
          <Image
            src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}` || `${BASE_URL}${movie.poster_path}`}
            layout="responsive"
            height={1080}
            width={1920}
            alt={movie.original_title}
          ></Image>
          <h2 className="mt-1 truncate max-w-md text-pink-500 group-hover:text-yellow-400 text-2xl transition-all duration-150 ease-in-out group-hover:font-bold ">
            {movie.original_title}
          </h2>
          <div className="flex items-center opacity-0 group-hover:opacity-100">
            <div className="p-2">
              <p className="truncate max-w-md">{movie.overview}</p>
            </div>
            <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
          </div>
        </a>
      </div>
    </Link>
  )
})

export default Thumbnails
