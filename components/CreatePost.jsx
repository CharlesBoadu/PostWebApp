import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';

function CreatePost() {
  return (
    <div>
        <div className='flex flex-row space-x-2'>
            <div className='font-bold mb-2'>CREATE A POST</div>
            <div><BsFillPencilFill /></div>
        </div>
        <div className='bg-white rounded-sm w-[80vh] p-5'>
            <div className='mb-1'>TITLE</div>
            <div>
                <input type="text" name="" id="" placeholder='Enter title' className='bg-[#CED0FA] pl-2 py-1 w-full rounded-lg'/>
            </div>
            <div className='mt-1 mb-1'>BODY</div>
            <div>
                <textarea name="" id="" placeholder="Enter post content" cols="58" rows="10" className='bg-[#CED0FA] pl-2 rounded-lg w-full'></textarea>
            </div>
            <div className='flex justify-end'>
                <div className='bg-[#CED0FA] px-4 py-2 text-center rounded-lg hover:cursor-pointer'>SEND</div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost