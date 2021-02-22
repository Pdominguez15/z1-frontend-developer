import React from "react";

export interface Context {
  image: string;
  setImage: (value: string) => void;
  status: boolean;
  setStatus: (value: boolean) => void;
}

export const MyContext = React.createContext<Context>({
  image: "",
  setImage: (value) => {},
  status: false,
  setStatus: (value) => {},
});

export const MyContextProvider: React.FC = (props) => {
  const [image, setImage] = React.useState<string>("");
  const [status, setStatus] = React.useState<boolean>(false);

  return (
    <MyContext.Provider value={{ image, setImage, status, setStatus }}>
      {props.children}
    </MyContext.Provider>
  );
};
