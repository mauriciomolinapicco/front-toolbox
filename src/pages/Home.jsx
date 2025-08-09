import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm';

function Home() {
    const [ posts, setPosts ] = useState([]);
    const [ editingPost, setEditingPost] = useState(null); //el post que se va a editar

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const handleAddPost = (newPost) => {
        alert(newPost.title)
        //a esta funcion la mandamos como prop al componente de form para nuevo post
        setPosts([newPost, ...posts]) //append del nuevo post a la lista
    }

    const handleStartEdit = (post) => {
        setEditingPost(post);
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }

    const handleUpdatePost = (updated) => {
        setPosts(prev => prev.map(p => (p.id === updated.id ? { ...p, ...updated} : setEditingPost(null))))
    }

    const handleCancelEdit = () => setEditingPost(null)

    return (
        <div className="max-w-2xl mx-auto mt-8">
        <Navbar />
        <Hero />
        <PostForm 
            onAddPost={handleAddPost} 
            onUpdatePost={handleUpdatePost}
            editingPost={editingPost}
            onCancelEdit={handleCancelEdit}

        />
        
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        {posts.map(post => (
            <PostCard 
                key={post.id} 
                title={post.title} 
                body={post.body} 
                onEdit={() => handleStartEdit(post)}
            />
        ))}
        </div>
        
    )
}

export default Home

