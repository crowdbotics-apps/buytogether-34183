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
      <View style={styles.View_51_134} />
      <View style={styles.View_51_135}>
        <View style={styles.View_51_136}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b52/dd11/42317d270bac99416add362dfd1d401c"
            }}
            style={styles.ImageBackground_51_137}
          />
        </View>
      </View>
      <View style={styles.View_51_140}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bbf/5312/5c00765d8524b6c316efb389f7040b6b"
          }}
          style={styles.ImageBackground_51_141}
        />
      </View>
      <View style={styles.View_51_147}>
        <View style={styles.View_51_148} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f7/1b05/040eceb4d4b0cf5f6b8dfb369c755d4c"
          }}
          style={styles.ImageBackground_51_149}
        />
        <View style={styles.View_55_19}>
          <View style={styles.View_55_20} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3764/058d/8d00050ae468e0e3d1babf3019c18fc5"
            }}
            style={styles.ImageBackground_55_21}
          />
        </View>
        <View style={styles.View_55_14}>
          <View style={styles.View_55_15} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df6/e5db/7c5970436538bca60386204702616347"
            }}
            style={styles.ImageBackground_55_16}
          />
        </View>
        <View style={styles.View_55_5}>
          <Text style={styles.Text_55_5}>Cake $6.68</Text>
        </View>
        <View style={styles.View_55_6}>
          <Text style={styles.Text_55_6}>Rolls $6.68</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93e7/7d42/dea68bcaad4c995895b3d6303708996b"
          }}
          style={styles.ImageBackground_51_329}
        />
        <View style={styles.View_51_152}>
          <View style={styles.View_51_153} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3764/058d/8d00050ae468e0e3d1babf3019c18fc5"
            }}
            style={styles.ImageBackground_51_154}
          />
        </View>
        <View style={styles.View_51_157}>
          <View style={styles.View_51_158} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e664/ad70/06c649c9dd4a4e9666c0c9f3dea9e44a"
            }}
            style={styles.ImageBackground_51_159}
          />
        </View>
        <View style={styles.View_51_162}>
          <Text style={styles.Text_51_162}>Tiramisu $5.68</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02e3/87e4/d38f110731be2337dce704eb9bdfdd5e"
          }}
          style={styles.ImageBackground_51_163}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0b/e0c9/6889d856c14f7bd24dbf8b42105eb8ac"
          }}
          style={styles.ImageBackground_51_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aa7/a391/bc81cf15a047bc362e396caef3891bd7"
          }}
          style={styles.ImageBackground_55_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0b/e0c9/6889d856c14f7bd24dbf8b42105eb8ac"
          }}
          style={styles.ImageBackground_55_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0b/e0c9/6889d856c14f7bd24dbf8b42105eb8ac"
          }}
          style={styles.ImageBackground_55_13}
        />
        <View style={styles.View_51_165}>
          <View style={styles.View_51_166} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3764/058d/8d00050ae468e0e3d1babf3019c18fc5"
            }}
            style={styles.ImageBackground_51_167}
          />
        </View>
        <View style={styles.View_51_169}>
          <View style={styles.View_51_170} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df6/e5db/7c5970436538bca60386204702616347"
            }}
            style={styles.ImageBackground_51_171}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f356/7827/afa72242c9a2d5ba95a05ccd5906f5f4"
          }}
          style={styles.ImageBackground_51_177}
        />
        <View style={styles.View_51_183}>
          <Text style={styles.Text_51_183}>Bread $7.68</Text>
        </View>
        <View style={styles.View_51_184}>
          <Text style={styles.Text_51_184}>Brulee $5.68</Text>
        </View>
        <View style={styles.View_51_185}>
          <View style={styles.View_51_186} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e273/8236/05042d254209006e6171f598ea97b854"
            }}
            style={styles.ImageBackground_51_187}
          />
        </View>
        <View style={styles.View_51_190}>
          <View style={styles.View_51_191} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c393/9fd4/b67f2160563dfbd26d89ba4be63a234d"
            }}
            style={styles.ImageBackground_51_192}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/277d/83e3/f3f31f2d7f058d5012df7a1a1d39a808"
          }}
          style={styles.ImageBackground_51_194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
          }}
          style={styles.ImageBackground_51_195}
        />
        <View style={styles.View_51_296}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
            }}
            style={styles.ImageBackground_51_297}
          />
          <View style={styles.View_51_298}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
              }}
              style={styles.ImageBackground_51_299}
            />
            <View style={styles.View_51_300}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_51_301}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_51_302}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_51_304}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
            }}
            style={styles.ImageBackground_51_305}
          />
          <View style={styles.View_51_306}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
              }}
              style={styles.ImageBackground_51_307}
            />
            <View style={styles.View_51_308}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_51_309}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_51_310}
              />
            </View>
          </View>
          <View style={styles.View_51_312}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
              }}
              style={styles.ImageBackground_51_313}
            />
            <View style={styles.View_51_314}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_51_315}
              />
              <View style={styles.View_51_316}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                  }}
                  style={styles.ImageBackground_51_317}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                  }}
                  style={styles.ImageBackground_51_318}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/753f/7b10/b6573f8c2ebdfd87a25372c0d5bfebd0"
          }}
          style={styles.ImageBackground_51_197}
        />
        <View style={styles.View_51_200} />
        <View style={styles.View_55_8}>
          <Text style={styles.Text_55_8}>1</Text>
        </View>
        <View style={styles.View_55_23}>
          <Text style={styles.Text_55_23}>Buy</Text>
        </View>
        <View style={styles.View_55_9}>
          <Text style={styles.Text_55_9}>1</Text>
        </View>
        <View style={styles.View_55_10}>
          <Text style={styles.Text_55_10}>1</Text>
        </View>
      </View>
      <View style={styles.View_51_201}>
        <View style={styles.View_51_202} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57e8/ac71/6fda4608258a8e9696100c8e1ce0fd44"
          }}
          style={styles.ImageBackground_51_203}
        />
        <View style={styles.View_51_204}>
          <View style={styles.View_51_205} />
          <View style={styles.View_51_206}>
            <Text style={styles.Text_51_206}>Shopping with: Alice</Text>
          </View>
          <View style={styles.View_51_207}>
            <Text style={styles.Text_51_207}>
              Buy together expires in 59:36
            </Text>
          </View>
          <View style={styles.View_51_294}>
            <Text style={styles.Text_51_294}>
              Ask your friend to buy together!
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e42/9171/e664c9f90c7d8c5c4ef6a32421cfb6ab"
            }}
            style={styles.ImageBackground_51_208}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/69da/898dc6510b4d51658682aea828efec16"
            }}
            style={styles.ImageBackground_51_209}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64fb/b147/09e916e6bbf70887dfead894ea81be85"
        }}
        style={styles.ImageBackground_51_211}
      />
      <View style={styles.View_51_212} />
      <View style={styles.View_51_213}>
        <Text style={styles.Text_51_213}>4</Text>
      </View>
      <View style={styles.View_55_24}>
        <Text style={styles.Text_55_24}>Bakery</Text>
      </View>
      <View style={styles.View_55_25}>
        <Text style={styles.Text_55_25}>vegetables</Text>
      </View>
      <View style={styles.View_55_26}>
        <Text style={styles.Text_55_26}>Fruits</Text>
      </View>
      <View style={styles.View_55_27}>
        <Text style={styles.Text_55_27}>Seafoods</Text>
      </View>
      <View style={styles.View_55_28}>
        <Text style={styles.Text_55_28}>Beef</Text>
      </View>
      <View style={styles.View_55_29}>
        <Text style={styles.Text_55_29}>Lamb</Text>
      </View>
      <View style={styles.View_55_31}>
        <Text style={styles.Text_55_31}>Personal care</Text>
      </View>
      <View style={styles.View_55_33}>
        <Text style={styles.Text_55_33}>Flowers</Text>
      </View>
      <View style={styles.View_55_32}>
        <Text style={styles.Text_55_32}>Snakes</Text>
      </View>
      <View style={styles.View_51_253}>
        <View style={styles.View_51_254} />
        <View style={styles.View_51_255}>
          <View style={styles.View_51_256}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a113/c508/f971655785b822aef3463814879901d6"
              }}
              style={styles.ImageBackground_51_257}
            />
            <View style={styles.View_51_262}>
              <Text style={styles.Text_51_262}>main</Text>
            </View>
          </View>
          <View style={styles.View_51_263}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6256/2108/eae990ee801dad30a165e05d1c4c2759"
              }}
              style={styles.ImageBackground_51_264}
            />
            <View style={styles.View_51_266}>
              <Text style={styles.Text_51_266}>message</Text>
            </View>
          </View>
          <View style={styles.View_51_267}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcf9/3df6/63c61b4c83eb1febc63c7503632a871c"
              }}
              style={styles.ImageBackground_51_268}
            />
            <View style={styles.View_51_272}>
              <Text style={styles.Text_51_272}>me</Text>
            </View>
          </View>
          <View style={styles.View_51_273}>
            <View style={styles.View_51_274}>
              <View style={styles.View_51_275}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62bf/29ff/48df227703cd8b252e5e93b8722d6b46"
                  }}
                  style={styles.ImageBackground_51_276}
                />
              </View>
            </View>
            <View style={styles.View_51_281}>
              <Text style={styles.Text_51_281}>order</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_51_282}>
        <View style={styles.View_51_283}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b52/dd11/42317d270bac99416add362dfd1d401c"
            }}
            style={styles.ImageBackground_51_284}
          />
        </View>
      </View>
      <View style={styles.View_51_287}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bbf/5312/5c00765d8524b6c316efb389f7040b6b"
          }}
          style={styles.ImageBackground_51_288}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de1c/e284/14e17a8b063b46794bf12d8a09455c67"
        }}
        style={styles.ImageBackground_51_328}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("169%") },
  View_51_134: {
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
  View_51_135: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_51_136: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_51_137: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_51_140: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_51_141: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_51_147: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%")
  },
  View_51_148: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  ImageBackground_51_149: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  View_55_19: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("74%")
  },
  View_55_20: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_55_21: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_55_14: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("74%")
  },
  View_55_15: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_55_16: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_55_5: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_55_5: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_6: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_55_6: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_329: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("91%")
  },
  View_51_152: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("95%")
  },
  View_51_153: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_51_154: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_51_157: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("95%")
  },
  View_51_158: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_51_159: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_51_162: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_51_162: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_163: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("69%")
  },
  ImageBackground_51_164: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("28%")
  },
  ImageBackground_55_11: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("52%")
  },
  ImageBackground_55_12: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("95%")
  },
  ImageBackground_55_13: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("74%")
  },
  View_51_165: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("28%")
  },
  View_51_166: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_51_167: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_51_169: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("28%")
  },
  View_51_170: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_51_171: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_51_177: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("47%")
  },
  View_51_183: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_51_183: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_184: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_51_184: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_185: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("6%")
  },
  View_51_186: {
    width: wp("5%"),
    minWidth: wp("5%"),
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
  ImageBackground_51_187: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_51_190: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("6%")
  },
  View_51_191: {
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
  ImageBackground_51_192: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_51_194: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("6%")
  },
  ImageBackground_51_195: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_51_296: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  ImageBackground_51_297: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%")
  },
  View_51_298: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_51_299: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_51_300: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_51_301: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_51_302: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_51_304: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  ImageBackground_51_305: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%")
  },
  View_51_306: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_51_307: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_51_308: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_51_309: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_51_310: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_51_312: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  ImageBackground_51_313: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%")
  },
  View_51_314: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_51_315: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_51_316: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_51_317: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_51_318: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_51_197: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("24%")
  },
  View_51_200: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_55_8: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_55_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_23: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_55_23: {
    color: "rgba(249, 23, 36, 1)",
    fontSize: 16,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_9: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_55_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_10: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_55_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_201: {
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
  View_51_202: {
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
  ImageBackground_51_203: {
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
  View_51_204: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%")
  },
  View_51_205: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  View_51_206: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_51_206: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_207: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_51_207: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_294: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_51_294: {
    color: "rgba(8, 91, 38, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_208: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  ImageBackground_51_209: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("11%")
  },
  ImageBackground_51_211: {
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
  View_51_212: {
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
  View_51_213: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_51_213: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_24: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_55_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_25: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_55_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_26: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_55_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_27: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_55_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_28: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("91%"),
    justifyContent: "flex-start"
  },
  Text_55_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_29: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_55_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_31: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("126%"),
    justifyContent: "flex-start"
  },
  Text_55_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_33: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("140%"),
    justifyContent: "flex-start"
  },
  Text_55_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_32: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("115%"),
    justifyContent: "flex-start"
  },
  Text_55_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_253: {
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
  View_51_254: {
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
  View_51_255: {
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
  View_51_256: {
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
  ImageBackground_51_257: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_51_262: {
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
  Text_51_262: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_263: {
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
  ImageBackground_51_264: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_51_266: {
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
  Text_51_266: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_267: {
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
  ImageBackground_51_268: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_51_272: {
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
  Text_51_272: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_273: {
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
  View_51_274: {
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
  View_51_275: {
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
  ImageBackground_51_276: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_51_281: {
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
  Text_51_281: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_282: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_51_283: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_51_284: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_51_287: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_51_288: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_51_328: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("42%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
