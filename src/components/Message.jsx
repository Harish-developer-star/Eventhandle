export default function Message(){
    function change(){
        console.log("hi")
    }

    return  (
    <div>
        <button onClick={change}>Click me</button>
    </div> )

}