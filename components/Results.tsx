// @ts-nocheck

import Link from 'next/link'
import React from 'react'
import Thumbnails from './Thumbnails'
import FlipMove from 'react-flip-move'
function Results(data) {
  // some redlines in vs code fix it or ignore
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-3  3xl:flex flex-wrap justify-center transition-all duration-300 ">
      {data.results.map((data) => (
        <Thumbnails key={data.id} data={data} />
      ))}
      {/* {JSON.stringify(data.results)} */}
    </FlipMove>
  )
}

export default Results
