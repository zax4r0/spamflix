import requests from '@/lib/requests'

import { useRouter } from 'next/router'

function Nav() {
  const router = useRouter()
  return (
    <nav className="realative select-none">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-20 overflow-x-scroll scrolbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/home/?genre=${key}`)}
            className="last:pr-24 cursor-pointer trasition duration-200 tranform hover:scale-125 text-pink-500 hover:text-yellow-400 active:text-pink-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0620A]" />
    </nav>
  )
}

export default Nav
