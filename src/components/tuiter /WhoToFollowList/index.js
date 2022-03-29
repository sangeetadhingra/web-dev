import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";
const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return(
        who.map(person => {
            return (
                <WhoToFollowListItem who={person}/>
            );
        })
    )
};

export default WhoToFollowList;
