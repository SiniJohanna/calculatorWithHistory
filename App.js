import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const buttonPlus= () =>{
    
    setResult(Number(number1) + parseInt(number2));
    
    setText(Number(number1) + '+' + Number(number2) + '=' + (parseInt(number1) + parseInt(number2)));
    setData([...data, { text: text, key: (data.length+1) }]);
    setNumber1('');
    setNumber2('');
  }
  const buttonMinus= () =>{
    
      setResult(parseInt(number1) - parseInt(number2));
    
      setText(number1 + '+' + number2 + '=' + (parseInt(number1) + parseInt(number2)));
    setData([...data, { text: text, key: (data.length+1) }]);
    setNumber1('');
    setNumber2('');
  }
  

  return (
    <View style={styles.container}>
      <View style={{flex: 5, justifyContent:'flex-end', alignItems:'center'}}>
        <Text>Result: {result}</Text>
        <TextInput 
        style={{width:200, borderColor:'gray', borderWidth:1}}
        onChangeText={number1=> setNumber1(number1)}
        value={number1}
        keyboardType="numeric"
        />
        <TextInput 
        style={{width:200, borderColor:'gray', borderWidth:1}}
        onChangeText={number2=> setNumber2(number2)}
        value={number2}
        keyboardType="numeric"
        />
      </View>
      <View style={styles.btn}>
        <Button onPress={buttonPlus}title="+"/>
        <Button onPress={buttonMinus}title="-"/>
      </View>
      <View style={{flex: 5}}>
        <FlatList 
          ListHeaderComponent={<Text>History:</Text>}
          data={data}
          renderItem={({ item }) =>
            <Text>{item.text}</Text>
          }
        />
      </View>
      
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  btn: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
