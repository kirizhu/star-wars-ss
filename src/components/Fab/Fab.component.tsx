import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import fabStyles from './Fab.style';

interface FabProps {
    showGoToTop: boolean;
    scrollToTop: () => void;
}

const Fab = ({showGoToTop, scrollToTop}:FabProps) => {

  return showGoToTop && (
            <TouchableOpacity 
            onPress={scrollToTop} 
            style={fabStyles.goToTopButton}
            >
            <Text style={fabStyles.buttonText}>Go to Top</Text>
            </TouchableOpacity>
        )
  
}

export default Fab