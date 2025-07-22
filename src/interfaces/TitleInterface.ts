import { ComponentProps } from 'react';
import { Text } from 'react-native';

export interface TitleInterface extends ComponentProps<typeof Text> {
  title: string;
}
