import { useState } from 'react'
import { User } from '../../@types/user'
import { useApi } from '../../hooks/useApi';
import { AuthContext } from './AuthContext';

export default function AuthProvider({children}: { children: JSX.Element}) {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    async function signin(email: string, password: string) {
        const data = await api.signin(email, password);

        if(data.user && data.token) {
          setUser(data.user);
          return true;
        }
        
        return false;
    }

    async function signout() {
        await api.logout();
        setUser(null);
    }

  return (
    <AuthContext.Provider value={{ user, signin, signout  }}>
        {children}
    </AuthContext.Provider>
  )
}
