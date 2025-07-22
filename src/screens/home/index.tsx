/* eslint-disable react-hooks/rules-of-hooks */
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BaseApp } from '~/components/BaseApp';
import { useRef } from 'react';
import Title from '~/components/Title';

const modules = [
  {
    icon: 'cart-outline',
    color: 'from-blue-200 via-blue-100 to-white',
    iconColor: '#2563eb',
    title: 'Compras',
    desc: 'Gerencie suas listas de compras',
  },
  {
    icon: 'wallet-outline',
    color: 'from-green-200 via-green-100 to-white',
    iconColor: '#22c55e',
    title: 'Financeiro',
    desc: 'Controle suas finanças pessoais',
  },
  {
    icon: 'calendar-outline',
    color: 'from-yellow-200 via-yellow-100 to-white',
    iconColor: '#eab308',
    title: 'Agenda',
    desc: 'Organize seus compromissos',
  },
  {
    icon: 'cart-outline',
    color: 'from-blue-200 via-blue-100 to-white',
    iconColor: '#2563eb',
    title: 'Compras',
    desc: 'Gerencie suas listas de compras',
  },
  {
    icon: 'wallet-outline',
    color: 'from-green-200 via-green-100 to-white',
    iconColor: '#22c55e',
    title: 'Financeiro',
    desc: 'Controle suas finanças pessoais',
  },
  {
    icon: 'calendar-outline',
    color: 'from-yellow-200 via-yellow-100 to-white',
    iconColor: '#eab308',
    title: 'Agenda',
    desc: 'Organize seus compromissos',
  },
  {
    icon: 'cart-outline',
    color: 'from-blue-200 via-blue-100 to-white',
    iconColor: '#2563eb',
    title: 'Compras',
    desc: 'Gerencie suas listas de compras',
  },
  {
    icon: 'wallet-outline',
    color: 'from-green-200 via-green-100 to-white',
    iconColor: '#22c55e',
    title: 'Financeiro',
    desc: 'Controle suas finanças pessoais',
  },
  {
    icon: 'calendar-outline',
    color: 'from-yellow-200 via-yellow-100 to-white',
    iconColor: '#eab308',
    title: 'Agenda',
    desc: 'Organize seus compromissos',
  },
  {
    icon: 'cart-outline',
    color: 'from-blue-200 via-blue-100 to-white',
    iconColor: '#2563eb',
    title: 'Compras',
    desc: 'Gerencie suas listas de compras',
  },
  {
    icon: 'wallet-outline',
    color: 'from-green-200 via-green-100 to-white',
    iconColor: '#22c55e',
    title: 'Financeiro',
    desc: 'Controle suas finanças pessoais',
  },
  {
    icon: 'calendar-outline',
    color: 'from-yellow-200 via-yellow-100 to-white',
    iconColor: '#eab308',
    title: 'Agenda',
    desc: 'Organize seus compromissos',
  },
];

const CARD_SIZE = (Dimensions.get('window').width - 48) / 2;

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
          {modules.map((modulo, index) => {
            const translateY = useRef(new Animated.Value(-30)).current;
            const opacity = useRef(new Animated.Value(0)).current;

            Animated.parallel([
              Animated.timing(translateY, {
                toValue: 0,
                duration: 300,
                delay: index * 100,
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
              }),
              Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                delay: index * 100,
                useNativeDriver: true,
              }),
            ]).start();

            return (
              <Animated.View
                key={index}
                style={{
                  width: CARD_SIZE,
                  transform: [{ translateY }],
                  opacity,
                  elevation: 8,
                }}
                className="overflow-hidden rounded-3xl bg-blue-50">
                <TouchableOpacity activeOpacity={0.92}>
                  <View
                    className={`items-center bg-gradient-to-b px-4 pb-4 pt-6 ${modulo.color} rounded-3xl`}>
                    <View className="mb-3 h-16 w-16 items-center justify-center rounded-2xl bg-white/80">
                      <Ionicons name={modulo.icon as any} size={38} color={modulo.iconColor} />
                    </View>
                    <Text className="mb-1 text-center text-lg font-extrabold text-neutral-800">
                      {modulo.title}
                    </Text>
                    <Text className="mb-3 text-center text-xs font-medium text-neutral-500">
                      {modulo.desc}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>
    </BaseApp>
  );
}
