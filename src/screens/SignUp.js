import React, { useState } from 'react'
import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert, ToastAndroid, Modal, Pressable } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { useSelector, useDispatch } from 'react-redux'
import {setUserId, setPassword} from '../redux/action'

const SignUp = ({navigation}) => {
    //const {navigation} = props
    //const [userId, setUserId] = useState("")
    //const [password, setpassword] = useState("")
    const [cPassword, setcPassword] = useState("")
    const [showModal, setShowModal] = useState(false)

    const {userId,password} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();

    // handle user info
    const onUserNameChange = txt =>{
        setUserId(txt);
    }
    const onPasswordChange = txt =>{
        setpassword(txt);
    }
    const oncPasswordChange = txt =>{
        setcPassword(txt);
    }
    
    //submit form
    const handleSubmit = async () => {
        if(userId.length < 3){
            //Alert.alert('Warning', 'Please choose a usernames',{text:'Alright'});
            setShowModal(true);
            return;
        }
        if(password !== cPassword){
            //Alert.alert('Warning', 'Password and confirm password must be the same',{text:'Alright'});
            setShowModal(true);
            return;
        }
        dispatch(setUserId(userId))
        dispatch(setPassword(password))
        const userInfo = {userId:userId, password:password}

        await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
 
       // Alert.alert('Success', 'You signed up successfully',{text:'Alright'});
       // if(onFinish) onFinish();
        
        //console.log(userInfo);
    }

    return (
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
                            WARNING
                        </Text>
                   </View>
                 <Text style={{textAlign:"center", justifyContent:'center', height:220}}>All Fields are requied</Text>

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
            <View style={{marginTop:20, marginLeft:15}}>
                {/* <Text style={{color:"white"}}>Back</Text> */}
                <AntDesign name="leftcircleo" size="24" color="white"  />
            </View>
            <View style={styles.content}>
                
                <Text style={styles.header}>{
                "Create<br/>an account".split("<br/>").join("\n")
                }</Text>

                <Text style={{color:"#fefefe", fontSize:11, marginTop:10, opacity:0.5}}>
                    Fill the details & create your account
                </Text>

                <View style={{marginTop:50}}>
                    <TextInput 
                    value={userId} onChangeText={(value) => dispatch(setUserId(value))} 
                    style={styles.formControl} placeholder="Username / Email ID" />
                    
                    <TextInput 
                    value={password} 
                    onChangeText={(value) => dispatch(setPassword(value))} 
                    style={styles.formControl} placeholder="Password" />
                    
                    <TextInput onChangeText={oncPasswordChange} value={cPassword} style={styles.formControl} placeholder="Confirm Password" />

                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                        <Text style={{flex:1, fontWeight:"600", fontSize:18, alignSelf:"center", marginTop:6}}>Continue</Text>
                        
                    </TouchableOpacity>
                </View>

                {/* social logins */}
                <View style={{marginTop:30, alignItems:"center"}}>
                    <Text style={{color:"#fff"}}>or sign in with</Text>

                    <View style={{
                        flexDirection:"row", justifyContent:"space-arround", marginTop:20}}>
                        <TouchableOpacity>
                        <Image style={{
                            width:30, height:30, marginRight:20}} 
                            source={require('../../assets/fb.png')} resizeMode='stretch'/>
                            </TouchableOpacity>
                        
                        <TouchableOpacity 
                        onPress={()=> navigation.navigate('HomeScreen') }>
                        <Image style={{
                            width:30, height:30}} 
                            source={require('../../assets/google.jpg')} resizeMode='stretch'/>
                        </TouchableOpacity>
                    </View>
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
        marginTop:40
    },
    formControl:{
        borderColor:"#e6ae17",
        color:"#fff",
        fontSize:16,
        borderWidth:2,
        paddingVertical:10,
        paddingHorizontal:12,
        borderRadius:20,
        marginBottom:15
    },
    btn:{
        borderRadius:20,
        backgroundColor: "#e6ae17",
        height:40,
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


export default SignUp;