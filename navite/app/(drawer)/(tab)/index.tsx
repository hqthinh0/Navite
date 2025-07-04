import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { push } from 'expo-router/build/global-state/routing'
import { router, useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter();
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
          <View>
            <Text>Index chuyển ở trong tab</Text>
              <Button title="Back to Home" onPress={() => router.replace('/(drawer)')} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

export default Index

const styles = StyleSheet.create({})