import React, { useEffect, useState } from 'react'
import Card from '../Components/card'
import axios from 'axios'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export default function News() {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('terbaru')
    const [loading, setLoading] = useState(true)
    const items = [
        {
            id: 0,
            name: 'terbaru'
        },
        {
            id: 1,
            name: 'politik'
        },
        {
            id: 2,
            name: 'hukum'
        },
        {
            id: 3,
            name: 'ekonomi'
        },
        {
            id: 4,
            name: 'bola'
        },
        {
            id: 5,
            name: 'olahraga'
        },
        {
            id: 6,
            name: 'humaniora'
        },
        {
            id: 7,
            name: 'lifestyle'
        },
        {
            id: 8,
            name: 'hiburan'
        },
        {
            id: 9,
            name: 'dunia'
        },
        {
            id: 10,
            name: 'tekno'
        },
        {
            id: 11,
            name: 'otomotif'
        },
    ];

    const handleOnSearch = (string, results) => {
        let data = category
        data = string
        setCategory(data)
    }

    async function getNews() {
        try {
            let {data} = await axios.get(`https://api-berita-indonesia.vercel.app/antara/${category}`);
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
    },[category])

    return (
        <>
            <div className="mb-4">
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    value={category}
                    className='min-h-[2pc] w-[40%] border-2 border-sky-500 rounded p-2' 
                    placeholder='input-content'
                    showIcon={false}
                />
            </div>
            <div className='flex gap-6 justify-center md:gap-3 flex-wrap flex-row'>
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
