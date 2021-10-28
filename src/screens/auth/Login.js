import React, { useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Button,TextInput, Caption} from 'react-native-paper';
import bg from '../../../assets/BG.png';
import logo from '../../../assets/logo.png';

function Login({navigation}){
    return(
        <SafeAreaView>
         <ScrollView
            contentInsetAdjustmentBehavior="automatic"
           >
                <View style={styles.container}>
                <Image source={bg} style={styles.bgimage}/>
                <Image source={logo} style={styles.logoimg} />
                <View style={styles.loginform}>
                    <View>
                        <View>
                        <TextInput
                            label="Email"
                            style={styles.input}
                            theme={{
                                colors: {
                                    primary: "#DB4700",
                                    background: "rgba(0,0,0,1)",
                                    text: "#010101",
                                    placeholder: "#565656",
                                    underlineColor:'transparent',
                                },
                            }}
                            underlineColorAndroid='transparent'
                            left={
                                <TextInput.Icon 
                                name="email" 
                            />}
                        />
                        </View>
                        <TextInput
                            label="Password"
                            style={styles.input}
                            secureTextEntry={true}
                            theme={{
                                colors: {
                                    primary: "#DB4700",
                                    background: "rgba(0,0,0,1)",
                                    text: "#010101",
                                    placeholder: "#565656",
                                },
                            }}
                            left={
                                <TextInput.Icon 
                                name="lock" 
                            />}
                        />
                        <View style={styles.caption}>
                            <Caption>&#10003; Remember me</Caption>
                            <Caption>Forget Password?</Caption>
                        </View>
                    
                    </View>
                    <View style={styles.actions}>
                        <Button mode="contained" color="#DB4700" style={styles.loginbutton} onPress={()=>navigation.push("Cart")}>
                            Login
                        </Button>

                        <Text>Don't have an account? <Text style={styles.signup}>Sign Up</Text></Text>
                    </View>
                </View>
                </View>
                  </ScrollView>
     </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card:{
        width:"80%",
        padding:20,
        borderRadius:20,
        backgroundColor:"rgba(255, 255, 255, 0.7)"
    },
    caption:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    input:{
        backgroundColor:"rgba(255,255,255,0)",
        marginBottom:10
    },
    container:{
        flex:1,
        height: Dimensions.get('window').height
    },
    bgimage:{
        flex:1,
        resizeMode:"cover",
        width:"100%"
    },
    loginform:{
        width:"80%",
        padding:40,
        borderRadius:40,
        backgroundColor:"rgba(255, 255, 255, 0.7)",
        position:"absolute",
        top:"25%",
        left:"10%"
    },
    logoimg:{
        position:"absolute",  
        right:"1%",
    },
    actions:{
        alignItems:"center",
        display:"flex",
        flexDirection:"column",
        marginVertical:20
    },
    loginbutton:{
        padding:10,
        borderRadius:20,
        marginBottom:10,
        width:"100%"
    },
    
})

export default Login;