
import React from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import R from '../res/R';

function ChannelCard(props: any) {
    const {
        item, onPress,
    } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View
                margin-10
                marginB-0
                row
                style={{
                    borderColor: R.colours.light,
                    borderWidth: 1,
                }}
            >
                <FastImage
                    resizeMode="cover"
                    style={{
                        width: 70,
                        height: 50,
                        margin: 10,
                        backgroundColor: R.colours.light,
                    }}
                    source={{ uri: item.logo }}
                />
                <View center flex>
                    <Text light text80Bold numberOfLines={1}>
                        {item.channelName}
                    </Text>
                    <Text light text50>
                        {item.groupName}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ChannelCard;