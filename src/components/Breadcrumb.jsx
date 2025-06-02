import React , { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import breadcrumbNameMap from "./breadcrumbNameMap";
import './Breadcrumb.css';

import routesTree from "./routesTree";
function ChevronRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"      
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      style={{ margin: "0 0.5rem", verticalAlign: "middle", color: "#0d6efd" }} // <== couleur explicite
       aria-hidden="true"
      focusable="false"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function BreadcrumbDropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="breadcrumb-dropdown"
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        style={{
          cursor: "pointer",
          color: "#0d6efd",
          textDecoration: "underline",
          userSelect: "none",
        }}
      >
        {label}
      </span>
      {open && (
        <div
          className="dropdown-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "white",
            border: "1px solid #ccc",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: 1000,
            minWidth: "180px",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function findPath(tree, pathname) {
  if (tree.path === pathname) return [tree];
  if (!tree.children) return null;

  for (const child of tree.children) {
    const subPath = findPath(child, pathname);
    if (subPath) return [tree, ...subPath];
  }

  return null;
}

export default function Breadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;

  const pathNodes = findPath(routesTree, pathname);

  if (!pathNodes) {
    return (
      <nav aria-label="breadcrumb">
        <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <Link to="/" style={{ color: "#0d6efd", textDecoration: "none" }}>
              Accueil
            </Link>
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <nav aria-label="breadcrumb" style={{ marginBottom: "1rem" }}>
      <ol
        style={{
          display: "flex",
          listStyle: "none",
          padding: 0,
          margin: 0,
          alignItems: "center",
        }}
      >
        {pathNodes.map((node, index) => {
          const isLast = index === pathNodes.length - 1;

          return (
            <li key={node.path} style={{ display: "flex", alignItems: "center" }}>
              {isLast ? (
                <span style={{ color: "#6c757d" }}>{node.label}</span>
              ) : node.children && node.children.length > 0 ? (
                <>
                  <BreadcrumbDropdown label={node.label}>
                    {node.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        style={{
                          display: "block",
                          padding: "0.25rem 1rem",
                          color: "#0d6efd",
                          textDecoration: "none",
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </BreadcrumbDropdown>
                  <ChevronRightIcon />
                </>
              ) : (
                <>
                  <Link
                    to={node.path}
                    style={{ color: "#0d6efd", textDecoration: "none" }}
                  >
                    {node.label}
                  </Link>
                  <ChevronRightIcon />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
