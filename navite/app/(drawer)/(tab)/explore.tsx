import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const explore = () => {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
           <View>
            <Text>explore</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

export default explore

const styles = StyleSheet.create({})