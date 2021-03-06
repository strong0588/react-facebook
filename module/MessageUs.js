import _extends from 'babel-runtime/helpers/extends';
import React, { PureComponent, forwardRef } from 'react';
import Parser from './Parser';

class MessageUs extends PureComponent {

  componentDidUpdate() {
    const { handleParse } = this.props;
    handleParse();
  }

  render() {
    const {
      color,
      messengerAppId,
      pageId,
      children,
      size
    } = this.props;

    return React.createElement(
      'div',
      {
        className: 'fb-messengermessageus',
        messenger_app_id: messengerAppId,
        page_id: pageId,
        color: color,
        size: size
      },
      children
    );
  }
}

MessageUs.defaultProps = {
  color: undefined,
  size: undefined,
  children: undefined
};
export default forwardRef((props, ref) => React.createElement(
  Parser,
  null,
  ({ handleParse }) => React.createElement(MessageUs, _extends({}, props, {
    handleParse: handleParse,
    ref: ref
  }))
));
//# sourceMappingURL=MessageUs.js.map