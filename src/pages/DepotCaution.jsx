import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import DepotCautionForm from "../components/DepotCautionForm";
import CautionTable from '../components/CautionTable';
import SidebarBootstrap from "../components/SidebarBootstrap";
import Split from '@uiw/react-split';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DepotCaution() {
  const breadcrumbItems = [
    { label: "Palette Track", href: "/" },
    { label: "Dépôt de caution" }
  ];

  return (
    <div className="container-fluid  mt-3" style={{ height: 'auto' }}>
      <Split mode="horizontal">
        <div style={{  padding: '1rem', color: 'white' ,width:'100%',height:'auto' }}>
          <CautionTable/>
        </div>
        <div style={{  padding: '1rem', color: 'white' ,width:'100%',height:'100%'  }}>
          <Breadcrumb />
           <SidebarBootstrap />
           <DepotCautionForm />
        </div>
      </Split>
    </div>   
  );
}