import React, { useEffect, useState } from 'react'
import Card from '../Components/card'
import axios from 'axios'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export default function News() {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('terbaru')
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
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        let data = category
        data = string
        setCategory(data)
    }

    async function getNews() {
        try {
            let {data} = await axios.get(`https://api-berita-indonesia.vercel.app/antara/${category}`);
            setNews(data)
        } catch (error) {
            console.log(error);
        }
    }

    function stateCategory(e) {
        
        
    }


    
    useEffect(()=>{
        getNews()
         // eslint-disable-next-line
    },[news,category])

    return (
        <>
            <div className="py-4">
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    value={category}
                    className='min-h-[2pc] w-[40%] border-2 border-sky-500 rounded p-2' 
                    placeholder='input-stasiun'
                    showIcon={false}
                />
            </div>
            <div className='flex gap-3 flex-wrap flex-row'>
                {
                    news.data?.posts.map((news, index)=>(
                        <Card img={news.thumbnail ?? ''} title={news.title ?? ''} body={news.description ?? ''} key={index} detail={news.link}/>
                    ))
                }
            </div>
            
            
        </>
    )
}
