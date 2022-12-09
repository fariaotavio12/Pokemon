import React, { useEffect, useState } from "react";
import api from "../servicos/api";

export default function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/regioes")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  const shoot = () => {
    alert(user.regioes[1]);
  }
  return (
    <div className="App">
      <div>asda</div>
      <button onClick={shoot}>asdasd</button>
    </div>
  )
}