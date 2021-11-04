import styled from "styled-components";

export const Container = styled.div`
  form,
  > div {
    width: fit-content;
    margin: 0 auto;
  }

  form {
    margin-bottom: 10px;

    > :first-child {
      margin-right: 10px;
    }

    input,
    button {
      padding: 10px;
      border: 1px solid #333;
      border-radius: 15px;
    }
  }
`;
