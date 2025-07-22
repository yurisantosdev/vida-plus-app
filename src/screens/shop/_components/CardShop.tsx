import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CardShopInterface } from '~/interfaces/CardShopInterface';
import { SubTitleIcon } from '~/components/Title';

export default function CardShop({ title, quantidade, ...props }: CardShopInterface) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className="mt-3 h-[75px] flex-row items-center justify-between rounded-lg bg-blue-200 p-3"
      {...props}>
      <View className="w-[65%] flex-row items-center justify-start">
        <Ionicons name="bag-handle-outline" size={35} color="#3b82f6" />
        <SubTitleIcon title={title} />
      </View>

      <View className="w-[20%] flex-row items-center justify-end">
        <Text className="text-2xl">{quantidade}</Text>
        <Ionicons name="chevron-forward-outline" size={18} color="#000" />
      </View>
    </TouchableOpacity>
  );
}
