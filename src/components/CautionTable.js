// CautionTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';
import './CautionTable.css';

export default function CautionTable() {
  const [cautions, setCautions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/xcaution')
      .then(response => {
        setCautions(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des cautions', error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="title-dark-blue">Derniers lus</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Caution</th>
            <th>Site</th>
            <th>Client</th>
            <th>Raison</th>
            <th>CIN</th>
            <th>Date</th>
            <th>Montant</th>
            <th>Validée</th>
          </tr>
        </thead>
        <tbody>
          {cautions.map((item, index) => (
            <tr key={index}>
              <td>{item.xnum_0}</td>
              <td>{item.xsite_0}</td>
              <td>{item.xclient_0}</td>
              <td>{item.xraison_0}</td>
              <td>{item.xcin_0}</td>
              <td>{item.xdate_0}</td>
              <td>{Number(item.montant).toLocaleString('fr-FR')} DH</td>
              <td>{item.xvalsta_0 === '2' ? 'Oui' : 'Non'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
