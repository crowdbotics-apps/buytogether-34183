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
      <View style={styles.View_8_6} />
      <View style={styles.View_8_47} />
      <View style={styles.View_8_48}>
        <View style={styles.View_8_49}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b52/dd11/42317d270bac99416add362dfd1d401c"
            }}
            style={styles.ImageBackground_8_50}
          />
        </View>
      </View>
      <View style={styles.View_8_53}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bbf/5312/5c00765d8524b6c316efb389f7040b6b"
          }}
          style={styles.ImageBackground_8_54}
        />
      </View>
      <View style={styles.View_11_25}>
        <View style={styles.View_11_8} />
        <View style={styles.View_11_9}>
          <Text style={styles.Text_11_9}>ALDI</Text>
        </View>
        <View style={styles.View_11_10}>
          <Text style={styles.Text_11_10}>buy with:</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff40/309b/cd667549b29da646539607c132e4c275"
          }}
          style={styles.ImageBackground_11_5}
        />
        <View style={styles.View_11_11}>
          <View style={styles.View_11_12} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76ec/8339/f3f068388fbb705022bd4eeae7d8fc6a"
            }}
            style={styles.ImageBackground_11_13}
          />
        </View>
        <View style={styles.View_11_17} />
        <View style={styles.View_11_18}>
          <Text style={styles.Text_11_18}>start from: $5</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ed5/b978/c561ad36718938ce5c6fd92bf93559f4"
          }}
          style={styles.ImageBackground_11_19}
        />
      </View>
      <View style={styles.View_11_26}>
        <View style={styles.View_11_27} />
        <View style={styles.View_11_28}>
          <Text style={styles.Text_11_28}>Walmart</Text>
        </View>
        <View style={styles.View_11_29}>
          <Text style={styles.Text_11_29}>buy with:</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61db/ee20/9fe70dfb6cbefca658865d3ee25271db"
          }}
          style={styles.ImageBackground_11_30}
        />
        <View style={styles.View_11_31}>
          <View style={styles.View_11_32} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76ec/8339/f3f068388fbb705022bd4eeae7d8fc6a"
            }}
            style={styles.ImageBackground_11_33}
          />
        </View>
        <View style={styles.View_11_36} />
        <View style={styles.View_11_37}>
          <Text style={styles.Text_11_37}>start from: $25</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d66/05a0/d8bc9398c47e1ffded638572ff20fab2"
          }}
          style={styles.ImageBackground_11_38}
        />
      </View>
      <View style={styles.View_11_40}>
        <View style={styles.View_11_41} />
        <View style={styles.View_11_42}>
          <Text style={styles.Text_11_42}>Seven-eleven</Text>
        </View>
        <View style={styles.View_85_580}>
          <Text style={styles.Text_85_580}>Seven-eleven</Text>
        </View>
        <View style={styles.View_11_43}>
          <Text style={styles.Text_11_43}>buy with:</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ad/3239/172149b8839340517a1b7aef133a0e89"
          }}
          style={styles.ImageBackground_11_44}
        />
        <View style={styles.View_11_45}>
          <View style={styles.View_11_46} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76ec/8339/f3f068388fbb705022bd4eeae7d8fc6a"
            }}
            style={styles.ImageBackground_11_47}
          />
        </View>
        <View style={styles.View_11_50} />
        <View style={styles.View_11_51}>
          <Text style={styles.Text_11_51}>start from: $10</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d66/05a0/d8bc9398c47e1ffded638572ff20fab2"
          }}
          style={styles.ImageBackground_11_52}
        />
      </View>
      <View style={styles.View_11_68}>
        <View style={styles.View_11_69} />
        <View style={styles.View_11_70}>
          <Text style={styles.Text_11_70}>ALDI</Text>
        </View>
        <View style={styles.View_11_71}>
          <Text style={styles.Text_11_71}>buy with:</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff40/309b/cd667549b29da646539607c132e4c275"
          }}
          style={styles.ImageBackground_11_72}
        />
        <View style={styles.View_11_73}>
          <View style={styles.View_11_74} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76ec/8339/f3f068388fbb705022bd4eeae7d8fc6a"
            }}
            style={styles.ImageBackground_11_75}
          />
        </View>
        <View style={styles.View_11_78} />
        <View style={styles.View_11_79}>
          <Text style={styles.Text_11_79}>start from: $5</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d66/05a0/d8bc9398c47e1ffded638572ff20fab2"
          }}
          style={styles.ImageBackground_11_80}
        />
      </View>
      <View style={styles.View_11_82}>
        <View style={styles.View_8_17} />
        <View style={styles.View_8_39}>
          <View style={styles.View_8_46}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a113/c508/f971655785b822aef3463814879901d6"
              }}
              style={styles.ImageBackground_8_22}
            />
            <View style={styles.View_8_37}>
              <Text style={styles.Text_8_37}>main</Text>
            </View>
          </View>
          <View style={styles.View_8_43}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6256/2108/eae990ee801dad30a165e05d1c4c2759"
              }}
              style={styles.ImageBackground_8_38}
            />
            <View style={styles.View_8_40}>
              <Text style={styles.Text_8_40}>message</Text>
            </View>
          </View>
          <View style={styles.View_8_45}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcf9/3df6/63c61b4c83eb1febc63c7503632a871c"
              }}
              style={styles.ImageBackground_8_21}
            />
            <View style={styles.View_8_42}>
              <Text style={styles.Text_8_42}>me</Text>
            </View>
          </View>
          <View style={styles.View_8_44}>
            <View style={styles.View_8_30}>
              <View style={styles.View_8_31}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62bf/29ff/48df227703cd8b252e5e93b8722d6b46"
                  }}
                  style={styles.ImageBackground_8_32}
                />
              </View>
            </View>
            <View style={styles.View_8_41}>
              <Text style={styles.Text_8_41}>order</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_84}>
        <View style={styles.View_11_85}>
          <View style={styles.View_11_101}>
            <View style={styles.View_11_86} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9195/847c/3dd28059b0682a980a198026ecbc6089"
              }}
              style={styles.ImageBackground_11_87}
            />
            <View style={styles.View_11_88}>
              <Text style={styles.Text_11_88}>Groceries</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_108}>
        <View style={styles.View_11_109}>
          <View style={styles.View_11_110}>
            <View style={styles.View_11_112} />
            <View style={styles.View_11_119}>
              <View style={styles.View_11_111} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75a/0f7c/93fbd0029b7078fc00c77c3ef7d75641"
                }}
                style={styles.ImageBackground_11_117}
              />
              <View style={styles.View_11_113}>
                <Text style={styles.Text_11_113}>Beverage</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_118}>
        <View style={styles.View_11_105} />
        <View style={styles.View_11_107}>
          <Text style={styles.Text_11_107}>Convenience</Text>
        </View>
        <View style={styles.View_11_114}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69ea/ce03/9f825714741a483a931c4f426d9bd27a"
            }}
            style={styles.ImageBackground_11_115}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a9/ce8f/1257eeee79d2425804778d9ecfdc8d7c"
            }}
            style={styles.ImageBackground_11_116}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("169%") },
  View_8_6: {
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
  View_8_47: {
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
  View_8_48: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_8_49: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_50: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_53: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_8_54: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_25: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_11_8: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_11_9: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_11_9: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_10: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_11_10: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_5: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("38%")
  },
  View_11_11: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("44%")
  },
  View_11_12: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 173, 115, 1)",
    borderWidth: 1.5
  },
  ImageBackground_11_13: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_17: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("52%"),
    backgroundColor: "rgba(76, 173, 115, 1)",
    opacity: 0.20000000298023224
  },
  View_11_18: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_11_18: {
    color: "rgba(76, 173, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_19: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_26: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("79%")
  },
  View_11_27: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_11_28: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_11_28: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_29: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_11_29: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_30: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_11_31: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("11%")
  },
  View_11_32: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 173, 115, 1)",
    borderWidth: 1.5
  },
  ImageBackground_11_33: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_36: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("18%"),
    backgroundColor: "rgba(76, 173, 115, 1)",
    opacity: 0.20000000298023224
  },
  View_11_37: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_11_37: {
    color: "rgba(76, 173, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_38: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("9%")
  },
  View_11_40: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("110%")
  },
  View_11_41: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_11_42: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_11_42: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_580: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_85_580: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_43: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_11_43: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_44: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_11_45: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("11%")
  },
  View_11_46: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 173, 115, 1)",
    borderWidth: 1.5
  },
  ImageBackground_11_47: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_50: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("18%"),
    backgroundColor: "rgba(76, 173, 115, 1)",
    opacity: 0.20000000298023224
  },
  View_11_51: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_11_51: {
    color: "rgba(76, 173, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_52: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("9%")
  },
  View_11_68: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("140%")
  },
  View_11_69: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_11_70: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_11_70: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_71: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_11_71: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_72: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_11_73: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("11%")
  },
  View_11_74: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 173, 115, 1)",
    borderWidth: 1.5
  },
  ImageBackground_11_75: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_78: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("18%"),
    backgroundColor: "rgba(76, 173, 115, 1)",
    opacity: 0.20000000298023224
  },
  View_11_79: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_11_79: {
    color: "rgba(76, 173, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_80: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("9%")
  },
  View_11_82: {
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
  View_8_17: {
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
  View_8_39: {
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
  View_8_46: {
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
  ImageBackground_8_22: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_8_37: {
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
  Text_8_37: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_43: {
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
  ImageBackground_8_38: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_8_40: {
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
  Text_8_40: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_45: {
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
  ImageBackground_8_21: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_8_42: {
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
  Text_8_42: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_44: {
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
  View_8_30: {
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
  View_8_31: {
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
  ImageBackground_8_32: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_41: {
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
  Text_8_41: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_84: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("20%")
  },
  View_11_85: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_101: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_86: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 177, 117, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(83, 177, 117, 1)",
    borderWidth: 1
  },
  ImageBackground_11_87: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_11_88: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_11_88: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_11_108: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("20%")
  },
  View_11_109: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_110: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_112: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_11_119: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_111: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 177, 117, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(83, 177, 117, 1)",
    borderWidth: 1
  },
  ImageBackground_11_117: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_11_113: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_11_113: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_11_118: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("20%")
  },
  View_11_105: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 177, 117, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(83, 177, 117, 1)",
    borderWidth: 1
  },
  View_11_107: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_11_107: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_11_114: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  ImageBackground_11_115: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  ImageBackground_11_116: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
