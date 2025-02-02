import { ReactNode, useContext, createContext, useState } from "react";

interface AuthUser {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: AuthUser | null;
  setAuth: (authUser: AuthUser) => void;
  setUserData: (userData: AuthUser) => void;
}

// Create a context with an explicit type
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const setAuth = (authUser: AuthUser) => {
    setUser(authUser);
  };

  const setUserData = (userData: AuthUser) => {
    setUser({ ...userData });
  };

  // Use curly braces to pass an object as the value
  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
