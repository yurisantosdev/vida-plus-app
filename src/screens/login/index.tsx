/* eslint-disable eqeqeq */
import { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BaseApp } from '~/components/BaseApp';
import { login } from '~/store/Login';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage() {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  async function onLogin() {
    setError('');
    setLoading(true);

    if (email === '' || senha === '') {
      setError('Preencha todos os campos!');
      setLoading(false);
      return;
    }

    const response = await login({ email, senha });

    if (response != undefined) {
      await AsyncStorage.setItem('token', response.access_token);
      await AsyncStorage.setItem('uscodigo', response.user.uscodigo);

      navigation.navigate('Home');
    } else {
      setLoading(false);
    }
  }

  return (
    <BaseApp loading={false} navbar={false} sidebar={false}>
      <KeyboardAvoidingView
        className="flex-1 items-center justify-center px-6"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View className="w-full max-w-md items-center rounded-3xl bg-white/90 p-8 shadow-md">
          <Text className="mb-2 text-3xl font-extrabold tracking-tight text-blue-500">
            Bem-vindo!
          </Text>
          <Text className="mb-8 text-center text-base text-neutral-500">
            Acesse sua conta para continuar
          </Text>

          <View className="mb-4 w-full">
            <Text className="mb-1 ml-1 text-neutral-700">E-mail</Text>
            <TextInput
              className="rounded-xl border border-neutral-300 bg-neutral-100 p-3 text-neutral-900"
              placeholder="Digite seu e-mail"
              placeholderTextColor="#A3A3A3"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="mb-2 w-full">
            <Text className="mb-1 ml-1 text-neutral-700">Senha</Text>
            <View className="flex-row items-center rounded-xl border border-neutral-300 bg-neutral-100 pr-4">
              <TextInput
                className="flex-1 p-3 text-neutral-900"
                placeholder="Digite sua senha"
                placeholderTextColor="#A3A3A3"
                secureTextEntry={!mostrarSenha}
                value={senha}
                onChangeText={setSenha}
              />
              <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                <Ionicons
                  name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
                  size={22}
                  color="#737373"
                />
              </TouchableOpacity>
            </View>
          </View>

          {error ? (
            <Text className="mb-2 text-center font-medium text-red-500">{error}</Text>
          ) : null}

          <TouchableOpacity
            className="mt-2"
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('EsqueciSenha');
            }}>
            <Text className="text-center font-medium text-blue-500">Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mb-4 mt-8 w-full flex-row items-center justify-center rounded-xl bg-blue-500 py-3"
            onPress={onLogin}
            disabled={loading}
            activeOpacity={0.85}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-lg font-bold tracking-wide text-white">Entrar</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </BaseApp>
  );
}
