import React from 'react';
import DECONSIGNForm from '../components/DECONSIGNForm';
import SidebarBootstrap from "../components/SidebarBootstrap";
import Split from '@uiw/react-split';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from "../components/Breadcrumb";

export default function Deconsignation() {
  const breadcrumbItems = [
    { label: "Palette Track", href: "/" },
    { label: "Flux interne", href: "/flux-interne" },
    { label: "Déconsignation" }
  ];

  return (
    <div className="container-fluid  mt-3" >
      <Split mode="horizontal">
        <div style={{  padding: '1rem', color: 'white' ,width:'100%',height:'auto' }}>
        </div>
        <div style={{  padding: '1rem', color: 'white' ,width:'100%',height:'100%'  }}>
          <Breadcrumb />
           <SidebarBootstrap />
           <DECONSIGNForm />
        </div>
      </Split>
    </div> 
  );
}