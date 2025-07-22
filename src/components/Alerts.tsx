import { Dialog, Toast } from 'react-native-alert-notification'
import { AlertDialogType } from '../types/AlertDialogType'
import { AlertToastType } from '../types/AlertToastType'
import { Vibration } from 'react-native'

export function AlertDialog(props: AlertDialogType) {
  Vibration.vibrate()

  Dialog.show({
    type: props.typeAlert,
    title: props.title,
    textBody: props.textBody,
    button: props.textButton,
    onPressButton: props.onPressButton ? props.onPressButton : null,
    closeOnOverlayTap: true
  })
}

export function AlertToast(props: AlertToastType) {
  Vibration.vibrate()

  Toast.show({
    type: props.typeAlert,
    title: props.title,
    textBody: props.textBody,
    autoClose: 3000
  })
}
