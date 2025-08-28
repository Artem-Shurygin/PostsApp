import React from "react";

function PostCard({ name, text }: any) {
	return (
		<div style={{ border: "1px solid black", marginTop: "50px"}}>
			<p>{name}</p>
			<p>{text}</p>
		</div>
	);
}

export default PostCard;
