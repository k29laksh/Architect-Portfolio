import React from 'react'

const CategoryForm = () => {
  return (
    <>
        <div className="p-4  shadow font-text ">
          <div className="flex-col  flex space-y-4 ">
            <h3 className='font-semibold text-lg text-center sm:text-start sm:px-8 sm:pb-4 sm:text-xl lg:text-2xl text-blue-700'>Create Category</h3>
            <div className='flex flex-col  sm:flex-row  px-8 space-y-4 sm:space-y-0 sm:space-x-4 items-center'>
            <input
              type="text"
              placeholder="Name"
              className="border w-full border-gray-500 py-2 sm:w-1/3 rounded-md outline-none px-2 text-zinc-700"
            />
            <button className="text-gray-800  border-gray-800 border hover:scale-105 hover:ease-out duration-75 px-5 py-2 rounded-md font-medium">
              Create
            </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default CategoryForm
