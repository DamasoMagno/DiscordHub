import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 1px solid #323238;

  .banner {
    width: 100%;
    object-fit: cover;
    height: 80px;
  }

  .content {
    margin-top: -3rem;
    padding: 0 1rem;

    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .info {
      display: flex;
      flex-direction: column;

      strong {
        color: white;
        font-size: 1.5rem;
        margin-top: 0.5rem;
      }

      img {
        width: 5rem;
        height: 5rem;
        border-radius: 4px;
      }
    }

    .status {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;
      transform: translateY(-50%);

      ul {
        list-style: none;
        color: white;

        display: flex;
        align-items: center;
      }

      span {
        background-color: #2d2d31;
        border-radius: 8px;
        font-size: 0.875rem;
        color: #fff;
        width: 47px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        div {
          border: 5px solid green;
          border-radius: 100%;
        }
      }
    }
  }

  .tags {
    list-style: none;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.25rem;
    margin-top: 0.5rem;
    padding: 0 1rem 1rem;

    li {
      background-color: #2d2d31;
      color: #fff;
      border-radius: 8px;
      padding: 0.25rem 1rem;
    }
  }
`;
