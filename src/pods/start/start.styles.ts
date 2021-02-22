import { css } from "emotion";

//CSS
import styles from "../../mystyles.scss";

const imagen = require("../../assets/personalCard.svg");

export const imageContainer = css`
  margin: 2.5em;
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
