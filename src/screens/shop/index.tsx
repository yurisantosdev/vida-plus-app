/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/rules-of-hooks */
import { View, TouchableOpacity, Text, Animated, FlatList } from 'react-native';
import { BaseApp } from '~/components/BaseApp';
import { Ionicons } from '@expo/vector-icons';
import { SubTitleIcon } from '~/components/Title';
import CardShop from './_components/CardShop';
import { useNavigation } from '@react-navigation/native';
import { AlertToastType } from '~/types/AlertToastType';
import { ALERT_TYPE } from 'react-native-alert-notification';
import { AlertToast } from '~/components/Alerts';
import { ApplyAnimated } from '~/services/animated';
import { useState } from 'react';
import { ListaComprasType } from '~/types/ListaComprasType';

export default function Shop() {
  const navigation: any = useNavigation();
  const [listasCompras, setListasCompras] = useState<Array<ListaComprasType>>([
    {
      lccodigo: '1',
      lctitulo: 'Aniversário Yuri',
      lcusuario: 'user_123',
      lcfinalizada: false,
      createdAt: '2025-07-23T12:00:00Z',
      updatedAt: '2025-07-23T12:00:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '1',
      lctitulo: 'Aniversário Yuri',
      lcusuario: 'user_123',
      lcfinalizada: false,
      createdAt: '2025-07-23T12:00:00Z',
      updatedAt: '2025-07-23T12:00:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '1',
      lctitulo: 'Aniversário Yuri',
      lcusuario: 'user_123',
      lcfinalizada: false,
      createdAt: '2025-07-23T12:00:00Z',
      updatedAt: '2025-07-23T12:00:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '1',
      lctitulo: 'Aniversário Yuri',
      lcusuario: 'user_123',
      lcfinalizada: false,
      createdAt: '2025-07-23T12:00:00Z',
      updatedAt: '2025-07-23T12:00:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
    {
      lccodigo: '2',
      lctitulo: 'Compra da Semana',
      lcusuario: 'user_123',
      lcfinalizada: true,
      createdAt: '2025-07-22T10:30:00Z',
      updatedAt: '2025-07-22T10:30:00Z',
      usuario: {
        uscodigo: 'user_123',
        usnome: 'Yuri Santos',
        usemail: 'yuri@example.com',
      },
      itensListaCompras: [
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
        {
          ittitulo: 'testee',
          itlista: '423423',
          itquantidade: 0,
          itcomprado: false,
          itvalor: 0,
        },
      ],
    },
  ]);

  return (
    <BaseApp
      loading={false}
      title="Shop"
      extraComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CadastroShop');
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

        <SubTitleIcon title="Listas pendentes" icon="list-outline" />
      </View>

      <View className="max-h-[60%] pl-4 pr-4" style={{ flex: 1, paddingHorizontal: 16 }}>
        <FlatList
          data={listasCompras}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 32 }}
          renderItem={({ item, index }) => (
            <CardShop
              index={index}
              title={item?.lctitulo || 'Sem título'}
              quantidade={item?.itensListaCompras.length || 0}
              onPress={() => {
                const dadosAlert: AlertToastType = {
                  textBody: 'Funcionalidade em desenvolvimento! Aguarda!',
                  title: 'Atenção!',
                  typeAlert: ALERT_TYPE.WARNING,
                };
                AlertToast(dadosAlert);
              }}
            />
          )}
        />
      </View>
    </BaseApp>
  );
}
