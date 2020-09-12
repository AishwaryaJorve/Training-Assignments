

//   App.js of assignment1




import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './assignment2/components/page/Registration';
import Footer from '../src/assignment2/components/common/Footer';
import Heading from '../src/assignment2/components/common/Heading';
import '../src/assignment2/assets/Reg.css';

function App() {
  return (
    <div className="App">
     <hr class="line0"></hr>
    <Heading></Heading>
      <hr class="line1"></hr>
       <Registration></Registration>
      <hr class="line2"></hr>
    <Footer></Footer>
     </div>
  );
}

export default App;
