import React from 'react';
import ReactHtmlParser from 'react-html-parser'

const Post = ({ title, content, date, author }) => {
    return (
        <>

            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 m-auto mt-6 mx-8 mb-4" style={{ width: "150vh" }}>
                <div className="w-full block h-full">
                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            {title}
                        </p>
                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                            <pre>
                                {ReactHtmlParser(content)}
                            </pre>
                        </p>
                        <div className="flex items-center mt-4">
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                    Written by {author}
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    {date}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Post