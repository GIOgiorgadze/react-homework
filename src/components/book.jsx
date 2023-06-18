
const Book = (props) =>{
    return(
        <div className="wrapper">
            <h1 className="title">{props.name}</h1>
            <div className="imgwrapp">
               <img className="iMg" src={props.image} alt={props.name}/>
            </div>   
            <p className="text">{props.description}</p>
            <button onClick={()=>props.action(props.name)} className="btn">Button</button>
        </div>
    )
}

export default Book;