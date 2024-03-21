import { useProfile } from "../context/ProfileContext";

export const Profile = () => {
  const context = useProfile();
  return (
    <>
      {context && Object.keys(context).length > 0 ? (
        <>{context?.firstName.concat(" ", context?.lastName)}</>
      ) : (
        "No Data"
      )}
    </>
  );
};
