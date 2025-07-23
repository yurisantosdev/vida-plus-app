import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation();
  const route = useRoute();

  const navItems = [
    { name: 'Início', icon: 'home-outline', route: 'Home' },
    { name: 'Financeiro', icon: 'cash-outline', route: 'Finance' },
    { name: 'Veículos', icon: 'car-sport-outline', route: 'Garage' },
    { name: 'Agenda', icon: 'calendar-outline', route: 'Calendar' },
    { name: 'Mercado', icon: 'basket-outline', route: 'Shop' },
    { name: 'Tarefas', icon: 'list-outline', route: 'Tasks' },
  ];

  return (
    <View className="absolute bottom-2 ml-4 mr-4 h-[60px] flex-row items-center justify-between rounded-3xl bg-white">
      <View className="w-full flex-row items-center justify-between gap-3">
        {navItems.map((item: any, index: number) => {
          const isActive = route.name === item.route;

          return (
            <TouchableOpacity
              key={index}
              className={`flex-row items-center justify-center rounded-full p-2 ${
                isActive ? 'h-20 w-20 bg-blue-500' : ''
              }`}
              onPress={() => navigation.navigate(item.route as never)}
              activeOpacity={0.8}>
              <Ionicons
                name={item.icon as any}
                size={isActive ? 40 : 30}
                color={isActive ? '#fff' : '#000'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
