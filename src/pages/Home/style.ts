import styled from "styled-components";

export const Container = styled.div`
  form {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 10px;

    > :first-child {
      margin-right: 10px;
    }
  }

  .form-theme {
    padding: 10px;
    border: 1px solid #333;
    border-radius: 15px;
  }

  .form-theme:active {
    background-color: var(--secondary-color);
    color: #fff;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    .flex {
      display: flex;
      flex-direction: column !important;

      .map {
        width: 100% !important;
      }
    }
  }

  .flex {
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 60px;

    .map {
      width: 50%;

      > div {
        width: fit-content;
        margin: 0 auto;
      }
    }

    .repo {
      h4 {
        margin-top: 0;
        text-transform: uppercase;
      }

      .filters {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: fit-content;

        input {
          width: 270px;
        }

        div {
          display: flex;
          justify-content: space-between;
        }

        button:focus {
          background-color: var(--secondary-color);
          color: #fff;
        }
      }

      a {
        color: var(--primary-color);
        text-decoration: none;
      }
      a:hover {
        color: var(--primary-color);
        text-decoration: underline;
      }
      a:visited {
        color: var(--secondary-color);
        text-decoration: none;
      }
    }
  }
`;
