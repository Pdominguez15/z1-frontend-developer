import { css } from "emotion";

//CSS
import styles from "../../mystyles.scss";

const imagen = require("../../assets/personalCard.svg");

export const h1 = css`
  font-family: ${styles.principalFont};
  font-weight: bold;
  font-style: italic;
  color: ${styles.principalColor};
  font-size: 21px;
  line-height: 24px;
  letter-spacing: 0;
  margin: 1em;
`;

export const header = css`
  border: 1px solid rgba(47, 0, 121, 0.1);
`;

export const container = css`
  margin: 2em 1.5em 0.5em 1.5em;
  display: flex;
  flex-direction: column;
`;

export const h2 = css`
  font-family: ${styles.principalFont};
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

export const text = css`
  margin-top: 1em;
  font-family: ${styles.principalFont};
  font-size: 16px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

export const button = css`
  position: absolute;
  background-color: ${styles.principalColor};
  border-radius: 24px;
  width: 60%;
  padding: 0.7em 0 0.7em 0;
  color: #ffffff;
  font-family: ${styles.principalFont};
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  border: none;
  outline: none;
`;

export const imageContainer = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 4em;
  border-radius: 20px;
  overflow: auto;
  img {
    width: 100%;
  }
`;

export const containerResult = css`
  position: relative;
`;

export const imageContainerValid = css`
  border: 2px solid green;
`;

export const imageContainerInvalid = css`
  border: 2px solid red;
`;

export const result = css`
  border-radius: 4px;
  background-color: #69cc8b;
  width: 35%;
  display: flex;
  position: absolute;
  top: 94%;
  right: 15%;

  div {
    img {
      width: 100%;
    }
  }
  p {
    color: #ffffff;
    font-family: ${styles.principalFont};
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.75px;
    line-height: 12px;
    text-align: right;
    align-self: center;
  }
`;

export const accepted = css`
  background-color: #69cc8b;
`;

export const rejected = css`
  background-color: #c00000;
`;
