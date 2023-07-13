import React, { useEffect, useState } from 'react'
import Card from '../Components/card'
import axios from 'axios'

export default function News() {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('terbaru')

    async function getNews(params) {
        try {
            let {data} = await axios.get(`https://api-berita-indonesia.vercel.app/antara/${category}`);
            setNews(data)
        } catch (error) {
            console.log(error);
        }
    }


    
    useEffect(()=>{
        getNews()
    },[getNews])
    
    return (
        <>
            <div className="py-4">
                <input type="search" name="input-stasiun" id="input-stasiun" value={category} onChange={(e)=>(setCategory(e.target.value))} placeholder='input-stasiun' className='min-h-[2pc] w-[40%] border-2 border-sky-500 rounded p-2' />
            </div>
            <div className='flex gap-3 flex-wrap flex-row'>
                {
                    news.data?.posts.map((news, index)=>(
                        <Card img={news.thumbnail ?? ''} title={news.title ?? ''} body={news.description ?? ''}/>
                    ))
                }
            </div>
            
            
        </>
    )
}
