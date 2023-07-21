import FormField from "../components/formField";
import useRequest from "../cutumHooks/useRequest";

const RequestPage =()=>{

   const { uploadData, loading } = useRequest("/api/v1/todo","POST")

   const onSubmit =(Name,isCompleted) =>{        
       uploadData([{Name,isCompleted}])
   }

   if(loading){
      return <p>Loading...</p>
   }
    
   return (
       <FormField onFormSubmit={onSubmit}/> 
   );
}

export default RequestPage