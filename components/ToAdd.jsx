import { useState } from "react"




export default function ClicktoAdd(prompt) {

    const [render , setRender] = useState("")
    // const [up , setUp] = useState("")

    return(
        <>

        {/* <input onKeyDown={(e) => {
            let a = e.key
            console.log(up +a)
            setUp(up +a)
        }}/> */}
            <div >
                <h1>{render}</h1>
            <input id="input" value={render} onChange={(e) => {
                let a = e.target.value
                console.log(a)
                setRender(a)
                let b = e.key
                console.log(b)
                
            }} />
            <button onClick={() => {
                prompt.handle(render)
                
                console.log(render)
                setRender("")
                
            }} >click</button>
            
            </div>
        </>
    )
}