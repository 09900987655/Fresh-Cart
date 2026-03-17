import { createContext, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider(props) {
  const [userToken, setUserToken] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider
      value={{
        userToken,
        setUserToken,
        isOpen,
        setIsOpen,
        userData,
        setUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}