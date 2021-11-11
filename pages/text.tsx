import React from 'react'
function Index() {
  return (
    <div className="flex flex-no-wrap">
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex"></div>

      {/* Sidebar ends */}
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
          {/* Place your content here */}
        </div>
      </div>
    </div>
  )
}

export default Index
