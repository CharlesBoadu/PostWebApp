import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
  return (
    <div>
        <div className='flex flex-row items-center justify-center p-5'>
            <div className='my-auto z-10'>
                <AiOutlineSearch />
            </div>
            <div className='my-auto'>
                <input type="text" placeholder='search' className='pl-[8%] w-[100vh] rounded-full py-2 ml-[-5%] border-[1.7px]'/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar;