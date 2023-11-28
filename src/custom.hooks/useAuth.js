import { onAuthStateChanged } from "firebase/auth";
import  { useEffect, useState } from "react";
import { auth } from "../firebase.config";

const useAuth = () => {
  const [currentUuser, setCurrentUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });
  return {currentUuser};
};

export default useAuth;
