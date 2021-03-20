import React , {useState} from 'react' 
import {View,Button,TextInput,ScrollView,StyleSheet}  from 'react-native'
import firebase from '../database/firebase'

const Createbarcode =()=>{
const [state, setState] = useState({
    barcode:"",
});

const handleChangeText = (name,value)=>{
    setState({...state, [name]:value})
};
const newbarcode = async () =>{
    if (state.name === ''){
        alert('No deje espacios en blanco')
    } else { 
        firebase.db.collection('test').add({
            barcode: state.barcode
        })
        alert('Guardado')
    }
    };
    return (
<ScrollView style={styles.container}>
    <View style={styles.inputGroup}>
        <TextInput
         placeholder="barcode" 
         onChangeText={(value) => handleChangeText('name',value)}/>
    </View>
    <View style={styles.inputGroup}>
        <Button title="Guardar codigo de barra" onPress={() => newbarcode()}/>
    </View>
</ScrollView>
    )
}
const styles =StyleSheet.create({
    container: {
        flex: 1,
        padding:35,
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
    }
})

export default Createbarcode

