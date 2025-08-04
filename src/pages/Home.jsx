import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'

function Home() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const handleAddPost = (newPost) => {
        //a esta funcion la mandamos como prop al componente de form para nuevo post
        setPosts([newPost, ...post]) //append del nuevo post a la lista
    }

    return (
        <div className="max-w-2xl mx-auto mt-8">
        <Navbar />
        <Hero />
        
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        {posts.map(post => (
            <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
        </div>
        
    )
}

export default Home
