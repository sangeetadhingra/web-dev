import React from "react";
import {useDispatch} from "react-redux";
import "../tuiter.css";
import TuitStats from "../TuitStats/tuit-stats";
/*
** note: i used code from the professor's github here
 */
const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return(<>
        <li className="list-group-item">
            <table>
                <tr>
                    <td className="align-text-top">
                        {/* eslint-disable-next-line */}
                        <img className="rounded-circle wd-avatar-image"
                             src={tuit['logo-image']}/>
                        <i onClick={() => deleteTuit(tuit)}  className="fas fa-remove fa-2x
                  fa-pull-right" style={{"color":"white"}}></i>
                    </td>

                    <td className="ps-3" style={{width: '100%'}}>
                        <span className="fw-bold">{tuit.userName}</span>
                        {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-secondary">@{tuit.handle}</span>
                        <div>
                            {tuit.tuit}
                        </div>
                        {
                            tuit.attachments && tuit.attachments.image &&
                            <img alt= "attachment" src={tuit.attachments.image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "100%"}}/>
                        }
                        {
                            tuit.attachments && tuit.attachments.video &&
                            <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{width: "100%"}}
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                        <TuitStats tuit={tuit}/>
                    </td>
                </tr>
            </table>
        </li>
    </>)
}
export default TuitListItem;