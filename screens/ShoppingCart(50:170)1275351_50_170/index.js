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
      <View style={styles.View_50_171} />
      <View style={styles.View_50_172}>
        <View style={styles.View_50_173}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b52/dd11/42317d270bac99416add362dfd1d401c"
            }}
            style={styles.ImageBackground_50_174}
          />
        </View>
      </View>
      <View style={styles.View_50_177}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bbf/5312/5c00765d8524b6c316efb389f7040b6b"
          }}
          style={styles.ImageBackground_50_178}
        />
      </View>
      <View style={styles.View_50_184}>
        <View style={styles.View_50_185} />
        <View style={styles.View_51_60} />
        <View style={styles.View_51_73}>
          <View style={styles.View_51_74} />
        </View>
        <View style={styles.View_51_68}>
          <View style={styles.View_51_69} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd38/b96c/33e27c5a9946d99d5381ed11a91cfbda"
            }}
            style={styles.ImageBackground_51_70}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d1/34ac/93fb3125e699f08178e5114e6747c51f"
          }}
          style={styles.ImageBackground_51_67}
        />
        <View style={styles.View_51_62}>
          <View style={styles.View_51_63} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99f2/ef1d/e904c4808344fa4f99efc4532307f1c4"
            }}
            style={styles.ImageBackground_51_64}
          />
        </View>
        <View style={styles.View_51_61}>
          <Text style={styles.Text_51_61}>Beef $19.68/lb</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6074/eab8/f805de409f3b304735c261d9896606cf"
          }}
          style={styles.ImageBackground_51_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d1/34ac/93fb3125e699f08178e5114e6747c51f"
          }}
          style={styles.ImageBackground_51_55}
        />
        <View style={styles.View_51_48}>
          <View style={styles.View_51_49} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd38/b96c/33e27c5a9946d99d5381ed11a91cfbda"
            }}
            style={styles.ImageBackground_51_50}
          />
        </View>
        <View style={styles.View_51_43}>
          <View style={styles.View_51_44} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99f2/ef1d/e904c4808344fa4f99efc4532307f1c4"
            }}
            style={styles.ImageBackground_51_45}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b421/38a8/c97966f6a4d497364c5f7ae87d8b93d0"
          }}
          style={styles.ImageBackground_51_41}
        />
        <View style={styles.View_51_38}>
          <View style={styles.View_51_39} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdbc/2877/953c32df1bdb9012856c6095b329c827"
          }}
          style={styles.ImageBackground_51_37}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b421/38a8/c97966f6a4d497364c5f7ae87d8b93d0"
          }}
          style={styles.ImageBackground_51_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b421/38a8/c97966f6a4d497364c5f7ae87d8b93d0"
          }}
          style={styles.ImageBackground_51_75}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22f6/a5bc/0af1e092d3ba30ce87c3982b227ced01"
          }}
          style={styles.ImageBackground_51_35}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c818/61a2/8e491b7b8dd6eaf7559bc458b8cdda0a"
          }}
          style={styles.ImageBackground_51_40}
        />
        <View style={styles.View_50_186}>
          <Text style={styles.Text_50_186}>Whole Foods</Text>
        </View>
        <View style={styles.View_50_187}>
          <Text style={styles.Text_50_187}>Rose $7.68</Text>
        </View>
        <View style={styles.View_51_42}>
          <Text style={styles.Text_51_42}>Milk $15.68</Text>
        </View>
        <View style={styles.View_50_189}>
          <View style={styles.View_50_190} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d701/85ae/428d8bb4e59242db210c059c3589aa4f"
            }}
            style={styles.ImageBackground_50_191}
          />
        </View>
        <View style={styles.View_51_5}>
          <View style={styles.View_51_6} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b2b/f2da/087f6b3cf18486b923124e4cb56b6b45"
            }}
            style={styles.ImageBackground_51_7}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d63/c404/beb591863cc0b6028c9542f6ece1073f"
          }}
          style={styles.ImageBackground_50_194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d71b/25ab/33910b25ec20025a17003016ac39dfa1"
          }}
          style={styles.ImageBackground_50_196}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8ac/282e/2e80cb4672cae9e666bdb9c73b48636c"
          }}
          style={styles.ImageBackground_51_3}
        />
        <View style={styles.View_51_12}>
          <View style={styles.View_51_13} />
        </View>
        <View style={styles.View_51_52} />
      </View>
      <View style={styles.View_50_255}>
        <View style={styles.View_50_256} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57e8/ac71/6fda4608258a8e9696100c8e1ce0fd44"
          }}
          style={styles.ImageBackground_50_257}
        />
        <View style={styles.View_50_281}>
          <View style={styles.View_50_282} />
          <View style={styles.View_51_2}>
            <Text style={styles.Text_51_2}>ON SALE!</Text>
          </View>
          <View style={styles.View_50_284}>
            <Text style={styles.Text_50_284}>promotion</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c96/513e/df3d63217d913b9b67ba0c2044aea185"
            }}
            style={styles.ImageBackground_50_285}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ee8/658f/99a431388499319244ce24bf5f54aaf2"
            }}
            style={styles.ImageBackground_50_293}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64fb/b147/09e916e6bbf70887dfead894ea81be85"
        }}
        style={styles.ImageBackground_50_274}
      />
      <View style={styles.View_50_296} />
      <View style={styles.View_51_72}>
        <Text style={styles.Text_51_72}>4</Text>
      </View>
      <View style={styles.View_51_76}>
        <View style={styles.View_51_77} />
        <View style={styles.View_51_78} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d8c/cde9/c8f8feb3f4f167cac0626d39061a37d8"
          }}
          style={styles.ImageBackground_51_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ee4/2169/4bcc5395a1fdddb747e99e6f482f9952"
          }}
          style={styles.ImageBackground_51_93}
        />
        <View style={styles.View_51_94}>
          <View style={styles.View_51_95} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd38/b96c/33e27c5a9946d99d5381ed11a91cfbda"
            }}
            style={styles.ImageBackground_51_96}
          />
        </View>
        <View style={styles.View_51_98}>
          <View style={styles.View_51_99} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2fc/ad57/98d149edac9cfbb1343d07233221da13"
            }}
            style={styles.ImageBackground_51_100}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e26a/7a01/4463b7b8410889c5bb89a5745b4fec95"
          }}
          style={styles.ImageBackground_51_103}
        />
        <View style={styles.View_51_104}>
          <View style={styles.View_51_105} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f10/7f4a/3a79bd5fb02381404120109e50c5b31a"
          }}
          style={styles.ImageBackground_51_106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e26a/7a01/4463b7b8410889c5bb89a5745b4fec95"
          }}
          style={styles.ImageBackground_51_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d8c/cde9/c8f8feb3f4f167cac0626d39061a37d8"
          }}
          style={styles.ImageBackground_51_109}
        />
        <View style={styles.View_51_111}>
          <Text style={styles.Text_51_111}>Walmart</Text>
        </View>
        <View style={styles.View_51_112}>
          <Text style={styles.Text_51_112}>Cake $20.68</Text>
        </View>
        <View style={styles.View_51_113}>
          <Text style={styles.Text_51_113}>Milk $15.68</Text>
        </View>
        <View style={styles.View_51_114}>
          <View style={styles.View_51_115} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4132/760a/dd12fa83b8920f6239dab35ef5a027cc"
            }}
            style={styles.ImageBackground_51_116}
          />
        </View>
        <View style={styles.View_51_119}>
          <View style={styles.View_51_120} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b2b/f2da/087f6b3cf18486b923124e4cb56b6b45"
            }}
            style={styles.ImageBackground_51_121}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8189/7c03/0005981f3405984870e6ae0d82eee01b"
          }}
          style={styles.ImageBackground_51_123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d71b/25ab/33910b25ec20025a17003016ac39dfa1"
          }}
          style={styles.ImageBackground_51_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd84/9314/cb12b870a237144dafbe622a2b8bf7c7"
          }}
          style={styles.ImageBackground_51_126}
        />
        <View style={styles.View_51_127}>
          <View style={styles.View_51_128} />
        </View>
        <View style={styles.View_51_129} />
      </View>
      <View style={styles.View_50_226}>
        <View style={styles.View_50_227} />
        <View style={styles.View_50_228}>
          <View style={styles.View_50_229}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a113/c508/f971655785b822aef3463814879901d6"
              }}
              style={styles.ImageBackground_50_230}
            />
            <View style={styles.View_50_235}>
              <Text style={styles.Text_50_235}>main</Text>
            </View>
          </View>
          <View style={styles.View_50_236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6256/2108/eae990ee801dad30a165e05d1c4c2759"
              }}
              style={styles.ImageBackground_50_237}
            />
            <View style={styles.View_50_239}>
              <Text style={styles.Text_50_239}>message</Text>
            </View>
          </View>
          <View style={styles.View_50_240}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcf9/3df6/63c61b4c83eb1febc63c7503632a871c"
              }}
              style={styles.ImageBackground_50_241}
            />
            <View style={styles.View_50_245}>
              <Text style={styles.Text_50_245}>me</Text>
            </View>
          </View>
          <View style={styles.View_50_246}>
            <View style={styles.View_50_247}>
              <View style={styles.View_50_248}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62bf/29ff/48df227703cd8b252e5e93b8722d6b46"
                  }}
                  style={styles.ImageBackground_50_249}
                />
              </View>
            </View>
            <View style={styles.View_50_254}>
              <Text style={styles.Text_50_254}>order</Text>
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
  View_50_171: {
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
  View_50_172: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_50_173: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_50_174: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_50_177: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_50_178: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_50_184: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("45%")
  },
  View_50_185: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_51_60: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_51_73: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("51%")
  },
  View_51_74: {
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
  View_51_68: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("51%")
  },
  View_51_69: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 173, 115, 1)",
    borderWidth: 1.5
  },
  ImageBackground_51_70: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_51_67: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("51%")
  },
  View_51_62: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("51%")
  },
  View_51_63: {
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
  ImageBackground_51_64: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_51_61: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_51_61: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_57: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("47%")
  },
  ImageBackground_51_55: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("35%")
  },
  View_51_48: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("35%")
  },
  View_51_49: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 173, 115, 1)",
    borderWidth: 1.5
  },
  ImageBackground_51_50: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_51_43: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("35%")
  },
  View_51_44: {
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
  ImageBackground_51_45: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_51_41: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_51_38: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("35%")
  },
  View_51_39: {
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
  ImageBackground_51_37: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("31%")
  },
  ImageBackground_51_36: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_51_75: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_51_35: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_51_40: {
    width: wp("15%"),
    height: hp("19%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_50_186: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_50_186: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_187: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_50_187: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_42: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_51_42: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_189: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("17%")
  },
  View_50_190: {
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
  ImageBackground_50_191: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_51_5: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("17%")
  },
  View_51_6: {
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
  ImageBackground_51_7: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_50_194: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("17%")
  },
  ImageBackground_50_196: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%")
  },
  ImageBackground_51_3: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("13%")
  },
  View_51_12: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%")
  },
  View_51_13: {
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
  View_51_52: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_50_255: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2%")
  },
  View_50_256: {
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
  ImageBackground_50_257: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%")
  },
  View_50_281: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("11%")
  },
  View_50_282: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_51_2: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_51_2: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_284: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_50_284: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_50_285: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%")
  },
  ImageBackground_50_293: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("11%")
  },
  ImageBackground_50_274: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8%")
  },
  View_50_296: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("15%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0
  },
  View_51_72: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_51_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_76: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("112%")
  },
  View_51_77: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_51_78: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  ImageBackground_51_132: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_51_93: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("32%")
  },
  View_51_94: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("32%")
  },
  View_51_95: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 173, 115, 1)",
    borderWidth: 1.5
  },
  ImageBackground_51_96: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_51_98: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("32%")
  },
  View_51_99: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 173, 115, 1)",
    borderWidth: 1.5
  },
  ImageBackground_51_100: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_51_103: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_51_104: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("32%")
  },
  View_51_105: {
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
  ImageBackground_51_106: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("28%")
  },
  ImageBackground_51_107: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_51_109: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_51_111: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_51_111: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_112: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_51_112: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_113: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_51_113: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_114: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("15%")
  },
  View_51_115: {
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
  ImageBackground_51_116: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_51_119: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("15%")
  },
  View_51_120: {
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
  ImageBackground_51_121: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_51_123: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("15%")
  },
  ImageBackground_51_124: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%")
  },
  ImageBackground_51_126: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("12%")
  },
  View_51_127: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%")
  },
  View_51_128: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 173, 115, 1)",
    borderWidth: 1.5
  },
  View_51_129: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_50_226: {
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
  View_50_227: {
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
  View_50_228: {
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
  View_50_229: {
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
  ImageBackground_50_230: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_50_235: {
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
  Text_50_235: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_236: {
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
  ImageBackground_50_237: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_50_239: {
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
  Text_50_239: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_240: {
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
  ImageBackground_50_241: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_50_245: {
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
  Text_50_245: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_246: {
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
  View_50_247: {
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
  View_50_248: {
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
  ImageBackground_50_249: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_50_254: {
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
  Text_50_254: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
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
