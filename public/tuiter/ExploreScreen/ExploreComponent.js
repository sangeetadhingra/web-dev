import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
             <div class="col-11">
        <div class="input-group mb-3">
            <span class="input-group-text override-radius"><i class="fa fa-search"></i></span>
            <input type="text" class="form-control rounded-corners-all-around " placeholder="Search Twitter">
        </div>
        </div>
        <div class="col-1"><i class="fa fa-cog fa-2x" style="color: dodgerblue"></i></div>
           </div>
           <ul class="nav mb-2 nav-tabs">
            <li class="nav-item"> <a class="nav-link active" href="#"> For you </a> </li>
            <li class="nav-item">  <a class="nav-link" href="#"> Trending </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> News </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Sports </a></li>
            <li class="nav-item"><a class="nav-link d-md-block d-lg-block d-xl-block d-xxl-block d-sm-none" href="#"> Entertainment </a></li>
           </ul>
        <div class="card mt-2">
            <img src="https://cdn.mos.cms.futurecdn.net/wYLunppaoyVLSYzhEhvc8c-1024-80.jpg.webp" class="card-img-top">
                <div class="card-title-text">Space X's Starship</div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
