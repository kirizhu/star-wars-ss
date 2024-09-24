import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

import fabStyles from './Fab.style';
import Colors from '../../utils/Colors';

interface FabProps {
    showGoToTop: boolean;
    scrollToTop: () => void;
}

const Fab = ({showGoToTop, scrollToTop}:FabProps) => {

  return showGoToTop && (
            <TouchableOpacity
                accessibilityLabel="Scroll to top"
                accessibilityRole="button"
                onPress={scrollToTop} 
                style={fabStyles.goToTopButton}
            >
                <AntDesign name="arrowup" size={24} color={Colors.cpoGold} />
            </TouchableOpacity>
        )
  
}

export default Fab