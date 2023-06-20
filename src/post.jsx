import React from "react";

export function Post(Props) {
 return (
    <>
      <strong>{Props.author}</strong>
      <p>{Props.content}</p>
    </>
 );
}

// export default Post;