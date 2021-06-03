import HeaderNavigation from '../Navigation/HeaderNavigation'

export const screenOptionsHome={
    headerStyle:{
        backgroundColor:'#00d564'
    },
    headerTintColor:'white',
    headerBackTitleVisible:true
}
export const screenOptions=(headerName)=>{
    return {
        headerStyle:{backgroundColor:'#00d564'},
        //Creando el header de la calculadora
        header:({scene, previous, navigation})=>HeaderNavigation(scene, previous, navigation, headerName)
    }
}