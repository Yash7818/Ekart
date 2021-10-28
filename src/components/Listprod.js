import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';
import Counter from 'react-native-counters';
function Listprod(props){
    return(
        <View>
            <View style={styles.main}>
                <View style={styles.imageside}>
                    <Image style={{width:100,height:100}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgBkZacpWLq9MPYrEyzaUaNdOjBYc7GD7dgRlXz8Rex8H2zlejZ-lj22xtITM7ClaKeM&usqp=CAU"}} />
                    <View style={{flex:1}}></View>
                    <Counter start={1} buttonStyle={styles.buttoncounter} buttonTextStyle={styles.counttext} countTextStyle={styles.counttext}/>
                </View>
                <View style={styles.contentside}>
                    <Text style={styles.title}>{props?.title}</Text>
                    <Text style={styles.desc}>{props?.desc}</Text>
                    <Text style={styles.price}>&#8377;{props?.price}</Text>
                    <Text style={styles.color}>Color: {props?.color}</Text>
                    <Text style={styles.avaliability}>{props?.avaliability?"In stock":"Out of stock"}</Text>
                    <View style={styles.actions}>
                        <Button mode="outlined" uppercase={false}  style={styles.delete} color="#DB4700">Delete</Button>
                        <Button mode="contained" uppercase={false}  style={styles.show} color="#DB4700">See more like this</Button>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        borderBottomColor:"#c4c4c4",
        borderBottomWidth:1,
        paddingVertical:15,
        display:"flex",
        flexDirection:"row",
        flex:1
    },
    imageside:{
        flex:0.3,
        alignItems:"center",
        display:"flex",
        flexDirection:"column",
    },
    contentside:{
        flex:0.7,
        paddingHorizontal:10
    },
    actions:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        flex:1,
        paddingTop:10
    },
    delete:{
        borderColor:"#DB4700",
        borderWidth:2,
        borderRadius:20,
        // width:"10%"
    },
    show:{
        borderRadius:20
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000"
    },
    desc:{
        fontSize:15,
        fontWeight:"bold"
    },
    price:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000"
    },
    color:{
        fontWeight:"bold"        
    },
    avaliability:{
        color:"green"
    },
    buttoncounter:{
        borderRadius:20,
        color:"#000",
        borderColor:"#000",
    },
    counttext:{
        color:"#000",
    }
})

export default Listprod;