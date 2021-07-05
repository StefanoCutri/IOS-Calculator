import React from 'react';

import {render, fireEvent } from '@testing-library/react-native'
import { act } from 'react-test-renderer';

import { CalculatorScreen } from '../../src/components/CalculatorScreen'

let wrapper = render(<CalculatorScreen/>);
let btnCalc = wrapper.getAllByTestId('btnCalc');

describe('<CalculatorScreen/>', () => {
    
    beforeEach(()=>{
        wrapper = render(<CalculatorScreen/>);
        btnCalc = wrapper.getAllByTestId('btnCalc');
    })

    it('renders correctyly', ()=> {

        expect(wrapper).toMatchSnapshot();
    })

    it('should change the result and clean it', () => {

        const result = wrapper.getByTestId('result')

        act(()=> {

            //press button "7"
            fireEvent(btnCalc[4], 'onPress')

        })
        act(()=> {

            //press button "7"
            fireEvent(btnCalc[4], 'onPress')

            //now the number is 77

        })

        expect(result.props.children).toBe('77')

        act(()=> {

            //Press button "C"
            fireEvent(btnCalc[0], 'onPress')

        })

        expect(result.props.children).toBe('0')

    })

    it('change the num to negative', ()=> {

        const result = wrapper.getByTestId('result')

        act(()=> {

            //press button "+/1"
            fireEvent(btnCalc[1], 'onPress')

        })

        expect(result.props.children).toBe('-0')

    
    })

    it('should create the number', ()=> {

        const result = wrapper.getByTestId('result')

        act(()=> {

            //press button "7"
            fireEvent(btnCalc[4], 'onPress')
     
        })
        act(()=> {

            //press button "8"
            fireEvent(btnCalc[5], 'onPress')
        })
        act(()=> {
         
            //press button "9"
            fireEvent(btnCalc[6], 'onPress')
        })

        expect(result.props.children).toBe('789')

    });

    it('should delete the last number and be 0 if there is no more', ()=> {

        const result = wrapper.getByTestId('result')

        act(()=> {

            //press button "7"
            fireEvent(btnCalc[4], 'onPress')
     
        })
        act(()=> {

            //press button "8"
            fireEvent(btnCalc[5], 'onPress')

            // now the number is 78
        })
        expect(result.props.children).toBe('78')
        
        act(()=> {

            //press button "del"
            fireEvent(btnCalc[2], 'onPress')

            // now the number should be 7
        })
        expect(result.props.children).toBe('7')
        
    })

    it('should not add to dots', ()=> {

        const result = wrapper.getByTestId('result')

        act(()=> {

            //press button "."
            fireEvent(btnCalc[17], 'onPress')
     
        })

        act(()=> {

            //press button "."
            fireEvent(btnCalc[17], 'onPress')
     
        })

        act(()=> {

            //press button "."
            fireEvent(btnCalc[17], 'onPress')
     
        })

        expect(result.props.children).toBe('0.')

    })
    

})
