/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import RecordScreen, {RecordingStartResponse} from 'react-native-record-screen';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    startRecording();
  }, []);

  const startRecording = async () => {
    RecordScreen.startRecording({mic: false}).catch(error =>
      console.error(error),
    );

    setTimeout(async () => {
      // recording stop
      const res = await RecordScreen.stopRecording().catch(error =>
        console.warn(error),
      );
      if (res) {
        const url = res.result.outputURL;
      }
    }, 3000);
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
