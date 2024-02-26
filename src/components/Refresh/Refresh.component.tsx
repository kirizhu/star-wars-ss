import React, {useState} from 'react'
import { RefreshControl } from 'react-native'
import Colors from '../../utils/Colors';

interface RefreshProps {
    refreshFn: () => void;
}

const Refresh = ({refreshFn}:RefreshProps) => {
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const handleRefresh = () => {
        setRefreshing(true);
        refreshFn();
        setRefreshing(false);
      };
  return (
    <RefreshControl
        refreshing={refreshing}
        onRefresh={handleRefresh}
        colors={[Colors.lightsaberBlue]} 
    />
  )
}

export default Refresh