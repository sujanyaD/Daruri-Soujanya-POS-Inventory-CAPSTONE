import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Dashboard from './assets/Pages/Dashboard'
import { Container, Row, Col } from 'react-bootstrap';

const App=()=> {
  // const [count, setCount] = useState(0)

  return (
    <>
{/* // //     <BrowserRouter>
      <navbar />
      <div className='container-fluid'>
  <div className="row">
           <div className="col-md-3">
             <Sidebar />
           </div>
           <div className='col-md-9'>
             <switch>
               <Route path="/dashboard" component={Dashboard} />
               <Route path="/products" component={Products} />
               <Route path="/users" component={Users} />
               <Route path="/admin" component={Users} />
             
// //             </switch>
// //           </div>
         </div>
    </div>
// // </BrowserRouter > */}
</>
 );
};

export default App;