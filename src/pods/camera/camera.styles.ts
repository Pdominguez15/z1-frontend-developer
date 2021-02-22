import { css } from "emotion";

//CSS
import styles from "../../mystyles.scss";

export const container = css`
  background-color: #1d1d1d;
  overflow: auto;
  height: 100vh;
  padding: 0 2em 0 2em;
`;

export const h1 = css`
  margin-top: 3em;
  padding: 1em;
  font-family: ${styles.principalFont};
  color: #ffffff;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

export const text = css`
  color: #ffffff;
  font-family: ${styles.principalFont};
  font-size: 16px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

export const cameraContainer = css`
  height: 200px;
  margin-top: 4em;
  border-radius: 20px;
  overflow: auto;
  video {
    width: 100%;
  }
`;

export const cameraContainerValid = css`
  border: 2px solid green;
`;

export const cameraContainerInvalid = css`
  border: 2px solid red;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5em;
`;

export const button = css`
  background: none;
  border: none;
  color: #ffffff;
  font-family: ${styles.principalFont};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 24px;
  text-align: center;
`;

export const message = css`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const textMessage = css`
  font-family: ${styles.principalFont};
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 16px;
`;
