import LogoutInt from '@/interfaces/rest/auth/logout';
import { useMutation } from '@tanstack/react-query';

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: LogoutInt,
  });
};
