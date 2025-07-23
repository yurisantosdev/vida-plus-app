/* eslint-disable react-hooks/rules-of-hooks */
import { Text, View, ScrollView } from 'react-native';
import { BaseApp } from '~/components/BaseApp';
import CardSaldos from '~/components/Finance/CardSaldos';
import { Title } from '~/components/Title';

export default function HomePage() {
  return (
    <BaseApp loading={false} navbar>
      <Title title="Bem-vindo ao Vida+" />
      <Text className="mb-6 text-center text-base text-neutral-500">
        Gestão de sua vida na palma da mão!
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="flex-row flex-wrap justify-between gap-y-4 pl-4 pr-4">
          <CardSaldos />
        </View>
      </ScrollView>
    </BaseApp>
  );
}
