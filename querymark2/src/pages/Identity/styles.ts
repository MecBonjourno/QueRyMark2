import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #CBCBCB;
`;

export const ButtonLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 72%;
    margin: 5px;
    background-color: #000;
    border-radius: 10px;
    height: 46px;
    align-self: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold; 
    font-size: 20px;
    text-align: center;
`;

export const Name = styled.Text`
    margin-top: 8px;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 5px;
    justify-content: center;
    align-self: center;
`;

export const Avatar = styled.Image`
    width: 300px;
    height: 300px;
    border-radius: 150px;
    background-color: #FFF;
`;

export const QRID = styled.View`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background-color: #000;
`;

export const CenterView = styled.View`
    margin-top: 10px;
    align-items: center;
    /* margin-bottom: 0px; */
`;

export const QRcode = styled.Image`
    margin: 20px;
    width: 270px;
    height: 270px;
    border-radius: 10px;
    align-self: center;
    justify-content: center;
`;