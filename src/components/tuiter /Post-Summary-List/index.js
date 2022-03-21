import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json"
const PostSummaryList = () => {
    return (
            <ul class="list-group mt-0">
            {posts.map(post => {
                return (
                    <PostSummaryItem post={post}/>
                );
    })
    }
            
            </ul>
); }
export default PostSummaryList;
