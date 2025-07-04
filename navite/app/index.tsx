import { Button, StyleSheet, Text, View , Image, Pressable } from 'react-native'
import React from 'react' 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView  style={styles.container}>
            <View style={styles.centerView} >
                <Image  style={styles.image}  resizeMode="contain" source={require('@/assets/images/images_logo2x.png')}/>
            </View>
            <View >
                 <Pressable style={styles.button} onPress={() => router.push('/(drawer)')}>
                    <View style={styles.content}>
                        <Text style={styles.text}>Get Started</Text>
                        <FontAwesome name="rocket" size={20} color="white" style={styles.icon} />
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center', // căn giữa dọc
    alignItems: 'center',     // căn giữa ngang
  },
  image: {
    width: 250,
    height: 250,
  },
  Pressable:{
    cursor: 'pointer',
  },
   button: {
    backgroundColor: '#F83758',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // để căn giữa nút
    bottom: 70,
  },
  content: {
    flexDirection: 'row',         // icon và text nằm cùng hàng
    alignItems: 'center',         // căn giữa theo chiều dọc
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
  icon: {
    marginLeft: 4,
  },
})