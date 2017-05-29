import React from 'react';
import { View } from 'react-native';
import Animator from './animator';

export default class Container extends React.Component {
  constructor({ children }) {
    super();
    this.state = { stack: children };
  }

  onToss(callback) {
    let stack = [...this.state.stack];
    this.setState(
      {
        stack: stack.filter((item, index) => index !== stack.length - 1),
        toss: false,
      },
      callback
    );
  }

  componentWillReceiveProps({ children }) {
    if (children !== this.props.children) this.setState({ stack: children });
  }

  render() {
    let { stack, toss } = this.state;
    let { onTossLeft, onTossRight, actionsBar } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {React.Children.map(stack, (child, index) => (
          <Animator
            toss={index === stack.length - 1 ? toss : false}
            onTossRight={() => this.onToss(() => onTossRight(child.props))}
            onTossLeft={() => this.onToss(() => onTossLeft(child.props))}
          >
            {child}
          </Animator>
        ))}
        {actionsBar(toss => this.setState({ toss }))}
      </View>
    );
  }
}
