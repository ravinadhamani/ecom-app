import React from 'react'
import styles from "./styles.module.css"
import background from "../imgs/home.jpg";


function Home() {
  return (
    <div id="homeComp" >
      <div style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:800,width:1263
    }}>
      
      </div>
    </div>
  )
}

export default Home