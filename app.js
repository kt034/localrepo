const Comment = ({ text, likes }) => (
    <div className="comment">
        <p>{text}</p>
        <button>{likes} Likes</button>
    </div>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newComment: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ newComment: event.target.value });
    };

    handleAddComment = () => {
        if (this.state.newComment.trim() !== '') {
            const newComments = [...this.state.comments, { text: this.state.newComment, likes: 0 }];
            this.setState({ comments: newComments, newComment: '' });
        }
    };

    render() {
        return (
            <div>
                <h1>Anonymous Discussion Forum</h1>
                <div>
                    <textarea
                        rows="4"
                        cols="50"
                        value={this.state.newComment}
                        onChange={this.handleInputChange}
                        placeholder="Type your comment..."
                    ></textarea>
                    <br />
                    <button onClick={this.handleAddComment}>Add Comment</button>
                </div>
                <div>
                    {this.state.comments.map((comment, index) => (
                        <Comment key={index} text={comment.text} likes={comment.likes} />
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
