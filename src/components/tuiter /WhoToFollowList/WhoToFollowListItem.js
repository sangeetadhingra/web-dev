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
            <div className="col-8">
            <div> <b style={{"fontSize": ".5em"}}>{who.userName}</b>
                <span className="fa-stack" style={{"fontSize": "0.5em", "vertical-align": "top"}}>
                          <i className="fas fa-circle fa-stack"></i>
                          <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                </span> </div>
                <div style={{"fontSize": ".5em"}}>@{who.handle}</div>
            </div>
        <div className="col-2">
            <button className="btn btn-primary rounded-border mt-1 float-end rounded-pill">Follow</button>
        </div>
        </div>
    </li>
    </>
);
}

export default WhoToFollowListItem;