const Post = ({ data }) => {
    return (
        <div className="post">
            <div>
                <img src={data.image} />
            </div>
            <div className="info">
                <p className="titlas">{data.title}</p>
                <p className="categor">{data.category}</p>
                <p className="contenta">{data.content}</p>
            </div>
            <div className="bio d-flex">
                <img src={data.authorimage} className="autor" />
                <div className="biotwo">
                    <p>{data.role}</p>
                    <span>{data.author}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;