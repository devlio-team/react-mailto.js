'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var encode = encodeURIComponent;

var Mailto = function (_Component) {
    _inherits(Mailto, _Component);

    function Mailto() {
        _classCallCheck(this, Mailto);

        return _possibleConstructorReturn(this, (Mailto.__proto__ || Object.getPrototypeOf(Mailto)).apply(this, arguments));
    }

    _createClass(Mailto, [{
        key: '_prepareLink',
        value: function _prepareLink(cfg) {
            var _cfg$subject = cfg.subject,
                subject = _cfg$subject === undefined ? '' : _cfg$subject,
                _cfg$to = cfg.to,
                to = _cfg$to === undefined ? '' : _cfg$to,
                _cfg$body = cfg.body,
                body = _cfg$body === undefined ? '' : _cfg$body,
                _cfg$cc = cfg.cc,
                cc = _cfg$cc === undefined ? '' : _cfg$cc,
                _cfg$bcc = cfg.bcc,
                bcc = _cfg$bcc === undefined ? '' : _cfg$bcc;

            var link = [];
            if (cc) {
                link.push('cc=' + cc);
            }
            if (bcc) {
                link.push('bcc=' + bcc);
            }
            if (subject) {
                link.push('subject=' + encode(subject));
            }
            if (body) {
                link.push('body=' + encode(body));
            }
            return to + '?' + link.join('&') + '&_c=' + new Date().getTime();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                to = _props.to,
                cc = _props.cc,
                bcc = _props.bcc,
                onClick = _props.onClick,
                subject = _props.subject,
                body = _props.body,
                secure = _props.secure,
                props = _objectWithoutProperties(_props, ['to', 'cc', 'bcc', 'onClick', 'subject', 'body', 'secure']);

            var link = this._prepareLink({ to: to, cc: cc, bcc: bcc, subject: subject, body: body });
            var mailto = 'mailto:' + link;
            if (secure === true) {
                props.onClick = this._handleSecureClick(mailto, onClick);
                props.href = 'javascript:void(0)';
            } else {
                props.href = mailto;
            }
            return _react2.default.createElement(
                'a',
                props,
                this.props.children
            );
        }
    }, {
        key: '_handleSecureClick',
        value: function _handleSecureClick(href) {
            var onClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (e) {};

            return function (e) {
                onClick.call(null, e);
                e.preventDefault();
                document.location.href = href;
            };
        }
    }]);

    return Mailto;
}(_react.Component);

exports.default = Mailto;


Mailto.displayName = 'Mailto';

Mailto.defaultProps = {
    event: 'click'
};

Mailto.propTypes = {
    to: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.array.isRequired]),
    cc: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    bcc: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    subject: _propTypes2.default.string,
    body: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string])
};
