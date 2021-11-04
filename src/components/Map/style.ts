import styled from "styled-components";

export const Container = styled.div`
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  .popup {
    border: 1px solid #333;
    border-radius: 15px;
    background-color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    b {
      text-transform: uppercase;
    }
  }
`;
