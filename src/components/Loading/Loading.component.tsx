import React from 'react'
import { ActivityIndicator } from 'react-native'
import Colors from '../../utils/Colors'

const Loading = () => {
  return (
    <ActivityIndicator size="large" color={Colors.lightsaberBlue} style={{ marginVertical: 50, justifyContent: 'center' }}/>
  )
}

export default Loading