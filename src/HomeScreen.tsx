import React, { useEffect, useState } from 'react';
import {
  Dimensions, FlatList, Pressable, StyleSheet,
} from 'react-native';
import View from 'react-native-ui-lib/view';
import SafeAreaView from 'react-native-safe-area-view';
import Text from 'react-native-ui-lib/text';
import { TabView } from 'react-native-tab-view';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import R from './res/R';
import channel from './res/channel.json';
import TabBar from './component/TabBar';
import TopGradient from './component/TopGradient';
import BackButton from './component/Button';
import ChannelCard from './component/ChannelCard';
import SearchBar from './component/SearchBar';
import HChannelCard from './component/HorizonChannelCard';
import Navigation from './Navigation';
import { useNavigation } from '@react-navigation/native';
import { VideoModel } from './component/VideoModel';

function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [currentChannel, setCurrentChannel] = useState<string>('');
  const [liveIndex, setLiveIndex] = useState<Array<any>>([]);
  const [movieIndex, setMovieIndex] = useState<Array<any>>([]);
  const [SeriesIndex, setSeriesIndex] = useState<Array<any>>([]);
  const [isSetting, setIsSetting] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPharse] = useState('');

  const [liveChannels, setLivechannels] = useState<Array<any>>([]);
  const [seriesChannels, setSerieschannels] = useState<Array<any>>([]);
  const [moviesChannels, setMovieschannels] = useState<Array<any>>([]);

  const [showModal, setShowModal] = useState({ isVisible: false, data: '' });

  const toggleModal = (state: any) => {
    setShowModal({
      isVisible: state.isVisible,
      data: state.data,
    });
  };

  const [routes] = useState([
    { key: 'first', title: 'Live' },
    { key: 'second', title: 'Movies' },
    { key: 'third', title: 'Series' },
  ]);

  useEffect(() => {

    const liveArray = [];
    const seriesArray = [];
    const movieArray = [];

    for (const group in channel.live)
      liveArray.push(...channel.live[group].channels);
    setLivechannels(liveArray);

    for (const group in channel.series)
      for (var i = 0; i < channel.series[group].channels.length; i++)
        seriesArray.push(...channel.series[group].channels[i].channels);
    setSerieschannels(seriesArray);

    for (const group in channel.movies)
      movieArray.push(...channel.movies[group].channels);
    setMovieschannels(movieArray);

  }, []);

  const getLiveChannelFromSearch = (str: string) => {
    return liveChannels.filter((item) => item.channelName.includes(str));
  }

  const getLiveGroupData = () => {
    const array = [];
    for (const group in channel.live) {
      array.push({ name: channel.live[group].name, channels: channel.live[group].channels });
    }
    return array;
  }

  const getSeriesGroupData = () => {
    const array = [];
    for (const group in channel.series) {
      array.push({ name: channel.series[group].name, channels: channel.series[group].channels });
    }
    return array;
  }

  const getMovieGroupData = () => {
    const array = [];
    for (const group in channel.movies) {
      array.push({ name: channel.movies[group].name, channels: channel.movies[group].channels });
    }
    return array;
  }

  const renderCategory = (key: string) => (
    <>
      <View
        margin-10
        style={{
          borderColor: R.colours.light,
          borderWidth: 1,
        }}
      >
        <TouchableOpacity>
          <View
            margin-10
            marginB-0
            style={{
              borderColor: R.colours.light,
              borderWidth: 1,
            }}
          >
            <Text margin-10 light center text40Bold>
              Add Group
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            margin-10
            marginB-0
            style={{
              borderColor: R.colours.light,
              borderWidth: 1,
            }}
          >
            <Text margin-10 light center text40Bold>
              Add Password
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            margin-10
            style={{
              borderColor: R.colours.light,
              borderWidth: 1,
            }}
          >
            <Text margin-10 light center text40Bold>
              Add EPG ID
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        flex
        margin-10
        style={{
          flex: 2,
          borderColor: R.colours.light,
          borderWidth: 1,
        }}
      >
        <View
          margin-10
          style={{
            height: 140,
            borderColor: R.colours.light,
            borderWidth: 1,
          }}
        />
        <View>
          <Text text70Bold center light>
            {currentChannel}
          </Text>
          <Text marginT-10 text60Bold center>
            EPG Title: 00:00 - 01:00 (time)
          </Text>
          <Text text60Bold center>
            EPG Title: 01:00 - 02:00 (time)
          </Text>
        </View>
      </View>
    </>
  );

  const renderGroup = (key: string) => {
    if (key === 'first') {
      if (liveIndex.length > 0) {
        return (
          <View>
            <FlatList
              nestedScrollEnabled
              key={'_'}
              data={liveIndex}
              renderItem={({ item }) =>
                <ChannelCard
                  item={item}
                  onPress={() => {

                    setShowModal({
                      isVisible: true,
                      //data: item.link,
                      data: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    });

                  }}
                />
              }
              initialNumToRender={6}
              numColumns={1}
              keyExtractor={item => '_' + item.channelName.toString()}
            />
            <BackButton
              onPress={() => {
                setLiveIndex([])
              }}
            />
          </View>);
      }
      else {
        return (
          <FlatList
            key={'#'}
            nestedScrollEnabled
            data={getLiveGroupData()}
            renderItem={
              ({ item }) =>
                <View flex>
                  <TouchableOpacity
                    onPress={() => {
                      setLiveIndex(item.channels);
                      setCurrentChannel(item.name);
                    }}>
                    <View
                      margin-10
                      marginB-0
                      row
                      flex
                      style={{
                        height: 150,
                        borderColor: R.colours.light,
                        borderWidth: 1,
                      }}
                    >
                      <View center flex margin-10>
                        <Text light text80Bold center>
                          {item.name}
                        </Text>
                        <Text marginT-10 light text50>
                          {'channels:' + item.channels.length}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
            }
            numColumns={4}
            initialNumToRender={6}
            keyExtractor={item => '#' + item.name.toString()}
          />
        );
      }
    }

    if (key === 'second') {
      if (movieIndex.length > 0) {
        return (
          <View>
            <FlatList
              nestedScrollEnabled
              key={'_'}
              data={movieIndex}
              renderItem={({ item }) =>
                <ChannelCard
                  item={item}
                  onPress={() => {
                    // setMovieIndex(item.channels);
                  }}
                />
              }
              initialNumToRender={6}
              numColumns={1}
              keyExtractor={item => '_' + item.channelName.toString()}
            />
            <BackButton
              onPress={() => {
                setMovieIndex([])
              }}
            />
          </View>);
      }
      else {
        return (
          <View>

            <FlatList
              key={'#'}
              nestedScrollEnabled
              data={getMovieGroupData()}
              renderItem={
                ({ item }) =>
                  <View flex>
                    <TouchableOpacity
                      onPress={() => {
                        setMovieIndex(item.channels);
                        setCurrentChannel(item.name);
                      }}>
                      <View
                        margin-10
                        marginB-0
                        row
                        flex
                        style={{
                          height: 150,
                          borderColor: R.colours.light,
                          borderWidth: 1,
                        }}
                      >
                        <View center flex margin-10>
                          <Text light text80Bold center>
                            {item.name}
                          </Text>
                          <Text marginT-10 light text50>
                            {'channels:' + item.channels.length}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
              }
              numColumns={4}
              initialNumToRender={6}
              keyExtractor={item => '#' + item.name.toString()}
            />
          </View>
        );
      }
    }

    if (key === 'third') {
      if (SeriesIndex.length > 0) {
        return (
          <View>
            <FlatList
              nestedScrollEnabled
              key={'_'}
              data={SeriesIndex}
              renderItem={({ item }) =>
                <ChannelCard
                  item={item}
                  onPress={() => {
                    setSeriesIndex(item.channels);
                    console.log(item.channels);
                  }}
                />
              }
              initialNumToRender={6}
              numColumns={1}
              keyExtractor={item => '_' + item.channelName.toString()}
            />
            <BackButton
              onPress={() => {
                setSeriesIndex([]);
              }}
            />
          </View>);
      }
      else {
        return (
          <FlatList
            key={'#'}
            nestedScrollEnabled
            data={getSeriesGroupData()}
            renderItem={
              ({ item }) =>
                <View flex>
                  <TouchableOpacity
                    onPress={() => {
                      setSeriesIndex(item.channels);
                      setCurrentChannel(item.name);
                    }}>
                    <View
                      margin-10
                      marginB-0
                      row
                      flex
                      style={{
                        height: 150,
                        borderColor: R.colours.light,
                        borderWidth: 1,
                      }}
                    >
                      <View center flex margin-10>
                        <Text light text80Bold center>
                          {item.name}
                        </Text>
                        <Text marginT-10 light text50>
                          {'channels:' + item.channels.length}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
            }
            numColumns={4}
            initialNumToRender={6}
            keyExtractor={item => '#' + item.name.toString()}
          />
        );
      }
    }
  };

  const renderSettingScene = () => {
    return (
      <View margin-10 flex
        style={{
          borderColor: R.colours.light,
          borderWidth: 1,
        }}>

        <BackButton
          onPress={() => {
            setIsSetting(false);
          }}
        /></View>
    );
  };

  const renderSearchScene = () => {
    return (
      <View margin-10 flex
        style={{
          borderColor: R.colours.light,
          borderWidth: 1,
        }}>
        <View margin-10 center>
          <SearchBar
            clicked={clicked}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPharse}
            setClicked={setClicked}
          />
        </View>
        <Text marginL-10 text50Bold light>Live</Text>
        <FlatList
          nestedScrollEnabled
          key={'_'}
          data={liveChannels.filter((item) => item.channelName.includes(searchPhrase))}
          renderItem={({ item }) =>
            <HChannelCard
              item={item}
              onPress={() => {
                // setMovieIndex(item.channels);
              }}
            />
          }
          initialNumToRender={6}
          numColumns={1}
          horizontal={true}
          keyExtractor={item => '_' + item.channelName.toString()}
        />
        <Text marginL-10 text50Bold light>Movies</Text>
        <FlatList
          nestedScrollEnabled
          key={'_'}
          data={seriesChannels.filter((item) => item.channelName.includes(searchPhrase))}
          renderItem={({ item }) =>
            <HChannelCard
              item={item}
              onPress={() => {
                // setMovieIndex(item.channels);
              }}
            />
          }
          initialNumToRender={6}
          numColumns={1}
          horizontal={true}
          keyExtractor={item => '_' + item.channelName.toString()}
        />
        <Text marginL-10 text50Bold light>Series</Text>
        <FlatList
          nestedScrollEnabled
          key={'_'}
          data={moviesChannels.filter((item) => item.channelName.includes(searchPhrase))}
          renderItem={({ item }) =>
            <HChannelCard
              item={item}
              onPress={() => {
                // setMovieIndex(item.channels);
              }}
            />
          }
          initialNumToRender={6}
          numColumns={1}
          horizontal={true}
          keyExtractor={item => '_' + item.channelName.toString()}
        />
        <BackButton
          onPress={() => {
            setIsSearch(false);
          }}
        /></View>
    );
  };

  const renderScene = ({ route }: any) => (
    isSearch ? renderSearchScene() :
      isSetting ? renderSettingScene() :
        <View style={styles.inner_box} row>
          <View
            margin-10
            style={{
              width: '70%',
              borderColor: R.colours.light,
              borderWidth: 1,
            }}
          >
            {renderGroup(route.key)}
          </View>
          <View flex>{renderCategory(route.key)}</View>
        </View >
  );

  const renderTabBar = ({ navigationState }: any) => (
    <TabBar
      navigationState={navigationState}
      index={index}
      setIndex={setIndex}
      setIsSetting={setIsSetting}
      setIsSearch={setIsSearch}
    />
  );

  return (
    <TopGradient style={{ flex: 1 }}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'transparent' }}
        forceInset={{ top: 'always' }}
      >
        <View flex>
          {showModal.isVisible ? (
            <VideoModel
              isVisible={showModal.isVisible}
              toggleModal={toggleModal}
              videoDetail={showModal.data}
            />
          ) : null}
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            swipeEnabled={false}
          />
        </View>
      </SafeAreaView>
    </TopGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  inner_box: {
    flex: 1,
    width: '100%',
    // backgroundColor: R.colours.bgOpacity3,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 0,
  },
  image: {
    height: 68,
    maxWidth: 68,
    borderRadius: 10,
  },
});
