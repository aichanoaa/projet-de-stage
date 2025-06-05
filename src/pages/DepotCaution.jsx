import React from "react";
import { Routes, Route } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import DepotCautionForm from "../components/DepotCautionForm";
import CautionTable from "../components/CautionTable";
import SidebarBootstrap from "../components/SidebarBootstrap";
import EtatCaution from "../etats/EtatCaution";

import Split from "@uiw/react-split";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DepotCaution() {
  const breadcrumbItems = [
    { label: "Palette Track", href: "/" },
    { label: "Dépôt de caution" }
  ];

  return (
    <div className="container-fluid mt-3" style={{ height: "auto" }}>
      <Routes>
        {/* Route pour afficher EtatCaution */}
        <Route path="/etat-caution" element={<EtatCaution />} />

        {/* Route principale pour dépôt de caution */}
        <Route
          path="/"
          element={
            <Split mode="horizontal">
              <div
                style={{
                  padding: "1rem",
                  color: "white",
                  width: "100%",
                  height: "auto"
                }}
              >
                <CautionTable />
              </div>
              <div
                style={{
                  padding: "1rem",
                  color: "white",
                  width: "100%",
                  height: "100%"
                }}
              >
                <Breadcrumb items={breadcrumbItems} />
                <SidebarBootstrap />
                <DepotCautionForm />
              </div>
            </Split>
          }
        />
      </Routes>
    </div>
  );
}
