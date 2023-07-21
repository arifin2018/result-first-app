import React, { useEffect, useContext, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import NewsContext from './context/news-context'
import { useRecoilState } from 'recoil'
import { categoryState } from './context/recoil'

export default function InputSearch(params) {
    const [items, setItem] = useState([])
    const ctx = useContext(NewsContext)
    const [_, setCategories] = useRecoilState(categoryState)

    function paramsItem() {
        if (typeof params.items === 'undefined') {
            ctx.items.forEach((item,index) => {
                setItem(function(data){
                    return [...data,{id:index,name:item}]
                });
            });
        }else{
            params.items.forEach((item,index) => {
                setItem(function(data){
                    return [...data,{id:index,name:item}]
                });
            });
        }
    }
    

    useEffect(()=>{
        setCategories(params.value)
        // eslint-disable-next-line
    },[params.value])

    useEffect(()=>{
        paramsItem()
        // eslint-disable-next-line
    },[])

    return (
        <div className="mb-4">
            <ReactSearchAutocomplete
                items={items}
                onSearch={params.onSearch}
                value={params.value}
                className='min-h-[2pc] w-[85%] border-2 border-sky-500 rounded p-2 md:w-[40%]' 
                placeholder='input-content'
                showIcon={false}
                options={items}
            />
        </div>
    )
}
