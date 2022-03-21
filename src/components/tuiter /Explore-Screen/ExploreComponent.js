import React from "react";
import PostSummaryList from "../Post-Summary-List";

const ExploreComponent = () => {
    return(<>
            <div className="row">
             <div className="col-11">
        <div className="input-group mb-3">
            <span className="input-group-text override-radius"><i className="fa fa-search"></i></span>
            <input type="text" className="form-control rounded-corners-all-around " placeholder="Search Twitter"/>
        </div>
        </div>
        <div className="col-1"><i className="fa fa-cog fa-2x" style={{"color": "dodgerblue"}}></i></div>
           </div>
           <ul className="nav mb-2 nav-tabs">
            <li className="nav-item"> <a className="nav-link active" href="#"> For you </a> </li>
            <li className="nav-item">  <a className="nav-link" href="#"> Trending </a></li>
            <li className="nav-item"><a className="nav-link" href="#"> News </a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Sports </a></li>
            <li className="nav-item"><a className="nav-link d-md-block d-lg-block d-xl-block d-xxl-block d-sm-none" href="#"> Entertainment </a></li>
           </ul>
        <div className="card mt-2">
            <img src="https://cdn.mos.cms.futurecdn.net/wYLunppaoyVLSYzhEhvc8c-1024-80.jpg.webp" className="card-img-top"/>
                <div className="card-title-text">Space X's Starship</div>
           <PostSummaryList/></div>
    </>);
}
export default ExploreComponent;
