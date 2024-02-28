import React from 'react'
import { RefreshControl } from 'react-native'
import Colors from '../../utils/Colors';

interface RefreshProps {
    refreshFn: () => void;
    loading: boolean;
}

const Refresh = ({refreshFn, loading}:RefreshProps) => {
  return (
    <RefreshControl
        refreshing={loading}
        onRefresh={refreshFn}
        colors={[Colors.lightsaberBlue]} 
    />
  )
}

export default Refresh