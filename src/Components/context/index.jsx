import axios from 'axios';
import React, { createContext, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

const MyContext = createContext();

function IndexProvider(params) {
  const user = {
    name:"arifin"
  }
  const [news, setNews] = useState({})
  const location = useLocation();
  let location1 = location.pathname.split('/')[1];
  async function getNews() {
    try {
      let {data} = await axios.get(`https://api-berita-indonesia.vercel.app/${location1}/terbaru`)
      setNews(data)
    } catch (error) {
      console.log(error);      
    }
  }



  useEffect(()=>{
    getNews()
    // eslint-disable-next-line
  },[])

  return (
    <MyContext.Provider value={{ user, news }}>
        {params.children}
    </MyContext.Provider>
  )
}

export {MyContext,IndexProvider}