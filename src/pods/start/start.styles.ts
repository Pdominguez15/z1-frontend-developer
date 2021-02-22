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

export const imageContainer = css`
  margin-top: 2em;
  display: flex;
  position: relative;
  padding: 1.5em;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 20px -5px rgba(47, 0, 121, 0.3);
  border-radius: 12px;
  align-items: center;
  img {
    width: 100%;
  }
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
