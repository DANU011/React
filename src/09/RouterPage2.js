import { useLocation } from 'react-router-dom';
import qs from 'query-string'

const RouterPage2 = ()=>{
     let location = useLocation().search;
     console.log("location",location);
     //location = location.split('?')[1];
     let item = qs.parse(location).item;
     console.log("item",item);

     const fruits = ['μ¬κ³Όπ','λ°λλπ'];
     let tag;
    
     if(fruits.includes(item)) tag = "κ³ΌμΌμλλ€.";
     else tag = "κ³ΌμΌμ΄ μλλλ€.";

     return(
          <>
          <h1>Page2</h1>
          <p>{`${item}λ(μ) ${tag}`}</p>
          </>
     );
}
export default RouterPage2;