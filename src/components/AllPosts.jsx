import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx'
import Post from './Post.jsx';
import axios from 'axios';
import { HashLoader } from 'react-spinners';

const AllPosts = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const api = axios.create({
        baseURL: "https://cyclonus-blog-manager.herokuapp.com/api/posts"
    })

    useEffect(() => {
        api.get('/')
            .then((res) => {
                setData(res.data)
                setIsLoaded(true)
            })
            .catch((err) => {
                setError(err)
                console.log(err)
            })
    })


    if (error) {
        return <h1>Error: {error.message}</h1>
    } else if (!isLoaded) {
        return (
            <>
                <Navbar />
                <div className="grid justify-items-center items-center h-screen">
                    <HashLoader size={50} color="blue" />
                </div>
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                {data.map((post) => {
                    return (
                        <div key={post.sno}>
                            <Post title={post.title} content={post.content} date={post.date} author={post.author} />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default AllPosts