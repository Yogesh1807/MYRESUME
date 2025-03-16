import { Layout } from "antd";
import styled from "styled-components";

export const LayoutStyle = styled(Layout)<{ primarycolor: string }>`
  // your styles here
  --primary-color: ${(props) => props.primarycolor};

  /* height: 100vh; */
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
    position: sticky;
    top: 0;
    z-index: 1;
  }

  strong {
    font-weight: 700;
  }
  p {
    font-weight: 400;
    color: #00000094;
    font-size: clamp(1rem, 4vw, 1rem);
  }

  .rightMenu {
    /* list-style: none;
    display: flex;
    flex-direction: row;
    
    padding: 0 20px;
    margin: 0; */
  }
  .customIcon {
    color: #fff;
    cursor: pointer;
  }
  .rightMenu
    > .ant-spin-nested-loading
    > .ant-spin-container
    > .ant-list-items {
    display: flex;
  }
  .rightMenu
    > .ant-spin-nested-loading
    > .ant-spin-container
    > .ant-list-items
    > .ant-list-item {
    padding: 12px;
    border: 0;
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
  .socialAccounts {
    display: flex;
    gap: 5%;
    font-size: 2rem;
  }
  .socialAccounts > a {
    color: var(--primary-color);
  }
  .ant-card-bordered .ant-card-cover {
    padding: 40px;
  }
  .ant-card-head-title {
    color: rgb(0 0 0 / 45%);
  }

  @media (max-width: 768px) {
    .rightMenu {
      display: none;
    }
    .barsMenu {
      display: block;
      color: white;
    }
  }
`;
