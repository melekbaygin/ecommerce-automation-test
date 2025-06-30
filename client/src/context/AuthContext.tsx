import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction = 
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGOUT' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isAuthenticated: true
      };
    case 'LOGOUT':
      return {
        user: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication
    const mockUsers = [
      { id: '1', email: 'test@example.com', password: '123456', name: 'Test Kullanıcı' },
      { id: '2', email: 'admin@test.com', password: 'admin123', name: 'Admin Kullanıcı' }
    ];

    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { id: user.id, email: user.email, name: user.name }
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};