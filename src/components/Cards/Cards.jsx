import { iconsImgs } from "../../utils/images";
import "./Cards.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Reference material</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c1-content">
        <FormGroup>
            <FormControlLabel  control={<Checkbox />} label="Session Monitoring"></FormControlLabel>
            <FormControlLabel  control={<Checkbox />} label="pairing reports" />
            <FormControlLabel  control={<Checkbox />} label="Documents and Files" />
            <FormControlLabel  control={<Checkbox />} label="epolls" />
            <FormControlLabel  control={<Checkbox />} label="Votes and Comments" />
        </FormGroup>
        </div>
            

            {/* <div className="lg-value">$ 22,000</div>
            <div className="card-wrapper">
                <span className="card-pin-hidden">**** **** **** </span>
                <span>1234</span>
            </div>
            <div className="card-logo-wrapper">
                <div>
                    <p className="text text-silver-v1 expiry-text">Expires</p>
                    <p className="text text-sm text-white">12/22</p>
                </div>
                <div className="card-logo">
                    <div className="logo-shape1"></div>
                    <div className="logo-shape2"></div>
                </div>
            </div>*/}
    </div>

  )
}

export default Cards
