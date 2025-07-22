import { ComponentProps } from 'react';
import { Text } from 'react-native';
import { IconName } from '~/types/IconNameType';

export interface TitleInterface extends ComponentProps<typeof Text> {
  title: string;
}

export interface SubtitleInterface extends ComponentProps<typeof Text> {
  title: string;
  icon?: IconName;
}

