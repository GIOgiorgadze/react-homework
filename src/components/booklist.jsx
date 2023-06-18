import Book from "./book";
import dracula from "../asserts/drakula.jpg";
import sheep from "../asserts/cxvarze nadiroba.jpg";
import shota from "../asserts/vepxistyaosani.jpg";
import monteCristo from "../asserts/graff monte cristo.jpg";
import wolf from "../asserts/tramalis-mgeli.jpg";
import gun from "../asserts/mshvidobi-iarago.webp";

let data = [
    {id:1,name:"Dracula",image:dracula,story:"This is book about mistery and love,houstage of main person."},
    {id:2,name:"Hunting on a sheep",image:sheep,story:"this is book about about ordinari life that becomes missery"},
    {id:3,name:"Knight in the phanter skin",image:shota,story:"History heritage of Georgia,literally first Georgian poem"},
    {id:4,name:"Graff Monte-Cristo",image:monteCristo,story:"Book about love,glory and revenge"},
    {id:5,name:"Steppenwolf",image:wolf,story:"this is book about lack of ideals,idols about man who lost life colors"},
    {id:6,name:"A Farewell to Arms",image:gun,story:"this is about war and its consequences"}
]

function Displaybook(){
    function clicker(fs){
        console.log(`this is ${fs}`)
    }
    return(
        <div className="main">
            {data.map((examp) => <Book key={examp.id} name={examp.name} image={examp.image} description={examp.story} action={clicker}/>)}
        </div>
    )
}

export default Displaybook