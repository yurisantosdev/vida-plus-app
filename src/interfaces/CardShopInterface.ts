import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';

export interface CardShopInterface extends ComponentProps<typeof TouchableOpacity> {
  title: string;
  quantidade: number;
}

