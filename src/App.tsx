import PostList from "./widgets/PostList/PostList";
import PostCard from "./entities/post/ui/PostCard";
import "./App.css";

function App() {

	return (
		<>
			<h1>homevork-1</h1>
			<PostList>
        <PostCard name="post 1" text="text 1"></PostCard>
        <PostCard name="post 2" text="text 2"></PostCard>
        <PostCard name="post 3" text="text 3"></PostCard>
      </PostList>
		</>
	);
}

export default App;
