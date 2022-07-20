import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import React,{useState} from 'react';

const baseurl= "https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs";

const AddBlog = () => {


    const[data,setData] = useState({
        title : "",
        description : "",
        author : "",
        reading_time : ""
    })

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
     }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Soham")
        console.log(data)
        
        axios.post(baseurl,
            data,{
                    headers : {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
                        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
                    }
            }
        ).then(console.log("Hi")) 

    }
          


return(
    <Form>
            <input onChange={(e) => handle(e)} id = "title" value={data.title} placeholder = "Title" type="text"></input>
            <input onChange={(e) => handle(e)} id = "description" value={data.description} placeholder = "Description" type="text"></input>
            <input onChange={(e) => handle(e)} id = "author" value={data.author} placeholder = "Author" type="text"></input>
            <input onChange={(e) => handle(e)} id = "reading_time" value={data.reading_time} placeholder = "Reading_time" type="text"></input>
            <button onClick={handleSubmit}>Submit</button>         

    </Form>
)
}

export default AddBlog