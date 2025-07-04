import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      {/* Ẩn route index nếu vẫn giữ file đó */}
      <Drawer.Screen
        name="index"
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />

      {/* Đổi tên (tab) thành Trang chủ, và có thể ẩn luôn nếu muốn */}
      <Drawer.Screen
        name="(tab)"
        options={{
          drawerLabel: 'Trang chủ',
          title: 'Trang chủ',
          // Ẩn nếu không muốn hiện route này trong drawer
          // drawerItemStyle: { display: 'none' },
        }}
      />

      <Drawer.Screen
        name="explore"
        options={{
          drawerLabel: 'Trình Duyệt Drawer',
           title: 'Trình Duyệt Drawer',
        }}
      />
    </Drawer>
  );
}