import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
  
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Trang chủ',  headerTitle: '', title: 'Trang chủ' }} />
      <Drawer.Screen name="expolre" options={{ title: 'Cài đặt' }} />
    </Drawer>
  );
}