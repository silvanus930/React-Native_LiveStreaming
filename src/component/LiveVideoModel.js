import { LivePlayer } from "react-native-live-stream";

function LiveVideoModel(props) {
    return (
        <LivePlayer source={{ uri: props.uri }}
            paused={false}
            muted={false}
            bufferTime={300}
            maxBufferTime={1000}
            resizeMode={"contain"}
            onLoading={() => { }}
            onLoad={() => { }}
            onEnd={() => { }}
        />
    );
}

export default LiveVideoModel;