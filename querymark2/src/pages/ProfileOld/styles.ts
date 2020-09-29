import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #CBCBCB;
`;

export const ButtonLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 5px;
    background-color: #000;
    border-radius: 10px;
    height: 52px;
    align-self: center;
    justify-content: center;
`;

export const Avatar = styled.Image`
    /* shadow-color: #151734; */
    width: 150px;
    height: 150px;
    border-radius: 75px;
`;

export const Name = styled.Text`
    margin-top: 32px;
    font-weight: bold;
    font-size: 40px;
`;

export const Bio = styled.Text`
    margin-top: 10px;
    /* font-weight: thin; */
    font-size: 26px;
`;

export const Stats = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 32px;
`; 

export const StatsSpecific = styled.View`
    align-items: center;
    flex: 1;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold; 
    font-size: 20px;
    text-align: center;
`;
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//     },
//     buttons:{
//         justifyContent: "center",
//         // alignContent: "center",
//         alignItems: "center"
//     },
//     avatarContainer:{
//         shadowColor: "#151734",
//         shadowRadius: 15,
//         shadowOpacity: 0.4
//     },
//     avatar:{
//         width: 150,
//         height: 150,
//         borderRadius: 76
//     },
//     name: {
//         marginTop: 32,
//         fontWeight: "700",
//         fontSize: 40,
//     },
//     bio: {
//         marginTop: 10,
//         // fontWeight: "700",
//         fontSize: 26,
//     },
//     statsContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         margin: 32
//     },
//     stat: {
//         alignItems: "center",
//         flex: 1
//     },
//     statAmount: {
//         color: "#4F566D",
//         fontSize: 18,
//         fontWeight: "300"
//     },
//     statTitle: {
//         color: "#C3C5CD",
//         fontSize: 12,
//         fontWeight: "500",
//         marginTop: 4
//     },
//     form:{
//         marginBottom: 48,
//         marginHorizontal: 30
//     },
//     inputTitle:{
//         color: "#8A8F9E",
//         fontSize: 10,
//         textTransform: "uppercase"
//     },
//     input:{
//         borderBottomColor: "#8A8F9E",
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         height: 40,
//         fontSize: 15,
//         color: "#161F3D"
//     },
//     button:{  
//         width: "80%",
//         margin: 5,
//         backgroundColor: "black",
//         borderRadius: 10,
//         height: 52,
//         alignSelf: "center",
//         justifyContent: "center"
//     },
//     buttonEdit:{  
//         // maxWidth: deviceW,
//         width: "90%",
//         margin: 5,
//         marginBottom: 20,
//         backgroundColor: "#3b5998",
//         borderRadius: 10,
//         height: 52,
//         alignSelf: "center",
//         justifyContent: "center",
//     },
    
// })