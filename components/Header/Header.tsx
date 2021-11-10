import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import logo from '/public/icon/hulu-white.png'

function Header() {
  const router = useRouter()

  return (
    <>
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} path="home?genre=fetchTrending" />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} path="home?genre=fetchTrending" />
          <HeaderItem title="VARIFIED" Icon={BadgeCheckIcon} path="/varified" />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} path="/collections" />
          <HeaderItem title="SEARCH" Icon={SearchIcon} path="/search" />
          <HeaderItem title="DASHBOARD" Icon={UserIcon} path="/dashboard" />
        </div>
        <Image
          className="object-contain"
          src={logo}
          height={100}
          width={200}
          alt=""
          onClick={() => router.push('/')}
        ></Image>
      </header>
    </>
  )
}
export default Header
