import React, { useState , useEffect} from "react";

export default function CautionForm() {
  const [formData, setFormData] = useState({
    XNUM_0: "",
    XSITE_0: "",
    XCLIENT_0: "",
    XRAISON_0: "",
    XCIN_0: "",
    XVALSTA_0: "1",
    MONTANT: "",
    QUANTITE: "",
    CREUSR: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
   // Met à jour l'heure et la date
  useEffect(() => {
    const now = new Date();
    setCurrentDate(now.toLocaleDateString("fr-FR"));
    setCurrentTime(now.toLocaleTimeString("fr-FR"));
  }, []);
  const validate = () => {
    const errs = {};
    if (!formData.XNUM_0) errs.XNUM_0 = "Identifiant requis";
    if (!formData.XSITE_0) errs.XSITE_0 = "Code site requis";
    if (!formData.XCLIENT_0) errs.XCLIENT_0 = "Code client requis";

    if (!/^[A-Za-z][0-9]{7}$/.test(formData.XCIN_0)) {
      errs.XCIN_0 = "XCIN doit commencer par une lettre suivie de 7 chiffres";
    }

    if (!formData.MONTANT || isNaN(formData.MONTANT)) {
      errs.MONTANT = "Montant valide requis";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    console.log("Envoi des données :", formData);
  };

  return (
    <div className="container mt-4">
  <div className="card shadow-sm border">
    <div className="card-header bg-primary text-white">
      <h5 className="mb-0">Dépôt de caution</h5>
    </div>
    <div className="card-body">
      <p className="text-muted">
            Date : <strong>{currentDate}</strong> | Heure : <strong>{currentTime}</strong>
          </p>

          {submitted && (
            <div className="alert alert-success">Formulaire envoyé avec succès !</div>
          )}

      <form onSubmit={handleSubmit}>
    <div className="mb-3">
    {/* ... Identifiant (XNUM_0) ... */}
    <label className="form-label">Caution</label>
    <input
      type="text"
      className="form-control form-control-sm"
      name="XNUM_0"
      value={formData.XNUM_0}
      onChange={handleChange}
    />
    {errors.XNUM_0 && <div className="text-danger">{errors.XNUM_0}</div>}
  </div>

  <div className="mb-3">
    {/* ... .Code Site (XSITE_0).. */}
    <label className="form-label"> Site</label>
    <input
      type="text"
      className="form-control form-control-sm"
      name="XSITE_0"
      value={formData.XSITE_0}
      onChange={handleChange}
    />
    {errors.XSITE_0 && <div className="text-danger">{errors.XSITE_0}</div>}
  </div>

  <div className="mb-3">
    {/* ...Code Client (XCLIENT_0) ... */}
    <label className="form-label">Client</label>
    <input
      type="text"
      className="form-control form-control-sm"
      name="XCLIENT_0"
      value={formData.XCLIENT_0}
      onChange={handleChange}
    />
    {errors.XCLIENT_0 && <div className="text-danger">{errors.XCLIENT_0}</div>}
  </div>

  <div className="mb-3">
    {/* ... (XRAISON_0)... */}
    <label className="form-label">Raison sociale</label>
    <input
      type="text"
      className="form-control form-control-sm"
      name="XRAISON_0"
      value={formData.XRAISON_0}
      onChange={handleChange}
    />
  </div>

  <div className="mb-3">
    {/* ...(lettre + 7 chiffres) ... */}
    <label className="form-label">CIN</label>
    <input
      type="text"
      maxLength={8}
      className="form-control form-control-sm"
      name="XCIN_0"
      value={formData.XCIN_0}
      onChange={handleChange}
    />
    {errors.XCIN_0 && <div className="text-danger">{errors.XCIN_0}</div>}
  </div>

  <div className="mb-3">
    <label className="form-label">Statut</label>
    <select
      className="form-select form-select-sm"
      name="XVALSTA_0"
      value={formData.XVALSTA_0}
      onChange={handleChange}
    >
      <option value="1">Non Validé</option>
      <option value="2">Validé</option>
    </select>
  </div>

  <div className="mb-3">
    <label className="form-label">Montant </label>
    <input
      type="number"
      className="form-control form-control-sm"
      name="MONTANT"
      step="0.01"
      value={formData.MONTANT}
      onChange={handleChange}
    />
    {errors.MONTANT && <div className="text-danger">{errors.MONTANT}</div>}
  </div>
{/*
  <div className="mb-3">
    <label className="form-label">Quantité</label>
    <input
      type="number"
      className="form-control form-control-sm"
      name="QUANTITE"
      value={formData.QUANTITE}
      onChange={handleChange}
    />
  </div>

*/}
        <button type="submit" className="btn btn-primary btn-sm">Envoyer</button>
      </form>
    </div>
  </div>
</div>


  );
}
