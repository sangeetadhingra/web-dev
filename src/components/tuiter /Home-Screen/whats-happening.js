import React, {useState} from "react";
import {useDispatch}
    from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }

    return (
        <>
      <textarea value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)} className="form-control">
      </textarea>
            <hr/>
            <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="far fa-analytics me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
            <button onClick={tuitClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                Tweet
            </button>
        </>
    );
}
export default WhatsHappening;