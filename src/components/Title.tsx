import { Text, View } from 'react-native';
import { SubtitleInterface, TitleInterface } from '~/interfaces/TitleInterface';
import { Ionicons } from '@expo/vector-icons';

export function Title({ title }: TitleInterface) {
  return (
    <Text className="text-center text-2xl font-extrabold tracking-tight text-neutral-900">
      {title}
    </Text>
  );
}

export function SubTitleIcon({ title, icon }: SubtitleInterface) {
  return (
    <View className="flex-row items-center justify-start gap-1">
      <Ionicons name={icon} size={20} color="#000" />

      <Text
        numberOfLines={1}
        className="text-center text-lg font-medium tracking-tight text-neutral-900">
        {title}
      </Text>
    </View>
  );
}
