import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .txtField__input {
    font-family:'Roboto', sans-serif;
    background-color: #53585d;
    font-size: 18px;
    font-weight: 300;
    color: #e5e5e5;
    height: auto;
    margin-bottom: 50px;
    border-radius: 4px;
    outline: none;
    border: none;
    width: 1000px;
  }


  .txtField__input::placeholder{
    color: #e5e5e5;
    font-family:'Roboto', sans-serif;
    font-weight: 300;
  }

  textarea:required:invalid {
  border-bottom: 3px solid red;
}

textarea:required:valid {
  border: 3px solid green;
}
`;

const AreaDeTexto= (props) => {
  const { placeholder, value, updateValue, required, onFocus } = props;

  const cambiarValor = (e) => {
    updateValue(e.target.value);
  };
  return (
    <StyledDiv>
      <textarea
        placeholder={placeholder}
        className="txtField__input"
        onChange={cambiarValor}
        value={value}
        required={required}
        onFocus={onFocus}
        rows="4" // Número de filas inicial
        cols="50" // Número de columnas inicial
        style={{ resize: 'inline', width: '100%' }}
      />
    </StyledDiv>
  );
};

export default AreaDeTexto;