import { ThemeManager, Typography } from 'react-native-ui-lib/core';

Typography.bold = {
  fontWeight: '700',
};

Typography.text20 = {
  fontSize: 10,
};

Typography.text40 = {
  fontSize: 12,
};

Typography.text40Bold = {
  fontSize: 12,
  fontWeight: '700',
};

Typography.text50 = {
  fontSize: 13,
};
Typography.text50I = {
  fontSize: 13,
  fontStyle: 'italic',
};
Typography.text50Bold = {
  fontSize: 13,
  fontWeight: '700',
};
Typography.failText = {
  fontSize: 13,
  fontWeight: '400',
};

Typography.text50Mid = {
  fontSize: 13,
  fontWeight: '600',
};
Typography.text60Bold = {
  fontSize: 15,
  fontWeight: '700',
};
Typography.text65Bold = {
  fontSize: 16,
  fontWeight: '700',
};
Typography.text70Bold = {
  fontSize: 17,
  fontWeight: '700',
};
Typography.text80Bold = {
  fontSize: 21,
  fontWeight: '700',
};
Typography.text85Bold = {
  fontSize: 24,
  fontWeight: '700',
};
Typography.text90Bold = {
  fontSize: 36,
  fontWeight: '500',
};
Typography.text200 = {
  fontSize: 40,
  fontWeight: '500',
};
ThemeManager.setComponentTheme('Text', {
  style: {
    fontFamily: 'NunitoSans-Regular',
  },
});
