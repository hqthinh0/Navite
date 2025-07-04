import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import { Tabs , } from 'expo-router'
import { IconSymbol } from '@/components/ui/IconSymbol'


import "@/global.css";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
        tabBarLabelStyle: styles.label,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          
          title: 'Trang chủ', 
          tabBarButton: ({ children, onPress }) => (
              <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.tabItem}>
                {children}
              </TouchableOpacity>
            ),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={22} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'trình duyệt',
         
           tabBarButton: ({ children, onPress }) => (
              <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.tabItem}>
                {children}
              </TouchableOpacity>
            ),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={22} name="paperplane.fill" color={color} />
          ),
        }}
      /> 
      <Tabs.Screen
        name="setting"
        options={{
          title: 'cài đặt',
          tabBarButton: ({ children, onPress }) => (
              <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.tabItem}>
                {children}
              </TouchableOpacity>
            ),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={22} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 70,
    marginHorizontal: 20,
    paddingBottom: 10,
    width: "auto",
    paddingTop: 10,

    // Bóng
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
})