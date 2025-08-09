import { useState, useEffect } from 'react'

const PostForm = ({ onAddPost, onUpdatePost, editingPost, onCancelEdit }) => {
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    useEffect(() => {
        if(editingPost) {
            setTitle(editingPost.title || '')
            setBody(editingPost.body || '')
        } else {
            setTitle('')
            setBody('')
        }
    }, [editingPost])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (title.trim() === '' || body.trim === '') {
            alert('No puedes dejar campos vacios');
            return;
        }

        if (editingPost) {
            //update
            onUpdatePost({ ...editingPost, title, body })
        } else {
            // create
            onAddPost({ id: Date.now(), title, body })
        }

        const newPost = {
            id: Date.now(),
            title,
            body 
        }

        onAddPost(newPost);

        setTitle('');
        setBody('');

    }

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Crear nuevo post</h2>

                <input 
                    type="text"
                    placeholder='Titulo'
                    className="w-full mb-2 p-2 border rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                 />

                <textarea 
                    placeholder='Contenido'
                    className="w-full mb-2 p-2 border rounded"
                    value={body}
                    rows={4}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    > {editingPost ? 'Save changes' : 'Publish'} 
                </button>

                {editingPost && (
                <button
                    type="button"
                    onClick={onCancelEdit}
                    className="px-4 py-2 rounded border hover:bg-gray-50"
                >
                    Cancelar
                </button>
                )}

        </form>
    )
}

export default PostForm
