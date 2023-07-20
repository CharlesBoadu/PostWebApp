import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from "react-icons/gr";

function AllPosts() {
  return (
    <div>
        <div className='bg-white rounded-lg w-[90vh] h-full'>
            <div className='flex flex-row space-x-4 p-4'>
                <div className='bg-[#CED0FA] rounded-lg w-[80%]'>{"Post 1"}</div>
                <div className='flex flex-row space-x-3 w-[20%]'>
                    <div className='my-auto hover:cursor-pointer hover:text-red-600'><AiFillDelete /></div>
                    <div className='my-auto hover:cursor-pointer hover:text-green-600'><GrUpdate /></div>
                </div>
            </div>
            <div className='text-center text-sm p-4'>{"Post 3 out of 10"}</div>
        </div>
    </div>
  )
}

export default AllPosts