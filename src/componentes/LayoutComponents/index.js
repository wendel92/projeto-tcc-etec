//  LayoutComponents está responsavel por fazer a conexão entre os dados de
// imput dos componentes Login Cadastro incluindo o Css de Ambos

import './style.css';

export const LayoutComponents = (props) => {
  return (
    <div className="container">
      <div className="container-login">
      <div className="wrap-login">{props.children}</div>
      </div>
    </div>
  );
};
