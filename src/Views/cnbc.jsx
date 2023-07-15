import React, { useContext } from 'react'
import { MyContext } from '../Components/context';
import Card from '../Components/card';
// import { IndexProvider, MyContext } from '../Components/Context/index.jsx'


function Cnbc() {
    const {user, news} = useContext(MyContext)
    return (
        <div className='flex gap-3 flex-wrap flex-row'>
            {
                news?.data?.posts.map((users,index)=>(
                    <Card img={users.thumbnail ?? ''} title={users.title ?? ''} body={users.description ?? ''} key={index} detail={users.link}/>
                ))
            }
        </div>
    )
}

export default Cnbc