import React from 'react'
import { Text, View } from 'react-native';
import { ButtonCalc } from './ButtonCalc';
import { styles } from './themes/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const {
        result, 
        smallResult, 
        cleanResult,
        btnAdd,
        btnRest, 
        btnDelete, 
        btnDivide, 
        btnMultiply, 
        createNumber, 
        posistiveNegative, 
        calculate
        
    } = useCalculator();

    return (
        <View style={styles.container}>

            {
                (smallResult !== '0') 
                &&  <Text style={styles.smallResult}> {smallResult} </Text>
           
            }
            
            <Text 
            style={styles.result}
            numberOfLines={1}
            adjustsFontSizeToFit
            testID='result'
            >{result} 
            </Text>

            <View style={styles.row}>
                <ButtonCalc text='C' bgColor='#9B9B9B' onPress={cleanResult} testID='clean'/>
                <ButtonCalc text='+/-' bgColor='#9B9B9B' onPress={posistiveNegative}/>
                <ButtonCalc text='del' bgColor='#9B9B9B' onPress={btnDelete}/>
                <ButtonCalc text='/' bgColor='#FF9427' onPress={btnDivide}/>
            </View>

            <View style={styles.row}>
                <ButtonCalc text='7' onPress={createNumber}/>
                <ButtonCalc text='8' onPress={createNumber}/>
                <ButtonCalc text='9' onPress={createNumber}/>
                <ButtonCalc text='X' bgColor='#FF9427' onPress={btnMultiply}/>
            </View>
            
            <View style={styles.row}>
                <ButtonCalc text='4' onPress={createNumber}/>
                <ButtonCalc text='5' onPress={createNumber}/>
                <ButtonCalc text='6' onPress={createNumber}/>
                <ButtonCalc text='-' bgColor='#FF9427' onPress={btnRest}/>
            </View>
            
            <View style={styles.row}>
                <ButtonCalc text='1' onPress={createNumber}/>
                <ButtonCalc text='2' onPress={createNumber}/>
                <ButtonCalc text='3' onPress={createNumber}/>
                <ButtonCalc text='+' bgColor='#FF9427' onPress={btnAdd}/>
            </View>
            
            <View style={styles.row}>
                <ButtonCalc text='0' onPress={createNumber}width/>
                <ButtonCalc text='.' onPress={createNumber}/>
                <ButtonCalc text='=' bgColor='#FF9427' onPress={calculate}/>
            </View>
            

        </View>

    )
}
