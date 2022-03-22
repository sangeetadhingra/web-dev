const PostSummaryItem = ( {
    post = {
        topic: 'Web Development',
        userName: 'ReactJS',
        time: '2h',
        title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207' ,

    }
}) => {
    return(<>
    <li className="list-group-item">
                    <div className="row">
                        <div className="col-9">
                            <span style={{"color":"slategrey"}}>{post.topic} </span> <br></br>
                            <b>{post.userName}</b><i className="fa icon-white fa-circle"></i> - <span style={{"color":"slategrey"}}>${post.time} </span>  <br></br>
                            <p className="mb-0"><b>{post.title}</b></p>
                            <div style={{"color":"slategrey"}}>{post.tweets} </div><br></br>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2" style={{"textAlign":"center"}}>
                            {/* eslint-disable-next-line */}
                            <img src={post.image} className="card-pic rounded img-fluid"/>
                        </div>
                    </div>
                </li>
</> );
}

export default PostSummaryItem;