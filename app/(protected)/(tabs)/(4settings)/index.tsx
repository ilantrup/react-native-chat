import { Pressable, Text, View } from 'react-native';
import { useAuthStore } from '@/store/authStore';


export default function chatLocation() {
  const logout = useAuthStore((state) => state.logout);
  return (
    <View>
      <Text>Hola</Text>
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
