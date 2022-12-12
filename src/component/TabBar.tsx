import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';

import R from '../res/R';
import { IoniconsIcon } from '../res/icons';
import SearchBar from './SearchBar';
import FastImage from 'react-native-fast-image';

const logoIcon = require('../res/images/logo2.png');

interface TabBarProps {
  navigationState: any;
  index: number;
  setIndex: (index: number) => void;
  setIsSetting: (flag: boolean) => void;
  setIsSearch: (flag: boolean) => void;
}

function TabBar(prop: TabBarProps) {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPharse] = useState('');

  const { navigationState, index, setIndex, setIsSetting, setIsSearch } = prop;
  return (
    <View row margin-10 style={{ justifyContent: 'space-between' }}>
      <FastImage
        resizeMode='contain'
        style={{
          height: 50,
          width: 120,
        }}
        source={logoIcon}
      />
      <View
        row
        center
        style={{
          borderRadius: 40,
          backgroundColor: R.colours.tab_bg,
          width: '30%',
          height: 40,
        }}
      >
        {navigationState.routes.map((route: any, i: any) => (
          <View
            margin-5
            style={{
              flex: 1,
              borderRadius: 40,
              backgroundColor:
                index === i ? R.colours.tab_selected : R.colours.tab_bg,
            }}
            key={`program_tab_${route.key}`}
          >
            <View
              center
              margin-5
              style={{
                backgroundColor:
                  index === i ? R.colours.tab_selected : R.colours.tab_bg,
                borderColor: R.colours.tab_bg,
                borderBottomRightRadius: 30,
                borderBottomLeftRadius: i === 0 ? 30 : 0,
              }}
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
                hitSlop={20}
              >
                <View style={styles.flexRow}>
                  <Text light text50>
                    {route.title}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        ))}
      </View>

      <View row>
        {/* <SearchBar
          clicked={clicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPharse}
          setClicked={setClicked}
        /> */}
        <Pressable onPress={() => { 
          setIsSearch(true);
        }}>
          <IoniconsIcon
            color={R.colours.light}
            name="search"
            style={{
              fontSize: 25,
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 8,
            }}
          />
        </Pressable>

        <Pressable onPress={() => {
          setIsSetting(true);
         }}>
          <IoniconsIcon
            color={R.colours.light}
            name="settings"
            style={{
              fontSize: 25,
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 8,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default TabBar;

/* { Start StyleSheet } */
const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 0,
  },
});
/* { End StyleSheet } */
