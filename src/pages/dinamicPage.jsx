import { useParams } from "react-router-dom";

const data = [
    {id: 1, text:"capitan America's shield is powerfull"},
    {id: 2, text:"capitan America is 98 old"},
    {id: 3, text:"capitan America dont have siblings"}
];

const DinamicPage =() =>{
    const param = useParams();

    const news = data.find(element => element.id == param.id);

    if(!news){
        return <div>information not found</div>
    }

    return(
        <div>
            <h1>News</h1>
            <p>{news.text}</p>
        </div>
    )
}

export default DinamicPage