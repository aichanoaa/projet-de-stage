import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { Container, Card, Button, Form } from 'react-bootstrap';
import './DepotCautionForm.css';

// Schema de validation avec YUP
const schema = yup.object().shape({
  xnum_0: yup.string(),
  xsite_0: yup.string().required('Site obligatoire'),
  xclient_0: yup.string().required('Client obligatoire'),
  xcin_0: yup
    .string()
    .matches(/^[A-Za-z]{1}[0-9]{7}$/, 'CIN invalide (1 lettre + 7 chiffres)')
    .required('CIN obligatoire'),
  xvalsta_0: yup.string().required(),
  montant: yup
    .number()
    .typeError('Le montant doit être un nombre')
    .positive('Le montant doit être > 0')
    .required('Montant obligatoire'),
});


export default function DepotCautionForm() {
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
    setCurrentTime(
      now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    );
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/xcaution', {
        ...data,
        xdate_0: currentDate,
        xheure_0: currentTime,
      });
      alert('Caution enregistrée avec succès !');
      reset();
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l’enregistrement');
    }
  };

  return (
     <Container fluid className="form-wrapper">
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
    <h5>Dépôt de Caution</h5>
    <Button type="submit" disabled={isSubmitting} className="my-custom-btn">
      {isSubmitting ? 'Enregistrement...' : 'Validation'}
    </Button>
  </div>
         </Card.Header>

        <Card.Body>
          <h6 className="mb-3 border-bottom pb-2">Général</h6>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="form-row-custom">
              <Form.Label>Caution</Form.Label>
              <Form.Control type="text" {...register('xnum_0')} />
            </Form.Group>

            <Form.Group className="form-row-custom">
              <Form.Label>Site *</Form.Label>
              <Form.Control type="text" {...register('xsite_0')} />
              <p className="text-danger">{errors.xsite_0?.message}</p>
            </Form.Group>

            <Form.Group className="form-row-custom">
              <Form.Label>Client *</Form.Label>
              <Form.Control type="text" {...register('xclient_0')} />
              <p className="text-danger">{errors.xclient_0?.message}</p>
            </Form.Group>
            
            <Form.Group className="form-row-custom">
              <Form.Label>Raison sociale</Form.Label>
              <Form.Control type="text" {...register('xraison_0')} />
            </Form.Group>

            <Form.Group className="form-row-custom">
              <Form.Label>CIN *</Form.Label>
              <Form.Control type="text" {...register('xcin_0')} maxLength={8} />
              <p className="text-danger">{errors.xcin_0?.message}</p>
            </Form.Group>

            <Form.Group className="form-row-custom">
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" value={currentDate} disabled />
            </Form.Group>

            <Form.Group className="form-row-custom">
              <Form.Label>Heure</Form.Label>
              <Form.Control type="text" value={currentTime} disabled />
            </Form.Group>

            <Form.Group className="form-row-custom">
              <Form.Label>Validée</Form.Label>
              <Form.Select {...register('xvalsta_0')}>
                <option value="2">Oui</option>
                <option value="1">Non</option>
              </Form.Select>
            </Form.Group>

            <hr />
            <h6 className="mb-3 border-bottom pb-2">Lignes</h6>
            <Form.Group className="form-row-custom">
              <Form.Label>Montant *</Form.Label>
              <Form.Control type="text" {...register('montant')} />
              <p className="text-danger">{errors.montant?.message}</p>
            </Form.Group>

            
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
