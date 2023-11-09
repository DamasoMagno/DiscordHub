import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1244px;
    margin: 0 auto;
    padding: 1rem 1rem;

    h3 {
      color: #fff;
      font-size: 1.25rem;
      font-weight: bold;
      font-family: "Roboto Slab", sans-serif;
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

      nav {
        display: none;
        gap: 1rem;

        @media (min-width: 728px){
          display: flex;
        }

        a {
          text-decoration: none;
          color: #fff;
          font-size: 1rem;
        }
      }

      button {
        background-color: #00b37e;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 4px;
        font-size: 1rem;
        padding: 0 2rem;
        cursor: pointer;
        color: white;
        height: 2rem;
      }
    }
  }
`;