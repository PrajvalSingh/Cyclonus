import React from 'react';
import Home from './Home.jsx'
import AllPosts from './AllPosts.jsx';
import Contact from './Contact.jsx';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/all-posts' element={<AllPosts />}/>
                    <Route path='/contact' element={<Contact />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App