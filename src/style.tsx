import { Layout } from "antd";
import styled from "styled-components";

export const LayoutStyle = styled(Layout)<{ primaryColor: string }>`
  // your styles here
  --primary-color: ${(props) => props.primaryColor};

  height: 100vh;
  .fullName {
    text-transform: uppercase;
  }
  .logoHeader {
    padding: 0;
    color: white;
    text-align: center;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    background-color: var(--primary-color);
  }

  .rightMenu {
    list-style: none;
    display: flex;
    flex-direction: row;
    /* gap: 15%; */
    padding: 0 20px;
    margin: 0;
  }

  .barsMenu {
    /* float: right;
    height: 32px;
    padding: 6px;
    margin-top: 8px; */
    display: none;
    /* background: none; */
  }
  .barsMenu:hover {
    color: white;
  }

  .tagListFlex {
    text-transform: uppercase;
    font-weight: bold;
  }
  .tagButton {
    border-radius: 5px;
  }

  @media (max-width: 765px) {
    .rightMenu {
      display: none;
    }
    .barsMenu {
      display: block;
      color: white;
    }
  }
`;
