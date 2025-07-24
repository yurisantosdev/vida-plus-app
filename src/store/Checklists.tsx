/* eslint-disable import/no-unresolved */
import { api } from '../services/api';
import { AlertDialogType } from '~/types/AlertDialogType';
import { ALERT_TYPE } from 'react-native-alert-notification';
import { AlertDialog } from '~/components/Alerts';
import { ChecklistsType } from '~/types/ChecklistsType';

export const createChecklist = async (data: ChecklistsType) => {
  return await api
    .post(`/checklists/create`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      const dadosAlert: AlertDialogType = {
        textBody: 'Não foi possível realizar registrar o checklist, por favor tente novamente!',
        title: 'Oops!',
        typeAlert: ALERT_TYPE.DANGER,
        textButton: 'Fechar',
      };

      AlertDialog(dadosAlert);
    });
};

export const updateChecklist = async (data: ChecklistsType) => {
  return await api
    .put(`/checklists/update`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const dadosAlert: AlertDialogType = {
        textBody: 'Não foi possível atualizar o checklist, por favor tente novamente!',
        title: 'Oops!',
        typeAlert: ALERT_TYPE.DANGER,
        textButton: 'Fechar',
      };

      AlertDialog(dadosAlert);
    });
};

export const findAllChecklists = async (uscodigo: string) => {
  return await api
    .get(`/checklists/findAll/${uscodigo}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      const dadosAlert: AlertDialogType = {
        textBody: 'Não foi possível realizar a consulta dos checklists, por favor tente novamente!',
        title: 'Oops!',
        typeAlert: ALERT_TYPE.DANGER,
        textButton: 'Fechar',
      };

      AlertDialog(dadosAlert);
    });
};

export const findFinalizados = async (uscodigo: string) => {
  return await api
    .get(`/checklists/find/finalizados/${uscodigo}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      const dadosAlert: AlertDialogType = {
        textBody: 'Não foi possível realizar a consulta dos checklists, por favor tente novamente!',
        title: 'Oops!',
        typeAlert: ALERT_TYPE.DANGER,
        textButton: 'Fechar',
      };

      AlertDialog(dadosAlert);
    });
};

export const findChecklist = async (ckcodigo: string) => {
  return await api
    .get(`/checklists/find/${ckcodigo}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      const dadosAlert: AlertDialogType = {
        textBody: 'Não foi possível realizar a consulta do checklist, por favor tente novamente!',
        title: 'Oops!',
        typeAlert: ALERT_TYPE.DANGER,
        textButton: 'Fechar',
      };

      AlertDialog(dadosAlert);
    });
};
