import { RefreshControl } from 'react-native'
import React, {useState} from 'react'
import Colors from '../../utils/Colors';

interface RefreshProps {
    refreshFn: () => void;
}

const Refresh = ({refreshFn}:RefreshProps) => {
    const [refreshing, setRefreshing] = useState(false);
    const handleRefresh = () => {
        setRefreshing(true);
        refreshFn();
        setRefreshing(false);
      };
  return (
    <RefreshControl
        refreshing={refreshing}
        onRefresh={handleRefresh}
        colors={[Colors.endorGreen]} 
    />
  )
}

export default Refresh