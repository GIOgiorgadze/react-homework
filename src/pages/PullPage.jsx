import useFetch from "../cutumHooks/useFetch"

const PullPage = () =>{
    const {loading, response, error} = useFetch({url:"/api/v1/todo", method:"GET"});
    const todoList = (response && response.items) ? response.items.map(item => {
        return {
            name: item.Name,
            status: item.isCompleted,
            id: item._uuid
        }
    }) : []
    
    if(loading){
       return <p>Loading...</p>
    }

    if(error) return {error}

    return(
        <div>
            {todoList.map(user => <div key={user.id} style={{border: "2px solid black"}}>
                <h3>{user.name}</h3>
                <h3>{user.status}</h3>
            </div>)}
        </div>
    )

}
export default PullPage   