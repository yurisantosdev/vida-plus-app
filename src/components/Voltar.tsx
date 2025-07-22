import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Voltar() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity onPress={handleGoBack} className="ml-2">
      <Ionicons name="chevron-back-outline" size={32} color="#3b82f6" />
    </TouchableOpacity>
  );
}
