import React from "react";
const NavigationSidebar = ({
    active= 'explore'
                           }) => {
    return(
        <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>
                <a className="list-group-item" href="/">
                    <i className="fa fa-solid fa-home"></i> <span className="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Home </span></a>
                <a className="list-group-item active" href="/">
                    <i className="fa fa-solid fa-hashtag"></i> <span className="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Explore </span></a>
                <a className="list-group-item" href="/">
                    <i className="fa fa-solid fa-bell"></i> <span className="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Notifications </span></a>
                <a className="list-group-item" href="/">
                    <i className="fa fa-solid fa-envelope"></i> <span className="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Messages </span></a>
                <a className="list-group-item" href="/">
                    <i className="fa fa-solid fa-bookmark"></i> <span className="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Bookmarks </span></a>
                <a className="list-group-item" href="/">
                    <i className="fa fa-solid fa-list"></i> <span className="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Lists </span></a>
                <a className="list-group-item" href="/">
                    <i className="fa fa-solid fa-user"></i> <span className="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Profile </span></a>
                <a className="list-group-item" href="/">
                    <i className="fa fa-solid fa-ellipsis-h"></i> <span className="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">More </span></a>
                 
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
