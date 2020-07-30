import React, { Component } from "react";
import { Dimensions, View, ScrollView, StyleSheet, Text } from "react-native";

import Option from "./Option";

const { width } = Dimensions.get("window");
const optionWidth = (width - 0) / 3 - 10;

interface IOptionsProps {
  values: string[];
  chosen: number;
  onChoose: (id: number) => void;
}

export default class Options extends Component<IOptionsProps> {
  _scrollView = React.createRef<ScrollView>();
  render() {
    const { values, chosen, onChoose } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          ref={this._scrollView}
          horizontal={true}
          // Decelerate fast after the user lifts their finger
          decelerationRate={0.1}
          // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          // Do not adjust content automatically
          automaticallyAdjustContentInsets={false}
          // Snap interval to stop at option edges
          snapToInterval={optionWidth}
          style={styles.options}
        >
          {values.map((value, index) => (
            <View style={{ width: optionWidth }} key={index}>
              <Option
                value={value}
                isChosen={index === chosen}
                onChoose={() => onChoose(index)}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  options: {
    flexDirection: "row",
    marginRight: 10,
  },
});
