import React, {useRef, useCallback, useState} from 'react';
import { Image, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
// import Icon from 'react-native-vector-icons/Feather'

import api from '../../services/api'

import {useAuth} from '../../hooks/auth'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors'


import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logoWhite.png'

import { AccessToken, LoginButton, GraphRequest, GraphRequestManager } from "react-native-fbsdk";


import { Container, Title, BackToSignIn, BackToSignInText, Text } from './styles'



interface SignUpFormData {
    name: string,
    email: string,
    password: string
}

const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const formRef = useRef<FormHandles>(null);
    const [user , setUser] = useState('')

    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);


    const getUserCallback = async(error: any,result: any) => {
        try{


        if(error){
            console.log('getUserError',error);
        } else { 
    
            // const data = result;
            console.log(result)

            await api.post('/users', result)

            Alert.alert('Cadastrado', 'faça login!')

        }
        }catch(error){
            console.log(error)
                if (error instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(error)

                    console.log(errors)
                    return 
                }
        }
    }

    const getUserInfo = (token) => {
        const infoRequest = new GraphRequest('/me', { accesToken: token, parameters: {
            fields: { string: 'email, name'} 
        }}, getUserCallback);
        // 
        new GraphRequestManager().addRequest(infoRequest).start();

    }

    const handleSignUp = useCallback(async (data: SignUpFormData) => {
        try{
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                email: Yup.string()
                .required('E-mail obrigatório')
                .email('digite um email válido'),
                password: Yup.string().required('Senha Obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            }); 

            console.log(data)
            
            await api.post('/users', data)


            Alert.alert('Cadastrado', 'faça login!')

            navigation.goBack()

        } catch(err) {
            console.log(err)
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors);

                console.log(errors)
                return 
            }

            Alert.alert("Error Auth", "Erro na Auth")
        } 
    }, [navigation]);



    return (
        <>
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flex: 1 }}>
        <Container>
            <Image source={logoImg} style={{ flex: 1, maxWidth: 170, maxHeight: 140}}/>
            <View>
              <Title>Crie Sua Conta</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>

            <Input autoCapitalize="words" name="name" icon="user" placeholder="Nome" returnKeyType="next" onSubmitEditing={() => { emailInputRef.current?.focus()}}/>

            <Input ref={emailInputRef} keyboardType="email-address" autoCorrect={false} autoCapitalize="none" name="email" icon="mail" placeholder="E-mail" returnKeyType="next" onSubmitEditing={() => { passwordInputRef.current?.focus()}}/>

            <Input ref={passwordInputRef} secureTextEntry name="password" icon="lock" placeholder="Senha" textContentType="newPassword" returnKeyType="send" onSubmitEditing={() => formRef.current?.submitForm()} />

            <Button onPress={() => formRef.current?.submitForm()}>Cadastrar</Button>

          </Form>

          <LoginButton 
              permissions={["public_profile", "email"]}
              onLoginFinished={async (error, result) => {
                if (error) {
                  console.log("auth error", error);
                } else if (result.isCancelled) {
                  console.log("isCancelled");
                } else {
                  const accessData = await AccessToken.getCurrentAccessToken();
                  console.log("accessData", accessData);

                    getUserInfo(accessData?.accessToken);
                }
              }}
            />


            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            

        </Container>

        <BackToSignIn onPress={() => navigation.goBack()}>
            {/* <Icon name="arrow-left" size={20} color="#FFF" /> */}
            <BackToSignInText>Voltar para Login</BackToSignInText>
        </BackToSignIn>
        </ScrollView>
    </KeyboardAvoidingView>
    </>
    );
}

export default SignUp;