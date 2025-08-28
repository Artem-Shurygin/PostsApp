import React from "react";

function PostList({ children }: any) {
	return (
		<>
			<h2>Список постов</h2>
			{children}
		</>
	);
}

export default PostList;
