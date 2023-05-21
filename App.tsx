/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as RNFS from 'react-native-fs';
import RecordScreen, {RecordingStartResponse} from 'react-native-record-screen';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,
  Button,
} from 'react-native';

function App(): JSX.Element {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // startRecording();
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

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const readFile = () => {
    RNFS.readDir(RNFS.DocumentDirectoryPath)
      .then(result => {
        console.log('GOT RESULT', result);
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then(statResult => {
        if (statResult[0].isFile()) {
          return RNFS.readFile(statResult[1], 'utf8');
        }
        return 'no file';
      })
      .then(contents => {
        setContent(contents);
        console.log(contents);
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello</Text>
          <Button title="request permissions" onPress={readFile} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
