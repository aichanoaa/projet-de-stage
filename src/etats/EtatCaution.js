import React, { useState } from "react";
import { Button, Table, Form } from "react-bootstrap";

const EtatCaution = () => {
  const [rows, setRows] = useState([
    { id: "", start: "", end: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const addRow = () => {
    setRows([...rows, { id: "", start: "", end: "" }]);
  };

  const handleExport = (type) => {
    if (type === "pdf") {
      alert("Export PDF déclenché !");
      // ici tu ajouteras la logique PDF avec jsPDF
    } else {
      alert("Export Excel déclenché !");
      // ici tu ajouteras la logique Excel avec SheetJS
    }
  };

  return (
    <div className="container mt-5">
      <h4 className="mb-4 text-center">Saisie paramètres états</h4>
      
      <Table bordered hover responsive>
        <thead className="table-light text-center">
          <tr>
            <th>Borne de caution (ID)</th>
            <th>Valeur de début</th>
            <th>Valeur de fin</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="text-center">
              <td>
                <Form.Control
                  type="text"
                  value={row.id}
                  onChange={(e) => handleChange(idx, "id", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.start}
                  onChange={(e) => handleChange(idx, "start", e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.end}
                  onChange={(e) => handleChange(idx, "end", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <Button variant="secondary" onClick={addRow}>
          + Ajouter une ligne
        </Button>

        <div>
          <Form.Label className="me-2">Exporter vers :</Form.Label>
          <Button variant="success" className="me-2" onClick={() => handleExport("excel")}>
            Excel
          </Button>
          <Button variant="danger" onClick={() => handleExport("pdf")}>
            PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EtatCaution;
