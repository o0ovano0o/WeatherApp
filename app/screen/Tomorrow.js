import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
export default function App() {
  const goToHome = () => {
  Actions.home()
}
  return (
    <View style={styles.container}>
        <View style={styles.iconRow}>
          <FontAwesomeIcon
            name="thermometer-2"
            style={styles.icon}
          ></FontAwesomeIcon>
          <Text style={styles.nhiệtDộ}>Nhiệt độ</Text>
        </View>

      <View style={styles.rect}></View>

      <View style={styles.icon4Row}>
        <EntypoIcon name="drop" style={styles.icon4}></EntypoIcon>
        <Text style={styles.loremIpsum12}>Lorem Ipsum2</Text>
      </View>

      <View style={styles.rect8Row}>
        <ScrollView horizontal={true}>
          <View style={styles.rect8}>
            <Text style={styles.loremIpsum2}>0 giờ</Text>
            <FeatherIcon
              name="cloud-lightning"
              style={styles.icon6}
            ></FeatherIcon>
            <View style={styles.loremIpsum3Row}>
              <Text style={styles.loremIpsum3}>20</Text>
              <Text style={styles.c9}>C</Text>
            </View>
          </View>

          <View style={styles.rect9}>
            <Text style={styles.loremIpsum4}>3 giờ</Text>
            <FeatherIcon
              name="cloud-lightning"
              style={styles.icon7}
            ></FeatherIcon>
            <View style={styles.loremIpsum5Row}>
              <Text style={styles.loremIpsum5}>20</Text>
              <Text style={styles.c10}>C</Text>
            </View>
          </View>

          <View style={styles.rect9}>
            <Text style={styles.loremIpsum4}>6 giờ</Text>
            <FeatherIcon
              name="cloud-lightning"
              style={styles.icon7}
            ></FeatherIcon>
            <View style={styles.loremIpsum5Row}>
              <Text style={styles.loremIpsum5}>20</Text>
              <Text style={styles.c10}>C</Text>
            </View>
          </View>

          <View style={styles.rect9}>
            <Text style={styles.loremIpsum4}>9 giờ</Text>
            <FeatherIcon
              name="cloud-lightning"
              style={styles.icon7}
            ></FeatherIcon>
            <View style={styles.loremIpsum5Row}>
              <Text style={styles.loremIpsum5}>20</Text>
              <Text style={styles.c10}>C</Text>
            </View>
          </View>

          <View style={styles.rect9}>
            <Text style={styles.loremIpsum4}>12 giờ</Text>
            <FeatherIcon
              name="cloud-lightning"
              style={styles.icon7}
            ></FeatherIcon>
            <View style={styles.loremIpsum5Row}>
              <Text style={styles.loremIpsum5}>20</Text>
              <Text style={styles.c10}>C</Text>
            </View>
          </View>

          <View style={styles.rect9}>
            <Text style={styles.loremIpsum4}>15 giờ</Text>
            <FeatherIcon
              name="cloud-lightning"
              style={styles.icon7}
            ></FeatherIcon>
            <View style={styles.loremIpsum5Row}>
              <Text style={styles.loremIpsum5}>20</Text>
              <Text style={styles.c10}>C</Text>
            </View>
          </View>

          <View style={styles.rect9}>
            <Text style={styles.loremIpsum4}>18 giờ</Text>
            <FeatherIcon
              name="cloud-lightning"
              style={styles.icon7}
            ></FeatherIcon>
            <View style={styles.loremIpsum5Row}>
              <Text style={styles.loremIpsum5}>20</Text>
              <Text style={styles.c10}>C</Text>
            </View>
          </View>

          <View style={styles.rect9}>
            <Text style={styles.loremIpsum4}>21 giờ</Text>
            <FeatherIcon
              name="cloud-lightning"
              style={styles.icon7}
            ></FeatherIcon>
            <View style={styles.loremIpsum5Row}>
              <Text style={styles.loremIpsum5}>20</Text>
              <Text style={styles.c10}>C</Text>
            </View>
          </View>
        </ScrollView>
      </View>




      <View style={styles.rect6}>
        <View style={styles.icon5Row}>
          <EntypoIcon name="vinyl" style={styles.icon5}></EntypoIcon>
          <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
        </View>
        <View style={styles.rect7}>
                <ScrollView horizontal={true}>
                    <View style={styles.rect20}>
                      <Text style={styles.loremIpsum20}>0 giờ</Text>
                      <Text style={styles.loremIpsum21}>402</Text>
                    </View>

                    <View style={styles.rect22}>
                      <Text style={styles.loremIpsum22}>3 giờ</Text>
                      <Text style={styles.loremIpsum23}>402</Text>
                    </View>

                    <View style={styles.rect22}>
                      <Text style={styles.loremIpsum22}>6 giờ</Text>
                      <Text style={styles.loremIpsum23}>402</Text>
                    </View>

                    <View style={styles.rect22}>
                      <Text style={styles.loremIpsum22}>9 giờ</Text>
                      <Text style={styles.loremIpsum23}>402</Text>
                    </View>

                    <View style={styles.rect22}>
                      <Text style={styles.loremIpsum22}>12 giờ</Text>
                      <Text style={styles.loremIpsum23}>402</Text>
                    </View>

                    <View style={styles.rect22}>
                      <Text style={styles.loremIpsum22}>15 giờ</Text>
                      <Text style={styles.loremIpsum23}>402</Text>
                    </View>

                    <View style={styles.rect22}>
                      <Text style={styles.loremIpsum22}>18 giờ</Text>
                      <Text style={styles.loremIpsum23}>402</Text>
                    </View>

                    <View style={styles.rect22}>
                      <Text style={styles.loremIpsum22}>21 giờ</Text>
                      <Text style={styles.loremIpsum23}>402</Text>
                    </View>

                </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon: {
    color: "rgba(17,16,16,1)",
    fontSize: 22
  },
  nhiệtDộ: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 7,
    marginTop: 3
  },
  iconRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 260
  },
  rect: {
    width: 360,
    height: 200,
    marginTop: 8,
    borderBottomWidth:1,
    borderBottomColor: "rgba(155,155,155,100)",
  },
  rect6: {
    width: 360,
    height: 180,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 20,
    borderTopWidth:1,
    borderTopColor: "rgba(155,155,155,100)",
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    height: 22,
    width: 22
  },
  loremIpsum: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 8,
    marginTop: 3
  },
  icon5Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 216
  },

  rect7: {
    width: 340,
    height: 120,
    marginTop: 8,
    marginLeft: 10
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 22
  },
  loremIpsum12: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 2,
    marginTop: 3
  },
  icon4Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 16,
    marginRight: 226,
  },

  rect8: {
    width: 60,
    height: 90,
    backgroundColor: "rgba(213,240,249,1)",
    borderRadius: 13
  },
  loremIpsum2: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 7,
    marginLeft: 13
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 9,
    marginLeft: 19
  },
  loremIpsum3: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700"
  },
  c9: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 6
  },
  loremIpsum3Row: {
    height: 15,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 13,
    marginRight: 17
  },


  rect9: {
    width: 60,
    height: 90,
    backgroundColor: "rgba(213,240,249,1)",
    borderRadius: 13,
    marginLeft: 10,
    marginTop: 1
  },
  loremIpsum4: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 7,
    marginLeft: 11
  },
  icon7: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 9,
    marginLeft: 20
  },
  loremIpsum5: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700"
  },
  c10: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 8
  },
  loremIpsum5Row: {
    height: 15,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 13,
    marginRight: 15
  },


  rect20: {
    width: 60,
    height: 70,
  },
  loremIpsum20: {
    color: "black",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 7,
    marginLeft: 13
  },
  loremIpsum21: {
    color: "black",
    fontSize: 16,
    fontFamily: "montserrat-700",
    marginTop: 10,
    marginLeft: 12
  },

  rect22: {
    width: 60,
    height: 70,
    marginLeft: 10,
    marginTop: 1
  },
  loremIpsum22: {
    color: "black",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 7,
    marginLeft: 11
  },
  loremIpsum23: {
    color: "black",
    fontSize: 16,
    fontFamily: "montserrat-700",
    marginTop: 10,
    marginLeft: 12
  },

  rect8Row: {
    height: 91,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 10,
    marginRight: 9
  }
});
