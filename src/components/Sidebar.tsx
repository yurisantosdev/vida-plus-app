import { TouchableOpacity, View } from 'react-native';
import { UserAvatar } from './UserAvatar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Sidebar() {
  const navigation: any = useNavigation();

  function handleLogout() {
    navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
  }

  function handleProfile() {
    navigation.navigate('Perfil');
  }

  return (
    <View className="mb-5 ml-4 mr-4 flex-row items-center justify-between bg-slate-200">
      <TouchableOpacity onPress={handleProfile} className="flex-row items-center gap-1">
        <Ionicons name="person-outline" size={28} color="#3b82f6" />
      </TouchableOpacity>

      <UserAvatar
        name="Yuri Santos"
        imageUri="https://imgs.search.brave.com/qPJ0Btl9skZ651iNzAiKtvQ3L8S2Xhjc2df7plHlVaI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/c21pbGluZy0zZC1j/YXJ0b29uLW1hbi1h/dmF0YXJfOTc1MTYz/LTc1NS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw"
        size="lg"
      />

      <TouchableOpacity onPress={handleLogout} className="flex-row items-center gap-1">
        <Ionicons name="log-out-outline" size={28} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );
}
