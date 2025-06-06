import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import RecuperationForm from "../components/RecuperationForm";
import SidebarBootstrap from "../components/SidebarBootstrap";
import Split from '@uiw/react-split';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Recuperation() {
  const breadcrumbItems = [
    { label: "Palette Track", href: "/" },
    { label: "Récupération" }
  ];

  
  return (
    <div className="container-fluid  mt-3" style={{ height: 'auto' }}>
      <Split mode="horizontal">
        <div style={{  padding: '1rem', color: 'white' ,width:'100%',height:'auto' }}>
        </div>
        <div style={{  padding: '1rem', color: 'white' ,width:'100%',height:'100%'  }}>
          <Breadcrumb />
           <SidebarBootstrap />
           <RecuperationForm />
        </div>
      </Split>
    </div>   
  );
}