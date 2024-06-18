import React, { useEffect, useState } from 'react'
import Cards from "./cards";
import {Link} from "react-router-dom"
import axios from "axios";

function Course() {
    
    const[book,setBook] = useState([])
    useEffect(()=>{
        const getBook = async ()=>{
            try {
               const res = await axios.get("http://localhost:3000/book");
               console.log(res.data)
               setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">We're delighted to have you {" "}<span className="text-pink-500">here!:)</span></h1>
                    <p className="mt-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque velit ab dolorem veniam nulla nihil cupiditate error, ad recusandae harum perferendis, cum numquam vitae iste voluptatibus perspiciatis vel porro!
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-400 text-white rounded-md px-2 py-1 hover:bg-pink-700 duration-300">Back</button>
                    </Link>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-4">
                    {book.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Course
