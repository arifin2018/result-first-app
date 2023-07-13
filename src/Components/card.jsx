import React from 'react'
import { NavLink } from 'react-router-dom'

export default function card(params) {
  return (
    <>
        <div className='max-w-[200px] bg-gray-400 rounded-md shadow-md	shadow-gray-500'>
            {
                params.img != null ?
                <img src={params.img} alt="Avatar" className="w-[200px] h-[150px] rounded-md object-cover"/> :
                ''
            }
            <div className="container p-1 max-h-[100px]">
                <h4 className='my-1 gap-3'>
                    <b className='break-words max-w-[35ch] overflow-hidden inline-block max-h-[20px]'>{params.title}</b>
                </h4> 
                <p className='break-words max-w-[20ch] overflow-hidden inline-block max-h-[60px]'>{params.body}.</p> 
            </div>
            <div className="p-3">
                <NavLink to={'/'} className='bg-gray-390 rounded-md cursor-pointer px-3 py-2 bg-sky-400 no-underline text-sky-100'>Details</NavLink>

            </div>
        </div>
    </>
  )
}
