import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CheckBox from '@react-native-community/checkbox';
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const LoginScreen = ({navigation}:any)=>{

    const [isCheck,setCheck] = useState(false);
    const [email1,setEmail1] = useState(''); 
    const [pass1,setPass1] = useState('');
    const [checkEmail1,setCheckEmail1] = useState(true);
    const [emailRequired1,setEmailRequired1] = useState('');
    const [passwordRequired1,setPasswordRequired1] = useState('');

    
    const onSubmit = () => {
        let formData1 = {
            _email : email1,
            _password : pass1,
            _checkBox : isCheck
        }
        console.log(formData1);
        if(formData1._email == '' ){
            setCheckEmail1(true);
            setEmailRequired1('Email không được để trống !');
        }else{
            setEmailRequired1('');
            let regex_email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
            setCheckEmail1(regex_email.test(email1));
        }
        
        if(formData1._password == ''){
            setPasswordRequired1('Mật khẩu không được để trống !');
        }else{
            setPasswordRequired1('');
        }

        if(checkEmail1 === true && emailRequired1 === "" && passwordRequired1 === ""){
            save();
        }else{

        }
    }

    const save = async () => {
        let data = {
            email1,
            pass1
        }
        try {
            await AsyncStorage.setItem('login',JSON.stringify(data));
            navigation.navigate('Home');
        }catch{

        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerTitle}>
                <View>
                    <Text style={{fontSize:40,color:'#000',padding:15,marginTop:20,textAlign:'center'}}>Login</Text>
                    <Text>By Signinbg in you are agreeing</Text>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text>Our </Text>
                        <TouchableOpacity><Text style={{color:'aqua',alignItems:'center'}} onPress={()=>Alert.alert("Chức năng này đang phát triển")}>Term and Privacy Policy</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
                <TouchableOpacity style={{padding:15}}><Text style={styles.active}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={{padding:15}} onPress={() =>navigation.navigate("Register")}><Text>Register</Text></TouchableOpacity>

            </View>

            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Icon name="mail-outline" size={30} style={styles.icon}/>
                    <TextInput placeholder="Email Address" onChangeText={(value)=>{setEmail1(value)}} style={styles.formControl}></TextInput>
                    <Text style={styles.error_text}>{checkEmail1?'':'Email SAI định dạng'}{emailRequired1}</Text>                           
                </View>
                <View style={styles.formGroup}>
                    <Icon name="lock-closed" size={30} style={styles.icon} />
                    <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(value)=>setPass1(value)} style={styles.formControl}></TextInput>
                    <Icon name="eye-outline" size={30} style={styles.eyes_icon}/>
                    <Text style={styles.error_text}>{passwordRequired1}</Text>               
                </View>
                <View style={styles.group_1}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <CheckBox
                            disabled={false}
                            value={isCheck}
                            onValueChange={() => setCheck(!isCheck)}
                            tintColors={{true:"aqua"}}
                        />
                        <Text>Remember Me</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{color:'aqua',alignItems:'center'}} onPress={()=>Alert.alert("Chức năng này đang phát triển")}>
                                Forget Password ?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn_login} onPress={()=>{onSubmit()}}>
                        <Text style={{color:"#fff",fontSize:24,fontWeight:'bold'}}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const RegisterScreen = ({navigation}:any) => {

    const [email2,setEmail2] = useState(''); 
    const [pass2,setPass2] = useState('');
    const [confirmPass,setConfirmPass] = useState('');

    const [checkEmail2,setCheckEmail2] = useState(true);
    const [emailRequired2,setEmailRequired2] = useState('');
    const [passwordRequired2,setPasswordRequired2] = useState('');
    const [ConfirmPassRequired,setConfirmPassRequired] = useState('');
    const [ConfirmPassCheck,setConfirmPassCheck] = useState('');

    
    const onSubmit1 = () => {
        let formData = {
            _email : email2,
            _password : pass2,
            _confirmPass : confirmPass
        }
        console.log(formData);
                  
        if(formData._email === "" ){
            setCheckEmail2(true);
            setEmailRequired2('Email không được để trống !');
        }else{
            setEmailRequired2('');
            let regex_email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
            setCheckEmail2(regex_email.test(email2));
        }
        
        if(formData._password === ''){
            setPasswordRequired2('Mật khẩu không được để trống !');
        }else{
            setPasswordRequired2('');
        }

        if(formData._confirmPass === ''){
            setConfirmPassRequired('Mật khẩu xác nhận không được để trống !');
        }else{
            setConfirmPassRequired('');
        }

        if(formData._confirmPass != formData._password){
            setConfirmPassCheck('Mật khẩu xác nhận không trùng khớp !');
        }else{
            setConfirmPassCheck('');
        }
        console.log('emailRequired2 :', emailRequired2);
        console.log('checkEmail2 : ',checkEmail2);
        console.log('passwordRequired2  : ',passwordRequired2);
        console.log('ConfirmPassCheck : ',ConfirmPassCheck);
        console.log('ConfirmPassRequired : ',ConfirmPassRequired);
        
        if(emailRequired2 === "" && checkEmail2 === true && passwordRequired2 === "" && ConfirmPassRequired === "" && ConfirmPassCheck === ""){
            create();
        }else{
            console.log("No register");
        }
    }

    const create = async () => {
        let data = {
            email2,
            pass2
        }
        try {
            await AsyncStorage.setItem('login',JSON.stringify(data));
            navigation.navigate('Home');
        }catch{

        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.headerTitle}>
                <View>
                    <Text style={{fontSize:40,color:'#000',padding:15,marginTop:20,textAlign:'center'}}>Register</Text>
                    <Text>By Signinbg in you are agreeing</Text>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text>Our </Text>
                        <TouchableOpacity><Text style={{color:'aqua',alignItems:'center'}} onPress={()=>Alert.alert("Chức năng này đang phát triển")}>Term and Privacy Policy</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
                <TouchableOpacity style={{padding:15}} onPress={() => navigation.navigate("Login")} ><Text>Login</Text></TouchableOpacity>
                <TouchableOpacity style={{padding:15}}><Text style={styles.active}>Register</Text></TouchableOpacity>

            </View>

            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Icon name="mail-outline" size={30} style={styles.icon}/>
                    <TextInput placeholder="Email Address" onChangeText={(value)=>{setEmail2(value)}} style={styles.formControl}></TextInput>
                    <Text style={styles.error_text}>{checkEmail2?'':'Email SAI định dạng'}{emailRequired2}</Text>                           
                </View>
                <View style={styles.formGroup}>
                    <Icon name="lock-closed" size={30} style={styles.icon} />
                    <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(value)=>setPass2(value)} style={styles.formControl}></TextInput>
                    <Icon name="eye-outline" size={30} style={styles.eyes_icon}/>
                    <Text style={styles.error_text}>{passwordRequired2}</Text>               
                </View>
                <View style={styles.formGroup}>
                    <Icon name="lock-closed" size={30} style={styles.icon} />
                    <TextInput secureTextEntry={true} placeholder="Confirm Password" onChangeText={(value)=>setConfirmPass(value)} style={styles.formControl}></TextInput>
                    <Icon name="eye-outline" size={30} style={styles.eyes_icon}/>
                    <Text style={styles.error_text}>{ConfirmPassRequired}{ConfirmPassCheck}</Text>               
                </View>
                <View>
                    <TouchableOpacity style={styles.btn_login} onPress={()=>{onSubmit1()}}>
                        <Text style={{color:"#fff",fontSize:24,fontWeight:'bold'}}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    headerTitle:{
        alignItems:'center'
    },
    active:{
        color:"aqua",
        borderBottomWidth : 1,
        borderBottomColor: 'black',
        paddingBottom:10
    },
    form:{
        paddingHorizontal:50
    },
    formGroup:{
        marginBottom:15
    },
    formControl:{
       borderBottomWidth:1,borderColor:'gray',
       paddingLeft:35
    },
    icon:{
        fontSize:25,
        position:"absolute",
        top:10,
    },
    eyes_icon:{
        fontSize:25,
        position:"absolute",
        right:10,top:10
    }
    ,
    group_1:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    btn_login:{
        marginTop:30,
        backgroundColor:"aqua",
        paddingVertical:15,
        alignItems:"center",
        borderRadius:10
    },
    error_text:{
        color: 'red'
    }
    
})
const Stack = createNativeStackNavigator();
const Login = () => {

    return (          
        <Stack.Navigator screenOptions={{headerShown:false,headerBackButtonMenuEnabled:false}}>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Login;