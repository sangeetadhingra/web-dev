import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (<>
        <div className="col">
            <i className="far fa-comment me-2"></i>
            {tuit.stats.comments}
        </div>
    <div className="col">
        <i className="fas fa-retweet me-2"></i>
        {tuit.stats.retweets}
    </div>
    <span onClick={likeTuit}>
    {
        tuit.liked &&
        <i className="fas fa-heart me-1"
           style={{color: 'red'}}></i>
    }
        {
            !tuit.liked &&
            <i className="far fa-heart me-1"></i>
        }
        {tuit.stats && tuit.stats.likes}
    </span>
</>
);
}
export default TuitStats;