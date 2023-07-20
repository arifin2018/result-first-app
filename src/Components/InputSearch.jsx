import React, { useEffect, useContext, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import NewsContext from './context/news-context'

export default function InputSearch(params) {
    const [items, setItem] = useState([])
    const ctx = useContext(NewsContext)
    
    useEffect(()=>{
        function paramsItem() {
            for (const item of ctx.items) {
                // items.push({name:item})
                setItem(function(data){
                    return [...data,{name:item}]
                });
            }
        }
        paramsItem()
    },[])
    console.log(items);

    return (
        <div className="mb-4">
            <ReactSearchAutocomplete
                items={items}
                onSearch={params.onSearch}
                value={params.value}
                className='min-h-[2pc] w-[40%] border-2 border-sky-500 rounded p-2' 
                placeholder='input-content'
                showIcon={false}
                options={items}
            />
        </div>
    )
}
