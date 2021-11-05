import styled from "styled-components";

export const Container = styled.div`
  form {
    width: fit-content;
    margin: 0 auto;
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

  .flex {
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 10px;

    .map {
      width: 50%;

      > div {
        width: fit-content;
        margin: 0 auto;
      }
    }
  }
`;
