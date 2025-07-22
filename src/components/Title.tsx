import { Text } from 'react-native';
import { TitleInterface } from '~/interfaces/TitleInterface';

export default function Title({ title }: TitleInterface) {
  return (
    <Text className="mb-1 text-center text-2xl font-extrabold tracking-tight text-neutral-900">
      {title}
    </Text>
  );
}
