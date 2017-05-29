import React, { Component } from 'react';
import { StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Animator extends Component {
  componentWillMount() {
    let { onTossRight, onTossLeft } = this.props;
    this.pan = new Animated.ValueXY();

    this.cardPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.pan.x, dy: this.pan.y },
      ]),
      onPanResponderRelease: (e, { dx }) => {
        const absDx = Math.abs(dx);
        const direction = absDx / dx;

        if (absDx > 120) {
          Animated.decay(this.pan, {
            velocity: { x: 3 * direction, y: 0 },
            deceleration: 0.995,
          }).start(dx > 0 ? onTossRight : onTossLeft);
        } else {
          Animated.spring(this.pan, {
            toValue: { x: 0, y: 0 },
            friction: 4.5,
          }).start();
        }
      },
    });
  }

  componentWillReceiveProps({ toss, onTossRight, onTossLeft }) {
    if (toss && !this.props.toss) {
      if (toss === 'left') {
        return Animated.timing(this.pan, {
          toValue: { x: 3 * -180, y: 0 },
          duration: 400,
        }).start(onTossLeft);
      }

      return Animated.timing(this.pan, {
        toValue: { x: 3 * 180, y: 0 },
        duration: 400,
      }).start(onTossRight);
    }
  }

  render() {
    let { children, style } = this.props;
    const rotateCard = this.pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['10deg', '0deg', '-10deg'],
    });
    const animatedStyle = {
      transform: [
        { translateX: this.pan.x },
        { translateY: this.pan.y },
        { rotate: rotateCard },
      ],
    };

    return (
      <Animated.View
        {...this.cardPanResponder.panHandlers}
        style={[styles.card, animatedStyle, style]}
      >
        {children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: width - 20,
    height: height * 0.7,
    top: 20,
    margin: 10,
  },
});
