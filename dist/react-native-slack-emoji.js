(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-native'), require('react-native-vector-icons/Entypo'), require('react-native-vector-icons/Ionicons')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-native', 'react-native-vector-icons/Entypo', 'react-native-vector-icons/Ionicons'], factory) :
  (global = global || self, factory(global['slack-emoji'] = {}, global.React, global.PropTypes, global.reactNative, global.EntypoIcons, global.Ionicons));
}(this, function (exports, React, PropTypes, reactNative, EntypoIcons, Ionicons) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  EntypoIcons = EntypoIcons && EntypoIcons.hasOwnProperty('default') ? EntypoIcons['default'] : EntypoIcons;
  Ionicons = Ionicons && Ionicons.hasOwnProperty('default') ? Ionicons['default'] : Ionicons;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var _Dimensions$get = reactNative.Dimensions.get('window'),
      width = _Dimensions$get.width;

  var style = reactNative.StyleSheet.create({
    container: {
      flex: 1
    },
    wrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    picker: {
      marginBottom: 5,
      marginRight: 7,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    emojiPicker: {
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#E9E7E7',
      flexDirection: 'row',
      backgroundColor: '#E9E7E7'
    },
    emojiPickerSelected: {
      backgroundColor: '#D8E3EF',
      borderColor: '#499CF4'
    },
    emoji: {
      marginHorizontal: 10,
      fontSize: 14,
      fontWeight: '500',
      color: '#21243B'
    },
    pickerIcon: {
      marginHorizontal: 15,
      fontSize: 16,
      color: '#5f5f5f'
    },
    searchBarWrapper: {
      flex: 0.1,
      minHeight: 30,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10
    },
    searchIcon: {
      width: 20,
      height: 20,
      fontSize: 20,
      color: '#888888'
    },
    searchBarInput: {
      fontSize: 14,
      flex: 1
    },
    cancel: {
      paddingHorizontal: 5,
      fontSize: 16,
      color: '#5f5f5f'
    },
    categoryWrapper: {
      flex: 0.8,
      paddingHorizontal: 10
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
      color: '#b7b7b7'
    },
    emojiWrapper: {
      flexWrap: 'wrap'
    },
    searchRow: {
      marginLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      borderBottomWidth: 0.3,
      borderBottomColor: '#b7b7b7'
    },
    searchEmoji: {
      paddingRight: 10,
      fontSize: 14
    },
    searchEmojiText: {
      fontSize: 14,
      color: '#939393',
      fontWeight: '600',
      paddingRight: 25
    },
    emptySearchWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30
    },
    emptySearchText: {
      fontSize: 16,
      color: '#b7b7b7'
    },
    categoryHeader: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10
    },
    categoryHeaderText: {
      fontWeight: '600',
      fontSize: 14,
      color: '#939393'
    },
    categoryContent: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    categoryEmojiWrapper: {
      borderRadius: 10
    },
    categoryEmojiText: {
      marginHorizontal: 6,
      marginVertical: 5,
      fontSize: 30
    },
    categoryEmojiImage: {
      marginHorizontal: 6,
      marginVertical: 5,
      resizeMode: 'contain',
      height: 30,
      width: 30
    },
    bottomPicker: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderTopWidth: 0.05,
      borderTopColor: '#b7b7b7'
    },
    category: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: width / 10
    },
    categoryIcon: {
      fontSize: 30,
      color: '#888888'
    }
  });

  function SearchBar(_ref) {
    var onChangeText = _ref.onChangeText,
        placeholder = _ref.placeholder,
        placeholderTextColor = _ref.placeholderTextColor,
        cancel = _ref.cancel;
    return React.createElement(reactNative.View, {
      style: style.searchBarWrapper
    }, React.createElement(Ionicons, {
      name: "ios-search",
      style: style.searchIcon
    }), React.createElement(reactNative.TextInput, {
      style: style.searchBarInput,
      onChangeText: onChangeText,
      placeholder: placeholder,
      placeholderTextColor: placeholderTextColor
    }), React.createElement(reactNative.TouchableOpacity, {
      onPress: cancel
    }, React.createElement(reactNative.Text, {
      style: style.cancel
    }, "Cancel")));
  }

  SearchBar.defaultProps = {
    placeholder: 'Search',
    placeholderTextColor: '#b7b7b7'
  };
  SearchBar.propTypes = {
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    cancel: PropTypes.func.isRequired
  };

  /*eslint-disable*/
  var charFromUtf16 = function charFromUtf16(utf16) {
    return String.fromCodePoint.apply(String, utf16.split('-').map(function (u) {
      return "0x" + u;
    }));
  };

  function deepMerge(a, b) {
    var o = {};

    for (var key in a) {
      var originalValue = a[key];
      var value = originalValue;

      if (b.hasOwnProperty(key)) {
        value = b[key];
      }

      if (typeof value === 'object') {
        value = deepMerge(originalValue, value);
      }

      o[key] = value;
    }

    return o;
  }

  function SearchContent(_ref) {
    var onSelect = _ref.onSelect,
        emojis = _ref.emojis,
        data = _ref.data,
        i18n = _ref.i18n,
        searchText = _ref.searchText;

    if (!emojis.length) {
      return React.createElement(reactNative.View, {
        style: style.emptySearchWrapper
      }, React.createElement(reactNative.Text, {
        style: style.emptySearchText
      }, i18n.notFound), React.createElement(reactNative.Text, {
        style: [style.emptySearchText, {
          fontWeight: '600'
        }]
      }, "\"" + searchText + "\""));
    }

    return React.createElement(reactNative.ScrollView, {
      keyboardShouldPersistTaps: "handled",
      style: {
        flex: 0.8
      }
    }, emojis.map(function (filteredEmoji) {
      var emoji = charFromUtf16(data.emojis[filteredEmoji].unified);
      return React.createElement(reactNative.TouchableHighlight, {
        key: filteredEmoji,
        underlayColor: "blue",
        onPress: function onPress() {
          reactNative.Keyboard.dismiss();
          onSelect(emoji, filteredEmoji, data.emojis[filteredEmoji]);
        }
      }, React.createElement(reactNative.View, {
        style: style.searchRow
      }, React.createElement(reactNative.Text, {
        style: style.searchEmoji
      }, emoji), React.createElement(reactNative.Text, {
        style: style.searchEmojiText,
        numberOfLines: 1
      }, ":" + filteredEmoji + ":")));
    }));
  }

  SearchContent.propTypes = {
    onSelect: PropTypes.func.isRequired,
    emojis: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    i18n: PropTypes.object.isRequired,
    searchText: PropTypes.string.isRequired
  };

  var compressed = true;
  var categories = [
  	{
  		id: "people",
  		name: "Smileys & People",
  		emojis: [
  			"grinning",
  			"grin",
  			"joy",
  			"rolling_on_the_floor_laughing",
  			"smiley",
  			"smile",
  			"sweat_smile",
  			"laughing",
  			"wink",
  			"blush",
  			"yum",
  			"sunglasses",
  			"heart_eyes",
  			"kissing_heart",
  			"kissing",
  			"kissing_smiling_eyes",
  			"kissing_closed_eyes",
  			"relaxed",
  			"slightly_smiling_face",
  			"hugging_face",
  			"star-struck",
  			"thinking_face",
  			"face_with_raised_eyebrow",
  			"neutral_face",
  			"expressionless",
  			"no_mouth",
  			"face_with_rolling_eyes",
  			"smirk",
  			"persevere",
  			"disappointed_relieved",
  			"open_mouth",
  			"zipper_mouth_face",
  			"hushed",
  			"sleepy",
  			"tired_face",
  			"sleeping",
  			"relieved",
  			"stuck_out_tongue",
  			"stuck_out_tongue_winking_eye",
  			"stuck_out_tongue_closed_eyes",
  			"drooling_face",
  			"unamused",
  			"sweat",
  			"pensive",
  			"confused",
  			"upside_down_face",
  			"money_mouth_face",
  			"astonished",
  			"white_frowning_face",
  			"slightly_frowning_face",
  			"confounded",
  			"disappointed",
  			"worried",
  			"triumph",
  			"cry",
  			"sob",
  			"frowning",
  			"anguished",
  			"fearful",
  			"weary",
  			"exploding_head",
  			"grimacing",
  			"cold_sweat",
  			"scream",
  			"flushed",
  			"zany_face",
  			"dizzy_face",
  			"rage",
  			"angry",
  			"face_with_symbols_on_mouth",
  			"mask",
  			"face_with_thermometer",
  			"face_with_head_bandage",
  			"nauseated_face",
  			"face_vomiting",
  			"sneezing_face",
  			"innocent",
  			"face_with_cowboy_hat",
  			"clown_face",
  			"lying_face",
  			"shushing_face",
  			"face_with_hand_over_mouth",
  			"face_with_monocle",
  			"nerd_face",
  			"smiling_imp",
  			"imp",
  			"japanese_ogre",
  			"japanese_goblin",
  			"skull",
  			"skull_and_crossbones",
  			"ghost",
  			"alien",
  			"space_invader",
  			"robot_face",
  			"hankey",
  			"smiley_cat",
  			"smile_cat",
  			"joy_cat",
  			"heart_eyes_cat",
  			"smirk_cat",
  			"kissing_cat",
  			"scream_cat",
  			"crying_cat_face",
  			"pouting_cat",
  			"see_no_evil",
  			"hear_no_evil",
  			"speak_no_evil",
  			"baby",
  			"child",
  			"boy",
  			"girl",
  			"adult",
  			"man",
  			"woman",
  			"older_adult",
  			"older_man",
  			"older_woman",
  			"male-doctor",
  			"female-doctor",
  			"male-student",
  			"female-student",
  			"male-teacher",
  			"female-teacher",
  			"male-judge",
  			"female-judge",
  			"male-farmer",
  			"female-farmer",
  			"male-cook",
  			"female-cook",
  			"male-mechanic",
  			"female-mechanic",
  			"male-factory-worker",
  			"female-factory-worker",
  			"male-office-worker",
  			"female-office-worker",
  			"male-scientist",
  			"female-scientist",
  			"male-technologist",
  			"female-technologist",
  			"male-singer",
  			"female-singer",
  			"male-artist",
  			"female-artist",
  			"male-pilot",
  			"female-pilot",
  			"male-astronaut",
  			"female-astronaut",
  			"male-firefighter",
  			"female-firefighter",
  			"cop",
  			"male-police-officer",
  			"female-police-officer",
  			"sleuth_or_spy",
  			"male-detective",
  			"female-detective",
  			"guardsman",
  			"male-guard",
  			"female-guard",
  			"construction_worker",
  			"male-construction-worker",
  			"female-construction-worker",
  			"prince",
  			"princess",
  			"man_with_turban",
  			"man-wearing-turban",
  			"woman-wearing-turban",
  			"man_with_gua_pi_mao",
  			"person_with_headscarf",
  			"bearded_person",
  			"person_with_blond_hair",
  			"blond-haired-man",
  			"blond-haired-woman",
  			"man_in_tuxedo",
  			"bride_with_veil",
  			"pregnant_woman",
  			"breast-feeding",
  			"angel",
  			"santa",
  			"mrs_claus",
  			"mage",
  			"female_mage",
  			"male_mage",
  			"fairy",
  			"female_fairy",
  			"male_fairy",
  			"vampire",
  			"female_vampire",
  			"male_vampire",
  			"merperson",
  			"mermaid",
  			"merman",
  			"elf",
  			"female_elf",
  			"male_elf",
  			"genie",
  			"female_genie",
  			"male_genie",
  			"zombie",
  			"female_zombie",
  			"male_zombie",
  			"person_frowning",
  			"man-frowning",
  			"woman-frowning",
  			"person_with_pouting_face",
  			"man-pouting",
  			"woman-pouting",
  			"no_good",
  			"man-gesturing-no",
  			"woman-gesturing-no",
  			"ok_woman",
  			"man-gesturing-ok",
  			"woman-gesturing-ok",
  			"information_desk_person",
  			"man-tipping-hand",
  			"woman-tipping-hand",
  			"raising_hand",
  			"man-raising-hand",
  			"woman-raising-hand",
  			"bow",
  			"man-bowing",
  			"woman-bowing",
  			"face_palm",
  			"man-facepalming",
  			"woman-facepalming",
  			"shrug",
  			"man-shrugging",
  			"woman-shrugging",
  			"massage",
  			"man-getting-massage",
  			"woman-getting-massage",
  			"haircut",
  			"man-getting-haircut",
  			"woman-getting-haircut",
  			"walking",
  			"man-walking",
  			"woman-walking",
  			"runner",
  			"man-running",
  			"woman-running",
  			"dancer",
  			"man_dancing",
  			"dancers",
  			"man-with-bunny-ears-partying",
  			"woman-with-bunny-ears-partying",
  			"person_in_steamy_room",
  			"woman_in_steamy_room",
  			"man_in_steamy_room",
  			"person_climbing",
  			"woman_climbing",
  			"man_climbing",
  			"person_in_lotus_position",
  			"woman_in_lotus_position",
  			"man_in_lotus_position",
  			"bath",
  			"sleeping_accommodation",
  			"man_in_business_suit_levitating",
  			"speaking_head_in_silhouette",
  			"bust_in_silhouette",
  			"busts_in_silhouette",
  			"fencer",
  			"horse_racing",
  			"skier",
  			"snowboarder",
  			"golfer",
  			"man-golfing",
  			"woman-golfing",
  			"surfer",
  			"man-surfing",
  			"woman-surfing",
  			"rowboat",
  			"man-rowing-boat",
  			"woman-rowing-boat",
  			"swimmer",
  			"man-swimming",
  			"woman-swimming",
  			"person_with_ball",
  			"man-bouncing-ball",
  			"woman-bouncing-ball",
  			"weight_lifter",
  			"man-lifting-weights",
  			"woman-lifting-weights",
  			"bicyclist",
  			"man-biking",
  			"woman-biking",
  			"mountain_bicyclist",
  			"man-mountain-biking",
  			"woman-mountain-biking",
  			"racing_car",
  			"racing_motorcycle",
  			"person_doing_cartwheel",
  			"man-cartwheeling",
  			"woman-cartwheeling",
  			"wrestlers",
  			"man-wrestling",
  			"woman-wrestling",
  			"water_polo",
  			"man-playing-water-polo",
  			"woman-playing-water-polo",
  			"handball",
  			"man-playing-handball",
  			"woman-playing-handball",
  			"juggling",
  			"man-juggling",
  			"woman-juggling",
  			"couple",
  			"two_men_holding_hands",
  			"two_women_holding_hands",
  			"couplekiss",
  			"woman-kiss-man",
  			"man-kiss-man",
  			"woman-kiss-woman",
  			"couple_with_heart",
  			"woman-heart-man",
  			"man-heart-man",
  			"woman-heart-woman",
  			"family",
  			"man-woman-boy",
  			"man-woman-girl",
  			"man-woman-girl-boy",
  			"man-woman-boy-boy",
  			"man-woman-girl-girl",
  			"man-man-boy",
  			"man-man-girl",
  			"man-man-girl-boy",
  			"man-man-boy-boy",
  			"man-man-girl-girl",
  			"woman-woman-boy",
  			"woman-woman-girl",
  			"woman-woman-girl-boy",
  			"woman-woman-boy-boy",
  			"woman-woman-girl-girl",
  			"man-boy",
  			"man-boy-boy",
  			"man-girl",
  			"man-girl-boy",
  			"man-girl-girl",
  			"woman-boy",
  			"woman-boy-boy",
  			"woman-girl",
  			"woman-girl-boy",
  			"woman-girl-girl",
  			"selfie",
  			"muscle",
  			"point_left",
  			"point_right",
  			"point_up",
  			"point_up_2",
  			"middle_finger",
  			"point_down",
  			"v",
  			"crossed_fingers",
  			"spock-hand",
  			"the_horns",
  			"call_me_hand",
  			"raised_hand_with_fingers_splayed",
  			"hand",
  			"ok_hand",
  			"+1",
  			"-1",
  			"fist",
  			"facepunch",
  			"left-facing_fist",
  			"right-facing_fist",
  			"raised_back_of_hand",
  			"wave",
  			"i_love_you_hand_sign",
  			"writing_hand",
  			"clap",
  			"open_hands",
  			"raised_hands",
  			"palms_up_together",
  			"pray",
  			"handshake",
  			"nail_care",
  			"ear",
  			"nose",
  			"footprints",
  			"eyes",
  			"eye",
  			"eye-in-speech-bubble",
  			"brain",
  			"tongue",
  			"lips",
  			"kiss",
  			"cupid",
  			"heart",
  			"heartbeat",
  			"broken_heart",
  			"two_hearts",
  			"sparkling_heart",
  			"heartpulse",
  			"blue_heart",
  			"green_heart",
  			"yellow_heart",
  			"orange_heart",
  			"purple_heart",
  			"black_heart",
  			"gift_heart",
  			"revolving_hearts",
  			"heart_decoration",
  			"heavy_heart_exclamation_mark_ornament",
  			"love_letter",
  			"zzz",
  			"anger",
  			"bomb",
  			"boom",
  			"sweat_drops",
  			"dash",
  			"dizzy",
  			"speech_balloon",
  			"left_speech_bubble",
  			"right_anger_bubble",
  			"thought_balloon",
  			"hole",
  			"eyeglasses",
  			"dark_sunglasses",
  			"necktie",
  			"shirt",
  			"jeans",
  			"scarf",
  			"gloves",
  			"coat",
  			"socks",
  			"dress",
  			"kimono",
  			"bikini",
  			"womans_clothes",
  			"purse",
  			"handbag",
  			"pouch",
  			"shopping_bags",
  			"school_satchel",
  			"mans_shoe",
  			"athletic_shoe",
  			"high_heel",
  			"sandal",
  			"boot",
  			"crown",
  			"womans_hat",
  			"tophat",
  			"mortar_board",
  			"billed_cap",
  			"helmet_with_white_cross",
  			"prayer_beads",
  			"lipstick",
  			"ring",
  			"gem"
  		]
  	},
  	{
  		id: "nature",
  		name: "Animals & Nature",
  		emojis: [
  			"monkey_face",
  			"monkey",
  			"gorilla",
  			"dog",
  			"dog2",
  			"poodle",
  			"wolf",
  			"fox_face",
  			"cat",
  			"cat2",
  			"lion_face",
  			"tiger",
  			"tiger2",
  			"leopard",
  			"horse",
  			"racehorse",
  			"unicorn_face",
  			"zebra_face",
  			"deer",
  			"cow",
  			"ox",
  			"water_buffalo",
  			"cow2",
  			"pig",
  			"pig2",
  			"boar",
  			"pig_nose",
  			"ram",
  			"sheep",
  			"goat",
  			"dromedary_camel",
  			"camel",
  			"giraffe_face",
  			"elephant",
  			"rhinoceros",
  			"mouse",
  			"mouse2",
  			"rat",
  			"hamster",
  			"rabbit",
  			"rabbit2",
  			"chipmunk",
  			"hedgehog",
  			"bat",
  			"bear",
  			"koala",
  			"panda_face",
  			"feet",
  			"turkey",
  			"chicken",
  			"rooster",
  			"hatching_chick",
  			"baby_chick",
  			"hatched_chick",
  			"bird",
  			"penguin",
  			"dove_of_peace",
  			"eagle",
  			"duck",
  			"owl",
  			"frog",
  			"crocodile",
  			"turtle",
  			"lizard",
  			"snake",
  			"dragon_face",
  			"dragon",
  			"sauropod",
  			"t-rex",
  			"whale",
  			"whale2",
  			"dolphin",
  			"fish",
  			"tropical_fish",
  			"blowfish",
  			"shark",
  			"octopus",
  			"shell",
  			"crab",
  			"shrimp",
  			"squid",
  			"snail",
  			"butterfly",
  			"bug",
  			"ant",
  			"bee",
  			"beetle",
  			"cricket",
  			"spider",
  			"spider_web",
  			"scorpion",
  			"bouquet",
  			"cherry_blossom",
  			"white_flower",
  			"rosette",
  			"rose",
  			"wilted_flower",
  			"hibiscus",
  			"sunflower",
  			"blossom",
  			"tulip",
  			"seedling",
  			"evergreen_tree",
  			"deciduous_tree",
  			"palm_tree",
  			"cactus",
  			"ear_of_rice",
  			"herb",
  			"shamrock",
  			"four_leaf_clover",
  			"maple_leaf",
  			"fallen_leaf",
  			"leaves"
  		]
  	},
  	{
  		id: "foods",
  		name: "Food & Drink",
  		emojis: [
  			"grapes",
  			"melon",
  			"watermelon",
  			"tangerine",
  			"lemon",
  			"banana",
  			"pineapple",
  			"apple",
  			"green_apple",
  			"pear",
  			"peach",
  			"cherries",
  			"strawberry",
  			"kiwifruit",
  			"tomato",
  			"coconut",
  			"avocado",
  			"eggplant",
  			"potato",
  			"carrot",
  			"corn",
  			"hot_pepper",
  			"cucumber",
  			"broccoli",
  			"mushroom",
  			"peanuts",
  			"chestnut",
  			"bread",
  			"croissant",
  			"baguette_bread",
  			"pretzel",
  			"pancakes",
  			"cheese_wedge",
  			"meat_on_bone",
  			"poultry_leg",
  			"cut_of_meat",
  			"bacon",
  			"hamburger",
  			"fries",
  			"pizza",
  			"hotdog",
  			"sandwich",
  			"taco",
  			"burrito",
  			"stuffed_flatbread",
  			"egg",
  			"fried_egg",
  			"shallow_pan_of_food",
  			"stew",
  			"bowl_with_spoon",
  			"green_salad",
  			"popcorn",
  			"canned_food",
  			"bento",
  			"rice_cracker",
  			"rice_ball",
  			"rice",
  			"curry",
  			"ramen",
  			"spaghetti",
  			"sweet_potato",
  			"oden",
  			"sushi",
  			"fried_shrimp",
  			"fish_cake",
  			"dango",
  			"dumpling",
  			"fortune_cookie",
  			"takeout_box",
  			"icecream",
  			"shaved_ice",
  			"ice_cream",
  			"doughnut",
  			"cookie",
  			"birthday",
  			"cake",
  			"pie",
  			"chocolate_bar",
  			"candy",
  			"lollipop",
  			"custard",
  			"honey_pot",
  			"baby_bottle",
  			"glass_of_milk",
  			"coffee",
  			"tea",
  			"sake",
  			"champagne",
  			"wine_glass",
  			"cocktail",
  			"tropical_drink",
  			"beer",
  			"beers",
  			"clinking_glasses",
  			"tumbler_glass",
  			"cup_with_straw",
  			"chopsticks",
  			"knife_fork_plate",
  			"fork_and_knife",
  			"spoon",
  			"hocho",
  			"amphora"
  		]
  	},
  	{
  		id: "activity",
  		name: "Activities",
  		emojis: [
  			"jack_o_lantern",
  			"christmas_tree",
  			"fireworks",
  			"sparkler",
  			"sparkles",
  			"balloon",
  			"tada",
  			"confetti_ball",
  			"tanabata_tree",
  			"bamboo",
  			"dolls",
  			"flags",
  			"wind_chime",
  			"rice_scene",
  			"ribbon",
  			"gift",
  			"reminder_ribbon",
  			"admission_tickets",
  			"ticket",
  			"medal",
  			"trophy",
  			"sports_medal",
  			"first_place_medal",
  			"second_place_medal",
  			"third_place_medal",
  			"soccer",
  			"baseball",
  			"basketball",
  			"volleyball",
  			"football",
  			"rugby_football",
  			"tennis",
  			"8ball",
  			"bowling",
  			"cricket_bat_and_ball",
  			"field_hockey_stick_and_ball",
  			"ice_hockey_stick_and_puck",
  			"table_tennis_paddle_and_ball",
  			"badminton_racquet_and_shuttlecock",
  			"boxing_glove",
  			"martial_arts_uniform",
  			"goal_net",
  			"dart",
  			"golf",
  			"ice_skate",
  			"fishing_pole_and_fish",
  			"running_shirt_with_sash",
  			"ski",
  			"sled",
  			"curling_stone",
  			"video_game",
  			"joystick",
  			"game_die",
  			"spades",
  			"hearts",
  			"diamonds",
  			"clubs",
  			"black_joker",
  			"mahjong",
  			"flower_playing_cards"
  		]
  	},
  	{
  		id: "places",
  		name: "Travel & Places",
  		emojis: [
  			"earth_africa",
  			"earth_americas",
  			"earth_asia",
  			"globe_with_meridians",
  			"world_map",
  			"japan",
  			"snow_capped_mountain",
  			"mountain",
  			"volcano",
  			"mount_fuji",
  			"camping",
  			"beach_with_umbrella",
  			"desert",
  			"desert_island",
  			"national_park",
  			"stadium",
  			"classical_building",
  			"building_construction",
  			"house_buildings",
  			"cityscape",
  			"derelict_house_building",
  			"house",
  			"house_with_garden",
  			"office",
  			"post_office",
  			"european_post_office",
  			"hospital",
  			"bank",
  			"hotel",
  			"love_hotel",
  			"convenience_store",
  			"school",
  			"department_store",
  			"factory",
  			"japanese_castle",
  			"european_castle",
  			"wedding",
  			"tokyo_tower",
  			"statue_of_liberty",
  			"church",
  			"mosque",
  			"synagogue",
  			"shinto_shrine",
  			"kaaba",
  			"fountain",
  			"tent",
  			"foggy",
  			"night_with_stars",
  			"sunrise_over_mountains",
  			"sunrise",
  			"city_sunset",
  			"city_sunrise",
  			"bridge_at_night",
  			"hotsprings",
  			"milky_way",
  			"carousel_horse",
  			"ferris_wheel",
  			"roller_coaster",
  			"barber",
  			"circus_tent",
  			"performing_arts",
  			"frame_with_picture",
  			"art",
  			"slot_machine",
  			"steam_locomotive",
  			"railway_car",
  			"bullettrain_side",
  			"bullettrain_front",
  			"train2",
  			"metro",
  			"light_rail",
  			"station",
  			"tram",
  			"monorail",
  			"mountain_railway",
  			"train",
  			"bus",
  			"oncoming_bus",
  			"trolleybus",
  			"minibus",
  			"ambulance",
  			"fire_engine",
  			"police_car",
  			"oncoming_police_car",
  			"taxi",
  			"oncoming_taxi",
  			"car",
  			"oncoming_automobile",
  			"blue_car",
  			"truck",
  			"articulated_lorry",
  			"tractor",
  			"bike",
  			"scooter",
  			"motor_scooter",
  			"busstop",
  			"motorway",
  			"railway_track",
  			"fuelpump",
  			"rotating_light",
  			"traffic_light",
  			"vertical_traffic_light",
  			"construction",
  			"octagonal_sign",
  			"anchor",
  			"boat",
  			"canoe",
  			"speedboat",
  			"passenger_ship",
  			"ferry",
  			"motor_boat",
  			"ship",
  			"airplane",
  			"small_airplane",
  			"airplane_departure",
  			"airplane_arriving",
  			"seat",
  			"helicopter",
  			"suspension_railway",
  			"mountain_cableway",
  			"aerial_tramway",
  			"satellite",
  			"rocket",
  			"flying_saucer",
  			"bellhop_bell",
  			"door",
  			"bed",
  			"couch_and_lamp",
  			"toilet",
  			"shower",
  			"bathtub",
  			"hourglass",
  			"hourglass_flowing_sand",
  			"watch",
  			"alarm_clock",
  			"stopwatch",
  			"timer_clock",
  			"mantelpiece_clock",
  			"clock12",
  			"clock1230",
  			"clock1",
  			"clock130",
  			"clock2",
  			"clock230",
  			"clock3",
  			"clock330",
  			"clock4",
  			"clock430",
  			"clock5",
  			"clock530",
  			"clock6",
  			"clock630",
  			"clock7",
  			"clock730",
  			"clock8",
  			"clock830",
  			"clock9",
  			"clock930",
  			"clock10",
  			"clock1030",
  			"clock11",
  			"clock1130",
  			"new_moon",
  			"waxing_crescent_moon",
  			"first_quarter_moon",
  			"moon",
  			"full_moon",
  			"waning_gibbous_moon",
  			"last_quarter_moon",
  			"waning_crescent_moon",
  			"crescent_moon",
  			"new_moon_with_face",
  			"first_quarter_moon_with_face",
  			"last_quarter_moon_with_face",
  			"thermometer",
  			"sunny",
  			"full_moon_with_face",
  			"sun_with_face",
  			"star",
  			"star2",
  			"stars",
  			"cloud",
  			"partly_sunny",
  			"thunder_cloud_and_rain",
  			"mostly_sunny",
  			"barely_sunny",
  			"partly_sunny_rain",
  			"rain_cloud",
  			"snow_cloud",
  			"lightning",
  			"tornado",
  			"fog",
  			"wind_blowing_face",
  			"cyclone",
  			"rainbow",
  			"closed_umbrella",
  			"umbrella",
  			"umbrella_with_rain_drops",
  			"umbrella_on_ground",
  			"zap",
  			"snowflake",
  			"snowman",
  			"snowman_without_snow",
  			"comet",
  			"fire",
  			"droplet",
  			"ocean"
  		]
  	},
  	{
  		id: "objects",
  		name: "Objects",
  		emojis: [
  			"mute",
  			"speaker",
  			"sound",
  			"loud_sound",
  			"loudspeaker",
  			"mega",
  			"postal_horn",
  			"bell",
  			"no_bell",
  			"musical_score",
  			"musical_note",
  			"notes",
  			"studio_microphone",
  			"level_slider",
  			"control_knobs",
  			"microphone",
  			"headphones",
  			"radio",
  			"saxophone",
  			"guitar",
  			"musical_keyboard",
  			"trumpet",
  			"violin",
  			"drum_with_drumsticks",
  			"iphone",
  			"calling",
  			"phone",
  			"telephone_receiver",
  			"pager",
  			"fax",
  			"battery",
  			"electric_plug",
  			"computer",
  			"desktop_computer",
  			"printer",
  			"keyboard",
  			"three_button_mouse",
  			"trackball",
  			"minidisc",
  			"floppy_disk",
  			"cd",
  			"dvd",
  			"movie_camera",
  			"film_frames",
  			"film_projector",
  			"clapper",
  			"tv",
  			"camera",
  			"camera_with_flash",
  			"video_camera",
  			"vhs",
  			"mag",
  			"mag_right",
  			"microscope",
  			"telescope",
  			"satellite_antenna",
  			"candle",
  			"bulb",
  			"flashlight",
  			"izakaya_lantern",
  			"notebook_with_decorative_cover",
  			"closed_book",
  			"book",
  			"green_book",
  			"blue_book",
  			"orange_book",
  			"books",
  			"notebook",
  			"ledger",
  			"page_with_curl",
  			"scroll",
  			"page_facing_up",
  			"newspaper",
  			"rolled_up_newspaper",
  			"bookmark_tabs",
  			"bookmark",
  			"label",
  			"moneybag",
  			"yen",
  			"dollar",
  			"euro",
  			"pound",
  			"money_with_wings",
  			"credit_card",
  			"chart",
  			"currency_exchange",
  			"heavy_dollar_sign",
  			"email",
  			"e-mail",
  			"incoming_envelope",
  			"envelope_with_arrow",
  			"outbox_tray",
  			"inbox_tray",
  			"package",
  			"mailbox",
  			"mailbox_closed",
  			"mailbox_with_mail",
  			"mailbox_with_no_mail",
  			"postbox",
  			"ballot_box_with_ballot",
  			"pencil2",
  			"black_nib",
  			"lower_left_fountain_pen",
  			"lower_left_ballpoint_pen",
  			"lower_left_paintbrush",
  			"lower_left_crayon",
  			"memo",
  			"briefcase",
  			"file_folder",
  			"open_file_folder",
  			"card_index_dividers",
  			"date",
  			"calendar",
  			"spiral_note_pad",
  			"spiral_calendar_pad",
  			"card_index",
  			"chart_with_upwards_trend",
  			"chart_with_downwards_trend",
  			"bar_chart",
  			"clipboard",
  			"pushpin",
  			"round_pushpin",
  			"paperclip",
  			"linked_paperclips",
  			"straight_ruler",
  			"triangular_ruler",
  			"scissors",
  			"card_file_box",
  			"file_cabinet",
  			"wastebasket",
  			"lock",
  			"unlock",
  			"lock_with_ink_pen",
  			"closed_lock_with_key",
  			"key",
  			"old_key",
  			"hammer",
  			"pick",
  			"hammer_and_pick",
  			"hammer_and_wrench",
  			"dagger_knife",
  			"crossed_swords",
  			"gun",
  			"bow_and_arrow",
  			"shield",
  			"wrench",
  			"nut_and_bolt",
  			"gear",
  			"compression",
  			"alembic",
  			"scales",
  			"link",
  			"chains",
  			"syringe",
  			"pill",
  			"smoking",
  			"coffin",
  			"funeral_urn",
  			"moyai",
  			"oil_drum",
  			"crystal_ball",
  			"shopping_trolley"
  		]
  	},
  	{
  		id: "symbols",
  		name: "Symbols",
  		emojis: [
  			"atm",
  			"put_litter_in_its_place",
  			"potable_water",
  			"wheelchair",
  			"mens",
  			"womens",
  			"restroom",
  			"baby_symbol",
  			"wc",
  			"passport_control",
  			"customs",
  			"baggage_claim",
  			"left_luggage",
  			"warning",
  			"children_crossing",
  			"no_entry",
  			"no_entry_sign",
  			"no_bicycles",
  			"no_smoking",
  			"do_not_litter",
  			"non-potable_water",
  			"no_pedestrians",
  			"no_mobile_phones",
  			"underage",
  			"radioactive_sign",
  			"biohazard_sign",
  			"arrow_up",
  			"arrow_upper_right",
  			"arrow_right",
  			"arrow_lower_right",
  			"arrow_down",
  			"arrow_lower_left",
  			"arrow_left",
  			"arrow_upper_left",
  			"arrow_up_down",
  			"left_right_arrow",
  			"leftwards_arrow_with_hook",
  			"arrow_right_hook",
  			"arrow_heading_up",
  			"arrow_heading_down",
  			"arrows_clockwise",
  			"arrows_counterclockwise",
  			"back",
  			"end",
  			"on",
  			"soon",
  			"top",
  			"place_of_worship",
  			"atom_symbol",
  			"om_symbol",
  			"star_of_david",
  			"wheel_of_dharma",
  			"yin_yang",
  			"latin_cross",
  			"orthodox_cross",
  			"star_and_crescent",
  			"peace_symbol",
  			"menorah_with_nine_branches",
  			"six_pointed_star",
  			"aries",
  			"taurus",
  			"gemini",
  			"cancer",
  			"leo",
  			"virgo",
  			"libra",
  			"scorpius",
  			"sagittarius",
  			"capricorn",
  			"aquarius",
  			"pisces",
  			"ophiuchus",
  			"twisted_rightwards_arrows",
  			"repeat",
  			"repeat_one",
  			"arrow_forward",
  			"fast_forward",
  			"black_right_pointing_double_triangle_with_vertical_bar",
  			"black_right_pointing_triangle_with_double_vertical_bar",
  			"arrow_backward",
  			"rewind",
  			"black_left_pointing_double_triangle_with_vertical_bar",
  			"arrow_up_small",
  			"arrow_double_up",
  			"arrow_down_small",
  			"arrow_double_down",
  			"double_vertical_bar",
  			"black_square_for_stop",
  			"black_circle_for_record",
  			"eject",
  			"cinema",
  			"low_brightness",
  			"high_brightness",
  			"signal_strength",
  			"vibration_mode",
  			"mobile_phone_off",
  			"female_sign",
  			"male_sign",
  			"medical_symbol",
  			"recycle",
  			"fleur_de_lis",
  			"trident",
  			"name_badge",
  			"beginner",
  			"o",
  			"white_check_mark",
  			"ballot_box_with_check",
  			"heavy_check_mark",
  			"heavy_multiplication_x",
  			"x",
  			"negative_squared_cross_mark",
  			"heavy_plus_sign",
  			"heavy_minus_sign",
  			"heavy_division_sign",
  			"curly_loop",
  			"loop",
  			"part_alternation_mark",
  			"eight_spoked_asterisk",
  			"eight_pointed_black_star",
  			"sparkle",
  			"bangbang",
  			"interrobang",
  			"question",
  			"grey_question",
  			"grey_exclamation",
  			"exclamation",
  			"wavy_dash",
  			"copyright",
  			"registered",
  			"tm",
  			"hash",
  			"keycap_star",
  			"zero",
  			"one",
  			"two",
  			"three",
  			"four",
  			"five",
  			"six",
  			"seven",
  			"eight",
  			"nine",
  			"keycap_ten",
  			"100",
  			"capital_abcd",
  			"abcd",
  			"1234",
  			"symbols",
  			"abc",
  			"a",
  			"ab",
  			"b",
  			"cl",
  			"cool",
  			"free",
  			"information_source",
  			"id",
  			"m",
  			"new",
  			"ng",
  			"o2",
  			"ok",
  			"parking",
  			"sos",
  			"up",
  			"vs",
  			"koko",
  			"sa",
  			"u6708",
  			"u6709",
  			"u6307",
  			"ideograph_advantage",
  			"u5272",
  			"u7121",
  			"u7981",
  			"accept",
  			"u7533",
  			"u5408",
  			"u7a7a",
  			"congratulations",
  			"secret",
  			"u55b6",
  			"u6e80",
  			"black_small_square",
  			"white_small_square",
  			"white_medium_square",
  			"black_medium_square",
  			"white_medium_small_square",
  			"black_medium_small_square",
  			"black_large_square",
  			"white_large_square",
  			"large_orange_diamond",
  			"large_blue_diamond",
  			"small_orange_diamond",
  			"small_blue_diamond",
  			"small_red_triangle",
  			"small_red_triangle_down",
  			"diamond_shape_with_a_dot_inside",
  			"radio_button",
  			"black_square_button",
  			"white_square_button",
  			"white_circle",
  			"black_circle",
  			"red_circle",
  			"large_blue_circle"
  		]
  	},
  	{
  		id: "flags",
  		name: "Flags",
  		emojis: [
  			"checkered_flag",
  			"cn",
  			"crossed_flags",
  			"de",
  			"es",
  			"flag-ac",
  			"flag-ad",
  			"flag-ae",
  			"flag-af",
  			"flag-ag",
  			"flag-ai",
  			"flag-al",
  			"flag-am",
  			"flag-ao",
  			"flag-aq",
  			"flag-ar",
  			"flag-as",
  			"flag-at",
  			"flag-au",
  			"flag-aw",
  			"flag-ax",
  			"flag-az",
  			"flag-ba",
  			"flag-bb",
  			"flag-bd",
  			"flag-be",
  			"flag-bf",
  			"flag-bg",
  			"flag-bh",
  			"flag-bi",
  			"flag-bj",
  			"flag-bl",
  			"flag-bm",
  			"flag-bn",
  			"flag-bo",
  			"flag-bq",
  			"flag-br",
  			"flag-bs",
  			"flag-bt",
  			"flag-bv",
  			"flag-bw",
  			"flag-by",
  			"flag-bz",
  			"flag-ca",
  			"flag-cc",
  			"flag-cd",
  			"flag-cf",
  			"flag-cg",
  			"flag-ch",
  			"flag-ci",
  			"flag-ck",
  			"flag-cl",
  			"flag-cm",
  			"flag-co",
  			"flag-cp",
  			"flag-cr",
  			"flag-cu",
  			"flag-cv",
  			"flag-cw",
  			"flag-cx",
  			"flag-cy",
  			"flag-cz",
  			"flag-dg",
  			"flag-dj",
  			"flag-dk",
  			"flag-dm",
  			"flag-do",
  			"flag-dz",
  			"flag-ea",
  			"flag-ec",
  			"flag-ee",
  			"flag-eg",
  			"flag-eh",
  			"flag-england",
  			"flag-er",
  			"flag-et",
  			"flag-eu",
  			"flag-fi",
  			"flag-fj",
  			"flag-fk",
  			"flag-fm",
  			"flag-fo",
  			"flag-ga",
  			"flag-gd",
  			"flag-ge",
  			"flag-gf",
  			"flag-gg",
  			"flag-gh",
  			"flag-gi",
  			"flag-gl",
  			"flag-gm",
  			"flag-gn",
  			"flag-gp",
  			"flag-gq",
  			"flag-gr",
  			"flag-gs",
  			"flag-gt",
  			"flag-gu",
  			"flag-gw",
  			"flag-gy",
  			"flag-hk",
  			"flag-hm",
  			"flag-hn",
  			"flag-hr",
  			"flag-ht",
  			"flag-hu",
  			"flag-ic",
  			"flag-id",
  			"flag-ie",
  			"flag-il",
  			"flag-im",
  			"flag-in",
  			"flag-io",
  			"flag-iq",
  			"flag-ir",
  			"flag-is",
  			"flag-je",
  			"flag-jm",
  			"flag-jo",
  			"flag-ke",
  			"flag-kg",
  			"flag-kh",
  			"flag-ki",
  			"flag-km",
  			"flag-kn",
  			"flag-kp",
  			"flag-kw",
  			"flag-ky",
  			"flag-kz",
  			"flag-la",
  			"flag-lb",
  			"flag-lc",
  			"flag-li",
  			"flag-lk",
  			"flag-lr",
  			"flag-ls",
  			"flag-lt",
  			"flag-lu",
  			"flag-lv",
  			"flag-ly",
  			"flag-ma",
  			"flag-mc",
  			"flag-md",
  			"flag-me",
  			"flag-mf",
  			"flag-mg",
  			"flag-mh",
  			"flag-mk",
  			"flag-ml",
  			"flag-mm",
  			"flag-mn",
  			"flag-mo",
  			"flag-mp",
  			"flag-mq",
  			"flag-mr",
  			"flag-ms",
  			"flag-mt",
  			"flag-mu",
  			"flag-mv",
  			"flag-mw",
  			"flag-mx",
  			"flag-my",
  			"flag-mz",
  			"flag-na",
  			"flag-nc",
  			"flag-ne",
  			"flag-nf",
  			"flag-ng",
  			"flag-ni",
  			"flag-nl",
  			"flag-no",
  			"flag-np",
  			"flag-nr",
  			"flag-nu",
  			"flag-nz",
  			"flag-om",
  			"flag-pa",
  			"flag-pe",
  			"flag-pf",
  			"flag-pg",
  			"flag-ph",
  			"flag-pk",
  			"flag-pl",
  			"flag-pm",
  			"flag-pn",
  			"flag-pr",
  			"flag-ps",
  			"flag-pt",
  			"flag-pw",
  			"flag-py",
  			"flag-qa",
  			"flag-re",
  			"flag-ro",
  			"flag-rs",
  			"flag-rw",
  			"flag-sa",
  			"flag-sb",
  			"flag-sc",
  			"flag-scotland",
  			"flag-sd",
  			"flag-se",
  			"flag-sg",
  			"flag-sh",
  			"flag-si",
  			"flag-sj",
  			"flag-sk",
  			"flag-sl",
  			"flag-sm",
  			"flag-sn",
  			"flag-so",
  			"flag-sr",
  			"flag-ss",
  			"flag-st",
  			"flag-sv",
  			"flag-sx",
  			"flag-sy",
  			"flag-sz",
  			"flag-ta",
  			"flag-tc",
  			"flag-td",
  			"flag-tf",
  			"flag-tg",
  			"flag-th",
  			"flag-tj",
  			"flag-tk",
  			"flag-tl",
  			"flag-tm",
  			"flag-tn",
  			"flag-to",
  			"flag-tr",
  			"flag-tt",
  			"flag-tv",
  			"flag-tw",
  			"flag-tz",
  			"flag-ua",
  			"flag-ug",
  			"flag-um",
  			"flag-uy",
  			"flag-uz",
  			"flag-va",
  			"flag-vc",
  			"flag-ve",
  			"flag-vg",
  			"flag-vi",
  			"flag-vn",
  			"flag-vu",
  			"flag-wales",
  			"flag-wf",
  			"flag-ws",
  			"flag-xk",
  			"flag-ye",
  			"flag-yt",
  			"flag-za",
  			"flag-zm",
  			"flag-zw",
  			"fr",
  			"gb",
  			"it",
  			"jp",
  			"kr",
  			"rainbow-flag",
  			"ru",
  			"triangular_flag_on_post",
  			"us",
  			"waving_black_flag",
  			"waving_white_flag"
  		]
  	}
  ];
  var emojis = {
  	"100": {
  		a: "Hundred Points Symbol",
  		b: "1F4AF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"score",
  			"perfect",
  			"numbers",
  			"century",
  			"exam",
  			"quiz",
  			"test",
  			"pass",
  			"hundred"
  		],
  		k: [
  			25,
  			26
  		]
  	},
  	"1234": {
  		a: "Input Symbol for Numbers",
  		b: "1F522",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"numbers",
  			"blue-square"
  		],
  		k: [
  			27,
  			36
  		]
  	},
  	monkey_face: {
  		a: "Monkey Face",
  		b: "1F435",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"circus"
  		],
  		k: [
  			13,
  			31
  		],
  		l: [
  			":o)"
  		]
  	},
  	grinning: {
  		a: "Grinning Face",
  		b: "1F600",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"smile",
  			"happy",
  			"joy",
  			":D",
  			"grin"
  		],
  		k: [
  			30,
  			24
  		],
  		m: ":D"
  	},
  	earth_africa: {
  		a: "Earth Globe Europe-Africa",
  		b: "1F30D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"globe",
  			"world",
  			"international"
  		],
  		k: [
  			6,
  			5
  		]
  	},
  	checkered_flag: {
  		a: "Chequered Flag",
  		b: "1F3C1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"contest",
  			"finishline",
  			"race",
  			"gokart"
  		],
  		k: [
  			9,
  			27
  		]
  	},
  	mute: {
  		a: "Speaker with Cancellation Stroke",
  		b: "1F507",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sound",
  			"volume",
  			"silence",
  			"quiet"
  		],
  		k: [
  			27,
  			9
  		]
  	},
  	jack_o_lantern: {
  		a: "Jack-O-Lantern",
  		b: "1F383",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"halloween",
  			"light",
  			"pumpkin",
  			"creepy",
  			"fall"
  		],
  		k: [
  			8,
  			17
  		]
  	},
  	atm: {
  		a: "Automated Teller Machine",
  		b: "1F3E7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"money",
  			"sales",
  			"cash",
  			"blue-square",
  			"payment",
  			"bank"
  		],
  		k: [
  			12,
  			4
  		]
  	},
  	grapes: {
  		a: "Grapes",
  		b: "1F347",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"food",
  			"wine"
  		],
  		k: [
  			7,
  			9
  		]
  	},
  	earth_americas: {
  		a: "Earth Globe Americas",
  		b: "1F30E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"globe",
  			"world",
  			"USA",
  			"international"
  		],
  		k: [
  			6,
  			6
  		]
  	},
  	grin: {
  		a: "Grinning Face with Smiling Eyes",
  		b: "1F601",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"happy",
  			"smile",
  			"joy",
  			"kawaii"
  		],
  		k: [
  			30,
  			25
  		]
  	},
  	melon: {
  		a: "Melon",
  		b: "1F348",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"nature",
  			"food"
  		],
  		k: [
  			7,
  			10
  		]
  	},
  	triangular_flag_on_post: {
  		a: "Triangular Flag on Post",
  		b: "1F6A9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"mark",
  			"milestone",
  			"place"
  		],
  		k: [
  			35,
  			14
  		]
  	},
  	monkey: {
  		a: "Monkey",
  		b: "1F412",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"banana",
  			"circus"
  		],
  		k: [
  			12,
  			48
  		]
  	},
  	christmas_tree: {
  		a: "Christmas Tree",
  		b: "1F384",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"festival",
  			"vacation",
  			"december",
  			"xmas",
  			"celebration"
  		],
  		k: [
  			8,
  			18
  		]
  	},
  	put_litter_in_its_place: {
  		a: "Put Litter in Its Place Symbol",
  		b: "1F6AE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"sign",
  			"human",
  			"info"
  		],
  		k: [
  			35,
  			19
  		]
  	},
  	speaker: {
  		a: "Speaker",
  		b: "1F508",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sound",
  			"volume",
  			"silence",
  			"broadcast"
  		],
  		k: [
  			27,
  			10
  		]
  	},
  	earth_asia: {
  		a: "Earth Globe Asia-Australia",
  		b: "1F30F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"globe",
  			"world",
  			"east",
  			"international"
  		],
  		k: [
  			6,
  			7
  		]
  	},
  	crossed_flags: {
  		a: "Crossed Flags",
  		b: "1F38C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"japanese",
  			"nation",
  			"country",
  			"border"
  		],
  		k: [
  			8,
  			31
  		]
  	},
  	joy: {
  		a: "Face with Tears of Joy",
  		b: "1F602",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"cry",
  			"tears",
  			"weep",
  			"happy",
  			"happytears",
  			"haha"
  		],
  		k: [
  			30,
  			26
  		]
  	},
  	sound: {
  		a: "Speaker with One Sound Wave",
  		b: "1F509",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"volume",
  			"speaker",
  			"broadcast"
  		],
  		k: [
  			27,
  			11
  		]
  	},
  	watermelon: {
  		a: "Watermelon",
  		b: "1F349",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"food",
  			"picnic",
  			"summer"
  		],
  		k: [
  			7,
  			11
  		]
  	},
  	gorilla: {
  		a: "Gorilla",
  		b: "1F98D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"circus"
  		],
  		k: [
  			42,
  			37
  		],
  		o: 9
  	},
  	fireworks: {
  		a: "Fireworks",
  		b: "1F386",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"festival",
  			"carnival",
  			"congratulations"
  		],
  		k: [
  			8,
  			25
  		]
  	},
  	potable_water: {
  		a: "Potable Water Symbol",
  		b: "1F6B0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"liquid",
  			"restroom",
  			"cleaning",
  			"faucet"
  		],
  		k: [
  			35,
  			21
  		]
  	},
  	wheelchair: {
  		a: "Wheelchair Symbol",
  		b: "267F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"disabled",
  			"a11y",
  			"accessibility"
  		],
  		k: [
  			48,
  			10
  		],
  		o: 4
  	},
  	rolling_on_the_floor_laughing: {
  		a: "Rolling on the Floor Laughing",
  		b: "1F923",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			26
  		],
  		o: 9
  	},
  	loud_sound: {
  		a: "Speaker with Three Sound Waves",
  		b: "1F50A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"volume",
  			"noise",
  			"noisy",
  			"speaker",
  			"broadcast"
  		],
  		k: [
  			27,
  			12
  		]
  	},
  	waving_black_flag: {
  		a: "Waving Black Flag",
  		b: "1F3F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			12,
  			19
  		],
  		o: 7
  	},
  	tangerine: {
  		a: "Tangerine",
  		b: "1F34A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"fruit",
  			"nature",
  			"orange"
  		],
  		k: [
  			7,
  			12
  		]
  	},
  	dog: {
  		a: "Dog Face",
  		b: "1F436",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"friend",
  			"nature",
  			"woof",
  			"puppy",
  			"pet",
  			"faithful"
  		],
  		k: [
  			13,
  			32
  		]
  	},
  	sparkler: {
  		a: "Firework Sparkler",
  		b: "1F387",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stars",
  			"night",
  			"shine"
  		],
  		k: [
  			8,
  			26
  		]
  	},
  	globe_with_meridians: {
  		a: "Globe with Meridians",
  		b: "1F310",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"earth",
  			"international",
  			"world",
  			"internet",
  			"interweb",
  			"i18n"
  		],
  		k: [
  			6,
  			8
  		]
  	},
  	smiley: {
  		a: "Smiling Face with Open Mouth",
  		b: "1F603",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"happy",
  			"joy",
  			"haha",
  			":D",
  			":)",
  			"smile",
  			"funny"
  		],
  		k: [
  			30,
  			27
  		],
  		l: [
  			"=)",
  			"=-)"
  		],
  		m: ":)"
  	},
  	loudspeaker: {
  		a: "Public Address Loudspeaker",
  		b: "1F4E2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"volume",
  			"sound"
  		],
  		k: [
  			26,
  			25
  		]
  	},
  	sparkles: {
  		a: "Sparkles",
  		b: "2728",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stars",
  			"shine",
  			"shiny",
  			"cool",
  			"awesome",
  			"good",
  			"magic"
  		],
  		k: [
  			49,
  			48
  		]
  	},
  	dog2: {
  		a: "Dog",
  		b: "1F415",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"friend",
  			"doge",
  			"pet",
  			"faithful"
  		],
  		k: [
  			12,
  			51
  		]
  	},
  	waving_white_flag: {
  		a: "Waving White Flag",
  		b: "1F3F3-FE0F",
  		c: "1F3F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			12,
  			15
  		],
  		o: 7
  	},
  	world_map: {
  		a: "World Map",
  		b: "1F5FA-FE0F",
  		c: "1F5FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"location",
  			"direction"
  		],
  		k: [
  			30,
  			18
  		],
  		o: 7
  	},
  	lemon: {
  		a: "Lemon",
  		b: "1F34B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"nature"
  		],
  		k: [
  			7,
  			13
  		]
  	},
  	mens: {
  		a: "Mens Symbol",
  		b: "1F6B9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"toilet",
  			"restroom",
  			"wc",
  			"blue-square",
  			"gender",
  			"male"
  		],
  		k: [
  			36,
  			29
  		]
  	},
  	womens: {
  		a: "Womens Symbol",
  		b: "1F6BA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"purple-square",
  			"woman",
  			"female",
  			"toilet",
  			"loo",
  			"restroom",
  			"gender"
  		],
  		k: [
  			36,
  			30
  		]
  	},
  	"rainbow-flag": {
  		a: "Rainbow Flag",
  		b: "1F3F3-FE0F-200D-1F308",
  		c: "1F3F3-200D-1F308",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			12,
  			14
  		],
  		o: 7
  	},
  	smile: {
  		a: "Smiling Face with Open Mouth and Smiling Eyes",
  		b: "1F604",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"happy",
  			"joy",
  			"funny",
  			"haha",
  			"laugh",
  			"like",
  			":D",
  			":)"
  		],
  		k: [
  			30,
  			28
  		],
  		l: [
  			"C:",
  			"c:",
  			":D",
  			":-D"
  		],
  		m: ":)"
  	},
  	banana: {
  		a: "Banana",
  		b: "1F34C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"food",
  			"monkey"
  		],
  		k: [
  			7,
  			14
  		]
  	},
  	mega: {
  		a: "Cheering Megaphone",
  		b: "1F4E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sound",
  			"speaker",
  			"volume"
  		],
  		k: [
  			26,
  			26
  		]
  	},
  	japan: {
  		a: "Silhouette of Japan",
  		b: "1F5FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nation",
  			"country",
  			"japanese",
  			"asia"
  		],
  		k: [
  			30,
  			22
  		]
  	},
  	poodle: {
  		a: "Poodle",
  		b: "1F429",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"dog",
  			"animal",
  			"101",
  			"nature",
  			"pet"
  		],
  		k: [
  			13,
  			19
  		]
  	},
  	balloon: {
  		a: "Balloon",
  		b: "1F388",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"party",
  			"celebration",
  			"birthday",
  			"circus"
  		],
  		k: [
  			8,
  			27
  		]
  	},
  	"flag-ac": {
  		a: "Ascension Island Flag",
  		b: "1F1E6-1F1E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			31
  		]
  	},
  	sweat_smile: {
  		a: "Smiling Face with Open Mouth and Cold Sweat",
  		b: "1F605",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"hot",
  			"happy",
  			"laugh",
  			"sweat",
  			"smile",
  			"relief"
  		],
  		k: [
  			30,
  			29
  		]
  	},
  	pineapple: {
  		a: "Pineapple",
  		b: "1F34D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"nature",
  			"food"
  		],
  		k: [
  			7,
  			15
  		]
  	},
  	restroom: {
  		a: "Restroom",
  		b: "1F6BB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"toilet",
  			"refresh",
  			"wc",
  			"gender"
  		],
  		k: [
  			36,
  			31
  		]
  	},
  	postal_horn: {
  		a: "Postal Horn",
  		b: "1F4EF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"instrument",
  			"music"
  		],
  		k: [
  			26,
  			38
  		]
  	},
  	wolf: {
  		a: "Wolf Face",
  		b: "1F43A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"wild"
  		],
  		k: [
  			13,
  			36
  		]
  	},
  	tada: {
  		a: "Party Popper",
  		b: "1F389",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"party",
  			"congratulations",
  			"birthday",
  			"magic",
  			"circus",
  			"celebration"
  		],
  		k: [
  			8,
  			28
  		]
  	},
  	snow_capped_mountain: {
  		a: "Snow Capped Mountain",
  		b: "1F3D4-FE0F",
  		c: "1F3D4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			11,
  			37
  		],
  		o: 7
  	},
  	laughing: {
  		a: "Smiling Face with Open Mouth and Tightly-Closed Eyes",
  		b: "1F606",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"happy",
  			"joy",
  			"lol",
  			"satisfied",
  			"haha",
  			"face",
  			"glad",
  			"XD",
  			"laugh"
  		],
  		k: [
  			30,
  			30
  		],
  		l: [
  			":>",
  			":->"
  		],
  		n: [
  			"satisfied"
  		]
  	},
  	apple: {
  		a: "Red Apple",
  		b: "1F34E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"mac",
  			"school"
  		],
  		k: [
  			7,
  			16
  		]
  	},
  	"flag-ad": {
  		a: "Andorra Flag",
  		b: "1F1E6-1F1E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			32
  		]
  	},
  	fox_face: {
  		a: "Fox Face",
  		b: "1F98A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"face"
  		],
  		k: [
  			42,
  			34
  		],
  		o: 9
  	},
  	confetti_ball: {
  		a: "Confetti Ball",
  		b: "1F38A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"festival",
  			"party",
  			"birthday",
  			"circus"
  		],
  		k: [
  			8,
  			29
  		]
  	},
  	bell: {
  		a: "Bell",
  		b: "1F514",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sound",
  			"notification",
  			"christmas",
  			"xmas",
  			"chime"
  		],
  		k: [
  			27,
  			22
  		]
  	},
  	mountain: {
  		a: "Mountain",
  		b: "26F0-FE0F",
  		c: "26F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"photo",
  			"nature",
  			"environment"
  		],
  		k: [
  			48,
  			38
  		],
  		o: 5
  	},
  	baby_symbol: {
  		a: "Baby Symbol",
  		b: "1F6BC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"orange-square",
  			"child"
  		],
  		k: [
  			36,
  			32
  		]
  	},
  	wc: {
  		a: "Water Closet",
  		b: "1F6BE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"toilet",
  			"restroom",
  			"blue-square"
  		],
  		k: [
  			36,
  			34
  		]
  	},
  	wink: {
  		a: "Winking Face",
  		b: "1F609",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"happy",
  			"mischievous",
  			"secret",
  			";)",
  			"smile",
  			"eye"
  		],
  		k: [
  			30,
  			33
  		],
  		l: [
  			";)",
  			";-)"
  		],
  		m: ";)"
  	},
  	no_bell: {
  		a: "Bell with Cancellation Stroke",
  		b: "1F515",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sound",
  			"volume",
  			"mute",
  			"quiet",
  			"silent"
  		],
  		k: [
  			27,
  			23
  		]
  	},
  	green_apple: {
  		a: "Green Apple",
  		b: "1F34F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"nature"
  		],
  		k: [
  			7,
  			17
  		]
  	},
  	tanabata_tree: {
  		a: "Tanabata Tree",
  		b: "1F38B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"plant",
  			"nature",
  			"branch",
  			"summer"
  		],
  		k: [
  			8,
  			30
  		]
  	},
  	"flag-ae": {
  		a: "United Arab Emirates Flag",
  		b: "1F1E6-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			33
  		]
  	},
  	volcano: {
  		a: "Volcano",
  		b: "1F30B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"nature",
  			"disaster"
  		],
  		k: [
  			6,
  			3
  		]
  	},
  	cat: {
  		a: "Cat Face",
  		b: "1F431",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"meow",
  			"nature",
  			"pet",
  			"kitten"
  		],
  		k: [
  			13,
  			27
  		]
  	},
  	"flag-af": {
  		a: "Afghanistan Flag",
  		b: "1F1E6-1F1EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			34
  		]
  	},
  	musical_score: {
  		a: "Musical Score",
  		b: "1F3BC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"treble",
  			"clef",
  			"compose"
  		],
  		k: [
  			9,
  			22
  		]
  	},
  	blush: {
  		a: "Smiling Face with Smiling Eyes",
  		b: "1F60A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"smile",
  			"happy",
  			"flushed",
  			"crush",
  			"embarrassed",
  			"shy",
  			"joy"
  		],
  		k: [
  			30,
  			34
  		],
  		m: ":)"
  	},
  	pear: {
  		a: "Pear",
  		b: "1F350",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"nature",
  			"food"
  		],
  		k: [
  			7,
  			18
  		]
  	},
  	bamboo: {
  		a: "Pine Decoration",
  		b: "1F38D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"plant",
  			"nature",
  			"vegetable",
  			"panda",
  			"pine_decoration"
  		],
  		k: [
  			8,
  			32
  		]
  	},
  	passport_control: {
  		a: "Passport Control",
  		b: "1F6C2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"custom",
  			"blue-square"
  		],
  		k: [
  			36,
  			43
  		]
  	},
  	mount_fuji: {
  		a: "Mount Fuji",
  		b: "1F5FB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"mountain",
  			"nature",
  			"japanese"
  		],
  		k: [
  			30,
  			19
  		]
  	},
  	cat2: {
  		a: "Cat",
  		b: "1F408",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"meow",
  			"pet",
  			"cats"
  		],
  		k: [
  			12,
  			38
  		]
  	},
  	musical_note: {
  		a: "Musical Note",
  		b: "1F3B5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"score",
  			"tone",
  			"sound"
  		],
  		k: [
  			9,
  			15
  		]
  	},
  	dolls: {
  		a: "Japanese Dolls",
  		b: "1F38E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"japanese",
  			"toy",
  			"kimono"
  		],
  		k: [
  			8,
  			33
  		]
  	},
  	lion_face: {
  		a: "Lion Face",
  		b: "1F981",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			25
  		],
  		o: 8
  	},
  	camping: {
  		a: "Camping",
  		b: "1F3D5-FE0F",
  		c: "1F3D5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"photo",
  			"outdoors",
  			"tent"
  		],
  		k: [
  			11,
  			38
  		],
  		o: 7
  	},
  	"flag-ag": {
  		a: "Antigua & Barbuda Flag",
  		b: "1F1E6-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			35
  		]
  	},
  	customs: {
  		a: "Customs",
  		b: "1F6C3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"passport",
  			"border",
  			"blue-square"
  		],
  		k: [
  			36,
  			44
  		]
  	},
  	yum: {
  		a: "Face Savouring Delicious Food",
  		b: "1F60B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"happy",
  			"joy",
  			"tongue",
  			"smile",
  			"face",
  			"silly",
  			"yummy",
  			"nom",
  			"delicious",
  			"savouring"
  		],
  		k: [
  			30,
  			35
  		]
  	},
  	peach: {
  		a: "Peach",
  		b: "1F351",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"nature",
  			"food"
  		],
  		k: [
  			7,
  			19
  		]
  	},
  	tiger: {
  		a: "Tiger Face",
  		b: "1F42F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cat",
  			"danger",
  			"wild",
  			"nature",
  			"roar"
  		],
  		k: [
  			13,
  			25
  		]
  	},
  	notes: {
  		a: "Multiple Musical Notes",
  		b: "1F3B6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"music",
  			"score"
  		],
  		k: [
  			9,
  			16
  		]
  	},
  	flags: {
  		a: "Carp Streamer",
  		b: "1F38F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fish",
  			"japanese",
  			"koinobori",
  			"carp",
  			"banner"
  		],
  		k: [
  			8,
  			34
  		]
  	},
  	beach_with_umbrella: {
  		a: "Beach with Umbrella",
  		b: "1F3D6-FE0F",
  		c: "1F3D6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			11,
  			39
  		],
  		o: 7
  	},
  	cherries: {
  		a: "Cherries",
  		b: "1F352",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"fruit"
  		],
  		k: [
  			7,
  			20
  		]
  	},
  	"flag-ai": {
  		a: "Anguilla Flag",
  		b: "1F1E6-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			36
  		]
  	},
  	baggage_claim: {
  		a: "Baggage Claim",
  		b: "1F6C4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"airport",
  			"transport"
  		],
  		k: [
  			36,
  			45
  		]
  	},
  	sunglasses: {
  		a: "Smiling Face with Sunglasses",
  		b: "1F60E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"cool",
  			"smile",
  			"summer",
  			"beach",
  			"sunglass"
  		],
  		k: [
  			30,
  			38
  		],
  		l: [
  			"8)"
  		]
  	},
  	left_luggage: {
  		a: "Left Luggage",
  		b: "1F6C5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"travel"
  		],
  		k: [
  			36,
  			46
  		]
  	},
  	wind_chime: {
  		a: "Wind Chime",
  		b: "1F390",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"ding",
  			"spring",
  			"bell"
  		],
  		k: [
  			8,
  			35
  		]
  	},
  	strawberry: {
  		a: "Strawberry",
  		b: "1F353",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"food",
  			"nature"
  		],
  		k: [
  			7,
  			21
  		]
  	},
  	desert: {
  		a: "Desert",
  		b: "1F3DC-FE0F",
  		c: "1F3DC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"photo",
  			"warm",
  			"saharah"
  		],
  		k: [
  			11,
  			45
  		],
  		o: 7
  	},
  	studio_microphone: {
  		a: "Studio Microphone",
  		b: "1F399-FE0F",
  		c: "1F399",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sing",
  			"recording",
  			"artist",
  			"talkshow"
  		],
  		k: [
  			8,
  			41
  		],
  		o: 7
  	},
  	"flag-al": {
  		a: "Albania Flag",
  		b: "1F1E6-1F1F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			37
  		]
  	},
  	tiger2: {
  		a: "Tiger",
  		b: "1F405",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"roar"
  		],
  		k: [
  			12,
  			35
  		]
  	},
  	heart_eyes: {
  		a: "Smiling Face with Heart-Shaped Eyes",
  		b: "1F60D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"love",
  			"like",
  			"affection",
  			"valentines",
  			"infatuation",
  			"crush",
  			"heart"
  		],
  		k: [
  			30,
  			37
  		]
  	},
  	desert_island: {
  		a: "Desert Island",
  		b: "1F3DD-FE0F",
  		c: "1F3DD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"photo",
  			"tropical",
  			"mojito"
  		],
  		k: [
  			11,
  			46
  		],
  		o: 7
  	},
  	kiwifruit: {
  		a: "Kiwifruit",
  		b: "1F95D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			9
  		],
  		o: 9
  	},
  	rice_scene: {
  		a: "Moon Viewing Ceremony",
  		b: "1F391",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"japan",
  			"asia",
  			"tsukimi"
  		],
  		k: [
  			8,
  			36
  		]
  	},
  	kissing_heart: {
  		a: "Face Throwing a Kiss",
  		b: "1F618",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"love",
  			"like",
  			"affection",
  			"valentines",
  			"infatuation",
  			"kiss"
  		],
  		k: [
  			30,
  			48
  		],
  		l: [
  			":*",
  			":-*"
  		]
  	},
  	warning: {
  		a: "Warning Sign",
  		b: "26A0-FE0F",
  		c: "26A0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"exclamation",
  			"wip",
  			"alert",
  			"error",
  			"problem",
  			"issue"
  		],
  		k: [
  			48,
  			20
  		],
  		o: 4
  	},
  	"flag-am": {
  		a: "Armenia Flag",
  		b: "1F1E6-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			38
  		]
  	},
  	leopard: {
  		a: "Leopard",
  		b: "1F406",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature"
  		],
  		k: [
  			12,
  			36
  		]
  	},
  	level_slider: {
  		a: "Level Slider",
  		b: "1F39A-FE0F",
  		c: "1F39A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"scale"
  		],
  		k: [
  			8,
  			42
  		],
  		o: 7
  	},
  	horse: {
  		a: "Horse Face",
  		b: "1F434",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"brown",
  			"nature"
  		],
  		k: [
  			13,
  			30
  		]
  	},
  	children_crossing: {
  		a: "Children Crossing",
  		b: "1F6B8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"school",
  			"warning",
  			"danger",
  			"sign",
  			"driving",
  			"yellow-diamond"
  		],
  		k: [
  			36,
  			28
  		]
  	},
  	ribbon: {
  		a: "Ribbon",
  		b: "1F380",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"decoration",
  			"pink",
  			"girl",
  			"bowtie"
  		],
  		k: [
  			8,
  			14
  		]
  	},
  	national_park: {
  		a: "National Park",
  		b: "1F3DE-FE0F",
  		c: "1F3DE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"photo",
  			"environment",
  			"nature"
  		],
  		k: [
  			11,
  			47
  		],
  		o: 7
  	},
  	control_knobs: {
  		a: "Control Knobs",
  		b: "1F39B-FE0F",
  		c: "1F39B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"dial"
  		],
  		k: [
  			8,
  			43
  		],
  		o: 7
  	},
  	kissing: {
  		a: "Kissing Face",
  		b: "1F617",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"face",
  			"3",
  			"valentines",
  			"infatuation",
  			"kiss"
  		],
  		k: [
  			30,
  			47
  		]
  	},
  	tomato: {
  		a: "Tomato",
  		b: "1F345",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fruit",
  			"vegetable",
  			"nature",
  			"food"
  		],
  		k: [
  			7,
  			7
  		]
  	},
  	"flag-ao": {
  		a: "Angola Flag",
  		b: "1F1E6-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			39
  		]
  	},
  	stadium: {
  		a: "Stadium",
  		b: "1F3DF-FE0F",
  		c: "1F3DF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"photo",
  			"place",
  			"sports",
  			"concert",
  			"venue"
  		],
  		k: [
  			11,
  			48
  		],
  		o: 7
  	},
  	"flag-aq": {
  		a: "Antarctica Flag",
  		b: "1F1E6-1F1F6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			40
  		]
  	},
  	gift: {
  		a: "Wrapped Present",
  		b: "1F381",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"present",
  			"birthday",
  			"christmas",
  			"xmas"
  		],
  		k: [
  			8,
  			15
  		]
  	},
  	no_entry: {
  		a: "No Entry",
  		b: "26D4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"limit",
  			"security",
  			"privacy",
  			"bad",
  			"denied",
  			"stop",
  			"circle"
  		],
  		k: [
  			48,
  			35
  		],
  		o: 5
  	},
  	kissing_smiling_eyes: {
  		a: "Kissing Face with Smiling Eyes",
  		b: "1F619",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"affection",
  			"valentines",
  			"infatuation",
  			"kiss"
  		],
  		k: [
  			30,
  			49
  		]
  	},
  	coconut: {
  		a: "Coconut",
  		b: "1F965",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			17
  		],
  		o: 10
  	},
  	racehorse: {
  		a: "Horse",
  		b: "1F40E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"gamble",
  			"luck"
  		],
  		k: [
  			12,
  			44
  		]
  	},
  	microphone: {
  		a: "Microphone",
  		b: "1F3A4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sound",
  			"music",
  			"PA",
  			"sing",
  			"talkshow"
  		],
  		k: [
  			8,
  			50
  		]
  	},
  	classical_building: {
  		a: "Classical Building",
  		b: "1F3DB-FE0F",
  		c: "1F3DB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"art",
  			"culture",
  			"history"
  		],
  		k: [
  			11,
  			44
  		],
  		o: 7
  	},
  	no_entry_sign: {
  		a: "No Entry Sign",
  		b: "1F6AB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"forbid",
  			"stop",
  			"limit",
  			"denied",
  			"disallow",
  			"circle"
  		],
  		k: [
  			35,
  			16
  		]
  	},
  	reminder_ribbon: {
  		a: "Reminder Ribbon",
  		b: "1F397-FE0F",
  		c: "1F397",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sports",
  			"cause",
  			"support",
  			"awareness"
  		],
  		k: [
  			8,
  			40
  		],
  		o: 7
  	},
  	kissing_closed_eyes: {
  		a: "Kissing Face with Closed Eyes",
  		b: "1F61A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"love",
  			"like",
  			"affection",
  			"valentines",
  			"infatuation",
  			"kiss"
  		],
  		k: [
  			30,
  			50
  		]
  	},
  	unicorn_face: {
  		a: "Unicorn Face",
  		b: "1F984",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			28
  		],
  		o: 8
  	},
  	"flag-ar": {
  		a: "Argentina Flag",
  		b: "1F1E6-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			41
  		]
  	},
  	headphones: {
  		a: "Headphone",
  		b: "1F3A7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"music",
  			"score",
  			"gadgets"
  		],
  		k: [
  			9,
  			1
  		]
  	},
  	avocado: {
  		a: "Avocado",
  		b: "1F951",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"fruit",
  			"food"
  		],
  		k: [
  			41,
  			49
  		],
  		o: 9
  	},
  	relaxed: {
  		a: "White Smiling Face",
  		b: "263A-FE0F",
  		c: "263A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"blush",
  			"massage",
  			"happiness"
  		],
  		k: [
  			47,
  			41
  		],
  		o: 1
  	},
  	zebra_face: {
  		a: "Zebra Face",
  		b: "1F993",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			43
  		],
  		o: 10
  	},
  	eggplant: {
  		a: "Aubergine",
  		b: "1F346",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vegetable",
  			"nature",
  			"food",
  			"aubergine"
  		],
  		k: [
  			7,
  			8
  		]
  	},
  	radio: {
  		a: "Radio",
  		b: "1F4FB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"communication",
  			"music",
  			"podcast",
  			"program"
  		],
  		k: [
  			26,
  			50
  		]
  	},
  	building_construction: {
  		a: "Building Construction",
  		b: "1F3D7-FE0F",
  		c: "1F3D7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"wip",
  			"working",
  			"progress"
  		],
  		k: [
  			11,
  			40
  		],
  		o: 7
  	},
  	"flag-as": {
  		a: "American Samoa Flag",
  		b: "1F1E6-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			42
  		]
  	},
  	admission_tickets: {
  		a: "Admission Tickets",
  		b: "1F39F-FE0F",
  		c: "1F39F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			8,
  			45
  		],
  		o: 7
  	},
  	no_bicycles: {
  		a: "No Bicycles",
  		b: "1F6B3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"cyclist",
  			"prohibited",
  			"circle"
  		],
  		k: [
  			35,
  			24
  		]
  	},
  	no_smoking: {
  		a: "No Smoking Symbol",
  		b: "1F6AD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"cigarette",
  			"blue-square",
  			"smell",
  			"smoke"
  		],
  		k: [
  			35,
  			18
  		]
  	},
  	slightly_smiling_face: {
  		a: "Slightly Smiling Face",
  		b: "1F642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"smile"
  		],
  		k: [
  			31,
  			38
  		],
  		l: [
  			":)",
  			"(:",
  			":-)"
  		],
  		o: 7
  	},
  	"flag-at": {
  		a: "Austria Flag",
  		b: "1F1E6-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			43
  		]
  	},
  	ticket: {
  		a: "Ticket",
  		b: "1F3AB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"event",
  			"concert",
  			"pass"
  		],
  		k: [
  			9,
  			5
  		]
  	},
  	saxophone: {
  		a: "Saxophone",
  		b: "1F3B7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"music",
  			"instrument",
  			"jazz",
  			"blues"
  		],
  		k: [
  			9,
  			17
  		]
  	},
  	deer: {
  		a: "Deer",
  		b: "1F98C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"horns",
  			"venison"
  		],
  		k: [
  			42,
  			36
  		],
  		o: 9
  	},
  	house_buildings: {
  		a: "House Buildings",
  		b: "1F3D8-FE0F",
  		c: "1F3D8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			11,
  			41
  		],
  		o: 7
  	},
  	potato: {
  		a: "Potato",
  		b: "1F954",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"tuber",
  			"vegatable",
  			"starch"
  		],
  		k: [
  			42,
  			0
  		],
  		o: 9
  	},
  	guitar: {
  		a: "Guitar",
  		b: "1F3B8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"music",
  			"instrument"
  		],
  		k: [
  			9,
  			18
  		]
  	},
  	carrot: {
  		a: "Carrot",
  		b: "1F955",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"vegetable",
  			"food",
  			"orange"
  		],
  		k: [
  			42,
  			1
  		],
  		o: 9
  	},
  	cityscape: {
  		a: "Cityscape",
  		b: "1F3D9-FE0F",
  		c: "1F3D9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"photo",
  			"night life",
  			"urban"
  		],
  		k: [
  			11,
  			42
  		],
  		o: 7
  	},
  	"flag-au": {
  		a: "Australia Flag",
  		b: "1F1E6-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			44
  		]
  	},
  	do_not_litter: {
  		a: "Do Not Litter Symbol",
  		b: "1F6AF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"trash",
  			"bin",
  			"garbage",
  			"circle"
  		],
  		k: [
  			35,
  			20
  		]
  	},
  	hugging_face: {
  		a: "Hugging Face",
  		b: "1F917",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			31
  		],
  		o: 8
  	},
  	cow: {
  		a: "Cow Face",
  		b: "1F42E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"beef",
  			"ox",
  			"animal",
  			"nature",
  			"moo",
  			"milk"
  		],
  		k: [
  			13,
  			24
  		]
  	},
  	medal: {
  		a: "Medal",
  		b: "1F396-FE0F",
  		c: "1F396",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			8,
  			39
  		],
  		o: 7
  	},
  	musical_keyboard: {
  		a: "Musical Keyboard",
  		b: "1F3B9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"piano",
  			"instrument",
  			"compose"
  		],
  		k: [
  			9,
  			19
  		]
  	},
  	corn: {
  		a: "Ear of Maize",
  		b: "1F33D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"vegetable",
  			"plant"
  		],
  		k: [
  			6,
  			51
  		]
  	},
  	derelict_house_building: {
  		a: "Derelict House Building",
  		b: "1F3DA-FE0F",
  		c: "1F3DA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			11,
  			43
  		],
  		o: 7
  	},
  	"non-potable_water": {
  		a: "Non-Potable Water Symbol",
  		b: "1F6B1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"drink",
  			"faucet",
  			"tap",
  			"circle"
  		],
  		k: [
  			35,
  			22
  		]
  	},
  	trophy: {
  		a: "Trophy",
  		b: "1F3C6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"win",
  			"award",
  			"contest",
  			"place",
  			"ftw",
  			"ceremony"
  		],
  		k: [
  			10,
  			19
  		]
  	},
  	"flag-aw": {
  		a: "Aruba Flag",
  		b: "1F1E6-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			45
  		]
  	},
  	"star-struck": {
  		a: "Grinning Face with Star Eyes",
  		b: "1F929",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			49
  		],
  		n: [
  			"grinning_face_with_star_eyes"
  		],
  		o: 10
  	},
  	ox: {
  		a: "Ox",
  		b: "1F402",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cow",
  			"beef"
  		],
  		k: [
  			12,
  			32
  		]
  	},
  	trumpet: {
  		a: "Trumpet",
  		b: "1F3BA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"music",
  			"brass"
  		],
  		k: [
  			9,
  			20
  		]
  	},
  	hot_pepper: {
  		a: "Hot Pepper",
  		b: "1F336-FE0F",
  		c: "1F336",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"spicy",
  			"chilli",
  			"chili"
  		],
  		k: [
  			6,
  			44
  		],
  		o: 7
  	},
  	sports_medal: {
  		a: "Sports Medal",
  		b: "1F3C5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			10,
  			18
  		],
  		o: 7
  	},
  	"flag-ax": {
  		a: "Åland Islands Flag",
  		b: "1F1E6-1F1FD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			46
  		]
  	},
  	water_buffalo: {
  		a: "Water Buffalo",
  		b: "1F403",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"ox",
  			"cow"
  		],
  		k: [
  			12,
  			33
  		]
  	},
  	no_pedestrians: {
  		a: "No Pedestrians",
  		b: "1F6B7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"rules",
  			"crossing",
  			"walking",
  			"circle"
  		],
  		k: [
  			36,
  			27
  		]
  	},
  	thinking_face: {
  		a: "Thinking Face",
  		b: "1F914",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			28
  		],
  		o: 8
  	},
  	house: {
  		a: "House Building",
  		b: "1F3E0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"home"
  		],
  		k: [
  			11,
  			49
  		]
  	},
  	no_mobile_phones: {
  		a: "No Mobile Phones",
  		b: "1F4F5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"iphone",
  			"mute",
  			"circle"
  		],
  		k: [
  			26,
  			44
  		]
  	},
  	"flag-az": {
  		a: "Azerbaijan Flag",
  		b: "1F1E6-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			47
  		]
  	},
  	first_place_medal: {
  		a: "First Place Medal",
  		b: "1F947",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			41,
  			42
  		],
  		o: 9
  	},
  	house_with_garden: {
  		a: "House with Garden",
  		b: "1F3E1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"home",
  			"plant",
  			"nature"
  		],
  		k: [
  			11,
  			50
  		]
  	},
  	violin: {
  		a: "Violin",
  		b: "1F3BB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"music",
  			"instrument",
  			"orchestra",
  			"symphony"
  		],
  		k: [
  			9,
  			21
  		]
  	},
  	face_with_raised_eyebrow: {
  		a: "Face with One Eyebrow Raised",
  		b: "1F928",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			48
  		],
  		n: [
  			"face_with_one_eyebrow_raised"
  		],
  		o: 10
  	},
  	cucumber: {
  		a: "Cucumber",
  		b: "1F952",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"fruit",
  			"food",
  			"pickle"
  		],
  		k: [
  			41,
  			50
  		],
  		o: 9
  	},
  	cow2: {
  		a: "Cow",
  		b: "1F404",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"beef",
  			"ox",
  			"animal",
  			"nature",
  			"moo",
  			"milk"
  		],
  		k: [
  			12,
  			34
  		]
  	},
  	"flag-ba": {
  		a: "Bosnia & Herzegovina Flag",
  		b: "1F1E7-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			0,
  			48
  		]
  	},
  	pig: {
  		a: "Pig Face",
  		b: "1F437",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"oink",
  			"nature"
  		],
  		k: [
  			13,
  			33
  		]
  	},
  	drum_with_drumsticks: {
  		a: "Drum with Drumsticks",
  		b: "1F941",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			41,
  			37
  		],
  		o: 9
  	},
  	underage: {
  		a: "No One Under Eighteen Symbol",
  		b: "1F51E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"18",
  			"drink",
  			"pub",
  			"night",
  			"minor",
  			"circle"
  		],
  		k: [
  			27,
  			32
  		]
  	},
  	broccoli: {
  		a: "Broccoli",
  		b: "1F966",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			18
  		],
  		o: 10
  	},
  	office: {
  		a: "Office Building",
  		b: "1F3E2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"bureau",
  			"work"
  		],
  		k: [
  			11,
  			51
  		]
  	},
  	second_place_medal: {
  		a: "Second Place Medal",
  		b: "1F948",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			41,
  			43
  		],
  		o: 9
  	},
  	neutral_face: {
  		a: "Neutral Face",
  		b: "1F610",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"indifference",
  			"meh",
  			":|",
  			"neutral"
  		],
  		k: [
  			30,
  			40
  		],
  		l: [
  			":|",
  			":-|"
  		]
  	},
  	third_place_medal: {
  		a: "Third Place Medal",
  		b: "1F949",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			41,
  			44
  		],
  		o: 9
  	},
  	mushroom: {
  		a: "Mushroom",
  		b: "1F344",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"plant",
  			"vegetable"
  		],
  		k: [
  			7,
  			6
  		]
  	},
  	"flag-bb": {
  		a: "Barbados Flag",
  		b: "1F1E7-1F1E7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			49
  		]
  	},
  	radioactive_sign: {
  		a: "Radioactive Sign",
  		b: "2622-FE0F",
  		c: "2622",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			47,
  			33
  		],
  		o: 1
  	},
  	pig2: {
  		a: "Pig",
  		b: "1F416",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature"
  		],
  		k: [
  			13,
  			0
  		]
  	},
  	expressionless: {
  		a: "Expressionless Face",
  		b: "1F611",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"indifferent",
  			"-_-",
  			"meh",
  			"deadpan"
  		],
  		k: [
  			30,
  			41
  		]
  	},
  	iphone: {
  		a: "Mobile Phone",
  		b: "1F4F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"technology",
  			"apple",
  			"gadgets",
  			"dial"
  		],
  		k: [
  			26,
  			40
  		]
  	},
  	post_office: {
  		a: "Japanese Post Office",
  		b: "1F3E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"envelope",
  			"communication"
  		],
  		k: [
  			12,
  			0
  		]
  	},
  	european_post_office: {
  		a: "European Post Office",
  		b: "1F3E4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"email"
  		],
  		k: [
  			12,
  			1
  		]
  	},
  	soccer: {
  		a: "Soccer Ball",
  		b: "26BD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"football"
  		],
  		k: [
  			48,
  			26
  		],
  		o: 5
  	},
  	boar: {
  		a: "Boar",
  		b: "1F417",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature"
  		],
  		k: [
  			13,
  			1
  		]
  	},
  	peanuts: {
  		a: "Peanuts",
  		b: "1F95C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"nut"
  		],
  		k: [
  			42,
  			8
  		],
  		o: 9
  	},
  	calling: {
  		a: "Mobile Phone with Rightwards Arrow at Left",
  		b: "1F4F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"iphone",
  			"incoming"
  		],
  		k: [
  			26,
  			41
  		]
  	},
  	biohazard_sign: {
  		a: "Biohazard Sign",
  		b: "2623-FE0F",
  		c: "2623",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			47,
  			34
  		],
  		o: 1
  	},
  	"flag-bd": {
  		a: "Bangladesh Flag",
  		b: "1F1E7-1F1E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			50
  		]
  	},
  	no_mouth: {
  		a: "Face Without Mouth",
  		b: "1F636",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"hellokitty"
  		],
  		k: [
  			31,
  			26
  		]
  	},
  	face_with_rolling_eyes: {
  		a: "Face with Rolling Eyes",
  		b: "1F644",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			31,
  			40
  		],
  		o: 8
  	},
  	phone: {
  		a: "Black Telephone",
  		b: "260E-FE0F",
  		c: "260E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"technology",
  			"communication",
  			"dial",
  			"telephone"
  		],
  		k: [
  			47,
  			21
  		],
  		n: [
  			"telephone"
  		],
  		o: 1
  	},
  	pig_nose: {
  		a: "Pig Nose",
  		b: "1F43D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"oink"
  		],
  		k: [
  			13,
  			39
  		]
  	},
  	chestnut: {
  		a: "Chestnut",
  		b: "1F330",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"squirrel"
  		],
  		k: [
  			6,
  			38
  		]
  	},
  	arrow_up: {
  		a: "Upwards Black Arrow",
  		b: "2B06-FE0F",
  		c: "2B06",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"continue",
  			"top",
  			"direction"
  		],
  		k: [
  			50,
  			18
  		],
  		o: 4
  	},
  	hospital: {
  		a: "Hospital",
  		b: "1F3E5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"health",
  			"surgery",
  			"doctor"
  		],
  		k: [
  			12,
  			2
  		]
  	},
  	"flag-be": {
  		a: "Belgium Flag",
  		b: "1F1E7-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			0,
  			51
  		]
  	},
  	baseball: {
  		a: "Baseball",
  		b: "26BE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"balls"
  		],
  		k: [
  			48,
  			27
  		],
  		o: 5
  	},
  	smirk: {
  		a: "Smirking Face",
  		b: "1F60F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"smile",
  			"mean",
  			"prank",
  			"smug",
  			"sarcasm"
  		],
  		k: [
  			30,
  			39
  		]
  	},
  	arrow_upper_right: {
  		a: "North East Arrow",
  		b: "2197-FE0F",
  		c: "2197",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"point",
  			"direction",
  			"diagonal",
  			"northeast"
  		],
  		k: [
  			46,
  			36
  		],
  		o: 1
  	},
  	"flag-bf": {
  		a: "Burkina Faso Flag",
  		b: "1F1E7-1F1EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			0
  		]
  	},
  	basketball: {
  		a: "Basketball and Hoop",
  		b: "1F3C0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"balls",
  			"NBA"
  		],
  		k: [
  			9,
  			26
  		]
  	},
  	ram: {
  		a: "Ram",
  		b: "1F40F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"sheep",
  			"nature"
  		],
  		k: [
  			12,
  			45
  		]
  	},
  	bank: {
  		a: "Bank",
  		b: "1F3E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"money",
  			"sales",
  			"cash",
  			"business",
  			"enterprise"
  		],
  		k: [
  			12,
  			3
  		]
  	},
  	bread: {
  		a: "Bread",
  		b: "1F35E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"wheat",
  			"breakfast",
  			"toast"
  		],
  		k: [
  			7,
  			32
  		]
  	},
  	telephone_receiver: {
  		a: "Telephone Receiver",
  		b: "1F4DE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"technology",
  			"communication",
  			"dial"
  		],
  		k: [
  			26,
  			21
  		]
  	},
  	croissant: {
  		a: "Croissant",
  		b: "1F950",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"bread",
  			"french"
  		],
  		k: [
  			41,
  			48
  		],
  		o: 9
  	},
  	pager: {
  		a: "Pager",
  		b: "1F4DF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"bbcall",
  			"oldschool",
  			"90s"
  		],
  		k: [
  			26,
  			22
  		]
  	},
  	sheep: {
  		a: "Sheep",
  		b: "1F411",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"wool",
  			"shipit"
  		],
  		k: [
  			12,
  			47
  		]
  	},
  	arrow_right: {
  		a: "Black Rightwards Arrow",
  		b: "27A1-FE0F",
  		c: "27A1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"next"
  		],
  		k: [
  			50,
  			12
  		],
  		o: 1
  	},
  	persevere: {
  		a: "Persevering Face",
  		b: "1F623",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"sick",
  			"no",
  			"upset",
  			"oops"
  		],
  		k: [
  			31,
  			7
  		]
  	},
  	"flag-bg": {
  		a: "Bulgaria Flag",
  		b: "1F1E7-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			1
  		]
  	},
  	volleyball: {
  		a: "Volleyball",
  		b: "1F3D0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sports",
  			"balls"
  		],
  		k: [
  			11,
  			33
  		],
  		o: 8
  	},
  	hotel: {
  		a: "Hotel",
  		b: "1F3E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"accomodation",
  			"checkin"
  		],
  		k: [
  			12,
  			5
  		]
  	},
  	arrow_lower_right: {
  		a: "South East Arrow",
  		b: "2198-FE0F",
  		c: "2198",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"direction",
  			"diagonal",
  			"southeast"
  		],
  		k: [
  			46,
  			37
  		],
  		o: 1
  	},
  	goat: {
  		a: "Goat",
  		b: "1F410",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature"
  		],
  		k: [
  			12,
  			46
  		]
  	},
  	"flag-bh": {
  		a: "Bahrain Flag",
  		b: "1F1E7-1F1ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			2
  		]
  	},
  	love_hotel: {
  		a: "Love Hotel",
  		b: "1F3E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"like",
  			"affection",
  			"dating"
  		],
  		k: [
  			12,
  			6
  		]
  	},
  	disappointed_relieved: {
  		a: "Disappointed but Relieved Face",
  		b: "1F625",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"phew",
  			"sweat",
  			"nervous"
  		],
  		k: [
  			31,
  			9
  		]
  	},
  	baguette_bread: {
  		a: "Baguette Bread",
  		b: "1F956",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"bread",
  			"french"
  		],
  		k: [
  			42,
  			2
  		],
  		o: 9
  	},
  	football: {
  		a: "American Football",
  		b: "1F3C8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"balls",
  			"NFL"
  		],
  		k: [
  			10,
  			26
  		]
  	},
  	fax: {
  		a: "Fax Machine",
  		b: "1F4E0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"communication",
  			"technology"
  		],
  		k: [
  			26,
  			23
  		]
  	},
  	convenience_store: {
  		a: "Convenience Store",
  		b: "1F3EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"shopping",
  			"groceries"
  		],
  		k: [
  			12,
  			7
  		]
  	},
  	dromedary_camel: {
  		a: "Dromedary Camel",
  		b: "1F42A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"hot",
  			"desert",
  			"hump"
  		],
  		k: [
  			13,
  			20
  		]
  	},
  	arrow_down: {
  		a: "Downwards Black Arrow",
  		b: "2B07-FE0F",
  		c: "2B07",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"direction",
  			"bottom"
  		],
  		k: [
  			50,
  			19
  		],
  		o: 4
  	},
  	battery: {
  		a: "Battery",
  		b: "1F50B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"power",
  			"energy",
  			"sustain"
  		],
  		k: [
  			27,
  			13
  		]
  	},
  	rugby_football: {
  		a: "Rugby Football",
  		b: "1F3C9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"team"
  		],
  		k: [
  			10,
  			27
  		]
  	},
  	pretzel: {
  		a: "Pretzel",
  		b: "1F968",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			20
  		],
  		o: 10
  	},
  	open_mouth: {
  		a: "Face with Open Mouth",
  		b: "1F62E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"surprise",
  			"impressed",
  			"wow",
  			"whoa",
  			":O"
  		],
  		k: [
  			31,
  			18
  		],
  		l: [
  			":o",
  			":-o",
  			":O",
  			":-O"
  		]
  	},
  	"flag-bi": {
  		a: "Burundi Flag",
  		b: "1F1E7-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			3
  		]
  	},
  	"flag-bj": {
  		a: "Benin Flag",
  		b: "1F1E7-1F1EF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			4
  		]
  	},
  	pancakes: {
  		a: "Pancakes",
  		b: "1F95E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"breakfast",
  			"flapjacks",
  			"hotcakes"
  		],
  		k: [
  			42,
  			10
  		],
  		o: 9
  	},
  	school: {
  		a: "School",
  		b: "1F3EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"student",
  			"education",
  			"learn",
  			"teach"
  		],
  		k: [
  			12,
  			8
  		]
  	},
  	tennis: {
  		a: "Tennis Racquet and Ball",
  		b: "1F3BE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"balls",
  			"green"
  		],
  		k: [
  			9,
  			24
  		]
  	},
  	zipper_mouth_face: {
  		a: "Zipper-Mouth Face",
  		b: "1F910",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"sealed",
  			"zipper",
  			"secret"
  		],
  		k: [
  			37,
  			24
  		],
  		o: 8
  	},
  	camel: {
  		a: "Bactrian Camel",
  		b: "1F42B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"hot",
  			"desert",
  			"hump"
  		],
  		k: [
  			13,
  			21
  		]
  	},
  	arrow_lower_left: {
  		a: "South West Arrow",
  		b: "2199-FE0F",
  		c: "2199",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"direction",
  			"diagonal",
  			"southwest"
  		],
  		k: [
  			46,
  			38
  		],
  		o: 1
  	},
  	electric_plug: {
  		a: "Electric Plug",
  		b: "1F50C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"charger",
  			"power"
  		],
  		k: [
  			27,
  			14
  		]
  	},
  	cheese_wedge: {
  		a: "Cheese Wedge",
  		b: "1F9C0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			48
  		],
  		o: 8
  	},
  	hushed: {
  		a: "Hushed Face",
  		b: "1F62F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"woo",
  			"shh"
  		],
  		k: [
  			31,
  			19
  		]
  	},
  	computer: {
  		a: "Personal Computer",
  		b: "1F4BB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"technology",
  			"laptop",
  			"screen",
  			"display",
  			"monitor"
  		],
  		k: [
  			25,
  			38
  		]
  	},
  	giraffe_face: {
  		a: "Giraffe Face",
  		b: "1F992",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			42
  		],
  		o: 10
  	},
  	"8ball": {
  		a: "Billiards",
  		b: "1F3B1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"pool",
  			"hobby",
  			"game",
  			"luck",
  			"magic"
  		],
  		k: [
  			9,
  			11
  		]
  	},
  	"flag-bl": {
  		a: "St. Barthélemy Flag",
  		b: "1F1E7-1F1F1",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			5
  		]
  	},
  	arrow_left: {
  		a: "Leftwards Black Arrow",
  		b: "2B05-FE0F",
  		c: "2B05",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"previous",
  			"back"
  		],
  		k: [
  			50,
  			17
  		],
  		o: 4
  	},
  	department_store: {
  		a: "Department Store",
  		b: "1F3EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"shopping",
  			"mall"
  		],
  		k: [
  			12,
  			9
  		]
  	},
  	meat_on_bone: {
  		a: "Meat on Bone",
  		b: "1F356",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"good",
  			"food",
  			"drumstick"
  		],
  		k: [
  			7,
  			24
  		]
  	},
  	arrow_upper_left: {
  		a: "North West Arrow",
  		b: "2196-FE0F",
  		c: "2196",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"point",
  			"direction",
  			"diagonal",
  			"northwest"
  		],
  		k: [
  			46,
  			35
  		],
  		o: 1
  	},
  	"flag-bm": {
  		a: "Bermuda Flag",
  		b: "1F1E7-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			6
  		]
  	},
  	sleepy: {
  		a: "Sleepy Face",
  		b: "1F62A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"tired",
  			"rest",
  			"nap"
  		],
  		k: [
  			31,
  			14
  		]
  	},
  	bowling: {
  		a: "Bowling",
  		b: "1F3B3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"fun",
  			"play"
  		],
  		k: [
  			9,
  			13
  		]
  	},
  	factory: {
  		a: "Factory",
  		b: "1F3ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"industry",
  			"pollution",
  			"smoke"
  		],
  		k: [
  			12,
  			10
  		]
  	},
  	desktop_computer: {
  		a: "Desktop Computer",
  		b: "1F5A5-FE0F",
  		c: "1F5A5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"technology",
  			"computing",
  			"screen"
  		],
  		k: [
  			29,
  			51
  		],
  		o: 7
  	},
  	elephant: {
  		a: "Elephant",
  		b: "1F418",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"nose",
  			"th",
  			"circus"
  		],
  		k: [
  			13,
  			2
  		]
  	},
  	rhinoceros: {
  		a: "Rhinoceros",
  		b: "1F98F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"horn"
  		],
  		k: [
  			42,
  			39
  		],
  		o: 9
  	},
  	arrow_up_down: {
  		a: "Up Down Arrow",
  		b: "2195-FE0F",
  		c: "2195",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"direction",
  			"way",
  			"vertical"
  		],
  		k: [
  			46,
  			34
  		],
  		o: 1
  	},
  	cricket_bat_and_ball: {
  		a: "Cricket Bat and Ball",
  		b: "1F3CF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			11,
  			32
  		],
  		o: 8
  	},
  	printer: {
  		a: "Printer",
  		b: "1F5A8-FE0F",
  		c: "1F5A8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"paper",
  			"ink"
  		],
  		k: [
  			30,
  			0
  		],
  		o: 7
  	},
  	poultry_leg: {
  		a: "Poultry Leg",
  		b: "1F357",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"meat",
  			"drumstick",
  			"bird",
  			"chicken",
  			"turkey"
  		],
  		k: [
  			7,
  			25
  		]
  	},
  	tired_face: {
  		a: "Tired Face",
  		b: "1F62B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sick",
  			"whine",
  			"upset",
  			"frustrated"
  		],
  		k: [
  			31,
  			15
  		]
  	},
  	japanese_castle: {
  		a: "Japanese Castle",
  		b: "1F3EF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"building"
  		],
  		k: [
  			12,
  			12
  		]
  	},
  	"flag-bn": {
  		a: "Brunei Flag",
  		b: "1F1E7-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			1,
  			7
  		]
  	},
  	field_hockey_stick_and_ball: {
  		a: "Field Hockey Stick and Ball",
  		b: "1F3D1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			11,
  			34
  		],
  		o: 8
  	},
  	sleeping: {
  		a: "Sleeping Face",
  		b: "1F634",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"tired",
  			"sleepy",
  			"night",
  			"zzz"
  		],
  		k: [
  			31,
  			24
  		]
  	},
  	left_right_arrow: {
  		a: "Left Right Arrow",
  		b: "2194-FE0F",
  		c: "2194",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"direction",
  			"horizontal",
  			"sideways"
  		],
  		k: [
  			46,
  			33
  		],
  		o: 1
  	},
  	keyboard: {
  		a: "Keyboard",
  		b: "2328-FE0F",
  		c: "2328",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"technology",
  			"computer",
  			"type",
  			"input",
  			"text"
  		],
  		k: [
  			46,
  			43
  		],
  		o: 1
  	},
  	european_castle: {
  		a: "European Castle",
  		b: "1F3F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"royalty",
  			"history"
  		],
  		k: [
  			12,
  			13
  		]
  	},
  	mouse: {
  		a: "Mouse Face",
  		b: "1F42D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"cheese_wedge",
  			"rodent"
  		],
  		k: [
  			13,
  			23
  		]
  	},
  	"flag-bo": {
  		a: "Bolivia Flag",
  		b: "1F1E7-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			8
  		]
  	},
  	cut_of_meat: {
  		a: "Cut of Meat",
  		b: "1F969",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			21
  		],
  		o: 10
  	},
  	ice_hockey_stick_and_puck: {
  		a: "Ice Hockey Stick and Puck",
  		b: "1F3D2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			11,
  			35
  		],
  		o: 8
  	},
  	mouse2: {
  		a: "Mouse",
  		b: "1F401",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"rodent"
  		],
  		k: [
  			12,
  			31
  		]
  	},
  	three_button_mouse: {
  		a: "Three Button Mouse",
  		b: "1F5B1-FE0F",
  		c: "1F5B1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			30,
  			1
  		],
  		o: 7
  	},
  	leftwards_arrow_with_hook: {
  		a: "Leftwards Arrow with Hook",
  		b: "21A9-FE0F",
  		c: "21A9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"back",
  			"return",
  			"blue-square",
  			"undo",
  			"enter"
  		],
  		k: [
  			46,
  			39
  		],
  		o: 1
  	},
  	bacon: {
  		a: "Bacon",
  		b: "1F953",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"breakfast",
  			"pork",
  			"pig",
  			"meat"
  		],
  		k: [
  			41,
  			51
  		],
  		o: 9
  	},
  	relieved: {
  		a: "Relieved Face",
  		b: "1F60C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"relaxed",
  			"phew",
  			"massage",
  			"happiness"
  		],
  		k: [
  			30,
  			36
  		]
  	},
  	"flag-bq": {
  		a: "Caribbean Netherlands Flag",
  		b: "1F1E7-1F1F6",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			9
  		]
  	},
  	wedding: {
  		a: "Wedding",
  		b: "1F492",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"affection",
  			"couple",
  			"marriage",
  			"bride",
  			"groom"
  		],
  		k: [
  			24,
  			44
  		]
  	},
  	tokyo_tower: {
  		a: "Tokyo Tower",
  		b: "1F5FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"japanese"
  		],
  		k: [
  			30,
  			20
  		]
  	},
  	arrow_right_hook: {
  		a: "Rightwards Arrow with Hook",
  		b: "21AA-FE0F",
  		c: "21AA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"return",
  			"rotate",
  			"direction"
  		],
  		k: [
  			46,
  			40
  		],
  		o: 1
  	},
  	hamburger: {
  		a: "Hamburger",
  		b: "1F354",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"meat",
  			"fast food",
  			"beef",
  			"cheeseburger",
  			"mcdonalds",
  			"burger king"
  		],
  		k: [
  			7,
  			22
  		]
  	},
  	stuck_out_tongue: {
  		a: "Face with Stuck-out Tongue",
  		b: "1F61B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"prank",
  			"childish",
  			"playful",
  			"mischievous",
  			"smile",
  			"tongue"
  		],
  		k: [
  			30,
  			51
  		],
  		l: [
  			":p",
  			":-p",
  			":P",
  			":-P",
  			":b",
  			":-b"
  		],
  		m: ":p"
  	},
  	trackball: {
  		a: "Trackball",
  		b: "1F5B2-FE0F",
  		c: "1F5B2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"technology",
  			"trackpad"
  		],
  		k: [
  			30,
  			2
  		],
  		o: 7
  	},
  	"flag-br": {
  		a: "Brazil Flag",
  		b: "1F1E7-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			10
  		]
  	},
  	rat: {
  		a: "Rat",
  		b: "1F400",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"mouse",
  			"rodent"
  		],
  		k: [
  			12,
  			30
  		]
  	},
  	table_tennis_paddle_and_ball: {
  		a: "Table Tennis Paddle and Ball",
  		b: "1F3D3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			11,
  			36
  		],
  		o: 8
  	},
  	minidisc: {
  		a: "Minidisc",
  		b: "1F4BD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"technology",
  			"record",
  			"data",
  			"disk",
  			"90s"
  		],
  		k: [
  			25,
  			40
  		]
  	},
  	stuck_out_tongue_winking_eye: {
  		a: "Face with Stuck-out Tongue and Winking Eye",
  		b: "1F61C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"prank",
  			"childish",
  			"playful",
  			"mischievous",
  			"smile",
  			"wink",
  			"tongue"
  		],
  		k: [
  			31,
  			0
  		],
  		l: [
  			";p",
  			";-p",
  			";b",
  			";-b",
  			";P",
  			";-P"
  		],
  		m: ";p"
  	},
  	fries: {
  		a: "French Fries",
  		b: "1F35F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"chips",
  			"snack",
  			"fast food"
  		],
  		k: [
  			7,
  			33
  		]
  	},
  	badminton_racquet_and_shuttlecock: {
  		a: "Badminton Racquet and Shuttlecock",
  		b: "1F3F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			12,
  			22
  		],
  		o: 8
  	},
  	statue_of_liberty: {
  		a: "Statue of Liberty",
  		b: "1F5FD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"american",
  			"newyork"
  		],
  		k: [
  			30,
  			21
  		]
  	},
  	"flag-bs": {
  		a: "Bahamas Flag",
  		b: "1F1E7-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			11
  		]
  	},
  	arrow_heading_up: {
  		a: "Arrow Pointing Rightwards Then Curving Upwards",
  		b: "2934-FE0F",
  		c: "2934",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"direction",
  			"top"
  		],
  		k: [
  			50,
  			15
  		],
  		o: 3
  	},
  	hamster: {
  		a: "Hamster Face",
  		b: "1F439",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature"
  		],
  		k: [
  			13,
  			35
  		]
  	},
  	stuck_out_tongue_closed_eyes: {
  		a: "Face with Stuck-out Tongue and Tightly-Closed Eyes",
  		b: "1F61D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"prank",
  			"playful",
  			"mischievous",
  			"smile",
  			"tongue"
  		],
  		k: [
  			31,
  			1
  		]
  	},
  	pizza: {
  		a: "Slice of Pizza",
  		b: "1F355",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"party"
  		],
  		k: [
  			7,
  			23
  		]
  	},
  	boxing_glove: {
  		a: "Boxing Glove",
  		b: "1F94A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sports",
  			"fighting"
  		],
  		k: [
  			41,
  			45
  		],
  		o: 9
  	},
  	floppy_disk: {
  		a: "Floppy Disk",
  		b: "1F4BE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"oldschool",
  			"technology",
  			"save",
  			"90s",
  			"80s"
  		],
  		k: [
  			25,
  			41
  		]
  	},
  	arrow_heading_down: {
  		a: "Arrow Pointing Rightwards Then Curving Downwards",
  		b: "2935-FE0F",
  		c: "2935",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"direction",
  			"bottom"
  		],
  		k: [
  			50,
  			16
  		],
  		o: 3
  	},
  	"flag-bt": {
  		a: "Bhutan Flag",
  		b: "1F1E7-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			12
  		]
  	},
  	rabbit: {
  		a: "Rabbit Face",
  		b: "1F430",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"pet",
  			"spring",
  			"magic",
  			"bunny"
  		],
  		k: [
  			13,
  			26
  		]
  	},
  	church: {
  		a: "Church",
  		b: "26EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"building",
  			"religion",
  			"christ"
  		],
  		k: [
  			48,
  			37
  		],
  		o: 5
  	},
  	drooling_face: {
  		a: "Drooling Face",
  		b: "1F924",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face"
  		],
  		k: [
  			38,
  			27
  		],
  		o: 9
  	},
  	"flag-bv": {
  		a: "Bouvet Island Flag",
  		b: "1F1E7-1F1FB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			13
  		]
  	},
  	mosque: {
  		a: "Mosque",
  		b: "1F54C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"islam",
  			"worship",
  			"minaret"
  		],
  		k: [
  			28,
  			15
  		],
  		o: 8
  	},
  	rabbit2: {
  		a: "Rabbit",
  		b: "1F407",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"pet",
  			"magic",
  			"spring"
  		],
  		k: [
  			12,
  			37
  		]
  	},
  	hotdog: {
  		a: "Hot Dog",
  		b: "1F32D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"frankfurter"
  		],
  		k: [
  			6,
  			35
  		],
  		o: 8
  	},
  	martial_arts_uniform: {
  		a: "Martial Arts Uniform",
  		b: "1F94B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"judo",
  			"karate",
  			"taekwondo"
  		],
  		k: [
  			41,
  			46
  		],
  		o: 9
  	},
  	arrows_clockwise: {
  		a: "Clockwise Downwards and Upwards Open Circle Arrows",
  		b: "1F503",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sync",
  			"cycle",
  			"round",
  			"repeat"
  		],
  		k: [
  			27,
  			5
  		]
  	},
  	cd: {
  		a: "Optical Disc",
  		b: "1F4BF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"technology",
  			"dvd",
  			"disk",
  			"disc",
  			"90s"
  		],
  		k: [
  			25,
  			42
  		]
  	},
  	arrows_counterclockwise: {
  		a: "Anticlockwise Downwards and Upwards Open Circle Arrows",
  		b: "1F504",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"sync",
  			"cycle"
  		],
  		k: [
  			27,
  			6
  		]
  	},
  	sandwich: {
  		a: "Sandwich",
  		b: "1F96A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			22
  		],
  		o: 10
  	},
  	chipmunk: {
  		a: "Chipmunk",
  		b: "1F43F-FE0F",
  		c: "1F43F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"rodent",
  			"squirrel"
  		],
  		k: [
  			13,
  			41
  		],
  		o: 7
  	},
  	synagogue: {
  		a: "Synagogue",
  		b: "1F54D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"judaism",
  			"worship",
  			"temple",
  			"jewish"
  		],
  		k: [
  			28,
  			16
  		],
  		o: 8
  	},
  	unamused: {
  		a: "Unamused Face",
  		b: "1F612",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"indifference",
  			"bored",
  			"straight face",
  			"serious",
  			"sarcasm"
  		],
  		k: [
  			30,
  			42
  		],
  		m: ":("
  	},
  	goal_net: {
  		a: "Goal Net",
  		b: "1F945",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sports"
  		],
  		k: [
  			41,
  			41
  		],
  		o: 9
  	},
  	"flag-bw": {
  		a: "Botswana Flag",
  		b: "1F1E7-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			14
  		]
  	},
  	dvd: {
  		a: "Dvd",
  		b: "1F4C0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"cd",
  			"disk",
  			"disc"
  		],
  		k: [
  			25,
  			43
  		]
  	},
  	hedgehog: {
  		a: "Hedgehog",
  		b: "1F994",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			44
  		],
  		o: 10
  	},
  	dart: {
  		a: "Direct Hit",
  		b: "1F3AF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"game",
  			"play",
  			"bar"
  		],
  		k: [
  			9,
  			9
  		]
  	},
  	taco: {
  		a: "Taco",
  		b: "1F32E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"mexican"
  		],
  		k: [
  			6,
  			36
  		],
  		o: 8
  	},
  	back: {
  		a: "Back with Leftwards Arrow Above",
  		b: "1F519",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"arrow",
  			"words",
  			"return"
  		],
  		k: [
  			27,
  			27
  		]
  	},
  	"flag-by": {
  		a: "Belarus Flag",
  		b: "1F1E7-1F1FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			15
  		]
  	},
  	shinto_shrine: {
  		a: "Shinto Shrine",
  		b: "26E9-FE0F",
  		c: "26E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"temple",
  			"japan",
  			"kyoto"
  		],
  		k: [
  			48,
  			36
  		],
  		o: 5
  	},
  	movie_camera: {
  		a: "Movie Camera",
  		b: "1F3A5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"film",
  			"record"
  		],
  		k: [
  			8,
  			51
  		]
  	},
  	sweat: {
  		a: "Face with Cold Sweat",
  		b: "1F613",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"hot",
  			"sad",
  			"tired",
  			"exercise"
  		],
  		k: [
  			30,
  			43
  		]
  	},
  	burrito: {
  		a: "Burrito",
  		b: "1F32F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"mexican"
  		],
  		k: [
  			6,
  			37
  		],
  		o: 8
  	},
  	"flag-bz": {
  		a: "Belize Flag",
  		b: "1F1E7-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			16
  		]
  	},
  	pensive: {
  		a: "Pensive Face",
  		b: "1F614",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"sad",
  			"depressed",
  			"upset"
  		],
  		k: [
  			30,
  			44
  		]
  	},
  	kaaba: {
  		a: "Kaaba",
  		b: "1F54B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"mecca",
  			"mosque",
  			"islam"
  		],
  		k: [
  			28,
  			14
  		],
  		o: 8
  	},
  	film_frames: {
  		a: "Film Frames",
  		b: "1F39E-FE0F",
  		c: "1F39E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			8,
  			44
  		],
  		o: 7
  	},
  	bat: {
  		a: "Bat",
  		b: "1F987",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"blind",
  			"vampire"
  		],
  		k: [
  			42,
  			31
  		],
  		o: 9
  	},
  	golf: {
  		a: "Flag in Hole",
  		b: "26F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"business",
  			"flag",
  			"hole",
  			"summer"
  		],
  		k: [
  			48,
  			41
  		],
  		o: 5
  	},
  	end: {
  		a: "End with Leftwards Arrow Above",
  		b: "1F51A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"words",
  			"arrow"
  		],
  		k: [
  			27,
  			28
  		]
  	},
  	film_projector: {
  		a: "Film Projector",
  		b: "1F4FD-FE0F",
  		c: "1F4FD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"video",
  			"tape",
  			"record",
  			"movie"
  		],
  		k: [
  			27,
  			0
  		],
  		o: 7
  	},
  	bear: {
  		a: "Bear Face",
  		b: "1F43B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"wild"
  		],
  		k: [
  			13,
  			37
  		]
  	},
  	ice_skate: {
  		a: "Ice Skate",
  		b: "26F8-FE0F",
  		c: "26F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sports"
  		],
  		k: [
  			48,
  			45
  		],
  		o: 5
  	},
  	fountain: {
  		a: "Fountain",
  		b: "26F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"summer",
  			"water",
  			"fresh"
  		],
  		k: [
  			48,
  			40
  		],
  		o: 5
  	},
  	confused: {
  		a: "Confused Face",
  		b: "1F615",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"indifference",
  			"huh",
  			"weird",
  			"hmmm",
  			":/"
  		],
  		k: [
  			30,
  			45
  		],
  		l: [
  			":\\",
  			":-\\",
  			":/",
  			":-/"
  		]
  	},
  	"flag-ca": {
  		a: "Canada Flag",
  		b: "1F1E8-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			17
  		]
  	},
  	on: {
  		a: "On with Exclamation Mark with Left Right Arrow Above",
  		b: "1F51B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"arrow",
  			"words"
  		],
  		k: [
  			27,
  			29
  		]
  	},
  	stuffed_flatbread: {
  		a: "Stuffed Flatbread",
  		b: "1F959",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"flatbread",
  			"stuffed",
  			"gyro"
  		],
  		k: [
  			42,
  			5
  		],
  		o: 9
  	},
  	soon: {
  		a: "Soon with Rightwards Arrow Above",
  		b: "1F51C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"arrow",
  			"words"
  		],
  		k: [
  			27,
  			30
  		]
  	},
  	upside_down_face: {
  		a: "Upside-Down Face",
  		b: "1F643",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"flipped",
  			"silly",
  			"smile"
  		],
  		k: [
  			31,
  			39
  		],
  		o: 8
  	},
  	fishing_pole_and_fish: {
  		a: "Fishing Pole and Fish",
  		b: "1F3A3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"hobby",
  			"summer"
  		],
  		k: [
  			8,
  			49
  		]
  	},
  	tent: {
  		a: "Tent",
  		b: "26FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"camping",
  			"outdoors"
  		],
  		k: [
  			49,
  			12
  		],
  		o: 5
  	},
  	clapper: {
  		a: "Clapper Board",
  		b: "1F3AC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"movie",
  			"film",
  			"record"
  		],
  		k: [
  			9,
  			6
  		]
  	},
  	egg: {
  		a: "Egg",
  		b: "1F95A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"chicken",
  			"breakfast"
  		],
  		k: [
  			42,
  			6
  		],
  		o: 9
  	},
  	"flag-cc": {
  		a: "Cocos (keeling) Islands Flag",
  		b: "1F1E8-1F1E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			18
  		]
  	},
  	koala: {
  		a: "Koala",
  		b: "1F428",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature"
  		],
  		k: [
  			13,
  			18
  		]
  	},
  	foggy: {
  		a: "Foggy",
  		b: "1F301",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"mountain"
  		],
  		k: [
  			5,
  			45
  		]
  	},
  	tv: {
  		a: "Television",
  		b: "1F4FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"technology",
  			"program",
  			"oldschool",
  			"show",
  			"television"
  		],
  		k: [
  			26,
  			49
  		]
  	},
  	panda_face: {
  		a: "Panda Face",
  		b: "1F43C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"panda"
  		],
  		k: [
  			13,
  			38
  		]
  	},
  	fried_egg: {
  		a: "Cooking",
  		b: "1F373",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"breakfast",
  			"kitchen",
  			"egg"
  		],
  		k: [
  			8,
  			1
  		],
  		n: [
  			"cooking"
  		]
  	},
  	top: {
  		a: "Top with Upwards Arrow Above",
  		b: "1F51D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"words",
  			"blue-square"
  		],
  		k: [
  			27,
  			31
  		]
  	},
  	"flag-cd": {
  		a: "Congo - Kinshasa Flag",
  		b: "1F1E8-1F1E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			19
  		]
  	},
  	money_mouth_face: {
  		a: "Money-Mouth Face",
  		b: "1F911",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"rich",
  			"dollar",
  			"money"
  		],
  		k: [
  			37,
  			25
  		],
  		o: 8
  	},
  	running_shirt_with_sash: {
  		a: "Running Shirt with Sash",
  		b: "1F3BD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"play",
  			"pageant"
  		],
  		k: [
  			9,
  			23
  		]
  	},
  	astonished: {
  		a: "Astonished Face",
  		b: "1F632",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"xox",
  			"surprised",
  			"poisoned"
  		],
  		k: [
  			31,
  			22
  		]
  	},
  	feet: {
  		a: "Paw Prints",
  		b: "1F43E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			13,
  			40
  		],
  		n: [
  			"paw_prints"
  		]
  	},
  	camera: {
  		a: "Camera",
  		b: "1F4F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"gadgets",
  			"photography"
  		],
  		k: [
  			26,
  			46
  		]
  	},
  	"flag-cf": {
  		a: "Central African Republic Flag",
  		b: "1F1E8-1F1EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			20
  		]
  	},
  	place_of_worship: {
  		a: "Place of Worship",
  		b: "1F6D0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"religion",
  			"church",
  			"temple",
  			"prayer"
  		],
  		k: [
  			37,
  			5
  		],
  		o: 8
  	},
  	night_with_stars: {
  		a: "Night with Stars",
  		b: "1F303",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"evening",
  			"city",
  			"downtown"
  		],
  		k: [
  			5,
  			47
  		]
  	},
  	ski: {
  		a: "Ski and Ski Boot",
  		b: "1F3BF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"winter",
  			"cold",
  			"snow"
  		],
  		k: [
  			9,
  			25
  		]
  	},
  	shallow_pan_of_food: {
  		a: "Shallow Pan of Food",
  		b: "1F958",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"cooking",
  			"casserole",
  			"paella"
  		],
  		k: [
  			42,
  			4
  		],
  		o: 9
  	},
  	camera_with_flash: {
  		a: "Camera with Flash",
  		b: "1F4F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			26,
  			47
  		],
  		o: 7
  	},
  	sunrise_over_mountains: {
  		a: "Sunrise over Mountains",
  		b: "1F304",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"view",
  			"vacation",
  			"photo"
  		],
  		k: [
  			5,
  			48
  		]
  	},
  	turkey: {
  		a: "Turkey",
  		b: "1F983",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"bird"
  		],
  		k: [
  			42,
  			27
  		],
  		o: 8
  	},
  	white_frowning_face: {
  		a: "White Frowning Face",
  		b: "2639-FE0F",
  		c: "2639",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			47,
  			40
  		],
  		o: 1
  	},
  	"flag-cg": {
  		a: "Congo - Brazzaville Flag",
  		b: "1F1E8-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			21
  		]
  	},
  	stew: {
  		a: "Pot of Food",
  		b: "1F372",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"meat",
  			"soup"
  		],
  		k: [
  			8,
  			0
  		]
  	},
  	sled: {
  		a: "Sled",
  		b: "1F6F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			22
  		],
  		o: 10
  	},
  	atom_symbol: {
  		a: "Atom Symbol",
  		b: "269B-FE0F",
  		c: "269B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"science",
  			"physics",
  			"chemistry"
  		],
  		k: [
  			48,
  			18
  		],
  		o: 4
  	},
  	curling_stone: {
  		a: "Curling Stone",
  		b: "1F94C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			41,
  			47
  		],
  		o: 10
  	},
  	slightly_frowning_face: {
  		a: "Slightly Frowning Face",
  		b: "1F641",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"frowning",
  			"disappointed",
  			"sad",
  			"upset"
  		],
  		k: [
  			31,
  			37
  		],
  		o: 7
  	},
  	sunrise: {
  		a: "Sunrise",
  		b: "1F305",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"morning",
  			"view",
  			"vacation",
  			"photo"
  		],
  		k: [
  			5,
  			49
  		]
  	},
  	om_symbol: {
  		a: "Om Symbol",
  		b: "1F549-FE0F",
  		c: "1F549",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			28,
  			12
  		],
  		o: 7
  	},
  	chicken: {
  		a: "Chicken",
  		b: "1F414",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cluck",
  			"nature",
  			"bird"
  		],
  		k: [
  			12,
  			50
  		]
  	},
  	bowl_with_spoon: {
  		a: "Bowl with Spoon",
  		b: "1F963",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			15
  		],
  		o: 10
  	},
  	"flag-ch": {
  		a: "Switzerland Flag",
  		b: "1F1E8-1F1ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			22
  		]
  	},
  	video_camera: {
  		a: "Video Camera",
  		b: "1F4F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"film",
  			"record"
  		],
  		k: [
  			26,
  			48
  		]
  	},
  	video_game: {
  		a: "Video Game",
  		b: "1F3AE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"play",
  			"console",
  			"PS4",
  			"controller"
  		],
  		k: [
  			9,
  			8
  		]
  	},
  	rooster: {
  		a: "Rooster",
  		b: "1F413",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"chicken"
  		],
  		k: [
  			12,
  			49
  		]
  	},
  	vhs: {
  		a: "Videocassette",
  		b: "1F4FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"record",
  			"video",
  			"oldschool",
  			"90s",
  			"80s"
  		],
  		k: [
  			26,
  			51
  		]
  	},
  	city_sunset: {
  		a: "Cityscape at Dusk",
  		b: "1F306",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"evening",
  			"sky",
  			"buildings"
  		],
  		k: [
  			5,
  			50
  		]
  	},
  	confounded: {
  		a: "Confounded Face",
  		b: "1F616",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"confused",
  			"sick",
  			"unwell",
  			"oops",
  			":S"
  		],
  		k: [
  			30,
  			46
  		]
  	},
  	green_salad: {
  		a: "Green Salad",
  		b: "1F957",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"healthy",
  			"lettuce"
  		],
  		k: [
  			42,
  			3
  		],
  		o: 9
  	},
  	star_of_david: {
  		a: "Star of David",
  		b: "2721-FE0F",
  		c: "2721",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"judaism"
  		],
  		k: [
  			49,
  			47
  		],
  		o: 1
  	},
  	"flag-ci": {
  		a: "Côte D’ivoire Flag",
  		b: "1F1E8-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			23
  		]
  	},
  	popcorn: {
  		a: "Popcorn",
  		b: "1F37F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"food",
  			"movie theater",
  			"films",
  			"snack"
  		],
  		k: [
  			8,
  			13
  		],
  		o: 8
  	},
  	city_sunrise: {
  		a: "Sunset over Buildings",
  		b: "1F307",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"good morning",
  			"dawn"
  		],
  		k: [
  			5,
  			51
  		]
  	},
  	disappointed: {
  		a: "Disappointed Face",
  		b: "1F61E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"sad",
  			"upset",
  			"depressed",
  			":("
  		],
  		k: [
  			31,
  			2
  		],
  		l: [
  			"):",
  			":(",
  			":-("
  		],
  		m: ":("
  	},
  	mag: {
  		a: "Left-Pointing Magnifying Glass",
  		b: "1F50D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"search",
  			"zoom",
  			"find",
  			"detective"
  		],
  		k: [
  			27,
  			15
  		]
  	},
  	hatching_chick: {
  		a: "Hatching Chick",
  		b: "1F423",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"chicken",
  			"egg",
  			"born",
  			"baby",
  			"bird"
  		],
  		k: [
  			13,
  			13
  		]
  	},
  	joystick: {
  		a: "Joystick",
  		b: "1F579-FE0F",
  		c: "1F579",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"game",
  			"play"
  		],
  		k: [
  			29,
  			20
  		],
  		o: 7
  	},
  	wheel_of_dharma: {
  		a: "Wheel of Dharma",
  		b: "2638-FE0F",
  		c: "2638",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"hinduism",
  			"buddhism",
  			"sikhism",
  			"jainism"
  		],
  		k: [
  			47,
  			39
  		],
  		o: 1
  	},
  	"flag-ck": {
  		a: "Cook Islands Flag",
  		b: "1F1E8-1F1F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			24
  		]
  	},
  	canned_food: {
  		a: "Canned Food",
  		b: "1F96B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			23
  		],
  		o: 10
  	},
  	worried: {
  		a: "Worried Face",
  		b: "1F61F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"concern",
  			"nervous",
  			":("
  		],
  		k: [
  			31,
  			3
  		]
  	},
  	baby_chick: {
  		a: "Baby Chick",
  		b: "1F424",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"chicken",
  			"bird"
  		],
  		k: [
  			13,
  			14
  		]
  	},
  	"flag-cl": {
  		a: "Chile Flag",
  		b: "1F1E8-1F1F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			25
  		]
  	},
  	game_die: {
  		a: "Game Die",
  		b: "1F3B2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"dice",
  			"random",
  			"tabletop",
  			"play",
  			"luck"
  		],
  		k: [
  			9,
  			12
  		]
  	},
  	mag_right: {
  		a: "Right-Pointing Magnifying Glass",
  		b: "1F50E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"search",
  			"zoom",
  			"find",
  			"detective"
  		],
  		k: [
  			27,
  			16
  		]
  	},
  	yin_yang: {
  		a: "Yin Yang",
  		b: "262F-FE0F",
  		c: "262F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"balance"
  		],
  		k: [
  			47,
  			38
  		],
  		o: 1
  	},
  	bridge_at_night: {
  		a: "Bridge at Night",
  		b: "1F309",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"sanfrancisco"
  		],
  		k: [
  			6,
  			1
  		]
  	},
  	spades: {
  		a: "Black Spade Suit",
  		b: "2660-FE0F",
  		c: "2660",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"poker",
  			"cards",
  			"suits",
  			"magic"
  		],
  		k: [
  			48,
  			4
  		],
  		o: 1
  	},
  	hatched_chick: {
  		a: "Front-Facing Baby Chick",
  		b: "1F425",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"chicken",
  			"baby",
  			"bird"
  		],
  		k: [
  			13,
  			15
  		]
  	},
  	"flag-cm": {
  		a: "Cameroon Flag",
  		b: "1F1E8-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			26
  		]
  	},
  	latin_cross: {
  		a: "Latin Cross",
  		b: "271D-FE0F",
  		c: "271D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"christianity"
  		],
  		k: [
  			49,
  			46
  		],
  		o: 1
  	},
  	triumph: {
  		a: "Face with Look of Triumph",
  		b: "1F624",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"gas",
  			"phew",
  			"proud",
  			"pride"
  		],
  		k: [
  			31,
  			8
  		]
  	},
  	hotsprings: {
  		a: "Hot Springs",
  		b: "2668-FE0F",
  		c: "2668",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"bath",
  			"warm",
  			"relax"
  		],
  		k: [
  			48,
  			8
  		],
  		o: 1
  	},
  	bento: {
  		a: "Bento Box",
  		b: "1F371",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"japanese",
  			"box"
  		],
  		k: [
  			7,
  			51
  		]
  	},
  	microscope: {
  		a: "Microscope",
  		b: "1F52C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"laboratory",
  			"experiment",
  			"zoomin",
  			"science",
  			"study"
  		],
  		k: [
  			27,
  			46
  		]
  	},
  	cry: {
  		a: "Crying Face",
  		b: "1F622",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"tears",
  			"sad",
  			"depressed",
  			"upset",
  			":'("
  		],
  		k: [
  			31,
  			6
  		],
  		l: [
  			":'("
  		],
  		m: ":'("
  	},
  	bird: {
  		a: "Bird",
  		b: "1F426",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"fly",
  			"tweet",
  			"spring"
  		],
  		k: [
  			13,
  			16
  		]
  	},
  	cn: {
  		a: "China Flag",
  		b: "1F1E8-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"china",
  			"chinese",
  			"prc",
  			"flag",
  			"country",
  			"nation",
  			"banner"
  		],
  		k: [
  			1,
  			27
  		],
  		n: [
  			"flag-cn"
  		]
  	},
  	telescope: {
  		a: "Telescope",
  		b: "1F52D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stars",
  			"space",
  			"zoom",
  			"science",
  			"astronomy"
  		],
  		k: [
  			27,
  			47
  		]
  	},
  	rice_cracker: {
  		a: "Rice Cracker",
  		b: "1F358",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"japanese"
  		],
  		k: [
  			7,
  			26
  		]
  	},
  	hearts: {
  		a: "Black Heart Suit",
  		b: "2665-FE0F",
  		c: "2665",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"poker",
  			"cards",
  			"magic",
  			"suits"
  		],
  		k: [
  			48,
  			6
  		],
  		o: 1
  	},
  	orthodox_cross: {
  		a: "Orthodox Cross",
  		b: "2626-FE0F",
  		c: "2626",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"suppedaneum",
  			"religion"
  		],
  		k: [
  			47,
  			35
  		],
  		o: 1
  	},
  	milky_way: {
  		a: "Milky Way",
  		b: "1F30C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"space",
  			"stars"
  		],
  		k: [
  			6,
  			4
  		]
  	},
  	rice_ball: {
  		a: "Rice Ball",
  		b: "1F359",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"japanese"
  		],
  		k: [
  			7,
  			27
  		]
  	},
  	satellite_antenna: {
  		a: "Satellite Antenna",
  		b: "1F4E1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			26,
  			24
  		]
  	},
  	"flag-co": {
  		a: "Colombia Flag",
  		b: "1F1E8-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			28
  		]
  	},
  	carousel_horse: {
  		a: "Carousel Horse",
  		b: "1F3A0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"carnival"
  		],
  		k: [
  			8,
  			46
  		]
  	},
  	sob: {
  		a: "Loudly Crying Face",
  		b: "1F62D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"cry",
  			"tears",
  			"sad",
  			"upset",
  			"depressed"
  		],
  		k: [
  			31,
  			17
  		],
  		m: ":'("
  	},
  	diamonds: {
  		a: "Black Diamond Suit",
  		b: "2666-FE0F",
  		c: "2666",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"poker",
  			"cards",
  			"magic",
  			"suits"
  		],
  		k: [
  			48,
  			7
  		],
  		o: 1
  	},
  	star_and_crescent: {
  		a: "Star and Crescent",
  		b: "262A-FE0F",
  		c: "262A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"islam"
  		],
  		k: [
  			47,
  			36
  		],
  		o: 1
  	},
  	penguin: {
  		a: "Penguin",
  		b: "1F427",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature"
  		],
  		k: [
  			13,
  			17
  		]
  	},
  	dove_of_peace: {
  		a: "Dove of Peace",
  		b: "1F54A-FE0F",
  		c: "1F54A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			28,
  			13
  		],
  		o: 7
  	},
  	"flag-cp": {
  		a: "Clipperton Island Flag",
  		b: "1F1E8-1F1F5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			1,
  			29
  		]
  	},
  	ferris_wheel: {
  		a: "Ferris Wheel",
  		b: "1F3A1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"photo",
  			"carnival",
  			"londoneye"
  		],
  		k: [
  			8,
  			47
  		]
  	},
  	clubs: {
  		a: "Black Club Suit",
  		b: "2663-FE0F",
  		c: "2663",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"poker",
  			"cards",
  			"magic",
  			"suits"
  		],
  		k: [
  			48,
  			5
  		],
  		o: 1
  	},
  	peace_symbol: {
  		a: "Peace Symbol",
  		b: "262E-FE0F",
  		c: "262E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"hippie"
  		],
  		k: [
  			47,
  			37
  		],
  		o: 1
  	},
  	candle: {
  		a: "Candle",
  		b: "1F56F-FE0F",
  		c: "1F56F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"fire",
  			"wax"
  		],
  		k: [
  			28,
  			42
  		],
  		o: 7
  	},
  	frowning: {
  		a: "Frowning Face with Open Mouth",
  		b: "1F626",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"aw",
  			"what"
  		],
  		k: [
  			31,
  			10
  		]
  	},
  	rice: {
  		a: "Cooked Rice",
  		b: "1F35A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"china",
  			"asian"
  		],
  		k: [
  			7,
  			28
  		]
  	},
  	"flag-cr": {
  		a: "Costa Rica Flag",
  		b: "1F1E8-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			30
  		]
  	},
  	roller_coaster: {
  		a: "Roller Coaster",
  		b: "1F3A2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"carnival",
  			"playground",
  			"photo",
  			"fun"
  		],
  		k: [
  			8,
  			48
  		]
  	},
  	menorah_with_nine_branches: {
  		a: "Menorah with Nine Branches",
  		b: "1F54E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			28,
  			17
  		],
  		o: 8
  	},
  	black_joker: {
  		a: "Playing Card Black Joker",
  		b: "1F0CF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"poker",
  			"cards",
  			"game",
  			"play",
  			"magic"
  		],
  		k: [
  			0,
  			15
  		]
  	},
  	eagle: {
  		a: "Eagle",
  		b: "1F985",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"bird"
  		],
  		k: [
  			42,
  			29
  		],
  		o: 9
  	},
  	curry: {
  		a: "Curry and Rice",
  		b: "1F35B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"spicy",
  			"hot",
  			"indian"
  		],
  		k: [
  			7,
  			29
  		]
  	},
  	bulb: {
  		a: "Electric Light Bulb",
  		b: "1F4A1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"light",
  			"electricity",
  			"idea"
  		],
  		k: [
  			25,
  			7
  		]
  	},
  	anguished: {
  		a: "Anguished Face",
  		b: "1F627",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"stunned",
  			"nervous"
  		],
  		k: [
  			31,
  			11
  		],
  		l: [
  			"D:"
  		]
  	},
  	"flag-cu": {
  		a: "Cuba Flag",
  		b: "1F1E8-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			31
  		]
  	},
  	barber: {
  		a: "Barber Pole",
  		b: "1F488",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"hair",
  			"salon",
  			"style"
  		],
  		k: [
  			24,
  			34
  		]
  	},
  	duck: {
  		a: "Duck",
  		b: "1F986",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"bird",
  			"mallard"
  		],
  		k: [
  			42,
  			30
  		],
  		o: 9
  	},
  	six_pointed_star: {
  		a: "Six Pointed Star with Middle Dot",
  		b: "1F52F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"purple-square",
  			"religion",
  			"jewish",
  			"hexagram"
  		],
  		k: [
  			27,
  			49
  		]
  	},
  	ramen: {
  		a: "Steaming Bowl",
  		b: "1F35C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"japanese",
  			"noodle",
  			"chopsticks"
  		],
  		k: [
  			7,
  			30
  		]
  	},
  	flashlight: {
  		a: "Electric Torch",
  		b: "1F526",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"dark",
  			"camping",
  			"sight",
  			"night"
  		],
  		k: [
  			27,
  			40
  		]
  	},
  	mahjong: {
  		a: "Mahjong Tile Red Dragon",
  		b: "1F004",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"game",
  			"play",
  			"chinese",
  			"kanji"
  		],
  		k: [
  			0,
  			14
  		],
  		o: 5
  	},
  	fearful: {
  		a: "Fearful Face",
  		b: "1F628",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"scared",
  			"terrified",
  			"nervous",
  			"oops",
  			"huh"
  		],
  		k: [
  			31,
  			12
  		]
  	},
  	aries: {
  		a: "Aries",
  		b: "2648",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"purple-square",
  			"zodiac",
  			"astrology"
  		],
  		k: [
  			47,
  			44
  		],
  		o: 1
  	},
  	spaghetti: {
  		a: "Spaghetti",
  		b: "1F35D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"italian",
  			"noodle"
  		],
  		k: [
  			7,
  			31
  		]
  	},
  	circus_tent: {
  		a: "Circus Tent",
  		b: "1F3AA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"festival",
  			"carnival",
  			"party"
  		],
  		k: [
  			9,
  			4
  		]
  	},
  	izakaya_lantern: {
  		a: "Izakaya Lantern",
  		b: "1F3EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"light",
  			"paper",
  			"halloween",
  			"spooky"
  		],
  		k: [
  			12,
  			11
  		],
  		n: [
  			"lantern"
  		]
  	},
  	"flag-cv": {
  		a: "Cape Verde Flag",
  		b: "1F1E8-1F1FB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			32
  		]
  	},
  	weary: {
  		a: "Weary Face",
  		b: "1F629",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"tired",
  			"sleepy",
  			"sad",
  			"frustrated",
  			"upset"
  		],
  		k: [
  			31,
  			13
  		]
  	},
  	flower_playing_cards: {
  		a: "Flower Playing Cards",
  		b: "1F3B4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"game",
  			"sunset",
  			"red"
  		],
  		k: [
  			9,
  			14
  		]
  	},
  	owl: {
  		a: "Owl",
  		b: "1F989",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"bird",
  			"hoot"
  		],
  		k: [
  			42,
  			33
  		],
  		o: 9
  	},
  	performing_arts: {
  		a: "Performing Arts",
  		b: "1F3AD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"acting",
  			"theater",
  			"drama"
  		],
  		k: [
  			9,
  			7
  		]
  	},
  	frog: {
  		a: "Frog Face",
  		b: "1F438",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"croak",
  			"toad"
  		],
  		k: [
  			13,
  			34
  		]
  	},
  	"flag-cw": {
  		a: "Curaçao Flag",
  		b: "1F1E8-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			33
  		]
  	},
  	notebook_with_decorative_cover: {
  		a: "Notebook with Decorative Cover",
  		b: "1F4D4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"classroom",
  			"notes",
  			"record",
  			"paper",
  			"study"
  		],
  		k: [
  			26,
  			11
  		]
  	},
  	exploding_head: {
  		a: "Shocked Face with Exploding Head",
  		b: "1F92F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			39,
  			3
  		],
  		n: [
  			"shocked_face_with_exploding_head"
  		],
  		o: 10
  	},
  	taurus: {
  		a: "Taurus",
  		b: "2649",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"purple-square",
  			"sign",
  			"zodiac",
  			"astrology"
  		],
  		k: [
  			47,
  			45
  		],
  		o: 1
  	},
  	sweet_potato: {
  		a: "Roasted Sweet Potato",
  		b: "1F360",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"nature"
  		],
  		k: [
  			7,
  			34
  		]
  	},
  	closed_book: {
  		a: "Closed Book",
  		b: "1F4D5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"read",
  			"library",
  			"knowledge",
  			"textbook",
  			"learn"
  		],
  		k: [
  			26,
  			12
  		]
  	},
  	gemini: {
  		a: "Gemini",
  		b: "264A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"zodiac",
  			"purple-square",
  			"astrology"
  		],
  		k: [
  			47,
  			46
  		],
  		o: 1
  	},
  	frame_with_picture: {
  		a: "Frame with Picture",
  		b: "1F5BC-FE0F",
  		c: "1F5BC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			30,
  			3
  		],
  		o: 7
  	},
  	"flag-cx": {
  		a: "Christmas Island Flag",
  		b: "1F1E8-1F1FD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			34
  		]
  	},
  	grimacing: {
  		a: "Grimacing Face",
  		b: "1F62C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"grimace",
  			"teeth"
  		],
  		k: [
  			31,
  			16
  		]
  	},
  	crocodile: {
  		a: "Crocodile",
  		b: "1F40A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"reptile",
  			"lizard",
  			"alligator"
  		],
  		k: [
  			12,
  			40
  		]
  	},
  	oden: {
  		a: "Oden",
  		b: "1F362",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"japanese"
  		],
  		k: [
  			7,
  			36
  		]
  	},
  	"flag-cy": {
  		a: "Cyprus Flag",
  		b: "1F1E8-1F1FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			35
  		]
  	},
  	book: {
  		a: "Open Book",
  		b: "1F4D6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			26,
  			13
  		],
  		n: [
  			"open_book"
  		]
  	},
  	turtle: {
  		a: "Turtle",
  		b: "1F422",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"slow",
  			"nature",
  			"tortoise"
  		],
  		k: [
  			13,
  			12
  		]
  	},
  	art: {
  		a: "Artist Palette",
  		b: "1F3A8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"design",
  			"paint",
  			"draw",
  			"colors"
  		],
  		k: [
  			9,
  			2
  		]
  	},
  	sushi: {
  		a: "Sushi",
  		b: "1F363",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"fish",
  			"japanese",
  			"rice"
  		],
  		k: [
  			7,
  			37
  		]
  	},
  	cold_sweat: {
  		a: "Face with Open Mouth and Cold Sweat",
  		b: "1F630",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"nervous",
  			"sweat"
  		],
  		k: [
  			31,
  			20
  		]
  	},
  	cancer: {
  		a: "Cancer",
  		b: "264B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"zodiac",
  			"purple-square",
  			"astrology"
  		],
  		k: [
  			47,
  			47
  		],
  		o: 1
  	},
  	fried_shrimp: {
  		a: "Fried Shrimp",
  		b: "1F364",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"animal",
  			"appetizer",
  			"summer"
  		],
  		k: [
  			7,
  			38
  		]
  	},
  	slot_machine: {
  		a: "Slot Machine",
  		b: "1F3B0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"bet",
  			"gamble",
  			"vegas",
  			"fruit machine",
  			"luck",
  			"casino"
  		],
  		k: [
  			9,
  			10
  		]
  	},
  	scream: {
  		a: "Face Screaming in Fear",
  		b: "1F631",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"munch",
  			"scared",
  			"omg"
  		],
  		k: [
  			31,
  			21
  		]
  	},
  	green_book: {
  		a: "Green Book",
  		b: "1F4D7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"read",
  			"library",
  			"knowledge",
  			"study"
  		],
  		k: [
  			26,
  			14
  		]
  	},
  	leo: {
  		a: "Leo",
  		b: "264C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"purple-square",
  			"zodiac",
  			"astrology"
  		],
  		k: [
  			47,
  			48
  		],
  		o: 1
  	},
  	"flag-cz": {
  		a: "Czechia Flag",
  		b: "1F1E8-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			36
  		]
  	},
  	lizard: {
  		a: "Lizard",
  		b: "1F98E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"reptile"
  		],
  		k: [
  			42,
  			38
  		],
  		o: 9
  	},
  	virgo: {
  		a: "Virgo",
  		b: "264D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"zodiac",
  			"purple-square",
  			"astrology"
  		],
  		k: [
  			47,
  			49
  		],
  		o: 1
  	},
  	steam_locomotive: {
  		a: "Steam Locomotive",
  		b: "1F682",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle",
  			"train"
  		],
  		k: [
  			34,
  			10
  		]
  	},
  	de: {
  		a: "Germany Flag",
  		b: "1F1E9-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"german",
  			"nation",
  			"flag",
  			"country",
  			"banner"
  		],
  		k: [
  			1,
  			37
  		],
  		n: [
  			"flag-de"
  		]
  	},
  	flushed: {
  		a: "Flushed Face",
  		b: "1F633",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"blush",
  			"shy",
  			"flattered"
  		],
  		k: [
  			31,
  			23
  		]
  	},
  	blue_book: {
  		a: "Blue Book",
  		b: "1F4D8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"read",
  			"library",
  			"knowledge",
  			"learn",
  			"study"
  		],
  		k: [
  			26,
  			15
  		]
  	},
  	snake: {
  		a: "Snake",
  		b: "1F40D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"evil",
  			"nature",
  			"hiss",
  			"python"
  		],
  		k: [
  			12,
  			43
  		]
  	},
  	fish_cake: {
  		a: "Fish Cake with Swirl Design",
  		b: "1F365",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"japan",
  			"sea",
  			"beach",
  			"narutomaki",
  			"pink",
  			"swirl",
  			"kamaboko",
  			"surimi",
  			"ramen"
  		],
  		k: [
  			7,
  			39
  		]
  	},
  	railway_car: {
  		a: "Railway Car",
  		b: "1F683",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle"
  		],
  		k: [
  			34,
  			11
  		]
  	},
  	dango: {
  		a: "Dango",
  		b: "1F361",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"dessert",
  			"sweet",
  			"japanese",
  			"barbecue",
  			"meat"
  		],
  		k: [
  			7,
  			35
  		]
  	},
  	orange_book: {
  		a: "Orange Book",
  		b: "1F4D9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"read",
  			"library",
  			"knowledge",
  			"textbook",
  			"study"
  		],
  		k: [
  			26,
  			16
  		]
  	},
  	libra: {
  		a: "Libra",
  		b: "264E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"purple-square",
  			"zodiac",
  			"astrology"
  		],
  		k: [
  			47,
  			50
  		],
  		o: 1
  	},
  	dragon_face: {
  		a: "Dragon Face",
  		b: "1F432",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"myth",
  			"nature",
  			"chinese",
  			"green"
  		],
  		k: [
  			13,
  			28
  		]
  	},
  	"flag-dg": {
  		a: "Diego Garcia Flag",
  		b: "1F1E9-1F1EC",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			38
  		]
  	},
  	zany_face: {
  		a: "Grinning Face with One Large and One Small Eye",
  		b: "1F92A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			50
  		],
  		n: [
  			"grinning_face_with_one_large_and_one_small_eye"
  		],
  		o: 10
  	},
  	books: {
  		a: "Books",
  		b: "1F4DA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"literature",
  			"library",
  			"study"
  		],
  		k: [
  			26,
  			17
  		]
  	},
  	dragon: {
  		a: "Dragon",
  		b: "1F409",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"myth",
  			"nature",
  			"chinese",
  			"green"
  		],
  		k: [
  			12,
  			39
  		]
  	},
  	"flag-dj": {
  		a: "Djibouti Flag",
  		b: "1F1E9-1F1EF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			39
  		]
  	},
  	dumpling: {
  		a: "Dumpling",
  		b: "1F95F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			11
  		],
  		o: 10
  	},
  	dizzy_face: {
  		a: "Dizzy Face",
  		b: "1F635",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"spent",
  			"unconscious",
  			"xox",
  			"dizzy"
  		],
  		k: [
  			31,
  			25
  		]
  	},
  	scorpius: {
  		a: "Scorpius",
  		b: "264F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"zodiac",
  			"purple-square",
  			"astrology",
  			"scorpio"
  		],
  		k: [
  			47,
  			51
  		],
  		o: 1
  	},
  	bullettrain_side: {
  		a: "High-Speed Train",
  		b: "1F684",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle"
  		],
  		k: [
  			34,
  			12
  		]
  	},
  	bullettrain_front: {
  		a: "High-Speed Train with Bullet Nose",
  		b: "1F685",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle",
  			"speed",
  			"fast",
  			"public",
  			"travel"
  		],
  		k: [
  			34,
  			13
  		]
  	},
  	notebook: {
  		a: "Notebook",
  		b: "1F4D3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stationery",
  			"record",
  			"notes",
  			"paper",
  			"study"
  		],
  		k: [
  			26,
  			10
  		]
  	},
  	fortune_cookie: {
  		a: "Fortune Cookie",
  		b: "1F960",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			12
  		],
  		o: 10
  	},
  	sagittarius: {
  		a: "Sagittarius",
  		b: "2650",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"zodiac",
  			"purple-square",
  			"astrology"
  		],
  		k: [
  			48,
  			0
  		],
  		o: 1
  	},
  	sauropod: {
  		a: "Sauropod",
  		b: "1F995",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			45
  		],
  		o: 10
  	},
  	"flag-dk": {
  		a: "Denmark Flag",
  		b: "1F1E9-1F1F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			40
  		]
  	},
  	rage: {
  		a: "Pouting Face",
  		b: "1F621",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"angry",
  			"mad",
  			"hate",
  			"despise"
  		],
  		k: [
  			31,
  			5
  		]
  	},
  	ledger: {
  		a: "Ledger",
  		b: "1F4D2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"notes",
  			"paper"
  		],
  		k: [
  			26,
  			9
  		]
  	},
  	angry: {
  		a: "Angry Face",
  		b: "1F620",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"mad",
  			"face",
  			"annoyed",
  			"frustrated"
  		],
  		k: [
  			31,
  			4
  		],
  		l: [
  			">:(",
  			">:-("
  		]
  	},
  	"t-rex": {
  		a: "T-Rex",
  		b: "1F996",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			46
  		],
  		o: 10
  	},
  	capricorn: {
  		a: "Capricorn",
  		b: "2651",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"zodiac",
  			"purple-square",
  			"astrology"
  		],
  		k: [
  			48,
  			1
  		],
  		o: 1
  	},
  	takeout_box: {
  		a: "Takeout Box",
  		b: "1F961",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			13
  		],
  		o: 10
  	},
  	"flag-dm": {
  		a: "Dominica Flag",
  		b: "1F1E9-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			41
  		]
  	},
  	train2: {
  		a: "Train",
  		b: "1F686",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle"
  		],
  		k: [
  			34,
  			14
  		]
  	},
  	page_with_curl: {
  		a: "Page with Curl",
  		b: "1F4C3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"documents",
  			"office",
  			"paper"
  		],
  		k: [
  			25,
  			46
  		]
  	},
  	whale: {
  		a: "Spouting Whale",
  		b: "1F433",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"sea",
  			"ocean"
  		],
  		k: [
  			13,
  			29
  		]
  	},
  	face_with_symbols_on_mouth: {
  		a: "Serious Face with Symbols Covering Mouth",
  		b: "1F92C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			39,
  			0
  		],
  		n: [
  			"serious_face_with_symbols_covering_mouth"
  		],
  		o: 10
  	},
  	"flag-do": {
  		a: "Dominican Republic Flag",
  		b: "1F1E9-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			42
  		]
  	},
  	metro: {
  		a: "Metro",
  		b: "1F687",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"blue-square",
  			"mrt",
  			"underground",
  			"tube"
  		],
  		k: [
  			34,
  			15
  		]
  	},
  	icecream: {
  		a: "Soft Ice Cream",
  		b: "1F366",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"hot",
  			"dessert",
  			"summer"
  		],
  		k: [
  			7,
  			40
  		]
  	},
  	aquarius: {
  		a: "Aquarius",
  		b: "2652",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"purple-square",
  			"zodiac",
  			"astrology"
  		],
  		k: [
  			48,
  			2
  		],
  		o: 1
  	},
  	"flag-dz": {
  		a: "Algeria Flag",
  		b: "1F1E9-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			43
  		]
  	},
  	whale2: {
  		a: "Whale",
  		b: "1F40B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"sea",
  			"ocean"
  		],
  		k: [
  			12,
  			41
  		]
  	},
  	mask: {
  		a: "Face with Medical Mask",
  		b: "1F637",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"sick",
  			"ill",
  			"disease"
  		],
  		k: [
  			31,
  			27
  		]
  	},
  	scroll: {
  		a: "Scroll",
  		b: "1F4DC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"documents",
  			"ancient",
  			"history",
  			"paper"
  		],
  		k: [
  			26,
  			19
  		]
  	},
  	shaved_ice: {
  		a: "Shaved Ice",
  		b: "1F367",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"hot",
  			"dessert",
  			"summer"
  		],
  		k: [
  			7,
  			41
  		]
  	},
  	pisces: {
  		a: "Pisces",
  		b: "2653",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"purple-square",
  			"sign",
  			"zodiac",
  			"astrology"
  		],
  		k: [
  			48,
  			3
  		],
  		o: 1
  	},
  	light_rail: {
  		a: "Light Rail",
  		b: "1F688",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle"
  		],
  		k: [
  			34,
  			16
  		]
  	},
  	dolphin: {
  		a: "Dolphin",
  		b: "1F42C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"fish",
  			"sea",
  			"ocean",
  			"flipper",
  			"fins",
  			"beach"
  		],
  		k: [
  			13,
  			22
  		],
  		n: [
  			"flipper"
  		]
  	},
  	face_with_thermometer: {
  		a: "Face with Thermometer",
  		b: "1F912",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sick",
  			"temperature",
  			"thermometer",
  			"cold",
  			"fever"
  		],
  		k: [
  			37,
  			26
  		],
  		o: 8
  	},
  	"flag-ea": {
  		a: "Ceuta & Melilla Flag",
  		b: "1F1EA-1F1E6",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			44
  		]
  	},
  	ophiuchus: {
  		a: "Ophiuchus",
  		b: "26CE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sign",
  			"purple-square",
  			"constellation",
  			"astrology"
  		],
  		k: [
  			48,
  			31
  		]
  	},
  	station: {
  		a: "Station",
  		b: "1F689",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle",
  			"public"
  		],
  		k: [
  			34,
  			17
  		]
  	},
  	ice_cream: {
  		a: "Ice Cream",
  		b: "1F368",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"hot",
  			"dessert"
  		],
  		k: [
  			7,
  			42
  		]
  	},
  	page_facing_up: {
  		a: "Page Facing Up",
  		b: "1F4C4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"documents",
  			"office",
  			"paper",
  			"information"
  		],
  		k: [
  			25,
  			47
  		]
  	},
  	doughnut: {
  		a: "Doughnut",
  		b: "1F369",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"dessert",
  			"snack",
  			"sweet",
  			"donut"
  		],
  		k: [
  			7,
  			43
  		]
  	},
  	face_with_head_bandage: {
  		a: "Face with Head-Bandage",
  		b: "1F915",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"injured",
  			"clumsy",
  			"bandage",
  			"hurt"
  		],
  		k: [
  			37,
  			29
  		],
  		o: 8
  	},
  	fish: {
  		a: "Fish",
  		b: "1F41F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"food",
  			"nature"
  		],
  		k: [
  			13,
  			9
  		]
  	},
  	newspaper: {
  		a: "Newspaper",
  		b: "1F4F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"press",
  			"headline"
  		],
  		k: [
  			26,
  			39
  		]
  	},
  	tram: {
  		a: "Tram",
  		b: "1F68A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle"
  		],
  		k: [
  			34,
  			18
  		]
  	},
  	"flag-ec": {
  		a: "Ecuador Flag",
  		b: "1F1EA-1F1E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			45
  		]
  	},
  	twisted_rightwards_arrows: {
  		a: "Twisted Rightwards Arrows",
  		b: "1F500",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"shuffle",
  			"music",
  			"random"
  		],
  		k: [
  			27,
  			2
  		]
  	},
  	"flag-ee": {
  		a: "Estonia Flag",
  		b: "1F1EA-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			46
  		]
  	},
  	cookie: {
  		a: "Cookie",
  		b: "1F36A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"snack",
  			"oreo",
  			"chocolate",
  			"sweet",
  			"dessert"
  		],
  		k: [
  			7,
  			44
  		]
  	},
  	monorail: {
  		a: "Monorail",
  		b: "1F69D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle"
  		],
  		k: [
  			34,
  			37
  		]
  	},
  	tropical_fish: {
  		a: "Tropical Fish",
  		b: "1F420",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"swim",
  			"ocean",
  			"beach",
  			"nemo"
  		],
  		k: [
  			13,
  			10
  		]
  	},
  	rolled_up_newspaper: {
  		a: "Rolled Up Newspaper",
  		b: "1F5DE-FE0F",
  		c: "1F5DE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			30,
  			12
  		],
  		o: 7
  	},
  	nauseated_face: {
  		a: "Nauseated Face",
  		b: "1F922",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"vomit",
  			"gross",
  			"green",
  			"sick",
  			"throw up",
  			"ill"
  		],
  		k: [
  			38,
  			25
  		],
  		o: 9
  	},
  	repeat: {
  		a: "Clockwise Rightwards and Leftwards Open Circle Arrows",
  		b: "1F501",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"loop",
  			"record"
  		],
  		k: [
  			27,
  			3
  		]
  	},
  	bookmark_tabs: {
  		a: "Bookmark Tabs",
  		b: "1F4D1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"favorite",
  			"save",
  			"order",
  			"tidy"
  		],
  		k: [
  			26,
  			8
  		]
  	},
  	repeat_one: {
  		a: "Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay",
  		b: "1F502",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"loop"
  		],
  		k: [
  			27,
  			4
  		]
  	},
  	"flag-eg": {
  		a: "Egypt Flag",
  		b: "1F1EA-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			47
  		]
  	},
  	mountain_railway: {
  		a: "Mountain Railway",
  		b: "1F69E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle"
  		],
  		k: [
  			34,
  			38
  		]
  	},
  	birthday: {
  		a: "Birthday Cake",
  		b: "1F382",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"dessert",
  			"cake"
  		],
  		k: [
  			8,
  			16
  		]
  	},
  	blowfish: {
  		a: "Blowfish",
  		b: "1F421",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"nature",
  			"food",
  			"sea",
  			"ocean"
  		],
  		k: [
  			13,
  			11
  		]
  	},
  	face_vomiting: {
  		a: "Face with Open Mouth Vomiting",
  		b: "1F92E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			39,
  			2
  		],
  		n: [
  			"face_with_open_mouth_vomiting"
  		],
  		o: 10
  	},
  	arrow_forward: {
  		a: "Black Right-Pointing Triangle",
  		b: "25B6-FE0F",
  		c: "25B6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"right",
  			"direction",
  			"play"
  		],
  		k: [
  			47,
  			10
  		],
  		o: 1
  	},
  	bookmark: {
  		a: "Bookmark",
  		b: "1F516",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"favorite",
  			"label",
  			"save"
  		],
  		k: [
  			27,
  			24
  		]
  	},
  	"flag-eh": {
  		a: "Western Sahara Flag",
  		b: "1F1EA-1F1ED",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			48
  		]
  	},
  	shark: {
  		a: "Shark",
  		b: "1F988",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"fish",
  			"sea",
  			"ocean",
  			"jaws",
  			"fins",
  			"beach"
  		],
  		k: [
  			42,
  			32
  		],
  		o: 9
  	},
  	train: {
  		a: "Tram Car",
  		b: "1F68B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle",
  			"carriage",
  			"public",
  			"travel"
  		],
  		k: [
  			34,
  			19
  		]
  	},
  	sneezing_face: {
  		a: "Sneezing Face",
  		b: "1F927",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"gesundheit",
  			"sneeze",
  			"sick",
  			"allergy"
  		],
  		k: [
  			38,
  			47
  		],
  		o: 9
  	},
  	cake: {
  		a: "Shortcake",
  		b: "1F370",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"dessert"
  		],
  		k: [
  			7,
  			50
  		]
  	},
  	bus: {
  		a: "Bus",
  		b: "1F68C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"car",
  			"vehicle",
  			"transportation"
  		],
  		k: [
  			34,
  			20
  		]
  	},
  	pie: {
  		a: "Pie",
  		b: "1F967",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			19
  		],
  		o: 10
  	},
  	innocent: {
  		a: "Smiling Face with Halo",
  		b: "1F607",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"angel",
  			"heaven",
  			"halo"
  		],
  		k: [
  			30,
  			31
  		]
  	},
  	fast_forward: {
  		a: "Black Right-Pointing Double Triangle",
  		b: "23E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"play",
  			"speed",
  			"continue"
  		],
  		k: [
  			46,
  			45
  		]
  	},
  	label: {
  		a: "Label",
  		b: "1F3F7-FE0F",
  		c: "1F3F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sale",
  			"tag"
  		],
  		k: [
  			12,
  			21
  		],
  		o: 7
  	},
  	octopus: {
  		a: "Octopus",
  		b: "1F419",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"creature",
  			"ocean",
  			"sea",
  			"nature",
  			"beach"
  		],
  		k: [
  			13,
  			3
  		]
  	},
  	"flag-er": {
  		a: "Eritrea Flag",
  		b: "1F1EA-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			49
  		]
  	},
  	black_right_pointing_double_triangle_with_vertical_bar: {
  		a: "Black Right Pointing Double Triangle with Vertical Bar",
  		b: "23ED-FE0F",
  		c: "23ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			49
  		]
  	},
  	chocolate_bar: {
  		a: "Chocolate Bar",
  		b: "1F36B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"snack",
  			"dessert",
  			"sweet"
  		],
  		k: [
  			7,
  			45
  		]
  	},
  	oncoming_bus: {
  		a: "Oncoming Bus",
  		b: "1F68D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vehicle",
  			"transportation"
  		],
  		k: [
  			34,
  			21
  		]
  	},
  	shell: {
  		a: "Spiral Shell",
  		b: "1F41A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"sea",
  			"beach"
  		],
  		k: [
  			13,
  			4
  		]
  	},
  	face_with_cowboy_hat: {
  		a: "Face with Cowboy Hat",
  		b: "1F920",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			23
  		],
  		o: 9
  	},
  	moneybag: {
  		a: "Money Bag",
  		b: "1F4B0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"dollar",
  			"payment",
  			"coins",
  			"sale"
  		],
  		k: [
  			25,
  			27
  		]
  	},
  	es: {
  		a: "Spain Flag",
  		b: "1F1EA-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"spain",
  			"flag",
  			"nation",
  			"country",
  			"banner"
  		],
  		k: [
  			1,
  			50
  		],
  		n: [
  			"flag-es"
  		]
  	},
  	crab: {
  		a: "Crab",
  		b: "1F980",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"crustacean"
  		],
  		k: [
  			42,
  			24
  		],
  		o: 8
  	},
  	yen: {
  		a: "Banknote with Yen Sign",
  		b: "1F4B4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"money",
  			"sales",
  			"japanese",
  			"dollar",
  			"currency"
  		],
  		k: [
  			25,
  			31
  		]
  	},
  	"flag-et": {
  		a: "Ethiopia Flag",
  		b: "1F1EA-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			1,
  			51
  		]
  	},
  	clown_face: {
  		a: "Clown Face",
  		b: "1F921",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face"
  		],
  		k: [
  			38,
  			24
  		],
  		o: 9
  	},
  	black_right_pointing_triangle_with_double_vertical_bar: {
  		a: "Black Right Pointing Triangle with Double Vertical Bar",
  		b: "23EF-FE0F",
  		c: "23EF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			51
  		]
  	},
  	trolleybus: {
  		a: "Trolleybus",
  		b: "1F68E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"bart",
  			"transportation",
  			"vehicle"
  		],
  		k: [
  			34,
  			22
  		]
  	},
  	candy: {
  		a: "Candy",
  		b: "1F36C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"snack",
  			"dessert",
  			"sweet",
  			"lolly"
  		],
  		k: [
  			7,
  			46
  		]
  	},
  	lying_face: {
  		a: "Lying Face",
  		b: "1F925",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"lie",
  			"pinocchio"
  		],
  		k: [
  			38,
  			28
  		],
  		o: 9
  	},
  	arrow_backward: {
  		a: "Black Left-Pointing Triangle",
  		b: "25C0-FE0F",
  		c: "25C0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"left",
  			"direction"
  		],
  		k: [
  			47,
  			11
  		],
  		o: 1
  	},
  	dollar: {
  		a: "Banknote with Dollar Sign",
  		b: "1F4B5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"money",
  			"sales",
  			"bill",
  			"currency"
  		],
  		k: [
  			25,
  			32
  		]
  	},
  	shrimp: {
  		a: "Shrimp",
  		b: "1F990",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"ocean",
  			"nature",
  			"seafood"
  		],
  		k: [
  			42,
  			40
  		],
  		o: 9
  	},
  	minibus: {
  		a: "Minibus",
  		b: "1F690",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vehicle",
  			"car",
  			"transportation"
  		],
  		k: [
  			34,
  			24
  		]
  	},
  	"flag-eu": {
  		a: "European Union Flag",
  		b: "1F1EA-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			0
  		]
  	},
  	lollipop: {
  		a: "Lollipop",
  		b: "1F36D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"snack",
  			"candy",
  			"sweet"
  		],
  		k: [
  			7,
  			47
  		]
  	},
  	squid: {
  		a: "Squid",
  		b: "1F991",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"nature",
  			"ocean",
  			"sea"
  		],
  		k: [
  			42,
  			41
  		],
  		o: 9
  	},
  	euro: {
  		a: "Banknote with Euro Sign",
  		b: "1F4B6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"money",
  			"sales",
  			"dollar",
  			"currency"
  		],
  		k: [
  			25,
  			33
  		]
  	},
  	"flag-fi": {
  		a: "Finland Flag",
  		b: "1F1EB-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			1
  		]
  	},
  	ambulance: {
  		a: "Ambulance",
  		b: "1F691",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"health",
  			"911",
  			"hospital"
  		],
  		k: [
  			34,
  			25
  		]
  	},
  	custard: {
  		a: "Custard",
  		b: "1F36E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"dessert",
  			"food"
  		],
  		k: [
  			7,
  			48
  		]
  	},
  	shushing_face: {
  		a: "Face with Finger Covering Closed Lips",
  		b: "1F92B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			51
  		],
  		n: [
  			"face_with_finger_covering_closed_lips"
  		],
  		o: 10
  	},
  	rewind: {
  		a: "Black Left-Pointing Double Triangle",
  		b: "23EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"play",
  			"blue-square"
  		],
  		k: [
  			46,
  			46
  		]
  	},
  	black_left_pointing_double_triangle_with_vertical_bar: {
  		a: "Black Left Pointing Double Triangle with Vertical Bar",
  		b: "23EE-FE0F",
  		c: "23EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			50
  		]
  	},
  	face_with_hand_over_mouth: {
  		a: "Smiling Face with Smiling Eyes and Hand Covering Mouth",
  		b: "1F92D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			39,
  			1
  		],
  		n: [
  			"smiling_face_with_smiling_eyes_and_hand_covering_mouth"
  		],
  		o: 10
  	},
  	"flag-fj": {
  		a: "Fiji Flag",
  		b: "1F1EB-1F1EF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			2
  		]
  	},
  	honey_pot: {
  		a: "Honey Pot",
  		b: "1F36F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"bees",
  			"sweet",
  			"kitchen"
  		],
  		k: [
  			7,
  			49
  		]
  	},
  	snail: {
  		a: "Snail",
  		b: "1F40C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"slow",
  			"animal",
  			"shell"
  		],
  		k: [
  			12,
  			42
  		]
  	},
  	pound: {
  		a: "Banknote with Pound Sign",
  		b: "1F4B7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"british",
  			"sterling",
  			"money",
  			"sales",
  			"bills",
  			"uk",
  			"england",
  			"currency"
  		],
  		k: [
  			25,
  			34
  		]
  	},
  	fire_engine: {
  		a: "Fire Engine",
  		b: "1F692",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"cars",
  			"vehicle"
  		],
  		k: [
  			34,
  			26
  		]
  	},
  	baby_bottle: {
  		a: "Baby Bottle",
  		b: "1F37C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"food",
  			"container",
  			"milk"
  		],
  		k: [
  			8,
  			10
  		]
  	},
  	"flag-fk": {
  		a: "Falkland Islands Flag",
  		b: "1F1EB-1F1F0",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			3
  		]
  	},
  	butterfly: {
  		a: "Butterfly",
  		b: "1F98B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"insect",
  			"nature",
  			"caterpillar"
  		],
  		k: [
  			42,
  			35
  		],
  		o: 9
  	},
  	money_with_wings: {
  		a: "Money with Wings",
  		b: "1F4B8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"dollar",
  			"bills",
  			"payment",
  			"sale"
  		],
  		k: [
  			25,
  			35
  		]
  	},
  	face_with_monocle: {
  		a: "Face with Monocle",
  		b: "1F9D0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			49
  		],
  		o: 10
  	},
  	police_car: {
  		a: "Police Car",
  		b: "1F693",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vehicle",
  			"cars",
  			"transportation",
  			"law",
  			"legal",
  			"enforcement"
  		],
  		k: [
  			34,
  			27
  		]
  	},
  	arrow_up_small: {
  		a: "Up-Pointing Small Red Triangle",
  		b: "1F53C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"triangle",
  			"direction",
  			"point",
  			"forward",
  			"top"
  		],
  		k: [
  			28,
  			10
  		]
  	},
  	"flag-fm": {
  		a: "Micronesia Flag",
  		b: "1F1EB-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			4
  		]
  	},
  	glass_of_milk: {
  		a: "Glass of Milk",
  		b: "1F95B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			7
  		],
  		o: 9
  	},
  	credit_card: {
  		a: "Credit Card",
  		b: "1F4B3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"money",
  			"sales",
  			"dollar",
  			"bill",
  			"payment",
  			"shopping"
  		],
  		k: [
  			25,
  			30
  		]
  	},
  	oncoming_police_car: {
  		a: "Oncoming Police Car",
  		b: "1F694",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vehicle",
  			"law",
  			"legal",
  			"enforcement",
  			"911"
  		],
  		k: [
  			34,
  			28
  		]
  	},
  	bug: {
  		a: "Bug",
  		b: "1F41B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"insect",
  			"nature",
  			"worm"
  		],
  		k: [
  			13,
  			5
  		]
  	},
  	nerd_face: {
  		a: "Nerd Face",
  		b: "1F913",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"nerdy",
  			"geek",
  			"dork"
  		],
  		k: [
  			37,
  			27
  		],
  		o: 8
  	},
  	arrow_double_up: {
  		a: "Black Up-Pointing Double Triangle",
  		b: "23EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"direction",
  			"top"
  		],
  		k: [
  			46,
  			47
  		]
  	},
  	chart: {
  		a: "Chart with Upwards Trend and Yen Sign",
  		b: "1F4B9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"green-square",
  			"graph",
  			"presentation",
  			"stats"
  		],
  		k: [
  			25,
  			36
  		]
  	},
  	"flag-fo": {
  		a: "Faroe Islands Flag",
  		b: "1F1EB-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			5
  		]
  	},
  	ant: {
  		a: "Ant",
  		b: "1F41C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"insect",
  			"nature",
  			"bug"
  		],
  		k: [
  			13,
  			6
  		]
  	},
  	arrow_down_small: {
  		a: "Down-Pointing Small Red Triangle",
  		b: "1F53D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"direction",
  			"bottom"
  		],
  		k: [
  			28,
  			11
  		]
  	},
  	smiling_imp: {
  		a: "Smiling Face with Horns",
  		b: "1F608",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"devil",
  			"horns"
  		],
  		k: [
  			30,
  			32
  		]
  	},
  	taxi: {
  		a: "Taxi",
  		b: "1F695",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"uber",
  			"vehicle",
  			"cars",
  			"transportation"
  		],
  		k: [
  			34,
  			29
  		]
  	},
  	coffee: {
  		a: "Hot Beverage",
  		b: "2615",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"beverage",
  			"caffeine",
  			"latte",
  			"espresso"
  		],
  		k: [
  			47,
  			24
  		],
  		o: 4
  	},
  	fr: {
  		a: "France Flag",
  		b: "1F1EB-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"banner",
  			"flag",
  			"nation",
  			"france",
  			"french",
  			"country"
  		],
  		k: [
  			2,
  			6
  		],
  		n: [
  			"flag-fr"
  		]
  	},
  	oncoming_taxi: {
  		a: "Oncoming Taxi",
  		b: "1F696",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vehicle",
  			"cars",
  			"uber"
  		],
  		k: [
  			34,
  			30
  		]
  	},
  	arrow_double_down: {
  		a: "Black Down-Pointing Double Triangle",
  		b: "23EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"direction",
  			"bottom"
  		],
  		k: [
  			46,
  			48
  		]
  	},
  	imp: {
  		a: "Imp",
  		b: "1F47F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"devil",
  			"angry",
  			"horns"
  		],
  		k: [
  			22,
  			51
  		]
  	},
  	currency_exchange: {
  		a: "Currency Exchange",
  		b: "1F4B1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"money",
  			"sales",
  			"dollar",
  			"travel"
  		],
  		k: [
  			25,
  			28
  		]
  	},
  	tea: {
  		a: "Teacup Without Handle",
  		b: "1F375",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"drink",
  			"bowl",
  			"breakfast",
  			"green",
  			"british"
  		],
  		k: [
  			8,
  			3
  		]
  	},
  	bee: {
  		a: "Honeybee",
  		b: "1F41D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			13,
  			7
  		],
  		n: [
  			"honeybee"
  		]
  	},
  	heavy_dollar_sign: {
  		a: "Heavy Dollar Sign",
  		b: "1F4B2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"money",
  			"sales",
  			"payment",
  			"currency",
  			"buck"
  		],
  		k: [
  			25,
  			29
  		]
  	},
  	car: {
  		a: "Automobile",
  		b: "1F697",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			34,
  			31
  		],
  		n: [
  			"red_car"
  		]
  	},
  	sake: {
  		a: "Sake Bottle and Cup",
  		b: "1F376",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"wine",
  			"drink",
  			"drunk",
  			"beverage",
  			"japanese",
  			"alcohol",
  			"booze"
  		],
  		k: [
  			8,
  			4
  		]
  	},
  	"flag-ga": {
  		a: "Gabon Flag",
  		b: "1F1EC-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			7
  		]
  	},
  	beetle: {
  		a: "Lady Beetle",
  		b: "1F41E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"insect",
  			"nature",
  			"ladybug"
  		],
  		k: [
  			13,
  			8
  		]
  	},
  	japanese_ogre: {
  		a: "Japanese Ogre",
  		b: "1F479",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"monster",
  			"red",
  			"mask",
  			"halloween",
  			"scary",
  			"creepy",
  			"devil",
  			"demon",
  			"japanese",
  			"ogre"
  		],
  		k: [
  			22,
  			40
  		]
  	},
  	double_vertical_bar: {
  		a: "Double Vertical Bar",
  		b: "23F8-FE0F",
  		c: "23F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			47,
  			4
  		],
  		o: 7
  	},
  	champagne: {
  		a: "Bottle with Popping Cork",
  		b: "1F37E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"drink",
  			"wine",
  			"bottle",
  			"celebration"
  		],
  		k: [
  			8,
  			12
  		],
  		o: 8
  	},
  	japanese_goblin: {
  		a: "Japanese Goblin",
  		b: "1F47A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"red",
  			"evil",
  			"mask",
  			"monster",
  			"scary",
  			"creepy",
  			"japanese",
  			"goblin"
  		],
  		k: [
  			22,
  			41
  		]
  	},
  	black_square_for_stop: {
  		a: "Black Square for Stop",
  		b: "23F9-FE0F",
  		c: "23F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			47,
  			5
  		],
  		o: 7
  	},
  	oncoming_automobile: {
  		a: "Oncoming Automobile",
  		b: "1F698",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"car",
  			"vehicle",
  			"transportation"
  		],
  		k: [
  			34,
  			32
  		]
  	},
  	email: {
  		a: "Envelope",
  		b: "2709-FE0F",
  		c: "2709",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"letter",
  			"postal",
  			"inbox",
  			"communication"
  		],
  		k: [
  			49,
  			17
  		],
  		n: [
  			"envelope"
  		],
  		o: 1
  	},
  	cricket: {
  		a: "Cricket",
  		b: "1F997",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sports"
  		],
  		k: [
  			42,
  			47
  		],
  		o: 10
  	},
  	gb: {
  		a: "United Kingdom Flag",
  		b: "1F1EC-1F1E7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			8
  		],
  		n: [
  			"uk",
  			"flag-gb"
  		]
  	},
  	black_circle_for_record: {
  		a: "Black Circle for Record",
  		b: "23FA-FE0F",
  		c: "23FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			47,
  			6
  		],
  		o: 7
  	},
  	"flag-gd": {
  		a: "Grenada Flag",
  		b: "1F1EC-1F1E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			9
  		]
  	},
  	spider: {
  		a: "Spider",
  		b: "1F577-FE0F",
  		c: "1F577",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"arachnid"
  		],
  		k: [
  			29,
  			18
  		],
  		o: 7
  	},
  	blue_car: {
  		a: "Recreational Vehicle",
  		b: "1F699",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle"
  		],
  		k: [
  			34,
  			33
  		]
  	},
  	skull: {
  		a: "Skull",
  		b: "1F480",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"dead",
  			"skeleton",
  			"creepy",
  			"death"
  		],
  		k: [
  			23,
  			0
  		]
  	},
  	"e-mail": {
  		a: "E-Mail Symbol",
  		b: "1F4E7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"communication",
  			"inbox"
  		],
  		k: [
  			26,
  			30
  		]
  	},
  	wine_glass: {
  		a: "Wine Glass",
  		b: "1F377",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"drink",
  			"beverage",
  			"drunk",
  			"alcohol",
  			"booze"
  		],
  		k: [
  			8,
  			5
  		]
  	},
  	spider_web: {
  		a: "Spider Web",
  		b: "1F578-FE0F",
  		c: "1F578",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"insect",
  			"arachnid",
  			"silk"
  		],
  		k: [
  			29,
  			19
  		],
  		o: 7
  	},
  	cocktail: {
  		a: "Cocktail Glass",
  		b: "1F378",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"drink",
  			"drunk",
  			"alcohol",
  			"beverage",
  			"booze",
  			"mojito"
  		],
  		k: [
  			8,
  			6
  		]
  	},
  	skull_and_crossbones: {
  		a: "Skull and Crossbones",
  		b: "2620-FE0F",
  		c: "2620",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"poison",
  			"danger",
  			"deadly",
  			"scary",
  			"death",
  			"pirate",
  			"evil"
  		],
  		k: [
  			47,
  			32
  		],
  		o: 1
  	},
  	"flag-ge": {
  		a: "Georgia Flag",
  		b: "1F1EC-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			10
  		]
  	},
  	eject: {
  		a: "Eject",
  		b: "23CF-FE0F",
  		c: "23CF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			44
  		],
  		o: 4
  	},
  	truck: {
  		a: "Delivery Truck",
  		b: "1F69A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"cars",
  			"transportation"
  		],
  		k: [
  			34,
  			34
  		]
  	},
  	incoming_envelope: {
  		a: "Incoming Envelope",
  		b: "1F4E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"email",
  			"inbox"
  		],
  		k: [
  			26,
  			31
  		]
  	},
  	tropical_drink: {
  		a: "Tropical Drink",
  		b: "1F379",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"beverage",
  			"cocktail",
  			"summer",
  			"beach",
  			"alcohol",
  			"booze",
  			"mojito"
  		],
  		k: [
  			8,
  			7
  		]
  	},
  	scorpion: {
  		a: "Scorpion",
  		b: "1F982",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"animal",
  			"arachnid"
  		],
  		k: [
  			42,
  			26
  		],
  		o: 8
  	},
  	cinema: {
  		a: "Cinema",
  		b: "1F3A6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"record",
  			"film",
  			"movie",
  			"curtain",
  			"stage",
  			"theater"
  		],
  		k: [
  			9,
  			0
  		]
  	},
  	articulated_lorry: {
  		a: "Articulated Lorry",
  		b: "1F69B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vehicle",
  			"cars",
  			"transportation",
  			"express"
  		],
  		k: [
  			34,
  			35
  		]
  	},
  	envelope_with_arrow: {
  		a: "Envelope with Downwards Arrow Above",
  		b: "1F4E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"email",
  			"communication"
  		],
  		k: [
  			26,
  			32
  		]
  	},
  	ghost: {
  		a: "Ghost",
  		b: "1F47B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"halloween",
  			"spooky",
  			"scary"
  		],
  		k: [
  			22,
  			42
  		]
  	},
  	"flag-gf": {
  		a: "French Guiana Flag",
  		b: "1F1EC-1F1EB",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			11
  		]
  	},
  	bouquet: {
  		a: "Bouquet",
  		b: "1F490",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"flowers",
  			"nature",
  			"spring"
  		],
  		k: [
  			24,
  			42
  		]
  	},
  	tractor: {
  		a: "Tractor",
  		b: "1F69C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vehicle",
  			"car",
  			"farming",
  			"agriculture"
  		],
  		k: [
  			34,
  			36
  		]
  	},
  	beer: {
  		a: "Beer Mug",
  		b: "1F37A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"relax",
  			"beverage",
  			"drink",
  			"drunk",
  			"party",
  			"pub",
  			"summer",
  			"alcohol",
  			"booze"
  		],
  		k: [
  			8,
  			8
  		]
  	},
  	outbox_tray: {
  		a: "Outbox Tray",
  		b: "1F4E4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"inbox",
  			"email"
  		],
  		k: [
  			26,
  			27
  		]
  	},
  	low_brightness: {
  		a: "Low Brightness Symbol",
  		b: "1F505",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sun",
  			"afternoon",
  			"warm",
  			"summer"
  		],
  		k: [
  			27,
  			7
  		]
  	},
  	alien: {
  		a: "Extraterrestrial Alien",
  		b: "1F47D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"UFO",
  			"paul",
  			"weird",
  			"outer_space"
  		],
  		k: [
  			22,
  			49
  		]
  	},
  	"flag-gg": {
  		a: "Guernsey Flag",
  		b: "1F1EC-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			12
  		]
  	},
  	cherry_blossom: {
  		a: "Cherry Blossom",
  		b: "1F338",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"plant",
  			"spring",
  			"flower"
  		],
  		k: [
  			6,
  			46
  		]
  	},
  	inbox_tray: {
  		a: "Inbox Tray",
  		b: "1F4E5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"email",
  			"documents"
  		],
  		k: [
  			26,
  			28
  		]
  	},
  	"flag-gh": {
  		a: "Ghana Flag",
  		b: "1F1EC-1F1ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			13
  		]
  	},
  	bike: {
  		a: "Bicycle",
  		b: "1F6B2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"bicycle",
  			"exercise",
  			"hipster"
  		],
  		k: [
  			35,
  			23
  		]
  	},
  	space_invader: {
  		a: "Alien Monster",
  		b: "1F47E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"game",
  			"arcade",
  			"play"
  		],
  		k: [
  			22,
  			50
  		]
  	},
  	beers: {
  		a: "Clinking Beer Mugs",
  		b: "1F37B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"relax",
  			"beverage",
  			"drink",
  			"drunk",
  			"party",
  			"pub",
  			"summer",
  			"alcohol",
  			"booze"
  		],
  		k: [
  			8,
  			9
  		]
  	},
  	high_brightness: {
  		a: "High Brightness Symbol",
  		b: "1F506",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sun",
  			"light"
  		],
  		k: [
  			27,
  			8
  		]
  	},
  	"package": {
  		a: "Package",
  		b: "1F4E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"mail",
  			"gift",
  			"cardboard",
  			"box",
  			"moving"
  		],
  		k: [
  			26,
  			29
  		]
  	},
  	scooter: {
  		a: "Scooter",
  		b: "1F6F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			19
  		],
  		o: 9
  	},
  	white_flower: {
  		a: "White Flower",
  		b: "1F4AE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"japanese",
  			"spring"
  		],
  		k: [
  			25,
  			25
  		]
  	},
  	clinking_glasses: {
  		a: "Clinking Glasses",
  		b: "1F942",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"beverage",
  			"drink",
  			"party",
  			"alcohol",
  			"celebrate",
  			"cheers"
  		],
  		k: [
  			41,
  			38
  		],
  		o: 9
  	},
  	robot_face: {
  		a: "Robot Face",
  		b: "1F916",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			30
  		],
  		o: 8
  	},
  	signal_strength: {
  		a: "Antenna with Bars",
  		b: "1F4F6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"reception",
  			"phone",
  			"internet",
  			"connection",
  			"wifi",
  			"bluetooth",
  			"bars"
  		],
  		k: [
  			26,
  			45
  		]
  	},
  	"flag-gi": {
  		a: "Gibraltar Flag",
  		b: "1F1EC-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			14
  		]
  	},
  	"flag-gl": {
  		a: "Greenland Flag",
  		b: "1F1EC-1F1F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			15
  		]
  	},
  	motor_scooter: {
  		a: "Motor Scooter",
  		b: "1F6F5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"vehicle",
  			"vespa",
  			"sasha"
  		],
  		k: [
  			37,
  			20
  		],
  		o: 9
  	},
  	mailbox: {
  		a: "Closed Mailbox with Raised Flag",
  		b: "1F4EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"email",
  			"inbox",
  			"communication"
  		],
  		k: [
  			26,
  			34
  		]
  	},
  	vibration_mode: {
  		a: "Vibration Mode",
  		b: "1F4F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"orange-square",
  			"phone"
  		],
  		k: [
  			26,
  			42
  		]
  	},
  	hankey: {
  		a: "Pile of Poo",
  		b: "1F4A9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			25,
  			15
  		],
  		n: [
  			"poop",
  			"shit"
  		]
  	},
  	rosette: {
  		a: "Rosette",
  		b: "1F3F5-FE0F",
  		c: "1F3F5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"flower",
  			"decoration",
  			"military"
  		],
  		k: [
  			12,
  			20
  		],
  		o: 7
  	},
  	tumbler_glass: {
  		a: "Tumbler Glass",
  		b: "1F943",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"drink",
  			"beverage",
  			"drunk",
  			"alcohol",
  			"liquor",
  			"booze",
  			"bourbon",
  			"scotch",
  			"whisky",
  			"glass",
  			"shot"
  		],
  		k: [
  			41,
  			39
  		],
  		o: 9
  	},
  	cup_with_straw: {
  		a: "Cup with Straw",
  		b: "1F964",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			16
  		],
  		o: 10
  	},
  	"flag-gm": {
  		a: "Gambia Flag",
  		b: "1F1EC-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			16
  		]
  	},
  	mailbox_closed: {
  		a: "Closed Mailbox with Lowered Flag",
  		b: "1F4EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"email",
  			"communication",
  			"inbox"
  		],
  		k: [
  			26,
  			33
  		]
  	},
  	mobile_phone_off: {
  		a: "Mobile Phone off",
  		b: "1F4F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"mute",
  			"orange-square",
  			"silence",
  			"quiet"
  		],
  		k: [
  			26,
  			43
  		]
  	},
  	busstop: {
  		a: "Bus Stop",
  		b: "1F68F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"wait"
  		],
  		k: [
  			34,
  			23
  		]
  	},
  	smiley_cat: {
  		a: "Smiling Cat Face with Open Mouth",
  		b: "1F63A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cats",
  			"happy",
  			"smile"
  		],
  		k: [
  			31,
  			30
  		]
  	},
  	rose: {
  		a: "Rose",
  		b: "1F339",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"flowers",
  			"valentines",
  			"love",
  			"spring"
  		],
  		k: [
  			6,
  			47
  		]
  	},
  	motorway: {
  		a: "Motorway",
  		b: "1F6E3-FE0F",
  		c: "1F6E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"road",
  			"cupertino",
  			"interstate",
  			"highway"
  		],
  		k: [
  			37,
  			11
  		],
  		o: 7
  	},
  	smile_cat: {
  		a: "Grinning Cat Face with Smiling Eyes",
  		b: "1F638",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cats",
  			"smile"
  		],
  		k: [
  			31,
  			28
  		]
  	},
  	"flag-gn": {
  		a: "Guinea Flag",
  		b: "1F1EC-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			17
  		]
  	},
  	wilted_flower: {
  		a: "Wilted Flower",
  		b: "1F940",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"plant",
  			"nature",
  			"flower"
  		],
  		k: [
  			41,
  			36
  		],
  		o: 9
  	},
  	mailbox_with_mail: {
  		a: "Open Mailbox with Raised Flag",
  		b: "1F4EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"email",
  			"inbox",
  			"communication"
  		],
  		k: [
  			26,
  			35
  		]
  	},
  	chopsticks: {
  		a: "Chopsticks",
  		b: "1F962",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			14
  		],
  		o: 10
  	},
  	female_sign: {
  		a: "Female Sign",
  		b: "2640-FE0F",
  		c: "2640",
  		d: false,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			47,
  			42
  		],
  		o: 1
  	},
  	mailbox_with_no_mail: {
  		a: "Open Mailbox with Lowered Flag",
  		b: "1F4ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"email",
  			"inbox"
  		],
  		k: [
  			26,
  			36
  		]
  	},
  	knife_fork_plate: {
  		a: "Knife Fork Plate",
  		b: "1F37D-FE0F",
  		c: "1F37D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			8,
  			11
  		],
  		o: 7
  	},
  	hibiscus: {
  		a: "Hibiscus",
  		b: "1F33A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"plant",
  			"vegetable",
  			"flowers",
  			"beach"
  		],
  		k: [
  			6,
  			48
  		]
  	},
  	"flag-gp": {
  		a: "Guadeloupe Flag",
  		b: "1F1EC-1F1F5",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			18
  		]
  	},
  	railway_track: {
  		a: "Railway Track",
  		b: "1F6E4-FE0F",
  		c: "1F6E4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"train",
  			"transportation"
  		],
  		k: [
  			37,
  			12
  		],
  		o: 7
  	},
  	male_sign: {
  		a: "Male Sign",
  		b: "2642-FE0F",
  		c: "2642",
  		d: false,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			47,
  			43
  		],
  		o: 1
  	},
  	joy_cat: {
  		a: "Cat Face with Tears of Joy",
  		b: "1F639",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cats",
  			"haha",
  			"happy",
  			"tears"
  		],
  		k: [
  			31,
  			29
  		]
  	},
  	fuelpump: {
  		a: "Fuel Pump",
  		b: "26FD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"gas station",
  			"petroleum"
  		],
  		k: [
  			49,
  			13
  		],
  		o: 5
  	},
  	sunflower: {
  		a: "Sunflower",
  		b: "1F33B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"plant",
  			"fall"
  		],
  		k: [
  			6,
  			49
  		]
  	},
  	postbox: {
  		a: "Postbox",
  		b: "1F4EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"email",
  			"letter",
  			"envelope"
  		],
  		k: [
  			26,
  			37
  		]
  	},
  	"flag-gq": {
  		a: "Equatorial Guinea Flag",
  		b: "1F1EC-1F1F6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			19
  		]
  	},
  	heart_eyes_cat: {
  		a: "Smiling Cat Face with Heart-Shaped Eyes",
  		b: "1F63B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"love",
  			"like",
  			"affection",
  			"cats",
  			"valentines",
  			"heart"
  		],
  		k: [
  			31,
  			31
  		]
  	},
  	fork_and_knife: {
  		a: "Fork and Knife",
  		b: "1F374",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"cutlery",
  			"kitchen"
  		],
  		k: [
  			8,
  			2
  		]
  	},
  	medical_symbol: {
  		a: "Medical Symbol",
  		b: "2695-FE0F",
  		c: "2695",
  		d: false,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			48,
  			14
  		],
  		n: [
  			"staff_of_aesculapius"
  		],
  		o: 4
  	},
  	recycle: {
  		a: "Black Universal Recycling Symbol",
  		b: "267B-FE0F",
  		c: "267B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"arrow",
  			"environment",
  			"garbage",
  			"trash"
  		],
  		k: [
  			48,
  			9
  		],
  		o: 3
  	},
  	spoon: {
  		a: "Spoon",
  		b: "1F944",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"cutlery",
  			"kitchen",
  			"tableware"
  		],
  		k: [
  			41,
  			40
  		],
  		o: 9
  	},
  	blossom: {
  		a: "Blossom",
  		b: "1F33C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"flowers",
  			"yellow"
  		],
  		k: [
  			6,
  			50
  		]
  	},
  	rotating_light: {
  		a: "Police Cars Revolving Light",
  		b: "1F6A8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"police",
  			"ambulance",
  			"911",
  			"emergency",
  			"alert",
  			"error",
  			"pinged",
  			"law",
  			"legal"
  		],
  		k: [
  			35,
  			13
  		]
  	},
  	smirk_cat: {
  		a: "Cat Face with Wry Smile",
  		b: "1F63C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cats",
  			"smirk"
  		],
  		k: [
  			31,
  			32
  		]
  	},
  	ballot_box_with_ballot: {
  		a: "Ballot Box with Ballot",
  		b: "1F5F3-FE0F",
  		c: "1F5F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			30,
  			17
  		],
  		o: 7
  	},
  	"flag-gr": {
  		a: "Greece Flag",
  		b: "1F1EC-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			20
  		]
  	},
  	kissing_cat: {
  		a: "Kissing Cat Face with Closed Eyes",
  		b: "1F63D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cats",
  			"kiss"
  		],
  		k: [
  			31,
  			33
  		]
  	},
  	pencil2: {
  		a: "Pencil",
  		b: "270F-FE0F",
  		c: "270F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stationery",
  			"write",
  			"paper",
  			"writing",
  			"school",
  			"study"
  		],
  		k: [
  			49,
  			42
  		],
  		o: 1
  	},
  	traffic_light: {
  		a: "Horizontal Traffic Light",
  		b: "1F6A5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"signal"
  		],
  		k: [
  			35,
  			10
  		]
  	},
  	fleur_de_lis: {
  		a: "Fleur De Lis",
  		b: "269C-FE0F",
  		c: "269C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"decorative",
  			"scout"
  		],
  		k: [
  			48,
  			19
  		],
  		o: 4
  	},
  	tulip: {
  		a: "Tulip",
  		b: "1F337",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"flowers",
  			"plant",
  			"nature",
  			"summer",
  			"spring"
  		],
  		k: [
  			6,
  			45
  		]
  	},
  	hocho: {
  		a: "Hocho",
  		b: "1F52A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"knife",
  			"blade",
  			"cutlery",
  			"kitchen",
  			"weapon"
  		],
  		k: [
  			27,
  			44
  		],
  		n: [
  			"knife"
  		]
  	},
  	"flag-gs": {
  		a: "South Georgia & South Sandwich Islands Flag",
  		b: "1F1EC-1F1F8",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			21
  		]
  	},
  	seedling: {
  		a: "Seedling",
  		b: "1F331",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"plant",
  			"nature",
  			"grass",
  			"lawn",
  			"spring"
  		],
  		k: [
  			6,
  			39
  		]
  	},
  	amphora: {
  		a: "Amphora",
  		b: "1F3FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"vase",
  			"jar"
  		],
  		k: [
  			12,
  			24
  		],
  		o: 8
  	},
  	scream_cat: {
  		a: "Weary Cat Face",
  		b: "1F640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cats",
  			"munch",
  			"scared",
  			"scream"
  		],
  		k: [
  			31,
  			36
  		]
  	},
  	vertical_traffic_light: {
  		a: "Vertical Traffic Light",
  		b: "1F6A6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"driving"
  		],
  		k: [
  			35,
  			11
  		]
  	},
  	black_nib: {
  		a: "Black Nib",
  		b: "2712-FE0F",
  		c: "2712",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"pen",
  			"stationery",
  			"writing",
  			"write"
  		],
  		k: [
  			49,
  			43
  		],
  		o: 1
  	},
  	"flag-gt": {
  		a: "Guatemala Flag",
  		b: "1F1EC-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			22
  		]
  	},
  	trident: {
  		a: "Trident Emblem",
  		b: "1F531",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"weapon",
  			"spear"
  		],
  		k: [
  			27,
  			51
  		]
  	},
  	"flag-gu": {
  		a: "Guam Flag",
  		b: "1F1EC-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			23
  		]
  	},
  	name_badge: {
  		a: "Name Badge",
  		b: "1F4DB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fire",
  			"forbid"
  		],
  		k: [
  			26,
  			18
  		]
  	},
  	construction: {
  		a: "Construction Sign",
  		b: "1F6A7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"wip",
  			"progress",
  			"caution",
  			"warning"
  		],
  		k: [
  			35,
  			12
  		]
  	},
  	lower_left_fountain_pen: {
  		a: "Lower Left Fountain Pen",
  		b: "1F58B-FE0F",
  		c: "1F58B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			29,
  			29
  		],
  		o: 7
  	},
  	evergreen_tree: {
  		a: "Evergreen Tree",
  		b: "1F332",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"plant",
  			"nature"
  		],
  		k: [
  			6,
  			40
  		]
  	},
  	crying_cat_face: {
  		a: "Crying Cat Face",
  		b: "1F63F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"tears",
  			"weep",
  			"sad",
  			"cats",
  			"upset",
  			"cry"
  		],
  		k: [
  			31,
  			35
  		]
  	},
  	"flag-gw": {
  		a: "Guinea-Bissau Flag",
  		b: "1F1EC-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			24
  		]
  	},
  	lower_left_ballpoint_pen: {
  		a: "Lower Left Ballpoint Pen",
  		b: "1F58A-FE0F",
  		c: "1F58A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			29,
  			28
  		],
  		o: 7
  	},
  	pouting_cat: {
  		a: "Pouting Cat Face",
  		b: "1F63E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"cats"
  		],
  		k: [
  			31,
  			34
  		]
  	},
  	deciduous_tree: {
  		a: "Deciduous Tree",
  		b: "1F333",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"plant",
  			"nature"
  		],
  		k: [
  			6,
  			41
  		]
  	},
  	octagonal_sign: {
  		a: "Octagonal Sign",
  		b: "1F6D1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			6
  		],
  		o: 9
  	},
  	beginner: {
  		a: "Japanese Symbol for Beginner",
  		b: "1F530",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"badge",
  			"shield"
  		],
  		k: [
  			27,
  			50
  		]
  	},
  	"flag-gy": {
  		a: "Guyana Flag",
  		b: "1F1EC-1F1FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			25
  		]
  	},
  	lower_left_paintbrush: {
  		a: "Lower Left Paintbrush",
  		b: "1F58C-FE0F",
  		c: "1F58C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			29,
  			30
  		],
  		o: 7
  	},
  	o: {
  		a: "Heavy Large Circle",
  		b: "2B55",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"circle",
  			"round"
  		],
  		k: [
  			50,
  			23
  		],
  		o: 5
  	},
  	palm_tree: {
  		a: "Palm Tree",
  		b: "1F334",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"plant",
  			"vegetable",
  			"nature",
  			"summer",
  			"beach",
  			"mojito",
  			"tropical"
  		],
  		k: [
  			6,
  			42
  		]
  	},
  	anchor: {
  		a: "Anchor",
  		b: "2693",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"ship",
  			"ferry",
  			"sea",
  			"boat"
  		],
  		k: [
  			48,
  			12
  		],
  		o: 4
  	},
  	see_no_evil: {
  		a: "See-No-Evil Monkey",
  		b: "1F648",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"monkey",
  			"animal",
  			"nature",
  			"haha"
  		],
  		k: [
  			32,
  			43
  		]
  	},
  	boat: {
  		a: "Sailboat",
  		b: "26F5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			48,
  			43
  		],
  		n: [
  			"sailboat"
  		],
  		o: 5
  	},
  	white_check_mark: {
  		a: "White Heavy Check Mark",
  		b: "2705",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"green-square",
  			"ok",
  			"agree",
  			"vote",
  			"election",
  			"answer",
  			"tick"
  		],
  		k: [
  			49,
  			15
  		]
  	},
  	"flag-hk": {
  		a: "Hong Kong Sar China Flag",
  		b: "1F1ED-1F1F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			26
  		]
  	},
  	lower_left_crayon: {
  		a: "Lower Left Crayon",
  		b: "1F58D-FE0F",
  		c: "1F58D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			29,
  			31
  		],
  		o: 7
  	},
  	hear_no_evil: {
  		a: "Hear-No-Evil Monkey",
  		b: "1F649",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"monkey",
  			"nature"
  		],
  		k: [
  			32,
  			44
  		]
  	},
  	cactus: {
  		a: "Cactus",
  		b: "1F335",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vegetable",
  			"plant",
  			"nature"
  		],
  		k: [
  			6,
  			43
  		]
  	},
  	ear_of_rice: {
  		a: "Ear of Rice",
  		b: "1F33E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"plant"
  		],
  		k: [
  			7,
  			0
  		]
  	},
  	speak_no_evil: {
  		a: "Speak-No-Evil Monkey",
  		b: "1F64A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"monkey",
  			"animal",
  			"nature",
  			"omg"
  		],
  		k: [
  			32,
  			45
  		]
  	},
  	"flag-hm": {
  		a: "Heard & Mcdonald Islands Flag",
  		b: "1F1ED-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			27
  		]
  	},
  	ballot_box_with_check: {
  		a: "Ballot Box with Check",
  		b: "2611-FE0F",
  		c: "2611",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"ok",
  			"agree",
  			"confirm",
  			"black-square",
  			"vote",
  			"election",
  			"yes",
  			"tick"
  		],
  		k: [
  			47,
  			22
  		],
  		o: 1
  	},
  	canoe: {
  		a: "Canoe",
  		b: "1F6F6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"boat",
  			"paddle",
  			"water",
  			"ship"
  		],
  		k: [
  			37,
  			21
  		],
  		o: 9
  	},
  	memo: {
  		a: "Memo",
  		b: "1F4DD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"write",
  			"documents",
  			"stationery",
  			"pencil",
  			"paper",
  			"writing",
  			"legal",
  			"exam",
  			"quiz",
  			"test",
  			"study",
  			"compose"
  		],
  		k: [
  			26,
  			20
  		],
  		n: [
  			"pencil"
  		]
  	},
  	herb: {
  		a: "Herb",
  		b: "1F33F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vegetable",
  			"plant",
  			"medicine",
  			"weed",
  			"grass",
  			"lawn"
  		],
  		k: [
  			7,
  			1
  		]
  	},
  	"flag-hn": {
  		a: "Honduras Flag",
  		b: "1F1ED-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			28
  		]
  	},
  	heavy_check_mark: {
  		a: "Heavy Check Mark",
  		b: "2714-FE0F",
  		c: "2714",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"ok",
  			"nike",
  			"answer",
  			"yes",
  			"tick"
  		],
  		k: [
  			49,
  			44
  		],
  		o: 1
  	},
  	briefcase: {
  		a: "Briefcase",
  		b: "1F4BC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"business",
  			"documents",
  			"work",
  			"law",
  			"legal",
  			"job",
  			"career"
  		],
  		k: [
  			25,
  			39
  		]
  	},
  	speedboat: {
  		a: "Speedboat",
  		b: "1F6A4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"ship",
  			"transportation",
  			"vehicle",
  			"summer"
  		],
  		k: [
  			35,
  			9
  		]
  	},
  	baby: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F476-1F3FB",
  				non_qualified: null,
  				image: "1f476-1f3fb.png",
  				sheet_x: 22,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F476-1F3FC",
  				non_qualified: null,
  				image: "1f476-1f3fc.png",
  				sheet_x: 22,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F476-1F3FD",
  				non_qualified: null,
  				image: "1f476-1f3fd.png",
  				sheet_x: 22,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F476-1F3FE",
  				non_qualified: null,
  				image: "1f476-1f3fe.png",
  				sheet_x: 22,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F476-1F3FF",
  				non_qualified: null,
  				image: "1f476-1f3ff.png",
  				sheet_x: 22,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Baby",
  		b: "1F476",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"child",
  			"boy",
  			"girl",
  			"toddler"
  		],
  		k: [
  			22,
  			10
  		]
  	},
  	heavy_multiplication_x: {
  		a: "Heavy Multiplication X",
  		b: "2716-FE0F",
  		c: "2716",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"math",
  			"calculation"
  		],
  		k: [
  			49,
  			45
  		],
  		o: 1
  	},
  	child: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D2-1F3FB",
  				non_qualified: null,
  				image: "1f9d2-1f3fb.png",
  				sheet_x: 43,
  				sheet_y: 5,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9D2-1F3FC",
  				non_qualified: null,
  				image: "1f9d2-1f3fc.png",
  				sheet_x: 43,
  				sheet_y: 6,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9D2-1F3FD",
  				non_qualified: null,
  				image: "1f9d2-1f3fd.png",
  				sheet_x: 43,
  				sheet_y: 7,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9D2-1F3FE",
  				non_qualified: null,
  				image: "1f9d2-1f3fe.png",
  				sheet_x: 43,
  				sheet_y: 8,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9D2-1F3FF",
  				non_qualified: null,
  				image: "1f9d2-1f3ff.png",
  				sheet_x: 43,
  				sheet_y: 9,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Child",
  		b: "1F9D2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			43,
  			4
  		],
  		o: 10
  	},
  	shamrock: {
  		a: "Shamrock",
  		b: "2618-FE0F",
  		c: "2618",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"vegetable",
  			"plant",
  			"nature",
  			"irish",
  			"clover"
  		],
  		k: [
  			47,
  			25
  		],
  		o: 4
  	},
  	passenger_ship: {
  		a: "Passenger Ship",
  		b: "1F6F3-FE0F",
  		c: "1F6F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"yacht",
  			"cruise",
  			"ferry"
  		],
  		k: [
  			37,
  			18
  		],
  		o: 7
  	},
  	"flag-hr": {
  		a: "Croatia Flag",
  		b: "1F1ED-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			29
  		]
  	},
  	file_folder: {
  		a: "File Folder",
  		b: "1F4C1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"documents",
  			"business",
  			"office"
  		],
  		k: [
  			25,
  			44
  		]
  	},
  	x: {
  		a: "Cross Mark",
  		b: "274C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"no",
  			"delete",
  			"remove",
  			"cancel"
  		],
  		k: [
  			50,
  			1
  		]
  	},
  	four_leaf_clover: {
  		a: "Four Leaf Clover",
  		b: "1F340",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vegetable",
  			"plant",
  			"nature",
  			"lucky",
  			"irish"
  		],
  		k: [
  			7,
  			2
  		]
  	},
  	open_file_folder: {
  		a: "Open File Folder",
  		b: "1F4C2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"documents",
  			"load"
  		],
  		k: [
  			25,
  			45
  		]
  	},
  	boy: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F466-1F3FB",
  				non_qualified: null,
  				image: "1f466-1f3fb.png",
  				sheet_x: 15,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F466-1F3FC",
  				non_qualified: null,
  				image: "1f466-1f3fc.png",
  				sheet_x: 15,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F466-1F3FD",
  				non_qualified: null,
  				image: "1f466-1f3fd.png",
  				sheet_x: 15,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F466-1F3FE",
  				non_qualified: null,
  				image: "1f466-1f3fe.png",
  				sheet_x: 15,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F466-1F3FF",
  				non_qualified: null,
  				image: "1f466-1f3ff.png",
  				sheet_x: 15,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Boy",
  		b: "1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"man",
  			"male",
  			"guy",
  			"teenager"
  		],
  		k: [
  			15,
  			42
  		]
  	},
  	ferry: {
  		a: "Ferry",
  		b: "26F4-FE0F",
  		c: "26F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"boat",
  			"ship",
  			"yacht"
  		],
  		k: [
  			48,
  			42
  		],
  		o: 5
  	},
  	"flag-ht": {
  		a: "Haiti Flag",
  		b: "1F1ED-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			30
  		]
  	},
  	girl: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F467-1F3FB",
  				non_qualified: null,
  				image: "1f467-1f3fb.png",
  				sheet_x: 15,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F467-1F3FC",
  				non_qualified: null,
  				image: "1f467-1f3fc.png",
  				sheet_x: 15,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F467-1F3FD",
  				non_qualified: null,
  				image: "1f467-1f3fd.png",
  				sheet_x: 15,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F467-1F3FE",
  				non_qualified: null,
  				image: "1f467-1f3fe.png",
  				sheet_x: 16,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F467-1F3FF",
  				non_qualified: null,
  				image: "1f467-1f3ff.png",
  				sheet_x: 16,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Girl",
  		b: "1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"female",
  			"woman",
  			"teenager"
  		],
  		k: [
  			15,
  			48
  		]
  	},
  	negative_squared_cross_mark: {
  		a: "Negative Squared Cross Mark",
  		b: "274E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"x",
  			"green-square",
  			"no",
  			"deny"
  		],
  		k: [
  			50,
  			2
  		]
  	},
  	"flag-hu": {
  		a: "Hungary Flag",
  		b: "1F1ED-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			31
  		]
  	},
  	card_index_dividers: {
  		a: "Card Index Dividers",
  		b: "1F5C2-FE0F",
  		c: "1F5C2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"organizing",
  			"business",
  			"stationery"
  		],
  		k: [
  			30,
  			4
  		],
  		o: 7
  	},
  	maple_leaf: {
  		a: "Maple Leaf",
  		b: "1F341",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"plant",
  			"vegetable",
  			"ca",
  			"fall"
  		],
  		k: [
  			7,
  			3
  		]
  	},
  	motor_boat: {
  		a: "Motor Boat",
  		b: "1F6E5-FE0F",
  		c: "1F6E5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"ship"
  		],
  		k: [
  			37,
  			13
  		],
  		o: 7
  	},
  	"flag-ic": {
  		a: "Canary Islands Flag",
  		b: "1F1EE-1F1E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			32
  		]
  	},
  	fallen_leaf: {
  		a: "Fallen Leaf",
  		b: "1F342",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"plant",
  			"vegetable",
  			"leaves"
  		],
  		k: [
  			7,
  			4
  		]
  	},
  	adult: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D1-1F3FB",
  				non_qualified: null,
  				image: "1f9d1-1f3fb.png",
  				sheet_x: 42,
  				sheet_y: 51,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9D1-1F3FC",
  				non_qualified: null,
  				image: "1f9d1-1f3fc.png",
  				sheet_x: 43,
  				sheet_y: 0,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9D1-1F3FD",
  				non_qualified: null,
  				image: "1f9d1-1f3fd.png",
  				sheet_x: 43,
  				sheet_y: 1,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9D1-1F3FE",
  				non_qualified: null,
  				image: "1f9d1-1f3fe.png",
  				sheet_x: 43,
  				sheet_y: 2,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9D1-1F3FF",
  				non_qualified: null,
  				image: "1f9d1-1f3ff.png",
  				sheet_x: 43,
  				sheet_y: 3,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Adult",
  		b: "1F9D1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			42,
  			50
  		],
  		o: 10
  	},
  	ship: {
  		a: "Ship",
  		b: "1F6A2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"titanic",
  			"deploy"
  		],
  		k: [
  			34,
  			42
  		]
  	},
  	heavy_plus_sign: {
  		a: "Heavy Plus Sign",
  		b: "2795",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"math",
  			"calculation",
  			"addition",
  			"more",
  			"increase"
  		],
  		k: [
  			50,
  			9
  		]
  	},
  	date: {
  		a: "Calendar",
  		b: "1F4C5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"calendar",
  			"schedule"
  		],
  		k: [
  			25,
  			48
  		]
  	},
  	man: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB",
  				non_qualified: null,
  				image: "1f468-1f3fb.png",
  				sheet_x: 18,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC",
  				non_qualified: null,
  				image: "1f468-1f3fc.png",
  				sheet_x: 18,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD",
  				non_qualified: null,
  				image: "1f468-1f3fd.png",
  				sheet_x: 18,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE",
  				non_qualified: null,
  				image: "1f468-1f3fe.png",
  				sheet_x: 18,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF",
  				non_qualified: null,
  				image: "1f468-1f3ff.png",
  				sheet_x: 18,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Man",
  		b: "1F468",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"mustache",
  			"father",
  			"dad",
  			"guy",
  			"classy",
  			"sir",
  			"moustache"
  		],
  		k: [
  			18,
  			11
  		]
  	},
  	"flag-id": {
  		a: "Indonesia Flag",
  		b: "1F1EE-1F1E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			33
  		]
  	},
  	leaves: {
  		a: "Leaf Fluttering in Wind",
  		b: "1F343",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"plant",
  			"tree",
  			"vegetable",
  			"grass",
  			"lawn",
  			"spring"
  		],
  		k: [
  			7,
  			5
  		]
  	},
  	heavy_minus_sign: {
  		a: "Heavy Minus Sign",
  		b: "2796",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"math",
  			"calculation",
  			"subtract",
  			"less"
  		],
  		k: [
  			50,
  			10
  		]
  	},
  	calendar: {
  		a: "Tear-off Calendar",
  		b: "1F4C6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"schedule",
  			"date",
  			"planning"
  		],
  		k: [
  			25,
  			49
  		]
  	},
  	airplane: {
  		a: "Airplane",
  		b: "2708-FE0F",
  		c: "2708",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vehicle",
  			"transportation",
  			"flight",
  			"fly"
  		],
  		k: [
  			49,
  			16
  		],
  		o: 1
  	},
  	spiral_note_pad: {
  		a: "Spiral Note Pad",
  		b: "1F5D2-FE0F",
  		c: "1F5D2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			30,
  			8
  		],
  		o: 7
  	},
  	heavy_division_sign: {
  		a: "Heavy Division Sign",
  		b: "2797",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"divide",
  			"math",
  			"calculation"
  		],
  		k: [
  			50,
  			11
  		]
  	},
  	small_airplane: {
  		a: "Small Airplane",
  		b: "1F6E9-FE0F",
  		c: "1F6E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"flight",
  			"transportation",
  			"fly",
  			"vehicle"
  		],
  		k: [
  			37,
  			14
  		],
  		o: 7
  	},
  	woman: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB",
  				non_qualified: null,
  				image: "1f469-1f3fb.png",
  				sheet_x: 20,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC",
  				non_qualified: null,
  				image: "1f469-1f3fc.png",
  				sheet_x: 20,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD",
  				non_qualified: null,
  				image: "1f469-1f3fd.png",
  				sheet_x: 20,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE",
  				non_qualified: null,
  				image: "1f469-1f3fe.png",
  				sheet_x: 20,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF",
  				non_qualified: null,
  				image: "1f469-1f3ff.png",
  				sheet_x: 20,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Woman",
  		b: "1F469",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"female",
  			"girls",
  			"lady"
  		],
  		k: [
  			20,
  			23
  		]
  	},
  	"flag-ie": {
  		a: "Ireland Flag",
  		b: "1F1EE-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			34
  		]
  	},
  	curly_loop: {
  		a: "Curly Loop",
  		b: "27B0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"scribble",
  			"draw",
  			"shape",
  			"squiggle"
  		],
  		k: [
  			50,
  			13
  		]
  	},
  	"flag-il": {
  		a: "Israel Flag",
  		b: "1F1EE-1F1F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			35
  		]
  	},
  	airplane_departure: {
  		a: "Airplane Departure",
  		b: "1F6EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			15
  		],
  		o: 7
  	},
  	spiral_calendar_pad: {
  		a: "Spiral Calendar Pad",
  		b: "1F5D3-FE0F",
  		c: "1F5D3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			30,
  			9
  		],
  		o: 7
  	},
  	older_adult: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D3-1F3FB",
  				non_qualified: null,
  				image: "1f9d3-1f3fb.png",
  				sheet_x: 43,
  				sheet_y: 11,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9D3-1F3FC",
  				non_qualified: null,
  				image: "1f9d3-1f3fc.png",
  				sheet_x: 43,
  				sheet_y: 12,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9D3-1F3FD",
  				non_qualified: null,
  				image: "1f9d3-1f3fd.png",
  				sheet_x: 43,
  				sheet_y: 13,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9D3-1F3FE",
  				non_qualified: null,
  				image: "1f9d3-1f3fe.png",
  				sheet_x: 43,
  				sheet_y: 14,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9D3-1F3FF",
  				non_qualified: null,
  				image: "1f9d3-1f3ff.png",
  				sheet_x: 43,
  				sheet_y: 15,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Older Adult",
  		b: "1F9D3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			43,
  			10
  		],
  		o: 10
  	},
  	airplane_arriving: {
  		a: "Airplane Arriving",
  		b: "1F6EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			16
  		],
  		o: 7
  	},
  	card_index: {
  		a: "Card Index",
  		b: "1F4C7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"business",
  			"stationery"
  		],
  		k: [
  			25,
  			50
  		]
  	},
  	loop: {
  		a: "Double Curly Loop",
  		b: "27BF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"tape",
  			"cassette"
  		],
  		k: [
  			50,
  			14
  		]
  	},
  	older_man: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F474-1F3FB",
  				non_qualified: null,
  				image: "1f474-1f3fb.png",
  				sheet_x: 21,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F474-1F3FC",
  				non_qualified: null,
  				image: "1f474-1f3fc.png",
  				sheet_x: 22,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F474-1F3FD",
  				non_qualified: null,
  				image: "1f474-1f3fd.png",
  				sheet_x: 22,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F474-1F3FE",
  				non_qualified: null,
  				image: "1f474-1f3fe.png",
  				sheet_x: 22,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F474-1F3FF",
  				non_qualified: null,
  				image: "1f474-1f3ff.png",
  				sheet_x: 22,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Older Man",
  		b: "1F474",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"human",
  			"male",
  			"men",
  			"old",
  			"elder",
  			"senior"
  		],
  		k: [
  			21,
  			50
  		]
  	},
  	"flag-im": {
  		a: "Isle of Man Flag",
  		b: "1F1EE-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			36
  		]
  	},
  	"flag-in": {
  		a: "India Flag",
  		b: "1F1EE-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			37
  		]
  	},
  	chart_with_upwards_trend: {
  		a: "Chart with Upwards Trend",
  		b: "1F4C8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"graph",
  			"presentation",
  			"stats",
  			"recovery",
  			"business",
  			"economics",
  			"money",
  			"sales",
  			"good",
  			"success"
  		],
  		k: [
  			25,
  			51
  		]
  	},
  	part_alternation_mark: {
  		a: "Part Alternation Mark",
  		b: "303D-FE0F",
  		c: "303D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"graph",
  			"presentation",
  			"stats",
  			"business",
  			"economics",
  			"bad"
  		],
  		k: [
  			50,
  			25
  		],
  		o: 3
  	},
  	seat: {
  		a: "Seat",
  		b: "1F4BA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sit",
  			"airplane",
  			"transport",
  			"bus",
  			"flight",
  			"fly"
  		],
  		k: [
  			25,
  			37
  		]
  	},
  	older_woman: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F475-1F3FB",
  				non_qualified: null,
  				image: "1f475-1f3fb.png",
  				sheet_x: 22,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F475-1F3FC",
  				non_qualified: null,
  				image: "1f475-1f3fc.png",
  				sheet_x: 22,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F475-1F3FD",
  				non_qualified: null,
  				image: "1f475-1f3fd.png",
  				sheet_x: 22,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F475-1F3FE",
  				non_qualified: null,
  				image: "1f475-1f3fe.png",
  				sheet_x: 22,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F475-1F3FF",
  				non_qualified: null,
  				image: "1f475-1f3ff.png",
  				sheet_x: 22,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Older Woman",
  		b: "1F475",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"human",
  			"female",
  			"women",
  			"lady",
  			"old",
  			"elder",
  			"senior"
  		],
  		k: [
  			22,
  			4
  		]
  	},
  	eight_spoked_asterisk: {
  		a: "Eight Spoked Asterisk",
  		b: "2733-FE0F",
  		c: "2733",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"star",
  			"sparkle",
  			"green-square"
  		],
  		k: [
  			49,
  			49
  		],
  		o: 1
  	},
  	chart_with_downwards_trend: {
  		a: "Chart with Downwards Trend",
  		b: "1F4C9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"graph",
  			"presentation",
  			"stats",
  			"recession",
  			"business",
  			"economics",
  			"money",
  			"sales",
  			"bad",
  			"failure"
  		],
  		k: [
  			26,
  			0
  		]
  	},
  	"flag-io": {
  		a: "British Indian Ocean Territory Flag",
  		b: "1F1EE-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			38
  		]
  	},
  	"male-doctor": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-2695-FE0F",
  				non_qualified: "1F468-1F3FB-200D-2695",
  				image: "1f468-1f3fb-200d-2695-fe0f.png",
  				sheet_x: 17,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-2695-FE0F",
  				non_qualified: "1F468-1F3FC-200D-2695",
  				image: "1f468-1f3fc-200d-2695-fe0f.png",
  				sheet_x: 17,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-2695-FE0F",
  				non_qualified: "1F468-1F3FD-200D-2695",
  				image: "1f468-1f3fd-200d-2695-fe0f.png",
  				sheet_x: 17,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-2695-FE0F",
  				non_qualified: "1F468-1F3FE-200D-2695",
  				image: "1f468-1f3fe-200d-2695-fe0f.png",
  				sheet_x: 17,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-2695-FE0F",
  				non_qualified: "1F468-1F3FF-200D-2695",
  				image: "1f468-1f3ff-200d-2695-fe0f.png",
  				sheet_x: 17,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Doctor",
  		b: "1F468-200D-2695-FE0F",
  		c: "1F468-200D-2695",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			17,
  			43
  		]
  	},
  	helicopter: {
  		a: "Helicopter",
  		b: "1F681",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle",
  			"fly"
  		],
  		k: [
  			34,
  			9
  		]
  	},
  	"female-doctor": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-2695-FE0F",
  				non_qualified: "1F469-1F3FB-200D-2695",
  				image: "1f469-1f3fb-200d-2695-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-2695-FE0F",
  				non_qualified: "1F469-1F3FC-200D-2695",
  				image: "1f469-1f3fc-200d-2695-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-2695-FE0F",
  				non_qualified: "1F469-1F3FD-200D-2695",
  				image: "1f469-1f3fd-200d-2695-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-2695-FE0F",
  				non_qualified: "1F469-1F3FE-200D-2695",
  				image: "1f469-1f3fe-200d-2695-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-2695-FE0F",
  				non_qualified: "1F469-1F3FF-200D-2695",
  				image: "1f469-1f3ff-200d-2695-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Doctor",
  		b: "1F469-200D-2695-FE0F",
  		c: "1F469-200D-2695",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			20,
  			1
  		]
  	},
  	suspension_railway: {
  		a: "Suspension Railway",
  		b: "1F69F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"vehicle",
  			"transportation"
  		],
  		k: [
  			34,
  			39
  		]
  	},
  	bar_chart: {
  		a: "Bar Chart",
  		b: "1F4CA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"graph",
  			"presentation",
  			"stats"
  		],
  		k: [
  			26,
  			1
  		]
  	},
  	"flag-iq": {
  		a: "Iraq Flag",
  		b: "1F1EE-1F1F6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			39
  		]
  	},
  	eight_pointed_black_star: {
  		a: "Eight Pointed Black Star",
  		b: "2734-FE0F",
  		c: "2734",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"orange-square",
  			"shape",
  			"polygon"
  		],
  		k: [
  			49,
  			50
  		],
  		o: 1
  	},
  	mountain_cableway: {
  		a: "Mountain Cableway",
  		b: "1F6A0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle",
  			"ski"
  		],
  		k: [
  			34,
  			40
  		]
  	},
  	"male-student": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F393",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f393.png",
  				sheet_x: 16,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F393",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f393.png",
  				sheet_x: 16,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F393",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f393.png",
  				sheet_x: 16,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F393",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f393.png",
  				sheet_x: 16,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F393",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f393.png",
  				sheet_x: 16,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Student",
  		b: "1F468-200D-1F393",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			14
  		]
  	},
  	clipboard: {
  		a: "Clipboard",
  		b: "1F4CB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stationery",
  			"documents"
  		],
  		k: [
  			26,
  			2
  		]
  	},
  	"flag-ir": {
  		a: "Iran Flag",
  		b: "1F1EE-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			40
  		]
  	},
  	sparkle: {
  		a: "Sparkle",
  		b: "2747-FE0F",
  		c: "2747",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stars",
  			"green-square",
  			"awesome",
  			"good",
  			"fireworks"
  		],
  		k: [
  			50,
  			0
  		],
  		o: 1
  	},
  	"female-student": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F393",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f393.png",
  				sheet_x: 18,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F393",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f393.png",
  				sheet_x: 18,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F393",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f393.png",
  				sheet_x: 18,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F393",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f393.png",
  				sheet_x: 18,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F393",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f393.png",
  				sheet_x: 18,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Student",
  		b: "1F469-200D-1F393",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			18,
  			29
  		]
  	},
  	pushpin: {
  		a: "Pushpin",
  		b: "1F4CC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stationery",
  			"mark",
  			"here"
  		],
  		k: [
  			26,
  			3
  		]
  	},
  	aerial_tramway: {
  		a: "Aerial Tramway",
  		b: "1F6A1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"transportation",
  			"vehicle",
  			"ski"
  		],
  		k: [
  			34,
  			41
  		]
  	},
  	"flag-is": {
  		a: "Iceland Flag",
  		b: "1F1EE-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			41
  		]
  	},
  	bangbang: {
  		a: "Double Exclamation Mark",
  		b: "203C-FE0F",
  		c: "203C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"exclamation",
  			"surprise"
  		],
  		k: [
  			46,
  			29
  		],
  		o: 1
  	},
  	interrobang: {
  		a: "Exclamation Question Mark",
  		b: "2049-FE0F",
  		c: "2049",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"wat",
  			"punctuation",
  			"surprise"
  		],
  		k: [
  			46,
  			30
  		],
  		o: 3
  	},
  	satellite: {
  		a: "Satellite",
  		b: "1F6F0-FE0F",
  		c: "1F6F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"communication",
  			"future",
  			"radio",
  			"space"
  		],
  		k: [
  			37,
  			17
  		],
  		o: 7
  	},
  	it: {
  		a: "Italy Flag",
  		b: "1F1EE-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"italy",
  			"flag",
  			"nation",
  			"country",
  			"banner"
  		],
  		k: [
  			2,
  			42
  		],
  		n: [
  			"flag-it"
  		]
  	},
  	"male-teacher": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F3EB",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f3eb.png",
  				sheet_x: 16,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F3EB",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f3eb.png",
  				sheet_x: 16,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F3EB",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f3eb.png",
  				sheet_x: 16,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F3EB",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f3eb.png",
  				sheet_x: 16,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F3EB",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f3eb.png",
  				sheet_x: 16,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Teacher",
  		b: "1F468-200D-1F3EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			32
  		]
  	},
  	round_pushpin: {
  		a: "Round Pushpin",
  		b: "1F4CD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stationery",
  			"location",
  			"map",
  			"here"
  		],
  		k: [
  			26,
  			4
  		]
  	},
  	"flag-je": {
  		a: "Jersey Flag",
  		b: "1F1EF-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			43
  		]
  	},
  	question: {
  		a: "Black Question Mark Ornament",
  		b: "2753",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"doubt",
  			"confused"
  		],
  		k: [
  			50,
  			3
  		]
  	},
  	rocket: {
  		a: "Rocket",
  		b: "1F680",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"launch",
  			"ship",
  			"staffmode",
  			"NASA",
  			"outer space",
  			"outer_space",
  			"fly"
  		],
  		k: [
  			34,
  			8
  		]
  	},
  	"female-teacher": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F3EB",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f3eb.png",
  				sheet_x: 18,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F3EB",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f3eb.png",
  				sheet_x: 18,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F3EB",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f3eb.png",
  				sheet_x: 18,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F3EB",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f3eb.png",
  				sheet_x: 18,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F3EB",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f3eb.png",
  				sheet_x: 19,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Teacher",
  		b: "1F469-200D-1F3EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			18,
  			47
  		]
  	},
  	paperclip: {
  		a: "Paperclip",
  		b: "1F4CE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"documents",
  			"stationery"
  		],
  		k: [
  			26,
  			5
  		]
  	},
  	linked_paperclips: {
  		a: "Linked Paperclips",
  		b: "1F587-FE0F",
  		c: "1F587",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			29,
  			27
  		],
  		o: 7
  	},
  	flying_saucer: {
  		a: "Flying Saucer",
  		b: "1F6F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			23
  		],
  		o: 10
  	},
  	"male-judge": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-2696-FE0F",
  				non_qualified: "1F468-1F3FB-200D-2696",
  				image: "1f468-1f3fb-200d-2696-fe0f.png",
  				sheet_x: 17,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-2696-FE0F",
  				non_qualified: "1F468-1F3FC-200D-2696",
  				image: "1f468-1f3fc-200d-2696-fe0f.png",
  				sheet_x: 17,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-2696-FE0F",
  				non_qualified: "1F468-1F3FD-200D-2696",
  				image: "1f468-1f3fd-200d-2696-fe0f.png",
  				sheet_x: 18,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-2696-FE0F",
  				non_qualified: "1F468-1F3FE-200D-2696",
  				image: "1f468-1f3fe-200d-2696-fe0f.png",
  				sheet_x: 18,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-2696-FE0F",
  				non_qualified: "1F468-1F3FF-200D-2696",
  				image: "1f468-1f3ff-200d-2696-fe0f.png",
  				sheet_x: 18,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Judge",
  		b: "1F468-200D-2696-FE0F",
  		c: "1F468-200D-2696",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			17,
  			49
  		]
  	},
  	grey_question: {
  		a: "White Question Mark Ornament",
  		b: "2754",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"doubts",
  			"gray",
  			"huh",
  			"confused"
  		],
  		k: [
  			50,
  			4
  		]
  	},
  	"flag-jm": {
  		a: "Jamaica Flag",
  		b: "1F1EF-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			44
  		]
  	},
  	bellhop_bell: {
  		a: "Bellhop Bell",
  		b: "1F6CE-FE0F",
  		c: "1F6CE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"service"
  		],
  		k: [
  			37,
  			3
  		],
  		o: 7
  	},
  	straight_ruler: {
  		a: "Straight Ruler",
  		b: "1F4CF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stationery",
  			"calculate",
  			"length",
  			"math",
  			"school",
  			"drawing",
  			"architect",
  			"sketch"
  		],
  		k: [
  			26,
  			6
  		]
  	},
  	"flag-jo": {
  		a: "Jordan Flag",
  		b: "1F1EF-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			45
  		]
  	},
  	"female-judge": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-2696-FE0F",
  				non_qualified: "1F469-1F3FB-200D-2696",
  				image: "1f469-1f3fb-200d-2696-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-2696-FE0F",
  				non_qualified: "1F469-1F3FC-200D-2696",
  				image: "1f469-1f3fc-200d-2696-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-2696-FE0F",
  				non_qualified: "1F469-1F3FD-200D-2696",
  				image: "1f469-1f3fd-200d-2696-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-2696-FE0F",
  				non_qualified: "1F469-1F3FE-200D-2696",
  				image: "1f469-1f3fe-200d-2696-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-2696-FE0F",
  				non_qualified: "1F469-1F3FF-200D-2696",
  				image: "1f469-1f3ff-200d-2696-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Judge",
  		b: "1F469-200D-2696-FE0F",
  		c: "1F469-200D-2696",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			20,
  			7
  		]
  	},
  	grey_exclamation: {
  		a: "White Exclamation Mark Ornament",
  		b: "2755",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"surprise",
  			"punctuation",
  			"gray",
  			"wow",
  			"warning"
  		],
  		k: [
  			50,
  			5
  		]
  	},
  	door: {
  		a: "Door",
  		b: "1F6AA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"house",
  			"entry",
  			"exit"
  		],
  		k: [
  			35,
  			15
  		]
  	},
  	"male-farmer": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F33E",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f33e.png",
  				sheet_x: 16,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F33E",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f33e.png",
  				sheet_x: 16,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F33E",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f33e.png",
  				sheet_x: 16,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F33E",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f33e.png",
  				sheet_x: 16,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F33E",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f33e.png",
  				sheet_x: 16,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Farmer",
  		b: "1F468-200D-1F33E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			2
  		]
  	},
  	jp: {
  		a: "Japan Flag",
  		b: "1F1EF-1F1F5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"japanese",
  			"nation",
  			"flag",
  			"country",
  			"banner"
  		],
  		k: [
  			2,
  			46
  		],
  		n: [
  			"flag-jp"
  		]
  	},
  	triangular_ruler: {
  		a: "Triangular Ruler",
  		b: "1F4D0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stationery",
  			"math",
  			"architect",
  			"sketch"
  		],
  		k: [
  			26,
  			7
  		]
  	},
  	exclamation: {
  		a: "Heavy Exclamation Mark Symbol",
  		b: "2757",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"heavy_exclamation_mark",
  			"danger",
  			"surprise",
  			"punctuation",
  			"wow",
  			"warning"
  		],
  		k: [
  			50,
  			6
  		],
  		n: [
  			"heavy_exclamation_mark"
  		],
  		o: 5
  	},
  	bed: {
  		a: "Bed",
  		b: "1F6CF-FE0F",
  		c: "1F6CF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sleep",
  			"rest"
  		],
  		k: [
  			37,
  			4
  		],
  		o: 7
  	},
  	"female-farmer": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F33E",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f33e.png",
  				sheet_x: 18,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F33E",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f33e.png",
  				sheet_x: 18,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F33E",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f33e.png",
  				sheet_x: 18,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F33E",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f33e.png",
  				sheet_x: 18,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F33E",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f33e.png",
  				sheet_x: 18,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Farmer",
  		b: "1F469-200D-1F33E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			18,
  			17
  		]
  	},
  	scissors: {
  		a: "Black Scissors",
  		b: "2702-FE0F",
  		c: "2702",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"stationery",
  			"cut"
  		],
  		k: [
  			49,
  			14
  		],
  		o: 1
  	},
  	wavy_dash: {
  		a: "Wavy Dash",
  		b: "3030-FE0F",
  		c: "3030",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"draw",
  			"line",
  			"moustache",
  			"mustache",
  			"squiggle",
  			"scribble"
  		],
  		k: [
  			50,
  			24
  		],
  		o: 1
  	},
  	"flag-ke": {
  		a: "Kenya Flag",
  		b: "1F1F0-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			47
  		]
  	},
  	"flag-kg": {
  		a: "Kyrgyzstan Flag",
  		b: "1F1F0-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			48
  		]
  	},
  	couch_and_lamp: {
  		a: "Couch and Lamp",
  		b: "1F6CB-FE0F",
  		c: "1F6CB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"read",
  			"chill"
  		],
  		k: [
  			36,
  			47
  		],
  		o: 7
  	},
  	"male-cook": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F373",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f373.png",
  				sheet_x: 16,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F373",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f373.png",
  				sheet_x: 16,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F373",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f373.png",
  				sheet_x: 16,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F373",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f373.png",
  				sheet_x: 16,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F373",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f373.png",
  				sheet_x: 16,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Cook",
  		b: "1F468-200D-1F373",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			8
  		]
  	},
  	card_file_box: {
  		a: "Card File Box",
  		b: "1F5C3-FE0F",
  		c: "1F5C3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"business",
  			"stationery"
  		],
  		k: [
  			30,
  			5
  		],
  		o: 7
  	},
  	copyright: {
  		a: "Copyright Sign",
  		b: "00A9-FE0F",
  		c: "00A9",
  		d: true,
  		e: true,
  		f: false,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"ip",
  			"license",
  			"circle",
  			"law",
  			"legal"
  		],
  		k: [
  			0,
  			12
  		],
  		o: 1
  	},
  	file_cabinet: {
  		a: "File Cabinet",
  		b: "1F5C4-FE0F",
  		c: "1F5C4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"filing",
  			"organizing"
  		],
  		k: [
  			30,
  			6
  		],
  		o: 7
  	},
  	registered: {
  		a: "Registered Sign",
  		b: "00AE-FE0F",
  		c: "00AE",
  		d: true,
  		e: true,
  		f: false,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"alphabet",
  			"circle"
  		],
  		k: [
  			0,
  			13
  		],
  		o: 1
  	},
  	"flag-kh": {
  		a: "Cambodia Flag",
  		b: "1F1F0-1F1ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			49
  		]
  	},
  	"female-cook": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F373",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f373.png",
  				sheet_x: 18,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F373",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f373.png",
  				sheet_x: 18,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F373",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f373.png",
  				sheet_x: 18,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F373",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f373.png",
  				sheet_x: 18,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F373",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f373.png",
  				sheet_x: 18,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Cook",
  		b: "1F469-200D-1F373",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			18,
  			23
  		]
  	},
  	toilet: {
  		a: "Toilet",
  		b: "1F6BD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"restroom",
  			"wc",
  			"washroom",
  			"bathroom",
  			"potty"
  		],
  		k: [
  			36,
  			33
  		]
  	},
  	wastebasket: {
  		a: "Wastebasket",
  		b: "1F5D1-FE0F",
  		c: "1F5D1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"bin",
  			"trash",
  			"rubbish",
  			"garbage",
  			"toss"
  		],
  		k: [
  			30,
  			7
  		],
  		o: 7
  	},
  	"flag-ki": {
  		a: "Kiribati Flag",
  		b: "1F1F0-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			50
  		]
  	},
  	shower: {
  		a: "Shower",
  		b: "1F6BF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"clean",
  			"water",
  			"bathroom"
  		],
  		k: [
  			36,
  			35
  		]
  	},
  	"male-mechanic": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F527",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f527.png",
  				sheet_x: 17,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F527",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f527.png",
  				sheet_x: 17,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F527",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f527.png",
  				sheet_x: 17,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F527",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f527.png",
  				sheet_x: 17,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F527",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f527.png",
  				sheet_x: 17,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Mechanic",
  		b: "1F468-200D-1F527",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			17,
  			19
  		]
  	},
  	tm: {
  		a: "Trade Mark Sign",
  		b: "2122-FE0F",
  		c: "2122",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"trademark",
  			"brand",
  			"law",
  			"legal"
  		],
  		k: [
  			46,
  			31
  		],
  		o: 1
  	},
  	hash: {
  		a: "Hash Key",
  		b: "0023-FE0F-20E3",
  		c: "0023-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"symbol",
  			"blue-square",
  			"twitter"
  		],
  		k: [
  			0,
  			0
  		],
  		o: 3
  	},
  	"flag-km": {
  		a: "Comoros Flag",
  		b: "1F1F0-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			2,
  			51
  		]
  	},
  	bathtub: {
  		a: "Bathtub",
  		b: "1F6C1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"clean",
  			"shower",
  			"bathroom"
  		],
  		k: [
  			36,
  			42
  		]
  	},
  	"female-mechanic": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F527",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f527.png",
  				sheet_x: 19,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F527",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f527.png",
  				sheet_x: 19,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F527",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f527.png",
  				sheet_x: 19,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F527",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f527.png",
  				sheet_x: 19,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F527",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f527.png",
  				sheet_x: 19,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Mechanic",
  		b: "1F469-200D-1F527",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			29
  		]
  	},
  	lock: {
  		a: "Lock",
  		b: "1F512",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"security",
  			"password",
  			"padlock"
  		],
  		k: [
  			27,
  			20
  		]
  	},
  	"male-factory-worker": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F3ED",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f3ed.png",
  				sheet_x: 16,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F3ED",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f3ed.png",
  				sheet_x: 16,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F3ED",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f3ed.png",
  				sheet_x: 16,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F3ED",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f3ed.png",
  				sheet_x: 16,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F3ED",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f3ed.png",
  				sheet_x: 16,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Factory Worker",
  		b: "1F468-200D-1F3ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			38
  		]
  	},
  	"flag-kn": {
  		a: "St. Kitts & Nevis Flag",
  		b: "1F1F0-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			0
  		]
  	},
  	hourglass: {
  		a: "Hourglass",
  		b: "231B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"clock",
  			"oldschool",
  			"limit",
  			"exam",
  			"quiz",
  			"test"
  		],
  		k: [
  			46,
  			42
  		],
  		o: 1
  	},
  	keycap_star: {
  		a: "Keycap Star",
  		b: "002A-FE0F-20E3",
  		c: "002A-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			0,
  			1
  		],
  		o: 3
  	},
  	unlock: {
  		a: "Open Lock",
  		b: "1F513",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"privacy",
  			"security"
  		],
  		k: [
  			27,
  			21
  		]
  	},
  	"flag-kp": {
  		a: "North Korea Flag",
  		b: "1F1F0-1F1F5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			1
  		]
  	},
  	"female-factory-worker": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F3ED",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f3ed.png",
  				sheet_x: 19,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F3ED",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f3ed.png",
  				sheet_x: 19,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F3ED",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f3ed.png",
  				sheet_x: 19,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F3ED",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f3ed.png",
  				sheet_x: 19,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F3ED",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f3ed.png",
  				sheet_x: 19,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Factory Worker",
  		b: "1F469-200D-1F3ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			1
  		]
  	},
  	zero: {
  		a: "Keycap 0",
  		b: "0030-FE0F-20E3",
  		c: "0030-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"0",
  			"numbers",
  			"blue-square",
  			"null"
  		],
  		k: [
  			0,
  			2
  		],
  		o: 3
  	},
  	lock_with_ink_pen: {
  		a: "Lock with Ink Pen",
  		b: "1F50F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"security",
  			"secret"
  		],
  		k: [
  			27,
  			17
  		]
  	},
  	hourglass_flowing_sand: {
  		a: "Hourglass with Flowing Sand",
  		b: "23F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"oldschool",
  			"time",
  			"countdown"
  		],
  		k: [
  			47,
  			3
  		]
  	},
  	one: {
  		a: "Keycap 1",
  		b: "0031-FE0F-20E3",
  		c: "0031-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"blue-square",
  			"numbers",
  			"1"
  		],
  		k: [
  			0,
  			3
  		],
  		o: 3
  	},
  	kr: {
  		a: "South Korea Flag",
  		b: "1F1F0-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"south",
  			"korea",
  			"nation",
  			"flag",
  			"country",
  			"banner"
  		],
  		k: [
  			3,
  			2
  		],
  		n: [
  			"flag-kr"
  		]
  	},
  	watch: {
  		a: "Watch",
  		b: "231A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"accessories"
  		],
  		k: [
  			46,
  			41
  		],
  		o: 1
  	},
  	"male-office-worker": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F4BC",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f4bc.png",
  				sheet_x: 17,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F4BC",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f4bc.png",
  				sheet_x: 17,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F4BC",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f4bc.png",
  				sheet_x: 17,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F4BC",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f4bc.png",
  				sheet_x: 17,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F4BC",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f4bc.png",
  				sheet_x: 17,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Office Worker",
  		b: "1F468-200D-1F4BC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			17,
  			13
  		]
  	},
  	closed_lock_with_key: {
  		a: "Closed Lock with Key",
  		b: "1F510",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"security",
  			"privacy"
  		],
  		k: [
  			27,
  			18
  		]
  	},
  	"female-office-worker": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F4BC",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f4bc.png",
  				sheet_x: 19,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F4BC",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f4bc.png",
  				sheet_x: 19,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F4BC",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f4bc.png",
  				sheet_x: 19,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F4BC",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f4bc.png",
  				sheet_x: 19,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F4BC",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f4bc.png",
  				sheet_x: 19,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Office Worker",
  		b: "1F469-200D-1F4BC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			23
  		]
  	},
  	two: {
  		a: "Keycap 2",
  		b: "0032-FE0F-20E3",
  		c: "0032-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"numbers",
  			"2",
  			"prime",
  			"blue-square"
  		],
  		k: [
  			0,
  			4
  		],
  		o: 3
  	},
  	alarm_clock: {
  		a: "Alarm Clock",
  		b: "23F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"wake"
  		],
  		k: [
  			47,
  			0
  		]
  	},
  	key: {
  		a: "Key",
  		b: "1F511",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"lock",
  			"door",
  			"password"
  		],
  		k: [
  			27,
  			19
  		]
  	},
  	"flag-kw": {
  		a: "Kuwait Flag",
  		b: "1F1F0-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			3
  		]
  	},
  	stopwatch: {
  		a: "Stopwatch",
  		b: "23F1-FE0F",
  		c: "23F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"time",
  			"deadline"
  		],
  		k: [
  			47,
  			1
  		]
  	},
  	"male-scientist": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F52C",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f52c.png",
  				sheet_x: 17,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F52C",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f52c.png",
  				sheet_x: 17,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F52C",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f52c.png",
  				sheet_x: 17,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F52C",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f52c.png",
  				sheet_x: 17,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F52C",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f52c.png",
  				sheet_x: 17,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Scientist",
  		b: "1F468-200D-1F52C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			17,
  			25
  		]
  	},
  	three: {
  		a: "Keycap 3",
  		b: "0033-FE0F-20E3",
  		c: "0033-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"3",
  			"numbers",
  			"prime",
  			"blue-square"
  		],
  		k: [
  			0,
  			5
  		],
  		o: 3
  	},
  	"flag-ky": {
  		a: "Cayman Islands Flag",
  		b: "1F1F0-1F1FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			4
  		]
  	},
  	old_key: {
  		a: "Old Key",
  		b: "1F5DD-FE0F",
  		c: "1F5DD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"lock",
  			"door",
  			"password"
  		],
  		k: [
  			30,
  			11
  		],
  		o: 7
  	},
  	"flag-kz": {
  		a: "Kazakhstan Flag",
  		b: "1F1F0-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			5
  		]
  	},
  	hammer: {
  		a: "Hammer",
  		b: "1F528",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"tools",
  			"build",
  			"create"
  		],
  		k: [
  			27,
  			42
  		]
  	},
  	"female-scientist": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F52C",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f52c.png",
  				sheet_x: 19,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F52C",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f52c.png",
  				sheet_x: 19,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F52C",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f52c.png",
  				sheet_x: 19,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F52C",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f52c.png",
  				sheet_x: 19,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F52C",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f52c.png",
  				sheet_x: 19,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Scientist",
  		b: "1F469-200D-1F52C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			35
  		]
  	},
  	timer_clock: {
  		a: "Timer Clock",
  		b: "23F2-FE0F",
  		c: "23F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"alarm"
  		],
  		k: [
  			47,
  			2
  		]
  	},
  	four: {
  		a: "Keycap 4",
  		b: "0034-FE0F-20E3",
  		c: "0034-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"4",
  			"numbers",
  			"blue-square"
  		],
  		k: [
  			0,
  			6
  		],
  		o: 3
  	},
  	"male-technologist": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F4BB",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f4bb.png",
  				sheet_x: 17,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F4BB",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f4bb.png",
  				sheet_x: 17,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F4BB",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f4bb.png",
  				sheet_x: 17,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F4BB",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f4bb.png",
  				sheet_x: 17,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F4BB",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f4bb.png",
  				sheet_x: 17,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Technologist",
  		b: "1F468-200D-1F4BB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			17,
  			7
  		]
  	},
  	mantelpiece_clock: {
  		a: "Mantelpiece Clock",
  		b: "1F570-FE0F",
  		c: "1F570",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"time"
  		],
  		k: [
  			28,
  			43
  		],
  		o: 7
  	},
  	five: {
  		a: "Keycap 5",
  		b: "0035-FE0F-20E3",
  		c: "0035-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"5",
  			"numbers",
  			"blue-square",
  			"prime"
  		],
  		k: [
  			0,
  			7
  		],
  		o: 3
  	},
  	"flag-la": {
  		a: "Laos Flag",
  		b: "1F1F1-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			6
  		]
  	},
  	pick: {
  		a: "Pick",
  		b: "26CF-FE0F",
  		c: "26CF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"tools",
  			"dig"
  		],
  		k: [
  			48,
  			32
  		],
  		o: 5
  	},
  	"flag-lb": {
  		a: "Lebanon Flag",
  		b: "1F1F1-1F1E7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			7
  		]
  	},
  	clock12: {
  		a: "Clock Face Twelve Oclock",
  		b: "1F55B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"noon",
  			"midnight",
  			"midday",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			29
  		]
  	},
  	hammer_and_pick: {
  		a: "Hammer and Pick",
  		b: "2692-FE0F",
  		c: "2692",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"tools",
  			"build",
  			"create"
  		],
  		k: [
  			48,
  			11
  		],
  		o: 4
  	},
  	six: {
  		a: "Keycap 6",
  		b: "0036-FE0F-20E3",
  		c: "0036-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"6",
  			"numbers",
  			"blue-square"
  		],
  		k: [
  			0,
  			8
  		],
  		o: 3
  	},
  	"female-technologist": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F4BB",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f4bb.png",
  				sheet_x: 19,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F4BB",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f4bb.png",
  				sheet_x: 19,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F4BB",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f4bb.png",
  				sheet_x: 19,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F4BB",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f4bb.png",
  				sheet_x: 19,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F4BB",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f4bb.png",
  				sheet_x: 19,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Technologist",
  		b: "1F469-200D-1F4BB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			17
  		]
  	},
  	hammer_and_wrench: {
  		a: "Hammer and Wrench",
  		b: "1F6E0-FE0F",
  		c: "1F6E0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"tools",
  			"build",
  			"create"
  		],
  		k: [
  			37,
  			8
  		],
  		o: 7
  	},
  	"flag-lc": {
  		a: "St. Lucia Flag",
  		b: "1F1F1-1F1E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			8
  		]
  	},
  	clock1230: {
  		a: "Clock Face Twelve-Thirty",
  		b: "1F567",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			41
  		]
  	},
  	seven: {
  		a: "Keycap 7",
  		b: "0037-FE0F-20E3",
  		c: "0037-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"7",
  			"numbers",
  			"blue-square",
  			"prime"
  		],
  		k: [
  			0,
  			9
  		],
  		o: 3
  	},
  	"male-singer": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F3A4",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f3a4.png",
  				sheet_x: 16,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F3A4",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f3a4.png",
  				sheet_x: 16,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F3A4",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f3a4.png",
  				sheet_x: 16,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F3A4",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f3a4.png",
  				sheet_x: 16,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F3A4",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f3a4.png",
  				sheet_x: 16,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Singer",
  		b: "1F468-200D-1F3A4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			20
  		]
  	},
  	eight: {
  		a: "Keycap 8",
  		b: "0038-FE0F-20E3",
  		c: "0038-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"8",
  			"blue-square",
  			"numbers"
  		],
  		k: [
  			0,
  			10
  		],
  		o: 3
  	},
  	"flag-li": {
  		a: "Liechtenstein Flag",
  		b: "1F1F1-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			9
  		]
  	},
  	dagger_knife: {
  		a: "Dagger Knife",
  		b: "1F5E1-FE0F",
  		c: "1F5E1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			30,
  			13
  		],
  		o: 7
  	},
  	clock1: {
  		a: "Clock Face One Oclock",
  		b: "1F550",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			18
  		]
  	},
  	"female-singer": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F3A4",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f3a4.png",
  				sheet_x: 18,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F3A4",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f3a4.png",
  				sheet_x: 18,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F3A4",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f3a4.png",
  				sheet_x: 18,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F3A4",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f3a4.png",
  				sheet_x: 18,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F3A4",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f3a4.png",
  				sheet_x: 18,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Singer",
  		b: "1F469-200D-1F3A4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			18,
  			35
  		]
  	},
  	"male-artist": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F3A8",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f3a8.png",
  				sheet_x: 16,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F3A8",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f3a8.png",
  				sheet_x: 16,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F3A8",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f3a8.png",
  				sheet_x: 16,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F3A8",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f3a8.png",
  				sheet_x: 16,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F3A8",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f3a8.png",
  				sheet_x: 16,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Artist",
  		b: "1F468-200D-1F3A8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			26
  		]
  	},
  	crossed_swords: {
  		a: "Crossed Swords",
  		b: "2694-FE0F",
  		c: "2694",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"weapon"
  		],
  		k: [
  			48,
  			13
  		],
  		o: 4
  	},
  	nine: {
  		a: "Keycap 9",
  		b: "0039-FE0F-20E3",
  		c: "0039-20E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		j: [
  			"blue-square",
  			"numbers",
  			"9"
  		],
  		k: [
  			0,
  			11
  		],
  		o: 3
  	},
  	"flag-lk": {
  		a: "Sri Lanka Flag",
  		b: "1F1F1-1F1F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			10
  		]
  	},
  	clock130: {
  		a: "Clock Face One-Thirty",
  		b: "1F55C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			30
  		]
  	},
  	clock2: {
  		a: "Clock Face Two Oclock",
  		b: "1F551",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			19
  		]
  	},
  	gun: {
  		a: "Pistol",
  		b: "1F52B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"violence",
  			"weapon",
  			"pistol",
  			"revolver"
  		],
  		k: [
  			27,
  			45
  		]
  	},
  	keycap_ten: {
  		a: "Keycap Ten",
  		b: "1F51F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"numbers",
  			"10",
  			"blue-square"
  		],
  		k: [
  			27,
  			33
  		]
  	},
  	"female-artist": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F3A8",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f3a8.png",
  				sheet_x: 18,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F3A8",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f3a8.png",
  				sheet_x: 18,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F3A8",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f3a8.png",
  				sheet_x: 18,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F3A8",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f3a8.png",
  				sheet_x: 18,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F3A8",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f3a8.png",
  				sheet_x: 18,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Artist",
  		b: "1F469-200D-1F3A8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			18,
  			41
  		]
  	},
  	"flag-lr": {
  		a: "Liberia Flag",
  		b: "1F1F1-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			11
  		]
  	},
  	clock230: {
  		a: "Clock Face Two-Thirty",
  		b: "1F55D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			31
  		]
  	},
  	bow_and_arrow: {
  		a: "Bow and Arrow",
  		b: "1F3F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sports"
  		],
  		k: [
  			12,
  			23
  		],
  		o: 8
  	},
  	"male-pilot": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-2708-FE0F",
  				non_qualified: "1F468-1F3FB-200D-2708",
  				image: "1f468-1f3fb-200d-2708-fe0f.png",
  				sheet_x: 18,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-2708-FE0F",
  				non_qualified: "1F468-1F3FC-200D-2708",
  				image: "1f468-1f3fc-200d-2708-fe0f.png",
  				sheet_x: 18,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-2708-FE0F",
  				non_qualified: "1F468-1F3FD-200D-2708",
  				image: "1f468-1f3fd-200d-2708-fe0f.png",
  				sheet_x: 18,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-2708-FE0F",
  				non_qualified: "1F468-1F3FE-200D-2708",
  				image: "1f468-1f3fe-200d-2708-fe0f.png",
  				sheet_x: 18,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-2708-FE0F",
  				non_qualified: "1F468-1F3FF-200D-2708",
  				image: "1f468-1f3ff-200d-2708-fe0f.png",
  				sheet_x: 18,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Pilot",
  		b: "1F468-200D-2708-FE0F",
  		c: "1F468-200D-2708",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			18,
  			3
  		]
  	},
  	"flag-ls": {
  		a: "Lesotho Flag",
  		b: "1F1F1-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			12
  		]
  	},
  	"flag-lt": {
  		a: "Lithuania Flag",
  		b: "1F1F1-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			13
  		]
  	},
  	capital_abcd: {
  		a: "Input Symbol for Latin Capital Letters",
  		b: "1F520",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"alphabet",
  			"words",
  			"blue-square"
  		],
  		k: [
  			27,
  			34
  		]
  	},
  	"female-pilot": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-2708-FE0F",
  				non_qualified: "1F469-1F3FB-200D-2708",
  				image: "1f469-1f3fb-200d-2708-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-2708-FE0F",
  				non_qualified: "1F469-1F3FC-200D-2708",
  				image: "1f469-1f3fc-200d-2708-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-2708-FE0F",
  				non_qualified: "1F469-1F3FD-200D-2708",
  				image: "1f469-1f3fd-200d-2708-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-2708-FE0F",
  				non_qualified: "1F469-1F3FE-200D-2708",
  				image: "1f469-1f3fe-200d-2708-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-2708-FE0F",
  				non_qualified: "1F469-1F3FF-200D-2708",
  				image: "1f469-1f3ff-200d-2708-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Pilot",
  		b: "1F469-200D-2708-FE0F",
  		c: "1F469-200D-2708",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			20,
  			13
  		]
  	},
  	clock3: {
  		a: "Clock Face Three Oclock",
  		b: "1F552",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			20
  		]
  	},
  	shield: {
  		a: "Shield",
  		b: "1F6E1-FE0F",
  		c: "1F6E1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"protection",
  			"security"
  		],
  		k: [
  			37,
  			9
  		],
  		o: 7
  	},
  	"male-astronaut": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F680",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f680.png",
  				sheet_x: 17,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F680",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f680.png",
  				sheet_x: 17,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F680",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f680.png",
  				sheet_x: 17,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F680",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f680.png",
  				sheet_x: 17,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F680",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f680.png",
  				sheet_x: 17,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Astronaut",
  		b: "1F468-200D-1F680",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			17,
  			31
  		]
  	},
  	abcd: {
  		a: "Input Symbol for Latin Small Letters",
  		b: "1F521",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"alphabet"
  		],
  		k: [
  			27,
  			35
  		]
  	},
  	clock330: {
  		a: "Clock Face Three-Thirty",
  		b: "1F55E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			32
  		]
  	},
  	"flag-lu": {
  		a: "Luxembourg Flag",
  		b: "1F1F1-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			14
  		]
  	},
  	wrench: {
  		a: "Wrench",
  		b: "1F527",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"tools",
  			"diy",
  			"ikea",
  			"fix",
  			"maintainer"
  		],
  		k: [
  			27,
  			41
  		]
  	},
  	nut_and_bolt: {
  		a: "Nut and Bolt",
  		b: "1F529",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"handy",
  			"tools",
  			"fix"
  		],
  		k: [
  			27,
  			43
  		]
  	},
  	clock4: {
  		a: "Clock Face Four Oclock",
  		b: "1F553",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			21
  		]
  	},
  	"female-astronaut": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F680",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f680.png",
  				sheet_x: 19,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F680",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f680.png",
  				sheet_x: 19,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F680",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f680.png",
  				sheet_x: 19,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F680",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f680.png",
  				sheet_x: 19,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F680",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f680.png",
  				sheet_x: 19,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Astronaut",
  		b: "1F469-200D-1F680",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			41
  		]
  	},
  	"flag-lv": {
  		a: "Latvia Flag",
  		b: "1F1F1-1F1FB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			15
  		]
  	},
  	gear: {
  		a: "Gear",
  		b: "2699-FE0F",
  		c: "2699",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"cog"
  		],
  		k: [
  			48,
  			17
  		],
  		o: 4
  	},
  	"male-firefighter": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F468-1F3FB-200D-1F692",
  				non_qualified: null,
  				image: "1f468-1f3fb-200d-1f692.png",
  				sheet_x: 17,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F468-1F3FC-200D-1F692",
  				non_qualified: null,
  				image: "1f468-1f3fc-200d-1f692.png",
  				sheet_x: 17,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F468-1F3FD-200D-1F692",
  				non_qualified: null,
  				image: "1f468-1f3fd-200d-1f692.png",
  				sheet_x: 17,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F468-1F3FE-200D-1F692",
  				non_qualified: null,
  				image: "1f468-1f3fe-200d-1f692.png",
  				sheet_x: 17,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F468-1F3FF-200D-1F692",
  				non_qualified: null,
  				image: "1f468-1f3ff-200d-1f692.png",
  				sheet_x: 17,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Firefighter",
  		b: "1F468-200D-1F692",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			17,
  			37
  		]
  	},
  	"flag-ly": {
  		a: "Libya Flag",
  		b: "1F1F1-1F1FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			16
  		]
  	},
  	symbols: {
  		a: "Input Symbol for Symbols",
  		b: "1F523",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"music",
  			"note",
  			"ampersand",
  			"percent",
  			"glyphs",
  			"characters"
  		],
  		k: [
  			27,
  			37
  		]
  	},
  	clock430: {
  		a: "Clock Face Four-Thirty",
  		b: "1F55F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			33
  		]
  	},
  	"flag-ma": {
  		a: "Morocco Flag",
  		b: "1F1F2-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			17
  		]
  	},
  	compression: {
  		a: "Compression",
  		b: "1F5DC-FE0F",
  		c: "1F5DC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			30,
  			10
  		],
  		o: 7
  	},
  	"female-firefighter": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F469-1F3FB-200D-1F692",
  				non_qualified: null,
  				image: "1f469-1f3fb-200d-1f692.png",
  				sheet_x: 19,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F469-1F3FC-200D-1F692",
  				non_qualified: null,
  				image: "1f469-1f3fc-200d-1f692.png",
  				sheet_x: 19,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F469-1F3FD-200D-1F692",
  				non_qualified: null,
  				image: "1f469-1f3fd-200d-1f692.png",
  				sheet_x: 19,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F469-1F3FE-200D-1F692",
  				non_qualified: null,
  				image: "1f469-1f3fe-200d-1f692.png",
  				sheet_x: 19,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F469-1F3FF-200D-1F692",
  				non_qualified: null,
  				image: "1f469-1f3ff-200d-1f692.png",
  				sheet_x: 20,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Firefighter",
  		b: "1F469-200D-1F692",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			47
  		]
  	},
  	abc: {
  		a: "Input Symbol for Latin Letters",
  		b: "1F524",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"alphabet"
  		],
  		k: [
  			27,
  			38
  		]
  	},
  	clock5: {
  		a: "Clock Face Five Oclock",
  		b: "1F554",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			22
  		]
  	},
  	clock530: {
  		a: "Clock Face Five-Thirty",
  		b: "1F560",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			34
  		]
  	},
  	a: {
  		a: "Negative Squared Latin Capital Letter a",
  		b: "1F170-FE0F",
  		c: "1F170",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"red-square",
  			"alphabet",
  			"letter"
  		],
  		k: [
  			0,
  			16
  		]
  	},
  	alembic: {
  		a: "Alembic",
  		b: "2697-FE0F",
  		c: "2697",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"distilling",
  			"science",
  			"experiment",
  			"chemistry"
  		],
  		k: [
  			48,
  			16
  		],
  		o: 4
  	},
  	"flag-mc": {
  		a: "Monaco Flag",
  		b: "1F1F2-1F1E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			18
  		]
  	},
  	cop: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F46E-1F3FB",
  				non_qualified: null,
  				image: "1f46e-1f3fb.png",
  				sheet_x: 20,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F46E-1F3FC",
  				non_qualified: null,
  				image: "1f46e-1f3fc.png",
  				sheet_x: 20,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F46E-1F3FD",
  				non_qualified: null,
  				image: "1f46e-1f3fd.png",
  				sheet_x: 20,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F46E-1F3FE",
  				non_qualified: null,
  				image: "1f46e-1f3fe.png",
  				sheet_x: 20,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F46E-1F3FF",
  				non_qualified: null,
  				image: "1f46e-1f3ff.png",
  				sheet_x: 20,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F46E-200D-2642-FE0F",
  		a: "Police Officer",
  		b: "1F46E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			20,
  			45
  		]
  	},
  	scales: {
  		a: "Scales",
  		b: "2696-FE0F",
  		c: "2696",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			48,
  			15
  		],
  		o: 4
  	},
  	clock6: {
  		a: "Clock Face Six Oclock",
  		b: "1F555",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule",
  			"dawn",
  			"dusk"
  		],
  		k: [
  			28,
  			23
  		]
  	},
  	"flag-md": {
  		a: "Moldova Flag",
  		b: "1F1F2-1F1E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			19
  		]
  	},
  	ab: {
  		a: "Negative Squared Ab",
  		b: "1F18E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"red-square",
  			"alphabet"
  		],
  		k: [
  			0,
  			20
  		]
  	},
  	"male-police-officer": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F46E-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F46E-1F3FB-200D-2642",
  				image: "1f46e-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F46E-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F46E-1F3FC-200D-2642",
  				image: "1f46e-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F46E-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F46E-1F3FD-200D-2642",
  				image: "1f46e-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F46E-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F46E-1F3FE-200D-2642",
  				image: "1f46e-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F46E-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F46E-1F3FF-200D-2642",
  				image: "1f46e-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F46E",
  		a: "Male Police Officer",
  		b: "1F46E-200D-2642-FE0F",
  		c: "1F46E-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			20,
  			39
  		]
  	},
  	link: {
  		a: "Link Symbol",
  		b: "1F517",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"rings",
  			"url"
  		],
  		k: [
  			27,
  			25
  		]
  	},
  	"flag-me": {
  		a: "Montenegro Flag",
  		b: "1F1F2-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			20
  		]
  	},
  	clock630: {
  		a: "Clock Face Six-Thirty",
  		b: "1F561",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			35
  		]
  	},
  	b: {
  		a: "Negative Squared Latin Capital Letter B",
  		b: "1F171-FE0F",
  		c: "1F171",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"red-square",
  			"alphabet",
  			"letter"
  		],
  		k: [
  			0,
  			17
  		]
  	},
  	"female-police-officer": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F46E-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F46E-1F3FB-200D-2640",
  				image: "1f46e-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F46E-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F46E-1F3FC-200D-2640",
  				image: "1f46e-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F46E-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F46E-1F3FD-200D-2640",
  				image: "1f46e-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F46E-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F46E-1F3FE-200D-2640",
  				image: "1f46e-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F46E-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F46E-1F3FF-200D-2640",
  				image: "1f46e-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 20,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Police Officer",
  		b: "1F46E-200D-2640-FE0F",
  		c: "1F46E-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			20,
  			33
  		]
  	},
  	clock7: {
  		a: "Clock Face Seven Oclock",
  		b: "1F556",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			24
  		]
  	},
  	cl: {
  		a: "Squared Cl",
  		b: "1F191",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"alphabet",
  			"words",
  			"red-square"
  		],
  		k: [
  			0,
  			21
  		]
  	},
  	sleuth_or_spy: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F575-1F3FB",
  				non_qualified: null,
  				image: "1f575-1f3fb.png",
  				sheet_x: 29,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F575-1F3FC",
  				non_qualified: null,
  				image: "1f575-1f3fc.png",
  				sheet_x: 29,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F575-1F3FD",
  				non_qualified: null,
  				image: "1f575-1f3fd.png",
  				sheet_x: 29,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F575-1F3FE",
  				non_qualified: null,
  				image: "1f575-1f3fe.png",
  				sheet_x: 29,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F575-1F3FF",
  				non_qualified: null,
  				image: "1f575-1f3ff.png",
  				sheet_x: 29,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoleted_by: "1F575-FE0F-200D-2642-FE0F",
  		a: "Sleuth or Spy",
  		b: "1F575-FE0F",
  		c: "1F575",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			29,
  			11
  		],
  		o: 7
  	},
  	"flag-mf": {
  		a: "St. Martin Flag",
  		b: "1F1F2-1F1EB",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			21
  		]
  	},
  	chains: {
  		a: "Chains",
  		b: "26D3-FE0F",
  		c: "26D3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"lock",
  			"arrest"
  		],
  		k: [
  			48,
  			34
  		],
  		o: 5
  	},
  	syringe: {
  		a: "Syringe",
  		b: "1F489",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"health",
  			"hospital",
  			"drugs",
  			"blood",
  			"medicine",
  			"needle",
  			"doctor",
  			"nurse"
  		],
  		k: [
  			24,
  			35
  		]
  	},
  	"male-detective": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F575-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F575-1F3FB-200D-2642",
  				image: "1f575-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F575-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F575-1F3FC-200D-2642",
  				image: "1f575-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F575-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F575-1F3FD-200D-2642",
  				image: "1f575-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F575-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F575-1F3FE-200D-2642",
  				image: "1f575-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F575-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F575-1F3FF-200D-2642",
  				image: "1f575-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F575-FE0F",
  		a: "Male Detective",
  		b: "1F575-FE0F-200D-2642-FE0F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			29,
  			5
  		],
  		o: 7
  	},
  	cool: {
  		a: "Squared Cool",
  		b: "1F192",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"words",
  			"blue-square"
  		],
  		k: [
  			0,
  			22
  		]
  	},
  	clock730: {
  		a: "Clock Face Seven-Thirty",
  		b: "1F562",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			36
  		]
  	},
  	"flag-mg": {
  		a: "Madagascar Flag",
  		b: "1F1F2-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			22
  		]
  	},
  	free: {
  		a: "Squared Free",
  		b: "1F193",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"words"
  		],
  		k: [
  			0,
  			23
  		]
  	},
  	"flag-mh": {
  		a: "Marshall Islands Flag",
  		b: "1F1F2-1F1ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			23
  		]
  	},
  	clock8: {
  		a: "Clock Face Eight Oclock",
  		b: "1F557",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			25
  		]
  	},
  	pill: {
  		a: "Pill",
  		b: "1F48A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"health",
  			"medicine",
  			"doctor",
  			"pharmacy",
  			"drug"
  		],
  		k: [
  			24,
  			36
  		]
  	},
  	"female-detective": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F575-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F575-1F3FB-200D-2640",
  				image: "1f575-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F575-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F575-1F3FC-200D-2640",
  				image: "1f575-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F575-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F575-1F3FD-200D-2640",
  				image: "1f575-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F575-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F575-1F3FE-200D-2640",
  				image: "1f575-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F575-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F575-1F3FF-200D-2640",
  				image: "1f575-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 29,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Detective",
  		b: "1F575-FE0F-200D-2640-FE0F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			28,
  			51
  		],
  		o: 7
  	},
  	clock830: {
  		a: "Clock Face Eight-Thirty",
  		b: "1F563",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			37
  		]
  	},
  	guardsman: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F482-1F3FB",
  				non_qualified: null,
  				image: "1f482-1f3fb.png",
  				sheet_x: 23,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F482-1F3FC",
  				non_qualified: null,
  				image: "1f482-1f3fc.png",
  				sheet_x: 23,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F482-1F3FD",
  				non_qualified: null,
  				image: "1f482-1f3fd.png",
  				sheet_x: 23,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F482-1F3FE",
  				non_qualified: null,
  				image: "1f482-1f3fe.png",
  				sheet_x: 23,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F482-1F3FF",
  				non_qualified: null,
  				image: "1f482-1f3ff.png",
  				sheet_x: 23,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F482-200D-2642-FE0F",
  		a: "Guardsman",
  		b: "1F482",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		j: [
  			"uk",
  			"gb",
  			"british",
  			"male",
  			"guy",
  			"royal"
  		],
  		k: [
  			23,
  			31
  		]
  	},
  	information_source: {
  		a: "Information Source",
  		b: "2139-FE0F",
  		c: "2139",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"alphabet",
  			"letter"
  		],
  		k: [
  			46,
  			32
  		],
  		o: 3
  	},
  	"flag-mk": {
  		a: "Macedonia Flag",
  		b: "1F1F2-1F1F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			24
  		]
  	},
  	smoking: {
  		a: "Smoking Symbol",
  		b: "1F6AC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"kills",
  			"tobacco",
  			"cigarette",
  			"joint",
  			"smoke"
  		],
  		k: [
  			35,
  			17
  		]
  	},
  	id: {
  		a: "Squared Id",
  		b: "1F194",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"purple-square",
  			"words"
  		],
  		k: [
  			0,
  			24
  		]
  	},
  	clock9: {
  		a: "Clock Face Nine Oclock",
  		b: "1F558",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			26
  		]
  	},
  	"flag-ml": {
  		a: "Mali Flag",
  		b: "1F1F2-1F1F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			25
  		]
  	},
  	coffin: {
  		a: "Coffin",
  		b: "26B0-FE0F",
  		c: "26B0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"vampire",
  			"dead",
  			"die",
  			"death",
  			"rip",
  			"graveyard",
  			"cemetery",
  			"casket",
  			"funeral",
  			"box"
  		],
  		k: [
  			48,
  			24
  		],
  		o: 4
  	},
  	"male-guard": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F482-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F482-1F3FB-200D-2642",
  				image: "1f482-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F482-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F482-1F3FC-200D-2642",
  				image: "1f482-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F482-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F482-1F3FD-200D-2642",
  				image: "1f482-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F482-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F482-1F3FE-200D-2642",
  				image: "1f482-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F482-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F482-1F3FF-200D-2642",
  				image: "1f482-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F482",
  		a: "Male Guard",
  		b: "1F482-200D-2642-FE0F",
  		c: "1F482-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			23,
  			25
  		]
  	},
  	m: {
  		a: "Circled Latin Capital Letter M",
  		b: "24C2-FE0F",
  		c: "24C2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"alphabet",
  			"blue-circle",
  			"letter"
  		],
  		k: [
  			47,
  			7
  		],
  		o: 1
  	},
  	funeral_urn: {
  		a: "Funeral Urn",
  		b: "26B1-FE0F",
  		c: "26B1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"dead",
  			"die",
  			"death",
  			"rip",
  			"ashes"
  		],
  		k: [
  			48,
  			25
  		],
  		o: 4
  	},
  	"female-guard": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F482-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F482-1F3FB-200D-2640",
  				image: "1f482-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F482-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F482-1F3FC-200D-2640",
  				image: "1f482-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F482-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F482-1F3FD-200D-2640",
  				image: "1f482-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F482-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F482-1F3FE-200D-2640",
  				image: "1f482-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F482-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F482-1F3FF-200D-2640",
  				image: "1f482-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Guard",
  		b: "1F482-200D-2640-FE0F",
  		c: "1F482-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			23,
  			19
  		]
  	},
  	"flag-mm": {
  		a: "Myanmar (burma) Flag",
  		b: "1F1F2-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			26
  		]
  	},
  	clock930: {
  		a: "Clock Face Nine-Thirty",
  		b: "1F564",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			38
  		]
  	},
  	moyai: {
  		a: "Moyai",
  		b: "1F5FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"rock",
  			"easter island",
  			"moai"
  		],
  		k: [
  			30,
  			23
  		]
  	},
  	"new": {
  		a: "Squared New",
  		b: "1F195",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"words",
  			"start"
  		],
  		k: [
  			0,
  			25
  		]
  	},
  	"flag-mn": {
  		a: "Mongolia Flag",
  		b: "1F1F2-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			27
  		]
  	},
  	construction_worker: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F477-1F3FB",
  				non_qualified: null,
  				image: "1f477-1f3fb.png",
  				sheet_x: 22,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F477-1F3FC",
  				non_qualified: null,
  				image: "1f477-1f3fc.png",
  				sheet_x: 22,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F477-1F3FD",
  				non_qualified: null,
  				image: "1f477-1f3fd.png",
  				sheet_x: 22,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F477-1F3FE",
  				non_qualified: null,
  				image: "1f477-1f3fe.png",
  				sheet_x: 22,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F477-1F3FF",
  				non_qualified: null,
  				image: "1f477-1f3ff.png",
  				sheet_x: 22,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F477-200D-2642-FE0F",
  		a: "Construction Worker",
  		b: "1F477",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			22,
  			28
  		]
  	},
  	clock10: {
  		a: "Clock Face Ten Oclock",
  		b: "1F559",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			27
  		]
  	},
  	clock1030: {
  		a: "Clock Face Ten-Thirty",
  		b: "1F565",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			39
  		]
  	},
  	ng: {
  		a: "Squared Ng",
  		b: "1F196",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"words",
  			"shape",
  			"icon"
  		],
  		k: [
  			0,
  			26
  		]
  	},
  	"male-construction-worker": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F477-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F477-1F3FB-200D-2642",
  				image: "1f477-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F477-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F477-1F3FC-200D-2642",
  				image: "1f477-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F477-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F477-1F3FD-200D-2642",
  				image: "1f477-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F477-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F477-1F3FE-200D-2642",
  				image: "1f477-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F477-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F477-1F3FF-200D-2642",
  				image: "1f477-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F477",
  		a: "Male Construction Worker",
  		b: "1F477-200D-2642-FE0F",
  		c: "1F477-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			22,
  			22
  		]
  	},
  	"flag-mo": {
  		a: "Macau Sar China Flag",
  		b: "1F1F2-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			28
  		]
  	},
  	oil_drum: {
  		a: "Oil Drum",
  		b: "1F6E2-FE0F",
  		c: "1F6E2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"barrell"
  		],
  		k: [
  			37,
  			10
  		],
  		o: 7
  	},
  	o2: {
  		a: "Negative Squared Latin Capital Letter O",
  		b: "1F17E-FE0F",
  		c: "1F17E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"alphabet",
  			"red-square",
  			"letter"
  		],
  		k: [
  			0,
  			18
  		]
  	},
  	"female-construction-worker": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F477-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F477-1F3FB-200D-2640",
  				image: "1f477-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F477-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F477-1F3FC-200D-2640",
  				image: "1f477-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F477-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F477-1F3FD-200D-2640",
  				image: "1f477-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F477-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F477-1F3FE-200D-2640",
  				image: "1f477-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F477-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F477-1F3FF-200D-2640",
  				image: "1f477-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 22,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Construction Worker",
  		b: "1F477-200D-2640-FE0F",
  		c: "1F477-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			22,
  			16
  		]
  	},
  	clock11: {
  		a: "Clock Face Eleven Oclock",
  		b: "1F55A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			28
  		]
  	},
  	crystal_ball: {
  		a: "Crystal Ball",
  		b: "1F52E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"disco",
  			"party",
  			"magic",
  			"circus",
  			"fortune_teller"
  		],
  		k: [
  			27,
  			48
  		]
  	},
  	"flag-mp": {
  		a: "Northern Mariana Islands Flag",
  		b: "1F1F2-1F1F5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			29
  		]
  	},
  	"flag-mq": {
  		a: "Martinique Flag",
  		b: "1F1F2-1F1F6",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			30
  		]
  	},
  	prince: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F934-1F3FB",
  				non_qualified: null,
  				image: "1f934-1f3fb.png",
  				sheet_x: 39,
  				sheet_y: 29,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F934-1F3FC",
  				non_qualified: null,
  				image: "1f934-1f3fc.png",
  				sheet_x: 39,
  				sheet_y: 30,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F934-1F3FD",
  				non_qualified: null,
  				image: "1f934-1f3fd.png",
  				sheet_x: 39,
  				sheet_y: 31,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F934-1F3FE",
  				non_qualified: null,
  				image: "1f934-1f3fe.png",
  				sheet_x: 39,
  				sheet_y: 32,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F934-1F3FF",
  				non_qualified: null,
  				image: "1f934-1f3ff.png",
  				sheet_x: 39,
  				sheet_y: 33,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Prince",
  		b: "1F934",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"boy",
  			"man",
  			"male",
  			"crown",
  			"royal",
  			"king"
  		],
  		k: [
  			39,
  			28
  		],
  		o: 9
  	},
  	ok: {
  		a: "Squared Ok",
  		b: "1F197",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"good",
  			"agree",
  			"yes",
  			"blue-square"
  		],
  		k: [
  			0,
  			27
  		]
  	},
  	clock1130: {
  		a: "Clock Face Eleven-Thirty",
  		b: "1F566",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"time",
  			"late",
  			"early",
  			"schedule"
  		],
  		k: [
  			28,
  			40
  		]
  	},
  	shopping_trolley: {
  		a: "Shopping Trolley",
  		b: "1F6D2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			7
  		],
  		o: 9
  	},
  	"flag-mr": {
  		a: "Mauritania Flag",
  		b: "1F1F2-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			31
  		]
  	},
  	princess: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F478-1F3FB",
  				non_qualified: null,
  				image: "1f478-1f3fb.png",
  				sheet_x: 22,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F478-1F3FC",
  				non_qualified: null,
  				image: "1f478-1f3fc.png",
  				sheet_x: 22,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F478-1F3FD",
  				non_qualified: null,
  				image: "1f478-1f3fd.png",
  				sheet_x: 22,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F478-1F3FE",
  				non_qualified: null,
  				image: "1f478-1f3fe.png",
  				sheet_x: 22,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F478-1F3FF",
  				non_qualified: null,
  				image: "1f478-1f3ff.png",
  				sheet_x: 22,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Princess",
  		b: "1F478",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"girl",
  			"woman",
  			"female",
  			"blond",
  			"crown",
  			"royal",
  			"queen"
  		],
  		k: [
  			22,
  			34
  		]
  	},
  	new_moon: {
  		a: "New Moon Symbol",
  		b: "1F311",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			9
  		]
  	},
  	parking: {
  		a: "Negative Squared Latin Capital Letter P",
  		b: "1F17F-FE0F",
  		c: "1F17F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"cars",
  			"blue-square",
  			"alphabet",
  			"letter"
  		],
  		k: [
  			0,
  			19
  		],
  		o: 5
  	},
  	sos: {
  		a: "Squared Sos",
  		b: "1F198",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"help",
  			"red-square",
  			"words",
  			"emergency",
  			"911"
  		],
  		k: [
  			0,
  			28
  		]
  	},
  	man_with_turban: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F473-1F3FB",
  				non_qualified: null,
  				image: "1f473-1f3fb.png",
  				sheet_x: 21,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F473-1F3FC",
  				non_qualified: null,
  				image: "1f473-1f3fc.png",
  				sheet_x: 21,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F473-1F3FD",
  				non_qualified: null,
  				image: "1f473-1f3fd.png",
  				sheet_x: 21,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F473-1F3FE",
  				non_qualified: null,
  				image: "1f473-1f3fe.png",
  				sheet_x: 21,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F473-1F3FF",
  				non_qualified: null,
  				image: "1f473-1f3ff.png",
  				sheet_x: 21,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F473-200D-2642-FE0F",
  		a: "Man with Turban",
  		b: "1F473",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		j: [
  			"male",
  			"indian",
  			"hinduism",
  			"arabs"
  		],
  		k: [
  			21,
  			44
  		]
  	},
  	"flag-ms": {
  		a: "Montserrat Flag",
  		b: "1F1F2-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			32
  		]
  	},
  	waxing_crescent_moon: {
  		a: "Waxing Crescent Moon Symbol",
  		b: "1F312",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			10
  		]
  	},
  	up: {
  		a: "Squared Up with Exclamation Mark",
  		b: "1F199",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"above",
  			"high"
  		],
  		k: [
  			0,
  			29
  		]
  	},
  	first_quarter_moon: {
  		a: "First Quarter Moon Symbol",
  		b: "1F313",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			11
  		]
  	},
  	"flag-mt": {
  		a: "Malta Flag",
  		b: "1F1F2-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			33
  		]
  	},
  	"man-wearing-turban": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F473-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F473-1F3FB-200D-2642",
  				image: "1f473-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F473-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F473-1F3FC-200D-2642",
  				image: "1f473-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F473-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F473-1F3FD-200D-2642",
  				image: "1f473-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F473-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F473-1F3FE-200D-2642",
  				image: "1f473-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F473-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F473-1F3FF-200D-2642",
  				image: "1f473-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F473",
  		a: "Man Wearing Turban",
  		b: "1F473-200D-2642-FE0F",
  		c: "1F473-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			21,
  			38
  		]
  	},
  	moon: {
  		a: "Waxing Gibbous Moon Symbol",
  		b: "1F314",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			6,
  			12
  		],
  		n: [
  			"waxing_gibbous_moon"
  		]
  	},
  	"woman-wearing-turban": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F473-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F473-1F3FB-200D-2640",
  				image: "1f473-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F473-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F473-1F3FC-200D-2640",
  				image: "1f473-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F473-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F473-1F3FD-200D-2640",
  				image: "1f473-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F473-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F473-1F3FE-200D-2640",
  				image: "1f473-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F473-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F473-1F3FF-200D-2640",
  				image: "1f473-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Wearing Turban",
  		b: "1F473-200D-2640-FE0F",
  		c: "1F473-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			21,
  			32
  		]
  	},
  	vs: {
  		a: "Squared Vs",
  		b: "1F19A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"words",
  			"orange-square"
  		],
  		k: [
  			0,
  			30
  		]
  	},
  	"flag-mu": {
  		a: "Mauritius Flag",
  		b: "1F1F2-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			34
  		]
  	},
  	man_with_gua_pi_mao: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F472-1F3FB",
  				non_qualified: null,
  				image: "1f472-1f3fb.png",
  				sheet_x: 21,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F472-1F3FC",
  				non_qualified: null,
  				image: "1f472-1f3fc.png",
  				sheet_x: 21,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F472-1F3FD",
  				non_qualified: null,
  				image: "1f472-1f3fd.png",
  				sheet_x: 21,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F472-1F3FE",
  				non_qualified: null,
  				image: "1f472-1f3fe.png",
  				sheet_x: 21,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F472-1F3FF",
  				non_qualified: null,
  				image: "1f472-1f3ff.png",
  				sheet_x: 21,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Man with Gua Pi Mao",
  		b: "1F472",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"male",
  			"boy",
  			"chinese"
  		],
  		k: [
  			21,
  			26
  		]
  	},
  	koko: {
  		a: "Squared Katakana Koko",
  		b: "1F201",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue-square",
  			"here",
  			"katakana",
  			"japanese",
  			"destination"
  		],
  		k: [
  			5,
  			29
  		]
  	},
  	full_moon: {
  		a: "Full Moon Symbol",
  		b: "1F315",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"yellow",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			13
  		]
  	},
  	"flag-mv": {
  		a: "Maldives Flag",
  		b: "1F1F2-1F1FB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			35
  		]
  	},
  	person_with_headscarf: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D5-1F3FB",
  				non_qualified: null,
  				image: "1f9d5-1f3fb.png",
  				sheet_x: 43,
  				sheet_y: 23,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9D5-1F3FC",
  				non_qualified: null,
  				image: "1f9d5-1f3fc.png",
  				sheet_x: 43,
  				sheet_y: 24,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9D5-1F3FD",
  				non_qualified: null,
  				image: "1f9d5-1f3fd.png",
  				sheet_x: 43,
  				sheet_y: 25,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9D5-1F3FE",
  				non_qualified: null,
  				image: "1f9d5-1f3fe.png",
  				sheet_x: 43,
  				sheet_y: 26,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9D5-1F3FF",
  				non_qualified: null,
  				image: "1f9d5-1f3ff.png",
  				sheet_x: 43,
  				sheet_y: 27,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Person with Headscarf",
  		b: "1F9D5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			43,
  			22
  		],
  		o: 10
  	},
  	waning_gibbous_moon: {
  		a: "Waning Gibbous Moon Symbol",
  		b: "1F316",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep",
  			"waxing_gibbous_moon"
  		],
  		k: [
  			6,
  			14
  		]
  	},
  	sa: {
  		a: "Squared Katakana Sa",
  		b: "1F202-FE0F",
  		c: "1F202",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"japanese",
  			"blue-square",
  			"katakana"
  		],
  		k: [
  			5,
  			30
  		]
  	},
  	"flag-mw": {
  		a: "Malawi Flag",
  		b: "1F1F2-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			36
  		]
  	},
  	last_quarter_moon: {
  		a: "Last Quarter Moon Symbol",
  		b: "1F317",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			15
  		]
  	},
  	u6708: {
  		a: "Squared Cjk Unified Ideograph-6708",
  		b: "1F237-FE0F",
  		c: "1F237",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"chinese",
  			"month",
  			"moon",
  			"japanese",
  			"orange-square",
  			"kanji"
  		],
  		k: [
  			5,
  			38
  		]
  	},
  	bearded_person: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D4-1F3FB",
  				non_qualified: null,
  				image: "1f9d4-1f3fb.png",
  				sheet_x: 43,
  				sheet_y: 17,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9D4-1F3FC",
  				non_qualified: null,
  				image: "1f9d4-1f3fc.png",
  				sheet_x: 43,
  				sheet_y: 18,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9D4-1F3FD",
  				non_qualified: null,
  				image: "1f9d4-1f3fd.png",
  				sheet_x: 43,
  				sheet_y: 19,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9D4-1F3FE",
  				non_qualified: null,
  				image: "1f9d4-1f3fe.png",
  				sheet_x: 43,
  				sheet_y: 20,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9D4-1F3FF",
  				non_qualified: null,
  				image: "1f9d4-1f3ff.png",
  				sheet_x: 43,
  				sheet_y: 21,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Bearded Person",
  		b: "1F9D4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			43,
  			16
  		],
  		o: 10
  	},
  	"flag-mx": {
  		a: "Mexico Flag",
  		b: "1F1F2-1F1FD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			37
  		]
  	},
  	u6709: {
  		a: "Squared Cjk Unified Ideograph-6709",
  		b: "1F236",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"orange-square",
  			"chinese",
  			"have",
  			"kanji"
  		],
  		k: [
  			5,
  			37
  		]
  	},
  	person_with_blond_hair: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F471-1F3FB",
  				non_qualified: null,
  				image: "1f471-1f3fb.png",
  				sheet_x: 21,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F471-1F3FC",
  				non_qualified: null,
  				image: "1f471-1f3fc.png",
  				sheet_x: 21,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F471-1F3FD",
  				non_qualified: null,
  				image: "1f471-1f3fd.png",
  				sheet_x: 21,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F471-1F3FE",
  				non_qualified: null,
  				image: "1f471-1f3fe.png",
  				sheet_x: 21,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F471-1F3FF",
  				non_qualified: null,
  				image: "1f471-1f3ff.png",
  				sheet_x: 21,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F471-200D-2642-FE0F",
  		a: "Person with Blond Hair",
  		b: "1F471",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			21,
  			20
  		]
  	},
  	waning_crescent_moon: {
  		a: "Waning Crescent Moon Symbol",
  		b: "1F318",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			16
  		]
  	},
  	"flag-my": {
  		a: "Malaysia Flag",
  		b: "1F1F2-1F1FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			38
  		]
  	},
  	u6307: {
  		a: "Squared Cjk Unified Ideograph-6307",
  		b: "1F22F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"chinese",
  			"point",
  			"green-square",
  			"kanji"
  		],
  		k: [
  			5,
  			32
  		],
  		o: 5
  	},
  	"blond-haired-man": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F471-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F471-1F3FB-200D-2642",
  				image: "1f471-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F471-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F471-1F3FC-200D-2642",
  				image: "1f471-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F471-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F471-1F3FD-200D-2642",
  				image: "1f471-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F471-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F471-1F3FE-200D-2642",
  				image: "1f471-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F471-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F471-1F3FF-200D-2642",
  				image: "1f471-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F471",
  		a: "Blond Haired Man",
  		b: "1F471-200D-2642-FE0F",
  		c: "1F471-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			21,
  			14
  		]
  	},
  	crescent_moon: {
  		a: "Crescent Moon",
  		b: "1F319",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"night",
  			"sleep",
  			"sky",
  			"evening",
  			"magic"
  		],
  		k: [
  			6,
  			17
  		]
  	},
  	"flag-mz": {
  		a: "Mozambique Flag",
  		b: "1F1F2-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			39
  		]
  	},
  	new_moon_with_face: {
  		a: "New Moon with Face",
  		b: "1F31A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			18
  		]
  	},
  	"flag-na": {
  		a: "Namibia Flag",
  		b: "1F1F3-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			40
  		]
  	},
  	"blond-haired-woman": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F471-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F471-1F3FB-200D-2640",
  				image: "1f471-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F471-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F471-1F3FC-200D-2640",
  				image: "1f471-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F471-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F471-1F3FD-200D-2640",
  				image: "1f471-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F471-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F471-1F3FE-200D-2640",
  				image: "1f471-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F471-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F471-1F3FF-200D-2640",
  				image: "1f471-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 21,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Blond Haired Woman",
  		b: "1F471-200D-2640-FE0F",
  		c: "1F471-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			21,
  			8
  		]
  	},
  	ideograph_advantage: {
  		a: "Circled Ideograph Advantage",
  		b: "1F250",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"chinese",
  			"kanji",
  			"obtain",
  			"get",
  			"circle"
  		],
  		k: [
  			5,
  			42
  		]
  	},
  	first_quarter_moon_with_face: {
  		a: "First Quarter Moon with Face",
  		b: "1F31B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			19
  		]
  	},
  	man_in_tuxedo: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F935-1F3FB",
  				non_qualified: null,
  				image: "1f935-1f3fb.png",
  				sheet_x: 39,
  				sheet_y: 35,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F935-1F3FC",
  				non_qualified: null,
  				image: "1f935-1f3fc.png",
  				sheet_x: 39,
  				sheet_y: 36,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F935-1F3FD",
  				non_qualified: null,
  				image: "1f935-1f3fd.png",
  				sheet_x: 39,
  				sheet_y: 37,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F935-1F3FE",
  				non_qualified: null,
  				image: "1f935-1f3fe.png",
  				sheet_x: 39,
  				sheet_y: 38,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F935-1F3FF",
  				non_qualified: null,
  				image: "1f935-1f3ff.png",
  				sheet_x: 39,
  				sheet_y: 39,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Man in Tuxedo",
  		b: "1F935",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"couple",
  			"marriage",
  			"wedding",
  			"groom"
  		],
  		k: [
  			39,
  			34
  		],
  		o: 9
  	},
  	"flag-nc": {
  		a: "New Caledonia Flag",
  		b: "1F1F3-1F1E8",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			41
  		]
  	},
  	u5272: {
  		a: "Squared Cjk Unified Ideograph-5272",
  		b: "1F239",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"cut",
  			"divide",
  			"chinese",
  			"kanji",
  			"pink-square"
  		],
  		k: [
  			5,
  			40
  		]
  	},
  	"flag-ne": {
  		a: "Niger Flag",
  		b: "1F1F3-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			42
  		]
  	},
  	last_quarter_moon_with_face: {
  		a: "Last Quarter Moon with Face",
  		b: "1F31C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			20
  		]
  	},
  	u7121: {
  		a: "Squared Cjk Unified Ideograph-7121",
  		b: "1F21A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nothing",
  			"chinese",
  			"kanji",
  			"japanese",
  			"orange-square"
  		],
  		k: [
  			5,
  			31
  		],
  		o: 5
  	},
  	bride_with_veil: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F470-1F3FB",
  				non_qualified: null,
  				image: "1f470-1f3fb.png",
  				sheet_x: 21,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F470-1F3FC",
  				non_qualified: null,
  				image: "1f470-1f3fc.png",
  				sheet_x: 21,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F470-1F3FD",
  				non_qualified: null,
  				image: "1f470-1f3fd.png",
  				sheet_x: 21,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F470-1F3FE",
  				non_qualified: null,
  				image: "1f470-1f3fe.png",
  				sheet_x: 21,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F470-1F3FF",
  				non_qualified: null,
  				image: "1f470-1f3ff.png",
  				sheet_x: 21,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Bride with Veil",
  		b: "1F470",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"couple",
  			"marriage",
  			"wedding",
  			"woman",
  			"bride"
  		],
  		k: [
  			21,
  			2
  		]
  	},
  	u7981: {
  		a: "Squared Cjk Unified Ideograph-7981",
  		b: "1F232",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"kanji",
  			"japanese",
  			"chinese",
  			"forbidden",
  			"limit",
  			"restricted",
  			"red-square"
  		],
  		k: [
  			5,
  			33
  		]
  	},
  	pregnant_woman: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F930-1F3FB",
  				non_qualified: null,
  				image: "1f930-1f3fb.png",
  				sheet_x: 39,
  				sheet_y: 5,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F930-1F3FC",
  				non_qualified: null,
  				image: "1f930-1f3fc.png",
  				sheet_x: 39,
  				sheet_y: 6,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F930-1F3FD",
  				non_qualified: null,
  				image: "1f930-1f3fd.png",
  				sheet_x: 39,
  				sheet_y: 7,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F930-1F3FE",
  				non_qualified: null,
  				image: "1f930-1f3fe.png",
  				sheet_x: 39,
  				sheet_y: 8,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F930-1F3FF",
  				non_qualified: null,
  				image: "1f930-1f3ff.png",
  				sheet_x: 39,
  				sheet_y: 9,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Pregnant Woman",
  		b: "1F930",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"baby"
  		],
  		k: [
  			39,
  			4
  		],
  		o: 9
  	},
  	thermometer: {
  		a: "Thermometer",
  		b: "1F321-FE0F",
  		c: "1F321",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"weather",
  			"temperature",
  			"hot",
  			"cold"
  		],
  		k: [
  			6,
  			25
  		],
  		o: 7
  	},
  	"flag-nf": {
  		a: "Norfolk Island Flag",
  		b: "1F1F3-1F1EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			43
  		]
  	},
  	sunny: {
  		a: "Black Sun with Rays",
  		b: "2600-FE0F",
  		c: "2600",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"weather",
  			"nature",
  			"brightness",
  			"summer",
  			"beach",
  			"spring"
  		],
  		k: [
  			47,
  			16
  		],
  		o: 1
  	},
  	accept: {
  		a: "Circled Ideograph Accept",
  		b: "1F251",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"ok",
  			"good",
  			"chinese",
  			"kanji",
  			"agree",
  			"yes",
  			"orange-circle"
  		],
  		k: [
  			5,
  			43
  		]
  	},
  	"flag-ng": {
  		a: "Nigeria Flag",
  		b: "1F1F3-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			44
  		]
  	},
  	"breast-feeding": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F931-1F3FB",
  				non_qualified: null,
  				image: "1f931-1f3fb.png",
  				sheet_x: 39,
  				sheet_y: 11,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F931-1F3FC",
  				non_qualified: null,
  				image: "1f931-1f3fc.png",
  				sheet_x: 39,
  				sheet_y: 12,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F931-1F3FD",
  				non_qualified: null,
  				image: "1f931-1f3fd.png",
  				sheet_x: 39,
  				sheet_y: 13,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F931-1F3FE",
  				non_qualified: null,
  				image: "1f931-1f3fe.png",
  				sheet_x: 39,
  				sheet_y: 14,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F931-1F3FF",
  				non_qualified: null,
  				image: "1f931-1f3ff.png",
  				sheet_x: 39,
  				sheet_y: 15,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Breast-Feeding",
  		b: "1F931",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			39,
  			10
  		],
  		o: 10
  	},
  	full_moon_with_face: {
  		a: "Full Moon with Face",
  		b: "1F31D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"twilight",
  			"planet",
  			"space",
  			"night",
  			"evening",
  			"sleep"
  		],
  		k: [
  			6,
  			21
  		]
  	},
  	"flag-ni": {
  		a: "Nicaragua Flag",
  		b: "1F1F3-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			45
  		]
  	},
  	u7533: {
  		a: "Squared Cjk Unified Ideograph-7533",
  		b: "1F238",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"chinese",
  			"japanese",
  			"kanji",
  			"orange-square"
  		],
  		k: [
  			5,
  			39
  		]
  	},
  	angel: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F47C-1F3FB",
  				non_qualified: null,
  				image: "1f47c-1f3fb.png",
  				sheet_x: 22,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F47C-1F3FC",
  				non_qualified: null,
  				image: "1f47c-1f3fc.png",
  				sheet_x: 22,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F47C-1F3FD",
  				non_qualified: null,
  				image: "1f47c-1f3fd.png",
  				sheet_x: 22,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F47C-1F3FE",
  				non_qualified: null,
  				image: "1f47c-1f3fe.png",
  				sheet_x: 22,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F47C-1F3FF",
  				non_qualified: null,
  				image: "1f47c-1f3ff.png",
  				sheet_x: 22,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Baby Angel",
  		b: "1F47C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"heaven",
  			"wings",
  			"halo"
  		],
  		k: [
  			22,
  			43
  		]
  	},
  	sun_with_face: {
  		a: "Sun with Face",
  		b: "1F31E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"morning",
  			"sky"
  		],
  		k: [
  			6,
  			22
  		]
  	},
  	santa: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F385-1F3FB",
  				non_qualified: null,
  				image: "1f385-1f3fb.png",
  				sheet_x: 8,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F385-1F3FC",
  				non_qualified: null,
  				image: "1f385-1f3fc.png",
  				sheet_x: 8,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F385-1F3FD",
  				non_qualified: null,
  				image: "1f385-1f3fd.png",
  				sheet_x: 8,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F385-1F3FE",
  				non_qualified: null,
  				image: "1f385-1f3fe.png",
  				sheet_x: 8,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F385-1F3FF",
  				non_qualified: null,
  				image: "1f385-1f3ff.png",
  				sheet_x: 8,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Father Christmas",
  		b: "1F385",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"festival",
  			"man",
  			"male",
  			"xmas",
  			"father christmas"
  		],
  		k: [
  			8,
  			19
  		]
  	},
  	u5408: {
  		a: "Squared Cjk Unified Ideograph-5408",
  		b: "1F234",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"japanese",
  			"chinese",
  			"join",
  			"kanji",
  			"red-square"
  		],
  		k: [
  			5,
  			35
  		]
  	},
  	"flag-nl": {
  		a: "Netherlands Flag",
  		b: "1F1F3-1F1F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			46
  		]
  	},
  	mrs_claus: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F936-1F3FB",
  				non_qualified: null,
  				image: "1f936-1f3fb.png",
  				sheet_x: 39,
  				sheet_y: 41,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F936-1F3FC",
  				non_qualified: null,
  				image: "1f936-1f3fc.png",
  				sheet_x: 39,
  				sheet_y: 42,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F936-1F3FD",
  				non_qualified: null,
  				image: "1f936-1f3fd.png",
  				sheet_x: 39,
  				sheet_y: 43,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F936-1F3FE",
  				non_qualified: null,
  				image: "1f936-1f3fe.png",
  				sheet_x: 39,
  				sheet_y: 44,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F936-1F3FF",
  				non_qualified: null,
  				image: "1f936-1f3ff.png",
  				sheet_x: 39,
  				sheet_y: 45,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Mother Christmas",
  		b: "1F936",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"woman",
  			"female",
  			"xmas",
  			"mother christmas"
  		],
  		k: [
  			39,
  			40
  		],
  		n: [
  			"mother_christmas"
  		],
  		o: 9
  	},
  	u7a7a: {
  		a: "Squared Cjk Unified Ideograph-7a7a",
  		b: "1F233",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"kanji",
  			"japanese",
  			"chinese",
  			"empty",
  			"sky",
  			"blue-square"
  		],
  		k: [
  			5,
  			34
  		]
  	},
  	star: {
  		a: "White Medium Star",
  		b: "2B50",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"night",
  			"yellow"
  		],
  		k: [
  			50,
  			22
  		],
  		o: 5
  	},
  	"flag-no": {
  		a: "Norway Flag",
  		b: "1F1F3-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			47
  		]
  	},
  	mage: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D9-1F3FB",
  				non_qualified: null,
  				image: "1f9d9-1f3fb.png",
  				sheet_x: 44,
  				sheet_y: 43,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D9-1F3FB-200D-2640-FE0F"
  			},
  			"1F3FC": {
  				unified: "1F9D9-1F3FC",
  				non_qualified: null,
  				image: "1f9d9-1f3fc.png",
  				sheet_x: 44,
  				sheet_y: 44,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D9-1F3FC-200D-2640-FE0F"
  			},
  			"1F3FD": {
  				unified: "1F9D9-1F3FD",
  				non_qualified: null,
  				image: "1f9d9-1f3fd.png",
  				sheet_x: 44,
  				sheet_y: 45,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D9-1F3FD-200D-2640-FE0F"
  			},
  			"1F3FE": {
  				unified: "1F9D9-1F3FE",
  				non_qualified: null,
  				image: "1f9d9-1f3fe.png",
  				sheet_x: 44,
  				sheet_y: 46,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D9-1F3FE-200D-2640-FE0F"
  			},
  			"1F3FF": {
  				unified: "1F9D9-1F3FF",
  				non_qualified: null,
  				image: "1f9d9-1f3ff.png",
  				sheet_x: 44,
  				sheet_y: 47,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D9-1F3FF-200D-2640-FE0F"
  			}
  		},
  		obsoleted_by: "1F9D9-200D-2640-FE0F",
  		a: "Mage",
  		b: "1F9D9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			44,
  			42
  		],
  		o: 10
  	},
  	star2: {
  		a: "Glowing Star",
  		b: "1F31F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"night",
  			"sparkle",
  			"awesome",
  			"good",
  			"magic"
  		],
  		k: [
  			6,
  			23
  		]
  	},
  	"flag-np": {
  		a: "Nepal Flag",
  		b: "1F1F3-1F1F5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			48
  		]
  	},
  	congratulations: {
  		a: "Circled Ideograph Congratulation",
  		b: "3297-FE0F",
  		c: "3297",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"chinese",
  			"kanji",
  			"japanese",
  			"red-circle"
  		],
  		k: [
  			50,
  			26
  		],
  		o: 1
  	},
  	"flag-nr": {
  		a: "Nauru Flag",
  		b: "1F1F3-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			49
  		]
  	},
  	stars: {
  		a: "Shooting Star",
  		b: "1F320",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"night",
  			"photo"
  		],
  		k: [
  			6,
  			24
  		]
  	},
  	female_mage: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D9-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F9D9-1F3FB-200D-2640",
  				image: "1f9d9-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 31,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D9-1F3FB"
  			},
  			"1F3FC": {
  				unified: "1F9D9-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F9D9-1F3FC-200D-2640",
  				image: "1f9d9-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 32,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D9-1F3FC"
  			},
  			"1F3FD": {
  				unified: "1F9D9-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F9D9-1F3FD-200D-2640",
  				image: "1f9d9-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 33,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D9-1F3FD"
  			},
  			"1F3FE": {
  				unified: "1F9D9-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F9D9-1F3FE-200D-2640",
  				image: "1f9d9-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 34,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D9-1F3FE"
  			},
  			"1F3FF": {
  				unified: "1F9D9-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F9D9-1F3FF-200D-2640",
  				image: "1f9d9-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 35,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D9-1F3FF"
  			}
  		},
  		obsoletes: "1F9D9",
  		a: "Female Mage",
  		b: "1F9D9-200D-2640-FE0F",
  		c: "1F9D9-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			44,
  			30
  		],
  		o: 10
  	},
  	secret: {
  		a: "Circled Ideograph Secret",
  		b: "3299-FE0F",
  		c: "3299",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"privacy",
  			"chinese",
  			"sshh",
  			"kanji",
  			"red-circle"
  		],
  		k: [
  			50,
  			27
  		],
  		o: 1
  	},
  	"flag-nu": {
  		a: "Niue Flag",
  		b: "1F1F3-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			50
  		]
  	},
  	u55b6: {
  		a: "Squared Cjk Unified Ideograph-55b6",
  		b: "1F23A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"japanese",
  			"opening hours",
  			"orange-square"
  		],
  		k: [
  			5,
  			41
  		]
  	},
  	male_mage: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D9-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F9D9-1F3FB-200D-2642",
  				image: "1f9d9-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 37,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9D9-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F9D9-1F3FC-200D-2642",
  				image: "1f9d9-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 38,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9D9-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F9D9-1F3FD-200D-2642",
  				image: "1f9d9-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 39,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9D9-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F9D9-1F3FE-200D-2642",
  				image: "1f9d9-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 40,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9D9-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F9D9-1F3FF-200D-2642",
  				image: "1f9d9-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 41,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Mage",
  		b: "1F9D9-200D-2642-FE0F",
  		c: "1F9D9-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			44,
  			36
  		],
  		o: 10
  	},
  	cloud: {
  		a: "Cloud",
  		b: "2601-FE0F",
  		c: "2601",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"weather",
  			"sky"
  		],
  		k: [
  			47,
  			17
  		],
  		o: 1
  	},
  	"flag-nz": {
  		a: "New Zealand Flag",
  		b: "1F1F3-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			3,
  			51
  		]
  	},
  	partly_sunny: {
  		a: "Sun Behind Cloud",
  		b: "26C5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"weather",
  			"nature",
  			"cloudy",
  			"morning",
  			"fall",
  			"spring"
  		],
  		k: [
  			48,
  			29
  		],
  		o: 5
  	},
  	fairy: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DA-1F3FB",
  				non_qualified: null,
  				image: "1f9da-1f3fb.png",
  				sheet_x: 45,
  				sheet_y: 9,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DA-1F3FB-200D-2640-FE0F"
  			},
  			"1F3FC": {
  				unified: "1F9DA-1F3FC",
  				non_qualified: null,
  				image: "1f9da-1f3fc.png",
  				sheet_x: 45,
  				sheet_y: 10,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DA-1F3FC-200D-2640-FE0F"
  			},
  			"1F3FD": {
  				unified: "1F9DA-1F3FD",
  				non_qualified: null,
  				image: "1f9da-1f3fd.png",
  				sheet_x: 45,
  				sheet_y: 11,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DA-1F3FD-200D-2640-FE0F"
  			},
  			"1F3FE": {
  				unified: "1F9DA-1F3FE",
  				non_qualified: null,
  				image: "1f9da-1f3fe.png",
  				sheet_x: 45,
  				sheet_y: 12,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DA-1F3FE-200D-2640-FE0F"
  			},
  			"1F3FF": {
  				unified: "1F9DA-1F3FF",
  				non_qualified: null,
  				image: "1f9da-1f3ff.png",
  				sheet_x: 45,
  				sheet_y: 13,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DA-1F3FF-200D-2640-FE0F"
  			}
  		},
  		obsoleted_by: "1F9DA-200D-2640-FE0F",
  		a: "Fairy",
  		b: "1F9DA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			45,
  			8
  		],
  		o: 10
  	},
  	u6e80: {
  		a: "Squared Cjk Unified Ideograph-6e80",
  		b: "1F235",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"full",
  			"chinese",
  			"japanese",
  			"red-square",
  			"kanji"
  		],
  		k: [
  			5,
  			36
  		]
  	},
  	black_small_square: {
  		a: "Black Small Square",
  		b: "25AA-FE0F",
  		c: "25AA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"icon"
  		],
  		k: [
  			47,
  			8
  		],
  		o: 1
  	},
  	thunder_cloud_and_rain: {
  		a: "Thunder Cloud and Rain",
  		b: "26C8-FE0F",
  		c: "26C8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			48,
  			30
  		],
  		o: 5
  	},
  	female_fairy: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DA-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F9DA-1F3FB-200D-2640",
  				image: "1f9da-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 49,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DA-1F3FB"
  			},
  			"1F3FC": {
  				unified: "1F9DA-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F9DA-1F3FC-200D-2640",
  				image: "1f9da-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 50,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DA-1F3FC"
  			},
  			"1F3FD": {
  				unified: "1F9DA-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F9DA-1F3FD-200D-2640",
  				image: "1f9da-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 51,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DA-1F3FD"
  			},
  			"1F3FE": {
  				unified: "1F9DA-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F9DA-1F3FE-200D-2640",
  				image: "1f9da-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 0,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DA-1F3FE"
  			},
  			"1F3FF": {
  				unified: "1F9DA-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F9DA-1F3FF-200D-2640",
  				image: "1f9da-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 1,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DA-1F3FF"
  			}
  		},
  		obsoletes: "1F9DA",
  		a: "Female Fairy",
  		b: "1F9DA-200D-2640-FE0F",
  		c: "1F9DA-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			44,
  			48
  		],
  		o: 10
  	},
  	"flag-om": {
  		a: "Oman Flag",
  		b: "1F1F4-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			0
  		]
  	},
  	white_small_square: {
  		a: "White Small Square",
  		b: "25AB-FE0F",
  		c: "25AB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"icon"
  		],
  		k: [
  			47,
  			9
  		],
  		o: 1
  	},
  	"flag-pa": {
  		a: "Panama Flag",
  		b: "1F1F5-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			1
  		]
  	},
  	mostly_sunny: {
  		a: "Mostly Sunny",
  		b: "1F324-FE0F",
  		c: "1F324",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			6,
  			26
  		],
  		n: [
  			"sun_small_cloud"
  		],
  		o: 7
  	},
  	male_fairy: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DA-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F9DA-1F3FB-200D-2642",
  				image: "1f9da-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 3,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9DA-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F9DA-1F3FC-200D-2642",
  				image: "1f9da-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 4,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9DA-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F9DA-1F3FD-200D-2642",
  				image: "1f9da-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 5,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9DA-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F9DA-1F3FE-200D-2642",
  				image: "1f9da-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 6,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9DA-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F9DA-1F3FF-200D-2642",
  				image: "1f9da-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 7,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Fairy",
  		b: "1F9DA-200D-2642-FE0F",
  		c: "1F9DA-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			45,
  			2
  		],
  		o: 10
  	},
  	barely_sunny: {
  		a: "Barely Sunny",
  		b: "1F325-FE0F",
  		c: "1F325",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			6,
  			27
  		],
  		n: [
  			"sun_behind_cloud"
  		],
  		o: 7
  	},
  	white_medium_square: {
  		a: "White Medium Square",
  		b: "25FB-FE0F",
  		c: "25FB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"stone",
  			"icon"
  		],
  		k: [
  			47,
  			12
  		],
  		o: 3
  	},
  	"flag-pe": {
  		a: "Peru Flag",
  		b: "1F1F5-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			2
  		]
  	},
  	vampire: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DB-1F3FB",
  				non_qualified: null,
  				image: "1f9db-1f3fb.png",
  				sheet_x: 45,
  				sheet_y: 27,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DB-1F3FB-200D-2640-FE0F"
  			},
  			"1F3FC": {
  				unified: "1F9DB-1F3FC",
  				non_qualified: null,
  				image: "1f9db-1f3fc.png",
  				sheet_x: 45,
  				sheet_y: 28,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DB-1F3FC-200D-2640-FE0F"
  			},
  			"1F3FD": {
  				unified: "1F9DB-1F3FD",
  				non_qualified: null,
  				image: "1f9db-1f3fd.png",
  				sheet_x: 45,
  				sheet_y: 29,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DB-1F3FD-200D-2640-FE0F"
  			},
  			"1F3FE": {
  				unified: "1F9DB-1F3FE",
  				non_qualified: null,
  				image: "1f9db-1f3fe.png",
  				sheet_x: 45,
  				sheet_y: 30,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DB-1F3FE-200D-2640-FE0F"
  			},
  			"1F3FF": {
  				unified: "1F9DB-1F3FF",
  				non_qualified: null,
  				image: "1f9db-1f3ff.png",
  				sheet_x: 45,
  				sheet_y: 31,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DB-1F3FF-200D-2640-FE0F"
  			}
  		},
  		obsoleted_by: "1F9DB-200D-2640-FE0F",
  		a: "Vampire",
  		b: "1F9DB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			45,
  			26
  		],
  		o: 10
  	},
  	female_vampire: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DB-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F9DB-1F3FB-200D-2640",
  				image: "1f9db-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 15,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DB-1F3FB"
  			},
  			"1F3FC": {
  				unified: "1F9DB-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F9DB-1F3FC-200D-2640",
  				image: "1f9db-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 16,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DB-1F3FC"
  			},
  			"1F3FD": {
  				unified: "1F9DB-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F9DB-1F3FD-200D-2640",
  				image: "1f9db-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 17,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DB-1F3FD"
  			},
  			"1F3FE": {
  				unified: "1F9DB-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F9DB-1F3FE-200D-2640",
  				image: "1f9db-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 18,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DB-1F3FE"
  			},
  			"1F3FF": {
  				unified: "1F9DB-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F9DB-1F3FF-200D-2640",
  				image: "1f9db-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 19,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DB-1F3FF"
  			}
  		},
  		obsoletes: "1F9DB",
  		a: "Female Vampire",
  		b: "1F9DB-200D-2640-FE0F",
  		c: "1F9DB-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			45,
  			14
  		],
  		o: 10
  	},
  	partly_sunny_rain: {
  		a: "Partly Sunny Rain",
  		b: "1F326-FE0F",
  		c: "1F326",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			6,
  			28
  		],
  		n: [
  			"sun_behind_rain_cloud"
  		],
  		o: 7
  	},
  	"flag-pf": {
  		a: "French Polynesia Flag",
  		b: "1F1F5-1F1EB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			3
  		]
  	},
  	black_medium_square: {
  		a: "Black Medium Square",
  		b: "25FC-FE0F",
  		c: "25FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"button",
  			"icon"
  		],
  		k: [
  			47,
  			13
  		],
  		o: 3
  	},
  	white_medium_small_square: {
  		a: "White Medium Small Square",
  		b: "25FD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"stone",
  			"icon",
  			"button"
  		],
  		k: [
  			47,
  			14
  		],
  		o: 3
  	},
  	rain_cloud: {
  		a: "Rain Cloud",
  		b: "1F327-FE0F",
  		c: "1F327",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			6,
  			29
  		],
  		o: 7
  	},
  	"flag-pg": {
  		a: "Papua New Guinea Flag",
  		b: "1F1F5-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			4
  		]
  	},
  	male_vampire: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DB-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F9DB-1F3FB-200D-2642",
  				image: "1f9db-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 21,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9DB-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F9DB-1F3FC-200D-2642",
  				image: "1f9db-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 22,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9DB-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F9DB-1F3FD-200D-2642",
  				image: "1f9db-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 23,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9DB-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F9DB-1F3FE-200D-2642",
  				image: "1f9db-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 24,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9DB-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F9DB-1F3FF-200D-2642",
  				image: "1f9db-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 25,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Male Vampire",
  		b: "1F9DB-200D-2642-FE0F",
  		c: "1F9DB-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			45,
  			20
  		],
  		o: 10
  	},
  	"flag-ph": {
  		a: "Philippines Flag",
  		b: "1F1F5-1F1ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			5
  		]
  	},
  	merperson: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DC-1F3FB",
  				non_qualified: null,
  				image: "1f9dc-1f3fb.png",
  				sheet_x: 45,
  				sheet_y: 45,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DC-1F3FB-200D-2642-FE0F"
  			},
  			"1F3FC": {
  				unified: "1F9DC-1F3FC",
  				non_qualified: null,
  				image: "1f9dc-1f3fc.png",
  				sheet_x: 45,
  				sheet_y: 46,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DC-1F3FC-200D-2642-FE0F"
  			},
  			"1F3FD": {
  				unified: "1F9DC-1F3FD",
  				non_qualified: null,
  				image: "1f9dc-1f3fd.png",
  				sheet_x: 45,
  				sheet_y: 47,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DC-1F3FD-200D-2642-FE0F"
  			},
  			"1F3FE": {
  				unified: "1F9DC-1F3FE",
  				non_qualified: null,
  				image: "1f9dc-1f3fe.png",
  				sheet_x: 45,
  				sheet_y: 48,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DC-1F3FE-200D-2642-FE0F"
  			},
  			"1F3FF": {
  				unified: "1F9DC-1F3FF",
  				non_qualified: null,
  				image: "1f9dc-1f3ff.png",
  				sheet_x: 45,
  				sheet_y: 49,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DC-1F3FF-200D-2642-FE0F"
  			}
  		},
  		obsoleted_by: "1F9DC-200D-2642-FE0F",
  		a: "Merperson",
  		b: "1F9DC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			45,
  			44
  		],
  		o: 10
  	},
  	black_medium_small_square: {
  		a: "Black Medium Small Square",
  		b: "25FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"icon",
  			"shape",
  			"button"
  		],
  		k: [
  			47,
  			15
  		],
  		o: 3
  	},
  	snow_cloud: {
  		a: "Snow Cloud",
  		b: "1F328-FE0F",
  		c: "1F328",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			6,
  			30
  		],
  		o: 7
  	},
  	lightning: {
  		a: "Lightning",
  		b: "1F329-FE0F",
  		c: "1F329",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			6,
  			31
  		],
  		n: [
  			"lightning_cloud"
  		],
  		o: 7
  	},
  	black_large_square: {
  		a: "Black Large Square",
  		b: "2B1B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"icon",
  			"button"
  		],
  		k: [
  			50,
  			20
  		],
  		o: 5
  	},
  	mermaid: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DC-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F9DC-1F3FB-200D-2640",
  				image: "1f9dc-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 33,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9DC-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F9DC-1F3FC-200D-2640",
  				image: "1f9dc-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 34,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9DC-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F9DC-1F3FD-200D-2640",
  				image: "1f9dc-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 35,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9DC-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F9DC-1F3FE-200D-2640",
  				image: "1f9dc-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 36,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9DC-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F9DC-1F3FF-200D-2640",
  				image: "1f9dc-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 37,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Mermaid",
  		b: "1F9DC-200D-2640-FE0F",
  		c: "1F9DC-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			45,
  			32
  		],
  		o: 10
  	},
  	"flag-pk": {
  		a: "Pakistan Flag",
  		b: "1F1F5-1F1F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			6
  		]
  	},
  	merman: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DC-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F9DC-1F3FB-200D-2642",
  				image: "1f9dc-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 39,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DC-1F3FB"
  			},
  			"1F3FC": {
  				unified: "1F9DC-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F9DC-1F3FC-200D-2642",
  				image: "1f9dc-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 40,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DC-1F3FC"
  			},
  			"1F3FD": {
  				unified: "1F9DC-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F9DC-1F3FD-200D-2642",
  				image: "1f9dc-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 41,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DC-1F3FD"
  			},
  			"1F3FE": {
  				unified: "1F9DC-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F9DC-1F3FE-200D-2642",
  				image: "1f9dc-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 42,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DC-1F3FE"
  			},
  			"1F3FF": {
  				unified: "1F9DC-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F9DC-1F3FF-200D-2642",
  				image: "1f9dc-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 43,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DC-1F3FF"
  			}
  		},
  		obsoletes: "1F9DC",
  		a: "Merman",
  		b: "1F9DC-200D-2642-FE0F",
  		c: "1F9DC-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			45,
  			38
  		],
  		o: 10
  	},
  	white_large_square: {
  		a: "White Large Square",
  		b: "2B1C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"icon",
  			"stone",
  			"button"
  		],
  		k: [
  			50,
  			21
  		],
  		o: 5
  	},
  	tornado: {
  		a: "Tornado",
  		b: "1F32A-FE0F",
  		c: "1F32A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"weather",
  			"cyclone",
  			"twister"
  		],
  		k: [
  			6,
  			32
  		],
  		n: [
  			"tornado_cloud"
  		],
  		o: 7
  	},
  	"flag-pl": {
  		a: "Poland Flag",
  		b: "1F1F5-1F1F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			7
  		]
  	},
  	elf: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DD-1F3FB",
  				non_qualified: null,
  				image: "1f9dd-1f3fb.png",
  				sheet_x: 46,
  				sheet_y: 11,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DD-1F3FB-200D-2642-FE0F"
  			},
  			"1F3FC": {
  				unified: "1F9DD-1F3FC",
  				non_qualified: null,
  				image: "1f9dd-1f3fc.png",
  				sheet_x: 46,
  				sheet_y: 12,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DD-1F3FC-200D-2642-FE0F"
  			},
  			"1F3FD": {
  				unified: "1F9DD-1F3FD",
  				non_qualified: null,
  				image: "1f9dd-1f3fd.png",
  				sheet_x: 46,
  				sheet_y: 13,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DD-1F3FD-200D-2642-FE0F"
  			},
  			"1F3FE": {
  				unified: "1F9DD-1F3FE",
  				non_qualified: null,
  				image: "1f9dd-1f3fe.png",
  				sheet_x: 46,
  				sheet_y: 14,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DD-1F3FE-200D-2642-FE0F"
  			},
  			"1F3FF": {
  				unified: "1F9DD-1F3FF",
  				non_qualified: null,
  				image: "1f9dd-1f3ff.png",
  				sheet_x: 46,
  				sheet_y: 15,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9DD-1F3FF-200D-2642-FE0F"
  			}
  		},
  		obsoleted_by: "1F9DD-200D-2642-FE0F",
  		a: "Elf",
  		b: "1F9DD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			10
  		],
  		o: 10
  	},
  	fog: {
  		a: "Fog",
  		b: "1F32B-FE0F",
  		c: "1F32B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"weather"
  		],
  		k: [
  			6,
  			33
  		],
  		o: 7
  	},
  	large_orange_diamond: {
  		a: "Large Orange Diamond",
  		b: "1F536",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"jewel",
  			"gem"
  		],
  		k: [
  			28,
  			4
  		]
  	},
  	"flag-pm": {
  		a: "St. Pierre & Miquelon Flag",
  		b: "1F1F5-1F1F2",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			8
  		]
  	},
  	"flag-pn": {
  		a: "Pitcairn Islands Flag",
  		b: "1F1F5-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			9
  		]
  	},
  	wind_blowing_face: {
  		a: "Wind Blowing Face",
  		b: "1F32C-FE0F",
  		c: "1F32C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			6,
  			34
  		],
  		o: 7
  	},
  	female_elf: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DD-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F9DD-1F3FB-200D-2640",
  				image: "1f9dd-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 45,
  				sheet_y: 51,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9DD-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F9DD-1F3FC-200D-2640",
  				image: "1f9dd-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 46,
  				sheet_y: 0,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9DD-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F9DD-1F3FD-200D-2640",
  				image: "1f9dd-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 46,
  				sheet_y: 1,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9DD-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F9DD-1F3FE-200D-2640",
  				image: "1f9dd-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 46,
  				sheet_y: 2,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9DD-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F9DD-1F3FF-200D-2640",
  				image: "1f9dd-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 46,
  				sheet_y: 3,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Female Elf",
  		b: "1F9DD-200D-2640-FE0F",
  		c: "1F9DD-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			45,
  			50
  		],
  		o: 10
  	},
  	large_blue_diamond: {
  		a: "Large Blue Diamond",
  		b: "1F537",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"jewel",
  			"gem"
  		],
  		k: [
  			28,
  			5
  		]
  	},
  	male_elf: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9DD-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F9DD-1F3FB-200D-2642",
  				image: "1f9dd-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 46,
  				sheet_y: 5,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DD-1F3FB"
  			},
  			"1F3FC": {
  				unified: "1F9DD-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F9DD-1F3FC-200D-2642",
  				image: "1f9dd-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 46,
  				sheet_y: 6,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DD-1F3FC"
  			},
  			"1F3FD": {
  				unified: "1F9DD-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F9DD-1F3FD-200D-2642",
  				image: "1f9dd-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 46,
  				sheet_y: 7,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DD-1F3FD"
  			},
  			"1F3FE": {
  				unified: "1F9DD-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F9DD-1F3FE-200D-2642",
  				image: "1f9dd-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 46,
  				sheet_y: 8,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DD-1F3FE"
  			},
  			"1F3FF": {
  				unified: "1F9DD-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F9DD-1F3FF-200D-2642",
  				image: "1f9dd-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 46,
  				sheet_y: 9,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9DD-1F3FF"
  			}
  		},
  		obsoletes: "1F9DD",
  		a: "Male Elf",
  		b: "1F9DD-200D-2642-FE0F",
  		c: "1F9DD-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			4
  		],
  		o: 10
  	},
  	small_orange_diamond: {
  		a: "Small Orange Diamond",
  		b: "1F538",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"jewel",
  			"gem"
  		],
  		k: [
  			28,
  			6
  		]
  	},
  	"flag-pr": {
  		a: "Puerto Rico Flag",
  		b: "1F1F5-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			10
  		]
  	},
  	cyclone: {
  		a: "Cyclone",
  		b: "1F300",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"weather",
  			"swirl",
  			"blue",
  			"cloud",
  			"vortex",
  			"spiral",
  			"whirlpool",
  			"spin",
  			"tornado",
  			"hurricane",
  			"typhoon"
  		],
  		k: [
  			5,
  			44
  		]
  	},
  	rainbow: {
  		a: "Rainbow",
  		b: "1F308",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"nature",
  			"happy",
  			"unicorn_face",
  			"photo",
  			"sky",
  			"spring"
  		],
  		k: [
  			6,
  			0
  		]
  	},
  	small_blue_diamond: {
  		a: "Small Blue Diamond",
  		b: "1F539",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"jewel",
  			"gem"
  		],
  		k: [
  			28,
  			7
  		]
  	},
  	genie: {
  		obsoleted_by: "1F9DE-200D-2642-FE0F",
  		a: "Genie",
  		b: "1F9DE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			18
  		],
  		o: 10
  	},
  	"flag-ps": {
  		a: "Palestinian Territories Flag",
  		b: "1F1F5-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			11
  		]
  	},
  	small_red_triangle: {
  		a: "Up-Pointing Red Triangle",
  		b: "1F53A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"direction",
  			"up",
  			"top"
  		],
  		k: [
  			28,
  			8
  		]
  	},
  	closed_umbrella: {
  		a: "Closed Umbrella",
  		b: "1F302",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"weather",
  			"rain",
  			"drizzle"
  		],
  		k: [
  			5,
  			46
  		]
  	},
  	female_genie: {
  		a: "Female Genie",
  		b: "1F9DE-200D-2640-FE0F",
  		c: "1F9DE-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			16
  		],
  		o: 10
  	},
  	"flag-pt": {
  		a: "Portugal Flag",
  		b: "1F1F5-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			12
  		]
  	},
  	"flag-pw": {
  		a: "Palau Flag",
  		b: "1F1F5-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			13
  		]
  	},
  	small_red_triangle_down: {
  		a: "Down-Pointing Red Triangle",
  		b: "1F53B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"direction",
  			"bottom"
  		],
  		k: [
  			28,
  			9
  		]
  	},
  	umbrella: {
  		a: "Umbrella",
  		b: "2602-FE0F",
  		c: "2602",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"rainy",
  			"weather",
  			"spring"
  		],
  		k: [
  			47,
  			18
  		],
  		o: 1
  	},
  	male_genie: {
  		obsoletes: "1F9DE",
  		a: "Male Genie",
  		b: "1F9DE-200D-2642-FE0F",
  		c: "1F9DE-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			17
  		],
  		o: 10
  	},
  	zombie: {
  		obsoleted_by: "1F9DF-200D-2642-FE0F",
  		a: "Zombie",
  		b: "1F9DF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			21
  		],
  		o: 10
  	},
  	"flag-py": {
  		a: "Paraguay Flag",
  		b: "1F1F5-1F1FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			14
  		]
  	},
  	diamond_shape_with_a_dot_inside: {
  		a: "Diamond Shape with a Dot Inside",
  		b: "1F4A0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"jewel",
  			"blue",
  			"gem",
  			"crystal",
  			"fancy"
  		],
  		k: [
  			25,
  			6
  		]
  	},
  	umbrella_with_rain_drops: {
  		a: "Umbrella with Rain Drops",
  		b: "2614",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			47,
  			23
  		],
  		o: 4
  	},
  	radio_button: {
  		a: "Radio Button",
  		b: "1F518",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"input",
  			"old",
  			"music",
  			"circle"
  		],
  		k: [
  			27,
  			26
  		]
  	},
  	female_zombie: {
  		a: "Female Zombie",
  		b: "1F9DF-200D-2640-FE0F",
  		c: "1F9DF-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			19
  		],
  		o: 10
  	},
  	"flag-qa": {
  		a: "Qatar Flag",
  		b: "1F1F6-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			15
  		]
  	},
  	umbrella_on_ground: {
  		a: "Umbrella on Ground",
  		b: "26F1-FE0F",
  		c: "26F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			48,
  			39
  		],
  		o: 5
  	},
  	black_square_button: {
  		a: "Black Square Button",
  		b: "1F532",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"input",
  			"frame"
  		],
  		k: [
  			28,
  			0
  		]
  	},
  	zap: {
  		a: "High Voltage Sign",
  		b: "26A1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"thunder",
  			"weather",
  			"lightning bolt",
  			"fast"
  		],
  		k: [
  			48,
  			21
  		],
  		o: 4
  	},
  	male_zombie: {
  		obsoletes: "1F9DF",
  		a: "Male Zombie",
  		b: "1F9DF-200D-2642-FE0F",
  		c: "1F9DF-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			20
  		],
  		o: 10
  	},
  	"flag-re": {
  		a: "Réunion Flag",
  		b: "1F1F7-1F1EA",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			16
  		]
  	},
  	"flag-ro": {
  		a: "Romania Flag",
  		b: "1F1F7-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			17
  		]
  	},
  	snowflake: {
  		a: "Snowflake",
  		b: "2744-FE0F",
  		c: "2744",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"winter",
  			"season",
  			"cold",
  			"weather",
  			"christmas",
  			"xmas"
  		],
  		k: [
  			49,
  			51
  		],
  		o: 1
  	},
  	white_square_button: {
  		a: "White Square Button",
  		b: "1F533",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"input"
  		],
  		k: [
  			28,
  			1
  		]
  	},
  	person_frowning: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64D-1F3FB",
  				non_qualified: null,
  				image: "1f64d-1f3fb.png",
  				sheet_x: 33,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F64D-1F3FC",
  				non_qualified: null,
  				image: "1f64d-1f3fc.png",
  				sheet_x: 33,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F64D-1F3FD",
  				non_qualified: null,
  				image: "1f64d-1f3fd.png",
  				sheet_x: 33,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F64D-1F3FE",
  				non_qualified: null,
  				image: "1f64d-1f3fe.png",
  				sheet_x: 33,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F64D-1F3FF",
  				non_qualified: null,
  				image: "1f64d-1f3ff.png",
  				sheet_x: 33,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F64D-200D-2640-FE0F",
  		a: "Person Frowning",
  		b: "1F64D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			33,
  			30
  		]
  	},
  	"flag-rs": {
  		a: "Serbia Flag",
  		b: "1F1F7-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			18
  		]
  	},
  	"man-frowning": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64D-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F64D-1F3FB-200D-2642",
  				image: "1f64d-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F64D-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F64D-1F3FC-200D-2642",
  				image: "1f64d-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F64D-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F64D-1F3FD-200D-2642",
  				image: "1f64d-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F64D-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F64D-1F3FE-200D-2642",
  				image: "1f64d-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F64D-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F64D-1F3FF-200D-2642",
  				image: "1f64d-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Frowning",
  		b: "1F64D-200D-2642-FE0F",
  		c: "1F64D-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			33,
  			24
  		]
  	},
  	white_circle: {
  		a: "Medium White Circle",
  		b: "26AA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"round"
  		],
  		k: [
  			48,
  			22
  		],
  		o: 4
  	},
  	snowman: {
  		a: "Snowman",
  		b: "2603-FE0F",
  		c: "2603",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"winter",
  			"season",
  			"cold",
  			"weather",
  			"christmas",
  			"xmas",
  			"frozen",
  			"without_snow"
  		],
  		k: [
  			47,
  			19
  		],
  		o: 1
  	},
  	snowman_without_snow: {
  		a: "Snowman Without Snow",
  		b: "26C4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			48,
  			28
  		],
  		o: 5
  	},
  	ru: {
  		a: "Russia Flag",
  		b: "1F1F7-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"russian",
  			"federation",
  			"flag",
  			"nation",
  			"country",
  			"banner"
  		],
  		k: [
  			4,
  			19
  		],
  		n: [
  			"flag-ru"
  		]
  	},
  	black_circle: {
  		a: "Medium Black Circle",
  		b: "26AB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"button",
  			"round"
  		],
  		k: [
  			48,
  			23
  		],
  		o: 4
  	},
  	"woman-frowning": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64D-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F64D-1F3FB-200D-2640",
  				image: "1f64d-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F64D-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F64D-1F3FC-200D-2640",
  				image: "1f64d-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F64D-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F64D-1F3FD-200D-2640",
  				image: "1f64d-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F64D-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F64D-1F3FE-200D-2640",
  				image: "1f64d-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F64D-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F64D-1F3FF-200D-2640",
  				image: "1f64d-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F64D",
  		a: "Woman Frowning",
  		b: "1F64D-200D-2640-FE0F",
  		c: "1F64D-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			33,
  			18
  		]
  	},
  	"flag-rw": {
  		a: "Rwanda Flag",
  		b: "1F1F7-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			20
  		]
  	},
  	comet: {
  		a: "Comet",
  		b: "2604-FE0F",
  		c: "2604",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"space"
  		],
  		k: [
  			47,
  			20
  		],
  		o: 1
  	},
  	person_with_pouting_face: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64E-1F3FB",
  				non_qualified: null,
  				image: "1f64e-1f3fb.png",
  				sheet_x: 33,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F64E-1F3FC",
  				non_qualified: null,
  				image: "1f64e-1f3fc.png",
  				sheet_x: 33,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F64E-1F3FD",
  				non_qualified: null,
  				image: "1f64e-1f3fd.png",
  				sheet_x: 33,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F64E-1F3FE",
  				non_qualified: null,
  				image: "1f64e-1f3fe.png",
  				sheet_x: 34,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F64E-1F3FF",
  				non_qualified: null,
  				image: "1f64e-1f3ff.png",
  				sheet_x: 34,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F64E-200D-2640-FE0F",
  		a: "Person with Pouting Face",
  		b: "1F64E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			33,
  			48
  		]
  	},
  	red_circle: {
  		a: "Large Red Circle",
  		b: "1F534",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"error",
  			"danger"
  		],
  		k: [
  			28,
  			2
  		]
  	},
  	large_blue_circle: {
  		a: "Large Blue Circle",
  		b: "1F535",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shape",
  			"icon",
  			"button"
  		],
  		k: [
  			28,
  			3
  		]
  	},
  	"man-pouting": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64E-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F64E-1F3FB-200D-2642",
  				image: "1f64e-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F64E-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F64E-1F3FC-200D-2642",
  				image: "1f64e-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F64E-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F64E-1F3FD-200D-2642",
  				image: "1f64e-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F64E-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F64E-1F3FE-200D-2642",
  				image: "1f64e-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F64E-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F64E-1F3FF-200D-2642",
  				image: "1f64e-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Pouting",
  		b: "1F64E-200D-2642-FE0F",
  		c: "1F64E-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			33,
  			42
  		]
  	},
  	"flag-sa": {
  		a: "Saudi Arabia Flag",
  		b: "1F1F8-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			21
  		]
  	},
  	fire: {
  		a: "Fire",
  		b: "1F525",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"hot",
  			"cook",
  			"flame"
  		],
  		k: [
  			27,
  			39
  		]
  	},
  	"woman-pouting": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64E-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F64E-1F3FB-200D-2640",
  				image: "1f64e-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F64E-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F64E-1F3FC-200D-2640",
  				image: "1f64e-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F64E-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F64E-1F3FD-200D-2640",
  				image: "1f64e-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F64E-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F64E-1F3FE-200D-2640",
  				image: "1f64e-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F64E-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F64E-1F3FF-200D-2640",
  				image: "1f64e-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F64E",
  		a: "Woman Pouting",
  		b: "1F64E-200D-2640-FE0F",
  		c: "1F64E-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			33,
  			36
  		]
  	},
  	"flag-sb": {
  		a: "Solomon Islands Flag",
  		b: "1F1F8-1F1E7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			22
  		]
  	},
  	droplet: {
  		a: "Droplet",
  		b: "1F4A7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"water",
  			"drip",
  			"faucet",
  			"spring"
  		],
  		k: [
  			25,
  			13
  		]
  	},
  	no_good: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F645-1F3FB",
  				non_qualified: null,
  				image: "1f645-1f3fb.png",
  				sheet_x: 32,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F645-1F3FC",
  				non_qualified: null,
  				image: "1f645-1f3fc.png",
  				sheet_x: 32,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F645-1F3FD",
  				non_qualified: null,
  				image: "1f645-1f3fd.png",
  				sheet_x: 32,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F645-1F3FE",
  				non_qualified: null,
  				image: "1f645-1f3fe.png",
  				sheet_x: 32,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F645-1F3FF",
  				non_qualified: null,
  				image: "1f645-1f3ff.png",
  				sheet_x: 32,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F645-200D-2640-FE0F",
  		a: "Face with No Good Gesture",
  		b: "1F645",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			32,
  			1
  		]
  	},
  	"flag-sc": {
  		a: "Seychelles Flag",
  		b: "1F1F8-1F1E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			23
  		]
  	},
  	ocean: {
  		a: "Water Wave",
  		b: "1F30A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sea",
  			"water",
  			"wave",
  			"nature",
  			"tsunami",
  			"disaster"
  		],
  		k: [
  			6,
  			2
  		]
  	},
  	"man-gesturing-no": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F645-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F645-1F3FB-200D-2642",
  				image: "1f645-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 31,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F645-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F645-1F3FC-200D-2642",
  				image: "1f645-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 31,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F645-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F645-1F3FD-200D-2642",
  				image: "1f645-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 31,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F645-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F645-1F3FE-200D-2642",
  				image: "1f645-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 31,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F645-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F645-1F3FF-200D-2642",
  				image: "1f645-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Gesturing No",
  		b: "1F645-200D-2642-FE0F",
  		c: "1F645-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			31,
  			47
  		]
  	},
  	"flag-sd": {
  		a: "Sudan Flag",
  		b: "1F1F8-1F1E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			24
  		]
  	},
  	"woman-gesturing-no": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F645-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F645-1F3FB-200D-2640",
  				image: "1f645-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 31,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F645-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F645-1F3FC-200D-2640",
  				image: "1f645-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 31,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F645-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F645-1F3FD-200D-2640",
  				image: "1f645-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 31,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F645-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F645-1F3FE-200D-2640",
  				image: "1f645-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 31,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F645-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F645-1F3FF-200D-2640",
  				image: "1f645-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 31,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F645",
  		a: "Woman Gesturing No",
  		b: "1F645-200D-2640-FE0F",
  		c: "1F645-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			31,
  			41
  		]
  	},
  	"flag-se": {
  		a: "Sweden Flag",
  		b: "1F1F8-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			25
  		]
  	},
  	"flag-sg": {
  		a: "Singapore Flag",
  		b: "1F1F8-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			26
  		]
  	},
  	ok_woman: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F646-1F3FB",
  				non_qualified: null,
  				image: "1f646-1f3fb.png",
  				sheet_x: 32,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F646-1F3FC",
  				non_qualified: null,
  				image: "1f646-1f3fc.png",
  				sheet_x: 32,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F646-1F3FD",
  				non_qualified: null,
  				image: "1f646-1f3fd.png",
  				sheet_x: 32,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F646-1F3FE",
  				non_qualified: null,
  				image: "1f646-1f3fe.png",
  				sheet_x: 32,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F646-1F3FF",
  				non_qualified: null,
  				image: "1f646-1f3ff.png",
  				sheet_x: 32,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F646-200D-2640-FE0F",
  		a: "Face with Ok Gesture",
  		b: "1F646",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		j: [
  			"women",
  			"girl",
  			"female",
  			"pink",
  			"human",
  			"woman"
  		],
  		k: [
  			32,
  			19
  		]
  	},
  	"flag-sh": {
  		a: "St. Helena Flag",
  		b: "1F1F8-1F1ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			27
  		]
  	},
  	"man-gesturing-ok": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F646-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F646-1F3FB-200D-2642",
  				image: "1f646-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F646-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F646-1F3FC-200D-2642",
  				image: "1f646-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F646-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F646-1F3FD-200D-2642",
  				image: "1f646-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F646-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F646-1F3FE-200D-2642",
  				image: "1f646-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F646-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F646-1F3FF-200D-2642",
  				image: "1f646-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Gesturing Ok",
  		b: "1F646-200D-2642-FE0F",
  		c: "1F646-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			32,
  			13
  		]
  	},
  	"flag-si": {
  		a: "Slovenia Flag",
  		b: "1F1F8-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			28
  		]
  	},
  	"woman-gesturing-ok": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F646-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F646-1F3FB-200D-2640",
  				image: "1f646-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F646-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F646-1F3FC-200D-2640",
  				image: "1f646-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F646-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F646-1F3FD-200D-2640",
  				image: "1f646-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F646-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F646-1F3FE-200D-2640",
  				image: "1f646-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F646-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F646-1F3FF-200D-2640",
  				image: "1f646-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F646",
  		a: "Woman Gesturing Ok",
  		b: "1F646-200D-2640-FE0F",
  		c: "1F646-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			32,
  			7
  		]
  	},
  	information_desk_person: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F481-1F3FB",
  				non_qualified: null,
  				image: "1f481-1f3fb.png",
  				sheet_x: 23,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F481-1F3FC",
  				non_qualified: null,
  				image: "1f481-1f3fc.png",
  				sheet_x: 23,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F481-1F3FD",
  				non_qualified: null,
  				image: "1f481-1f3fd.png",
  				sheet_x: 23,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F481-1F3FE",
  				non_qualified: null,
  				image: "1f481-1f3fe.png",
  				sheet_x: 23,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F481-1F3FF",
  				non_qualified: null,
  				image: "1f481-1f3ff.png",
  				sheet_x: 23,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F481-200D-2640-FE0F",
  		a: "Information Desk Person",
  		b: "1F481",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			23,
  			13
  		]
  	},
  	"flag-sj": {
  		a: "Svalbard & Jan Mayen Flag",
  		b: "1F1F8-1F1EF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			29
  		]
  	},
  	"man-tipping-hand": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F481-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F481-1F3FB-200D-2642",
  				image: "1f481-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F481-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F481-1F3FC-200D-2642",
  				image: "1f481-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F481-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F481-1F3FD-200D-2642",
  				image: "1f481-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F481-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F481-1F3FE-200D-2642",
  				image: "1f481-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F481-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F481-1F3FF-200D-2642",
  				image: "1f481-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Tipping Hand",
  		b: "1F481-200D-2642-FE0F",
  		c: "1F481-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			23,
  			7
  		]
  	},
  	"flag-sk": {
  		a: "Slovakia Flag",
  		b: "1F1F8-1F1F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			30
  		]
  	},
  	"flag-sl": {
  		a: "Sierra Leone Flag",
  		b: "1F1F8-1F1F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			31
  		]
  	},
  	"woman-tipping-hand": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F481-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F481-1F3FB-200D-2640",
  				image: "1f481-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F481-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F481-1F3FC-200D-2640",
  				image: "1f481-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F481-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F481-1F3FD-200D-2640",
  				image: "1f481-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F481-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F481-1F3FE-200D-2640",
  				image: "1f481-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F481-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F481-1F3FF-200D-2640",
  				image: "1f481-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F481",
  		a: "Woman Tipping Hand",
  		b: "1F481-200D-2640-FE0F",
  		c: "1F481-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			23,
  			1
  		]
  	},
  	"flag-sm": {
  		a: "San Marino Flag",
  		b: "1F1F8-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			32
  		]
  	},
  	raising_hand: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64B-1F3FB",
  				non_qualified: null,
  				image: "1f64b-1f3fb.png",
  				sheet_x: 33,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F64B-1F3FC",
  				non_qualified: null,
  				image: "1f64b-1f3fc.png",
  				sheet_x: 33,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F64B-1F3FD",
  				non_qualified: null,
  				image: "1f64b-1f3fd.png",
  				sheet_x: 33,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F64B-1F3FE",
  				non_qualified: null,
  				image: "1f64b-1f3fe.png",
  				sheet_x: 33,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F64B-1F3FF",
  				non_qualified: null,
  				image: "1f64b-1f3ff.png",
  				sheet_x: 33,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F64B-200D-2640-FE0F",
  		a: "Happy Person Raising One Hand",
  		b: "1F64B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			33,
  			6
  		]
  	},
  	"flag-sn": {
  		a: "Senegal Flag",
  		b: "1F1F8-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			33
  		]
  	},
  	"man-raising-hand": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64B-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F64B-1F3FB-200D-2642",
  				image: "1f64b-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F64B-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F64B-1F3FC-200D-2642",
  				image: "1f64b-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F64B-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F64B-1F3FD-200D-2642",
  				image: "1f64b-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F64B-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F64B-1F3FE-200D-2642",
  				image: "1f64b-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F64B-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F64B-1F3FF-200D-2642",
  				image: "1f64b-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 33,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Raising Hand",
  		b: "1F64B-200D-2642-FE0F",
  		c: "1F64B-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			33,
  			0
  		]
  	},
  	"flag-so": {
  		a: "Somalia Flag",
  		b: "1F1F8-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			34
  		]
  	},
  	"woman-raising-hand": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64B-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F64B-1F3FB-200D-2640",
  				image: "1f64b-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F64B-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F64B-1F3FC-200D-2640",
  				image: "1f64b-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F64B-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F64B-1F3FD-200D-2640",
  				image: "1f64b-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F64B-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F64B-1F3FE-200D-2640",
  				image: "1f64b-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F64B-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F64B-1F3FF-200D-2640",
  				image: "1f64b-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F64B",
  		a: "Woman Raising Hand",
  		b: "1F64B-200D-2640-FE0F",
  		c: "1F64B-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			32,
  			46
  		]
  	},
  	"flag-sr": {
  		a: "Suriname Flag",
  		b: "1F1F8-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			35
  		]
  	},
  	bow: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F647-1F3FB",
  				non_qualified: null,
  				image: "1f647-1f3fb.png",
  				sheet_x: 32,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F647-1F3FC",
  				non_qualified: null,
  				image: "1f647-1f3fc.png",
  				sheet_x: 32,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F647-1F3FD",
  				non_qualified: null,
  				image: "1f647-1f3fd.png",
  				sheet_x: 32,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F647-1F3FE",
  				non_qualified: null,
  				image: "1f647-1f3fe.png",
  				sheet_x: 32,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F647-1F3FF",
  				non_qualified: null,
  				image: "1f647-1f3ff.png",
  				sheet_x: 32,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F647-200D-2642-FE0F",
  		a: "Person Bowing Deeply",
  		b: "1F647",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			32,
  			37
  		]
  	},
  	"man-bowing": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F647-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F647-1F3FB-200D-2642",
  				image: "1f647-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F647-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F647-1F3FC-200D-2642",
  				image: "1f647-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F647-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F647-1F3FD-200D-2642",
  				image: "1f647-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F647-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F647-1F3FE-200D-2642",
  				image: "1f647-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F647-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F647-1F3FF-200D-2642",
  				image: "1f647-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F647",
  		a: "Man Bowing",
  		b: "1F647-200D-2642-FE0F",
  		c: "1F647-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			32,
  			31
  		]
  	},
  	"flag-ss": {
  		a: "South Sudan Flag",
  		b: "1F1F8-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			36
  		]
  	},
  	"woman-bowing": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F647-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F647-1F3FB-200D-2640",
  				image: "1f647-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F647-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F647-1F3FC-200D-2640",
  				image: "1f647-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F647-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F647-1F3FD-200D-2640",
  				image: "1f647-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F647-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F647-1F3FE-200D-2640",
  				image: "1f647-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F647-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F647-1F3FF-200D-2640",
  				image: "1f647-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 32,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Bowing",
  		b: "1F647-200D-2640-FE0F",
  		c: "1F647-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			32,
  			25
  		]
  	},
  	"flag-st": {
  		a: "São Tomé & Príncipe Flag",
  		b: "1F1F8-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			37
  		]
  	},
  	face_palm: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F926-1F3FB",
  				non_qualified: null,
  				image: "1f926-1f3fb.png",
  				sheet_x: 38,
  				sheet_y: 42,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F926-1F3FC",
  				non_qualified: null,
  				image: "1f926-1f3fc.png",
  				sheet_x: 38,
  				sheet_y: 43,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F926-1F3FD",
  				non_qualified: null,
  				image: "1f926-1f3fd.png",
  				sheet_x: 38,
  				sheet_y: 44,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F926-1F3FE",
  				non_qualified: null,
  				image: "1f926-1f3fe.png",
  				sheet_x: 38,
  				sheet_y: 45,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F926-1F3FF",
  				non_qualified: null,
  				image: "1f926-1f3ff.png",
  				sheet_x: 38,
  				sheet_y: 46,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Face Palm",
  		b: "1F926",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			38,
  			41
  		],
  		o: 9
  	},
  	"flag-sv": {
  		a: "El Salvador Flag",
  		b: "1F1F8-1F1FB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			38
  		]
  	},
  	"man-facepalming": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F926-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F926-1F3FB-200D-2642",
  				image: "1f926-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 36,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F926-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F926-1F3FC-200D-2642",
  				image: "1f926-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 37,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F926-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F926-1F3FD-200D-2642",
  				image: "1f926-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 38,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F926-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F926-1F3FE-200D-2642",
  				image: "1f926-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 39,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F926-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F926-1F3FF-200D-2642",
  				image: "1f926-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 40,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Facepalming",
  		b: "1F926-200D-2642-FE0F",
  		c: "1F926-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			35
  		],
  		o: 9
  	},
  	"flag-sx": {
  		a: "Sint Maarten Flag",
  		b: "1F1F8-1F1FD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			39
  		]
  	},
  	"flag-sy": {
  		a: "Syria Flag",
  		b: "1F1F8-1F1FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			40
  		]
  	},
  	"woman-facepalming": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F926-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F926-1F3FB-200D-2640",
  				image: "1f926-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 30,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F926-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F926-1F3FC-200D-2640",
  				image: "1f926-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 31,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F926-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F926-1F3FD-200D-2640",
  				image: "1f926-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 32,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F926-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F926-1F3FE-200D-2640",
  				image: "1f926-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 33,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F926-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F926-1F3FF-200D-2640",
  				image: "1f926-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 38,
  				sheet_y: 34,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Facepalming",
  		b: "1F926-200D-2640-FE0F",
  		c: "1F926-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			29
  		],
  		o: 9
  	},
  	shrug: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F937-1F3FB",
  				non_qualified: null,
  				image: "1f937-1f3fb.png",
  				sheet_x: 40,
  				sheet_y: 7,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F937-1F3FC",
  				non_qualified: null,
  				image: "1f937-1f3fc.png",
  				sheet_x: 40,
  				sheet_y: 8,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F937-1F3FD",
  				non_qualified: null,
  				image: "1f937-1f3fd.png",
  				sheet_x: 40,
  				sheet_y: 9,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F937-1F3FE",
  				non_qualified: null,
  				image: "1f937-1f3fe.png",
  				sheet_x: 40,
  				sheet_y: 10,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F937-1F3FF",
  				non_qualified: null,
  				image: "1f937-1f3ff.png",
  				sheet_x: 40,
  				sheet_y: 11,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Shrug",
  		b: "1F937",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			40,
  			6
  		],
  		o: 9
  	},
  	"flag-sz": {
  		a: "Swaziland Flag",
  		b: "1F1F8-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			41
  		]
  	},
  	"flag-ta": {
  		a: "Tristan Da Cunha Flag",
  		b: "1F1F9-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			42
  		]
  	},
  	"man-shrugging": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F937-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F937-1F3FB-200D-2642",
  				image: "1f937-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 1,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F937-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F937-1F3FC-200D-2642",
  				image: "1f937-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 2,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F937-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F937-1F3FD-200D-2642",
  				image: "1f937-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 3,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F937-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F937-1F3FE-200D-2642",
  				image: "1f937-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 4,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F937-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F937-1F3FF-200D-2642",
  				image: "1f937-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 5,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Shrugging",
  		b: "1F937-200D-2642-FE0F",
  		c: "1F937-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			40,
  			0
  		],
  		o: 9
  	},
  	"woman-shrugging": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F937-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F937-1F3FB-200D-2640",
  				image: "1f937-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 39,
  				sheet_y: 47,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F937-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F937-1F3FC-200D-2640",
  				image: "1f937-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 39,
  				sheet_y: 48,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F937-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F937-1F3FD-200D-2640",
  				image: "1f937-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 39,
  				sheet_y: 49,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F937-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F937-1F3FE-200D-2640",
  				image: "1f937-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 39,
  				sheet_y: 50,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F937-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F937-1F3FF-200D-2640",
  				image: "1f937-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 39,
  				sheet_y: 51,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Shrugging",
  		b: "1F937-200D-2640-FE0F",
  		c: "1F937-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			39,
  			46
  		],
  		o: 9
  	},
  	"flag-tc": {
  		a: "Turks & Caicos Islands Flag",
  		b: "1F1F9-1F1E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			43
  		]
  	},
  	massage: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F486-1F3FB",
  				non_qualified: null,
  				image: "1f486-1f3fb.png",
  				sheet_x: 24,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F486-1F3FC",
  				non_qualified: null,
  				image: "1f486-1f3fc.png",
  				sheet_x: 24,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F486-1F3FD",
  				non_qualified: null,
  				image: "1f486-1f3fd.png",
  				sheet_x: 24,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F486-1F3FE",
  				non_qualified: null,
  				image: "1f486-1f3fe.png",
  				sheet_x: 24,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F486-1F3FF",
  				non_qualified: null,
  				image: "1f486-1f3ff.png",
  				sheet_x: 24,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F486-200D-2640-FE0F",
  		a: "Face Massage",
  		b: "1F486",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			24,
  			10
  		]
  	},
  	"flag-td": {
  		a: "Chad Flag",
  		b: "1F1F9-1F1E9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			44
  		]
  	},
  	"man-getting-massage": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F486-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F486-1F3FB-200D-2642",
  				image: "1f486-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F486-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F486-1F3FC-200D-2642",
  				image: "1f486-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F486-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F486-1F3FD-200D-2642",
  				image: "1f486-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F486-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F486-1F3FE-200D-2642",
  				image: "1f486-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F486-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F486-1F3FF-200D-2642",
  				image: "1f486-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Getting Massage",
  		b: "1F486-200D-2642-FE0F",
  		c: "1F486-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			24,
  			4
  		]
  	},
  	"flag-tf": {
  		a: "French Southern Territories Flag",
  		b: "1F1F9-1F1EB",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			45
  		]
  	},
  	"woman-getting-massage": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F486-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F486-1F3FB-200D-2640",
  				image: "1f486-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 23,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F486-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F486-1F3FC-200D-2640",
  				image: "1f486-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F486-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F486-1F3FD-200D-2640",
  				image: "1f486-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F486-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F486-1F3FE-200D-2640",
  				image: "1f486-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F486-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F486-1F3FF-200D-2640",
  				image: "1f486-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F486",
  		a: "Woman Getting Massage",
  		b: "1F486-200D-2640-FE0F",
  		c: "1F486-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			23,
  			50
  		]
  	},
  	"flag-tg": {
  		a: "Togo Flag",
  		b: "1F1F9-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			46
  		]
  	},
  	haircut: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F487-1F3FB",
  				non_qualified: null,
  				image: "1f487-1f3fb.png",
  				sheet_x: 24,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F487-1F3FC",
  				non_qualified: null,
  				image: "1f487-1f3fc.png",
  				sheet_x: 24,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F487-1F3FD",
  				non_qualified: null,
  				image: "1f487-1f3fd.png",
  				sheet_x: 24,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F487-1F3FE",
  				non_qualified: null,
  				image: "1f487-1f3fe.png",
  				sheet_x: 24,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F487-1F3FF",
  				non_qualified: null,
  				image: "1f487-1f3ff.png",
  				sheet_x: 24,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F487-200D-2640-FE0F",
  		a: "Haircut",
  		b: "1F487",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			24,
  			28
  		]
  	},
  	"flag-th": {
  		a: "Thailand Flag",
  		b: "1F1F9-1F1ED",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			47
  		]
  	},
  	"man-getting-haircut": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F487-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F487-1F3FB-200D-2642",
  				image: "1f487-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F487-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F487-1F3FC-200D-2642",
  				image: "1f487-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F487-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F487-1F3FD-200D-2642",
  				image: "1f487-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F487-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F487-1F3FE-200D-2642",
  				image: "1f487-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F487-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F487-1F3FF-200D-2642",
  				image: "1f487-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Getting Haircut",
  		b: "1F487-200D-2642-FE0F",
  		c: "1F487-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			24,
  			22
  		]
  	},
  	"flag-tj": {
  		a: "Tajikistan Flag",
  		b: "1F1F9-1F1EF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			48
  		]
  	},
  	"flag-tk": {
  		a: "Tokelau Flag",
  		b: "1F1F9-1F1F0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			49
  		]
  	},
  	"woman-getting-haircut": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F487-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F487-1F3FB-200D-2640",
  				image: "1f487-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F487-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F487-1F3FC-200D-2640",
  				image: "1f487-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F487-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F487-1F3FD-200D-2640",
  				image: "1f487-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F487-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F487-1F3FE-200D-2640",
  				image: "1f487-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F487-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F487-1F3FF-200D-2640",
  				image: "1f487-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 24,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F487",
  		a: "Woman Getting Haircut",
  		b: "1F487-200D-2640-FE0F",
  		c: "1F487-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			24,
  			16
  		]
  	},
  	walking: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6B6-1F3FB",
  				non_qualified: null,
  				image: "1f6b6-1f3fb.png",
  				sheet_x: 36,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F6B6-1F3FC",
  				non_qualified: null,
  				image: "1f6b6-1f3fc.png",
  				sheet_x: 36,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F6B6-1F3FD",
  				non_qualified: null,
  				image: "1f6b6-1f3fd.png",
  				sheet_x: 36,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F6B6-1F3FE",
  				non_qualified: null,
  				image: "1f6b6-1f3fe.png",
  				sheet_x: 36,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F6B6-1F3FF",
  				non_qualified: null,
  				image: "1f6b6-1f3ff.png",
  				sheet_x: 36,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F6B6-200D-2642-FE0F",
  		a: "Pedestrian",
  		b: "1F6B6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			36,
  			21
  		]
  	},
  	"flag-tl": {
  		a: "Timor-Leste Flag",
  		b: "1F1F9-1F1F1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			50
  		]
  	},
  	"man-walking": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6B6-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F6B6-1F3FB-200D-2642",
  				image: "1f6b6-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6B6-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F6B6-1F3FC-200D-2642",
  				image: "1f6b6-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6B6-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F6B6-1F3FD-200D-2642",
  				image: "1f6b6-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6B6-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F6B6-1F3FE-200D-2642",
  				image: "1f6b6-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6B6-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F6B6-1F3FF-200D-2642",
  				image: "1f6b6-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F6B6",
  		a: "Man Walking",
  		b: "1F6B6-200D-2642-FE0F",
  		c: "1F6B6-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			36,
  			15
  		]
  	},
  	"flag-tm": {
  		a: "Turkmenistan Flag",
  		b: "1F1F9-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			4,
  			51
  		]
  	},
  	"woman-walking": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6B6-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F6B6-1F3FB-200D-2640",
  				image: "1f6b6-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6B6-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F6B6-1F3FC-200D-2640",
  				image: "1f6b6-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6B6-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F6B6-1F3FD-200D-2640",
  				image: "1f6b6-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6B6-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F6B6-1F3FE-200D-2640",
  				image: "1f6b6-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6B6-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F6B6-1F3FF-200D-2640",
  				image: "1f6b6-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Walking",
  		b: "1F6B6-200D-2640-FE0F",
  		c: "1F6B6-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			36,
  			9
  		]
  	},
  	"flag-tn": {
  		a: "Tunisia Flag",
  		b: "1F1F9-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			0
  		]
  	},
  	runner: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3C3-1F3FB",
  				non_qualified: null,
  				image: "1f3c3-1f3fb.png",
  				sheet_x: 9,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F3C3-1F3FC",
  				non_qualified: null,
  				image: "1f3c3-1f3fc.png",
  				sheet_x: 9,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F3C3-1F3FD",
  				non_qualified: null,
  				image: "1f3c3-1f3fd.png",
  				sheet_x: 9,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F3C3-1F3FE",
  				non_qualified: null,
  				image: "1f3c3-1f3fe.png",
  				sheet_x: 9,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F3C3-1F3FF",
  				non_qualified: null,
  				image: "1f3c3-1f3ff.png",
  				sheet_x: 9,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F3C3-200D-2642-FE0F",
  		a: "Runner",
  		b: "1F3C3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			9,
  			46
  		],
  		n: [
  			"running"
  		]
  	},
  	"flag-to": {
  		a: "Tonga Flag",
  		b: "1F1F9-1F1F4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			1
  		]
  	},
  	"man-running": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3C3-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F3C3-1F3FB-200D-2642",
  				image: "1f3c3-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3C3-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F3C3-1F3FC-200D-2642",
  				image: "1f3c3-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3C3-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F3C3-1F3FD-200D-2642",
  				image: "1f3c3-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3C3-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F3C3-1F3FE-200D-2642",
  				image: "1f3c3-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3C3-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F3C3-1F3FF-200D-2642",
  				image: "1f3c3-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F3C3",
  		a: "Man Running",
  		b: "1F3C3-200D-2642-FE0F",
  		c: "1F3C3-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			9,
  			40
  		]
  	},
  	"flag-tr": {
  		a: "Turkey Flag",
  		b: "1F1F9-1F1F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			2
  		]
  	},
  	"flag-tt": {
  		a: "Trinidad & Tobago Flag",
  		b: "1F1F9-1F1F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			3
  		]
  	},
  	"woman-running": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3C3-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F3C3-1F3FB-200D-2640",
  				image: "1f3c3-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3C3-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F3C3-1F3FC-200D-2640",
  				image: "1f3c3-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3C3-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F3C3-1F3FD-200D-2640",
  				image: "1f3c3-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3C3-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F3C3-1F3FE-200D-2640",
  				image: "1f3c3-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3C3-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F3C3-1F3FF-200D-2640",
  				image: "1f3c3-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 9,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Running",
  		b: "1F3C3-200D-2640-FE0F",
  		c: "1F3C3-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			9,
  			34
  		]
  	},
  	"flag-tv": {
  		a: "Tuvalu Flag",
  		b: "1F1F9-1F1FB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			4
  		]
  	},
  	dancer: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F483-1F3FB",
  				non_qualified: null,
  				image: "1f483-1f3fb.png",
  				sheet_x: 23,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F483-1F3FC",
  				non_qualified: null,
  				image: "1f483-1f3fc.png",
  				sheet_x: 23,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F483-1F3FD",
  				non_qualified: null,
  				image: "1f483-1f3fd.png",
  				sheet_x: 23,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F483-1F3FE",
  				non_qualified: null,
  				image: "1f483-1f3fe.png",
  				sheet_x: 23,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F483-1F3FF",
  				non_qualified: null,
  				image: "1f483-1f3ff.png",
  				sheet_x: 23,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Dancer",
  		b: "1F483",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"female",
  			"girl",
  			"woman",
  			"fun"
  		],
  		k: [
  			23,
  			37
  		]
  	},
  	"flag-tw": {
  		a: "Taiwan Flag",
  		b: "1F1F9-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			5
  		]
  	},
  	man_dancing: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F57A-1F3FB",
  				non_qualified: null,
  				image: "1f57a-1f3fb.png",
  				sheet_x: 29,
  				sheet_y: 22,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F57A-1F3FC",
  				non_qualified: null,
  				image: "1f57a-1f3fc.png",
  				sheet_x: 29,
  				sheet_y: 23,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F57A-1F3FD",
  				non_qualified: null,
  				image: "1f57a-1f3fd.png",
  				sheet_x: 29,
  				sheet_y: 24,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F57A-1F3FE",
  				non_qualified: null,
  				image: "1f57a-1f3fe.png",
  				sheet_x: 29,
  				sheet_y: 25,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F57A-1F3FF",
  				non_qualified: null,
  				image: "1f57a-1f3ff.png",
  				sheet_x: 29,
  				sheet_y: 26,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Dancing",
  		b: "1F57A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"male",
  			"boy",
  			"fun",
  			"dancer"
  		],
  		k: [
  			29,
  			21
  		],
  		o: 9
  	},
  	dancers: {
  		obsoleted_by: "1F46F-200D-2640-FE0F",
  		a: "Woman with Bunny Ears",
  		b: "1F46F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			21,
  			1
  		]
  	},
  	"flag-tz": {
  		a: "Tanzania Flag",
  		b: "1F1F9-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			6
  		]
  	},
  	"flag-ua": {
  		a: "Ukraine Flag",
  		b: "1F1FA-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			7
  		]
  	},
  	"man-with-bunny-ears-partying": {
  		a: "Man with Bunny Ears Partying",
  		b: "1F46F-200D-2642-FE0F",
  		c: "1F46F-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			21,
  			0
  		]
  	},
  	"woman-with-bunny-ears-partying": {
  		obsoletes: "1F46F",
  		a: "Woman with Bunny Ears Partying",
  		b: "1F46F-200D-2640-FE0F",
  		c: "1F46F-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			20,
  			51
  		]
  	},
  	"flag-ug": {
  		a: "Uganda Flag",
  		b: "1F1FA-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			8
  		]
  	},
  	"flag-um": {
  		a: "U.s. Outlying Islands Flag",
  		b: "1F1FA-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			9
  		]
  	},
  	person_in_steamy_room: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D6-1F3FB",
  				non_qualified: null,
  				image: "1f9d6-1f3fb.png",
  				sheet_x: 43,
  				sheet_y: 41,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D6-1F3FB-200D-2642-FE0F"
  			},
  			"1F3FC": {
  				unified: "1F9D6-1F3FC",
  				non_qualified: null,
  				image: "1f9d6-1f3fc.png",
  				sheet_x: 43,
  				sheet_y: 42,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D6-1F3FC-200D-2642-FE0F"
  			},
  			"1F3FD": {
  				unified: "1F9D6-1F3FD",
  				non_qualified: null,
  				image: "1f9d6-1f3fd.png",
  				sheet_x: 43,
  				sheet_y: 43,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D6-1F3FD-200D-2642-FE0F"
  			},
  			"1F3FE": {
  				unified: "1F9D6-1F3FE",
  				non_qualified: null,
  				image: "1f9d6-1f3fe.png",
  				sheet_x: 43,
  				sheet_y: 44,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D6-1F3FE-200D-2642-FE0F"
  			},
  			"1F3FF": {
  				unified: "1F9D6-1F3FF",
  				non_qualified: null,
  				image: "1f9d6-1f3ff.png",
  				sheet_x: 43,
  				sheet_y: 45,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D6-1F3FF-200D-2642-FE0F"
  			}
  		},
  		obsoleted_by: "1F9D6-200D-2642-FE0F",
  		a: "Person in Steamy Room",
  		b: "1F9D6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			43,
  			40
  		],
  		o: 10
  	},
  	woman_in_steamy_room: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D6-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F9D6-1F3FB-200D-2640",
  				image: "1f9d6-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 29,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9D6-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F9D6-1F3FC-200D-2640",
  				image: "1f9d6-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 30,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9D6-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F9D6-1F3FD-200D-2640",
  				image: "1f9d6-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 31,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9D6-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F9D6-1F3FE-200D-2640",
  				image: "1f9d6-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 32,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9D6-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F9D6-1F3FF-200D-2640",
  				image: "1f9d6-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 33,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman in Steamy Room",
  		b: "1F9D6-200D-2640-FE0F",
  		c: "1F9D6-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			43,
  			28
  		],
  		o: 10
  	},
  	"flag-un": {
  		a: "United Nations Flag",
  		b: "1F1FA-1F1F3",
  		d: false,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			5,
  			10
  		]
  	},
  	us: {
  		a: "United States Flag",
  		b: "1F1FA-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"united",
  			"states",
  			"america",
  			"flag",
  			"nation",
  			"country",
  			"banner"
  		],
  		k: [
  			5,
  			11
  		],
  		n: [
  			"flag-us"
  		]
  	},
  	man_in_steamy_room: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D6-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F9D6-1F3FB-200D-2642",
  				image: "1f9d6-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 35,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D6-1F3FB"
  			},
  			"1F3FC": {
  				unified: "1F9D6-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F9D6-1F3FC-200D-2642",
  				image: "1f9d6-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 36,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D6-1F3FC"
  			},
  			"1F3FD": {
  				unified: "1F9D6-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F9D6-1F3FD-200D-2642",
  				image: "1f9d6-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 37,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D6-1F3FD"
  			},
  			"1F3FE": {
  				unified: "1F9D6-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F9D6-1F3FE-200D-2642",
  				image: "1f9d6-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 38,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D6-1F3FE"
  			},
  			"1F3FF": {
  				unified: "1F9D6-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F9D6-1F3FF-200D-2642",
  				image: "1f9d6-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 39,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D6-1F3FF"
  			}
  		},
  		obsoletes: "1F9D6",
  		a: "Man in Steamy Room",
  		b: "1F9D6-200D-2642-FE0F",
  		c: "1F9D6-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			43,
  			34
  		],
  		o: 10
  	},
  	person_climbing: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D7-1F3FB",
  				non_qualified: null,
  				image: "1f9d7-1f3fb.png",
  				sheet_x: 44,
  				sheet_y: 7,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D7-1F3FB-200D-2640-FE0F"
  			},
  			"1F3FC": {
  				unified: "1F9D7-1F3FC",
  				non_qualified: null,
  				image: "1f9d7-1f3fc.png",
  				sheet_x: 44,
  				sheet_y: 8,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D7-1F3FC-200D-2640-FE0F"
  			},
  			"1F3FD": {
  				unified: "1F9D7-1F3FD",
  				non_qualified: null,
  				image: "1f9d7-1f3fd.png",
  				sheet_x: 44,
  				sheet_y: 9,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D7-1F3FD-200D-2640-FE0F"
  			},
  			"1F3FE": {
  				unified: "1F9D7-1F3FE",
  				non_qualified: null,
  				image: "1f9d7-1f3fe.png",
  				sheet_x: 44,
  				sheet_y: 10,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D7-1F3FE-200D-2640-FE0F"
  			},
  			"1F3FF": {
  				unified: "1F9D7-1F3FF",
  				non_qualified: null,
  				image: "1f9d7-1f3ff.png",
  				sheet_x: 44,
  				sheet_y: 11,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D7-1F3FF-200D-2640-FE0F"
  			}
  		},
  		obsoleted_by: "1F9D7-200D-2640-FE0F",
  		a: "Person Climbing",
  		b: "1F9D7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			44,
  			6
  		],
  		o: 10
  	},
  	"flag-uy": {
  		a: "Uruguay Flag",
  		b: "1F1FA-1F1FE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			12
  		]
  	},
  	woman_climbing: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D7-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F9D7-1F3FB-200D-2640",
  				image: "1f9d7-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 47,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D7-1F3FB"
  			},
  			"1F3FC": {
  				unified: "1F9D7-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F9D7-1F3FC-200D-2640",
  				image: "1f9d7-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 48,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D7-1F3FC"
  			},
  			"1F3FD": {
  				unified: "1F9D7-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F9D7-1F3FD-200D-2640",
  				image: "1f9d7-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 49,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D7-1F3FD"
  			},
  			"1F3FE": {
  				unified: "1F9D7-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F9D7-1F3FE-200D-2640",
  				image: "1f9d7-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 50,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D7-1F3FE"
  			},
  			"1F3FF": {
  				unified: "1F9D7-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F9D7-1F3FF-200D-2640",
  				image: "1f9d7-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 43,
  				sheet_y: 51,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D7-1F3FF"
  			}
  		},
  		obsoletes: "1F9D7",
  		a: "Woman Climbing",
  		b: "1F9D7-200D-2640-FE0F",
  		c: "1F9D7-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			43,
  			46
  		],
  		o: 10
  	},
  	"flag-uz": {
  		a: "Uzbekistan Flag",
  		b: "1F1FA-1F1FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			13
  		]
  	},
  	man_climbing: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D7-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F9D7-1F3FB-200D-2642",
  				image: "1f9d7-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 1,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9D7-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F9D7-1F3FC-200D-2642",
  				image: "1f9d7-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 2,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9D7-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F9D7-1F3FD-200D-2642",
  				image: "1f9d7-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 3,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9D7-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F9D7-1F3FE-200D-2642",
  				image: "1f9d7-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 4,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9D7-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F9D7-1F3FF-200D-2642",
  				image: "1f9d7-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 5,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Climbing",
  		b: "1F9D7-200D-2642-FE0F",
  		c: "1F9D7-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			44,
  			0
  		],
  		o: 10
  	},
  	"flag-va": {
  		a: "Vatican City Flag",
  		b: "1F1FB-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			14
  		]
  	},
  	person_in_lotus_position: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D8-1F3FB",
  				non_qualified: null,
  				image: "1f9d8-1f3fb.png",
  				sheet_x: 44,
  				sheet_y: 25,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D8-1F3FB-200D-2640-FE0F"
  			},
  			"1F3FC": {
  				unified: "1F9D8-1F3FC",
  				non_qualified: null,
  				image: "1f9d8-1f3fc.png",
  				sheet_x: 44,
  				sheet_y: 26,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D8-1F3FC-200D-2640-FE0F"
  			},
  			"1F3FD": {
  				unified: "1F9D8-1F3FD",
  				non_qualified: null,
  				image: "1f9d8-1f3fd.png",
  				sheet_x: 44,
  				sheet_y: 27,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D8-1F3FD-200D-2640-FE0F"
  			},
  			"1F3FE": {
  				unified: "1F9D8-1F3FE",
  				non_qualified: null,
  				image: "1f9d8-1f3fe.png",
  				sheet_x: 44,
  				sheet_y: 28,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D8-1F3FE-200D-2640-FE0F"
  			},
  			"1F3FF": {
  				unified: "1F9D8-1F3FF",
  				non_qualified: null,
  				image: "1f9d8-1f3ff.png",
  				sheet_x: 44,
  				sheet_y: 29,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false,
  				obsoleted_by: "1F9D8-1F3FF-200D-2640-FE0F"
  			}
  		},
  		obsoleted_by: "1F9D8-200D-2640-FE0F",
  		a: "Person in Lotus Position",
  		b: "1F9D8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			44,
  			24
  		],
  		o: 10
  	},
  	"flag-vc": {
  		a: "St. Vincent & Grenadines Flag",
  		b: "1F1FB-1F1E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			15
  		]
  	},
  	"flag-ve": {
  		a: "Venezuela Flag",
  		b: "1F1FB-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			16
  		]
  	},
  	woman_in_lotus_position: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D8-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F9D8-1F3FB-200D-2640",
  				image: "1f9d8-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 13,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D8-1F3FB"
  			},
  			"1F3FC": {
  				unified: "1F9D8-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F9D8-1F3FC-200D-2640",
  				image: "1f9d8-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 14,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D8-1F3FC"
  			},
  			"1F3FD": {
  				unified: "1F9D8-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F9D8-1F3FD-200D-2640",
  				image: "1f9d8-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 15,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D8-1F3FD"
  			},
  			"1F3FE": {
  				unified: "1F9D8-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F9D8-1F3FE-200D-2640",
  				image: "1f9d8-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 16,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D8-1F3FE"
  			},
  			"1F3FF": {
  				unified: "1F9D8-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F9D8-1F3FF-200D-2640",
  				image: "1f9d8-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 17,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false,
  				obsoletes: "1F9D8-1F3FF"
  			}
  		},
  		obsoletes: "1F9D8",
  		a: "Woman in Lotus Position",
  		b: "1F9D8-200D-2640-FE0F",
  		c: "1F9D8-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			44,
  			12
  		],
  		o: 10
  	},
  	man_in_lotus_position: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F9D8-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F9D8-1F3FB-200D-2642",
  				image: "1f9d8-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 19,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F9D8-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F9D8-1F3FC-200D-2642",
  				image: "1f9d8-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 20,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F9D8-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F9D8-1F3FD-200D-2642",
  				image: "1f9d8-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 21,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F9D8-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F9D8-1F3FE-200D-2642",
  				image: "1f9d8-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 22,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F9D8-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F9D8-1F3FF-200D-2642",
  				image: "1f9d8-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 44,
  				sheet_y: 23,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man in Lotus Position",
  		b: "1F9D8-200D-2642-FE0F",
  		c: "1F9D8-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			44,
  			18
  		],
  		o: 10
  	},
  	"flag-vg": {
  		a: "British Virgin Islands Flag",
  		b: "1F1FB-1F1EC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			17
  		]
  	},
  	"flag-vi": {
  		a: "U.s. Virgin Islands Flag",
  		b: "1F1FB-1F1EE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			18
  		]
  	},
  	bath: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6C0-1F3FB",
  				non_qualified: null,
  				image: "1f6c0-1f3fb.png",
  				sheet_x: 36,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F6C0-1F3FC",
  				non_qualified: null,
  				image: "1f6c0-1f3fc.png",
  				sheet_x: 36,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F6C0-1F3FD",
  				non_qualified: null,
  				image: "1f6c0-1f3fd.png",
  				sheet_x: 36,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F6C0-1F3FE",
  				non_qualified: null,
  				image: "1f6c0-1f3fe.png",
  				sheet_x: 36,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F6C0-1F3FF",
  				non_qualified: null,
  				image: "1f6c0-1f3ff.png",
  				sheet_x: 36,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Bath",
  		b: "1F6C0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"clean",
  			"shower",
  			"bathroom"
  		],
  		k: [
  			36,
  			36
  		]
  	},
  	sleeping_accommodation: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6CC-1F3FB",
  				non_qualified: null,
  				image: "1f6cc-1f3fb.png",
  				sheet_x: 36,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6CC-1F3FC",
  				non_qualified: null,
  				image: "1f6cc-1f3fc.png",
  				sheet_x: 36,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6CC-1F3FD",
  				non_qualified: null,
  				image: "1f6cc-1f3fd.png",
  				sheet_x: 36,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6CC-1F3FE",
  				non_qualified: null,
  				image: "1f6cc-1f3fe.png",
  				sheet_x: 37,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6CC-1F3FF",
  				non_qualified: null,
  				image: "1f6cc-1f3ff.png",
  				sheet_x: 37,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Sleeping Accommodation",
  		b: "1F6CC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			36,
  			48
  		],
  		o: 7
  	},
  	"flag-vn": {
  		a: "Vietnam Flag",
  		b: "1F1FB-1F1F3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			19
  		]
  	},
  	man_in_business_suit_levitating: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F574-1F3FB",
  				non_qualified: null,
  				image: "1f574-1f3fb.png",
  				sheet_x: 28,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F574-1F3FC",
  				non_qualified: null,
  				image: "1f574-1f3fc.png",
  				sheet_x: 28,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F574-1F3FD",
  				non_qualified: null,
  				image: "1f574-1f3fd.png",
  				sheet_x: 28,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F574-1F3FE",
  				non_qualified: null,
  				image: "1f574-1f3fe.png",
  				sheet_x: 28,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F574-1F3FF",
  				non_qualified: null,
  				image: "1f574-1f3ff.png",
  				sheet_x: 28,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Man in Business Suit Levitating",
  		b: "1F574-FE0F",
  		c: "1F574",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			28,
  			45
  		],
  		o: 7
  	},
  	"flag-vu": {
  		a: "Vanuatu Flag",
  		b: "1F1FB-1F1FA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			20
  		]
  	},
  	"flag-wf": {
  		a: "Wallis & Futuna Flag",
  		b: "1F1FC-1F1EB",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			21
  		]
  	},
  	speaking_head_in_silhouette: {
  		a: "Speaking Head in Silhouette",
  		b: "1F5E3-FE0F",
  		c: "1F5E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			30,
  			14
  		],
  		o: 7
  	},
  	bust_in_silhouette: {
  		a: "Bust in Silhouette",
  		b: "1F464",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"user",
  			"person",
  			"human"
  		],
  		k: [
  			15,
  			40
  		]
  	},
  	"flag-ws": {
  		a: "Samoa Flag",
  		b: "1F1FC-1F1F8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			22
  		]
  	},
  	busts_in_silhouette: {
  		a: "Busts in Silhouette",
  		b: "1F465",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"user",
  			"person",
  			"human",
  			"group",
  			"team"
  		],
  		k: [
  			15,
  			41
  		]
  	},
  	"flag-xk": {
  		a: "Kosovo Flag",
  		b: "1F1FD-1F1F0",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			23
  		]
  	},
  	fencer: {
  		a: "Fencer",
  		b: "1F93A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			40,
  			48
  		],
  		o: 9
  	},
  	"flag-ye": {
  		a: "Yemen Flag",
  		b: "1F1FE-1F1EA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			24
  		]
  	},
  	"flag-yt": {
  		a: "Mayotte Flag",
  		b: "1F1FE-1F1F9",
  		d: true,
  		e: false,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			25
  		]
  	},
  	horse_racing: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3C7-1F3FB",
  				non_qualified: null,
  				image: "1f3c7-1f3fb.png",
  				sheet_x: 10,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F3C7-1F3FC",
  				non_qualified: null,
  				image: "1f3c7-1f3fc.png",
  				sheet_x: 10,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F3C7-1F3FD",
  				non_qualified: null,
  				image: "1f3c7-1f3fd.png",
  				sheet_x: 10,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F3C7-1F3FE",
  				non_qualified: null,
  				image: "1f3c7-1f3fe.png",
  				sheet_x: 10,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F3C7-1F3FF",
  				non_qualified: null,
  				image: "1f3c7-1f3ff.png",
  				sheet_x: 10,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Horse Racing",
  		b: "1F3C7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"animal",
  			"betting",
  			"competition",
  			"gambling",
  			"luck"
  		],
  		k: [
  			10,
  			20
  		]
  	},
  	"flag-za": {
  		a: "South Africa Flag",
  		b: "1F1FF-1F1E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			26
  		]
  	},
  	skier: {
  		a: "Skier",
  		b: "26F7-FE0F",
  		c: "26F7",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sports",
  			"winter",
  			"snow"
  		],
  		k: [
  			48,
  			44
  		],
  		o: 5
  	},
  	"flag-zm": {
  		a: "Zambia Flag",
  		b: "1F1FF-1F1F2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			27
  		]
  	},
  	snowboarder: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3C2-1F3FB",
  				non_qualified: null,
  				image: "1f3c2-1f3fb.png",
  				sheet_x: 9,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F3C2-1F3FC",
  				non_qualified: null,
  				image: "1f3c2-1f3fc.png",
  				sheet_x: 9,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F3C2-1F3FD",
  				non_qualified: null,
  				image: "1f3c2-1f3fd.png",
  				sheet_x: 9,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F3C2-1F3FE",
  				non_qualified: null,
  				image: "1f3c2-1f3fe.png",
  				sheet_x: 9,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F3C2-1F3FF",
  				non_qualified: null,
  				image: "1f3c2-1f3ff.png",
  				sheet_x: 9,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Snowboarder",
  		b: "1F3C2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sports",
  			"winter"
  		],
  		k: [
  			9,
  			28
  		]
  	},
  	golfer: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3CC-1F3FB",
  				non_qualified: null,
  				image: "1f3cc-1f3fb.png",
  				sheet_x: 11,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3CC-1F3FC",
  				non_qualified: null,
  				image: "1f3cc-1f3fc.png",
  				sheet_x: 11,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3CC-1F3FD",
  				non_qualified: null,
  				image: "1f3cc-1f3fd.png",
  				sheet_x: 11,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3CC-1F3FE",
  				non_qualified: null,
  				image: "1f3cc-1f3fe.png",
  				sheet_x: 11,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3CC-1F3FF",
  				non_qualified: null,
  				image: "1f3cc-1f3ff.png",
  				sheet_x: 11,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoleted_by: "1F3CC-FE0F-200D-2642-FE0F",
  		a: "Golfer",
  		b: "1F3CC-FE0F",
  		c: "1F3CC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			11,
  			24
  		],
  		o: 7
  	},
  	"flag-zw": {
  		a: "Zimbabwe Flag",
  		b: "1F1FF-1F1FC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			5,
  			28
  		]
  	},
  	"man-golfing": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3CC-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F3CC-1F3FB-200D-2642",
  				image: "1f3cc-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3CC-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F3CC-1F3FC-200D-2642",
  				image: "1f3cc-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3CC-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F3CC-1F3FD-200D-2642",
  				image: "1f3cc-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3CC-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F3CC-1F3FE-200D-2642",
  				image: "1f3cc-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3CC-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F3CC-1F3FF-200D-2642",
  				image: "1f3cc-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F3CC-FE0F",
  		a: "Man Golfing",
  		b: "1F3CC-FE0F-200D-2642-FE0F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			11,
  			18
  		],
  		o: 7
  	},
  	"flag-england": {
  		a: "England Flag",
  		b: "1F3F4-E0067-E0062-E0065-E006E-E0067-E007F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			12,
  			16
  		],
  		o: 7
  	},
  	"woman-golfing": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3CC-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F3CC-1F3FB-200D-2640",
  				image: "1f3cc-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3CC-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F3CC-1F3FC-200D-2640",
  				image: "1f3cc-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3CC-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F3CC-1F3FD-200D-2640",
  				image: "1f3cc-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3CC-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F3CC-1F3FE-200D-2640",
  				image: "1f3cc-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3CC-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F3CC-1F3FF-200D-2640",
  				image: "1f3cc-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Golfing",
  		b: "1F3CC-FE0F-200D-2640-FE0F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			11,
  			12
  		],
  		o: 7
  	},
  	"flag-scotland": {
  		a: "Scotland Flag",
  		b: "1F3F4-E0067-E0062-E0073-E0063-E0074-E007F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			12,
  			17
  		],
  		o: 7
  	},
  	"flag-wales": {
  		a: "Wales Flag",
  		b: "1F3F4-E0067-E0062-E0077-E006C-E0073-E007F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			12,
  			18
  		],
  		o: 7
  	},
  	surfer: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3C4-1F3FB",
  				non_qualified: null,
  				image: "1f3c4-1f3fb.png",
  				sheet_x: 10,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F3C4-1F3FC",
  				non_qualified: null,
  				image: "1f3c4-1f3fc.png",
  				sheet_x: 10,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F3C4-1F3FD",
  				non_qualified: null,
  				image: "1f3c4-1f3fd.png",
  				sheet_x: 10,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F3C4-1F3FE",
  				non_qualified: null,
  				image: "1f3c4-1f3fe.png",
  				sheet_x: 10,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F3C4-1F3FF",
  				non_qualified: null,
  				image: "1f3c4-1f3ff.png",
  				sheet_x: 10,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F3C4-200D-2642-FE0F",
  		a: "Surfer",
  		b: "1F3C4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			10,
  			12
  		]
  	},
  	"man-surfing": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3C4-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F3C4-1F3FB-200D-2642",
  				image: "1f3c4-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3C4-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F3C4-1F3FC-200D-2642",
  				image: "1f3c4-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3C4-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F3C4-1F3FD-200D-2642",
  				image: "1f3c4-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3C4-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F3C4-1F3FE-200D-2642",
  				image: "1f3c4-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3C4-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F3C4-1F3FF-200D-2642",
  				image: "1f3c4-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F3C4",
  		a: "Man Surfing",
  		b: "1F3C4-200D-2642-FE0F",
  		c: "1F3C4-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			10,
  			6
  		]
  	},
  	"woman-surfing": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3C4-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F3C4-1F3FB-200D-2640",
  				image: "1f3c4-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3C4-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F3C4-1F3FC-200D-2640",
  				image: "1f3c4-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3C4-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F3C4-1F3FD-200D-2640",
  				image: "1f3c4-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3C4-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F3C4-1F3FE-200D-2640",
  				image: "1f3c4-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3C4-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F3C4-1F3FF-200D-2640",
  				image: "1f3c4-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Surfing",
  		b: "1F3C4-200D-2640-FE0F",
  		c: "1F3C4-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			10,
  			0
  		]
  	},
  	rowboat: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6A3-1F3FB",
  				non_qualified: null,
  				image: "1f6a3-1f3fb.png",
  				sheet_x: 35,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6A3-1F3FC",
  				non_qualified: null,
  				image: "1f6a3-1f3fc.png",
  				sheet_x: 35,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6A3-1F3FD",
  				non_qualified: null,
  				image: "1f6a3-1f3fd.png",
  				sheet_x: 35,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6A3-1F3FE",
  				non_qualified: null,
  				image: "1f6a3-1f3fe.png",
  				sheet_x: 35,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6A3-1F3FF",
  				non_qualified: null,
  				image: "1f6a3-1f3ff.png",
  				sheet_x: 35,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoleted_by: "1F6A3-200D-2642-FE0F",
  		a: "Rowboat",
  		b: "1F6A3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			35,
  			3
  		]
  	},
  	"man-rowing-boat": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6A3-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F6A3-1F3FB-200D-2642",
  				image: "1f6a3-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 34,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6A3-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F6A3-1F3FC-200D-2642",
  				image: "1f6a3-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 34,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6A3-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F6A3-1F3FD-200D-2642",
  				image: "1f6a3-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6A3-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F6A3-1F3FE-200D-2642",
  				image: "1f6a3-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6A3-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F6A3-1F3FF-200D-2642",
  				image: "1f6a3-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F6A3",
  		a: "Man Rowing Boat",
  		b: "1F6A3-200D-2642-FE0F",
  		c: "1F6A3-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			34,
  			49
  		]
  	},
  	"woman-rowing-boat": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6A3-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F6A3-1F3FB-200D-2640",
  				image: "1f6a3-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 34,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6A3-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F6A3-1F3FC-200D-2640",
  				image: "1f6a3-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 34,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6A3-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F6A3-1F3FD-200D-2640",
  				image: "1f6a3-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 34,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6A3-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F6A3-1F3FE-200D-2640",
  				image: "1f6a3-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 34,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6A3-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F6A3-1F3FF-200D-2640",
  				image: "1f6a3-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 34,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Rowing Boat",
  		b: "1F6A3-200D-2640-FE0F",
  		c: "1F6A3-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			34,
  			43
  		]
  	},
  	swimmer: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3CA-1F3FB",
  				non_qualified: null,
  				image: "1f3ca-1f3fb.png",
  				sheet_x: 10,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F3CA-1F3FC",
  				non_qualified: null,
  				image: "1f3ca-1f3fc.png",
  				sheet_x: 10,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F3CA-1F3FD",
  				non_qualified: null,
  				image: "1f3ca-1f3fd.png",
  				sheet_x: 10,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F3CA-1F3FE",
  				non_qualified: null,
  				image: "1f3ca-1f3fe.png",
  				sheet_x: 10,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F3CA-1F3FF",
  				non_qualified: null,
  				image: "1f3ca-1f3ff.png",
  				sheet_x: 10,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F3CA-200D-2642-FE0F",
  		a: "Swimmer",
  		b: "1F3CA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			10,
  			40
  		]
  	},
  	"man-swimming": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3CA-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F3CA-1F3FB-200D-2642",
  				image: "1f3ca-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3CA-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F3CA-1F3FC-200D-2642",
  				image: "1f3ca-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3CA-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F3CA-1F3FD-200D-2642",
  				image: "1f3ca-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3CA-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F3CA-1F3FE-200D-2642",
  				image: "1f3ca-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3CA-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F3CA-1F3FF-200D-2642",
  				image: "1f3ca-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F3CA",
  		a: "Man Swimming",
  		b: "1F3CA-200D-2642-FE0F",
  		c: "1F3CA-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			10,
  			34
  		]
  	},
  	"woman-swimming": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3CA-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F3CA-1F3FB-200D-2640",
  				image: "1f3ca-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3CA-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F3CA-1F3FC-200D-2640",
  				image: "1f3ca-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3CA-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F3CA-1F3FD-200D-2640",
  				image: "1f3ca-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3CA-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F3CA-1F3FE-200D-2640",
  				image: "1f3ca-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3CA-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F3CA-1F3FF-200D-2640",
  				image: "1f3ca-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Swimming",
  		b: "1F3CA-200D-2640-FE0F",
  		c: "1F3CA-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			10,
  			28
  		]
  	},
  	person_with_ball: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "26F9-1F3FB",
  				non_qualified: null,
  				image: "26f9-1f3fb.png",
  				sheet_x: 49,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "26F9-1F3FC",
  				non_qualified: null,
  				image: "26f9-1f3fc.png",
  				sheet_x: 49,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "26F9-1F3FD",
  				non_qualified: null,
  				image: "26f9-1f3fd.png",
  				sheet_x: 49,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "26F9-1F3FE",
  				non_qualified: null,
  				image: "26f9-1f3fe.png",
  				sheet_x: 49,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "26F9-1F3FF",
  				non_qualified: null,
  				image: "26f9-1f3ff.png",
  				sheet_x: 49,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoleted_by: "26F9-FE0F-200D-2642-FE0F",
  		a: "Person with Ball",
  		b: "26F9-FE0F",
  		c: "26F9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			49,
  			6
  		],
  		o: 5
  	},
  	"man-bouncing-ball": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "26F9-1F3FB-200D-2642-FE0F",
  				non_qualified: "26F9-1F3FB-200D-2642",
  				image: "26f9-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 49,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "26F9-1F3FC-200D-2642-FE0F",
  				non_qualified: "26F9-1F3FC-200D-2642",
  				image: "26f9-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 49,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "26F9-1F3FD-200D-2642-FE0F",
  				non_qualified: "26F9-1F3FD-200D-2642",
  				image: "26f9-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 49,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "26F9-1F3FE-200D-2642-FE0F",
  				non_qualified: "26F9-1F3FE-200D-2642",
  				image: "26f9-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 49,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "26F9-1F3FF-200D-2642-FE0F",
  				non_qualified: "26F9-1F3FF-200D-2642",
  				image: "26f9-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 49,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "26F9-FE0F",
  		a: "Man Bouncing Ball",
  		b: "26F9-FE0F-200D-2642-FE0F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			49,
  			0
  		],
  		o: 5
  	},
  	"woman-bouncing-ball": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "26F9-1F3FB-200D-2640-FE0F",
  				non_qualified: "26F9-1F3FB-200D-2640",
  				image: "26f9-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 48,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "26F9-1F3FC-200D-2640-FE0F",
  				non_qualified: "26F9-1F3FC-200D-2640",
  				image: "26f9-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 48,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "26F9-1F3FD-200D-2640-FE0F",
  				non_qualified: "26F9-1F3FD-200D-2640",
  				image: "26f9-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 48,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "26F9-1F3FE-200D-2640-FE0F",
  				non_qualified: "26F9-1F3FE-200D-2640",
  				image: "26f9-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 48,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "26F9-1F3FF-200D-2640-FE0F",
  				non_qualified: "26F9-1F3FF-200D-2640",
  				image: "26f9-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 48,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Bouncing Ball",
  		b: "26F9-FE0F-200D-2640-FE0F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			48,
  			46
  		],
  		o: 5
  	},
  	weight_lifter: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3CB-1F3FB",
  				non_qualified: null,
  				image: "1f3cb-1f3fb.png",
  				sheet_x: 11,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3CB-1F3FC",
  				non_qualified: null,
  				image: "1f3cb-1f3fc.png",
  				sheet_x: 11,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3CB-1F3FD",
  				non_qualified: null,
  				image: "1f3cb-1f3fd.png",
  				sheet_x: 11,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3CB-1F3FE",
  				non_qualified: null,
  				image: "1f3cb-1f3fe.png",
  				sheet_x: 11,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3CB-1F3FF",
  				non_qualified: null,
  				image: "1f3cb-1f3ff.png",
  				sheet_x: 11,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoleted_by: "1F3CB-FE0F-200D-2642-FE0F",
  		a: "Weight Lifter",
  		b: "1F3CB-FE0F",
  		c: "1F3CB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			11,
  			6
  		],
  		o: 7
  	},
  	"man-lifting-weights": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3CB-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F3CB-1F3FB-200D-2642",
  				image: "1f3cb-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3CB-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F3CB-1F3FC-200D-2642",
  				image: "1f3cb-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3CB-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F3CB-1F3FD-200D-2642",
  				image: "1f3cb-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3CB-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F3CB-1F3FE-200D-2642",
  				image: "1f3cb-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3CB-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F3CB-1F3FF-200D-2642",
  				image: "1f3cb-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 11,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F3CB-FE0F",
  		a: "Man Lifting Weights",
  		b: "1F3CB-FE0F-200D-2642-FE0F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			11,
  			0
  		],
  		o: 7
  	},
  	"woman-lifting-weights": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F3CB-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F3CB-1F3FB-200D-2640",
  				image: "1f3cb-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F3CB-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F3CB-1F3FC-200D-2640",
  				image: "1f3cb-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F3CB-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F3CB-1F3FD-200D-2640",
  				image: "1f3cb-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F3CB-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F3CB-1F3FE-200D-2640",
  				image: "1f3cb-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F3CB-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F3CB-1F3FF-200D-2640",
  				image: "1f3cb-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 10,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Lifting Weights",
  		b: "1F3CB-FE0F-200D-2640-FE0F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			10,
  			46
  		],
  		o: 7
  	},
  	bicyclist: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6B4-1F3FB",
  				non_qualified: null,
  				image: "1f6b4-1f3fb.png",
  				sheet_x: 35,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F6B4-1F3FC",
  				non_qualified: null,
  				image: "1f6b4-1f3fc.png",
  				sheet_x: 35,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F6B4-1F3FD",
  				non_qualified: null,
  				image: "1f6b4-1f3fd.png",
  				sheet_x: 35,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F6B4-1F3FE",
  				non_qualified: null,
  				image: "1f6b4-1f3fe.png",
  				sheet_x: 35,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F6B4-1F3FF",
  				non_qualified: null,
  				image: "1f6b4-1f3ff.png",
  				sheet_x: 35,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F6B4-200D-2642-FE0F",
  		a: "Bicyclist",
  		b: "1F6B4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			35,
  			37
  		]
  	},
  	"man-biking": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6B4-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F6B4-1F3FB-200D-2642",
  				image: "1f6b4-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6B4-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F6B4-1F3FC-200D-2642",
  				image: "1f6b4-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6B4-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F6B4-1F3FD-200D-2642",
  				image: "1f6b4-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6B4-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F6B4-1F3FE-200D-2642",
  				image: "1f6b4-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6B4-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F6B4-1F3FF-200D-2642",
  				image: "1f6b4-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F6B4",
  		a: "Man Biking",
  		b: "1F6B4-200D-2642-FE0F",
  		c: "1F6B4-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			35,
  			31
  		]
  	},
  	"woman-biking": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6B4-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F6B4-1F3FB-200D-2640",
  				image: "1f6b4-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6B4-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F6B4-1F3FC-200D-2640",
  				image: "1f6b4-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6B4-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F6B4-1F3FD-200D-2640",
  				image: "1f6b4-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6B4-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F6B4-1F3FE-200D-2640",
  				image: "1f6b4-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6B4-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F6B4-1F3FF-200D-2640",
  				image: "1f6b4-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Biking",
  		b: "1F6B4-200D-2640-FE0F",
  		c: "1F6B4-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			35,
  			25
  		]
  	},
  	mountain_bicyclist: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6B5-1F3FB",
  				non_qualified: null,
  				image: "1f6b5-1f3fb.png",
  				sheet_x: 36,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F6B5-1F3FC",
  				non_qualified: null,
  				image: "1f6b5-1f3fc.png",
  				sheet_x: 36,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F6B5-1F3FD",
  				non_qualified: null,
  				image: "1f6b5-1f3fd.png",
  				sheet_x: 36,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F6B5-1F3FE",
  				non_qualified: null,
  				image: "1f6b5-1f3fe.png",
  				sheet_x: 36,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F6B5-1F3FF",
  				non_qualified: null,
  				image: "1f6b5-1f3ff.png",
  				sheet_x: 36,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: true
  			}
  		},
  		obsoleted_by: "1F6B5-200D-2642-FE0F",
  		a: "Mountain Bicyclist",
  		b: "1F6B5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			36,
  			3
  		]
  	},
  	"man-mountain-biking": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6B5-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F6B5-1F3FB-200D-2642",
  				image: "1f6b5-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6B5-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F6B5-1F3FC-200D-2642",
  				image: "1f6b5-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6B5-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F6B5-1F3FD-200D-2642",
  				image: "1f6b5-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6B5-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F6B5-1F3FE-200D-2642",
  				image: "1f6b5-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6B5-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F6B5-1F3FF-200D-2642",
  				image: "1f6b5-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 36,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		obsoletes: "1F6B5",
  		a: "Man Mountain Biking",
  		b: "1F6B5-200D-2642-FE0F",
  		c: "1F6B5-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			35,
  			49
  		]
  	},
  	"woman-mountain-biking": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F6B5-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F6B5-1F3FB-200D-2640",
  				image: "1f6b5-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F6B5-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F6B5-1F3FC-200D-2640",
  				image: "1f6b5-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F6B5-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F6B5-1F3FD-200D-2640",
  				image: "1f6b5-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F6B5-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F6B5-1F3FE-200D-2640",
  				image: "1f6b5-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F6B5-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F6B5-1F3FF-200D-2640",
  				image: "1f6b5-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 35,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Mountain Biking",
  		b: "1F6B5-200D-2640-FE0F",
  		c: "1F6B5-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			35,
  			43
  		]
  	},
  	racing_car: {
  		a: "Racing Car",
  		b: "1F3CE-FE0F",
  		c: "1F3CE",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"sports",
  			"race",
  			"fast",
  			"formula",
  			"f1"
  		],
  		k: [
  			11,
  			31
  		],
  		o: 7
  	},
  	racing_motorcycle: {
  		a: "Racing Motorcycle",
  		b: "1F3CD-FE0F",
  		c: "1F3CD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			11,
  			30
  		],
  		o: 7
  	},
  	person_doing_cartwheel: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F938-1F3FB",
  				non_qualified: null,
  				image: "1f938-1f3fb.png",
  				sheet_x: 40,
  				sheet_y: 25,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F938-1F3FC",
  				non_qualified: null,
  				image: "1f938-1f3fc.png",
  				sheet_x: 40,
  				sheet_y: 26,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F938-1F3FD",
  				non_qualified: null,
  				image: "1f938-1f3fd.png",
  				sheet_x: 40,
  				sheet_y: 27,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F938-1F3FE",
  				non_qualified: null,
  				image: "1f938-1f3fe.png",
  				sheet_x: 40,
  				sheet_y: 28,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F938-1F3FF",
  				non_qualified: null,
  				image: "1f938-1f3ff.png",
  				sheet_x: 40,
  				sheet_y: 29,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Person Doing Cartwheel",
  		b: "1F938",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			40,
  			24
  		],
  		o: 9
  	},
  	"man-cartwheeling": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F938-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F938-1F3FB-200D-2642",
  				image: "1f938-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 19,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F938-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F938-1F3FC-200D-2642",
  				image: "1f938-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 20,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F938-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F938-1F3FD-200D-2642",
  				image: "1f938-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 21,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F938-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F938-1F3FE-200D-2642",
  				image: "1f938-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 22,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F938-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F938-1F3FF-200D-2642",
  				image: "1f938-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 23,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Cartwheeling",
  		b: "1F938-200D-2642-FE0F",
  		c: "1F938-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			40,
  			18
  		],
  		o: 9
  	},
  	"woman-cartwheeling": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F938-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F938-1F3FB-200D-2640",
  				image: "1f938-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 13,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F938-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F938-1F3FC-200D-2640",
  				image: "1f938-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 14,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F938-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F938-1F3FD-200D-2640",
  				image: "1f938-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 15,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F938-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F938-1F3FE-200D-2640",
  				image: "1f938-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 16,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F938-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F938-1F3FF-200D-2640",
  				image: "1f938-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 17,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Cartwheeling",
  		b: "1F938-200D-2640-FE0F",
  		c: "1F938-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			40,
  			12
  		],
  		o: 9
  	},
  	wrestlers: {
  		a: "Wrestlers",
  		b: "1F93C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			40,
  			51
  		],
  		o: 9
  	},
  	"man-wrestling": {
  		a: "Man Wrestling",
  		b: "1F93C-200D-2642-FE0F",
  		c: "1F93C-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			40,
  			50
  		],
  		o: 9
  	},
  	"woman-wrestling": {
  		a: "Woman Wrestling",
  		b: "1F93C-200D-2640-FE0F",
  		c: "1F93C-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			40,
  			49
  		],
  		o: 9
  	},
  	water_polo: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F93D-1F3FB",
  				non_qualified: null,
  				image: "1f93d-1f3fb.png",
  				sheet_x: 41,
  				sheet_y: 13,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F93D-1F3FC",
  				non_qualified: null,
  				image: "1f93d-1f3fc.png",
  				sheet_x: 41,
  				sheet_y: 14,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F93D-1F3FD",
  				non_qualified: null,
  				image: "1f93d-1f3fd.png",
  				sheet_x: 41,
  				sheet_y: 15,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F93D-1F3FE",
  				non_qualified: null,
  				image: "1f93d-1f3fe.png",
  				sheet_x: 41,
  				sheet_y: 16,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F93D-1F3FF",
  				non_qualified: null,
  				image: "1f93d-1f3ff.png",
  				sheet_x: 41,
  				sheet_y: 17,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Water Polo",
  		b: "1F93D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			41,
  			12
  		],
  		o: 9
  	},
  	"man-playing-water-polo": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F93D-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F93D-1F3FB-200D-2642",
  				image: "1f93d-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 7,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F93D-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F93D-1F3FC-200D-2642",
  				image: "1f93d-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 8,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F93D-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F93D-1F3FD-200D-2642",
  				image: "1f93d-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 9,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F93D-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F93D-1F3FE-200D-2642",
  				image: "1f93d-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 10,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F93D-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F93D-1F3FF-200D-2642",
  				image: "1f93d-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 11,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Playing Water Polo",
  		b: "1F93D-200D-2642-FE0F",
  		c: "1F93D-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			41,
  			6
  		],
  		o: 9
  	},
  	"woman-playing-water-polo": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F93D-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F93D-1F3FB-200D-2640",
  				image: "1f93d-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 1,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F93D-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F93D-1F3FC-200D-2640",
  				image: "1f93d-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 2,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F93D-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F93D-1F3FD-200D-2640",
  				image: "1f93d-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 3,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F93D-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F93D-1F3FE-200D-2640",
  				image: "1f93d-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 4,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F93D-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F93D-1F3FF-200D-2640",
  				image: "1f93d-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 5,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Playing Water Polo",
  		b: "1F93D-200D-2640-FE0F",
  		c: "1F93D-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			41,
  			0
  		],
  		o: 9
  	},
  	handball: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F93E-1F3FB",
  				non_qualified: null,
  				image: "1f93e-1f3fb.png",
  				sheet_x: 41,
  				sheet_y: 31,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F93E-1F3FC",
  				non_qualified: null,
  				image: "1f93e-1f3fc.png",
  				sheet_x: 41,
  				sheet_y: 32,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F93E-1F3FD",
  				non_qualified: null,
  				image: "1f93e-1f3fd.png",
  				sheet_x: 41,
  				sheet_y: 33,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F93E-1F3FE",
  				non_qualified: null,
  				image: "1f93e-1f3fe.png",
  				sheet_x: 41,
  				sheet_y: 34,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F93E-1F3FF",
  				non_qualified: null,
  				image: "1f93e-1f3ff.png",
  				sheet_x: 41,
  				sheet_y: 35,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Handball",
  		b: "1F93E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			41,
  			30
  		],
  		o: 9
  	},
  	"man-playing-handball": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F93E-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F93E-1F3FB-200D-2642",
  				image: "1f93e-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 25,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F93E-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F93E-1F3FC-200D-2642",
  				image: "1f93e-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 26,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F93E-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F93E-1F3FD-200D-2642",
  				image: "1f93e-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 27,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F93E-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F93E-1F3FE-200D-2642",
  				image: "1f93e-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 28,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F93E-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F93E-1F3FF-200D-2642",
  				image: "1f93e-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 29,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Playing Handball",
  		b: "1F93E-200D-2642-FE0F",
  		c: "1F93E-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			41,
  			24
  		],
  		o: 9
  	},
  	"woman-playing-handball": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F93E-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F93E-1F3FB-200D-2640",
  				image: "1f93e-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 19,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F93E-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F93E-1F3FC-200D-2640",
  				image: "1f93e-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 20,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F93E-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F93E-1F3FD-200D-2640",
  				image: "1f93e-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 21,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F93E-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F93E-1F3FE-200D-2640",
  				image: "1f93e-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 22,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F93E-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F93E-1F3FF-200D-2640",
  				image: "1f93e-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 41,
  				sheet_y: 23,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Playing Handball",
  		b: "1F93E-200D-2640-FE0F",
  		c: "1F93E-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			41,
  			18
  		],
  		o: 9
  	},
  	juggling: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F939-1F3FB",
  				non_qualified: null,
  				image: "1f939-1f3fb.png",
  				sheet_x: 40,
  				sheet_y: 43,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F939-1F3FC",
  				non_qualified: null,
  				image: "1f939-1f3fc.png",
  				sheet_x: 40,
  				sheet_y: 44,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F939-1F3FD",
  				non_qualified: null,
  				image: "1f939-1f3fd.png",
  				sheet_x: 40,
  				sheet_y: 45,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F939-1F3FE",
  				non_qualified: null,
  				image: "1f939-1f3fe.png",
  				sheet_x: 40,
  				sheet_y: 46,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F939-1F3FF",
  				non_qualified: null,
  				image: "1f939-1f3ff.png",
  				sheet_x: 40,
  				sheet_y: 47,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Juggling",
  		b: "1F939",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			40,
  			42
  		],
  		o: 9
  	},
  	"man-juggling": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F939-1F3FB-200D-2642-FE0F",
  				non_qualified: "1F939-1F3FB-200D-2642",
  				image: "1f939-1f3fb-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 37,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F939-1F3FC-200D-2642-FE0F",
  				non_qualified: "1F939-1F3FC-200D-2642",
  				image: "1f939-1f3fc-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 38,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F939-1F3FD-200D-2642-FE0F",
  				non_qualified: "1F939-1F3FD-200D-2642",
  				image: "1f939-1f3fd-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 39,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F939-1F3FE-200D-2642-FE0F",
  				non_qualified: "1F939-1F3FE-200D-2642",
  				image: "1f939-1f3fe-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 40,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F939-1F3FF-200D-2642-FE0F",
  				non_qualified: "1F939-1F3FF-200D-2642",
  				image: "1f939-1f3ff-200d-2642-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 41,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Man Juggling",
  		b: "1F939-200D-2642-FE0F",
  		c: "1F939-200D-2642",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			40,
  			36
  		],
  		o: 9
  	},
  	"woman-juggling": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F939-1F3FB-200D-2640-FE0F",
  				non_qualified: "1F939-1F3FB-200D-2640",
  				image: "1f939-1f3fb-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 31,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F939-1F3FC-200D-2640-FE0F",
  				non_qualified: "1F939-1F3FC-200D-2640",
  				image: "1f939-1f3fc-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 32,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F939-1F3FD-200D-2640-FE0F",
  				non_qualified: "1F939-1F3FD-200D-2640",
  				image: "1f939-1f3fd-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 33,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F939-1F3FE-200D-2640-FE0F",
  				non_qualified: "1F939-1F3FE-200D-2640",
  				image: "1f939-1f3fe-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 34,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F939-1F3FF-200D-2640-FE0F",
  				non_qualified: "1F939-1F3FF-200D-2640",
  				image: "1f939-1f3ff-200d-2640-fe0f.png",
  				sheet_x: 40,
  				sheet_y: 35,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: false,
  				has_img_messenger: false
  			}
  		},
  		a: "Woman Juggling",
  		b: "1F939-200D-2640-FE0F",
  		c: "1F939-200D-2640",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			40,
  			30
  		],
  		o: 9
  	},
  	couple: {
  		a: "Man and Woman Holding Hands",
  		b: "1F46B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"pair",
  			"people",
  			"human",
  			"love",
  			"date",
  			"dating",
  			"like",
  			"affection",
  			"valentines",
  			"marriage"
  		],
  		k: [
  			20,
  			30
  		],
  		n: [
  			"man_and_woman_holding_hands"
  		]
  	},
  	two_men_holding_hands: {
  		a: "Two Men Holding Hands",
  		b: "1F46C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"pair",
  			"couple",
  			"love",
  			"like",
  			"bromance",
  			"friendship",
  			"people",
  			"human"
  		],
  		k: [
  			20,
  			31
  		]
  	},
  	two_women_holding_hands: {
  		a: "Two Women Holding Hands",
  		b: "1F46D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"pair",
  			"friendship",
  			"couple",
  			"love",
  			"like",
  			"female",
  			"people",
  			"human"
  		],
  		k: [
  			20,
  			32
  		]
  	},
  	couplekiss: {
  		obsoleted_by: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",
  		a: "Kiss",
  		b: "1F48F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			24,
  			41
  		]
  	},
  	"woman-kiss-man": {
  		obsoletes: "1F48F",
  		a: "Woman Kiss Man",
  		b: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",
  		c: "1F469-200D-2764-200D-1F48B-200D-1F468",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			20,
  			21
  		]
  	},
  	"man-kiss-man": {
  		a: "Man Kiss Man",
  		b: "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",
  		c: "1F468-200D-2764-200D-1F48B-200D-1F468",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			18,
  			10
  		]
  	},
  	"woman-kiss-woman": {
  		a: "Woman Kiss Woman",
  		b: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",
  		c: "1F469-200D-2764-200D-1F48B-200D-1F469",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			20,
  			22
  		]
  	},
  	couple_with_heart: {
  		obsoleted_by: "1F469-200D-2764-FE0F-200D-1F468",
  		a: "Couple with Heart",
  		b: "1F491",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			24,
  			43
  		]
  	},
  	"woman-heart-man": {
  		obsoletes: "1F491",
  		a: "Woman Heart Man",
  		b: "1F469-200D-2764-FE0F-200D-1F468",
  		c: "1F469-200D-2764-200D-1F468",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			20,
  			19
  		]
  	},
  	"man-heart-man": {
  		a: "Man Heart Man",
  		b: "1F468-200D-2764-FE0F-200D-1F468",
  		c: "1F468-200D-2764-200D-1F468",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			18,
  			9
  		]
  	},
  	"woman-heart-woman": {
  		a: "Woman Heart Woman",
  		b: "1F469-200D-2764-FE0F-200D-1F469",
  		c: "1F469-200D-2764-200D-1F469",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			20,
  			20
  		]
  	},
  	family: {
  		obsoleted_by: "1F468-200D-1F469-200D-1F466",
  		a: "Family",
  		b: "1F46A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: false,
  		i: true,
  		k: [
  			20,
  			29
  		],
  		n: [
  			"man-woman-boy"
  		]
  	},
  	"man-woman-boy": {
  		obsoletes: "1F46A",
  		a: "Man Woman Boy",
  		b: "1F468-200D-1F469-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			17,
  			2
  		],
  		n: [
  			"family"
  		]
  	},
  	"man-woman-girl": {
  		a: "Man Woman Girl",
  		b: "1F468-200D-1F469-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			17,
  			4
  		]
  	},
  	"man-woman-girl-boy": {
  		a: "Man Woman Girl Boy",
  		b: "1F468-200D-1F469-200D-1F467-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			17,
  			5
  		]
  	},
  	"man-woman-boy-boy": {
  		a: "Man Woman Boy Boy",
  		b: "1F468-200D-1F469-200D-1F466-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			17,
  			3
  		]
  	},
  	"man-woman-girl-girl": {
  		a: "Man Woman Girl Girl",
  		b: "1F468-200D-1F469-200D-1F467-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			17,
  			6
  		]
  	},
  	"man-man-boy": {
  		a: "Man Man Boy",
  		b: "1F468-200D-1F468-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			16,
  			49
  		]
  	},
  	"man-man-girl": {
  		a: "Man Man Girl",
  		b: "1F468-200D-1F468-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			16,
  			51
  		]
  	},
  	"man-man-girl-boy": {
  		a: "Man Man Girl Boy",
  		b: "1F468-200D-1F468-200D-1F467-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			17,
  			0
  		]
  	},
  	"man-man-boy-boy": {
  		a: "Man Man Boy Boy",
  		b: "1F468-200D-1F468-200D-1F466-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			16,
  			50
  		]
  	},
  	"man-man-girl-girl": {
  		a: "Man Man Girl Girl",
  		b: "1F468-200D-1F468-200D-1F467-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			17,
  			1
  		]
  	},
  	"woman-woman-boy": {
  		a: "Woman Woman Boy",
  		b: "1F469-200D-1F469-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			19,
  			12
  		]
  	},
  	"woman-woman-girl": {
  		a: "Woman Woman Girl",
  		b: "1F469-200D-1F469-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			19,
  			14
  		]
  	},
  	"woman-woman-girl-boy": {
  		a: "Woman Woman Girl Boy",
  		b: "1F469-200D-1F469-200D-1F467-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			19,
  			15
  		]
  	},
  	"woman-woman-boy-boy": {
  		a: "Woman Woman Boy Boy",
  		b: "1F469-200D-1F469-200D-1F466-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			19,
  			13
  		]
  	},
  	"woman-woman-girl-girl": {
  		a: "Woman Woman Girl Girl",
  		b: "1F469-200D-1F469-200D-1F467-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			19,
  			16
  		]
  	},
  	"man-boy": {
  		a: "Man Boy",
  		b: "1F468-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			45
  		]
  	},
  	"man-boy-boy": {
  		a: "Man Boy Boy",
  		b: "1F468-200D-1F466-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			44
  		]
  	},
  	"man-girl": {
  		a: "Man Girl",
  		b: "1F468-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			48
  		]
  	},
  	"man-girl-boy": {
  		a: "Man Girl Boy",
  		b: "1F468-200D-1F467-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			46
  		]
  	},
  	"man-girl-girl": {
  		a: "Man Girl Girl",
  		b: "1F468-200D-1F467-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			16,
  			47
  		]
  	},
  	"woman-boy": {
  		a: "Woman Boy",
  		b: "1F469-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			8
  		]
  	},
  	"woman-boy-boy": {
  		a: "Woman Boy Boy",
  		b: "1F469-200D-1F466-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			7
  		]
  	},
  	"woman-girl": {
  		a: "Woman Girl",
  		b: "1F469-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			11
  		]
  	},
  	"woman-girl-boy": {
  		a: "Woman Girl Boy",
  		b: "1F469-200D-1F467-200D-1F466",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			9
  		]
  	},
  	"woman-girl-girl": {
  		a: "Woman Girl Girl",
  		b: "1F469-200D-1F467-200D-1F467",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			19,
  			10
  		]
  	},
  	selfie: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F933-1F3FB",
  				non_qualified: null,
  				image: "1f933-1f3fb.png",
  				sheet_x: 39,
  				sheet_y: 23,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F933-1F3FC",
  				non_qualified: null,
  				image: "1f933-1f3fc.png",
  				sheet_x: 39,
  				sheet_y: 24,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F933-1F3FD",
  				non_qualified: null,
  				image: "1f933-1f3fd.png",
  				sheet_x: 39,
  				sheet_y: 25,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F933-1F3FE",
  				non_qualified: null,
  				image: "1f933-1f3fe.png",
  				sheet_x: 39,
  				sheet_y: 26,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F933-1F3FF",
  				non_qualified: null,
  				image: "1f933-1f3ff.png",
  				sheet_x: 39,
  				sheet_y: 27,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Selfie",
  		b: "1F933",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"camera",
  			"phone"
  		],
  		k: [
  			39,
  			22
  		],
  		o: 9
  	},
  	muscle: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F4AA-1F3FB",
  				non_qualified: null,
  				image: "1f4aa-1f3fb.png",
  				sheet_x: 25,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F4AA-1F3FC",
  				non_qualified: null,
  				image: "1f4aa-1f3fc.png",
  				sheet_x: 25,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F4AA-1F3FD",
  				non_qualified: null,
  				image: "1f4aa-1f3fd.png",
  				sheet_x: 25,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F4AA-1F3FE",
  				non_qualified: null,
  				image: "1f4aa-1f3fe.png",
  				sheet_x: 25,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F4AA-1F3FF",
  				non_qualified: null,
  				image: "1f4aa-1f3ff.png",
  				sheet_x: 25,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Flexed Biceps",
  		b: "1F4AA",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"arm",
  			"flex",
  			"hand",
  			"summer",
  			"strong",
  			"biceps"
  		],
  		k: [
  			25,
  			16
  		]
  	},
  	point_left: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F448-1F3FB",
  				non_qualified: null,
  				image: "1f448-1f3fb.png",
  				sheet_x: 14,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F448-1F3FC",
  				non_qualified: null,
  				image: "1f448-1f3fc.png",
  				sheet_x: 14,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F448-1F3FD",
  				non_qualified: null,
  				image: "1f448-1f3fd.png",
  				sheet_x: 14,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F448-1F3FE",
  				non_qualified: null,
  				image: "1f448-1f3fe.png",
  				sheet_x: 14,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F448-1F3FF",
  				non_qualified: null,
  				image: "1f448-1f3ff.png",
  				sheet_x: 14,
  				sheet_y: 24,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "White Left Pointing Backhand Index",
  		b: "1F448",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"direction",
  			"fingers",
  			"hand",
  			"left"
  		],
  		k: [
  			14,
  			19
  		]
  	},
  	point_right: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F449-1F3FB",
  				non_qualified: null,
  				image: "1f449-1f3fb.png",
  				sheet_x: 14,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F449-1F3FC",
  				non_qualified: null,
  				image: "1f449-1f3fc.png",
  				sheet_x: 14,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F449-1F3FD",
  				non_qualified: null,
  				image: "1f449-1f3fd.png",
  				sheet_x: 14,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F449-1F3FE",
  				non_qualified: null,
  				image: "1f449-1f3fe.png",
  				sheet_x: 14,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F449-1F3FF",
  				non_qualified: null,
  				image: "1f449-1f3ff.png",
  				sheet_x: 14,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "White Right Pointing Backhand Index",
  		b: "1F449",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fingers",
  			"hand",
  			"direction",
  			"right"
  		],
  		k: [
  			14,
  			25
  		]
  	},
  	point_up: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "261D-1F3FB",
  				non_qualified: null,
  				image: "261d-1f3fb.png",
  				sheet_x: 47,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "261D-1F3FC",
  				non_qualified: null,
  				image: "261d-1f3fc.png",
  				sheet_x: 47,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "261D-1F3FD",
  				non_qualified: null,
  				image: "261d-1f3fd.png",
  				sheet_x: 47,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "261D-1F3FE",
  				non_qualified: null,
  				image: "261d-1f3fe.png",
  				sheet_x: 47,
  				sheet_y: 30,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "261D-1F3FF",
  				non_qualified: null,
  				image: "261d-1f3ff.png",
  				sheet_x: 47,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "White Up Pointing Index",
  		b: "261D-FE0F",
  		c: "261D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"hand",
  			"fingers",
  			"direction",
  			"up"
  		],
  		k: [
  			47,
  			26
  		],
  		o: 1
  	},
  	point_up_2: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F446-1F3FB",
  				non_qualified: null,
  				image: "1f446-1f3fb.png",
  				sheet_x: 14,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F446-1F3FC",
  				non_qualified: null,
  				image: "1f446-1f3fc.png",
  				sheet_x: 14,
  				sheet_y: 9,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F446-1F3FD",
  				non_qualified: null,
  				image: "1f446-1f3fd.png",
  				sheet_x: 14,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F446-1F3FE",
  				non_qualified: null,
  				image: "1f446-1f3fe.png",
  				sheet_x: 14,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F446-1F3FF",
  				non_qualified: null,
  				image: "1f446-1f3ff.png",
  				sheet_x: 14,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "White Up Pointing Backhand Index",
  		b: "1F446",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fingers",
  			"hand",
  			"direction",
  			"up"
  		],
  		k: [
  			14,
  			7
  		]
  	},
  	middle_finger: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F595-1F3FB",
  				non_qualified: null,
  				image: "1f595-1f3fb.png",
  				sheet_x: 29,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F595-1F3FC",
  				non_qualified: null,
  				image: "1f595-1f3fc.png",
  				sheet_x: 29,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F595-1F3FD",
  				non_qualified: null,
  				image: "1f595-1f3fd.png",
  				sheet_x: 29,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F595-1F3FE",
  				non_qualified: null,
  				image: "1f595-1f3fe.png",
  				sheet_x: 29,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F595-1F3FF",
  				non_qualified: null,
  				image: "1f595-1f3ff.png",
  				sheet_x: 29,
  				sheet_y: 43,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Reversed Hand with Middle Finger Extended",
  		b: "1F595",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			29,
  			38
  		],
  		n: [
  			"reversed_hand_with_middle_finger_extended"
  		],
  		o: 7
  	},
  	point_down: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F447-1F3FB",
  				non_qualified: null,
  				image: "1f447-1f3fb.png",
  				sheet_x: 14,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F447-1F3FC",
  				non_qualified: null,
  				image: "1f447-1f3fc.png",
  				sheet_x: 14,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F447-1F3FD",
  				non_qualified: null,
  				image: "1f447-1f3fd.png",
  				sheet_x: 14,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F447-1F3FE",
  				non_qualified: null,
  				image: "1f447-1f3fe.png",
  				sheet_x: 14,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F447-1F3FF",
  				non_qualified: null,
  				image: "1f447-1f3ff.png",
  				sheet_x: 14,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "White Down Pointing Backhand Index",
  		b: "1F447",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fingers",
  			"hand",
  			"direction",
  			"down"
  		],
  		k: [
  			14,
  			13
  		]
  	},
  	v: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "270C-1F3FB",
  				non_qualified: null,
  				image: "270c-1f3fb.png",
  				sheet_x: 49,
  				sheet_y: 31,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "270C-1F3FC",
  				non_qualified: null,
  				image: "270c-1f3fc.png",
  				sheet_x: 49,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "270C-1F3FD",
  				non_qualified: null,
  				image: "270c-1f3fd.png",
  				sheet_x: 49,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "270C-1F3FE",
  				non_qualified: null,
  				image: "270c-1f3fe.png",
  				sheet_x: 49,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "270C-1F3FF",
  				non_qualified: null,
  				image: "270c-1f3ff.png",
  				sheet_x: 49,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Victory Hand",
  		b: "270C-FE0F",
  		c: "270C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fingers",
  			"ohyeah",
  			"hand",
  			"peace",
  			"victory",
  			"two"
  		],
  		k: [
  			49,
  			30
  		],
  		o: 1
  	},
  	crossed_fingers: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F91E-1F3FB",
  				non_qualified: null,
  				image: "1f91e-1f3fb.png",
  				sheet_x: 38,
  				sheet_y: 12,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F91E-1F3FC",
  				non_qualified: null,
  				image: "1f91e-1f3fc.png",
  				sheet_x: 38,
  				sheet_y: 13,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F91E-1F3FD",
  				non_qualified: null,
  				image: "1f91e-1f3fd.png",
  				sheet_x: 38,
  				sheet_y: 14,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F91E-1F3FE",
  				non_qualified: null,
  				image: "1f91e-1f3fe.png",
  				sheet_x: 38,
  				sheet_y: 15,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F91E-1F3FF",
  				non_qualified: null,
  				image: "1f91e-1f3ff.png",
  				sheet_x: 38,
  				sheet_y: 16,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Hand with Index and Middle Fingers Crossed",
  		b: "1F91E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"good",
  			"lucky"
  		],
  		k: [
  			38,
  			11
  		],
  		n: [
  			"hand_with_index_and_middle_fingers_crossed"
  		],
  		o: 9
  	},
  	"spock-hand": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F596-1F3FB",
  				non_qualified: null,
  				image: "1f596-1f3fb.png",
  				sheet_x: 29,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F596-1F3FC",
  				non_qualified: null,
  				image: "1f596-1f3fc.png",
  				sheet_x: 29,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F596-1F3FD",
  				non_qualified: null,
  				image: "1f596-1f3fd.png",
  				sheet_x: 29,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F596-1F3FE",
  				non_qualified: null,
  				image: "1f596-1f3fe.png",
  				sheet_x: 29,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F596-1F3FF",
  				non_qualified: null,
  				image: "1f596-1f3ff.png",
  				sheet_x: 29,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Raised Hand with Part Between Middle and Ring Fingers",
  		b: "1F596",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			29,
  			44
  		],
  		o: 7
  	},
  	the_horns: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F918-1F3FB",
  				non_qualified: null,
  				image: "1f918-1f3fb.png",
  				sheet_x: 37,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F918-1F3FC",
  				non_qualified: null,
  				image: "1f918-1f3fc.png",
  				sheet_x: 37,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F918-1F3FD",
  				non_qualified: null,
  				image: "1f918-1f3fd.png",
  				sheet_x: 37,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F918-1F3FE",
  				non_qualified: null,
  				image: "1f918-1f3fe.png",
  				sheet_x: 37,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F918-1F3FF",
  				non_qualified: null,
  				image: "1f918-1f3ff.png",
  				sheet_x: 37,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Sign of the Horns",
  		b: "1F918",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			32
  		],
  		n: [
  			"sign_of_the_horns"
  		],
  		o: 8
  	},
  	call_me_hand: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F919-1F3FB",
  				non_qualified: null,
  				image: "1f919-1f3fb.png",
  				sheet_x: 37,
  				sheet_y: 39,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F919-1F3FC",
  				non_qualified: null,
  				image: "1f919-1f3fc.png",
  				sheet_x: 37,
  				sheet_y: 40,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F919-1F3FD",
  				non_qualified: null,
  				image: "1f919-1f3fd.png",
  				sheet_x: 37,
  				sheet_y: 41,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F919-1F3FE",
  				non_qualified: null,
  				image: "1f919-1f3fe.png",
  				sheet_x: 37,
  				sheet_y: 42,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F919-1F3FF",
  				non_qualified: null,
  				image: "1f919-1f3ff.png",
  				sheet_x: 37,
  				sheet_y: 43,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Call Me Hand",
  		b: "1F919",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"hands",
  			"gesture"
  		],
  		k: [
  			37,
  			38
  		],
  		o: 9
  	},
  	raised_hand_with_fingers_splayed: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F590-1F3FB",
  				non_qualified: null,
  				image: "1f590-1f3fb.png",
  				sheet_x: 29,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F590-1F3FC",
  				non_qualified: null,
  				image: "1f590-1f3fc.png",
  				sheet_x: 29,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F590-1F3FD",
  				non_qualified: null,
  				image: "1f590-1f3fd.png",
  				sheet_x: 29,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F590-1F3FE",
  				non_qualified: null,
  				image: "1f590-1f3fe.png",
  				sheet_x: 29,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F590-1F3FF",
  				non_qualified: null,
  				image: "1f590-1f3ff.png",
  				sheet_x: 29,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Raised Hand with Fingers Splayed",
  		b: "1F590-FE0F",
  		c: "1F590",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"hand",
  			"fingers",
  			"palm"
  		],
  		k: [
  			29,
  			32
  		],
  		o: 7
  	},
  	hand: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "270B-1F3FB",
  				non_qualified: null,
  				image: "270b-1f3fb.png",
  				sheet_x: 49,
  				sheet_y: 25,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "270B-1F3FC",
  				non_qualified: null,
  				image: "270b-1f3fc.png",
  				sheet_x: 49,
  				sheet_y: 26,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "270B-1F3FD",
  				non_qualified: null,
  				image: "270b-1f3fd.png",
  				sheet_x: 49,
  				sheet_y: 27,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "270B-1F3FE",
  				non_qualified: null,
  				image: "270b-1f3fe.png",
  				sheet_x: 49,
  				sheet_y: 28,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "270B-1F3FF",
  				non_qualified: null,
  				image: "270b-1f3ff.png",
  				sheet_x: 49,
  				sheet_y: 29,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Raised Hand",
  		b: "270B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			49,
  			24
  		],
  		n: [
  			"raised_hand"
  		]
  	},
  	ok_hand: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F44C-1F3FB",
  				non_qualified: null,
  				image: "1f44c-1f3fb.png",
  				sheet_x: 14,
  				sheet_y: 44,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F44C-1F3FC",
  				non_qualified: null,
  				image: "1f44c-1f3fc.png",
  				sheet_x: 14,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F44C-1F3FD",
  				non_qualified: null,
  				image: "1f44c-1f3fd.png",
  				sheet_x: 14,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F44C-1F3FE",
  				non_qualified: null,
  				image: "1f44c-1f3fe.png",
  				sheet_x: 14,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F44C-1F3FF",
  				non_qualified: null,
  				image: "1f44c-1f3ff.png",
  				sheet_x: 14,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Ok Hand Sign",
  		b: "1F44C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fingers",
  			"limbs",
  			"perfect",
  			"ok",
  			"okay"
  		],
  		k: [
  			14,
  			43
  		]
  	},
  	"+1": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F44D-1F3FB",
  				non_qualified: null,
  				image: "1f44d-1f3fb.png",
  				sheet_x: 14,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F44D-1F3FC",
  				non_qualified: null,
  				image: "1f44d-1f3fc.png",
  				sheet_x: 14,
  				sheet_y: 51,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F44D-1F3FD",
  				non_qualified: null,
  				image: "1f44d-1f3fd.png",
  				sheet_x: 15,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F44D-1F3FE",
  				non_qualified: null,
  				image: "1f44d-1f3fe.png",
  				sheet_x: 15,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F44D-1F3FF",
  				non_qualified: null,
  				image: "1f44d-1f3ff.png",
  				sheet_x: 15,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Thumbs Up Sign",
  		b: "1F44D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"thumbsup",
  			"yes",
  			"awesome",
  			"good",
  			"agree",
  			"accept",
  			"cool",
  			"hand",
  			"like"
  		],
  		k: [
  			14,
  			49
  		],
  		n: [
  			"thumbsup"
  		]
  	},
  	"-1": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F44E-1F3FB",
  				non_qualified: null,
  				image: "1f44e-1f3fb.png",
  				sheet_x: 15,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F44E-1F3FC",
  				non_qualified: null,
  				image: "1f44e-1f3fc.png",
  				sheet_x: 15,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F44E-1F3FD",
  				non_qualified: null,
  				image: "1f44e-1f3fd.png",
  				sheet_x: 15,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F44E-1F3FE",
  				non_qualified: null,
  				image: "1f44e-1f3fe.png",
  				sheet_x: 15,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F44E-1F3FF",
  				non_qualified: null,
  				image: "1f44e-1f3ff.png",
  				sheet_x: 15,
  				sheet_y: 8,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Thumbs Down Sign",
  		b: "1F44E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"thumbsdown",
  			"no",
  			"dislike",
  			"hand"
  		],
  		k: [
  			15,
  			3
  		],
  		n: [
  			"thumbsdown"
  		]
  	},
  	fist: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "270A-1F3FB",
  				non_qualified: null,
  				image: "270a-1f3fb.png",
  				sheet_x: 49,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "270A-1F3FC",
  				non_qualified: null,
  				image: "270a-1f3fc.png",
  				sheet_x: 49,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "270A-1F3FD",
  				non_qualified: null,
  				image: "270a-1f3fd.png",
  				sheet_x: 49,
  				sheet_y: 21,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "270A-1F3FE",
  				non_qualified: null,
  				image: "270a-1f3fe.png",
  				sheet_x: 49,
  				sheet_y: 22,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "270A-1F3FF",
  				non_qualified: null,
  				image: "270a-1f3ff.png",
  				sheet_x: 49,
  				sheet_y: 23,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Raised Fist",
  		b: "270A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fingers",
  			"hand",
  			"grasp"
  		],
  		k: [
  			49,
  			18
  		]
  	},
  	facepunch: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F44A-1F3FB",
  				non_qualified: null,
  				image: "1f44a-1f3fb.png",
  				sheet_x: 14,
  				sheet_y: 32,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F44A-1F3FC",
  				non_qualified: null,
  				image: "1f44a-1f3fc.png",
  				sheet_x: 14,
  				sheet_y: 33,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F44A-1F3FD",
  				non_qualified: null,
  				image: "1f44a-1f3fd.png",
  				sheet_x: 14,
  				sheet_y: 34,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F44A-1F3FE",
  				non_qualified: null,
  				image: "1f44a-1f3fe.png",
  				sheet_x: 14,
  				sheet_y: 35,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F44A-1F3FF",
  				non_qualified: null,
  				image: "1f44a-1f3ff.png",
  				sheet_x: 14,
  				sheet_y: 36,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Fisted Hand Sign",
  		b: "1F44A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"angry",
  			"violence",
  			"fist",
  			"hit",
  			"attack",
  			"hand"
  		],
  		k: [
  			14,
  			31
  		],
  		n: [
  			"punch"
  		]
  	},
  	"left-facing_fist": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F91B-1F3FB",
  				non_qualified: null,
  				image: "1f91b-1f3fb.png",
  				sheet_x: 37,
  				sheet_y: 51,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F91B-1F3FC",
  				non_qualified: null,
  				image: "1f91b-1f3fc.png",
  				sheet_x: 38,
  				sheet_y: 0,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F91B-1F3FD",
  				non_qualified: null,
  				image: "1f91b-1f3fd.png",
  				sheet_x: 38,
  				sheet_y: 1,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F91B-1F3FE",
  				non_qualified: null,
  				image: "1f91b-1f3fe.png",
  				sheet_x: 38,
  				sheet_y: 2,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F91B-1F3FF",
  				non_qualified: null,
  				image: "1f91b-1f3ff.png",
  				sheet_x: 38,
  				sheet_y: 3,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Left-Facing Fist",
  		b: "1F91B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			50
  		],
  		o: 9
  	},
  	"right-facing_fist": {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F91C-1F3FB",
  				non_qualified: null,
  				image: "1f91c-1f3fb.png",
  				sheet_x: 38,
  				sheet_y: 5,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F91C-1F3FC",
  				non_qualified: null,
  				image: "1f91c-1f3fc.png",
  				sheet_x: 38,
  				sheet_y: 6,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F91C-1F3FD",
  				non_qualified: null,
  				image: "1f91c-1f3fd.png",
  				sheet_x: 38,
  				sheet_y: 7,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F91C-1F3FE",
  				non_qualified: null,
  				image: "1f91c-1f3fe.png",
  				sheet_x: 38,
  				sheet_y: 8,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F91C-1F3FF",
  				non_qualified: null,
  				image: "1f91c-1f3ff.png",
  				sheet_x: 38,
  				sheet_y: 9,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Right-Facing Fist",
  		b: "1F91C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			4
  		],
  		o: 9
  	},
  	raised_back_of_hand: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F91A-1F3FB",
  				non_qualified: null,
  				image: "1f91a-1f3fb.png",
  				sheet_x: 37,
  				sheet_y: 45,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F91A-1F3FC",
  				non_qualified: null,
  				image: "1f91a-1f3fc.png",
  				sheet_x: 37,
  				sheet_y: 46,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F91A-1F3FD",
  				non_qualified: null,
  				image: "1f91a-1f3fd.png",
  				sheet_x: 37,
  				sheet_y: 47,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F91A-1F3FE",
  				non_qualified: null,
  				image: "1f91a-1f3fe.png",
  				sheet_x: 37,
  				sheet_y: 48,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F91A-1F3FF",
  				non_qualified: null,
  				image: "1f91a-1f3ff.png",
  				sheet_x: 37,
  				sheet_y: 49,
  				added_in: "9.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Raised Back of Hand",
  		b: "1F91A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"fingers",
  			"raised",
  			"backhand"
  		],
  		k: [
  			37,
  			44
  		],
  		o: 9
  	},
  	wave: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F44B-1F3FB",
  				non_qualified: null,
  				image: "1f44b-1f3fb.png",
  				sheet_x: 14,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F44B-1F3FC",
  				non_qualified: null,
  				image: "1f44b-1f3fc.png",
  				sheet_x: 14,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F44B-1F3FD",
  				non_qualified: null,
  				image: "1f44b-1f3fd.png",
  				sheet_x: 14,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F44B-1F3FE",
  				non_qualified: null,
  				image: "1f44b-1f3fe.png",
  				sheet_x: 14,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F44B-1F3FF",
  				non_qualified: null,
  				image: "1f44b-1f3ff.png",
  				sheet_x: 14,
  				sheet_y: 42,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Waving Hand Sign",
  		b: "1F44B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"hands",
  			"gesture",
  			"goodbye",
  			"solong",
  			"farewell",
  			"hello",
  			"hi",
  			"palm"
  		],
  		k: [
  			14,
  			37
  		]
  	},
  	i_love_you_hand_sign: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F91F-1F3FB",
  				non_qualified: null,
  				image: "1f91f-1f3fb.png",
  				sheet_x: 38,
  				sheet_y: 18,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F91F-1F3FC",
  				non_qualified: null,
  				image: "1f91f-1f3fc.png",
  				sheet_x: 38,
  				sheet_y: 19,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F91F-1F3FD",
  				non_qualified: null,
  				image: "1f91f-1f3fd.png",
  				sheet_x: 38,
  				sheet_y: 20,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F91F-1F3FE",
  				non_qualified: null,
  				image: "1f91f-1f3fe.png",
  				sheet_x: 38,
  				sheet_y: 21,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F91F-1F3FF",
  				non_qualified: null,
  				image: "1f91f-1f3ff.png",
  				sheet_x: 38,
  				sheet_y: 22,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "I Love You Hand Sign",
  		b: "1F91F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			38,
  			17
  		],
  		o: 10
  	},
  	writing_hand: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "270D-1F3FB",
  				non_qualified: null,
  				image: "270d-1f3fb.png",
  				sheet_x: 49,
  				sheet_y: 37,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "270D-1F3FC",
  				non_qualified: null,
  				image: "270d-1f3fc.png",
  				sheet_x: 49,
  				sheet_y: 38,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "270D-1F3FD",
  				non_qualified: null,
  				image: "270d-1f3fd.png",
  				sheet_x: 49,
  				sheet_y: 39,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "270D-1F3FE",
  				non_qualified: null,
  				image: "270d-1f3fe.png",
  				sheet_x: 49,
  				sheet_y: 40,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "270D-1F3FF",
  				non_qualified: null,
  				image: "270d-1f3ff.png",
  				sheet_x: 49,
  				sheet_y: 41,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Writing Hand",
  		b: "270D-FE0F",
  		c: "270D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"lower_left_ballpoint_pen",
  			"stationery",
  			"write",
  			"compose"
  		],
  		k: [
  			49,
  			36
  		],
  		o: 1
  	},
  	clap: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F44F-1F3FB",
  				non_qualified: null,
  				image: "1f44f-1f3fb.png",
  				sheet_x: 15,
  				sheet_y: 10,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F44F-1F3FC",
  				non_qualified: null,
  				image: "1f44f-1f3fc.png",
  				sheet_x: 15,
  				sheet_y: 11,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F44F-1F3FD",
  				non_qualified: null,
  				image: "1f44f-1f3fd.png",
  				sheet_x: 15,
  				sheet_y: 12,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F44F-1F3FE",
  				non_qualified: null,
  				image: "1f44f-1f3fe.png",
  				sheet_x: 15,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F44F-1F3FF",
  				non_qualified: null,
  				image: "1f44f-1f3ff.png",
  				sheet_x: 15,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Clapping Hands Sign",
  		b: "1F44F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"hands",
  			"praise",
  			"applause",
  			"congrats",
  			"yay"
  		],
  		k: [
  			15,
  			9
  		]
  	},
  	open_hands: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F450-1F3FB",
  				non_qualified: null,
  				image: "1f450-1f3fb.png",
  				sheet_x: 15,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F450-1F3FC",
  				non_qualified: null,
  				image: "1f450-1f3fc.png",
  				sheet_x: 15,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F450-1F3FD",
  				non_qualified: null,
  				image: "1f450-1f3fd.png",
  				sheet_x: 15,
  				sheet_y: 18,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F450-1F3FE",
  				non_qualified: null,
  				image: "1f450-1f3fe.png",
  				sheet_x: 15,
  				sheet_y: 19,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F450-1F3FF",
  				non_qualified: null,
  				image: "1f450-1f3ff.png",
  				sheet_x: 15,
  				sheet_y: 20,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Open Hands Sign",
  		b: "1F450",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fingers",
  			"butterfly",
  			"hands",
  			"open"
  		],
  		k: [
  			15,
  			15
  		]
  	},
  	raised_hands: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64C-1F3FB",
  				non_qualified: null,
  				image: "1f64c-1f3fb.png",
  				sheet_x: 33,
  				sheet_y: 13,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F64C-1F3FC",
  				non_qualified: null,
  				image: "1f64c-1f3fc.png",
  				sheet_x: 33,
  				sheet_y: 14,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F64C-1F3FD",
  				non_qualified: null,
  				image: "1f64c-1f3fd.png",
  				sheet_x: 33,
  				sheet_y: 15,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F64C-1F3FE",
  				non_qualified: null,
  				image: "1f64c-1f3fe.png",
  				sheet_x: 33,
  				sheet_y: 16,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F64C-1F3FF",
  				non_qualified: null,
  				image: "1f64c-1f3ff.png",
  				sheet_x: 33,
  				sheet_y: 17,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Person Raising Both Hands in Celebration",
  		b: "1F64C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"gesture",
  			"hooray",
  			"yea",
  			"celebration",
  			"hands"
  		],
  		k: [
  			33,
  			12
  		]
  	},
  	palms_up_together: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F932-1F3FB",
  				non_qualified: null,
  				image: "1f932-1f3fb.png",
  				sheet_x: 39,
  				sheet_y: 17,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FC": {
  				unified: "1F932-1F3FC",
  				non_qualified: null,
  				image: "1f932-1f3fc.png",
  				sheet_x: 39,
  				sheet_y: 18,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FD": {
  				unified: "1F932-1F3FD",
  				non_qualified: null,
  				image: "1f932-1f3fd.png",
  				sheet_x: 39,
  				sheet_y: 19,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FE": {
  				unified: "1F932-1F3FE",
  				non_qualified: null,
  				image: "1f932-1f3fe.png",
  				sheet_x: 39,
  				sheet_y: 20,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			},
  			"1F3FF": {
  				unified: "1F932-1F3FF",
  				non_qualified: null,
  				image: "1f932-1f3ff.png",
  				sheet_x: 39,
  				sheet_y: 21,
  				added_in: "10.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: false
  			}
  		},
  		a: "Palms Up Together",
  		b: "1F932",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			39,
  			16
  		],
  		o: 10
  	},
  	pray: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F64F-1F3FB",
  				non_qualified: null,
  				image: "1f64f-1f3fb.png",
  				sheet_x: 34,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F64F-1F3FC",
  				non_qualified: null,
  				image: "1f64f-1f3fc.png",
  				sheet_x: 34,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F64F-1F3FD",
  				non_qualified: null,
  				image: "1f64f-1f3fd.png",
  				sheet_x: 34,
  				sheet_y: 5,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F64F-1F3FE",
  				non_qualified: null,
  				image: "1f64f-1f3fe.png",
  				sheet_x: 34,
  				sheet_y: 6,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F64F-1F3FF",
  				non_qualified: null,
  				image: "1f64f-1f3ff.png",
  				sheet_x: 34,
  				sheet_y: 7,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Person with Folded Hands",
  		b: "1F64F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"please",
  			"hope",
  			"wish",
  			"namaste",
  			"highfive"
  		],
  		k: [
  			34,
  			2
  		]
  	},
  	handshake: {
  		a: "Handshake",
  		b: "1F91D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"agreement",
  			"shake"
  		],
  		k: [
  			38,
  			10
  		],
  		o: 9
  	},
  	nail_care: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F485-1F3FB",
  				non_qualified: null,
  				image: "1f485-1f3fb.png",
  				sheet_x: 23,
  				sheet_y: 45,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F485-1F3FC",
  				non_qualified: null,
  				image: "1f485-1f3fc.png",
  				sheet_x: 23,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F485-1F3FD",
  				non_qualified: null,
  				image: "1f485-1f3fd.png",
  				sheet_x: 23,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F485-1F3FE",
  				non_qualified: null,
  				image: "1f485-1f3fe.png",
  				sheet_x: 23,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F485-1F3FF",
  				non_qualified: null,
  				image: "1f485-1f3ff.png",
  				sheet_x: 23,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Nail Polish",
  		b: "1F485",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"beauty",
  			"manicure",
  			"finger",
  			"fashion",
  			"nail"
  		],
  		k: [
  			23,
  			44
  		]
  	},
  	ear: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F442-1F3FB",
  				non_qualified: null,
  				image: "1f442-1f3fb.png",
  				sheet_x: 13,
  				sheet_y: 46,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F442-1F3FC",
  				non_qualified: null,
  				image: "1f442-1f3fc.png",
  				sheet_x: 13,
  				sheet_y: 47,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F442-1F3FD",
  				non_qualified: null,
  				image: "1f442-1f3fd.png",
  				sheet_x: 13,
  				sheet_y: 48,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F442-1F3FE",
  				non_qualified: null,
  				image: "1f442-1f3fe.png",
  				sheet_x: 13,
  				sheet_y: 49,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F442-1F3FF",
  				non_qualified: null,
  				image: "1f442-1f3ff.png",
  				sheet_x: 13,
  				sheet_y: 50,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Ear",
  		b: "1F442",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"hear",
  			"sound",
  			"listen"
  		],
  		k: [
  			13,
  			45
  		]
  	},
  	nose: {
  		skin_variations: {
  			"1F3FB": {
  				unified: "1F443-1F3FB",
  				non_qualified: null,
  				image: "1f443-1f3fb.png",
  				sheet_x: 14,
  				sheet_y: 0,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FC": {
  				unified: "1F443-1F3FC",
  				non_qualified: null,
  				image: "1f443-1f3fc.png",
  				sheet_x: 14,
  				sheet_y: 1,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FD": {
  				unified: "1F443-1F3FD",
  				non_qualified: null,
  				image: "1f443-1f3fd.png",
  				sheet_x: 14,
  				sheet_y: 2,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FE": {
  				unified: "1F443-1F3FE",
  				non_qualified: null,
  				image: "1f443-1f3fe.png",
  				sheet_x: 14,
  				sheet_y: 3,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			},
  			"1F3FF": {
  				unified: "1F443-1F3FF",
  				non_qualified: null,
  				image: "1f443-1f3ff.png",
  				sheet_x: 14,
  				sheet_y: 4,
  				added_in: "8.0",
  				has_img_apple: true,
  				has_img_google: true,
  				has_img_twitter: true,
  				has_img_emojione: true,
  				has_img_facebook: true,
  				has_img_messenger: true
  			}
  		},
  		a: "Nose",
  		b: "1F443",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"smell",
  			"sniff"
  		],
  		k: [
  			13,
  			51
  		]
  	},
  	footprints: {
  		a: "Footprints",
  		b: "1F463",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"feet",
  			"tracking",
  			"walking",
  			"beach"
  		],
  		k: [
  			15,
  			39
  		]
  	},
  	eyes: {
  		a: "Eyes",
  		b: "1F440",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"look",
  			"watch",
  			"stalk",
  			"peek",
  			"see"
  		],
  		k: [
  			13,
  			42
  		]
  	},
  	eye: {
  		a: "Eye",
  		b: "1F441-FE0F",
  		c: "1F441",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"look",
  			"see",
  			"watch",
  			"stare"
  		],
  		k: [
  			13,
  			44
  		],
  		o: 7
  	},
  	"eye-in-speech-bubble": {
  		a: "Eye in Speech Bubble",
  		b: "1F441-FE0F-200D-1F5E8-FE0F",
  		d: true,
  		e: true,
  		f: false,
  		g: true,
  		h: false,
  		i: false,
  		k: [
  			13,
  			43
  		],
  		o: 7
  	},
  	brain: {
  		a: "Brain",
  		b: "1F9E0",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			22
  		],
  		o: 10
  	},
  	tongue: {
  		a: "Tongue",
  		b: "1F445",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"mouth",
  			"playful"
  		],
  		k: [
  			14,
  			6
  		]
  	},
  	lips: {
  		a: "Mouth",
  		b: "1F444",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"mouth",
  			"kiss"
  		],
  		k: [
  			14,
  			5
  		]
  	},
  	kiss: {
  		a: "Kiss Mark",
  		b: "1F48B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"face",
  			"lips",
  			"love",
  			"like",
  			"affection",
  			"valentines"
  		],
  		k: [
  			24,
  			37
  		]
  	},
  	cupid: {
  		a: "Heart with Arrow",
  		b: "1F498",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"heart",
  			"affection",
  			"valentines"
  		],
  		k: [
  			24,
  			50
  		]
  	},
  	heart: {
  		a: "Heavy Black Heart",
  		b: "2764-FE0F",
  		c: "2764",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"valentines"
  		],
  		k: [
  			50,
  			8
  		],
  		l: [
  			"<3"
  		],
  		m: "<3",
  		o: 1
  	},
  	heartbeat: {
  		a: "Beating Heart",
  		b: "1F493",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"affection",
  			"valentines",
  			"pink",
  			"heart"
  		],
  		k: [
  			24,
  			45
  		]
  	},
  	broken_heart: {
  		a: "Broken Heart",
  		b: "1F494",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sad",
  			"sorry",
  			"break",
  			"heart",
  			"heartbreak"
  		],
  		k: [
  			24,
  			46
  		],
  		l: [
  			"</3"
  		],
  		m: "</3"
  	},
  	two_hearts: {
  		a: "Two Hearts",
  		b: "1F495",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"affection",
  			"valentines",
  			"heart"
  		],
  		k: [
  			24,
  			47
  		]
  	},
  	sparkling_heart: {
  		a: "Sparkling Heart",
  		b: "1F496",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"affection",
  			"valentines"
  		],
  		k: [
  			24,
  			48
  		]
  	},
  	heartpulse: {
  		a: "Growing Heart",
  		b: "1F497",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"like",
  			"love",
  			"affection",
  			"valentines",
  			"pink"
  		],
  		k: [
  			24,
  			49
  		]
  	},
  	blue_heart: {
  		a: "Blue Heart",
  		b: "1F499",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"affection",
  			"valentines"
  		],
  		k: [
  			24,
  			51
  		],
  		m: "<3"
  	},
  	green_heart: {
  		a: "Green Heart",
  		b: "1F49A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"affection",
  			"valentines"
  		],
  		k: [
  			25,
  			0
  		],
  		m: "<3"
  	},
  	yellow_heart: {
  		a: "Yellow Heart",
  		b: "1F49B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"affection",
  			"valentines"
  		],
  		k: [
  			25,
  			1
  		],
  		m: "<3"
  	},
  	orange_heart: {
  		a: "Orange Heart",
  		b: "1F9E1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			23
  		],
  		o: 10
  	},
  	purple_heart: {
  		a: "Purple Heart",
  		b: "1F49C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"affection",
  			"valentines"
  		],
  		k: [
  			25,
  			2
  		],
  		m: "<3"
  	},
  	black_heart: {
  		a: "Black Heart",
  		b: "1F5A4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"evil"
  		],
  		k: [
  			29,
  			50
  		],
  		o: 9
  	},
  	gift_heart: {
  		a: "Heart with Ribbon",
  		b: "1F49D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"valentines"
  		],
  		k: [
  			25,
  			3
  		]
  	},
  	revolving_hearts: {
  		a: "Revolving Hearts",
  		b: "1F49E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"love",
  			"like",
  			"affection",
  			"valentines"
  		],
  		k: [
  			25,
  			4
  		]
  	},
  	heart_decoration: {
  		a: "Heart Decoration",
  		b: "1F49F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"purple-square",
  			"love",
  			"like"
  		],
  		k: [
  			25,
  			5
  		]
  	},
  	heavy_heart_exclamation_mark_ornament: {
  		a: "Heavy Heart Exclamation Mark Ornament",
  		b: "2763-FE0F",
  		c: "2763",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			50,
  			7
  		],
  		o: 1
  	},
  	love_letter: {
  		a: "Love Letter",
  		b: "1F48C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"email",
  			"like",
  			"affection",
  			"envelope",
  			"valentines"
  		],
  		k: [
  			24,
  			38
  		]
  	},
  	zzz: {
  		a: "Sleeping Symbol",
  		b: "1F4A4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"sleepy",
  			"tired",
  			"dream"
  		],
  		k: [
  			25,
  			10
  		]
  	},
  	anger: {
  		a: "Anger Symbol",
  		b: "1F4A2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"angry",
  			"mad"
  		],
  		k: [
  			25,
  			8
  		]
  	},
  	bomb: {
  		a: "Bomb",
  		b: "1F4A3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"boom",
  			"explode",
  			"explosion",
  			"terrorism"
  		],
  		k: [
  			25,
  			9
  		]
  	},
  	boom: {
  		a: "Collision Symbol",
  		b: "1F4A5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"bomb",
  			"explode",
  			"explosion",
  			"collision",
  			"blown"
  		],
  		k: [
  			25,
  			11
  		],
  		n: [
  			"collision"
  		]
  	},
  	sweat_drops: {
  		a: "Splashing Sweat Symbol",
  		b: "1F4A6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"water",
  			"drip",
  			"oops"
  		],
  		k: [
  			25,
  			12
  		]
  	},
  	dash: {
  		a: "Dash Symbol",
  		b: "1F4A8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"wind",
  			"air",
  			"fast",
  			"shoo",
  			"fart",
  			"smoke",
  			"puff"
  		],
  		k: [
  			25,
  			14
  		]
  	},
  	dizzy: {
  		a: "Dizzy Symbol",
  		b: "1F4AB",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"star",
  			"sparkle",
  			"shoot",
  			"magic"
  		],
  		k: [
  			25,
  			22
  		]
  	},
  	speech_balloon: {
  		a: "Speech Balloon",
  		b: "1F4AC",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"bubble",
  			"words",
  			"message",
  			"talk",
  			"chatting"
  		],
  		k: [
  			25,
  			23
  		]
  	},
  	left_speech_bubble: {
  		a: "Left Speech Bubble",
  		b: "1F5E8-FE0F",
  		c: "1F5E8",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"words",
  			"message",
  			"talk",
  			"chatting"
  		],
  		k: [
  			30,
  			15
  		],
  		o: 7
  	},
  	right_anger_bubble: {
  		a: "Right Anger Bubble",
  		b: "1F5EF-FE0F",
  		c: "1F5EF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"caption",
  			"speech",
  			"thinking",
  			"mad"
  		],
  		k: [
  			30,
  			16
  		],
  		o: 7
  	},
  	thought_balloon: {
  		a: "Thought Balloon",
  		b: "1F4AD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"bubble",
  			"cloud",
  			"speech",
  			"thinking",
  			"dream"
  		],
  		k: [
  			25,
  			24
  		]
  	},
  	hole: {
  		a: "Hole",
  		b: "1F573-FE0F",
  		c: "1F573",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"embarrassing"
  		],
  		k: [
  			28,
  			44
  		],
  		o: 7
  	},
  	eyeglasses: {
  		a: "Eyeglasses",
  		b: "1F453",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fashion",
  			"accessories",
  			"eyesight",
  			"nerdy",
  			"dork",
  			"geek"
  		],
  		k: [
  			15,
  			23
  		]
  	},
  	dark_sunglasses: {
  		a: "Dark Sunglasses",
  		b: "1F576-FE0F",
  		c: "1F576",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"face",
  			"cool",
  			"accessories"
  		],
  		k: [
  			29,
  			17
  		],
  		o: 7
  	},
  	necktie: {
  		a: "Necktie",
  		b: "1F454",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shirt",
  			"suitup",
  			"formal",
  			"fashion",
  			"cloth",
  			"business"
  		],
  		k: [
  			15,
  			24
  		]
  	},
  	shirt: {
  		a: "T-Shirt",
  		b: "1F455",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		k: [
  			15,
  			25
  		],
  		n: [
  			"tshirt"
  		]
  	},
  	jeans: {
  		a: "Jeans",
  		b: "1F456",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fashion",
  			"shopping"
  		],
  		k: [
  			15,
  			26
  		]
  	},
  	scarf: {
  		a: "Scarf",
  		b: "1F9E3",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			25
  		],
  		o: 10
  	},
  	gloves: {
  		a: "Gloves",
  		b: "1F9E4",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			26
  		],
  		o: 10
  	},
  	coat: {
  		a: "Coat",
  		b: "1F9E5",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			27
  		],
  		o: 10
  	},
  	socks: {
  		a: "Socks",
  		b: "1F9E6",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			28
  		],
  		o: 10
  	},
  	dress: {
  		a: "Dress",
  		b: "1F457",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"clothes",
  			"fashion",
  			"shopping"
  		],
  		k: [
  			15,
  			27
  		]
  	},
  	kimono: {
  		a: "Kimono",
  		b: "1F458",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"dress",
  			"fashion",
  			"women",
  			"female",
  			"japanese"
  		],
  		k: [
  			15,
  			28
  		]
  	},
  	bikini: {
  		a: "Bikini",
  		b: "1F459",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"swimming",
  			"female",
  			"woman",
  			"girl",
  			"fashion",
  			"beach",
  			"summer"
  		],
  		k: [
  			15,
  			29
  		]
  	},
  	womans_clothes: {
  		a: "Womans Clothes",
  		b: "1F45A",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fashion",
  			"shopping_bags",
  			"female"
  		],
  		k: [
  			15,
  			30
  		]
  	},
  	purse: {
  		a: "Purse",
  		b: "1F45B",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fashion",
  			"accessories",
  			"money",
  			"sales",
  			"shopping"
  		],
  		k: [
  			15,
  			31
  		]
  	},
  	handbag: {
  		a: "Handbag",
  		b: "1F45C",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fashion",
  			"accessory",
  			"accessories",
  			"shopping"
  		],
  		k: [
  			15,
  			32
  		]
  	},
  	pouch: {
  		a: "Pouch",
  		b: "1F45D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"bag",
  			"accessories",
  			"shopping"
  		],
  		k: [
  			15,
  			33
  		]
  	},
  	shopping_bags: {
  		a: "Shopping Bags",
  		b: "1F6CD-FE0F",
  		c: "1F6CD",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			37,
  			2
  		],
  		o: 7
  	},
  	school_satchel: {
  		a: "School Satchel",
  		b: "1F392",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"student",
  			"education",
  			"bag",
  			"backpack"
  		],
  		k: [
  			8,
  			37
  		]
  	},
  	mans_shoe: {
  		a: "Mans Shoe",
  		b: "1F45E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fashion",
  			"male"
  		],
  		k: [
  			15,
  			34
  		],
  		n: [
  			"shoe"
  		]
  	},
  	athletic_shoe: {
  		a: "Athletic Shoe",
  		b: "1F45F",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shoes",
  			"sports",
  			"sneakers"
  		],
  		k: [
  			15,
  			35
  		]
  	},
  	high_heel: {
  		a: "High-Heeled Shoe",
  		b: "1F460",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fashion",
  			"shoes",
  			"female",
  			"pumps",
  			"stiletto"
  		],
  		k: [
  			15,
  			36
  		]
  	},
  	sandal: {
  		a: "Womans Sandal",
  		b: "1F461",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shoes",
  			"fashion",
  			"flip flops"
  		],
  		k: [
  			15,
  			37
  		]
  	},
  	boot: {
  		a: "Womans Boots",
  		b: "1F462",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"shoes",
  			"fashion"
  		],
  		k: [
  			15,
  			38
  		]
  	},
  	crown: {
  		a: "Crown",
  		b: "1F451",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"king",
  			"kod",
  			"leader",
  			"royalty",
  			"lord"
  		],
  		k: [
  			15,
  			21
  		]
  	},
  	womans_hat: {
  		a: "Womans Hat",
  		b: "1F452",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"fashion",
  			"accessories",
  			"female",
  			"lady",
  			"spring"
  		],
  		k: [
  			15,
  			22
  		]
  	},
  	tophat: {
  		a: "Top Hat",
  		b: "1F3A9",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"magic",
  			"gentleman",
  			"classy",
  			"circus"
  		],
  		k: [
  			9,
  			3
  		]
  	},
  	mortar_board: {
  		a: "Graduation Cap",
  		b: "1F393",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"school",
  			"college",
  			"degree",
  			"university",
  			"graduation",
  			"cap",
  			"hat",
  			"legal",
  			"learn",
  			"education"
  		],
  		k: [
  			8,
  			38
  		]
  	},
  	billed_cap: {
  		a: "Billed Cap",
  		b: "1F9E2",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			46,
  			24
  		],
  		o: 10
  	},
  	helmet_with_white_cross: {
  		a: "Helmet with White Cross",
  		b: "26D1-FE0F",
  		c: "26D1",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		k: [
  			48,
  			33
  		],
  		o: 5
  	},
  	prayer_beads: {
  		a: "Prayer Beads",
  		b: "1F4FF",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: false,
  		j: [
  			"dhikr",
  			"religious"
  		],
  		k: [
  			27,
  			1
  		],
  		o: 8
  	},
  	lipstick: {
  		a: "Lipstick",
  		b: "1F484",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"female",
  			"girl",
  			"fashion",
  			"woman"
  		],
  		k: [
  			23,
  			43
  		]
  	},
  	ring: {
  		a: "Ring",
  		b: "1F48D",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"wedding",
  			"propose",
  			"marriage",
  			"valentines",
  			"diamond",
  			"fashion",
  			"jewelry",
  			"gem",
  			"engagement"
  		],
  		k: [
  			24,
  			39
  		]
  	},
  	gem: {
  		a: "Gem Stone",
  		b: "1F48E",
  		d: true,
  		e: true,
  		f: true,
  		g: true,
  		h: true,
  		i: true,
  		j: [
  			"blue",
  			"ruby",
  			"diamond",
  			"jewelry"
  		],
  		k: [
  			24,
  			40
  		]
  	}
  };
  var aliases = {
  	satisfied: "laughing",
  	grinning_face_with_star_eyes: "star-struck",
  	face_with_one_eyebrow_raised: "face_with_raised_eyebrow",
  	telephone: "phone",
  	cooking: "fried_egg",
  	paw_prints: "feet",
  	"flag-cn": "cn",
  	lantern: "izakaya_lantern",
  	shocked_face_with_exploding_head: "exploding_head",
  	open_book: "book",
  	"flag-de": "de",
  	grinning_face_with_one_large_and_one_small_eye: "zany_face",
  	serious_face_with_symbols_covering_mouth: "face_with_symbols_on_mouth",
  	flipper: "dolphin",
  	face_with_open_mouth_vomiting: "face_vomiting",
  	"flag-es": "es",
  	face_with_finger_covering_closed_lips: "shushing_face",
  	smiling_face_with_smiling_eyes_and_hand_covering_mouth: "face_with_hand_over_mouth",
  	"flag-fr": "fr",
  	honeybee: "bee",
  	red_car: "car",
  	envelope: "email",
  	uk: "gb",
  	"flag-gb": "gb",
  	poop: "hankey",
  	shit: "hankey",
  	staff_of_aesculapius: "medical_symbol",
  	knife: "hocho",
  	sailboat: "boat",
  	pencil: "memo",
  	"flag-it": "it",
  	"flag-jp": "jp",
  	heavy_exclamation_mark: "exclamation",
  	"flag-kr": "kr",
  	waxing_gibbous_moon: "moon",
  	mother_christmas: "mrs_claus",
  	sun_small_cloud: "mostly_sunny",
  	sun_behind_cloud: "barely_sunny",
  	sun_behind_rain_cloud: "partly_sunny_rain",
  	lightning_cloud: "lightning",
  	tornado_cloud: "tornado",
  	"flag-ru": "ru",
  	running: "runner",
  	"flag-us": "us",
  	man_and_woman_holding_hands: "couple",
  	"man-woman-boy": "family",
  	family: "man-woman-boy",
  	reversed_hand_with_middle_finger_extended: "middle_finger",
  	hand_with_index_and_middle_fingers_crossed: "crossed_fingers",
  	sign_of_the_horns: "the_horns",
  	raised_hand: "hand",
  	thumbsup: "+1",
  	thumbsdown: "-1",
  	punch: "facepunch",
  	collision: "boom",
  	tshirt: "shirt",
  	shoe: "mans_shoe"
  };
  var emojiData = {
  	compressed: compressed,
  	categories: categories,
  	emojis: emojis,
  	aliases: aliases
  };

  /* eslint-disable */
  var mapping = {
    name: 'a',
    unified: 'b',
    non_qualified: 'c',
    has_img_apple: 'd',
    has_img_google: 'e',
    has_img_twitter: 'f',
    has_img_emojione: 'g',
    has_img_facebook: 'h',
    has_img_messenger: 'i',
    keywords: 'j',
    sheet: 'k',
    emoticons: 'l',
    text: 'm',
    short_names: 'n',
    added_in: 'o'
  };

  var buildSearch = function buildSearch(emoji) {
    var search = [];

    var addToSearch = function addToSearch(strings, split) {
      if (!strings) {
        return;
      }

      (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
        (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
          s = s.toLowerCase();

          if (search.indexOf(s) === -1) {
            search.push(s);
          }
        });
      });
    };

    addToSearch(emoji.short_names, true);
    addToSearch(emoji.name, true);
    addToSearch(emoji.keywords, false);
    addToSearch(emoji.emoticons, false);
    return search.join(',');
  };

  var uncompress = function uncompress(data) {
    data.compressed = false;

    for (var id in data.emojis) {
      var emoji = data.emojis[id];

      for (var key in mapping) {
        emoji[key] = emoji[mapping[key]];
        delete emoji[mapping[key]];
      }

      if (!emoji.short_names) emoji.short_names = [];
      emoji.short_names.unshift(id);
      emoji.sheet_x = emoji.sheet[0];
      emoji.sheet_y = emoji.sheet[1];
      delete emoji.sheet;
      if (!emoji.text) emoji.text = '';
      if (!emoji.added_in) emoji.added_in = 6;
      emoji.added_in = emoji.added_in.toFixed(1);
      emoji.search = buildSearch(emoji);
    }
  };

  var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart'];
  var KEY = 'react-native-slack-emoji/RECENT';
  var MAX_RECENT_LENGTH = 15;
  var items;
  var initialized;

  function init() {
    return _init.apply(this, arguments);
  }

  function _init() {
    _init = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var storageItems;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              initialized = true;
              _context.next = 3;
              return reactNative.AsyncStorage.getItem(KEY);

            case 3:
              storageItems = _context.sent;

              if (storageItems) {
                _context.next = 10;
                break;
              }

              items = DEFAULTS;
              _context.next = 8;
              return reactNative.AsyncStorage.setItem(KEY, JSON.stringify(items));

            case 8:
              _context.next = 11;
              break;

            case 10:
              items = JSON.parse(storageItems);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _init.apply(this, arguments);
  }

  function addEmoji(_x) {
    return _addEmoji.apply(this, arguments);
  }

  function _addEmoji() {
    _addEmoji = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(emoji) {
      var updatedArray, emojiIndex;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (initialized) {
                _context2.next = 3;
                break;
              }

              _context2.next = 3;
              return init();

            case 3:
              updatedArray = [].concat(items);
              emojiIndex = updatedArray.indexOf(emoji);

              if (emojiIndex !== -1) {
                updatedArray.unshift(updatedArray.splice(emojiIndex, 1)[0]);
              } else {
                updatedArray.unshift(emoji);
              }

              items = updatedArray.slice(0, MAX_RECENT_LENGTH);
              _context2.next = 9;
              return reactNative.AsyncStorage.setItem(KEY, JSON.stringify(items));

            case 9:
              return _context2.abrupt("return", items);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return _addEmoji.apply(this, arguments);
  }

  function getEmoji() {
    return _getEmoji.apply(this, arguments);
  }

  function _getEmoji() {
    _getEmoji = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (initialized) {
                _context3.next = 3;
                break;
              }

              _context3.next = 3;
              return init();

            case 3:
              return _context3.abrupt("return", items);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    return _getEmoji.apply(this, arguments);
  }

  var colors = ['#fabfff', '#aee0ff', '#abe981', '#f8ef55'];
  var icons = {
    recent: 'ios-timer',
    people: 'ios-happy',
    nature: 'ios-leaf',
    foods: 'ios-beaker',
    activity: 'ios-american-football',
    places: 'ios-airplane',
    objects: 'ios-bulb',
    symbols: 'ios-heart-empty',
    flags: 'ios-flag',
    custom: 'ios-code'
  };

  var CategoryContent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(CategoryContent, _React$Component);

    function CategoryContent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_keyExtractor", function (item, index) {
        return item.index + " + " + index;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "randomColor", function () {
        var index = Math.floor(colors.length * Math.random());

        _this.setState({
          randomColor: colors[index]
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onViewableItemsChanged", function (_ref) {
        var viewableItems = _ref.viewableItems;

        if (viewableItems.length) {
          var index = viewableItems[0].index;

          if (index % 2 === 0) {
            _this.setState({
              activeIndex: index
            });
          }
        }
      });

      _this.flatListRef = React.createRef();
      _this.state = {
        list: [],
        stickyHeaderIndices: [],
        randomColor: colors[0],
        activeIndex: 0
      };
      return _this;
    }

    var _proto = CategoryContent.prototype;

    _proto.componentDidMount =
    /*#__PURE__*/
    function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var stickyIndex, list, stickyHeaderIndices, _this$props, categories, i18n, categoryKeys, recentCategory, recentEmojis, _loop, _i;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                stickyIndex = 0;
                list = [];
                stickyHeaderIndices = [];
                _this$props = this.props, categories = _this$props.categories, i18n = _this$props.i18n;
                categoryKeys = Object.keys(i18n.categories);
                recentCategory = categories.filter(function (_ref2) {
                  var id = _ref2.id;
                  return id === 'recent';
                })[0];
                _context.next = 8;
                return getEmoji();

              case 8:
                recentEmojis = _context.sent;

                if (recentCategory) {
                  recentCategory.emojis = recentEmojis;
                } else {
                  recentCategory = {
                    id: 'recent',
                    name: 'Recent',
                    emojis: recentEmojis
                  };
                }

                categories.push(recentCategory);

                _loop = function _loop() {
                  var value = categoryKeys[_i];
                  var filteredValues = categories.filter(function (_ref3) {
                    var id = _ref3.id;
                    return id === value;
                  })[0];
                  var emojis = filteredValues ? filteredValues.emojis : [];
                  var custom = value === 'custom';
                  list.push({
                    content: value,
                    header: true,
                    index: stickyIndex,
                    custom: custom
                  });
                  list.push({
                    content: emojis,
                    header: false,
                    index: stickyIndex + 1,
                    custom: custom
                  });
                  stickyHeaderIndices.push(stickyIndex);
                  stickyIndex += 2;
                };

                for (_i = 0; _i < categoryKeys.length; _i++) {
                  _loop();
                }

                this.setState({
                  list: list,
                  stickyHeaderIndices: stickyHeaderIndices
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }();

    _proto.scrollCategory = function scrollCategory(id) {
      var list = this.state.list;
      var index = list.filter(function (_ref4) {
        var content = _ref4.content,
            header = _ref4.header;
        return content === id && header;
      })[0].index;
      this.flatListRef.scrollToIndex({
        animated: true,
        index: index
      });
      this.setState({
        activeIndex: index
      });
    };

    _proto.selectEmoji = function selectEmoji(emoji, name, data) {
      var onSelect = this.props.onSelect;
      this.randomColor();
      reactNative.Keyboard.dismiss();
      onSelect(emoji, name, data);
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          i18n = _this$props2.i18n;
      var _this$state = this.state,
          list = _this$state.list,
          stickyHeaderIndices = _this$state.stickyHeaderIndices,
          randomColor = _this$state.randomColor,
          activeIndex = _this$state.activeIndex;
      var categoryKeys = Object.keys(i18n.categories);
      return React.createElement(reactNative.View, {
        style: {
          flex: 1
        }
      }, React.createElement(reactNative.FlatList, {
        ref: function ref(_ref6) {
          _this2.flatListRef = _ref6;
        },
        viewabilityConfig: {
          waitForInteraction: true,
          viewAreaCoveragePercentThreshold: 10
        },
        onScrollToIndexFailed: function onScrollToIndexFailed() {},
        onViewableItemsChanged: this.onViewableItemsChanged,
        keyboardShouldPersistTaps: "handled",
        style: {
          flex: 1
        },
        stickyHeaderIndices: stickyHeaderIndices,
        data: list,
        keyExtractor: this._keyExtractor,
        renderItem: function renderItem(_ref5) {
          var _ref5$item = _ref5.item,
              content = _ref5$item.content,
              header = _ref5$item.header,
              custom = _ref5$item.custom;

          if (header) {
            return React.createElement(reactNative.View, {
              style: style.categoryHeader
            }, React.createElement(reactNative.Text, {
              style: style.categoryHeaderText
            }, i18n.categories[content]));
          }

          return React.createElement(reactNative.View, {
            style: style.categoryContent
          }, content.map(function (name) {
            var emoji = custom ? name.imageUrl : charFromUtf16(data.emojis[name].unified);
            return React.createElement(reactNative.TouchableHighlight, {
              underlayColor: randomColor,
              onPress: function onPress() {
                return _this2.selectEmoji(emoji, name, data.emojis[name]);
              },
              onLongPress: _this2.randomColor,
              style: [style.categoryEmojiWrapper],
              key: emoji
            }, custom ? React.createElement(reactNative.Image, {
              source: {
                uri: emoji
              },
              style: style.categoryEmojiImage
            }) : React.createElement(reactNative.Text, {
              style: style.categoryEmojiText
            }, emoji));
          }));
        }
      }), React.createElement(reactNative.View, {
        style: style.bottomPicker
      }, categoryKeys.map(function (id, index) {
        var active = index === Math.floor(activeIndex / 2);
        return React.createElement(reactNative.TouchableHighlight, {
          underlayColor: "#ffffff",
          onPress: function onPress() {
            return _this2.scrollCategory(id);
          },
          style: [style.category, active && {
            borderTopWidth: 3,
            borderColor: 'green'
          }],
          key: id
        }, React.createElement(Ionicons, {
          name: icons[id],
          style: [style.categoryIcon, active && {
            color: 'green'
          }]
        }));
      })));
    };

    return CategoryContent;
  }(React.Component);

  CategoryContent.propTypes = {
    onSelect: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    i18n: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  };

  var I18N = {
    search: 'Search',
    notFound: 'No Emoji Found Matching',
    categories: {
      recent: 'Frequently Used',
      people: 'People',
      nature: 'Nature',
      foods: 'Foods',
      activity: 'Activity',
      places: 'Places',
      objects: 'Objects',
      symbols: 'Symbols',
      flags: 'Flags',
      custom: 'Custom'
    }
  };

  var PickerModal =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(PickerModal, _React$Component);

    function PickerModal(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filter", function (searchText) {
        return _this.setState({
          searchText: searchText
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_keyExtractor", function (item) {
        return item;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModal", function () {
        var close = _this.props.close;

        _this.setState({
          searchText: null
        }, function () {
          return close();
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectEmoji",
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(emoji, name, data) {
          var onSelect;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  onSelect = _this.props.onSelect;
                  onSelect(emoji, name, data);

                  _this.closeModal();

                  _context.next = 5;
                  return addEmoji(name);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());

      var _data = props.data,
          custom = props.custom,
          i18n = props.i18n;
      _this.customCategory = {
        id: 'custom',
        name: 'Custom',
        emojis: null
      };

      if (_data.compressed) {
        uncompress(_data);
      }

      _this.data = _data;
      _this.i18n = deepMerge(I18N, i18n);
      _this.categories = [];
      var allCategories = [].concat(_this.data.categories);

      if (custom.length) {
        _this.customCategory.emojis = custom.map(function (emoji) {
          return _extends({}, emoji, {
            id: emoji.short_names[0],
            custom: true
          });
        });
        allCategories.push(_this.customCategory);
      }

      for (var _iterator = allCategories, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var category = _ref2;

        _this.categories.push(category);
      }

      _this.state = {
        searchText: null
      };
      return _this;
    }

    var _proto = PickerModal.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          onShow = _this$props.onShow,
          onClose = _this$props.onClose,
          animationType = _this$props.animationType,
          presentationStyle = _this$props.presentationStyle;
      var searchText = this.state.searchText;
      var trimmedText = searchText && searchText.replace(/:/g, '');
      var filteredEmojis = Object.keys(this.data.emojis).filter(function (key) {
        return key.includes(trimmedText && trimmedText.toLowerCase());
      });
      return React.createElement(reactNative.Modal, {
        visible: visible,
        onShow: onShow,
        onDismiss: onClose,
        onRequestClose: onClose,
        animationType: animationType,
        presentationStyle: presentationStyle,
        transparent: false,
        hardwareAccelerated: true
      }, React.createElement(reactNative.SafeAreaView, {
        style: style.container
      }, React.createElement(reactNative.KeyboardAvoidingView, {
        style: style.container,
        behavior: reactNative.Platform.OS === 'ios' && 'padding',
        enabled: true
      }, React.createElement(SearchBar, {
        onChangeText: this.filter,
        cancel: this.closeModal
      }), searchText ? React.createElement(SearchContent, {
        onSelect: this.selectEmoji,
        emojis: filteredEmojis,
        data: this.data,
        i18n: this.i18n,
        searchText: searchText
      }) : React.createElement(CategoryContent, {
        onSelect: this.selectEmoji,
        close: this.closeModal,
        categories: this.categories,
        i18n: this.i18n,
        data: this.data
      }))));
    };

    return PickerModal;
  }(React.Component);

  PickerModal.defaultProps = {
    data: emojiData,
    custom: [{
      name: 'Octocat',
      short_names: ['octocat'],
      text: '',
      emoticons: [],
      keywords: ['github'],
      imageUrl: 'https://octodex.github.com/images/Sentrytocat_octodex.jpg'
    }],
    i18n: {},
    // set: 'native',
    onShow: function onShow() {},
    onClose: function onClose() {},
    animationType: 'slide',
    presentationStyle: 'fullScreen'
  };
  PickerModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.object,
    custom: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      short_names: PropTypes.arrayOf(PropTypes.string).isRequired,
      emoticons: PropTypes.arrayOf(PropTypes.string),
      keywords: PropTypes.arrayOf(PropTypes.string),
      imageUrl: PropTypes.string.isRequired
    })),
    i18n: PropTypes.object,
    // set: PropTypes.oneOf(
    // ['native', 'apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']
    // ),
    onShow: PropTypes.func,
    onClose: PropTypes.func,
    animationType: PropTypes.string,
    presentationStyle: PropTypes.string
  };

  var Picker =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Picker, _React$Component);

    function Picker() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        visible: false
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModal", function () {
        return _this.setState({
          visible: false
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openModal", function () {
        return _this.setState({
          visible: true
        });
      });

      return _this;
    }

    var _proto = Picker.prototype;

    _proto.render = function render() {
      var visible = this.state.visible;
      var _this$props = this.props,
          emojiList = _this$props.emojiList,
          updateEmoji = _this$props.updateEmoji,
          onSelect = _this$props.onSelect,
          data = _this$props.data,
          custom = _this$props.custom,
          i18n = _this$props.i18n,
          onShow = _this$props.onShow,
          onClose = _this$props.onClose,
          animationType = _this$props.animationType,
          presentationStyle = _this$props.presentationStyle,
          addIcon = _this$props.addIcon;
      return React.createElement(React.Fragment, null, React.createElement(reactNative.View, {
        style: style.wrapper
      }, emojiList.map(function (_ref) {
        var emoji = _ref.emoji,
            name = _ref.name,
            index = _ref.index,
            selected = _ref.selected;
        return React.createElement(reactNative.TouchableHighlight, {
          underlayColor: "#F8F8F8",
          onPress: function onPress() {
            return updateEmoji(emoji, name, index);
          },
          key: name
        }, React.createElement(reactNative.View, {
          style: [style.picker, style.emojiPicker, selected ? style.emojiPickerSelected : null]
        }, React.createElement(reactNative.Text, {
          style: style.emoji
        }, emoji + " " + index)));
      }), React.createElement(reactNative.TouchableHighlight, {
        underlayColor: "#F8F8F8",
        onPress: this.openModal
      }, React.createElement(reactNative.View, {
        style: style.picker
      }, addIcon || React.createElement(EntypoIcons, {
        name: "emoji-happy",
        style: style.pickerIcon
      })))), React.createElement(PickerModal, {
        onSelect: onSelect,
        close: this.closeModal,
        visible: visible,
        data: data,
        custom: custom,
        i18n: i18n,
        onShow: onShow,
        onDismiss: onClose,
        onRequestClose: onClose,
        animationType: animationType,
        presentationStyle: presentationStyle,
        transparent: false
      }));
    };

    return Picker;
  }(React.Component);

  Picker.defaultProps = {
    custom: [{
      name: 'Octocat',
      short_names: ['octocat'],
      text: '',
      emoticons: [],
      keywords: ['github'],
      imageUrl: 'https://octodex.github.com/images/Sentrytocat_octodex.jpg'
    }],
    i18n: {},
    // set: 'native',
    onShow: function onShow() {},
    onClose: function onClose() {},
    animationType: 'slide',
    presentationStyle: 'fullScreen',
    addIcon: null
  };
  Picker.propTypes = {
    emojiList: PropTypes.array.isRequired,
    updateEmoji: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    data: PropTypes.object,
    custom: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      short_names: PropTypes.arrayOf(PropTypes.string).isRequired,
      emoticons: PropTypes.arrayOf(PropTypes.string),
      keywords: PropTypes.arrayOf(PropTypes.string),
      imageUrl: PropTypes.string.isRequired
    })),
    i18n: PropTypes.object,
    // set: PropTypes.oneOf(
    // ['native', 'apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']
    // ),
    onShow: PropTypes.func,
    onClose: PropTypes.func,
    animationType: PropTypes.string,
    presentationStyle: PropTypes.string,
    addIcon: PropTypes.node
  };

  exports.Picker = Picker;
  exports.PickerModal = PickerModal;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-native-slack-emoji.js.map
