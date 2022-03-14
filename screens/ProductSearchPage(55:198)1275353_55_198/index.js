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
      <View style={styles.View_55_199} />
      <View style={styles.View_55_200}>
        <View style={styles.View_55_201}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b52/dd11/42317d270bac99416add362dfd1d401c"
            }}
            style={styles.ImageBackground_55_202}
          />
        </View>
      </View>
      <View style={styles.View_55_205}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bbf/5312/5c00765d8524b6c316efb389f7040b6b"
          }}
          style={styles.ImageBackground_55_206}
        />
      </View>
      <View style={styles.View_55_212}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c399/cea4/357a3ff9208b525272340da8326d9b5c"
          }}
          style={styles.ImageBackground_55_214}
        />
        <View style={styles.View_55_215}>
          <View style={styles.View_55_216} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f44/0403/e08ad1c26af0b48df625c14073484204"
            }}
            style={styles.ImageBackground_55_217}
          />
        </View>
        <View style={styles.View_55_219}>
          <View style={styles.View_55_220} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa3a/d1e4/dcb074ca1045d346b5bce05c231481f5"
            }}
            style={styles.ImageBackground_55_221}
          />
        </View>
        <View style={styles.View_55_224}>
          <Text style={styles.Text_55_224}>Cake $6.68</Text>
        </View>
        <View style={styles.View_55_225}>
          <Text style={styles.Text_55_225}>Rolls $6.68</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2537/4864/b181ceaeafacec7abd2547f0a6b39e05"
          }}
          style={styles.ImageBackground_55_226}
        />
        <View style={styles.View_55_227}>
          <View style={styles.View_55_228} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f44/0403/e08ad1c26af0b48df625c14073484204"
            }}
            style={styles.ImageBackground_55_229}
          />
        </View>
        <View style={styles.View_55_231}>
          <View style={styles.View_55_232} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b73/4c88/e6bef0feb98023323cea6e435eb9afc2"
            }}
            style={styles.ImageBackground_55_233}
          />
        </View>
        <View style={styles.View_55_236}>
          <Text style={styles.Text_55_236}>Tiramisu $5.68</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eac1/d277/8dedbfe1ff19f6171dd6dbc06cfddb24"
          }}
          style={styles.ImageBackground_55_237}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04d4/57a0/5cd32ecfe9bc182e77881df4914edbfc"
          }}
          style={styles.ImageBackground_55_238}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c43/2dd2/c1a827aaf77c69bf6d480c8f3db343a5"
          }}
          style={styles.ImageBackground_55_239}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04d4/57a0/5cd32ecfe9bc182e77881df4914edbfc"
          }}
          style={styles.ImageBackground_55_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04d4/57a0/5cd32ecfe9bc182e77881df4914edbfc"
          }}
          style={styles.ImageBackground_55_241}
        />
        <View style={styles.View_55_242}>
          <View style={styles.View_55_243} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f44/0403/e08ad1c26af0b48df625c14073484204"
            }}
            style={styles.ImageBackground_55_244}
          />
        </View>
        <View style={styles.View_55_246}>
          <View style={styles.View_55_247} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa3a/d1e4/dcb074ca1045d346b5bce05c231481f5"
            }}
            style={styles.ImageBackground_55_248}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f3d/ad4e/9f179afc935c06e8beab38613b57ef63"
          }}
          style={styles.ImageBackground_55_251}
        />
        <View style={styles.View_55_252}>
          <Text style={styles.Text_55_252}>Bread $7.68</Text>
        </View>
        <View style={styles.View_55_253}>
          <Text style={styles.Text_55_253}>Brulee $5.68</Text>
        </View>
        <View style={styles.View_55_254}>
          <View style={styles.View_55_255} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5b0/09a9/e00353324fc974e6c0d11ea357bb2fe5"
            }}
            style={styles.ImageBackground_55_256}
          />
        </View>
        <View style={styles.View_55_259}>
          <View style={styles.View_55_260} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ca/4472/5dc5b3f531edaaf99482fc9d0d4da26a"
            }}
            style={styles.ImageBackground_55_261}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9202/0049/7e52a38f2e726d3e994de2bde411bf3a"
          }}
          style={styles.ImageBackground_55_263}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00ac/4aa3/5691d03642c634d91998b6fb9dc6bb76"
          }}
          style={styles.ImageBackground_55_290}
        />
        <View style={styles.View_55_291} />
        <View style={styles.View_55_293}>
          <Text style={styles.Text_55_293}>Buy</Text>
        </View>
        <View style={styles.View_55_294}>
          <Text style={styles.Text_55_294}>1</Text>
        </View>
        <View style={styles.View_55_295}>
          <Text style={styles.Text_55_295}>1</Text>
        </View>
      </View>
      <View style={styles.View_55_292}>
        <Text style={styles.Text_55_292}>1</Text>
      </View>
      <View style={styles.View_55_296}>
        <View style={styles.View_55_297} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d18/398d/82471daeb407432acfcbc9ca6b6e1e13"
          }}
          style={styles.ImageBackground_55_298}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64fb/b147/09e916e6bbf70887dfead894ea81be85"
        }}
        style={styles.ImageBackground_55_307}
      />
      <View style={styles.View_55_309}>
        <Text style={styles.Text_55_309}>4</Text>
      </View>
      <View style={styles.View_55_319}>
        <View style={styles.View_55_320} />
        <View style={styles.View_55_321}>
          <View style={styles.View_55_322}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a113/c508/f971655785b822aef3463814879901d6"
              }}
              style={styles.ImageBackground_55_323}
            />
            <View style={styles.View_55_328}>
              <Text style={styles.Text_55_328}>main</Text>
            </View>
          </View>
          <View style={styles.View_55_329}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6256/2108/eae990ee801dad30a165e05d1c4c2759"
              }}
              style={styles.ImageBackground_55_330}
            />
            <View style={styles.View_55_332}>
              <Text style={styles.Text_55_332}>message</Text>
            </View>
          </View>
          <View style={styles.View_55_333}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcf9/3df6/63c61b4c83eb1febc63c7503632a871c"
              }}
              style={styles.ImageBackground_55_334}
            />
            <View style={styles.View_55_338}>
              <Text style={styles.Text_55_338}>me</Text>
            </View>
          </View>
          <View style={styles.View_55_339}>
            <View style={styles.View_55_340}>
              <View style={styles.View_55_341}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62bf/29ff/48df227703cd8b252e5e93b8722d6b46"
                  }}
                  style={styles.ImageBackground_55_342}
                />
              </View>
            </View>
            <View style={styles.View_55_347}>
              <Text style={styles.Text_55_347}>order</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de1c/e284/14e17a8b063b46794bf12d8a09455c67"
        }}
        style={styles.ImageBackground_55_360}
      />
      <View style={styles.View_55_361}>
        <View style={styles.View_55_362} />
      </View>
      <View style={styles.View_55_348}>
        <View style={styles.View_55_349}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b52/dd11/42317d270bac99416add362dfd1d401c"
            }}
            style={styles.ImageBackground_55_350}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("169%") },
  View_55_199: {
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
  View_55_200: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_55_201: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_55_202: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_55_205: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_55_206: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_55_212: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("136%"),
    minHeight: hp("136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  ImageBackground_55_214: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("128%"),
    minHeight: hp("128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_215: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("82%")
  },
  View_55_216: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_55_217: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_55_219: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("82%")
  },
  View_55_220: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_55_221: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_55_224: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_55_224: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_225: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_55_225: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_55_226: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("101%")
  },
  View_55_227: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("106%")
  },
  View_55_228: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_55_229: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_55_231: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("106%")
  },
  View_55_232: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_55_233: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_55_236: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("102%"),
    justifyContent: "flex-start"
  },
  Text_55_236: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_55_237: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("76%")
  },
  ImageBackground_55_238: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("32%")
  },
  ImageBackground_55_239: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("57%")
  },
  ImageBackground_55_240: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("106%")
  },
  ImageBackground_55_241: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("82%")
  },
  View_55_242: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("32%")
  },
  View_55_243: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_55_244: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_55_246: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("32%")
  },
  View_55_247: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_55_248: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_55_251: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("52%")
  },
  View_55_252: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_55_252: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_253: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_55_253: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_254: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("12%")
  },
  View_55_255: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_55_256: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_55_259: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("13%")
  },
  View_55_260: {
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
  ImageBackground_55_261: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_55_263: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("13%")
  },
  ImageBackground_55_290: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("26%")
  },
  View_55_291: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_55_293: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_55_293: {
    color: "rgba(249, 23, 36, 1)",
    fontSize: 16,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_294: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_55_294: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_295: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("106%"),
    justifyContent: "flex-start"
  },
  Text_55_295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_292: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("107%"),
    justifyContent: "flex-start"
  },
  Text_55_292: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_296: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%")
  },
  View_55_297: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27%"),
    minHeight: hp("27%"),
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
  ImageBackground_55_298: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  },
  ImageBackground_55_307: {
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
  View_55_309: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_55_309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_319: {
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
  View_55_320: {
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
  View_55_321: {
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
  View_55_322: {
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
  ImageBackground_55_323: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_55_328: {
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
  Text_55_328: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_329: {
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
  ImageBackground_55_330: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_55_332: {
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
  Text_55_332: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_333: {
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
  ImageBackground_55_334: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_55_338: {
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
  Text_55_338: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_339: {
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
  View_55_340: {
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
  View_55_341: {
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
  ImageBackground_55_342: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_55_347: {
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
  Text_55_347: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_55_360: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("32%")
  },
  View_55_361: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3%")
  },
  View_55_362: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_55_348: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_55_349: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_55_350: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
