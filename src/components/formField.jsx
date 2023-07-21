import { useRef } from "react"

const FormField = ({onFormSubmit}) => {
    const Name = useRef()
    const isCompleted = useRef()

    const onSubmit = (e) =>{
        e.preventDefault();
        onFormSubmit(Name.current.value,isCompleted.current.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <input ref={Name} type="text" placeholder="name"/>
            <input ref={isCompleted} type="text"placeholder="status"/>
            <button type="submit">Click</button>
        </form>
    )
}

export default FormField