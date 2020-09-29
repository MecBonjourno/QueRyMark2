import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'
 
export const Container = styled(RectButton)`
        /* width: 100%; */
        height: 60px;
        background: #4D4D4D;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        justify-content: center;
        align-items: center;
    `;

export const ButtonText = styled.Text`
    /* font-family: 'RobotoSlab-Medium'; */
    color: #CBCBCB;
    font-size: 18px;
    `;