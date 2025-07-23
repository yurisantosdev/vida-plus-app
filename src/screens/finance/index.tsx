/* eslint-disable react-hooks/rules-of-hooks */
import { View, ScrollView } from 'react-native';
import { BaseApp } from '~/components/BaseApp';
import CardSaldos from '~/components/Finance/CardSaldos';

export default function Finance() {
  return (
    <BaseApp loading={false} title="Finance">
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
