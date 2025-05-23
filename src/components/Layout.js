import React from "react";
import { Outlet } from "react-router-dom";
import Split from '@uiw/react-split';

export default function Layout() {
  return (
    <div style={{ height: '100vh' }}>
      <Split direction="horizontal">
        <div style={{ backgroundColor: 'lightblue', padding: '1rem', color: 'white' }}>
          {/* sidebar ou menu ici */}
        </div>
        <div style={{ padding: '1rem' }}>
          <Outlet /> {/* Affiche la page courante */}
        </div>
      </Split>
    </div>
  );
}
