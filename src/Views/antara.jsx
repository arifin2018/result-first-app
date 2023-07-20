import React, { useEffect, useState } from 'react'
import Card from '../Components/card'
import axios from 'axios'
import InputSearch from '../Components/InputSearch';
import { useRecoilState } from 'recoil';
import { categoryState } from '../Components/context/recoil';

export default function News() {
    const items = ['terbaru', 'politik', 'hukum', 'ekonomi', 'bola', 'olahraga', 'humaniora', 'lifestyle', 'hiburan', 'dunia', 'tekno', 'otomotif'];

    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('terbaru')
    const [loading, setLoading] = useState(true)
    const [Categories] = useRecoilState(categoryState)
    

    const handleOnSearch = (string, results) => {
        let data = category
        data = string
        setCategory(data)
    }

    async function getNews() {
        try {
            let {data} = await axios.get(`https://api-berita-indonesia.vercel.app/antara/${Categories}`);
            setNews(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    
    useEffect(()=>{
        getNews()
         // eslint-disable-next-line
    },[Categories])

    return (
        <>
            <InputSearch onSearch={handleOnSearch} value={category} items={items}/>
            <div className='flex gap-6 justify-center md:justify-start md:gap-3 flex-wrap flex-row'>
                {
                    loading ? <h1>Loading ... </h1> : 
                    news.data?.posts.map((news, index)=>(
                        <Card img={news.thumbnail ?? ''} title={news.title ?? ''} body={news.description ?? ''} key={index} detail={news.link}/>
                    ))
                }
            </div>
        </>
    )
}
