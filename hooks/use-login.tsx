import { useState } from 'react';
import { API } from '../axios';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login = async () => {
    setLoading(true);
    try {
      const result = await API.post('/auth/login', {
        email: 'merveillevaneck@gmail.com',
        password: 'M3reille',
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return [login, { loading }] as const; 
}