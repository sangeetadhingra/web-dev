import React from "react";
const WhoToFollowListItem = ( {
                                  who = {
                                      avatarIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/220px-NASA_logo.svg.png',
                                      userName: 'NASA',
                                      handle: 'NASA',
                                  }
                              }
) => {
    return(
        <>
        <li className="list-group-item">
        <div className="row"> <div className="col-2">
            {/* eslint-disable-next-line */}
            <img src={who.avatarIcon} width="48"
                 className="img-fluid rounded-circle"/>
        </div>
            <div className="col-6"> <b>{who.userName}</b><i className="fa icon-white fa-circle"></i><br></br>
            {'@' + who.handle}
        </div>
        <div className="col-4">
            <button className="btn btn-primary rounded-border" >Follow</button>
        </div>
        </div>
    </li>
    </>
);
}

export default WhoToFollowListItem;