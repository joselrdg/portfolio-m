import "./ContactForm.css";

import React, { useState } from "react";

import { postFormContact } from "../../../services/FormService";

const EMAIL_PATTERN =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const NUM_PATTERN = /[0-9]/;
const CAPITAL_PATTERN = /[A-Z]/;

const validators = {
  email: (value) => {
    let message;
    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Email is invalid";
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = "Password is required";
    } else if (!NUM_PATTERN.test(value)) {
      message = "Your password must contain at least one number";
    } else if (!CAPITAL_PATTERN.test(value)) {
      message = "Your password must contain at least one capital letter";
    } else if (value && value.length < 8) {
      message = "Your password must contain at least 8 characters";
    }
    return message;
  },
};

export const ContactForm = ({ set }) => {
  const [state, setstate] = useState({
    fields: {
      name: "",
      email: "",
      message: "",
    },
    errors: {
      email: validators.email(),
      password: validators.password(),
    },
  });

  const [touched, setTouched] = useState({});

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const handleSend = (e) => {
    const { fields } = state;
    e.preventDefault();
    // if (isValid()) {
      set()
      postFormContact(fields)
        .then((r) => console.log(r))
        .catch((e) => console.error(e));
    // }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setstate((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: validators[name] && validators[name](value),
      },
    }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const onFocus = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false,
    }));
  };

  const { name, email, message } = state.fields;

  return (
    <div style={{ color: "white" }}>
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
                    <input
                      className="app-form-control"
                      type="text"
                      placeholder="NAME"
                      name="name"
                      value={name}
                      onChange={onChange}
                      onBlur={onBlur}
                      onFocus={onFocus}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="text"
                      placeholder="EMAIL"
                      name="email"
                      value={email}
                      onChange={onChange}
                      onBlur={onBlur}
                      onFocus={onFocus}
                    />
                  </div>
                  {/* <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div> */}
                  <div className="app-form-group message">
                    <input className="app-form-control" 
                      type="text"
                      placeholder="MESSAGE"
                      name="message"
                      value={message}
                      onChange={onChange}
                      onBlur={onBlur}
                      onFocus={onFocus}
                     />
                  </div>
                  <div className="app-form-group buttons">
                    <button onClick={set} className="app-form-button">
                      CANCEL
                    </button>
                    <button onClick={handleSend} className="app-form-button">
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
