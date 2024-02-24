
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import errorStyle from './Error.style';

interface ErrorComponentProps {
  title?: string;
  buttonText?: string;
  onPress?: () => void | Promise<void> | undefined;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  title = `These are not the starships 
  you are looking for...`,
  buttonText = 'Use the force to try again!',
  onPress,
}) => {
  return (
    <View style={errorStyle.container}>
    <Text style={errorStyle.title}>{title}</Text>
      {onPress && (
        <TouchableOpacity
          accessibilityLabel={buttonText}
          accessibilityRole="button"
          style={errorStyle.retryButton}
          onPress={onPress}>
          <Text style={errorStyle.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};


export default ErrorComponent;