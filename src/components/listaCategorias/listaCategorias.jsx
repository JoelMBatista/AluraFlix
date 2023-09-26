import styled from "styled-components";

const StyledDiv = styled.div`

  .txtField__input {
    background-color: #53585d;
    font-size: 18px;
    font-weight: 200;
    color: #e5e5e5;
    height: 50px;
    margin-bottom: 50px;
    border-radius: 4px;
    outline: none;
    border: none;
    width: 1000px;
  }

  select:required:invalid {
  border-bottom: 3px solid red;
}

select:required:valid {
  border: 3px solid green;
}
`;

const ListaCategorias = (props) => {

  const{value, updateValue, required} = props
  




  const cambios =(e)=>{
    updateValue(e.target.value)
  }

  return (
    <StyledDiv>
       <select className="txtField__input" value={value} onChange={cambios} required={required}>
        <option value="" defaultValue="" hidden>Escoja una categoría</option>
        {props.Mostrarcategoria.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </StyledDiv>
  );
};

export default ListaCategorias;
