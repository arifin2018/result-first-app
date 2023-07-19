import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { newsCnn, textState } from '../Components/context/recoil'
import axios from 'axios';
import Card from '../Components/card'

export default function Cnn() {
  const [Cnn, setCnn] = useRecoilState(newsCnn)

  async function name() {
    try {
      let {data} = await axios.get(`https://api-berita-indonesia.vercel.app/cnn/terbaru`);
      setCnn(data)
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    name()
    console.log(Cnn);
    // eslint-disable-next-line
  },[])

  return (
    <>
      <div className='flex gap-6 justify-center md:justify-start md:gap-3 flex-wrap flex-row'>
        {
          Cnn?.data?.posts.map((users,index)=>(
            <Card img={users.thumbnail ?? ''} title={users.title ?? ''} body={users.description ?? ''} key={index} detail={users.link}/>
          ))
      }
      </div>
    </>
  )
}
