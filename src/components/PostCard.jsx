import React from 'react'

const PostCard = ({ title, body, onEdit, onDeletePost }) => {
  return (
    <div className="border rounded shadow mb-4 px-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{body}</p>

        {onEdit && (
          <button
            onClick={onEdit}
            className="text-sm px-3 py-1 border rounded hover:bg-gray-50"
          >
            Edit
          </button>
        )}

        <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={onDeletePost}
        > 
            Delete
        </button>
    </div>
  )
}

export default PostCard
