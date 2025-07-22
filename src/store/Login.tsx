/* eslint-disable import/no-unresolved */
import { LoginType } from '~/types/LoginType';
import { api } from '../services/api';
import { AlertDialogType } from '~/types/AlertDialogType';
import { ALERT_TYPE } from 'react-native-alert-notification';
import { AlertDialog } from '~/components/Alerts';

export const login = async (data: LoginType) => {
  return await api
    .post(`/auth`, data)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      const dadosAlert: AlertDialogType = {
        textBody: 'Não foi possível realizar o login, por favor tente novamente!',
        title: 'Oops!',
        typeAlert: ALERT_TYPE.DANGER,
        textButton: 'Fechar',
      };

      AlertDialog(dadosAlert);
    });
};
