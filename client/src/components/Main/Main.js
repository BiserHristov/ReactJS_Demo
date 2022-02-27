import Post from '../Post';
import './Main.css'

const Main = ({ posts }) => {
    return (
        <main className="main-container">
            <h1>Soooooome heading</h1>
            <div className="posts">
                {posts.map(p =>
                    <Post
                        key={p.id}
                        content={p.content}
                        author={p.author}
                    />

                )}
            </div>
        </main>

    )
}
export default Main