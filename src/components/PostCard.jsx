import React from 'react'

const PostCard = ({ title, body, onEdit }) => {
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
        )
        }

    </div>
  )
}

export default PostCard
