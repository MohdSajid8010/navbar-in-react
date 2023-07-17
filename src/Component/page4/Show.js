import React from 'react'


let react_arr = [
    { id: 1, name: "useState", type: "live" },
    { id: 2, name: "useEffect", type: "recorder" },
    { id: 3, name: "useParams", type: "live" },
    { id: 4, name: "useContext", type: "recorded" },
    { id: 5, name: "useNavigate", type: "live" },
    { id: 6, name: "useRef", type: "recorded" },
]

const Show = () => {
    return (
        <div>
            <h1>Show</h1>
            {
                react_arr.map((obj) => {
                    return (
                        <div style={{ border: "3px solid blue", margin: "20px", padding: "20px" }}>
                            <h1>{obj.id}</h1>
                            <h1>{obj.name}</h1>
                            {/* {obj.type == "live" ? (<h2 style={{ color: "red" }}>{obj.type}</h2>) : (<h2 style={{ color: "green" }}>{obj.type}</h2>)} */}
                            <h2 style={{ color: obj.type === "live" ?"red":"green" }}>{obj.type}</h2>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Show