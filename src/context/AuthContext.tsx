import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../utils/storage";
import User from "../types/User";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (userData: User) => void;
  logout: () => void;
  isAppLoaded: boolean; // Add this to track app loading state
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const login = (userData: User) => {
    setUser(userData);
    saveToLocalStorage("user", userData); // Store user data in localStorage
  };

  const logout = () => {
    setUser(null);
    removeFromLocalStorage("user"); // Clear user data from localStorage
  };

  // On app load, check localStorage for user data
  useEffect(() => {
    const savedUser = getFromLocalStorage<User>("user");
    if (savedUser) {
      setUser(savedUser);
    }
    setIsAppLoaded(true);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, isAppLoaded }}>
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
