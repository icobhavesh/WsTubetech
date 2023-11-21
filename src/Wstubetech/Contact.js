import React from 'react'

function Contact() {
  return (
      <div className='w-full bg-black py-[150px]'>
            <div className= "max-w-[1240px] ">
            <div className='text-white h-200px  md:flex justify-between items-center mx-auto mr-[100px]'>
                <h1 className=' w-full mx-auto md:text-[30px] text-center uppercase font-italic '>
                if you have anny doubt <br>
                </br>
                 kindly contact us 

                </h1>
                <div className='m-auto w-full flex justify-center text-center py-[50px]'>
                    <input className=' ml-[8px] border rounded' type="text "></input> 
                    <button className=' bg-purple-900 border rounded cursor-pointer px-[15px] py-[8px] md
                    mx-[16px]'>Submit Form </button>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Contact