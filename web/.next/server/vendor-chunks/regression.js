/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/regression";
exports.ids = ["vendor-chunks/regression"];
exports.modules = {

/***/ "(ssr)/./node_modules/regression/dist/regression.js":
/*!****************************************************!*\
  !*** ./node_modules/regression/dist/regression.js ***!
  \****************************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (module) {\n  'use strict';\n\n  function _defineProperty(obj, key, value) {\n    if (key in obj) {\n      Object.defineProperty(obj, key, {\n        value: value,\n        enumerable: true,\n        configurable: true,\n        writable: true\n      });\n    } else {\n      obj[key] = value;\n    }\n\n    return obj;\n  }\n\n  var _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  function _toConsumableArray(arr) {\n    if (Array.isArray(arr)) {\n      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n        arr2[i] = arr[i];\n      }\n\n      return arr2;\n    } else {\n      return Array.from(arr);\n    }\n  }\n\n  var DEFAULT_OPTIONS = { order: 2, precision: 2, period: null };\n\n  /**\n  * Determine the coefficient of determination (r^2) of a fit from the observations\n  * and predictions.\n  *\n  * @param {Array<Array<number>>} data - Pairs of observed x-y values\n  * @param {Array<Array<number>>} results - Pairs of observed predicted x-y values\n  *\n  * @return {number} - The r^2 value, or NaN if one cannot be calculated.\n  */\n  function determinationCoefficient(data, results) {\n    var predictions = [];\n    var observations = [];\n\n    data.forEach(function (d, i) {\n      if (d[1] !== null) {\n        observations.push(d);\n        predictions.push(results[i]);\n      }\n    });\n\n    var sum = observations.reduce(function (a, observation) {\n      return a + observation[1];\n    }, 0);\n    var mean = sum / observations.length;\n\n    var ssyy = observations.reduce(function (a, observation) {\n      var difference = observation[1] - mean;\n      return a + difference * difference;\n    }, 0);\n\n    var sse = observations.reduce(function (accum, observation, index) {\n      var prediction = predictions[index];\n      var residual = observation[1] - prediction[1];\n      return accum + residual * residual;\n    }, 0);\n\n    return 1 - sse / ssyy;\n  }\n\n  /**\n  * Determine the solution of a system of linear equations A * x = b using\n  * Gaussian elimination.\n  *\n  * @param {Array<Array<number>>} input - A 2-d matrix of data in row-major form [ A | b ]\n  * @param {number} order - How many degrees to solve for\n  *\n  * @return {Array<number>} - Vector of normalized solution coefficients matrix (x)\n  */\n  function gaussianElimination(input, order) {\n    var matrix = input;\n    var n = input.length - 1;\n    var coefficients = [order];\n\n    for (var i = 0; i < n; i++) {\n      var maxrow = i;\n      for (var j = i + 1; j < n; j++) {\n        if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][maxrow])) {\n          maxrow = j;\n        }\n      }\n\n      for (var k = i; k < n + 1; k++) {\n        var tmp = matrix[k][i];\n        matrix[k][i] = matrix[k][maxrow];\n        matrix[k][maxrow] = tmp;\n      }\n\n      for (var _j = i + 1; _j < n; _j++) {\n        for (var _k = n; _k >= i; _k--) {\n          matrix[_k][_j] -= matrix[_k][i] * matrix[i][_j] / matrix[i][i];\n        }\n      }\n    }\n\n    for (var _j2 = n - 1; _j2 >= 0; _j2--) {\n      var total = 0;\n      for (var _k2 = _j2 + 1; _k2 < n; _k2++) {\n        total += matrix[_k2][_j2] * coefficients[_k2];\n      }\n\n      coefficients[_j2] = (matrix[n][_j2] - total) / matrix[_j2][_j2];\n    }\n\n    return coefficients;\n  }\n\n  /**\n  * Round a number to a precision, specificed in number of decimal places\n  *\n  * @param {number} number - The number to round\n  * @param {number} precision - The number of decimal places to round to:\n  *                             > 0 means decimals, < 0 means powers of 10\n  *\n  *\n  * @return {numbr} - The number, rounded\n  */\n  function round(number, precision) {\n    var factor = Math.pow(10, precision);\n    return Math.round(number * factor) / factor;\n  }\n\n  /**\n  * The set of all fitting methods\n  *\n  * @namespace\n  */\n  var methods = {\n    linear: function linear(data, options) {\n      var sum = [0, 0, 0, 0, 0];\n      var len = 0;\n\n      for (var n = 0; n < data.length; n++) {\n        if (data[n][1] !== null) {\n          len++;\n          sum[0] += data[n][0];\n          sum[1] += data[n][1];\n          sum[2] += data[n][0] * data[n][0];\n          sum[3] += data[n][0] * data[n][1];\n          sum[4] += data[n][1] * data[n][1];\n        }\n      }\n\n      var run = len * sum[2] - sum[0] * sum[0];\n      var rise = len * sum[3] - sum[0] * sum[1];\n      var gradient = run === 0 ? 0 : round(rise / run, options.precision);\n      var intercept = round(sum[1] / len - gradient * sum[0] / len, options.precision);\n\n      var predict = function predict(x) {\n        return [round(x, options.precision), round(gradient * x + intercept, options.precision)];\n      };\n\n      var points = data.map(function (point) {\n        return predict(point[0]);\n      });\n\n      return {\n        points: points,\n        predict: predict,\n        equation: [gradient, intercept],\n        r2: round(determinationCoefficient(data, points), options.precision),\n        string: intercept === 0 ? 'y = ' + gradient + 'x' : 'y = ' + gradient + 'x + ' + intercept\n      };\n    },\n    exponential: function exponential(data, options) {\n      var sum = [0, 0, 0, 0, 0, 0];\n\n      for (var n = 0; n < data.length; n++) {\n        if (data[n][1] !== null) {\n          sum[0] += data[n][0];\n          sum[1] += data[n][1];\n          sum[2] += data[n][0] * data[n][0] * data[n][1];\n          sum[3] += data[n][1] * Math.log(data[n][1]);\n          sum[4] += data[n][0] * data[n][1] * Math.log(data[n][1]);\n          sum[5] += data[n][0] * data[n][1];\n        }\n      }\n\n      var denominator = sum[1] * sum[2] - sum[5] * sum[5];\n      var a = Math.exp((sum[2] * sum[3] - sum[5] * sum[4]) / denominator);\n      var b = (sum[1] * sum[4] - sum[5] * sum[3]) / denominator;\n      var coeffA = round(a, options.precision);\n      var coeffB = round(b, options.precision);\n      var predict = function predict(x) {\n        return [round(x, options.precision), round(coeffA * Math.exp(coeffB * x), options.precision)];\n      };\n\n      var points = data.map(function (point) {\n        return predict(point[0]);\n      });\n\n      return {\n        points: points,\n        predict: predict,\n        equation: [coeffA, coeffB],\n        string: 'y = ' + coeffA + 'e^(' + coeffB + 'x)',\n        r2: round(determinationCoefficient(data, points), options.precision)\n      };\n    },\n    logarithmic: function logarithmic(data, options) {\n      var sum = [0, 0, 0, 0];\n      var len = data.length;\n\n      for (var n = 0; n < len; n++) {\n        if (data[n][1] !== null) {\n          sum[0] += Math.log(data[n][0]);\n          sum[1] += data[n][1] * Math.log(data[n][0]);\n          sum[2] += data[n][1];\n          sum[3] += Math.pow(Math.log(data[n][0]), 2);\n        }\n      }\n\n      var a = (len * sum[1] - sum[2] * sum[0]) / (len * sum[3] - sum[0] * sum[0]);\n      var coeffB = round(a, options.precision);\n      var coeffA = round((sum[2] - coeffB * sum[0]) / len, options.precision);\n\n      var predict = function predict(x) {\n        return [round(x, options.precision), round(round(coeffA + coeffB * Math.log(x), options.precision), options.precision)];\n      };\n\n      var points = data.map(function (point) {\n        return predict(point[0]);\n      });\n\n      return {\n        points: points,\n        predict: predict,\n        equation: [coeffA, coeffB],\n        string: 'y = ' + coeffA + ' + ' + coeffB + ' ln(x)',\n        r2: round(determinationCoefficient(data, points), options.precision)\n      };\n    },\n    power: function power(data, options) {\n      var sum = [0, 0, 0, 0, 0];\n      var len = data.length;\n\n      for (var n = 0; n < len; n++) {\n        if (data[n][1] !== null) {\n          sum[0] += Math.log(data[n][0]);\n          sum[1] += Math.log(data[n][1]) * Math.log(data[n][0]);\n          sum[2] += Math.log(data[n][1]);\n          sum[3] += Math.pow(Math.log(data[n][0]), 2);\n        }\n      }\n\n      var b = (len * sum[1] - sum[0] * sum[2]) / (len * sum[3] - Math.pow(sum[0], 2));\n      var a = (sum[2] - b * sum[0]) / len;\n      var coeffA = round(Math.exp(a), options.precision);\n      var coeffB = round(b, options.precision);\n\n      var predict = function predict(x) {\n        return [round(x, options.precision), round(round(coeffA * Math.pow(x, coeffB), options.precision), options.precision)];\n      };\n\n      var points = data.map(function (point) {\n        return predict(point[0]);\n      });\n\n      return {\n        points: points,\n        predict: predict,\n        equation: [coeffA, coeffB],\n        string: 'y = ' + coeffA + 'x^' + coeffB,\n        r2: round(determinationCoefficient(data, points), options.precision)\n      };\n    },\n    polynomial: function polynomial(data, options) {\n      var lhs = [];\n      var rhs = [];\n      var a = 0;\n      var b = 0;\n      var len = data.length;\n      var k = options.order + 1;\n\n      for (var i = 0; i < k; i++) {\n        for (var l = 0; l < len; l++) {\n          if (data[l][1] !== null) {\n            a += Math.pow(data[l][0], i) * data[l][1];\n          }\n        }\n\n        lhs.push(a);\n        a = 0;\n\n        var c = [];\n        for (var j = 0; j < k; j++) {\n          for (var _l = 0; _l < len; _l++) {\n            if (data[_l][1] !== null) {\n              b += Math.pow(data[_l][0], i + j);\n            }\n          }\n          c.push(b);\n          b = 0;\n        }\n        rhs.push(c);\n      }\n      rhs.push(lhs);\n\n      var coefficients = gaussianElimination(rhs, k).map(function (v) {\n        return round(v, options.precision);\n      });\n\n      var predict = function predict(x) {\n        return [round(x, options.precision), round(coefficients.reduce(function (sum, coeff, power) {\n          return sum + coeff * Math.pow(x, power);\n        }, 0), options.precision)];\n      };\n\n      var points = data.map(function (point) {\n        return predict(point[0]);\n      });\n\n      var string = 'y = ';\n      for (var _i = coefficients.length - 1; _i >= 0; _i--) {\n        if (_i > 1) {\n          string += coefficients[_i] + 'x^' + _i + ' + ';\n        } else if (_i === 1) {\n          string += coefficients[_i] + 'x + ';\n        } else {\n          string += coefficients[_i];\n        }\n      }\n\n      return {\n        string: string,\n        points: points,\n        predict: predict,\n        equation: [].concat(_toConsumableArray(coefficients)).reverse(),\n        r2: round(determinationCoefficient(data, points), options.precision)\n      };\n    }\n  };\n\n  function createWrapper() {\n    var reduce = function reduce(accumulator, name) {\n      return _extends({\n        _round: round\n      }, accumulator, _defineProperty({}, name, function (data, supplied) {\n        return methods[name](data, _extends({}, DEFAULT_OPTIONS, supplied));\n      }));\n    };\n\n    return Object.keys(methods).reduce(reduce, {});\n  }\n\n  module.exports = createWrapper();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVncmVzc2lvbi9kaXN0L3JlZ3Jlc3Npb24uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNLElBQTBDO0FBQ2hELElBQUksaUNBQU8sQ0FBQyxNQUFRLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxrR0FBQztBQUMvQixJQUFJLEtBQUssWUFRTjtBQUNILENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0I7QUFDbEMsWUFBWSxzQkFBc0I7QUFDbEM7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0I7QUFDbEMsWUFBWSxRQUFRO0FBQ3BCO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsV0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsUUFBUTtBQUNuQyx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsT0FBTztBQUM3Qix3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpQ0FBaUM7QUFDeEMsOENBQThDO0FBQzlDLE9BQU87QUFDUDs7QUFFQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZWNvbW1lcmNlLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcmVncmVzc2lvbi9kaXN0L3JlZ3Jlc3Npb24uanM/NWM5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydtb2R1bGUnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLnJlZ3Jlc3Npb24gPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcbiAgICB9XG4gIH1cblxuICB2YXIgREVGQVVMVF9PUFRJT05TID0geyBvcmRlcjogMiwgcHJlY2lzaW9uOiAyLCBwZXJpb2Q6IG51bGwgfTtcblxuICAvKipcbiAgKiBEZXRlcm1pbmUgdGhlIGNvZWZmaWNpZW50IG9mIGRldGVybWluYXRpb24gKHJeMikgb2YgYSBmaXQgZnJvbSB0aGUgb2JzZXJ2YXRpb25zXG4gICogYW5kIHByZWRpY3Rpb25zLlxuICAqXG4gICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZGF0YSAtIFBhaXJzIG9mIG9ic2VydmVkIHgteSB2YWx1ZXNcbiAgKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSByZXN1bHRzIC0gUGFpcnMgb2Ygb2JzZXJ2ZWQgcHJlZGljdGVkIHgteSB2YWx1ZXNcbiAgKlxuICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgcl4yIHZhbHVlLCBvciBOYU4gaWYgb25lIGNhbm5vdCBiZSBjYWxjdWxhdGVkLlxuICAqL1xuICBmdW5jdGlvbiBkZXRlcm1pbmF0aW9uQ29lZmZpY2llbnQoZGF0YSwgcmVzdWx0cykge1xuICAgIHZhciBwcmVkaWN0aW9ucyA9IFtdO1xuICAgIHZhciBvYnNlcnZhdGlvbnMgPSBbXTtcblxuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgaWYgKGRbMV0gIT09IG51bGwpIHtcbiAgICAgICAgb2JzZXJ2YXRpb25zLnB1c2goZCk7XG4gICAgICAgIHByZWRpY3Rpb25zLnB1c2gocmVzdWx0c1tpXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgc3VtID0gb2JzZXJ2YXRpb25zLnJlZHVjZShmdW5jdGlvbiAoYSwgb2JzZXJ2YXRpb24pIHtcbiAgICAgIHJldHVybiBhICsgb2JzZXJ2YXRpb25bMV07XG4gICAgfSwgMCk7XG4gICAgdmFyIG1lYW4gPSBzdW0gLyBvYnNlcnZhdGlvbnMubGVuZ3RoO1xuXG4gICAgdmFyIHNzeXkgPSBvYnNlcnZhdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChhLCBvYnNlcnZhdGlvbikge1xuICAgICAgdmFyIGRpZmZlcmVuY2UgPSBvYnNlcnZhdGlvblsxXSAtIG1lYW47XG4gICAgICByZXR1cm4gYSArIGRpZmZlcmVuY2UgKiBkaWZmZXJlbmNlO1xuICAgIH0sIDApO1xuXG4gICAgdmFyIHNzZSA9IG9ic2VydmF0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtLCBvYnNlcnZhdGlvbiwgaW5kZXgpIHtcbiAgICAgIHZhciBwcmVkaWN0aW9uID0gcHJlZGljdGlvbnNbaW5kZXhdO1xuICAgICAgdmFyIHJlc2lkdWFsID0gb2JzZXJ2YXRpb25bMV0gLSBwcmVkaWN0aW9uWzFdO1xuICAgICAgcmV0dXJuIGFjY3VtICsgcmVzaWR1YWwgKiByZXNpZHVhbDtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiAxIC0gc3NlIC8gc3N5eTtcbiAgfVxuXG4gIC8qKlxuICAqIERldGVybWluZSB0aGUgc29sdXRpb24gb2YgYSBzeXN0ZW0gb2YgbGluZWFyIGVxdWF0aW9ucyBBICogeCA9IGIgdXNpbmdcbiAgKiBHYXVzc2lhbiBlbGltaW5hdGlvbi5cbiAgKlxuICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGlucHV0IC0gQSAyLWQgbWF0cml4IG9mIGRhdGEgaW4gcm93LW1ham9yIGZvcm0gWyBBIHwgYiBdXG4gICogQHBhcmFtIHtudW1iZXJ9IG9yZGVyIC0gSG93IG1hbnkgZGVncmVlcyB0byBzb2x2ZSBmb3JcbiAgKlxuICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IC0gVmVjdG9yIG9mIG5vcm1hbGl6ZWQgc29sdXRpb24gY29lZmZpY2llbnRzIG1hdHJpeCAoeClcbiAgKi9cbiAgZnVuY3Rpb24gZ2F1c3NpYW5FbGltaW5hdGlvbihpbnB1dCwgb3JkZXIpIHtcbiAgICB2YXIgbWF0cml4ID0gaW5wdXQ7XG4gICAgdmFyIG4gPSBpbnB1dC5sZW5ndGggLSAxO1xuICAgIHZhciBjb2VmZmljaWVudHMgPSBbb3JkZXJdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHZhciBtYXhyb3cgPSBpO1xuICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhtYXRyaXhbaV1bal0pID4gTWF0aC5hYnMobWF0cml4W2ldW21heHJvd10pKSB7XG4gICAgICAgICAgbWF4cm93ID0gajtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrID0gaTsgayA8IG4gKyAxOyBrKyspIHtcbiAgICAgICAgdmFyIHRtcCA9IG1hdHJpeFtrXVtpXTtcbiAgICAgICAgbWF0cml4W2tdW2ldID0gbWF0cml4W2tdW21heHJvd107XG4gICAgICAgIG1hdHJpeFtrXVttYXhyb3ddID0gdG1wO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaiA9IGkgKyAxOyBfaiA8IG47IF9qKyspIHtcbiAgICAgICAgZm9yICh2YXIgX2sgPSBuOyBfayA+PSBpOyBfay0tKSB7XG4gICAgICAgICAgbWF0cml4W19rXVtfal0gLT0gbWF0cml4W19rXVtpXSAqIG1hdHJpeFtpXVtfal0gLyBtYXRyaXhbaV1baV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfajIgPSBuIC0gMTsgX2oyID49IDA7IF9qMi0tKSB7XG4gICAgICB2YXIgdG90YWwgPSAwO1xuICAgICAgZm9yICh2YXIgX2syID0gX2oyICsgMTsgX2syIDwgbjsgX2syKyspIHtcbiAgICAgICAgdG90YWwgKz0gbWF0cml4W19rMl1bX2oyXSAqIGNvZWZmaWNpZW50c1tfazJdO1xuICAgICAgfVxuXG4gICAgICBjb2VmZmljaWVudHNbX2oyXSA9IChtYXRyaXhbbl1bX2oyXSAtIHRvdGFsKSAvIG1hdHJpeFtfajJdW19qMl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvZWZmaWNpZW50cztcbiAgfVxuXG4gIC8qKlxuICAqIFJvdW5kIGEgbnVtYmVyIHRvIGEgcHJlY2lzaW9uLCBzcGVjaWZpY2VkIGluIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlc1xuICAqXG4gICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRoZSBudW1iZXIgdG8gcm91bmRcbiAgKiBAcGFyYW0ge251bWJlcn0gcHJlY2lzaW9uIC0gVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byByb3VuZCB0bzpcbiAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiAwIG1lYW5zIGRlY2ltYWxzLCA8IDAgbWVhbnMgcG93ZXJzIG9mIDEwXG4gICpcbiAgKlxuICAqIEByZXR1cm4ge251bWJyfSAtIFRoZSBudW1iZXIsIHJvdW5kZWRcbiAgKi9cbiAgZnVuY3Rpb24gcm91bmQobnVtYmVyLCBwcmVjaXNpb24pIHtcbiAgICB2YXIgZmFjdG9yID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogZmFjdG9yKSAvIGZhY3RvcjtcbiAgfVxuXG4gIC8qKlxuICAqIFRoZSBzZXQgb2YgYWxsIGZpdHRpbmcgbWV0aG9kc1xuICAqXG4gICogQG5hbWVzcGFjZVxuICAqL1xuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBsaW5lYXI6IGZ1bmN0aW9uIGxpbmVhcihkYXRhLCBvcHRpb25zKSB7XG4gICAgICB2YXIgc3VtID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgdmFyIGxlbiA9IDA7XG5cbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZGF0YS5sZW5ndGg7IG4rKykge1xuICAgICAgICBpZiAoZGF0YVtuXVsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGxlbisrO1xuICAgICAgICAgIHN1bVswXSArPSBkYXRhW25dWzBdO1xuICAgICAgICAgIHN1bVsxXSArPSBkYXRhW25dWzFdO1xuICAgICAgICAgIHN1bVsyXSArPSBkYXRhW25dWzBdICogZGF0YVtuXVswXTtcbiAgICAgICAgICBzdW1bM10gKz0gZGF0YVtuXVswXSAqIGRhdGFbbl1bMV07XG4gICAgICAgICAgc3VtWzRdICs9IGRhdGFbbl1bMV0gKiBkYXRhW25dWzFdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBydW4gPSBsZW4gKiBzdW1bMl0gLSBzdW1bMF0gKiBzdW1bMF07XG4gICAgICB2YXIgcmlzZSA9IGxlbiAqIHN1bVszXSAtIHN1bVswXSAqIHN1bVsxXTtcbiAgICAgIHZhciBncmFkaWVudCA9IHJ1biA9PT0gMCA/IDAgOiByb3VuZChyaXNlIC8gcnVuLCBvcHRpb25zLnByZWNpc2lvbik7XG4gICAgICB2YXIgaW50ZXJjZXB0ID0gcm91bmQoc3VtWzFdIC8gbGVuIC0gZ3JhZGllbnQgKiBzdW1bMF0gLyBsZW4sIG9wdGlvbnMucHJlY2lzaW9uKTtcblxuICAgICAgdmFyIHByZWRpY3QgPSBmdW5jdGlvbiBwcmVkaWN0KHgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3VuZCh4LCBvcHRpb25zLnByZWNpc2lvbiksIHJvdW5kKGdyYWRpZW50ICogeCArIGludGVyY2VwdCwgb3B0aW9ucy5wcmVjaXNpb24pXTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBwb2ludHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHByZWRpY3QocG9pbnRbMF0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvaW50czogcG9pbnRzLFxuICAgICAgICBwcmVkaWN0OiBwcmVkaWN0LFxuICAgICAgICBlcXVhdGlvbjogW2dyYWRpZW50LCBpbnRlcmNlcHRdLFxuICAgICAgICByMjogcm91bmQoZGV0ZXJtaW5hdGlvbkNvZWZmaWNpZW50KGRhdGEsIHBvaW50cyksIG9wdGlvbnMucHJlY2lzaW9uKSxcbiAgICAgICAgc3RyaW5nOiBpbnRlcmNlcHQgPT09IDAgPyAneSA9ICcgKyBncmFkaWVudCArICd4JyA6ICd5ID0gJyArIGdyYWRpZW50ICsgJ3ggKyAnICsgaW50ZXJjZXB0XG4gICAgICB9O1xuICAgIH0sXG4gICAgZXhwb25lbnRpYWw6IGZ1bmN0aW9uIGV4cG9uZW50aWFsKGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBzdW0gPSBbMCwgMCwgMCwgMCwgMCwgMF07XG5cbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZGF0YS5sZW5ndGg7IG4rKykge1xuICAgICAgICBpZiAoZGF0YVtuXVsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1bVswXSArPSBkYXRhW25dWzBdO1xuICAgICAgICAgIHN1bVsxXSArPSBkYXRhW25dWzFdO1xuICAgICAgICAgIHN1bVsyXSArPSBkYXRhW25dWzBdICogZGF0YVtuXVswXSAqIGRhdGFbbl1bMV07XG4gICAgICAgICAgc3VtWzNdICs9IGRhdGFbbl1bMV0gKiBNYXRoLmxvZyhkYXRhW25dWzFdKTtcbiAgICAgICAgICBzdW1bNF0gKz0gZGF0YVtuXVswXSAqIGRhdGFbbl1bMV0gKiBNYXRoLmxvZyhkYXRhW25dWzFdKTtcbiAgICAgICAgICBzdW1bNV0gKz0gZGF0YVtuXVswXSAqIGRhdGFbbl1bMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGRlbm9taW5hdG9yID0gc3VtWzFdICogc3VtWzJdIC0gc3VtWzVdICogc3VtWzVdO1xuICAgICAgdmFyIGEgPSBNYXRoLmV4cCgoc3VtWzJdICogc3VtWzNdIC0gc3VtWzVdICogc3VtWzRdKSAvIGRlbm9taW5hdG9yKTtcbiAgICAgIHZhciBiID0gKHN1bVsxXSAqIHN1bVs0XSAtIHN1bVs1XSAqIHN1bVszXSkgLyBkZW5vbWluYXRvcjtcbiAgICAgIHZhciBjb2VmZkEgPSByb3VuZChhLCBvcHRpb25zLnByZWNpc2lvbik7XG4gICAgICB2YXIgY29lZmZCID0gcm91bmQoYiwgb3B0aW9ucy5wcmVjaXNpb24pO1xuICAgICAgdmFyIHByZWRpY3QgPSBmdW5jdGlvbiBwcmVkaWN0KHgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3VuZCh4LCBvcHRpb25zLnByZWNpc2lvbiksIHJvdW5kKGNvZWZmQSAqIE1hdGguZXhwKGNvZWZmQiAqIHgpLCBvcHRpb25zLnByZWNpc2lvbildO1xuICAgICAgfTtcblxuICAgICAgdmFyIHBvaW50cyA9IGRhdGEubWFwKGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICByZXR1cm4gcHJlZGljdChwb2ludFswXSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9pbnRzOiBwb2ludHMsXG4gICAgICAgIHByZWRpY3Q6IHByZWRpY3QsXG4gICAgICAgIGVxdWF0aW9uOiBbY29lZmZBLCBjb2VmZkJdLFxuICAgICAgICBzdHJpbmc6ICd5ID0gJyArIGNvZWZmQSArICdlXignICsgY29lZmZCICsgJ3gpJyxcbiAgICAgICAgcjI6IHJvdW5kKGRldGVybWluYXRpb25Db2VmZmljaWVudChkYXRhLCBwb2ludHMpLCBvcHRpb25zLnByZWNpc2lvbilcbiAgICAgIH07XG4gICAgfSxcbiAgICBsb2dhcml0aG1pYzogZnVuY3Rpb24gbG9nYXJpdGhtaWMoZGF0YSwgb3B0aW9ucykge1xuICAgICAgdmFyIHN1bSA9IFswLCAwLCAwLCAwXTtcbiAgICAgIHZhciBsZW4gPSBkYXRhLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBsZW47IG4rKykge1xuICAgICAgICBpZiAoZGF0YVtuXVsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1bVswXSArPSBNYXRoLmxvZyhkYXRhW25dWzBdKTtcbiAgICAgICAgICBzdW1bMV0gKz0gZGF0YVtuXVsxXSAqIE1hdGgubG9nKGRhdGFbbl1bMF0pO1xuICAgICAgICAgIHN1bVsyXSArPSBkYXRhW25dWzFdO1xuICAgICAgICAgIHN1bVszXSArPSBNYXRoLnBvdyhNYXRoLmxvZyhkYXRhW25dWzBdKSwgMik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGEgPSAobGVuICogc3VtWzFdIC0gc3VtWzJdICogc3VtWzBdKSAvIChsZW4gKiBzdW1bM10gLSBzdW1bMF0gKiBzdW1bMF0pO1xuICAgICAgdmFyIGNvZWZmQiA9IHJvdW5kKGEsIG9wdGlvbnMucHJlY2lzaW9uKTtcbiAgICAgIHZhciBjb2VmZkEgPSByb3VuZCgoc3VtWzJdIC0gY29lZmZCICogc3VtWzBdKSAvIGxlbiwgb3B0aW9ucy5wcmVjaXNpb24pO1xuXG4gICAgICB2YXIgcHJlZGljdCA9IGZ1bmN0aW9uIHByZWRpY3QoeCkge1xuICAgICAgICByZXR1cm4gW3JvdW5kKHgsIG9wdGlvbnMucHJlY2lzaW9uKSwgcm91bmQocm91bmQoY29lZmZBICsgY29lZmZCICogTWF0aC5sb2coeCksIG9wdGlvbnMucHJlY2lzaW9uKSwgb3B0aW9ucy5wcmVjaXNpb24pXTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBwb2ludHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHByZWRpY3QocG9pbnRbMF0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvaW50czogcG9pbnRzLFxuICAgICAgICBwcmVkaWN0OiBwcmVkaWN0LFxuICAgICAgICBlcXVhdGlvbjogW2NvZWZmQSwgY29lZmZCXSxcbiAgICAgICAgc3RyaW5nOiAneSA9ICcgKyBjb2VmZkEgKyAnICsgJyArIGNvZWZmQiArICcgbG4oeCknLFxuICAgICAgICByMjogcm91bmQoZGV0ZXJtaW5hdGlvbkNvZWZmaWNpZW50KGRhdGEsIHBvaW50cyksIG9wdGlvbnMucHJlY2lzaW9uKVxuICAgICAgfTtcbiAgICB9LFxuICAgIHBvd2VyOiBmdW5jdGlvbiBwb3dlcihkYXRhLCBvcHRpb25zKSB7XG4gICAgICB2YXIgc3VtID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgdmFyIGxlbiA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGxlbjsgbisrKSB7XG4gICAgICAgIGlmIChkYXRhW25dWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgc3VtWzBdICs9IE1hdGgubG9nKGRhdGFbbl1bMF0pO1xuICAgICAgICAgIHN1bVsxXSArPSBNYXRoLmxvZyhkYXRhW25dWzFdKSAqIE1hdGgubG9nKGRhdGFbbl1bMF0pO1xuICAgICAgICAgIHN1bVsyXSArPSBNYXRoLmxvZyhkYXRhW25dWzFdKTtcbiAgICAgICAgICBzdW1bM10gKz0gTWF0aC5wb3coTWF0aC5sb2coZGF0YVtuXVswXSksIDIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBiID0gKGxlbiAqIHN1bVsxXSAtIHN1bVswXSAqIHN1bVsyXSkgLyAobGVuICogc3VtWzNdIC0gTWF0aC5wb3coc3VtWzBdLCAyKSk7XG4gICAgICB2YXIgYSA9IChzdW1bMl0gLSBiICogc3VtWzBdKSAvIGxlbjtcbiAgICAgIHZhciBjb2VmZkEgPSByb3VuZChNYXRoLmV4cChhKSwgb3B0aW9ucy5wcmVjaXNpb24pO1xuICAgICAgdmFyIGNvZWZmQiA9IHJvdW5kKGIsIG9wdGlvbnMucHJlY2lzaW9uKTtcblxuICAgICAgdmFyIHByZWRpY3QgPSBmdW5jdGlvbiBwcmVkaWN0KHgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3VuZCh4LCBvcHRpb25zLnByZWNpc2lvbiksIHJvdW5kKHJvdW5kKGNvZWZmQSAqIE1hdGgucG93KHgsIGNvZWZmQiksIG9wdGlvbnMucHJlY2lzaW9uKSwgb3B0aW9ucy5wcmVjaXNpb24pXTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBwb2ludHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHByZWRpY3QocG9pbnRbMF0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvaW50czogcG9pbnRzLFxuICAgICAgICBwcmVkaWN0OiBwcmVkaWN0LFxuICAgICAgICBlcXVhdGlvbjogW2NvZWZmQSwgY29lZmZCXSxcbiAgICAgICAgc3RyaW5nOiAneSA9ICcgKyBjb2VmZkEgKyAneF4nICsgY29lZmZCLFxuICAgICAgICByMjogcm91bmQoZGV0ZXJtaW5hdGlvbkNvZWZmaWNpZW50KGRhdGEsIHBvaW50cyksIG9wdGlvbnMucHJlY2lzaW9uKVxuICAgICAgfTtcbiAgICB9LFxuICAgIHBvbHlub21pYWw6IGZ1bmN0aW9uIHBvbHlub21pYWwoZGF0YSwgb3B0aW9ucykge1xuICAgICAgdmFyIGxocyA9IFtdO1xuICAgICAgdmFyIHJocyA9IFtdO1xuICAgICAgdmFyIGEgPSAwO1xuICAgICAgdmFyIGIgPSAwO1xuICAgICAgdmFyIGxlbiA9IGRhdGEubGVuZ3RoO1xuICAgICAgdmFyIGsgPSBvcHRpb25zLm9yZGVyICsgMTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsZW47IGwrKykge1xuICAgICAgICAgIGlmIChkYXRhW2xdWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgICBhICs9IE1hdGgucG93KGRhdGFbbF1bMF0sIGkpICogZGF0YVtsXVsxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsaHMucHVzaChhKTtcbiAgICAgICAgYSA9IDA7XG5cbiAgICAgICAgdmFyIGMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICBmb3IgKHZhciBfbCA9IDA7IF9sIDwgbGVuOyBfbCsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtfbF1bMV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgYiArPSBNYXRoLnBvdyhkYXRhW19sXVswXSwgaSArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjLnB1c2goYik7XG4gICAgICAgICAgYiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmhzLnB1c2goYyk7XG4gICAgICB9XG4gICAgICByaHMucHVzaChsaHMpO1xuXG4gICAgICB2YXIgY29lZmZpY2llbnRzID0gZ2F1c3NpYW5FbGltaW5hdGlvbihyaHMsIGspLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gcm91bmQodiwgb3B0aW9ucy5wcmVjaXNpb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBwcmVkaWN0ID0gZnVuY3Rpb24gcHJlZGljdCh4KSB7XG4gICAgICAgIHJldHVybiBbcm91bmQoeCwgb3B0aW9ucy5wcmVjaXNpb24pLCByb3VuZChjb2VmZmljaWVudHMucmVkdWNlKGZ1bmN0aW9uIChzdW0sIGNvZWZmLCBwb3dlcikge1xuICAgICAgICAgIHJldHVybiBzdW0gKyBjb2VmZiAqIE1hdGgucG93KHgsIHBvd2VyKTtcbiAgICAgICAgfSwgMCksIG9wdGlvbnMucHJlY2lzaW9uKV07XG4gICAgICB9O1xuXG4gICAgICB2YXIgcG9pbnRzID0gZGF0YS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwcmVkaWN0KHBvaW50WzBdKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc3RyaW5nID0gJ3kgPSAnO1xuICAgICAgZm9yICh2YXIgX2kgPSBjb2VmZmljaWVudHMubGVuZ3RoIC0gMTsgX2kgPj0gMDsgX2ktLSkge1xuICAgICAgICBpZiAoX2kgPiAxKSB7XG4gICAgICAgICAgc3RyaW5nICs9IGNvZWZmaWNpZW50c1tfaV0gKyAneF4nICsgX2kgKyAnICsgJztcbiAgICAgICAgfSBlbHNlIGlmIChfaSA9PT0gMSkge1xuICAgICAgICAgIHN0cmluZyArPSBjb2VmZmljaWVudHNbX2ldICsgJ3ggKyAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0cmluZyArPSBjb2VmZmljaWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0cmluZzogc3RyaW5nLFxuICAgICAgICBwb2ludHM6IHBvaW50cyxcbiAgICAgICAgcHJlZGljdDogcHJlZGljdCxcbiAgICAgICAgZXF1YXRpb246IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY29lZmZpY2llbnRzKSkucmV2ZXJzZSgpLFxuICAgICAgICByMjogcm91bmQoZGV0ZXJtaW5hdGlvbkNvZWZmaWNpZW50KGRhdGEsIHBvaW50cyksIG9wdGlvbnMucHJlY2lzaW9uKVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlV3JhcHBlcigpIHtcbiAgICB2YXIgcmVkdWNlID0gZnVuY3Rpb24gcmVkdWNlKGFjY3VtdWxhdG9yLCBuYW1lKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBfcm91bmQ6IHJvdW5kXG4gICAgICB9LCBhY2N1bXVsYXRvciwgX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCBmdW5jdGlvbiAoZGF0YSwgc3VwcGxpZWQpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHNbbmFtZV0oZGF0YSwgX2V4dGVuZHMoe30sIERFRkFVTFRfT1BUSU9OUywgc3VwcGxpZWQpKTtcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1ldGhvZHMpLnJlZHVjZShyZWR1Y2UsIHt9KTtcbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gY3JlYXRlV3JhcHBlcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/regression/dist/regression.js\n");

/***/ })

};
;