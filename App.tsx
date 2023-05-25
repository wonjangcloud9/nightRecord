/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import RecordScreen, {RecordingStartResponse} from 'react-native-record-screen';
import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

function App(): JSX.Element {
  const deviceWidth = Dimensions.get('window').width / 16;
  const [viewStyle, setViewStyle] = useState(true);
  const [borderWidth, setBorderWidth] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(9 / 16);

  const scaleFirst = useRef(new Animated.Value(1.1)).current;
  const translateXFirst = useRef(new Animated.Value(0)).current;
  const translateYFirst = useRef(new Animated.Value(0)).current;
  const opacityFirst = useRef(new Animated.Value(1)).current;

  const scaleFirst2 = useRef(new Animated.Value(1.1)).current;
  const translateXFirst2 = useRef(new Animated.Value(0)).current;
  const translateYFirst2 = useRef(new Animated.Value(0)).current;
  const opacityFirst2 = useRef(new Animated.Value(0)).current;

  const scale = useRef(new Animated.Value(2)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const scale2 = useRef(new Animated.Value(1)).current;
  const translateX2 = useRef(new Animated.Value(0)).current;
  const translateY2 = useRef(new Animated.Value(0)).current;
  const opacity2 = useRef(new Animated.Value(0)).current;

  const scale3 = useRef(new Animated.Value(1)).current;
  const translateX3 = useRef(new Animated.Value(0)).current;
  const translateY3 = useRef(new Animated.Value(0)).current;
  const opacity3 = useRef(new Animated.Value(0)).current;

  const scale4 = useRef(new Animated.Value(1)).current;
  const translateX4 = useRef(new Animated.Value(0)).current;
  const translateY4 = useRef(new Animated.Value(0)).current;
  const opacity4 = useRef(new Animated.Value(0)).current;

  const scale5 = useRef(new Animated.Value(1)).current;
  const translateX5 = useRef(new Animated.Value(0)).current;
  const translateY5 = useRef(new Animated.Value(0)).current;
  const opacity5 = useRef(new Animated.Value(0)).current;

  const scale6 = useRef(new Animated.Value(1)).current;
  const translateX6 = useRef(new Animated.Value(0)).current;
  const translateY6 = useRef(new Animated.Value(0)).current;
  const opacity6 = useRef(new Animated.Value(0)).current;

  const scale7 = useRef(new Animated.Value(1)).current;
  const translateX7 = useRef(new Animated.Value(0)).current;
  const translateY7 = useRef(new Animated.Value(0)).current;
  const opacity7 = useRef(new Animated.Value(0)).current;

  const scaleLast = useRef(new Animated.Value(1.5)).current;
  const translateXLast = useRef(new Animated.Value(0)).current;
  const translateYLast = useRef(new Animated.Value(0)).current;
  const opacityLast = useRef(new Animated.Value(0)).current;

  const scaleLast2 = useRef(new Animated.Value(1)).current;
  const translateXLast2 = useRef(new Animated.Value(0)).current;
  const translateYLast2 = useRef(new Animated.Value(0)).current;
  const opacityLast2 = useRef(new Animated.Value(0)).current;

  const scaleLast3 = useRef(new Animated.Value(2)).current;
  const translateXLast3 = useRef(new Animated.Value(0)).current;
  const translateYLast3 = useRef(new Animated.Value(0)).current;
  const opacityLast3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRecording();
    Animated.timing(opacityFirst, {
      toValue: 0,
      delay: 600,
      easing: Easing.exp,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {});
    Animated.timing(opacityFirst2, {
      toValue: 1,
      delay: 1400,
      easing: Easing.exp,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacityFirst2, {
        toValue: 0,
        delay: 200,
        easing: Easing.exp,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {});
    });
    Animated.timing(translateXFirst2, {
      toValue: -10,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {});
    Animated.timing(translateYFirst2, {
      toValue: 4,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {});
    Animated.timing(translateY, {
      toValue: 5,
      delay: 500,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setBorderWidth(5);
    });
    Animated.timing(scale, {
      toValue: 1,
      easing: Easing.exp,
      delay: 1500,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.exp,
      delay: 2300,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 2000,
        delay: 1000,
        useNativeDriver: true,
      }).start(() => {});
      Animated.timing(opacity4, {
        toValue: 1,
        delay: 1000,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    });
    Animated.timing(opacity2, {
      toValue: 1,
      delay: 2300,
      easing: Easing.exp,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(scale4, {
      toValue: 2,
      delay: 4500,
      easing: Easing.exp,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacity4, {
        toValue: 0,
        delay: 2300,
        duration: 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacity7, {
        toValue: 1,
        delay: 2000,
        duration: 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(scale7, {
        toValue: 1.5,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(translateX7, {
          toValue: -50,
          duration: 4500,
          useNativeDriver: true,
        }).start();
      });
    });
    Animated.timing(translateY4, {
      toValue: 60,
      delay: 4500,
      easing: Easing.exp,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(scale2, {
      toValue: 1.5,
      delay: 1000,
      duration: 1500,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateX2, {
      toValue: 100,
      delay: 1000,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(translateX2, {
        toValue: -100,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {});
    });
    Animated.timing(opacity3, {
      toValue: 1,
      delay: 3500,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacity3, {
        toValue: 0,
        delay: 1000,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacity5, {
        toValue: 1,
        delay: 700,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(scale5, {
        toValue: 1.5,
        delay: 500,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(translateX5, {
          toValue: -100,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(opacity5, {
            toValue: 0,
            delay: 300,
            duration: 1000,
            useNativeDriver: true,
          }).start();
          Animated.timing(opacity6, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
          Animated.timing(scale6, {
            toValue: 1.3,
            duration: 2000,
            useNativeDriver: true,
          }).start(() => {
            Animated.timing(translateX6, {
              toValue: -60,
              duration: 2500,
              useNativeDriver: true,
            }).start(() => {
              Animated.timing(opacity6, {
                toValue: 0,
                delay: 300,
                duration: 1000,
                useNativeDriver: true,
              }).start();
              Animated.timing(opacity7, {
                toValue: 0,
                delay: 300,
                duration: 1000,
                useNativeDriver: true,
              }).start();
              Animated.timing(opacityLast, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
              }).start(() => {
                Animated.timing(opacityLast, {
                  toValue: 0,
                  delay: 2000,
                  duration: 1000,
                  useNativeDriver: true,
                }).start();
              });
              Animated.timing(translateXLast, {
                toValue: 100,
                duration: 2000,
                useNativeDriver: true,
              }).start(async () => {});
              Animated.timing(scaleLast, {
                toValue: 2,
                delay: 1800,
                duration: 2000,
                useNativeDriver: true,
              }).start(async () => {});
              Animated.timing(opacityLast2, {
                toValue: 1,
                delay: 2800,
                duration: 1000,
                useNativeDriver: true,
              }).start(() => {
                Animated.timing(opacityLast2, {
                  toValue: 0,
                  delay: 1000,
                  duration: 1000,
                  useNativeDriver: true,
                }).start();
                Animated.timing(opacityLast3, {
                  toValue: 1,
                  delay: 700,
                  duration: 1000,
                  useNativeDriver: true,
                }).start();
                Animated.timing(scaleLast3, {
                  toValue: 1,
                  delay: 1500,
                  duration: 1000,
                  easing: Easing.exp,
                  useNativeDriver: true,
                }).start(async () => {});
              });
              Animated.timing(scaleLast2, {
                toValue: 1.3,
                delay: 3600,
                duration: 2000,
                useNativeDriver: true,
              }).start();
            });
          });
        });
      });
      Animated.timing(translateY5, {
        toValue: 50,
        delay: 500,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {});
    });
    Animated.timing(scale3, {
      toValue: 1.5,
      delay: 1500,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateX3, {
      delay: 1500,
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(translateX3, {
        toValue: -100,
        delay: 1500,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  const startRecording = async () => {
    RecordScreen.startRecording({mic: false}).catch(error =>
      console.error(error),
    );

    setTimeout(async () => {
      console.log('Hi');
      const res = await RecordScreen.stopRecording().catch(error =>
        console.warn(error),
      );
      console.log('Hi2');
      if (res) {
        const url = res.result.outputURL;
        console.log('H3');
        __savePicture(url);
      }
    }, 20000);
  };

  const __savePicture = async (video: any) => {
    const file = new FormData();
    file.append('file', {
      uri: 'file://' + video,
      type: 'video/mp4',
      name: `test123.mp4`,
    });
    // await fetch('http://15.165.86.57:8000/upload/video', {
    //   body: file,
    //   method: 'POST',
    // })
    //   .then(response => {
    //     console.log(response);
    //     response.json();
    //   })
    //   .then(async responseJson => {
    //     const url = responseJson;
    //     console.log(url);
    //   })
    //   .catch(err => {
    //     console.log('Error');
    //     console.log(err);
    //   });
  };

  return (
    <Animated.View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          padding: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.50)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}>
          기아 더 K9 3.8 GDI
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          padding: 20,
          bottom: '28%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 50,
            textShadowColor: 'rgba(0, 0, 0, 0.50)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}>
          AWD 플래티넘 III
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          padding: 20,
          bottom: '34%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 50,
            textShadowColor: 'rgba(0, 0, 0, 0.50)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}>
          3,500 만원
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          padding: 20,
          bottom: '24%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,

            textAlign: 'center',
            marginTop: 50,
          }}>
          102,300km | 가솔린
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          padding: 20,
          bottom: '20%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,

            textAlign: 'center',
            marginTop: 50,
          }}>
          19년 03월 ( 19년형 )
        </Text>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          zIndex: 100,
          padding: 10,
          bottom: '14%',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 20,
          borderWidth: 1,
          borderColor: 'white',
          left: '5%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',

            textShadowColor: 'rgba(0, 0, 0, 0.50)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}>
          매물정보 더보기
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          aspectRatio: 9 / 16,
          overflow: 'hidden',
          justifyContent: 'center',
          alignContent: 'center',
          width: deviceWidth * 16,
        }}>
        <Animated.View
          style={{
            aspectRatio: 9 / 16,
            overflow: 'hidden',
            justifyContent: 'center',
            alignContent: 'center',
            width: deviceWidth * 16,
          }}>
          <Animated.Image
            source={{
              uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/5_9_front.jpeg',
            }}
            style={
              viewStyle
                ? {
                    aspectRatio: 9 / 16,
                    transform: [
                      {scale: scaleFirst},
                      {translateX: translateXFirst},
                      {translateY: translateYFirst},
                    ],
                    opacity: opacityFirst,
                    position: 'absolute',
                    width: deviceWidth * 16,
                  }
                : {
                    width: 0,
                    height: 0,
                  }
            }
          />
          <Animated.Image
            source={{
              uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/5_9_light.jpeg',
            }}
            style={
              viewStyle
                ? {
                    aspectRatio: 9 / 16,
                    transform: [
                      {scale: scaleFirst2},
                      {translateX: translateXFirst2},
                      {translateY: translateYFirst2},
                    ],
                    opacity: opacityFirst2,
                    position: 'absolute',
                    width: deviceWidth * 16,
                  }
                : {
                    width: 0,
                    height: 0,
                  }
            }
          />
          <View
            style={{
              flex: 1,
              overflow: 'hidden',
              borderBottomColor: 'black',
              borderBottomWidth: borderWidth,
            }}>
            <Animated.Image
              source={{
                uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/v1_10.jpeg',
              }}
              style={
                viewStyle
                  ? {
                      aspectRatio: aspectRatio,
                      transform: [
                        {scale: scale},
                        {translateX: translateX},
                        {translateY: translateY},
                      ],
                      opacity: opacity,
                      position: 'absolute',
                      width: deviceWidth * 16,
                      height: deviceWidth * 16,
                      bottom: 0,
                    }
                  : {
                      width: 0,
                      height: 0,
                    }
              }
            />
            <Animated.Image
              source={{
                uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/v_1.jpeg',
              }}
              style={
                viewStyle
                  ? {
                      aspectRatio: aspectRatio,
                      transform: [
                        {scale: scale4},
                        {translateX: translateX4},
                        {translateY: translateY4},
                      ],
                      opacity: opacity4,
                      position: 'absolute',
                      width: deviceWidth * 16,
                      height: deviceWidth * 16,
                      bottom: 0,
                    }
                  : {
                      width: 0,
                      height: 0,
                    }
              }
            />
            <Animated.Image
              source={{
                uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/v6.jpeg',
              }}
              style={
                viewStyle
                  ? {
                      aspectRatio: aspectRatio,
                      transform: [
                        {scale: scale7},
                        {translateX: translateX7},
                        {translateY: translateY7},
                      ],
                      opacity: opacity7,
                      position: 'absolute',
                      width: deviceWidth * 16,
                      height: deviceWidth * 16,
                      bottom: 0,
                    }
                  : {
                      width: 0,
                      height: 0,
                    }
              }
            />
          </View>
          <View
            style={{
              flex: 1,
              overflow: 'hidden',
              borderTopColor: 'black',
              borderTopWidth: borderWidth,
            }}>
            <Animated.Image
              source={{
                uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/v10_2.jpeg',
              }}
              style={
                viewStyle
                  ? {
                      aspectRatio: aspectRatio,
                      transform: [
                        {scale: scale2},
                        {translateX: translateX2},
                        {translateY: translateY2},
                      ],
                      opacity: opacity2,
                      position: 'absolute',
                      width: deviceWidth * 16,
                      height: deviceWidth * 16,
                      top: 0,
                    }
                  : {
                      width: 0,
                      height: 0,
                    }
              }
            />
            <Animated.Image
              source={{
                uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/v10_3.jpeg',
              }}
              style={
                viewStyle
                  ? {
                      aspectRatio: aspectRatio,
                      transform: [
                        {scale: scale3},
                        {translateX: translateX3},
                        {translateY: translateY3},
                      ],
                      opacity: opacity3,
                      position: 'absolute',
                      width: deviceWidth * 16,
                      height: deviceWidth * 16,
                      top: 0,
                    }
                  : {
                      width: 0,
                      height: 0,
                    }
              }
            />
            <Animated.Image
              source={{
                uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/v5.jpeg',
              }}
              style={
                viewStyle
                  ? {
                      aspectRatio: aspectRatio,
                      transform: [
                        {scale: scale5},
                        {translateX: translateX5},
                        {translateY: translateY5},
                      ],
                      opacity: opacity5,
                      position: 'absolute',
                      width: deviceWidth * 16,
                      height: deviceWidth * 16,
                      top: 0,
                    }
                  : {
                      width: 0,
                      height: 0,
                    }
              }
            />
            <Animated.Image
              source={{
                uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/v_back.jpeg',
              }}
              style={
                viewStyle
                  ? {
                      aspectRatio: aspectRatio,
                      transform: [
                        {scale: scale6},
                        {translateX: translateX6},
                        {translateY: translateY6},
                      ],
                      opacity: opacity6,
                      position: 'absolute',
                      width: deviceWidth * 16,
                      height: deviceWidth * 16,
                      top: 0,
                    }
                  : {
                      width: 0,
                      height: 0,
                    }
              }
            />
          </View>
          <Animated.Image
            source={{
              uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/last_1.jpeg',
            }}
            style={
              viewStyle
                ? {
                    aspectRatio: 9 / 16,
                    transform: [
                      {scale: scaleLast},
                      {translateX: translateXLast},
                      {translateY: translateYLast},
                    ],
                    opacity: opacityLast,
                    position: 'absolute',
                    width: deviceWidth * 16,
                  }
                : {
                    width: 0,
                    height: 0,
                  }
            }
          />
          <Animated.Image
            source={{
              uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/last2.jpeg',
            }}
            style={
              viewStyle
                ? {
                    aspectRatio: 9 / 16,
                    transform: [
                      {scale: scaleLast2},
                      {translateX: translateXLast2},
                      {translateY: translateYLast2},
                    ],
                    opacity: opacityLast2,
                    position: 'absolute',
                    width: deviceWidth * 16,
                  }
                : {
                    width: 0,
                    height: 0,
                  }
            }
          />
          <Animated.Image
            source={{
              uri: 'https://car-damage-api-production.s3.ap-northeast-2.amazonaws.com/5_9_back.jpeg',
            }}
            style={
              viewStyle
                ? {
                    aspectRatio: 9 / 16,
                    transform: [
                      {scale: scaleLast3},
                      {translateX: translateXLast3},
                      {translateY: translateYLast3},
                    ],
                    opacity: opacityLast3,
                    position: 'absolute',
                    width: deviceWidth * 16,
                  }
                : {
                    width: 0,
                    height: 0,
                  }
            }
          />
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          overflow: 'hidden',
          width: deviceWidth * 16,
          marginTop: 18,
          maxWidth: '85%',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            padding: 15,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            비대면 상담
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}

export default App;
