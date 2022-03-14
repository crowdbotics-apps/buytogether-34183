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
      <View style={styles.View_24_242} />
      <View style={styles.View_36_4}>
        <View style={styles.View_24_243} />
        <View style={styles.View_34_10}>
          <Text style={styles.Text_34_10}>ON SALE Promotion</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9865/311c/3835aa2d41ac411d48dae99199e2f74e"
        }}
        style={styles.ImageBackground_34_9}
      />
      <View style={styles.View_24_264}>
        <View style={styles.View_24_265} />
        <View style={styles.View_24_266}>
          <View style={styles.View_24_267}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9e0/9334/204d9e81dcd426b845cf3f440bd3438d"
              }}
              style={styles.ImageBackground_24_268}
            />
            <View style={styles.View_24_273}>
              <Text style={styles.Text_24_273}>main</Text>
            </View>
          </View>
          <View style={styles.View_24_274}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6256/2108/eae990ee801dad30a165e05d1c4c2759"
              }}
              style={styles.ImageBackground_24_275}
            />
            <View style={styles.View_24_277}>
              <Text style={styles.Text_24_277}>message</Text>
            </View>
          </View>
          <View style={styles.View_24_278}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d58/d54d/c223204bcc1bce725b3af8b1eff5f831"
              }}
              style={styles.ImageBackground_24_279}
            />
            <View style={styles.View_24_283}>
              <Text style={styles.Text_24_283}>me</Text>
            </View>
          </View>
          <View style={styles.View_24_284}>
            <View style={styles.View_24_285}>
              <View style={styles.View_24_286}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62bf/29ff/48df227703cd8b252e5e93b8722d6b46"
                  }}
                  style={styles.ImageBackground_24_287}
                />
              </View>
            </View>
            <View style={styles.View_24_292}>
              <Text style={styles.Text_24_292}>order</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_3}>
        <View style={styles.View_36_2} />
        <View style={styles.View_34_35}>
          <View style={styles.View_34_36} />
          <View style={styles.View_34_37}>
            <Text style={styles.Text_34_37}>Submit</Text>
          </View>
        </View>
        <View style={styles.View_34_11}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f1d/3e4a/48311d02cea5e011481df38499db295f"
            }}
            style={styles.ImageBackground_34_12}
          />
          <View style={styles.View_34_14}>
            <Text style={styles.Text_34_14}>State</Text>
          </View>
        </View>
        <View style={styles.View_34_15}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f1d/3e4a/48311d02cea5e011481df38499db295f"
            }}
            style={styles.ImageBackground_34_16}
          />
          <View style={styles.View_34_18}>
            <Text style={styles.Text_34_18}>City</Text>
          </View>
        </View>
        <View style={styles.View_34_23}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f1d/3e4a/48311d02cea5e011481df38499db295f"
            }}
            style={styles.ImageBackground_34_24}
          />
          <View style={styles.View_34_26}>
            <Text style={styles.Text_34_26}>Zipcode</Text>
          </View>
        </View>
        <View style={styles.View_34_27}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f1d/3e4a/48311d02cea5e011481df38499db295f"
            }}
            style={styles.ImageBackground_34_28}
          />
          <View style={styles.View_34_30}>
            <Text style={styles.Text_34_30}>Address 1</Text>
          </View>
        </View>
        <View style={styles.View_34_31}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f1d/3e4a/48311d02cea5e011481df38499db295f"
            }}
            style={styles.ImageBackground_34_32}
          />
          <View style={styles.View_34_34}>
            <Text style={styles.Text_34_34}>Address 2</Text>
          </View>
        </View>
        <View style={styles.View_24_244}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db1a/557a/3b4f7c079d336c460ef17c87a74ee708"
            }}
            style={styles.ImageBackground_24_248}
          />
          <View style={styles.View_24_303}>
            <Text style={styles.Text_24_303}>Address</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce0/36b3/e5ad4efa538539e0c03902c8a1d1077e"
        }}
        style={styles.ImageBackground_34_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c3e/3b64/e4ae510144f889c441ae574cd5fbf722"
        }}
        style={styles.ImageBackground_24_294}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("169%") },
  View_24_242: {
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
  View_36_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_24_243: {
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
  View_34_10: {
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
  Text_34_10: {
    color: "rgba(120, 120, 99, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_34_9: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("15%")
  },
  View_24_264: {
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
  View_24_265: {
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
  View_24_266: {
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
  View_24_267: {
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
  ImageBackground_24_268: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_24_273: {
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
  Text_24_273: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_274: {
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
  ImageBackground_24_275: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_24_277: {
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
  Text_24_277: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_278: {
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
  ImageBackground_24_279: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_24_283: {
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
  Text_24_283: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_284: {
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
  View_24_285: {
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
  View_24_286: {
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
  ImageBackground_24_287: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_24_292: {
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
  Text_24_292: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_3: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("41%")
  },
  View_36_2: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_34_35: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("96%")
  },
  View_34_36: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(94, 182, 112, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_34_37: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_37: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_11: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("19%")
  },
  ImageBackground_34_12: {
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
  View_34_14: {
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
  Text_34_14: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_15: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("35%")
  },
  ImageBackground_34_16: {
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
  View_34_18: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_34_18: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_23: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("52%")
  },
  ImageBackground_34_24: {
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
  View_34_26: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_34_26: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_27: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("68%")
  },
  ImageBackground_34_28: {
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
  View_34_30: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_34_30: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_31: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("85%")
  },
  ImageBackground_34_32: {
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
  View_34_34: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_34_34: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_244: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  ImageBackground_24_248: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_24_303: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_24_303: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_34_39: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  ImageBackground_24_294: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
