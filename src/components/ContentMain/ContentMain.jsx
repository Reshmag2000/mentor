import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Projectoverview from "../Projectoverview/Projectoverview";
import Grade from "../Projectgrade/Grade";
// import Report from "../Report/Report";
// import Budget from "../Budget/Budget";
// import Subscriptions from "../Subscriptions/Subscriptions";
import Feedback from "../Feedback/Savings";
// import Loans from "../Loans/Loans";
import Calender from "../Calender/Financial";

const ContentMain = () => {
  return (
    <div>
       <div className="main-content-holder">
          <div className="content-grid-three">
                  <Projectoverview/>
          </div>
          <br />
        </div>
         
          <div>
              <Transactions/>
          </div>
          <br />
          
          
           <div>
              <Grade/>
          </div>
          <br/><br/>
          <div className="grid-c3">
            <Cards/>
            <Feedback />
          </div>
          <br></br>
          <Calender />
                 

    </div>
    
    // <div className="main-content-holder">
    //     <div className="content-grid-one">
    //         {/* <Cards />
    //         <Transactions />
    //         <Report /> */}
    //     </div>
    //     <div className="content-grid-two">
    //         <Budget />
    //         <div className="grid-two-item">
    //           <div className="subgrid-two">
    //             {/* <Subscriptions />
    //             <Savings /> */}
    //           </div>
    //         </div>

    //         <div className="grid-two-item">
    //           <div className="subgrid-two">
    //             {/* <Loans />
    //             <Financial /> */}
    //           </div>
    //         </div>
    //     </div>
    // </div>
    
  )
}

export default ContentMain
