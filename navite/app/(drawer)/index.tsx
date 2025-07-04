import { View, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function DrawerHome() {
  const router = useRouter();

  return (
    <View>
        <Text>Đây là trang Home thứ 2 ở trong drawer</Text>
      <Button
        title="Chuyển đến Tab"
        onPress={() => router.push('/(drawer)/(tab)')}
      />
       <Button
        title="Chuyển đến index"
        onPress={() => router.back()}
      />
    </View>
  );
}