import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View,Modal, Pressable, TouchableOpacity  } from 'react-native'
import SignUp from './SignUp';
import { useSelector, useDispatch } from 'react-redux'
import {setUserId, setPassword} from '../redux/action'

export default function Home({navigation}) {
   const [user,setUser] = useState({});
   const {userId,password} = useSelector(state=>state.userReducer);
   const [showModal, setShowModal] = useState(false)
   const [showPrompt, setShowPrompt] = useState(false)
    const dispatch = useDispatch();

   useEffect(() => {
       getUserInfo()
   }, [])

   const getUserInfo = async () => {
       try {
          const data = await AsyncStorage.getItem('userInfo');
          if(data == null){ navigation.navigate('SignUpScreen')}
          const res = JSON.parse(data);
            //setUser(res);

            dispatch(setUserId(res.userId))



       } catch (error) {
           console.log(error)
       }
   }
    return (
        // <View>
        //     <Text>Welcome </Text>
        // </View>
        <ImageBackground source={{uri:'https://www.suitesistina.com/wp-content/uploads/2019/06/IMG_5921-200x300.jpg'}} style={styles.backgroundImg}>

        <Modal visible={showModal}
                onRequestClose={() =>{
                    setShowModal(false);
                }}
                animationType='fade'
            >
               <View style={styles.centerModal}>
               <View style={styles.bodyModal}>
                   <View style={styles.headeModal}>
                        <Text style={{color:'#e6ae17', fontWeight:"600", alignSelf:'center'}}>
                            Alert
                        </Text>
                   </View>
                 <Text style={{textAlign:"center", marginTop:30, height:220}}>This is a custom Alert</Text>

                 <Pressable
                    onPress={()=>setShowModal(false)}
                    style={{
                        backgroundColor:"#000",
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20,
                        height:40
                    }}
                    
                 >
                     <Text style={{color:'white', textAlign:'center'}}>Ok</Text>
                 </Pressable>
                </View>
               </View>
        </Modal>
        <Modal visible={showPrompt}
                onRequestClose={() =>{
                    setShowPrompt(false);
                }}
                animationType='fade'
            >
               <View style={styles.centerModal}>
               <View style={styles.bodyModal}>
                   <View style={styles.headeModal}>
                        <Text style={{color:'#e6ae17', fontWeight:"600", alignSelf:'center'}}>
                            Alert
                        </Text>
                   </View>
                 <Text style={{textAlign:"center", marginTop:30, height:220}}>Are you sure to perform this operation?</Text>

                <View style={{
                        backgroundColor:"#000",
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20,
                        height:40,
                        flexDirection:"row",
                        justifyContent:'space-around',
                        alignItems:'center',

                    }}>
                <Pressable
                    onPress={()=>setShowPrompt(false)}
                 >
                     <Text style={{color:'white', textAlign:'center'}}>Ok</Text>
                 </Pressable>
                <Pressable
                    onPress={()=>setShowPrompt(false)}
                 >
                     <Text style={{color:'white', textAlign:'center'}}>Cancel</Text>
                 </Pressable>
                </View>
                 
                </View>
               </View>
        </Modal>
        <View style={styles.content}>
                <Text style={styles.header}>
                Welcome {userId !=null? userId : 'Guest'}!
                </Text>

                <Text style={{color:"#fefefe", fontSize:11, marginTop:10, alignSelf:"center", opacity:0.5}}>
                    This is our landing page
                </Text>

                <View style={{
                        flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
                        <TouchableOpacity style={styles.btn}
                        onPress={()=> {setShowModal(true)}}>
                        <Text style={{flex:1, fontWeight:"600", fontSize:18, alignSelf:"center", marginTop:6}}>
                            Show Alert</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.btnp}
                        onPress={()=>{
                            setShowPrompt(true)
                        }}>
                        <Text style={{flex:1, fontWeight:"600", fontSize:18, alignSelf:"center", color:"white", marginTop:6}}>Show Prompt
                        </Text>
                            </TouchableOpacity>
                        
                        
                    </View>
        </View>
        </ImageBackground>
    ) 
}

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        width: null,
        height: 700,
        resizeMode: 'cover'
    },
    content:{
        paddingHorizontal:25,
        paddingVertical:20
    },
    header:{
        color:"#fff",
        fontSize:24,
        fontWeight:"600",
        marginTop:40,
        alignItems:"center",
        alignSelf:"center"
    },
    btn:{
        borderRadius:20,
        backgroundColor: "#e6ae17",
        height:40,
        width:120,
        marginTop:20
    },
    btnp:{
        borderRadius:20,
        backgroundColor: "green",
        height:40,
        width:130,
        marginRight:10,
        marginTop:20
    },

    centerModal: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000099'
    },
    headeModal:{
        height:50,
        justifyContent:'center',
        backgroundColor: '#eee',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
    bodyModal:{
        width:300,
        height:300,
        backgroundColor:'#fff',
        borderRadius:20
    }
})
