import React, { useState } from "react";
import "./usuarios.css";

function Usuarios() {
  const [perfil, setPerfil] = useState("");

  const handleChange = (e) => {
    setPerfil(e.target.value);
  };

  return (
    <div className="container">

      <select className="select" name="perfil" id="perfil" onChange={handleChange}>
        <option value="">Esscolha um opção</option>
        <option value="alunos"><strong>Alunos</strong></option>
        <option value="professores"><strong>Professores</strong></option>
      </select>

      {perfil === "alunos" && (
        <div style={{ marginTop: "20px" }}>
         
          <form>
            <label>Nome do Aluno:</label>
            <input type="text" name="nomeAluno" />

            <br /><br />

            <label>Matrícula:</label>
            <input type="text" name="matricula" />

            <br /><br />

            <label>Turma:</label>
            <input type="text" name="turma" />

            <br /><br />

            <button type="submit">Cadastrar Aluno</button>
          </form>
        </div>
      )}

      {perfil === "professores" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Cadastro de Professor</h3>
          <form>
            <label>Nome do Professor:</label>
            <input type="text" name="nomeProfessor" />

            <br /><br />

            <label>Disciplina:</label>
            <input type="text" name="disciplina" />

            <br /><br />

            <label>E-mail:</label>
            <input type="email" name="email" />

            <br /><br />

            <button type="submit">Cadastrar Professor</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Usuarios;
