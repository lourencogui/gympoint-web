import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #ee4d64;
`;

export const Content = styled.form`
  max-width: 650px;
  min-width: 400px;
  background: #fff;
  padding: 60px 30px;
  position: absolute;
  top: calc(50% - 200px);
  right: calc(50% - 200px);
  border-radius: 4px;

  div {
    height: 200px;
    background: #fff;

    p {
      margin-bottom: 10px;
      font-weight: bold;
    }

    input {
      width: 100%;
      height: 45px;
      border-radius: 4px;
      border: 1px solid #ddd;

      & + p {
        margin-top: 15px;
      }

      ::placeholder {
        padding: 5px;
      }
    }

    button {
      margin: 10px 0;
      padding: 10px 0;
      border: none;
      width: 100%;
      height: 45px;
      background: #ee4d64;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
    }
  }
`;
