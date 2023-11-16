import { useState } from "react"

export default function ClicktoAdd(prompt) {

    const [render , setRender] = useState("")

    return(
        <>
            <div >
                <h1>{render}</h1>
            <input value={render} onChange={(e) => {
                let a = e.target.value
                setRender(a)
                let b = e.key
                console.log(b)
            }} />
            <button onClick={(e) => {
                e.preventDefault()
                prompt.handle(render)
                console.log(render)
                setRender("")
            }} >click</button>
            </div>
        </>
    )
}