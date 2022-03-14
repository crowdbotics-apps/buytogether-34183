import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_7_72} />
      <View style={styles.View_7_73}>
        <View style={styles.View_7_74}>
          <Text style={styles.Text_7_74}>BuyTogether</Text>
        </View>
        <View style={styles.View_7_75}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6295/8a3c/696652403bdd41ac90d6caf0ce28e170"
            }}
            style={styles.ImageBackground_7_76}
          />
          <View style={styles.View_7_77}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31eb/1816/5ac29b210f5507a58914f274a8ef1e7f"
              }}
              style={styles.ImageBackground_7_78}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_7_84}>
        <View style={styles.View_7_85}>
          <View style={styles.View_7_86} />
          <View style={styles.View_7_88}>
            <Text style={styles.Text_7_88}>
              Already have an account? Sign in
            </Text>
          </View>
          <View style={styles.View_7_89}>
            <Text style={styles.Text_7_89}>Register a new account </Text>
          </View>
          <View style={styles.View_7_90}>
            <Text style={styles.Text_7_90}>Please log in to your account</Text>
          </View>
          <View style={styles.View_8_2}>
            <View style={styles.View_7_87} />
            <View style={styles.View_7_92}>
              <Text style={styles.Text_7_92}>Sign Up</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_7_93}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f1d/3e4a/48311d02cea5e011481df38499db295f"
            }}
            style={styles.ImageBackground_7_94}
          />
          <View style={styles.View_7_96}>
            <Text style={styles.Text_7_96}>Username</Text>
          </View>
        </View>
        <View style={styles.View_7_97}>
          <View style={styles.View_7_98} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efa9/07d3/446e7c2193049b0a37d8d71050d08756"
            }}
            style={styles.ImageBackground_7_99}
          />
          <View style={styles.View_7_102}>
            <Text style={styles.Text_7_102}>Enter Password Again</Text>
          </View>
        </View>
        <View style={styles.View_7_103}>
          <View style={styles.View_8_3}>
            <View style={styles.View_7_104} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efa9/07d3/446e7c2193049b0a37d8d71050d08756"
              }}
              style={styles.ImageBackground_7_105}
            />
            <View style={styles.View_7_108}>
              <Text style={styles.Text_7_108}>Password</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("169%") },
  View_7_72: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("169%"),
    minHeight: hp("169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(153, 222, 159, 1)"
  },
  View_7_73: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("19%")
  },
  View_7_74: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "center"
  },
  Text_7_74: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_7_75: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%")
  },
  ImageBackground_7_76: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_77: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_7_78: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_84: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("70%")
  },
  View_7_85: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_86: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  View_7_88: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_7_88: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_89: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_7_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_90: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_7_90: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_2: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("66%")
  },
  View_7_87: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(153, 222, 159, 1)"
  },
  View_7_92: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_7_92: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_93: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%")
  },
  ImageBackground_7_94: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_96: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_7_96: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_97: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("49%")
  },
  View_7_98: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_7_99: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_7_102: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_7_102: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_103: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("35%")
  },
  View_8_3: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_104: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_7_105: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_7_108: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_7_108: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
