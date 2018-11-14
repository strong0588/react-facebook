import _extends from 'babel-runtime/helpers/extends';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import React, { Component, forwardRef } from 'react';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

class Share extends Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.handleClick = (() => {
      var _ref = _asyncToGenerator(function* (evn) {
        evn.preventDefault();

        const { handleProcess } = _this.props;

        return handleProcess((() => {
          var _ref2 = _asyncToGenerator(function* (api) {
            const {
              href = getCurrentHref(),
              display,
              appId = api.getAppId(),
              hashtag,
              redirectURI,
              quote,
              mobileIframe
            } = _this.props;

            return api.ui(clearUndefinedProperties({
              method: 'share',
              href,
              display,
              app_id: appId,
              hashtag,
              redirect_uri: redirectURI,
              quote,
              mobile_iframe: mobileIframe
            }));
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        })());
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })(), _temp;
  }

  render() {
    const {
      children, loading, error, data
    } = this.props;

    return children({
      loading,
      handleClick: this.handleClick,
      error,
      data
    });
  }
}

Share.defaultProps = {
  href: undefined,
  hashtag: undefined,
  quote: undefined,
  mobileIframe: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
};
export default forwardRef((props, ref) => React.createElement(
  Process,
  null,
  ({
    loading, handleProcess, data, error
  }) => React.createElement(Share, _extends({}, props, {
    loading: loading,
    handleProcess: handleProcess,
    data: data,
    error: error,
    ref: ref
  }))
));
//# sourceMappingURL=Share.js.map