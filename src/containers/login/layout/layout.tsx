import * as styled from '../login.styles';

const Layout = () => {
  return (
    <styled.DivLayout>
      <styled.DivIlustracao>
        {/* Logo */}
        <img src="./static/images/zustand.png" alt="zustand_illustration"></img>
      </styled.DivIlustracao>
      <h1>Seja bem vindo!</h1>
      <h2>
        Esse é um ambiente de teste para <br />
        visualização do funcionamento de ferramentas.
      </h2>
    </styled.DivLayout>
  );
};

export default Layout;
