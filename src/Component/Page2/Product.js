import React from 'react'
import "./product.css"
import { Outlet, useNavigate } from 'react-router-dom'//outlet is a component h , parent routes k childeren show honge jaha Outlet component call karoge



const Product = () => {
  let navigate = useNavigate();

  return (
    <h1 className='prod'>
          <h1> This is Product Page</h1>
          <button onClick={() => navigate("")}>Default</button>
          <button onClick={() => navigate("apple")}>apple</button>
          <button onClick={() => navigate("nokia")}>nokia</button>
          <button onClick={() => navigate("samsung")}>samsung</button>
          {/* <button onClick={()=>navigate("/") }>Product</button>//loclahost */}

          <Outlet />
    </h1>
  )
}

export default Product