import React from "react";
// import styles from "./styles.module.css";
import loader from '../../../../public/icons/loader.gif';
import styled from 'styled-components';

const Page = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

const Gif = styled.img`
  width: 200px;
  height: 200px;
`

const Loader: React.FC = () => {
  return (
    // <div className={styles.loader}>
    //   <div className={styles.one}></div>
    //   <div className={styles.two}></div>
    //   <div className={styles.three}></div>
    // </div>
    <Page>
      <Gif src={loader} alt="" />
    </Page>
  );
};

export default Loader;
