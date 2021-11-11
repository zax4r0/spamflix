import { useRouter } from 'next/router'
import React from 'react'
import { get } from 'lodash'
import { ThumbUpIcon } from '@heroicons/react/outline'

const SinglePost = (post) => {
  const router = useRouter()
  const data = get(router.query, 'id')
  console.log(router.query)

  return (
    <>
      <div className="md:container md:mx-auto">
        <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.2embed.ru/embed/tmdb/movie?id=${data}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="cursor-pointer p-2  group">
        <a>
          <h2 className="mt-1 truncate max-w-md text-white text-xl transition-all duration-100 ease-in-out group-hover:font-bold group-hover:text-green-400">
            {post.post.original_title}
          </h2>
          <div className="flex items-center opacity-0 group-hover:opacity-100">
            <div className="p-2">
              <small className="truncate max-w-md">fdvfvfdg</small>
              <p className="truncate max-w-md">dvfvdfv</p>
            </div>
            <ThumbUpIcon className="h-5 mx-2" />
          </div>
        </a>
      </div>
      {/* {JSON.stringify(data)} */}
    </>
  )
}
export default SinglePost

type Post = { results }
const TMDB_API_KEY = process.env.TMDB_API_KEY

export const getServerSideProps = async (context) => {
  const id = context.query.id

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`)
  const post: Post = await res.json()

  return {
    props: {
      post,
    },
  }
}
