import { useProfile } from "../context/ProfileContext";

export const Navbar = () => {
  const context = useProfile();
  return <div>Hi, {context?.firstName}</div>;
};
