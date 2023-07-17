import React from 'react'
import { useSearchParams } from 'react-router-dom';

let react_arr = [
    { id: 1, name: "useState", type: "live" },
    { id: 2, name: "useEffect", type: "recorded" },
    { id: 3, name: "useParams", type: "live" },
    { id: 4, name: "useContext", type: "recorded" },
    { id: 5, name: "useNavigate", type: "live" },
    { id: 6, name: "useRef", type: "recorded" },
]

const Show2 = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("show"))
    let status = (searchParams.get("show"))//show key k corresponding value return karega
    let filter_arr = react_arr.filter((obj) => obj.type == status)

    return (
        <div>
            <h1>Show2</h1>
            <button onClick={() => setSearchParams({ show: "live" })}>live</button>
            <button onClick={() => setSearchParams({ show: "recorded" })}>recorder</button>

            {
                filter_arr.map((obj) => {
                    return (
                        <div style={{ border: "3px solid blue", margin: "20px", padding: "20px" }}
                            key={obj.id}>

                            <h1>{obj.id}</h1>
                            <h1>{obj.name}</h1>
                            {/* {obj.type == "live" ? (<h2 style={{ color: "red" }}>{obj.type}</h2>) : (<h2 style={{ color: "green" }}>{obj.type}</h2>)} */}
                            <h2 style={{ color: obj.type === "live" ? "red" : "green" }}>{obj.type}</h2>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Show2