import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
          <View>
            <Text>Index</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

export default Index

const styles = StyleSheet.create({})