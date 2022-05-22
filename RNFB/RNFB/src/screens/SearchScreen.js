import React from 'react'
import { SearchBar } from 'react-native-elements';
import {View, Text, Image} from 'react-native'
import {logo} from '../global/styles';
import Logo from '../images/logo.png';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
    <View>
        <Image source={Logo} style={logo} />
        <SearchBar
        style={{/*fontFamily: 'IBMPlexSansKR-Regular',*/ color: "#FF9D9D"}}
        placeholder="Type here..."
        placeholderTextColor={'#FF9D9D'}
        inputContainerStyle={{backgroundColor: '#F2F2F2'}}
        leftIconContainerStyle={{backgroundColor: '#F2F2F2'}}
        inputStyle={{backgroundColor: '#F2F2F2'}}
        containerStyle={{
            backgroundColor: '#F2F2F2',
            justifyContent: 'space-around',
            borderTopWidth:0,
            borderBottomWidth:0,
            height:70
        }}
        onChangeText={this.updateSearch}
        value={search}
        />
      </View>
    );
  }
}