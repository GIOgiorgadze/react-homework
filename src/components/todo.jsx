import React from "react"

function Makesome({ id, goal, action }){
        console.log("Todo!")
        return(
            <div className="minicontainer">
                <p><span>{id}:</span> {goal}</p>
                <button onClick={()=> action(id)} type="button">push</button>
            </div>
        )
    
}
export default React.memo(Makesome)


