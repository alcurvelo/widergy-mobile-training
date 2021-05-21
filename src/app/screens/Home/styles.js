import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    contain:{
        flex:1,
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#4bcaf9'
    },
    bienvenidaContent:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        minHeight:200,
        borderRadius:10,
        backgroundColor:'green'
    },
    viewLogo:{
        width:120,
        height:120
    },
    nombreEmpresa:{
        color:'#ffb200'
    },
    textBienvenida:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    }
})