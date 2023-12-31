import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Category, categoryState, newsCategory, newsCnn, textState } from '../Components/context/recoil'
import axios from 'axios';
import Card from '../Components/card'
import InputSearch from '../Components/InputSearch';
import NewsContext from '../Components/context/news-context';
import debounce from 'lodash.debounce';



export default function Cnn() {
  const items = ['terbaru', 'nasional', 'internasional', 'ekonomi', 'olahraga', 'teknologi', 'hiburan', 'gayahidup']
  const [Cnn, setCnn] = useRecoilState(newsCnn)
  const [category, setCategory] = useRecoilState(newsCategory)
  const [Categories] = useRecoilState(categoryState)

  async function name() {
    try {
      let {data} = await axios.get(`https://api-berita-indonesia.vercel.app/cnn/${Categories}`);
      setCnn(data)
    } catch (error) {
        console.log(error);
    }
  }

  const handleOnSearch = (string, results) => {
    let data = category
    data = string
    debouncedFunction(data);
  }

  const debouncedFunction = debounce((data) => {
    switch (data) {
      case '':
        data = 'terbaru';
        break;
      default:
    }
    setCategory(data)
  }, 2500);


  useEffect(()=>{
    name()
    // eslint-disable-next-line
  },[Categories])

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
