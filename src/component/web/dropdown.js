import React, { useState } from 'react';
import { MenuItems } from "./Menuitems";
import './dropdown.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Dropdown(item) {
  const [click, setClick] = useState(false);
  const [log,setlog]=useState(false);

  const handleClick = async(item) => {
    console.log(item)
    
    setlog(true);
    console.log(log);
    setClick(!click);
    

  Axios.defaults.withCredentials = true;
  console.log("hahahahah")
    
      const logg=await Axios.post("http://localhost:3001/api/products/recent",{
        rec:item,
        
      });
      

  }

  const [row,setRow]=useState([]);
  const fun = async () =>{
      try{
        const res =await Axios.get("http://localhost:3001/api/products/categories");
        console.log(res.data);
       
       
        setRow(res.data);
        {console.log(res.data)}
       
        
       
      
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
          {console.log(item.category)}
          return (
            <li key={index}>
              <Link
                className="dropdown-link"
                to={'/categories'}
                onClick={()=>handleClick(item.category)}
              >
                { log && window.location.reload(false)}
                {item.category}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
