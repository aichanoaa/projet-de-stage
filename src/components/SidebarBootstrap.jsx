import React, { useState } from "react";
import './SidebarBootstrap.css';
import {
  FaPlus,
  FaSave,
  FaCheck,
  FaTrash,
  FaTimes,
  FaRedo,
  FaPrint,
  FaPen,
  FaCommentDots,
  FaShareSquare,
  FaBan,
} from "react-icons/fa";

const SidebarBootstrap = () => {
  const [isValidated, setIsValidated] = useState(false);

  return (
    <div
  className="sidebar blue-icons d-flex flex-column align-items-center bg-white border-start position-fixed"
  style={{ top: 0, right: 0, height: "100vh", width: "50px", paddingTop: "1rem" }}
>
  <FaPlus className="mb-3 hover-effect" title="Ajouter" />
  <FaSave className="mb-3 hover-effect" title="Sauvegarder" />
  <FaCheck className="mb-3 hover-effect" title="Valider" />
  <FaTrash className="mb-3 hover-effect" title="Supprimer" />
  <FaTimes className="mb-3 hover-effect" title="Annuler" />
  <FaRedo className="mb-3 hover-effect" title="Rafraîchir" />
  <FaPrint className="mb-3 hover-effect" title="Imprimer" />
  <FaPen className="mb-3 hover-effect" title="Modifier" />
  <FaCommentDots className="mb-3 hover-effect" title="Commentaire" />
  <FaShareSquare className="mb-3 hover-effect" title="Partager" />
  <FaBan className="mb-3 hover-effect" title="Refuser" />
</div>

  );
};

export default SidebarBootstrap;
