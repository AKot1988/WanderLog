import { useState, useEffect } from 'react';
import { auth } from '../../firebase/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import type { AuthUserRole } from '../../firebase/types';
import { doesUserHaveAdminRole } from './helper';

export const useAuthState = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [role, setRole] = useState<AuthUserRole | null>('guest');
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (!user) {
        setRole('guest');
        setCurrentUser(null);
        setLoading(false);
      } else {
        setCurrentUser(user);
        const isAdmin = await doesUserHaveAdminRole(user?.uid as string);
        setRole(isAdmin ? 'admin' : 'authorized');
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  return { currentUser, role, loading };
};