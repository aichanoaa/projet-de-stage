import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import SidebarBootstrap from "../components/SidebarBootstrap";
import EtatCaution from "../etats/EtatCaution";

import Split from "@uiw/react-split";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EtatCautionPage() {
  
  return (
    <div className="container-fluid mt-3" style={{ height: "auto" }}>
      <Split mode="horizontal">
        {/* Partie supérieure (peut être utilisée pour autre contenu plus tard) */}
        <div
          style={{
            padding: "1rem",
            color: "white",
            width: "100%",
            height: "100%"
          }}
        >
          {/* Tu peux ajouter des composants ici si nécessaire */}
        </div>

        {/* Partie inférieure : interface complète */}
        <div
          style={{
            padding: "1rem",
            color: "white",
            width: "100%",
            height: "100%"
          }}
        >
          <SidebarBootstrap />
          <EtatCaution />
        </div>
      </Split>
    </div>
  );
}
