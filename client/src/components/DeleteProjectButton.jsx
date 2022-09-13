import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { DELETE_PROJECT } from '../mutation/projectMutation'
import "../pages/Project.css";

const DeleteProjectButton = () => {
  return (
    <div >
      <button className="deleteButton">
      <FaTrash/>
      </button>
    </div>
  )
}

export default DeleteProjectButton
