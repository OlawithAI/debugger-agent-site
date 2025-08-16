import { useEffect, useState } from "react";
import { onAuthStateChanged, User, getIdToken, getIdTokenResult } from "firebase/auth";
import { auth } from "./firebaseClient";

// Define expected custom claims
type CustomClaims = {
  admin?: boolean;
  [key: string]: unknown;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [claims, setClaims] = useState<CustomClaims | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        try {
          const token = await getIdToken(currentUser, true);
          const tokenResult = await getIdTokenResult(currentUser);

          setIdToken(token);
          setClaims(tokenResult.claims as CustomClaims);
        } catch (err) {
          console.error(
            "❌ Failed to get Firebase token/claims:",
            err instanceof Error ? err.message : err
          );
          setIdToken(null);
          setClaims(null);
        }
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
