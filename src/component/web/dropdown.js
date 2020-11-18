import React, { useState } from 'react';
import { MenuItems } from "./Menuitems";
import './dropdown.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Dropdown(item) {
  const [click, setClick] = useState(false);

  const handleClick = async(item) => {
    console.log(item)
    try{
      const logg=await Axios.post("http://localhost:3001/api/products/recent",{
        rec:item,
        
      });
      console.log(logg.data);

    }
    catch{
  
    }
       setClick(!click);
       window.location.reload(false);
  
    Axios.defaults.withCredentials = true;
    console.log("hahahahah")
  }

  const [row,setRow]=useState([]);
  const fun = async () =>{
      try{
        const res =await Axios.get("http://localhost:3001/api/products/categories");
        console.log(res.data);
       
       
        setRow(res.data);
       
        
       
      
    }
      catch(err)
      {
  
      }
    }
    if(row.length===0 ){
        
      fun();
      console.log("1")
      
  }

  return (
    <>
      <ul
        onClick={()=>setClick(false)}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {row.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="dropdown-link"
                to={'/categories'}
                onClick={()=>handleClick(item.CATEGORY)}
              >
                {/* {console.log(item.CATEGORY)} */}
                {item.CATEGORY}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
