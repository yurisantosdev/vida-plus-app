/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/rules-of-hooks */
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { BaseApp } from '~/components/BaseApp';
import { Ionicons } from '@expo/vector-icons';
import { SubTitleIcon } from '~/components/Title';
import CardShop from './_components/CardShop';
import { useNavigation } from '@react-navigation/native';
import { AlertToastType } from '~/types/AlertToastType';
import { ALERT_TYPE } from 'react-native-alert-notification';
import { AlertToast } from '~/components/Alerts';

export default function Shop() {
  const navigation: any = useNavigation();

  return (
    <BaseApp loading={false} title="Shop">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CadastroShop');
        }}
        className="absolute bottom-24 right-4 z-[99999] h-16 w-16 flex-row items-center justify-center rounded-full bg-green-700"
        activeOpacity={0.85}>
        <Ionicons name="add-outline" size={35} color="#fff" />
      </TouchableOpacity>

      <View className="pl-4 pr-4">
        <View className="mb-5 flex-row items-center justify-center gap-2">
          <View className="h-[80px] w-[50%] flex-row items-center justify-between rounded-xl bg-blue-500 p-2">
            <Ionicons name="list-outline" size={45} color="#fff" />
            <Text className="text-4xl font-bold text-white">22</Text>
          </View>

          <View className="h-[80px] w-[50%] flex-row items-center justify-between rounded-xl bg-green-700 p-2">
            <Ionicons name="checkmark-done-outline" size={45} color="#fff" />
            <Text className="text-4xl font-bold text-white">10</Text>
          </View>
        </View>

        <SubTitleIcon title="Listas pendentes" icon="list-outline" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="pl-4 pr-4">
        <View>
          <View>
            <CardShop
              title="Aniversário Yuri"
              quantidade={22}
              onPress={() => {
                const dadosAlert: AlertToastType = {
                  textBody: 'Funcionalidade em desenvolvimento! Aguarda!',
                  title: 'Atenção!',
                  typeAlert: ALERT_TYPE.WARNING,
                };

                AlertToast(dadosAlert);
              }}
            />
            <CardShop
              title="sdfkjds fds fsd fds fsd fds fds fds f sdf dsf  fds"
              quantidade={22}
              onPress={() => {
                const dadosAlert: AlertToastType = {
                  textBody: 'Funcionalidade em desenvolvimento! Aguarda!',
                  title: 'Atenção!',
                  typeAlert: ALERT_TYPE.WARNING,
                };

                AlertToast(dadosAlert);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </BaseApp>
  );
}
