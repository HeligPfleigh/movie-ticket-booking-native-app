import React, { Component } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity } from "react-native";
import { defaultStyles } from "./styles";

// Colors for smooth transition when user chosess an option
const colorDefault = "rgba(255, 255, 255, 1)", // white
  colorSelected = "rgba(103,58,183, 1)"; // purple

interface IOptionsProps {
  isChosen: boolean;
  value?: string;
  onChoose: () => void;
}

interface IOptionsStates {
  background: Animated.Value;
}

export default class Options extends Component<IOptionsProps, IOptionsStates> {
  _background: Animated.Value;

  constructor(props: IOptionsProps) {
    super(props);
    this._background = new Animated.Value(0);
    // Animate option selection if value was already chosen not by a user
    if (this.props.isChosen) {
      this.animateSelect();
    }
  }

  // Handle isChosen prop changes
  componentDidUpdate(prevProps: IOptionsProps) {
    if (!this.props.isChosen && prevProps.isChosen) {
      this.animateDeselect();
    } else if (this.props.isChosen && !prevProps.isChosen) {
      this.animateSelect();
    }
  }

  animateSelect() {
    Animated.timing(this._background, {
      toValue: 100,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  animateDeselect() {
    Animated.timing(this._background, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const { value, isChosen, onChoose } = this.props;
    const backgroundColorAnimation = this._background.interpolate({
      inputRange: [0, 100],
      outputRange: [colorDefault, colorSelected],
    });
    return (
      <TouchableOpacity activeOpacity={1} onPress={onChoose}>
        <Animated.View
          style={[
            styles.container,
            { backgroundColor: backgroundColorAnimation },
          ]}
        >
          <Text style={{ color: isChosen ? colorDefault : colorSelected }}>
            {value}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colorSelected,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  text: {
    ...defaultStyles.text,
  },
});
