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
      <View style={styles.View_5_90} />
      <View style={styles.View_7_36}>
        <View style={styles.View_5_135}>
          <Text style={styles.Text_5_135}>BuyTogether</Text>
        </View>
        <View style={styles.View_5_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6295/8a3c/696652403bdd41ac90d6caf0ce28e170"
            }}
            style={styles.ImageBackground_5_127}
          />
          <View style={styles.View_5_128}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31eb/1816/5ac29b210f5507a58914f274a8ef1e7f"
              }}
              style={styles.ImageBackground_5_129}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_7_37}>
        <View style={styles.View_7_35}>
          <View style={styles.View_5_92} />
          <View style={styles.View_7_2} />
          <View style={styles.View_5_93}>
            <Text style={styles.Text_5_93}>Don’t have an account? Sign Up</Text>
          </View>
          <View style={styles.View_5_107}>
            <Text style={styles.Text_5_107}>Welcome Back</Text>
          </View>
          <View style={styles.View_5_108}>
            <Text style={styles.Text_5_108}>Please log in to your account</Text>
          </View>
          <View style={styles.View_5_113}>
            <Text style={styles.Text_5_113}>Forgot Password?</Text>
          </View>
          <View style={styles.View_7_4}>
            <Text style={styles.Text_7_4}>Sign in</Text>
          </View>
        </View>
        <View style={styles.View_7_70}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f1d/3e4a/48311d02cea5e011481df38499db295f"
            }}
            style={styles.ImageBackground_5_94}
          />
          <View style={styles.View_5_137}>
            <Text style={styles.Text_5_137}>Username</Text>
          </View>
        </View>
        <View style={styles.View_7_69}>
          <View style={styles.View_5_99} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efa9/07d3/446e7c2193049b0a37d8d71050d08756"
            }}
            style={styles.ImageBackground_5_100}
          />
          <View style={styles.View_5_138}>
            <Text style={styles.Text_5_138}>Password</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("169%") },
  View_5_90: {
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
  View_7_36: {
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
  View_5_135: {
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
  Text_5_135: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_5_126: {
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
  ImageBackground_5_127: {
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
  View_5_128: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_5_129: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_37: {
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
  View_7_35: {
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
  View_5_92: {
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
  View_7_2: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("65%"),
    backgroundColor: "rgba(153, 222, 159, 1)"
  },
  View_5_93: {
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
  Text_5_93: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_107: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_5_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_108: {
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
  Text_5_108: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_113: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_5_113: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_4: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_7_4: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_70: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("25%")
  },
  ImageBackground_5_94: {
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
  View_5_137: {
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
  Text_5_137: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_69: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("43%")
  },
  View_5_99: {
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
  ImageBackground_5_100: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_5_138: {
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
  Text_5_138: {
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
