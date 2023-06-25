import  {Component} from "react";
import  Makesome  from "./todo";
import Somedone from "./done";

class Todo extends Component{
   state = {
    done:[],
    new:"",
    work: [{id:1, goal: "wake up early"}]
   }
   onChange =(event)=>{
    let value = event.target.value;
    this.setState({new:value});
   }
   addItem =(event)=>{
    event.preventDefault();

      const item = {
          id: this.state.work.length + 1,
          goal: this.state.new
       }

      this.setState({

          work:[...this.state.work, item],
          new:""
      })
   }
   shouldComponentUpdate(nextProps,nextState){
    return !(
        this.state.done === nextState.done &&
        this.state.work === nextState.work 
    );
   }
    
   complateItem = (id) =>{
     const member = this.state.work.filter((user) => user.id !== id);
     const users =  this.state.work.filter((user) => user.id === id);
     for(let i = 0;i<member.length;i++){
        member[i].id = i+1;
     }
     const change =  JSON.parse(JSON.stringify(users));
     const index= this.state.done.length +1;
     change[0].id = index;


     this.setState({
        done: this.state.done.concat(change),
        work: [...member]
     })
   }
   removeFromDone = (id) =>{
      const member1 =  this.state.done.filter((user) => user.id !== id);
      const users1 =  this.state.done.filter((user) => user.id === id);
      for(let i = 0;i<member1.length;i++){
        member1[i].id = i+1;
      }
      const change1 =  JSON.parse(JSON.stringify(users1));
      const index1= this.state.work.length +1;
      change1[0].id = index1;


      this.setState({
         work: this.state.work.concat(change1),
         done: [...member1]
      })
   }
   deleteItem = (id) =>{
       const member2 =  this.state.done.filter((user) => user.id !== id);
       const change2 =  JSON.parse(JSON.stringify(member2));
       for(let i = 0;i<change2.length;i++){
        change2[i].id = i+1;
       } 
       this.setState({
        done: [...change2]
       }) 
   }

    render(){
        return(
            <div className="container"> 
                <form onSubmit={this.addItem} className="formsection">
                    <input onChange={this.onChange} value={this.state.new} type="text"/>
                    <button type="submit">Add</button>
                </form>
                <div className="list">
                    <div className="section pendingsection">
                        <h1 className="title">Pending</h1>
                         {this.state.work.map((item) => (
                           <Makesome key={item.id}  id={item.id}  goal={item.goal} action={this.complateItem}/>
                         ))}
                    </div>
                    <div className="section donesection">
                        <h1 className="title">Complate</h1>
                         {this.state.done.map((item) => (
                           <Somedone key={item.id} id={item.id}  goal={item.goal} action2={this.removeFromDone} action3={this.deleteItem} />
                         ))}
                    </div> 
                </div>      
            </div>
        )
    }
}

export default Todo