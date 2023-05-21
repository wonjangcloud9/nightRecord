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
        console.log(url);
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

        console.log(RNFS.DocumentDirectoryPath);
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then(statResult => {
        console.log('====================================');
        console.log(statResult);
        console.log('====================================');
        __savePicture(
          'data/user/0/Android/data/com.test/files/ReactNativeRecordScreen/HD2023-05-22-01-02-46.mp4',
        );
        if (statResult[0].isFile()) {
          return RNFS.readFile(statResult[0]['path'], 'utf8');
        }
        return 'no file';
      })
      .then(contents => {
        setContent(contents);
        console.log('====================================');
        console.log(contents);
        console.log('====================================');
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };

  const __savePicture = async (video: any) => {
    const file = new FormData();
    file.append('file', {
      uri: video,
      type: 'video/mp4',
      name: `test2.mp4`,
    });

    await fetch('http://115.165.86.157:8000/upload/video', {
      method: 'POST',
      body: file,
    })
      .then(response => response.json())
      .then(async responseJson => {
        const url = responseJson.url;
        console.log(url);

        // await ocrUplod(url);
      })
      .catch(err => {
        console.log('Error');
        console.log(err);
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
