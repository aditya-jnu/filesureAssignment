import React from 'react'

export default function Discuss() {
    return (
        <div className='bg-custom-gradient px-[108px] py-12 flex justify-between'>
            <div className='text-white flex flex-col gap-6'>
                <p className='font-bold text-4xl'>Let&#39;s discuss<br/>Your project</p>
                <p>Let&#39;s figure out how to create an effective application,<br/>
                its cost and terms of its development</p>
            </div>
            <form className='rounded-xl bg-white flex flex-col gap-4 p-6'>
                <div className='flex gap-4'>
                    <div className='flex flex-col'>
                         <label htmlFor="name" className='text-customWhite2 text-sm'>Full name</label>
                         <input type="text" id='name' className=" border-b border-black"/>
                    </div>
                    <div className='flex flex-col'>
                         <label htmlFor="phoneno" className='text-customWhite2 text-sm'>Phone number</label>
                         <input type="text" id='phoneno' className=" border-b border-black" />
                    </div>
                </div>
                <div className='flex gap-4'>
                   <div className='flex flex-col'>
                         <label htmlFor="namebus" className='text-customWhite2 text-sm'>Business name</label>
                         <input type="text" id='namebus' className=" border-b border-black" />
                    </div>
                    <div className='flex flex-col'>
                         <label htmlFor="mailbus" className='text-customWhite2 text-sm'>Business mail</label>
                         <input type="text" id='mailbus' className=" border-b border-black"/>
                    </div>
                </div>
                <div className='flex justify-end w-100'>
                <button className='text-white bg-yellow-500 rounded-xl  text-sm flex items-center justify-center px-3 py-1 w-[178px] h-[40px]'>Discuss the project</button>
                </div>

    
                </form>
        </div>
    )
}
