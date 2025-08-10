import { useState, useEffect, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm';

function Home() {
    const [ posts, setPosts ] = useState([]);
    const [ editingPost, setEditingPost] = useState(null); //el post que se va a editar
    const [ search, setSearch ] = useState('')

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return posts;
        return posts.filter(p => 
            p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
        )
    }, [ posts, search ])

    const handleAddPost = (newPost) => {
        alert(newPost.title)
        //a esta funcion la mandamos como prop al componente de form para nuevo post
        setPosts([newPost, ...posts]) //append del nuevo post a la lista
    }

    const handleStartEdit = (post) => {
        setEditingPost(post);
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }

    const handleDeletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        console.log(post)
        // setFiltered(filtered.filter(p => p.id !== post.id))
    }

    const handleUpdatePost = (updated) => {
        setPosts(prev => prev.map(p => (p.id === updated.id ? { ...p, ...updated} : setEditingPost(null))))
    }

    const handleCancelEdit = () => setEditingPost(null);

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

        <input 
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='Search for content or title'
            className="w-full p-2 border rounded"
        />
        
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        {filtered.length === 0 && (
            <p className="text-sm text-gray-500">No hay resultados para “{search}”.</p>
        )}
      {filtered.map(post => (
        <PostCard 
            key={post.id} 
            title={post.title} 
            body={post.body} 
            onDeletePost={handleDeletePost}
            onEdit={handleStartEdit}
        />
      ))}        
      
      </div>
        
    )
}

export default Home

