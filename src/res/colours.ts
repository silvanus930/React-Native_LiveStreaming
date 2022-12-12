import { Colors } from 'react-native-ui-lib/core';

// TODO: add colours from constants/constantcolor and then delete that file
const WHITE = '#FFFFFF';
const PINK = '#EE2E7F';
const ORANGE = '#FFB71B';
const RED = '#FF0000';
const GREEN = '#00FF00';
const colours = {
  textLight: WHITE,
  textMid: '#B7B7B7',
  textDark: '#000000',
  light: WHITE,
  dark: '#121212',
  blue: '#019EE3',
  pink: PINK,
  red: RED,
  greyLight: '#E5E7EB',
  greyMid: '#AAAAAA',
  notSelected: '#A1A1AA',
  container: '#F5F6F8',
  courseTag1st: '#7253A2',
  courseTag2nd: PINK,
  courseTag3rd: ORANGE,
  faded: '#DEDEDE',
  blink: '#12AD2B',
  overlay: '#000000C4',
  divider: '#B1B1B1',
  line: '#C5C7C9',
  toast: ORANGE,
  textTint: '#777777',
  transparent: '#00000000',
  gradient1: '#7253A2',
  gradient2: PINK,
  gradient3: ORANGE,
  bottomNavigation: '#FAFAFB',
  bgGray: '#F0F0F0',
  bgOpacity3: '#fff3',
  bgOpacity4: '#0000003f',
  pass: GREEN,
  fail: RED,
  main_bg: '#0c1e2b',
  tab_bg: '#1f2f3d',
  tab_selected: '#1f3959',
};
Colors.loadColors(colours);
export default colours;
