function Somedone({id,goal,action2,action3}){
    return(
        <div className="minicontainer">
            <p><span>{id}:</span> {goal}</p>
            <button onClick={()=>action2(id)} type="button">remove</button>
            <button onClick={()=>action3(id)} type="button">delete</button>
        </div>
    )
}
 export default Somedone