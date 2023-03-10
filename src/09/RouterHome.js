import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

const RouterHome = () => {
     const navigate = useNavigate();
     // const url = {
     //      "μ¬κ³Όπ": "/p2?item=μ¬κ³Όπ",
     //      "λ°λλπ": "/p2?item=λ°λλπ",
     //      "λΉκ·Όπ₯": "/p2?item=λΉκ·Όπ₯"
     // }

     const goUrl = (item) => {
          let url=`/p2?item=${item}`;
          navigate(url);
          //navigate(url[item]);
          //if(item==='μ¬κ³Όπ') navigate('/p2?item=μ¬κ³Όπ');...
     }
     return (
          <>
               <h1>Home</h1>

               <h2>νλΌλ―Έν° μ μ‘</h2>
               <ul>
                    <li><Link to='/p1/μ¬κ³Όπ'>μ¬κ³Όπ</Link></li>
                    <li><Link to='/p1/λ°λλπ'>λ°λλπ</Link></li>
                    <li><Link to='/p1/λΉκ·Όπ₯'>λΉκ·Όπ₯</Link></li>
               </ul>

               <h2>νλΌλ―Έν° μ μ‘2</h2>
               <button onClick={() => goUrl('μ¬κ³Όπ')}>μ¬κ³Όπ</button>
               <button onClick={() => goUrl('λ°λλπ')}>λ°λλπ</button>
               <button onClick={() => goUrl('λΉκ·Όπ₯')}>λΉκ·Όπ₯</button>
          </>
     );
}
export default RouterHome;