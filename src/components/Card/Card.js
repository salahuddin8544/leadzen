import React, { useEffect, useState } from 'react';
import CardItem from '../CardItem';
import './Card.css'
const Card = () => {
    const [services,setServices] = useState([])
    const [count,setCount] = useState(0)
    const [page,setPage] = useState(0);
    const [size,setSize] = useState(3);
    useEffect(()=>{
        const url = (`http://localhost:5000/services?page=${page}&size=${size}`);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setCount(data.count);
            setServices(data.services)
        })
    },[page,size])
    console.log(page,count);
    const pages = Math.ceil(count/size)
    return (
        <div className='bg-slate-400 py-3'>
            {
                services.map(service=> <CardItem
                key={service.id}
                service = {service}
                ></CardItem>)
            }
            <div className='pagination'>
                {
                    [...Array(pages).keys()].map(number=> <button className={page === number && 'selected' }
                    key={number}

                    onClick={()=> setPage(number)}
                   
                    >
                        {number}
                    </button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Card;