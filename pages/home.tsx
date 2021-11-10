import { HomeIcon } from '@heroicons/react/outline'
import { InferGetServerSidePropsType } from 'next'
import Nav from '@/components/Nav'
import Results from '@/components/Results'
import requests from '@/lib/requests'
import BaseLayout from '@/components/Layout/BaseLayout'
import Pagination from 'next-pagination'
import React from 'react'
import Header from '@/components/Header/Header'
import { useSession, getSession, signIn } from 'next-auth/client'

function home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <button className="btn-green" onClick={() => signIn()}>
        Sign in
      </button>
    )
  }

  return (
    <div className="disable-select">
      <BaseLayout title="" path="/" description="Stream Movies and Shows For free" Icon={HomeIcon}>
        <Header />
        <Nav />
        <div>
          <Results results={data.results} />
          {/* {JSON.stringify(data)} */}
        </div>
        <div className="justify-center items-center">
          <Pagination total={1000} />
        </div>
      </BaseLayout>
    </div>
  )
}

export default home

type Data = { results }

export const getServerSideProps = async (context) => {
  const genre = context.query.genre
  const page = context.query.page || 1
  const res = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending}&page=${page}`)
  const data: Data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data,
      session: await getSession(context),
    },
  }
}
