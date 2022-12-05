import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsuscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

//Usar al llamar desde otro archivo para crear el State del user
export const useCurrentUser = () => useContext(UserContext);
