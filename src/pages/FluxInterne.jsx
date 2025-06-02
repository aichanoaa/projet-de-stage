import React from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function FluxInterne() {
  const breadcrumbItems = [
    { label: "Palette Track", href: "/" },
    { label: "Flux interne" }
  ];

  return (
    <div className="container mt-3">
      <Breadcrumb items={breadcrumbItems} />
      <h3>Page Flux Interne</h3>
    </div>
  );
}