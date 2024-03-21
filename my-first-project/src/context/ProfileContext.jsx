import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ProfileContext = createContext(null);
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

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("Context must be valid");
  }
  return context;
};
