import Fruit from "./Fruit";

export default function Fruits(){
const fruits=[
    {name:"apple",price:2,soldout:false},
    {name:"banana",price:20,soldout:true},
    {name:"orange",price:22,soldout:false},
    {name:"cake",price:10,soldout:true},
]
return(
    <div>
     <ul>
        {fruits.map((fruit)=>(
         <Fruit key={fruit.name} name={fruit.name} price={fruit.price} soldout={fruit.soldout}/> 
        ))} 
     </ul>



    </div>
);







}