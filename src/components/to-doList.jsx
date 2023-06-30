import  Makesome  from "./todo";
import Somedone from "./done";
import { useCallback, useEffect, useRef, useState } from "react";

const Todo = () => {

    const [done , setDone] = useState([]);
    const [news , setNews] = useState("");
    const [work , setWork] = useState([{id:1,goal:"wake up early"}]);
  
   const onChange =(event)=>{
     let value = event.target.value;
     setNews(value);
   }

   const addItem =(event)=>{
    event.preventDefault();

       const item = {
          id: work.length + 1,
          goal: news
       }
       setWork((prev)=>[...prev,item]);
       setNews("");
   }
   const inputRef = useRef(null);

   useEffect(()=>{
    inputRef.current.focus()
   },[])

   const complateItem = useCallback((id) =>{

     const member = work.filter((user) => user.id !== id);
     const users =  work.filter((user) => user.id === id);
     for(let i = 0;i<member.length;i++){
        member[i].id = i+1;
     }
     const change =  JSON.parse(JSON.stringify(users));
     const index= done.length +1;
     change[0].id = index;

     setDone(done.concat(change));
     setWork([...member]);

    },[done,work])

    const removeFromDone = useCallback((id) =>{

      const member1 =  done.filter((user) => user.id !== id);
      const users1 =  done.filter((user) => user.id === id);
      for(let i = 0;i<member1.length;i++){
        member1[i].id = i+1;
      }
      const change1 =  JSON.parse(JSON.stringify(users1));
      const index1= work.length +1;
      change1[0].id = index1;

      setWork(work.concat(change1));
      setDone([...member1]);

    },[done,work])

   const deleteItem = useCallback((id) =>{

       const member2 =  done.filter((user) => user.id !== id);
       const change2 =  JSON.parse(JSON.stringify(member2));
       for(let i = 0;i<change2.length;i++){
        change2[i].id = i+1;
       }
       setDone([...change2]); 
 
    },[done])

    return(
            <div className="container"> 
                <form onSubmit={addItem} className="formsection">
                    <input ref={inputRef} onChange={onChange} value={news} type="text"/>
                    <button type="submit">Add</button>
                </form>
                <div className="list">
                    <div className="section pendingsection">
                        <h1 className="title">Pending</h1>
                         {work.map((item) => (
                           <Makesome key={item.id}  id={item.id}  goal={item.goal} action={complateItem}/>
                         ))}
                    </div>
                    <div className="section donesection">
                        <h1 className="title">Complate</h1>
                         {done.map((item) => (
                           <Somedone key={item.id} id={item.id}  goal={item.goal} action2={removeFromDone} action3={deleteItem} />
                         ))}
                    </div> 
                </div>      
            </div>
    )
}

export default Todo