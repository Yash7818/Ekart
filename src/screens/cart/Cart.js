import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button,Appbar, Searchbar} from 'react-native-paper';
import { Image } from 'react-native';
import Listprod from '../../components/Listprod';
import bg from '../../../assets/Logo.png';

function Cart({navigation}){
    const [total,setTotal] = useState('');
    const products=[
        {
            id:1,
            title:"Querty watch",
            desc:"Leather strap",
            price:12000,
            avaliability:true,
            color:"Brown",
            quantity:1
        },
        {
            id:2,
            title:"Yoga mat",
            desc:"Lorem Ipsum",
            price:1000,
            avaliability:true,
            color:"Blue",
            quantity:1
        },
        {
            id:3,
            title:"Anchor bracelet",
            desc:"Lorem Ipsum",
            price:500,
            avaliability:true,
            color:"Black",
            quantity:1
        },
    ];
    useEffect(()=>{
        var c=0;
        products.map((item)=>{
            c+=(item.price*item.quantity);
        })
        setTotal(c);
    },[total])
    return(
        <SafeAreaView style={{height:"100%",backgroundColor:"#fff"}}>
            <Appbar style={styles.appbar}>
                <Appbar.Action icon="menu" size={35} color="#DB4700"></Appbar.Action>
                <View style={{flex:1}}></View>
                <Image style={{width:35,height:35}} source={bg} />
            </Appbar>
            <View style={styles.search}>
                <Searchbar
                    placeholder="Search" 
                    theme={{
                        colors:{
                            primary:"#DB4700"
                        }
                    }} 
                />
            </View>
            <ScrollView>
                {
                    products?.map((item,index)=>(
                        <Listprod
                            key={item?.id}
                            title={item?.title}
                            desc={item?.desc}
                            price={item?.price}
                            color={item?.color}
                            avaliability={item?.avaliability}
                        />
                    ))
                }
            </ScrollView>
            <View style={styles.proceed}>
                <Text style={styles.proceedtext}>Subtotal  &#8377;{total} </Text>
                <Button color="#DB4700" mode="contained" style={styles.buttonpro} >
                    Proceed to buy ({products?.length} items)
                </Button>
            </View>
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
    input:{
        backgroundColor:"rgba(255,255,255,0.7)"
    },
    appbar:{
        backgroundColor:"rgba(255,255,255,1)"
    },
    search:{
        padding:10,
    },
    proceed:{
        padding:20
    },
    proceedtext:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        margin:10,
        color:"#000"
    },
    buttonpro:{
        padding:10,
        borderRadius:20
    }
})

export default Cart;
               