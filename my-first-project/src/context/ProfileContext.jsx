import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const ProfileContext = createContext(null);
export const ProfileContextProvider = ({ children }) => {
  const [profile, setProfile] = useState({});

  const { data } = useFetch("https://dummyjson.com/users/1");
  useEffect(() => {
    setProfile(data);
  }, [data]);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};
