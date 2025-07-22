import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '~/screens/login';
import HomePage from '~/screens/home';
import Finance from '~/screens/finance';
import Garage from '~/screens/garage';
import Shop from '~/screens/shop';
import Calendar from '~/screens/calendar';
import Tasks from '~/screens/tasks';
import Perfil from '~/screens/perfil';
import EsqueciSenha from '~/screens/esqueciSenha';
import CadastroShop from '~/screens/shop/cadastro';
import { AlertNotificationRoot } from 'react-native-alert-notification';

export default function App() {
  const Stack = createNativeStackNavigator();

  const colorsLig: any = {
    label: '#1F2937',
    card: '#FFF',
    overlay: 'rgba(0,0,0,0.3)',
    success: '#22C55E',
    danger: '#EF4444',
    warning: '#F59E0B',
  };

  const colorsDark: any = {
    label: '#F3F4F6',
    card: '#1F2937',
    overlay: 'rgba(255,255,255,0.1)',
    success: '#4ADE80',
    danger: '#F87171',
    warning: '#FBBF24',
  };

  return (
    <AlertNotificationRoot theme="light" colors={[colorsLig, colorsDark]}>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainApp" component={LoginPage} />
            <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
            <Stack.Screen name="Home" options={{ animation: 'none' }} component={HomePage} />
            <Stack.Screen name="Finance" options={{ animation: 'none' }} component={Finance} />
            <Stack.Screen name="Garage" options={{ animation: 'none' }} component={Garage} />
            <Stack.Screen name="Shop" options={{ animation: 'none' }} component={Shop} />
            <Stack.Screen name="CadastroShop" component={CadastroShop} />
            <Stack.Screen name="Calendar" options={{ animation: 'none' }} component={Calendar} />
            <Stack.Screen name="Tasks" options={{ animation: 'none' }} component={Tasks} />
            <Stack.Screen name="Perfil" component={Perfil} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </AlertNotificationRoot>
  );
}
