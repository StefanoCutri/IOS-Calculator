import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './themes/appTheme';

interface Props {
    text: string,
    bgColor?: string,
    width?: boolean,
    onPress: (numberText: string) => void,
    testID?: string
}

export const ButtonCalc = ({text, bgColor = '#2D2D2D', width = false, onPress}: Props) => {

    return (
        
        <TouchableOpacity
            onPress={()=> onPress(text)}
            testID='btnCalc'
        >
        <View style={
           {
               ...styles.button,
               backgroundColor: bgColor,
               width: (width) ? 155 : 70
           }

        }>
            <Text style={{
                ...styles.buttonText,
                color: (bgColor === '#9B9B9B') ? 'black' : 'white'
                }}> {text} </Text>
        </View>

        </TouchableOpacity>

    )
}
