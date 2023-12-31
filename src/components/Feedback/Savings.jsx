import { savings } from "../../data/data";
import { iconsImgs } from "../../utils/images";
// import { personsImgs } from "../../utils/images";

import "./Savings.css";

const Feedback = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Feedback</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c6-content">
            <div className="grid-items">
                {
                    savings.map((saving) => (
                        <div className="grid-item" key = { saving.id }>
                            <div className="grid-item-top">
                                <div className="grid-item-top-l">
                                    <div className="avatar img-fit-cover">
                                        {/* <img src={ personsImgs.person_one } /> */}
                                    </div>
                                    <p className="text text-silver-v1">{ saving.title }</p>
                                    <br/>
                                </div>
                                
                            </div>
                            <div className="grid-item-bottom">
                                <div className="grid-item-badges">
                                    {/* <span className="grid-item-badge"> </span>
                                    <span className="grid-item-badge"></span> */}
                                </div>
                                <div className="grid-item-progress">
                                    <div className="grid-item-fill">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Feedback
