import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { newsCategory, newsCnn, textState } from '../Components/context/recoil'
import axios from 'axios';
import Card from '../Components/card'
import InputSearch from '../Components/InputSearch';
import NewsContext from '../Components/context/news-context';



export default function Cnn() {
  const items = ['terbaru', 'nasional', 'internasional', 'ekonomi', 'olahraga', 'teknologi', 'hiburan', 'gayahidup']
  const [Cnn, setCnn] = useRecoilState(newsCnn)
  const [category, setCategory] = useRecoilState(newsCategory)

  async function name() {
    try {
      let {data} = await axios.get(`https://api-berita-indonesia.vercel.app/cnn/${category}`);
      setCnn(data)
    } catch (error) {
        console.log(error);
    }
  }

  const handleOnSearch = (string, results) => {
    let data = category
    data = string
    setCategory(data)
}

  useEffect(()=>{
    name()
    // eslint-disable-next-line
  },[])

  return (
    <NewsContext.Provider value={{ items }}>
      <InputSearch onSearch={handleOnSearch} value={category}/>
      <div className='flex gap-6 justify-center md:justify-start md:gap-3 flex-wrap flex-row'>
        {
          Cnn?.data?.posts.map((users,index)=>(
            <Card img={users.thumbnail ?? ''} title={users.title ?? ''} body={users.description ?? ''} key={index} detail={users.link}/>
          ))
      }
      </div>
    </NewsContext.Provider>
  )
}
