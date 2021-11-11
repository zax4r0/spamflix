import { useRouter } from 'next/router'
import React from 'react'
import { get } from 'lodash'

const SinglePost = (post) => {
  const router = useRouter()
  const data = get(router.query, 'id')
  console.log(router.query)

  return (
    <>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <iframe
          src={
            `https://www.2embed.ru/embed/tmdb/movie?id=${data}` ||
            `https://www.2embed.ru/embed/imdb/movie?id=${post.post.imdb_id}`
          }
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        ></iframe>
      </header>
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
