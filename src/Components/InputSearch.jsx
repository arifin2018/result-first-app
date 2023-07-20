import React, { useEffect, useContext, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import NewsContext from './context/news-context'

export default function InputSearch(params) {
    const [items, setItem] = useState([])
    const ctx = useContext(NewsContext)
    console.log(typeof params.items === 'undefined');

    useEffect(()=>{
        function paramsItem() {
            if (typeof params.items === 'undefined') {
                for (const item of ctx.items) {
                    setItem(function(data){
                        return [...data,{name:item}]
                    });
                }
            }else{
                for (const item of params.items) {
                    setItem(function(data){
                        return [...data,{name:item}]
                    });
                }
            }
        }
        paramsItem()
    },[])

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
