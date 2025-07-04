import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View>
                <Text>Đây là trang Home chính</Text>
                <Button title="click" onPress={()=> router.push('/(drawer)')}></Button>
                </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index

const styles = StyleSheet.create({})