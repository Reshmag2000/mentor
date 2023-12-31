import "./projectoverview.css";
// import { Projectoverview } from "../../data/data";
// import { iconsImgs } from "../../utils/images"; 
import { Button } from '@mui/material';


const Projectoverview = () => {
    return (
            // <div className="blur-background">

<div className="gridone-item grid-common grid">
        <div className="grid-title">
            <div className="animated-element">

            <h1 className="grid-titletext">WELCOME</h1>
            </div>
            <br/>
            <div>
            <h3 className="grid-titletext">Learning Today,Leading Tomorrow</h3>
            </div>
            {/* <button  className="grid-c-title-icon">
                Get Started
                <img src={ iconsImgs.plus } />
            </button> */}
            </div>
            <br/>
            <div className="button">
            <Button variant="outlined" >Get Started</Button>
            </div>
        </div>

// </div>



    )
}
export default Projectoverview
