import { useParams } from "react-router-dom";
const RouterPage1 = ()=>{
     const item =useParams().item;
     const fruits = ['μ¬κ³Όπ','λ°λλπ'];
     let tag;
    
     if(fruits.includes(item)) tag = "κ³ΌμΌμλλ€.";
     else tag = "κ³ΌμΌμ΄ μλλλ€.";

     //tag = fruits.includes(item)? "κ³ΌμΌμλλ€." : "κ³ΌμΌμ΄ μλλλ€." ;
     

     return(
          <>
           <h1>Page1</h1>
           <p>{`${item}λ(μ) ${tag}`}</p>
          </>
     );
}
export default RouterPage1;