import React from 'react';
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>       
            <Navbar />
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get you daily dose of technology on Cyclonnus</h1>
                        <p className="mb-8 leading-relaxed">Learn new tech-related concepts everyday on Cyclonus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia excepturi reprehenderit nisi magni, corrupti necessitatibus autem provident labore molestiae omnis commodi, dolorem ipsum ea. Quae dolorum molestiae voluptates sunt?</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><Link to='/all-posts'>View All Posts</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home