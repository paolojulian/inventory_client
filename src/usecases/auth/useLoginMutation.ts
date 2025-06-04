import { useMutation } from '@tanstack/react-query';
import LoginInt from '../../interfaces/rest/auth/login';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: LoginInt,
  });
};
