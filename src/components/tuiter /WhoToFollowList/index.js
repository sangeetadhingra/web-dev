import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem"
import who from "./who.json"
const WhoToFollowList = () => {
    return(
        who.map(person => {
            return (
                <WhoToFollowListItem who={person}/>
            );
        })
    )
};

export default WhoToFollowList;
