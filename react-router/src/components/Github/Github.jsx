import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/PriyalG28')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])


    return (<div className="text-center m-4 bg-gray-600 text-white p-4 text-4xl">Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}></img></div>)
}


// export const githubInfoLoader = async () => {
//     const responseawait = await fetch("https://api.github.com/users/PriyalG28")
//     return responseawait.json()
// } 