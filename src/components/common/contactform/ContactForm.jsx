import './ContactForm.css';

import React, { useState } from 'react'

import { postFormContact } from "../../../services/FormService";


export const ContactForm = ({set}) => {

  const [state, setstate] = useState({name: 'José Luis Rodríguez', message: 'Hola que tal, y eso y tal y cual y pascual ahi queda eso'})

  const handleSend = () => {
    console.log('Send')
    postFormContact(state).then(r => console.log(r)).catch(e => console.error(e))
  }
    return (
        <div style={{color: 'white', }}>
            <div className="background">
  <div className="containerForm">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>ME.</span>
          </div>
          {/* <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div> */}
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"/>
            </div>
            {/* <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div> */}
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button onClick={set} className="app-form-button">CANCEL</button>
              <button onClick={handleSend} className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

