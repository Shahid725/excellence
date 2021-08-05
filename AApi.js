import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Datafetching() {
    const [posts, setposts] = useState([])

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2")
            .then(res => {
                // console.log(res.data.data)
                setposts(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })

    })

    return (
        <div>
            <ul>
                <button>Page1</button>
                <button>page2</button>
                {posts.map(id => (
                    <>

                        <li key={id.name}>{id.first_name}.{id.last_name} // Email :{id.email},

                            Image(avatar): {id.avatar}

                        </li>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default Datafetching

