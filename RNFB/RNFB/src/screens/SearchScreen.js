import React from 'react'
import { SearchBar } from 'react-native-elements';
import {View, Text, StyleSheet, Image} from 'react-native'
import {logo, myPageStyle} from '../global/styles';
import { styledtext } from '../global/fontStyles';
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
    <View style = {{flex:1, alignItems:'space-between', justifyContent:'center', flexDirection: 'column'}}>
        <Image source={Logo} style={logo} />
        <SearchBar
        placeholder="Type here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      </View>
    );
  }
}