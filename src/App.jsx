import { useState } from "react";
import ClicktoAdd from "../components/clickToAdd";
import RenderItem from "../components/renderItem";
import Selector from "../components/select";



export function App() {
  
  const [list , setList] = useState([])
  const [check , setCheck] = useState("All")
  

  let state = (title) => {
    let newMap = list.map((e) => {
      if( e.title === title ) {
       return {
          title: e.title,
          status: !e.status,
        }
      }
      return e;
    })
    setList(newMap)
    
  }
  const renderListAll = list.filter((e) => {
    
    if(check === "done"){
     return e.status = true;
    }else if(check === "todo") {
      return e.status = false;
      
    }
    
    else if (check === "All") {
      return true;
    }
    
  })

    return(
      <div style={{ display: "flex", justifyContent: " center", alignContent: "center", flexDirection: "column" , marginTop: "200px" , flexWrap: "wrap" }}>


        <ClicktoAdd handle = {(e) => {
          setList([
            ...list,
            {
              title: e ,
              status: false ,
            }
          ])
        }}/>


        <Selector setCheck = {setCheck} check= {check}/>
        

        {renderListAll.map((e) => {
          
          return <RenderItem title = {e.title} status = {e.status} state = {state} />
        })}
        
          
        
        
      </div>
    )
  }