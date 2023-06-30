import React from "react"

function Somedone({id,goal,action2,action3}){
    console.log("Done")
    return(
        <div className="minicontainer">
            <p><span>{id}:</span> {goal}</p>
            <button onClick={()=>action2(id)} type="button">remove</button>
            <button onClick={()=>action3(id)} type="button">delete</button>
        </div>
    )
}
 export default React.memo(Somedone)