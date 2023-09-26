import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .txtField__input {
    background-color: #53585d;
    font-size: 18px;
    font-weight: 300;
    color: #e5e5e5;
    height: 50px;
    margin-bottom: 50px;
    border-radius: 4px;
    outline: none;
    border: none;
    width: 1000px;
  }


  .txtField__input::placeholder{
    color: #e5e5e5;
  }

  input:required:invalid {
  border-bottom: 3px solid red;
}

input:required:valid {
  border: 3px solid green;
}
`;

const CampoDeTexto = (props) => {
  const { placeholder, value, updateValue, required, onFocus, type } = props;

  const cambiarValor = (e) => {
    updateValue(e.target.value);
  };
  return (
    <StyledDiv>
      <input
        placeholder={placeholder}
        className="txtField__input"
        onChange={cambiarValor}
        value={value}
        required={required}
        onFocus={onFocus}
        type={type}
      />
    </StyledDiv>
  );
};

export default CampoDeTexto;
