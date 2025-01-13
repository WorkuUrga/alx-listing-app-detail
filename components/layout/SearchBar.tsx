import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex items-center bg-white rounded-full shadow-md px-2 overflow-hidden mx-auto'>
        <div className='flex-1 border-r border-gray-200 p-2'>
            <label className='block text-sm font-medium text-gray-500'>Location</label>
            <input 
            type="text" 
            placeholder='search for destination'
            className='w-full text-sm text-gray-600 placeholder-gray-400 outline-none'
            />
        </div>
        <div className='flex-1 border-r border-gray-200 p-2'>
            <label className='block text-sm font-medium text-gray-500'>Check in</label>
            <input 
            type="text"
            placeholder='Add date' 
            className='w-full text-sm text-gray-400 placeholder-gray-400 outline-none'
            />
        </div>
        <div className='flex-1 border-r border-gray-200 p-2'>
            <label className='block text-sm font-medium text-gray-500'>Check out</label>
            <input 
            type="text" 
            placeholder='Add date'
            className='w-full text-sm text-gray-400 placeholder-gray-400 outline-none'/>
        </div>
        <div className='flex-1 border-gray-200 p-2'>
            <label className='block text-sm font-medium text-gray-500'>People</label>
            <input 
            type="text" 
            placeholder='Add guest'
            className='w-full text-sm text-gray-400 placeholder-gray-400 outline-none'/>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full flex items-center justify-center">
            <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
            </svg>
        </button>        
    </div>
  )
}

export default SearchBar