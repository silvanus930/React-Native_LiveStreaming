
import React from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import R from '../res/R';

function HChannelCard(props: any) {
    const {
        item, onPress,
    } = props;
    return (
        <View
            style={{width: 150}}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                <View
                    margin-10
                    marginR-0
                    style={{
                        borderColor: R.colours.light,
                        borderWidth: 1,
                    }}
                >
                    <FastImage
                        resizeMode="cover"
                        style={{
                            width: 40,
                            height: 30,
                            margin: 10,
                            backgroundColor: R.colours.light,
                        }}
                        source={{ uri: item.logo }}
                    />
                    <View center>
                        <Text light numberOfLines={1}>
                            {item.channelName}
                        </Text>
                        <Text light text20>
                            {item.groupName}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );
}

export default HChannelCard;