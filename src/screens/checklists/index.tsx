/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/rules-of-hooks */
import { View, TouchableOpacity, Text, Animated, FlatList, DeviceEventEmitter } from 'react-native';
import { BaseApp } from '~/components/BaseApp';
import { Ionicons } from '@expo/vector-icons';
import { SubTitleIcon } from '~/components/Title';
import CardChecklist from './_components/CardChecklist';
import { useNavigation } from '@react-navigation/native';
import { ApplyAnimated } from '~/services/animated';
import { useEffect, useState } from 'react';
import { ChecklistsType } from '~/types/ChecklistsType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { findAllChecklists } from '~/store/Checklists';

export default function Checklists() {
  const navigation: any = useNavigation();
  const [checklists, setChecklists] = useState<Array<ChecklistsType>>();
  const [atualizar, setAtualizar] = useState<number>(0);

  useEffect(() => {
    const consultaChecklists = async () => {
      const uscodigo = await AsyncStorage.getItem('uscodigo');
      if (uscodigo) {
        const response = await findAllChecklists(uscodigo);

        if (response !== undefined) {
          setChecklists(response.checklists);
        }
      }
    };

    consultaChecklists();
  }, [atualizar]);

  useEffect(() => {
    const handleAtualizacao = async () => {
      setAtualizar((prev) => prev + 1);
    };

    handleAtualizacao();

    const subscription = DeviceEventEmitter.addListener('checklistsAtualizar', handleAtualizacao);

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <BaseApp
      loading={false}
      title="Checklists"
      extraComponent={
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem('ckcodigo');
            navigation.navigate('CadastroChecklists');
          }}
          className="absolute bottom-24 right-4 z-[99999] h-16 w-16 flex-row items-center justify-center rounded-full bg-green-700"
          activeOpacity={0.85}>
          <Ionicons name="add-outline" size={35} color="#fff" />
        </TouchableOpacity>
      }>
      <View className="pl-4 pr-4">
        <View className="mb-5 flex-row items-center justify-center gap-2">
          <Animated.View
            className="h-[80px] w-[50%] flex-row items-center justify-between rounded-xl bg-blue-500 p-2"
            style={{
              transform: [{ translateY: ApplyAnimated(0).translateY }],
              opacity: ApplyAnimated(0).opacity,
              elevation: 8,
            }}>
            <Ionicons name="list-outline" size={45} color="#fff" />
            <Text className="text-4xl font-bold text-white">22</Text>
          </Animated.View>

          <Animated.View
            className="h-[80px] w-[50%] flex-row items-center justify-between rounded-xl bg-green-700 p-2"
            style={{
              transform: [{ translateY: ApplyAnimated(1).translateY }],
              opacity: ApplyAnimated(1).opacity,
              elevation: 8,
            }}>
            <Ionicons name="checkmark-done-outline" size={45} color="#fff" />
            <Text className="text-4xl font-bold text-white">10</Text>
          </Animated.View>
        </View>
      </View>

      <View className="max-h-[60%] pl-4 pr-4" style={{ flex: 1, paddingHorizontal: 16 }}>
        {Array.isArray(checklists) && checklists.length > 0 ? (
          <View>
            <SubTitleIcon title="Checklists pendentes" icon="list-outline" />

            <FlatList
              data={checklists}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={true}
              contentContainerStyle={{ paddingBottom: 32 }}
              renderItem={({ item, index }) => (
                <CardChecklist
                  index={index}
                  title={item?.cktitulo || 'Sem título'}
                  quantidade={item?.itensChecklists?.length ?? 0}
                  onPress={async () => {
                    if (item.ckcodigo) {
                      await AsyncStorage.setItem('ckcodigo', item.ckcodigo);
                      navigation.navigate('CadastroChecklists');
                    }
                  }}
                />
              )}
            />
          </View>
        ) : (
          <View className="mt-4">
            <Ionicons
              name="alert-circle-outline"
              className="mb-2 text-center"
              size={50}
              color="#000"
            />
            <Text className="text-md text-center text-black">Nenhum checklist cadastrado</Text>
          </View>
        )}
      </View>
    </BaseApp>
  );
}
