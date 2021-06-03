import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native';
const HeaderNavigation=(scene, previous, navigation, nombre) => {
    const { options } = scene.descriptor;
    return (
        <View style={[options.headerStyle,{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'2%',flexWrap:'nowrap',width:'100%',flexDirection:'row'}]}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>{nombre}</Text>
            <TouchableOpacity onPress={navigation.goBack}><Text style={{color:'lightblue',fontSize:18,fontWeight:'bold'}}>Volver</Text></TouchableOpacity>
        </View>
        
    );
}
export default HeaderNavigation