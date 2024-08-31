import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
height: 380px;;
gap: 32px;

div p {
  text-align: left;
  padding: 16px 0;
}

`


export const ContainerHour = styled.div`
display: flex; 
flex-direction: column;
height: 100%;
gap: 70px;

footer{
  margin-top: auto
}

div label{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

button[type='submit']:disabled {
  cursor: not-allowed
}


`