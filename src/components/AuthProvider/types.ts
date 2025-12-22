import { User } from 'firebase/auth';
import type { AuthUserRole } from '../../firebase/types';

export interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  role: AuthUserRole | null;
}
