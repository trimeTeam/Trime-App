import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let customFonts = {
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
};

export default function SearchField(props) {
  const [searchInput, setSearchInput] = useState("")

  function handleChange(event) {
    setSearchInput(event.target.value)
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.searchField}>
        <Icon.Button backgroundColor='white' borderRadius='0' color='grey' name='search'/>
        <TextInput style={styles.input} placeholder='Search for trainer' value={searchInput} onChange={handleChange}/>
        <Icon.Button backgroundColor='white' borderRadius='0' color='grey' name='sliders' onClick={props.displayFilters}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchField: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 30,
  },
  input: {
    padding: 10,
    backgroundColor: '#FFF',
    fontFamily: 'OpenSans-Regular'
  }
});