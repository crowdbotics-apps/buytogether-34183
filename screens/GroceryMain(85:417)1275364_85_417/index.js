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
      <View style={styles.View_85_418} />
      <View style={styles.View_85_419}>
        <View style={styles.View_85_420}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b52/dd11/42317d270bac99416add362dfd1d401c"
            }}
            style={styles.ImageBackground_85_421}
          />
        </View>
      </View>
      <View style={styles.View_85_424}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bbf/5312/5c00765d8524b6c316efb389f7040b6b"
          }}
          style={styles.ImageBackground_85_425}
        />
      </View>
      <View style={styles.View_85_431}>
        <View style={styles.View_85_432} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f7/1b05/040eceb4d4b0cf5f6b8dfb369c755d4c"
          }}
          style={styles.ImageBackground_85_433}
        />
        <View style={styles.View_85_434}>
          <View style={styles.View_85_435} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3764/058d/8d00050ae468e0e3d1babf3019c18fc5"
            }}
            style={styles.ImageBackground_85_436}
          />
        </View>
        <View style={styles.View_85_438}>
          <View style={styles.View_85_439} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df6/e5db/7c5970436538bca60386204702616347"
            }}
            style={styles.ImageBackground_85_440}
          />
        </View>
        <View style={styles.View_85_443}>
          <Text style={styles.Text_85_443}>Cake $6.68</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/598c/95f9/db137bbdca968b53e11ec7f1a93a68e2"
          }}
          style={styles.ImageBackground_85_445}
        />
        <View style={styles.View_85_446}>
          <View style={styles.View_85_447} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3764/058d/8d00050ae468e0e3d1babf3019c18fc5"
            }}
            style={styles.ImageBackground_85_448}
          />
        </View>
        <View style={styles.View_85_450}>
          <View style={styles.View_85_451} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e664/ad70/06c649c9dd4a4e9666c0c9f3dea9e44a"
            }}
            style={styles.ImageBackground_85_452}
          />
        </View>
        <View style={styles.View_85_455}>
          <Text style={styles.Text_85_455}>Tiramisu $5.68</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8c7/ac82/9262114780a4920c5eb5646dbbab3470"
          }}
          style={styles.ImageBackground_85_456}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0b/e0c9/6889d856c14f7bd24dbf8b42105eb8ac"
          }}
          style={styles.ImageBackground_85_457}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0b/e0c9/6889d856c14f7bd24dbf8b42105eb8ac"
          }}
          style={styles.ImageBackground_85_459}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0b/e0c9/6889d856c14f7bd24dbf8b42105eb8ac"
          }}
          style={styles.ImageBackground_85_460}
        />
        <View style={styles.View_85_461}>
          <View style={styles.View_85_462} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3764/058d/8d00050ae468e0e3d1babf3019c18fc5"
            }}
            style={styles.ImageBackground_85_463}
          />
        </View>
        <View style={styles.View_85_465}>
          <View style={styles.View_85_466} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df6/e5db/7c5970436538bca60386204702616347"
            }}
            style={styles.ImageBackground_85_467}
          />
        </View>
        <View style={styles.View_85_471}>
          <Text style={styles.Text_85_471}>Bread $7.68</Text>
        </View>
        <View style={styles.View_85_472}>
          <Text style={styles.Text_85_472}>Brulee $5.68</Text>
        </View>
        <View style={styles.View_85_473}>
          <View style={styles.View_85_474} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e273/8236/05042d254209006e6171f598ea97b854"
            }}
            style={styles.ImageBackground_85_475}
          />
        </View>
        <View style={styles.View_85_478}>
          <View style={styles.View_85_479} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c393/9fd4/b67f2160563dfbd26d89ba4be63a234d"
            }}
            style={styles.ImageBackground_85_480}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/277d/83e3/f3f31f2d7f058d5012df7a1a1d39a808"
          }}
          style={styles.ImageBackground_85_482}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
          }}
          style={styles.ImageBackground_85_483}
        />
        <View style={styles.View_85_485}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
            }}
            style={styles.ImageBackground_85_486}
          />
          <View style={styles.View_85_487}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
              }}
              style={styles.ImageBackground_85_488}
            />
            <View style={styles.View_85_489}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_85_490}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_85_491}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_85_493}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
            }}
            style={styles.ImageBackground_85_494}
          />
          <View style={styles.View_85_495}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
              }}
              style={styles.ImageBackground_85_496}
            />
            <View style={styles.View_85_497}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_85_498}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_85_499}
              />
            </View>
          </View>
          <View style={styles.View_85_501}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
              }}
              style={styles.ImageBackground_85_502}
            />
            <View style={styles.View_85_503}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                }}
                style={styles.ImageBackground_85_504}
              />
              <View style={styles.View_85_505}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                  }}
                  style={styles.ImageBackground_85_506}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee8/9764/00d3d1b31e73d6981020fe53e0a22862"
                  }}
                  style={styles.ImageBackground_85_507}
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
          style={styles.ImageBackground_85_509}
        />
        <View style={styles.View_85_510} />
        <View style={styles.View_85_511}>
          <Text style={styles.Text_85_511}>1</Text>
        </View>
        <View style={styles.View_85_513}>
          <Text style={styles.Text_85_513}>11</Text>
        </View>
        <View style={styles.View_85_514}>
          <Text style={styles.Text_85_514}>100</Text>
        </View>
      </View>
      <View style={styles.View_85_515}>
        <View style={styles.View_85_516} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57e8/ac71/6fda4608258a8e9696100c8e1ce0fd44"
          }}
          style={styles.ImageBackground_85_517}
        />
        <View style={styles.View_85_518}>
          <View style={styles.View_85_519} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64fb/b147/09e916e6bbf70887dfead894ea81be85"
        }}
        style={styles.ImageBackground_85_526}
      />
      <View style={styles.View_85_527} />
      <View style={styles.View_85_528}>
        <Text style={styles.Text_85_528}>42</Text>
      </View>
      <View style={styles.View_85_529}>
        <Text style={styles.Text_85_529}>Bakery</Text>
      </View>
      <View style={styles.View_85_530}>
        <Text style={styles.Text_85_530}>vegetables</Text>
      </View>
      <View style={styles.View_85_531}>
        <Text style={styles.Text_85_531}>Fruits</Text>
      </View>
      <View style={styles.View_85_532}>
        <Text style={styles.Text_85_532}>Seafoods</Text>
      </View>
      <View style={styles.View_85_533}>
        <Text style={styles.Text_85_533}>Beef</Text>
      </View>
      <View style={styles.View_85_534}>
        <Text style={styles.Text_85_534}>Lamb</Text>
      </View>
      <View style={styles.View_85_535}>
        <Text style={styles.Text_85_535}>Personal care</Text>
      </View>
      <View style={styles.View_85_536}>
        <Text style={styles.Text_85_536}>Flowers</Text>
      </View>
      <View style={styles.View_85_537}>
        <Text style={styles.Text_85_537}>Snakes</Text>
      </View>
      <View style={styles.View_85_538}>
        <View style={styles.View_85_539} />
        <View style={styles.View_85_540}>
          <View style={styles.View_85_541}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a113/c508/f971655785b822aef3463814879901d6"
              }}
              style={styles.ImageBackground_85_542}
            />
            <View style={styles.View_85_547}>
              <Text style={styles.Text_85_547}>main</Text>
            </View>
          </View>
          <View style={styles.View_85_552}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcf9/3df6/63c61b4c83eb1febc63c7503632a871c"
              }}
              style={styles.ImageBackground_85_553}
            />
            <View style={styles.View_85_557}>
              <Text style={styles.Text_85_557}>me</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_85_567}>
        <View style={styles.View_85_568}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b52/dd11/42317d270bac99416add362dfd1d401c"
            }}
            style={styles.ImageBackground_85_569}
          />
        </View>
      </View>
      <View style={styles.View_85_572}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bbf/5312/5c00765d8524b6c316efb389f7040b6b"
          }}
          style={styles.ImageBackground_85_573}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de1c/e284/14e17a8b063b46794bf12d8a09455c67"
        }}
        style={styles.ImageBackground_85_579}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e42/9171/e664c9f90c7d8c5c4ef6a32421cfb6ab"
        }}
        style={styles.ImageBackground_85_523}
      />
      <View style={styles.View_85_581}>
        <Text style={styles.Text_85_581}>WHOLE FOODS</Text>
      </View>
      <View style={styles.View_85_582}>
        <View style={styles.View_85_583}>
          <View style={styles.View_85_584} />
          <View style={styles.View_85_585}>
            <Text style={styles.Text_85_585}>upload goods</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("169%") },
  View_85_418: {
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
  View_85_419: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_85_420: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_85_421: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_85_424: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_85_425: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_85_431: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%")
  },
  View_85_432: {
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
  ImageBackground_85_433: {
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
  View_85_434: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("52%")
  },
  View_85_435: {
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
  ImageBackground_85_436: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_85_438: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("52%")
  },
  View_85_439: {
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
  ImageBackground_85_440: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_85_443: {
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
  Text_85_443: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_85_445: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("67%")
  },
  View_85_446: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("72%")
  },
  View_85_447: {
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
  ImageBackground_85_448: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_85_450: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("72%")
  },
  View_85_451: {
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
  ImageBackground_85_452: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_85_455: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_85_455: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_85_456: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("47%")
  },
  ImageBackground_85_457: {
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
  ImageBackground_85_459: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("72%")
  },
  ImageBackground_85_460: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("52%")
  },
  View_85_461: {
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
  View_85_462: {
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
  ImageBackground_85_463: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_85_465: {
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
  View_85_466: {
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
  ImageBackground_85_467: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_85_471: {
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
  Text_85_471: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_472: {
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
  Text_85_472: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_473: {
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
  View_85_474: {
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
  ImageBackground_85_475: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_85_478: {
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
  View_85_479: {
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
  ImageBackground_85_480: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_85_482: {
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
  ImageBackground_85_483: {
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
  View_85_485: {
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
  ImageBackground_85_486: {
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
  View_85_487: {
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
  ImageBackground_85_488: {
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
  View_85_489: {
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
  ImageBackground_85_490: {
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
  ImageBackground_85_491: {
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
  View_85_493: {
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
  ImageBackground_85_494: {
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
  View_85_495: {
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
  ImageBackground_85_496: {
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
  View_85_497: {
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
  ImageBackground_85_498: {
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
  ImageBackground_85_499: {
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
  View_85_501: {
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
  ImageBackground_85_502: {
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
  View_85_503: {
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
  ImageBackground_85_504: {
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
  View_85_505: {
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
  ImageBackground_85_506: {
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
  ImageBackground_85_507: {
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
  ImageBackground_85_509: {
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
  View_85_510: {
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
  View_85_511: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_85_511: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_513: {
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
  Text_85_513: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_514: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_85_514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_515: {
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
  View_85_516: {
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
  ImageBackground_85_517: {
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
  View_85_518: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%")
  },
  View_85_519: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 2
  },
  ImageBackground_85_526: {
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
  View_85_527: {
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
  View_85_528: {
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
  Text_85_528: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_529: {
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
  Text_85_529: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_530: {
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
  Text_85_530: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_531: {
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
  Text_85_531: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_532: {
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
  Text_85_532: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_533: {
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
  Text_85_533: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_534: {
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
  Text_85_534: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_535: {
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
  Text_85_535: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_536: {
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
  Text_85_536: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_537: {
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
  Text_85_537: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_538: {
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
  View_85_539: {
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
  View_85_540: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("3%")
  },
  View_85_541: {
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
  ImageBackground_85_542: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_85_547: {
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
  Text_85_547: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_552: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%")
  },
  ImageBackground_85_553: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_85_557: {
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
  Text_85_557: {
    color: "rgba(105, 105, 116, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_567: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_85_568: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_85_569: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_85_572: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_85_573: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_85_579: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("42%")
  },
  ImageBackground_85_523: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("18%")
  },
  View_85_581: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_85_581: {
    color: "rgba(23, 23, 37, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_85_582: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("131%")
  },
  View_85_583: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_85_584: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(94, 182, 112, 1)",
    borderColor: "rgba(94, 182, 112, 1)",
    borderWidth: 2
  },
  View_85_585: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_85_585: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
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
