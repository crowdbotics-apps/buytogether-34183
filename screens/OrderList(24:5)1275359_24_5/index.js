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
      <View style={styles.View_24_6} />
      <View style={styles.View_24_7} />
      <View style={styles.View_24_35}>
        <View style={styles.View_24_36} />
        <View style={styles.View_24_37}>
          <Text style={styles.Text_24_37}>Walmart</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b67/111b/96f73346b53e724ddcbebbc9e11d6987"
          }}
          style={styles.ImageBackground_24_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1dd/d733/5f70f5e21945a8077f2d8eb1261c3319"
          }}
          style={styles.ImageBackground_24_47}
        />
        <View style={styles.View_24_135} />
        <View style={styles.View_24_136}>
          <Text style={styles.Text_24_136}>Completed</Text>
        </View>
        <View style={styles.View_24_139}>
          <Text style={styles.Text_24_139}>Order Time : Feb 22 2022</Text>
        </View>
        <View style={styles.View_24_140}>
          <Text style={styles.Text_24_140}>Total Price: $ 123.42</Text>
        </View>
        <View style={styles.View_34_3} />
        <View style={styles.View_24_134}>
          <Text style={styles.Text_24_134}>Buy Again</Text>
        </View>
      </View>
      <View style={styles.View_24_63}>
        <View style={styles.View_24_64} />
        <View style={styles.View_24_65}>
          <Text style={styles.Text_24_65}>ALDI</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9865/311c/3835aa2d41ac411d48dae99199e2f74e"
          }}
          style={styles.ImageBackground_24_67}
        />
        <View style={styles.View_24_73} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/def3/5f85/a4374fc4be877808f4c5e737cf02eaa7"
          }}
          style={styles.ImageBackground_24_75}
        />
        <View style={styles.View_24_130}>
          <Text style={styles.Text_24_130}>Buy Again</Text>
        </View>
        <View style={styles.View_34_4} />
        <View style={styles.View_24_132}>
          <Text style={styles.Text_24_132}>Ongoing</Text>
        </View>
        <View style={styles.View_24_137}>
          <Text style={styles.Text_24_137}>Order Time : Feb 27 2022</Text>
        </View>
        <View style={styles.View_24_138}>
          <Text style={styles.Text_24_138}>Total Price: $ 35.78</Text>
        </View>
      </View>
      <View style={styles.View_24_77}>
        <View style={styles.View_24_78} />
        <View style={styles.View_24_79}>
          <View style={styles.View_24_80}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9e0/9334/204d9e81dcd426b845cf3f440bd3438d"
              }}
              style={styles.ImageBackground_24_81}
            />
            <View style={styles.View_24_86}>
              <Text style={styles.Text_24_86}>main</Text>
            </View>
          </View>
          <View style={styles.View_24_87}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6256/2108/eae990ee801dad30a165e05d1c4c2759"
              }}
              style={styles.ImageBackground_24_88}
            />
            <View style={styles.View_24_90}>
              <Text style={styles.Text_24_90}>message</Text>
            </View>
          </View>
          <View style={styles.View_24_91}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcf9/3df6/63c61b4c83eb1febc63c7503632a871c"
              }}
              style={styles.ImageBackground_24_92}
            />
            <View style={styles.View_24_96}>
              <Text style={styles.Text_24_96}>me</Text>
            </View>
          </View>
          <View style={styles.View_24_97}>
            <View style={styles.View_24_98}>
              <View style={styles.View_24_99}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d923/5376/359d360b1b0930f9d90e6ea85f79f70e"
                  }}
                  style={styles.ImageBackground_24_100}
                />
              </View>
            </View>
            <View style={styles.View_24_105}>
              <Text style={styles.Text_24_105}>order</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9865/311c/3835aa2d41ac411d48dae99199e2f74e"
        }}
        style={styles.ImageBackground_24_142}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce0/36b3/e5ad4efa538539e0c03902c8a1d1077e"
        }}
        style={styles.ImageBackground_34_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64fb/b147/09e916e6bbf70887dfead894ea81be85"
        }}
        style={styles.ImageBackground_24_128}
      />
      <View style={styles.View_24_144}>
        <Text style={styles.Text_24_144}>ON SALE Promotion</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("169%") },
  View_24_6: {
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
  View_24_7: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 66,
    borderTopRightRadius: 66,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_24_35: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("102%")
  },
  View_24_36: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_24_37: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_24_37: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_24_39: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%")
  },
  ImageBackground_24_47: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%")
  },
  View_24_135: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("3%"),
    backgroundColor: "rgba(219, 239, 227, 1)"
  },
  View_24_136: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_24_136: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_139: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_24_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_140: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_24_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_3: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("35%"),
    backgroundColor: "rgba(76, 173, 115, 1)",
    opacity: 0.20000000298023224
  },
  View_24_134: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_24_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_63: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("43%")
  },
  View_24_64: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_24_65: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_24_65: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_24_67: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%")
  },
  View_24_73: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("43%"),
    backgroundColor: "rgba(76, 173, 115, 1)",
    opacity: 0.20000000298023224
  },
  ImageBackground_24_75: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%")
  },
  View_24_130: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_24_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_4: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("6%"),
    backgroundColor: "rgba(219, 239, 227, 1)"
  },
  View_24_132: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_24_132: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_137: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_24_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_138: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_24_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("153%")
  },
  View_24_78: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 66,
    borderBottomRightRadius: 66
  },
  View_24_79: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%")
  },
  View_24_80: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_24_81: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_24_86: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_24_86: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_87: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%")
  },
  ImageBackground_24_88: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_24_90: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_24_90: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_91: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%")
  },
  ImageBackground_24_92: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_24_96: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_24_96: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_97: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%")
  },
  View_24_98: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_24_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_24_100: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_24_105: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_24_105: {
    color: "rgba(76, 173, 115, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_24_142: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("15%")
  },
  ImageBackground_34_38: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%")
  },
  ImageBackground_24_128: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  View_24_144: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_24_144: {
    color: "rgba(120, 120, 99, 1)",
    fontSize: 38,
    fontWeight: "700",
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
