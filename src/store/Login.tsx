/* eslint-disable import/no-unresolved */
import { LoginType } from '~/types/LoginType';
import { api } from '../services/api';

export const login = async (data: LoginType) => {
  return await api
    .post(`/auth`, data)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert('Não foi possível realizar o login, por favor tente novamente!');
    });
};
