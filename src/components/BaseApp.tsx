import { SafeAreaView, View, ActivityIndicator, StyleSheet } from 'react-native';
import { BaseAppType } from '../types/BaseAppType';
import { StatusBar } from 'expo-status-bar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Voltar from './Voltar';
import { Title } from './Title';

export function BaseApp({ navbar = true, sidebar = true, voltar = false, ...props }: BaseAppType) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.innerContainer}>
        {sidebar && <Sidebar />}
        <View className="flex-row items-center justify-between">
          {voltar && (
            <View className="w-[7%]">
              <Voltar />
            </View>
          )}
          {props.title && (
            <View className={voltar ? 'right-12 mb-3 w-[80%] text-center' : 'mb-3 w-full'}>
              <Title title={props.title} />
            </View>
          )}
        </View>
        {props.children}
        {navbar && <Navbar />}
      </View>

      {props.loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e8f0',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#e2e8f0',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#1f2937',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    opacity: 0.6,
  },
});
