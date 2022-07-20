import { useState, useEffect } from "react"
import axios from 'axios';

const baseURL = 'https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs?select=*'

const Blogs = () => {
    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(baseURL, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
            }
        }).then((response) => {
            setBlogs(response.data)
            setLoading(false)
            console.log('data', response)
        });
    }, [])

    return (
        <div className="container">
            {
                loading ? <h1>Loading...</h1> :
                <div class="row row-cols-1 row-cols-md-2 g-4">
                        {
                            blogs.map((blog, index) => {
                                return <div className="col">
                                <div className="card">
                                  
                                  <div className="card-body">
                                    <h3>{index+1}</h3>
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.description}</p>
                                  </div>
                                </div>
                              </div>
                                

                               

                              
                            })
                        }
                    </div>
            }

        </div>
        
        
    ) 
}

export default Blogs