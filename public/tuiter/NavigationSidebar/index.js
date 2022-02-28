const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item" href="/">
                    <i class="fa fa-solid fa-home"></i> <span class="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Home </span></a>
                <a class="list-group-item active" href="/">
                    <i class="fa fa-solid fa-hashtag"></i> <span class="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Explore </span></a>
                <a class="list-group-item" href="/">
                    <i class="fa fa-solid fa-bell"></i> <span class="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Notifications </span></a>  
                <a class="list-group-item" href="/">
                    <i class="fa fa-solid fa-envelope"></i> <span class="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Messages </span></a>
                <a class="list-group-item" href="/">
                    <i class="fa fa-solid fa-bookmark"></i> <span class="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Bookmarks </span></a>  
                <a class="list-group-item" href="/">
                    <i class="fa fa-solid fa-list"></i> <span class="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Lists </span></a>
                <a class="list-group-item" href="/">
                    <i class="fa fa-solid fa-user"></i> <span class="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">Profile </span></a>   
                <a class="list-group-item" href="/">
                    <i class="fa fa-solid fa-ellipsis-h"></i> <span class="d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block d-sm-none ">More </span></a> 
                 
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
