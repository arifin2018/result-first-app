import React, { useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export default function InputSearch(params) {
    let items = []
    
    function paramsItem() {
        // for (const item of params.items) {
        //     items.push({name:item})
        // }
        // params.items.forEach(element => {
        //     items.push(element)
        // });
        for (let index = 0; index < 5; index++) {
            items.push(index)
        }
    }

    useEffect(()=>{
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
