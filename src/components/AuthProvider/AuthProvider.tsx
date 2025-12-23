import { AuthContextType } from './types';
import { useAuthState } from './useAuthState';
import { createContext } from 'react';

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, role, loading } = useAuthState();
  console.log(currentUser, role, loading);
  return <AuthContext.Provider value={{ currentUser, role, loading }}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
