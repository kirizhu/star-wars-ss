import React from 'react'
import { ActivityIndicator } from 'react-native'
import Colors from '../../utils/Colors'

interface LoadingProps {
  loading:boolean;
}

const Loading = ({loading}:LoadingProps) => {
  return (
    loading && <ActivityIndicator size="large" color={Colors.lightsaberBlue} style={{ marginVertical: 50, justifyContent: 'center' }}/>
  )
}

export default Loading