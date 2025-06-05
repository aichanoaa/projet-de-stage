import React from "react";
import { useNavigate } from "react-router-dom";
import './SidebarBootstrap.css';
import {
  FaPlus, FaSave, FaCheck, FaTrash, FaTimes, FaRedo,
  FaPrint, FaPen, FaCommentDots, FaShareSquare, FaBan,
} from "react-icons/fa";

const SidebarBootstrap = () => {
  const navigate = useNavigate(); // Hook pour redirection

  const handlePrintClick = () => {
  navigate("/etat-caution");
 // Redirection vers l'interface "EtatCaution"
  };

  return (
    <div
      className="sidebar blue-icons d-flex flex-column align-items-center bg-white border-start position-fixed"
      style={{ top: "111px", right: 0, height: "calc(100vh - 60px)", width: "50px" }}
    >
      <FaPlus className="mb-3 hover-effect" title="Ajouter" />
      <FaSave className="mb-3 hover-effect" title="Sauvegarder" />
      <FaCheck className="mb-3 hover-effect" title="Valider" />
      <FaTrash className="mb-3 hover-effect" title="Supprimer" />
      <FaTimes className="mb-3 hover-effect" title="Annuler" />
      <FaRedo className="mb-3 hover-effect" title="Rafraîchir" />
      <FaPrint
        className="mb-3 hover-effect"
        title="Imprimer"
        onClick={handlePrintClick} //  ici
        style={{ cursor: 'pointer' }}
      />
      <FaPen className="mb-3 hover-effect" title="Modifier" />
      <FaCommentDots className="mb-3 hover-effect" title="Commentaire" />
      <FaShareSquare className="mb-3 hover-effect" title="Partager" />
      <FaBan className="mb-3 hover-effect" title="Refuser" />
    </div>
  );
};

export default SidebarBootstrap;
