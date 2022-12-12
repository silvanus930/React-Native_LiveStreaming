// SearchBar.js
import React from 'react';
import {
  StyleSheet, TextInput, Keyboard,
} from 'react-native';
import View from 'react-native-ui-lib/view';
import { IoniconsIcon, EntypoIcon } from '../res/icons';
import R from '../res/R';

function SearchBar(props: any) {
  const {
    clicked, searchPhrase, setSearchPhrase, setClicked,
  } = props;
  return (
    <View style={{
      width: 250,
      height: 40,
      backgroundColor: R.colours.bgOpacity3,
      borderRadius: 30,
    }}>
      <View row flex
        style={{ alignItems: 'center',
        justifyContent: 'space-evenly',
       }}
      >
        {/* search Icon */}
        <IoniconsIcon
          name="search"
          size={25}
          color={R.colours.light}
          style={{ marginLeft: 10 }}
          onPress={() => {
            setClicked(true);
          }}
        />
        {/* Input field */}

        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        <EntypoIcon
          name="cross"
          size={20}
          color={R.colours.light}
          style={{ marginRight: 10 }}
          onPress={() => {
            setSearchPhrase('');
            Keyboard.dismiss();
            setClicked(false);
          }}
        />
      </View>
    </ View>
  );
}
export default SearchBar;

// styles
const styles = StyleSheet.create({
    input: {
    fontSize: 16,
    marginLeft: 10,
    color: R.colours.light,
    width:190,
  },
});
