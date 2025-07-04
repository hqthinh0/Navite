import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const explore = () => {
  return (
    <View>
      <Text>explore</Text>
      <Button title='chuyển về trang index' onPress={() => router.push('/(drawer)')}>

      </Button>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({})