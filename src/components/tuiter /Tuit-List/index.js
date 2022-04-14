import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {updateTuit, createTuit,deleteTuit,findAllTuits}
    from "../../../full-stack-developer-server-node/actions/tuits-actions";
import TuitListItem
    from "./tuit-list-item";
import '../tuiter.css';

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        [dispatch]);
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    return ( <>
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    <i className="fas fa-remove float-end"
       onClick={() => deleteTuit(
           dispatch, tuits)}></i>
    <button onClick={() =>
        createTuit(dispatch, newTuit)}
            className="btn btn-primary float-end">
        Tuit
    </button>
    <textarea className="form-control w-75"
              onChange={(e) =>
                  setNewTuit({...newTuit,
                      tuit: e.target.value})}></textarea>
            <div>
                Likes: {tuits.likes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuits,
                    likes: tuits.likes + 1
                })} className="far fa-thumbs-up ms-2"></i>
            </div>
        </>
    );
}


export default TuitList;