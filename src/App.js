/*
import React from 'react';
import CautionTable from './components/CautionTable';
import CONSIGNForm from './components/CONSIGNForm';
import SidebarBootstrap from "./components/SidebarBootstrap";
import './App.css';
import Split from '@uiw/react-split';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div style={{ height: 'auto' }}>
      <Split mode="horizontal">
        <div style={{  padding: '1rem', color: 'white' ,width:'100%',height:'auto' }}>
          <CautionTable/>
        </div>
        <div style={{  padding: '1rem', color: 'white' ,width:'100%',height:'100%'  }}>
           <SidebarBootstrap />
           <CONSIGNForm />
        </div>
      </Split>
    </div>
    
  );
}

export default App;
*/
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FluxInterne from "./pages/FluxInterne";
import Consignation from "./pages/Consignation";
import Deconsignation from "./pages/Deconsignation";
import DepotCaution from "./pages/DepotCaution";
import Recuperation from "./pages/Recuperation";
import Breadcrumb from "./components/Breadcrumb";
import Header from "./components/Header";

import EtatCautionPage from "./pages/EtatCautionPage"; 

function App() {
  return (
    <div>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/flux-interne" element={<FluxInterne />} />
  <Route path="/flux-interne/consignation" element={<Consignation />} />
  <Route path="/flux-interne/deconsignation" element={<Deconsignation />} />
  <Route path="/depot-de-caution" element={<DepotCaution />} />
  <Route path="/etat-caution" element={<EtatCautionPage />} />
  <Route path="/recuperation" element={<Recuperation />} />
</Routes>

    </div>
  );
}

export default App;
