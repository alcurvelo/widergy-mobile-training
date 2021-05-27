import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    boxDrawerScreen:{
        width:245,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    imageDrawerScreen:{
        width:50,
        height:40,
        flex:.3
    },
    textDrawerScreen:{
        fontSize:18,
        color:'#f8f8f8',
        fontWeight:'bold',
        flex:.7,
        textAlign:'center'
    }
})