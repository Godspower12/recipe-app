import React, { useState } from "react";

interface CommentSectionProps {
  comments: string[];
  onAddComment: (comment: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  onAddComment,
}) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    onAddComment(newComment);
    setNewComment("");
  };

  return (
    <div>
      <h2>Comments</h2>
      <div>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};
export default CommentSection;
