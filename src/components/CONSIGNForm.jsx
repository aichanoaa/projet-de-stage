import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import './DepotCautionForm.css';

const schema = yup.object().shape({
  xnum_0: yup.string(),
  xsite_0: yup.string().required('Site obligatoire'),
  xclient_0: yup.string().required('Client obligatoire'),
  xbp_0: yup.string().required('Bon de prélèvement obligatoire'),
  xcamion_0: yup.string().required('Matricule du camion obligatoire'),
  xvalsta_0: yup.string().required(),
  palette_consigner: yup
    .number()
    .typeError(' Palettes à consigner doit être un nombre')
    .positive('Palettes à consigner doit être > 0')
    .required('Palettes à consigner obligatoire'),
});

export default function CONSIGNForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now.toLocaleDateString('fr-FR'));
    setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
  }, []);

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        xdate_0: currentDate,
        xheure_0: currentTime,
      };
      await axios.post('http://localhost:8000/api/consign', payload);
      alert('Consignation enregistrée avec succès !');
      reset();
    } catch (error) {
      if (error.response?.data?.errors) {
        console.error('Erreurs de validation Laravel:', error.response.data.errors);
        alert('Erreur de validation côté serveur');
      } else {
        console.error('Erreur API:', error.message);
        alert('Erreur lors de l’envoi des données');
      }
    }
  };

  return (
    <Container fluid className="form-wrapper">
      <Card>
        <Card.Header>
                  <div className="d-flex justify-content-between align-items-center">
            <h5>Consignation</h5>
            <Button type="submit" disabled={isSubmitting} className="my-custom-btn">
              {isSubmitting ? 'Enregistrement...' : 'Validation'}
            </Button>
          </div>
                 </Card.Header>
        <Card.Body>
          <h6 className="mb-3 border-bottom pb-2">Général</h6>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {[
              ['Bon de Consignation', 'xnum_0'],
              ['Site *', 'xsite_0', errors.xsite_0],
              ['Client *', 'xclient_0', errors.xclient_0],
              ['Raison sociale', 'xraison_0'],
              ['Bon de prélèvement *', 'xbp_0', errors.xbp_0],
              ['Matricule Camion *', 'xcamion_0', errors.xcamion_0],
            ].map(([label, name, error]) => (
              <Form.Group as={Row} className="mb-3 align-items-center" key={name}>
                <Form.Label column sm={4} className="text-end">{label}</Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" {...register(name)} />
                  {error && <p className="text-danger m-0">{error.message}</p>}
                </Col>
              </Form.Group>
            ))}

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={4} className="text-end">Date</Form.Label>
              <Col sm={8}>
                <Form.Control type="text" value={currentDate} disabled />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={4} className="text-end">Heure</Form.Label>
              <Col sm={8}>
                <Form.Control type="text" value={currentTime} disabled />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={4} className="text-end">Validée</Form.Label>
              <Col sm={8}>
                <Form.Select {...register('xvalsta_0')}>
                  <option value="2">Oui</option>
                  <option value="1">Non</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <hr />
            <h6 className="mb-3 border-bottom pb-2">Lignes</h6>

            {[
              ['Palettes ramenées', 'palette_consigner'],
              ['Palettes à consigner *', 'palette_consigner'],
              ['Palettes consignées', 'palette_consigner'],
            ].map(([label, name]) => (
              <Form.Group as={Row} className="mb-3 align-items-center" key={label}>
                <Form.Label column sm={4} className="text-end">{label}</Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" {...register(name)} />
                  {errors.palette_consigner && <p className="text-danger m-0">{errors.palette_consigner.message}</p>}
                </Col>
              </Form.Group>
            ))}

          
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
