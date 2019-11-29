import React from 'react';

export default function SignIn() {
  return (
    <form>
      <div>
        <p>SEU E-MAIL</p>
        <input type="email" placeholder="exemplo@email.com" />
        <p>SUA SENHA</p>
        <input type="text" placeholder="*********" />
        <button type="submit">
          <strong>Entrar no sistema</strong>
        </button>
      </div>
    </form>
  );
}
