import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { AuthUserRole } from '../../firebase/types';
import { doesUserHaveAdminRole } from './helper';
import type { AuthContextType } from './types';
import { set } from 'firebase/database';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [role, setRole] = useState<AuthUserRole | null>('guest');
    const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         setCurrentUser(user);
    //         if (user) {
    //             // Here you can implement logic to determine user role
    //             setRole('authorized');
    //         } else {
    //             setRole('guest');
    //         }
    //         setLoading(false);
    //     });

    //     return unsubscribe;
    // }, []);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (!user) {
                setRole('guest');
                setCurrentUser(null);
                setLoading(false);
            }
            else {
                const isAdmin = doesUserHaveAdminRole(user.id as string);
                setRole(isAdmin ? 'admin' : 'authorized');
                setCurrentUser(user);
                setLoading(false);
            }
        })
        return unsubscribe;
    }, []);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};