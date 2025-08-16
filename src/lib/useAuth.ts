import { useEffect, useState } from "react";
import { onAuthStateChanged, User, getIdToken, getIdTokenResult } from "firebase/auth";
import { auth } from "./firebaseClient";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [claims, setClaims] = useState<any>(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        const token = await getIdToken(currentUser, true);
        const tokenResult = await getIdTokenResult(currentUser);

        setIdToken(token);
        setClaims(tokenResult.claims); 
      } else {
        setIdToken(null);
        setClaims(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await auth.signOut();
    setUser(null);
    setIdToken(null);
    setClaims(null);
  };

  return { user, loading, logout, idToken, claims };
}
