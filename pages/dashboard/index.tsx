// import { useRouter } from 'next/router'
import { HomeIcon } from '@heroicons/react/outline'
import React from 'react'
import BaseLayout from '@/Layout/BaseLayout'

function Notfound() {
  // const router = useRouter()

  return (
    <div className="select-none">
      <BaseLayout title="Home" path="/" description="Stream Movies and Shows For free" Icon={HomeIcon}>
        dfkvbdf
      </BaseLayout>
    </div>
  )
}
export default Notfound
