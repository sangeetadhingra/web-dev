
const WhoToFollowListItem = (who) => {
    return(`<li class="list-group-item">
        <div class="row"> <div class="col-2">
            <img src=${who.avatarIcon}
                 class="img-fluid rounded-circle">
        </div>
            <div class="col-6"> <b>${who.userName}</b><i class="fa icon-white fa-circle"></i> </br>
            ${'@' + who.handle}
        </div>
        <div class="col-4">
            <button class="btn btn-primary rounded-border" >Follow</button>
        </div>
    </div>
</li>`)
}

export default WhoToFollowListItem;