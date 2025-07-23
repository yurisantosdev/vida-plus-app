import { SetStateAction, useEffect, useRef, useState } from 'react';
import { View, Text, Animated } from 'react-native';

export default function CardSaldos() {
  const saldoFinal = 23983.0;
  const entradaFinal = 12921.22;
  const saidaFinal = 9921.22;

  const animatedSaldo = useRef(new Animated.Value(0)).current;
  const animatedEntrada = useRef(new Animated.Value(0)).current;
  const animatedSaida = useRef(new Animated.Value(0)).current;

  const [saldo, setSaldo] = useState('R$ 0,00');
  const [entrada, setEntrada] = useState('R$ 0,00');
  const [saida, setSaida] = useState('R$ 0,00');

  useEffect(() => {
    const animateValue = (
      animatedValue: Animated.Value | Animated.ValueXY,
      toValue: number,
      setValue: {
        (value: SetStateAction<string>): void;
        (value: SetStateAction<string>): void;
        (value: SetStateAction<string>): void;
        (arg0: string): void;
      },
      isNegative = false
    ) => {
      Animated.timing(animatedValue, {
        toValue,
        duration: 600,
        useNativeDriver: false,
      }).start();

      animatedValue.addListener(({ value }: any) => {
        const formatted = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        }).format(value);

        setValue(isNegative ? `- ${formatted}` : `+ ${formatted}`);
      });
    };

    animateValue(animatedSaldo, saldoFinal, setSaldo, false);
    animateValue(animatedEntrada, entradaFinal, setEntrada, false);
    animateValue(animatedSaida, saidaFinal, setSaida, true);

    return () => {
      animatedSaldo.removeAllListeners();
      animatedEntrada.removeAllListeners();
      animatedSaida.removeAllListeners();
    };
  }, [animatedEntrada, animatedSaida, animatedSaldo]);

  return (
    <View className="w-full">
      <View className="w-full rounded-xl bg-blue-500 p-4">
        <Text className="text-md font-medium text-white">Saldo atual</Text>
        <Text className="mt-1 text-4xl font-extrabold text-white">{saldo}</Text>

        <View className="mt-7">
          <View className="flex-row justify-between">
            <Text className="text-white">Entradas</Text>
            <Text className="text-white">Saída</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-extrabold text-green-400">{entrada}</Text>
            <Text className="font-extrabold text-red-700">{saida}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
