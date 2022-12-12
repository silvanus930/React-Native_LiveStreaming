import React, { FunctionComponent } from 'react';
import LinearGradient from 'react-native-linear-gradient';

type ButtonComponentProps = {
  style?: any,
};
const TopGradient: FunctionComponent<ButtonComponentProps> = (props: any) => {
  const { children, style } = props;
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;
  return (
    <LinearGradient
      colors={['#0c1e27', '#0c1e3b', '#0c1e2b']}
      start={{ x: 0.24, y: 0.485 }}
      end={{ x: 0.995, y: 0.257 }}
      locations={[0.01, 0.733, 1]}
      style={{ ...passedStyles }}
    >
      {children}
    </LinearGradient>
  );
};

export default TopGradient;
