import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

let user_data = [
    { id: 1, name: "adam", age: 10 },
    { id: 2, name: "smith", age: 20 },
    { id: 3, name: "jacob", age: 30 },
    { id: 4, name: "joseph", age: 40 },
    { id: 5, name: "bejamin", age: 50 }]



const UserInfo = () => {
    let [useObj, setUserObj] = useState("");

    let { x } = useParams();//useParams return an object 

    useEffect(() => {
        let arr = user_data.filter((obj) => obj.id == x)//can't use ===
        let user_obj = arr[0];
        console.log(user_obj)
        setUserObj(user_obj)
    }, [])
    return (
        <div>
            <h1 style={{ color: "red" }}>UserInfo Page, user {x}</h1>
            {
                useObj && (
                    <div style={{border:"2px solid red",padding:"20px",width:"10%",textAlign:"center"}}>
                        <h1>{useObj.id}</h1>
                        <h1>{useObj.name}</h1>
                        <h1>{useObj.age}</h1>
                    </div>
                )
            }

        </div>
    )
}

export default UserInfo