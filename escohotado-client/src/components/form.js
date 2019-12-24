import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function Form({ history }) {
  const [form, setForm] = useState({});
  const { t } = useTranslation();
  const { name, email, message } = form;

  const sendFormAdmin = () => {
    let templateParams = {
      from_name: email,
      email: "christiancastillejo@gmail.com",
      name,
      message
    };
    emailjs
      .send(
        "gmail",
        "template_PbFL4bbD",
        templateParams,
        "user_wbtDxlHqaPvuPpe1OJp09"
      )
      .then(a => {
        alert("Tu mensaje ha sido enviado. Nos pondremos en contacto contigo tan pronto como podamos.");
        setForm({});
      })
      .catch(err => {
        alert("NOOOO");
        throw err;
      });
  };
  // const sendFormClient = () => {
  //   let templateParams = {
  //     from_name: "emboscados@gmail.com",
  //     email: email,
  //     name,
  //     message
  //   };
  //   emailjs
  //     .send(
  //       "gmail",
  //       "template_PbFL4bbD",
  //       templateParams,
  //       "user_wbtDxlHqaPvuPpe1OJp09"
  //     )
  //     .then(() => {
  //       history.push("/confirmacion");
  //     })
  //     .catch(err => {
  //       alert("Error");
  //       throw err;
  //     });
  // };

  return (
    <div className="form">
      <input
        className="input-form"
        placeholder="Nombre*"
        name="name"
        value={form.name}
        onChange={event =>
          setForm({
            ...form,
            [event.target.name]: event.target.value
          })
        }
      />
      <input
        className="input-form"
        placeholder="Email*"
        type="email"
        name="email"
        onChange={event =>
          setForm({
            ...form,
            [event.target.name]: event.target.value
          })
        }
      />
      <textarea
        className="textarea-form"
        placeholder="Mensaje*"
        name="message"
        onChange={event =>
          setForm({
            ...form,
            [event.target.name]: event.target.value
          })
        }
      />
      <p>*Todos los campos son obligatorios.</p>
      {name && email && message && <button onClick={() => sendFormAdmin()}>
        {t("form.send")}
      </button>}
      </div>
  );
}

export default Form;
