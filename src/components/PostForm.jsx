import React from 'react'

const PostForm = ({onAddPost}) => {
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
    }

    return (
        <form onSubmit={handleSubmit}>

        </form>
    )
}

export default PostForm
