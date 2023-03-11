import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");
  const [errorSelectTwo, setErrorSelectTwo] = useState("");

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeUserMail = (event) => {
    setUserMail(event.target.value);
  };


  const validUserName = (userName) => {

    if (userName.length >= 3 && userName[0]!==" ") {  
      return true;
    } else {
      setErrorSelect(`Por favor chequea que el nombre sea correcto`);
      return false;
    }
  };

  const validUserMail = (userEmail) => {
    
    if (userEmail.length >= 6) {  
      return true;
    } else {
      setErrorSelectTwo(`Por favor chequea que el email sea correcto`);
      return false;
    }

  }

  const completeInput = (userName, userMail) => {
    if (userName === "" || userMail === "") {
      setErrorSelect("Completar los campos");
      setSend(false);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorSelect("");
    setErrorSelectTwo("");
    setSend(false);
    const isNameValid = validUserName(userName);

    const isEmailValid = validUserMail(userMail);

    const isCompleteInput = completeInput(userName, userMail);

    if (isNameValid && isEmailValid && isCompleteInput) {
      setSend(true);
      setErrorSelect("");
      setErrorSelectTwo("");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="mail"
          placeholder="mail"
          value={userMail}
          onChange={onChangeUserMail}
        />
        <input type="submit" value="enviar" />
      </form>
      <div className="error">{errorSelect}</div>
      <div className="error">{errorSelectTwo}</div>
      {send && (
        <Card
          userName={userName}
          userMail={userMail}
        />
      )}
    </div>
  );
}

export default App;
