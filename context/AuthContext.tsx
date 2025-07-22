import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { DeviceEventEmitter } from 'react-native';

interface AuthContextType {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const verificarToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
    };
    verificarToken();

    const tokenListener = DeviceEventEmitter.addListener('tokenAtualizado', verificarToken);

    return () => {
      tokenListener.remove();
    };
  }, []);

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};
