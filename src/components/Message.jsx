export default function Message(){
    function change(){
        console.log("Clicked")
    }

    return  (
    <div>
        <button onClick={change}>Click me</button>
    </div> )

}