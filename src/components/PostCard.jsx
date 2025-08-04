import React from 'react'

const PostCard = ({ title, body }) => {
  return (
    <div className="border rounded shadow mb-4 px-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{body}</p>
    </div>
  )
}

export default PostCard
