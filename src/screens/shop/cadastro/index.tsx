import { ScrollView, View, Text } from 'react-native';
import { BaseApp } from '~/components/BaseApp';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroShop() {
  return (
    <BaseApp loading={false} title="Cadastro" voltar navbar={false} sidebar={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="pl-4 pr-4">
        <View className="mt-5 flex-row items-center justify-center gap-3">
          <Ionicons name="warning-outline" size={38} color="#fbbf24" />

          <Text className="text-center text-2xl font-bold text-amber-400">Em desenvolvimento!</Text>
        </View>
      </ScrollView>
    </BaseApp>
  );
}
