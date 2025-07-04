import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View>
                <Text>index</Text>
                <Button title="click" onPress={()=> router.push('/(drawer)/(tabs)/explore')}></Button>
                </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index

const styles = StyleSheet.create({})