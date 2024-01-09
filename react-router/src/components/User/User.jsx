import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid} = useParams()
    return (<div className="text-center bg-gray-500 p-4 text-white">User: {userid}</div>)
}