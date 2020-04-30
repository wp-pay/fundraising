"use strict";

var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody;

(function () {
  'use strict';
  /**
   * Register ring block type.
   *
   * @param string name     Block name.
   * @param object settings Block settings.
   *
   * @return WPBlock        Block if registered successfully, otherwise "undefined".
   */

  registerBlockType('pronamic-pay/progress', {
    title: 'Progress',
    icon: 'marker',
    category: 'pronamic-pay',
    parent: ['pronamic-pay/crowdfunding-ring'],
    // Attributes.
    attributes: {
      value: {
        type: 'integer',
        default: 0
      }
    },
    styles: [{
      name: 'ring',
      label: 'Ring',
      isDefault: true
    }, {
      name: 'bar',
      label: 'Bar'
    }],
    // Edit.
    edit: function edit(_ref) {
      var attributes = _ref.attributes,
          setAttributes = _ref.setAttributes,
          className = _ref.className;
      var value = attributes.value;
      var degrees = 0;
      var negativeClass = '';

      var onChangeValue = function onChangeValue(value) {
        setAttributes({
          value: value
        });
        degrees = value / 100 * 360;

        if (value > 50) {
          negativeClass = 'ppd-circle--50';
        }
      };

      onChangeValue(value);
      var style = {
        transform: 'rotate( ' + degrees + 'deg )'
      }; // Inspector controls.

      var inspectorControls =
      /*#__PURE__*/
      React.createElement(InspectorControls, null,
      /*#__PURE__*/
      React.createElement(PanelBody, null,
      /*#__PURE__*/
      React.createElement(RangeControl, {
        label: "Percentage",
        value: value,
        onChange: onChangeValue
      })));
      var classes = className + ' ppd-circle ' + negativeClass;
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: classes
        },
        /*#__PURE__*/
        React.createElement("span", {
          className: "ppd-circle__label"
        }, value, "%"),
        /*#__PURE__*/
        React.createElement("div", {
          className: "ppd-circle__slice"
        },
        /*#__PURE__*/
        React.createElement("div", {
          className: "ppd-circle__slice__bar",
          style: style
        }),
        /*#__PURE__*/
        React.createElement("div", {
          className: "ppd-circle__slice__fill"
        })))
      );
    },
    // Save.
    save: function save(_ref2) {
      var attributes = _ref2.attributes;
      var degrees = attributes.value / 100 * 360;
      var classes = 'ppd-circle';

      if (attributes.value > 50) {
        classes += ' ppd-circle--50';
      }

      var style = {
        transform: 'rotate( ' + degrees + 'deg )'
      };
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: classes
        },
        /*#__PURE__*/
        React.createElement("span", {
          className: "ppd-circle__label"
        }, attributes.value, "%"),
        /*#__PURE__*/
        React.createElement("div", {
          className: "ppd-circle__slice"
        },
        /*#__PURE__*/
        React.createElement("div", {
          className: "ppd-circle__slice__bar",
          style: style
        }),
        /*#__PURE__*/
        React.createElement("div", {
          className: "ppd-circle__slice__fill"
        })))
      );
    }
  });
})();
//# sourceMappingURL=block-progress.js.map