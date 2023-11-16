export default function RenderItem(prompt) {
    return (
        <div>
            <input  type="checkbox" checked= {prompt.status} onClick={() => {
                prompt.state(prompt.title)
            }}/>
            <h2 style={{display:"inline-block",}}>{prompt.title}</h2>
        </div>
    )
}