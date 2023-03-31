'use client';

import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from 'react';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
};

type State = {
  loading: boolean;
  data: User | null;
  error: string | null;
};

type AuthState = State & {
  setAuthState: Dispatch<SetStateAction<State>>;
};

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

export default function AuthContext({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  });

  // При запуске приложения проверяет есть ли в куки токен
  const fetchUser = async () => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const jwt = getCookie('jwt');

      if (!jwt) {
        return setAuthState({
          data: null,
          error: null,
          loading: false,
        });
      }

      const response = await axios.get('http://localhost:3000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
