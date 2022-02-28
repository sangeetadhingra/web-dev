const PostSummaryItem = (post) => {
    return(`<li class="list-group-item">
                    <div class="row">
                        <div class="col-9">
                            <span style="color:slategrey">${post.topic} </span></br>
                            <b>${post.userName}</b><i class="fa icon-white fa-circle"></i> - <span style="color:slategrey">${post.time} </span> </br>
                            <p class="mb-0"><b>${post.title}</b></p>
                            <div style="color:slategrey">${post.tweets} </div></br>
                        </div>
                        <div class="col-1"></div>
                        <div class="col-2" style="text-align:center;">

                            <img src=${post.image} class="card-pic rounded img-fluid">
                        </div>
                    </div>
                </li>`)
}

export default PostSummaryItem;