import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './assignment1/components/page/Registration';
import Footer from '../src/assignment1/components/common/Footer';
import Heading from '../src/assignment1/components/common/Heading';
import '../src/assignment1/assets/Reg.css';

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
