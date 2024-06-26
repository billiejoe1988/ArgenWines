import { StyleSheet, View } from 'react-native'
import React from 'react'

const ShadowBase = ({style,children}) => {

  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default ShadowBase

const styles = StyleSheet.create({
    container:{
        elevation:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
    }
})