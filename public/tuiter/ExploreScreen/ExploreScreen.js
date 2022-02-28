import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class=" col-xl-6 col-lg-8 col-md-10 col-sm-10">
            ${ExploreComponent()}
            </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
