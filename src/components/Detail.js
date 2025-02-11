import logo from '../logo.svg';
import { useState, useEffect } from 'react';
import './Detail.css';

export default function Detail() {
  return (
    <>
      <main className='detail-main'>
        <div className='detail-h1'>
          <h1>Task detail</h1>
        </div>
        <div className='detail-div'>
          <div className='detail-title-date'>
            <p>Title</p>
            <p>dd/mm/yyyy</p>
          </div>
          <div className='detail-description'>
            <p>Peut-être avez-vous déjà consulté une page Web ou un document utilisant ce type d’écriture sans toutefois y avoir porté une attention particulière. Le lorem ipsum est un texte de substitution utilisé dans la conception graphique. Ce langage factice rassemble toutes les lettres de l’alphabet dans un court paragraphe. La répartition des caractères y est équitable pour que l’attention du lecteur soit portée sur l’aspect graphique du document, et non sur le contenu textuel. Plusieurs logiciels et applications de mise en page en ont d’ailleurs fait leur « faux texte » par défaut. </p>
          </div>
        </div>
        <div className='detail-buttons-div'>
          <button className='detail-btn-return'>Return</button>
          <button className='detail-btn-edit'>Edit</button>
        </div>
      </main>
    </>
  )
}