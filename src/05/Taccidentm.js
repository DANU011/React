import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Theader from "./Theader";
import Tdetail from "./Tdetail";
import './Taccident.css';



const Taccidentm = ({ c1, c2, data }) => {
     console.log("c1",c1);
     console.log("c2",c2);
     console.log("data",data);

     return (
          <>
               <div className="tcontent">
                    <div className="theader">
                         <Theader />
                    </div>
                    <div className="tmain">
                         <Tc1 />
                         <Tc2 />
                         <Tdetail />
                    </div>
               </div>
          </>
     );
}
export default Taccidentm;