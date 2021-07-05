import React, {useState, useEffect} from 'react';
import './Final_space.css';
import axios from 'axios';
const Final_space = () => {
    const [posts,setPosts]=useState([]);
    useEffect(
        () => {
            axios.get('https://finalspaceapi.com/api/v0/character/')
            .then(
                res =>{
                    setPosts(res.data)
                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
        }
    )

    return (
        <div className="charcters">
            <h1>Final-Space</h1>
            <ul>{posts.map(post => <div class="items"><div class="name" id={post.id}>{post.name}</div>
                <div id={post.id}>{post.gender}</div>
                <img src={post.img_url} alt={post.name}></img>
                </div>)}</ul>

        </div>
    )
}
export default Final_space;