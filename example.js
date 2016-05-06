require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs2 = require('react-chartjs-2');

var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

exports['default'] = _react2['default'].createClass({
  displayName: 'BarExample',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h2',
        null,
        'Bar Example'
      ),
      _react2['default'].createElement(_reactChartjs2.Bar, { data: data })
    );
  }
});
module.exports = exports['default'];

},{"react":undefined,"react-chartjs-2":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs2 = require('react-chartjs-2');

var data = {
		labels: ['Red', 'Green', 'Yellow'],
		datasets: [{
				data: [300, 50, 100],
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}]
};

exports['default'] = _react2['default'].createClass({
		displayName: 'DoughnutExample',

		render: function render() {
				return _react2['default'].createElement(
						'div',
						null,
						_react2['default'].createElement(
								'h2',
								null,
								'Doughnut Example'
						),
						_react2['default'].createElement(_reactChartjs2.Doughnut, { data: data })
				);
		}
});
module.exports = exports['default'];

},{"react":undefined,"react-chartjs-2":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs2 = require('react-chartjs-2');

var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

exports['default'] = _react2['default'].createClass({
  displayName: 'LineExample',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h2',
        null,
        'Line Example'
      ),
      _react2['default'].createElement(_reactChartjs2.Line, { data: data })
    );
  }
});
module.exports = exports['default'];

},{"react":undefined,"react-chartjs-2":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs2 = require('react-chartjs-2');

var data = {
		labels: ['Red', 'Green', 'Yellow'],
		datasets: [{
				data: [300, 50, 100],
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}]
};

exports['default'] = _react2['default'].createClass({
		displayName: 'PieExample',

		render: function render() {
				return _react2['default'].createElement(
						'div',
						null,
						_react2['default'].createElement(
								'h2',
								null,
								'Pie Example'
						),
						_react2['default'].createElement(_reactChartjs2.Pie, { data: data })
				);
		}
});
module.exports = exports['default'];

},{"react":undefined,"react-chartjs-2":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs2 = require('react-chartjs-2');

var data = {
  datasets: [{
    data: [11, 16, 7, 3, 14],
    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
    label: 'My dataset' // for legend
  }],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
};

exports['default'] = _react2['default'].createClass({
  displayName: 'PolarExample',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h2',
        null,
        'Polar Example'
      ),
      _react2['default'].createElement(_reactChartjs2.Polar, { data: data })
    );
  }
});
module.exports = exports['default'];

},{"react":undefined,"react-chartjs-2":undefined}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs2 = require('react-chartjs-2');

var data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(179,181,198,0.2)',
    borderColor: 'rgba(179,181,198,1)',
    pointBackgroundColor: 'rgba(179,181,198,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(179,181,198,1)',
    data: [65, 59, 90, 81, 56, 55, 40]
  }, {
    label: 'My Second dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    pointBackgroundColor: 'rgba(255,99,132,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,99,132,1)',
    data: [28, 48, 40, 19, 96, 27, 100]
  }]
};

exports['default'] = _react2['default'].createClass({
  displayName: 'RadarExample',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h2',
        null,
        'Radar Example'
      ),
      _react2['default'].createElement(_reactChartjs2.Radar, { data: data })
    );
  }
});
module.exports = exports['default'];

},{"react":undefined,"react-chartjs-2":undefined}],7:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentsDoughnut = require('./components/doughnut');

var _componentsDoughnut2 = _interopRequireDefault(_componentsDoughnut);

var _componentsPie = require('./components/pie');

var _componentsPie2 = _interopRequireDefault(_componentsPie);

var _componentsLine = require('./components/line');

var _componentsLine2 = _interopRequireDefault(_componentsLine);

var _componentsBar = require('./components/bar');

var _componentsBar2 = _interopRequireDefault(_componentsBar);

var _componentsRadar = require('./components/radar');

var _componentsRadar2 = _interopRequireDefault(_componentsRadar);

var _componentsPolar = require('./components/polar');

var _componentsPolar2 = _interopRequireDefault(_componentsPolar);

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement('hr', null),
				_react2['default'].createElement(_componentsDoughnut2['default'], null),
				_react2['default'].createElement('hr', null),
				_react2['default'].createElement(_componentsPie2['default'], null),
				_react2['default'].createElement('hr', null),
				_react2['default'].createElement(_componentsLine2['default'], null),
				_react2['default'].createElement('hr', null),
				_react2['default'].createElement(_componentsBar2['default'], null),
				_react2['default'].createElement('hr', null),
				_react2['default'].createElement(_componentsRadar2['default'], null),
				_react2['default'].createElement('hr', null),
				_react2['default'].createElement(_componentsPolar2['default'], null)
			);
		}
	}]);

	return App;
})(_react2['default'].Component);

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"./components/bar":1,"./components/doughnut":2,"./components/line":3,"./components/pie":4,"./components/polar":5,"./components/radar":6,"react":undefined,"react-dom":undefined}]},{},[7]);
