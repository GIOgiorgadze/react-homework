function Makesome({ id, goal, action }){

        return(
            <div className="minicontainer">
                <p><span>{id}:</span> {goal}</p>
                <button onClick={()=> action(id)} type="button">push</button>
            </div>
        )
    
}
export default Makesome


