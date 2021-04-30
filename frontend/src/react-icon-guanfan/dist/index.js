// eslint-disable-next-line
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var React = _interopDefault(require("react"));
var PropTypes = _interopDefault(require("prop-types"));

function _extends() {
  // eslint-disable-next-line
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var IconTwotoneUserNinjaTurtle = function IconTwotoneUserNinjaTurtle(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M21 13c0-1.6-1.2-3.3-3-4 0-2.8-2.1-6-6-6S6 6.2 6 9c-1.8.7-3 2.4-3 4 0 2.7 2.6 4.4 5.2 4.9.5 1.2 2 2.1 3.8 2.1 1.8 0 3.3-.9 3.8-2.1 2.6-.5 5.2-2.2 5.2-4.9z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 21c-2.8 0-5-1.8-5-4h2c0 1.1 1.3 2 3 2s3-.9 3-2h2c0 2.2-2.2 4-5 4z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M15.1 19l-.1-2c2.1-.1 5.1-1.5 5.1-4 0-1.2-1-2.5-2.4-3.1l-.7-.2V9c0-2.1-1.6-5-5-5S7 6.9 7 9v.7l-.6.2C5 10.5 4 11.8 4 13c0 2.5 3 3.9 5.1 4L9 19c-3.4-.2-7-2.4-7-6 0-1.9 1.2-3.7 3-4.7C5.3 5.1 7.9 2 12 2s6.7 3.1 7 6.3c1.8 1 3 2.8 3 4.7 0 3.6-3.6 5.8-6.9 6z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M17 13h-2c0-1.1-1.4-2-3-2s-3 .9-3 2H7c0-2.2 2.2-4 5-4s5 1.8 5 4zm-7 4v-2c2.5 0 3.9-.8 4-1.1l2 .1c0 2.1-3.1 3-6 3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19 7H5l-2 4h18l-2-4zM9 10c-1.1 0-2-.4-2-1s.9-1 2-1 2 .4 2 1-.9 1-2 1zm6 0c-1.1 0-2-.4-2-1s.9-1 2-1 2 .4 2 1-.9 1-2 1z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M21.2 4l-.8.5c-1.4.8-1.9 2.5-1.1 3.9l.5.6.7-.4c1.4-.8 1.9-2.5 1.1-3.9l-.4-.7z",
    })
  );
};

IconTwotoneUserNinjaTurtle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneUserNinjaTurtle.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneUserStormtrooper = function IconTwotoneUserStormtrooper(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M21 13.695V8a6 6 0 00-6-6H9a6 6 0 00-6 6v5.977c-.546.314-.852.918-.852 1.613 0 .544.227 1.033.588 1.37L3.776 18l.522.005a.965.965 0 00-.254 1.275l.514.844C5.437 21.664 6.327 22 7.735 22H9a2 2 0 002-2h2a2 2 0 002 2h1.047c1.457 0 2.378-.348 3.288-1.943l.535-.876c.234-.384.17-.868-.103-1.181l.285.003 1.22-1.219c.375-.349.61-.855.61-1.419 0-.719-.317-1.345-.882-1.67z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7.267 12.807L11 10H5l.778 2.341a.96.96 0 001.489.466z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M22.946 14.885c0-.912-.345-1.729-.946-2.287V7.632c0-.26-.032-.431-.081-.636C21.43 3.612 18.518 1 15 1H9C5.482 1 2.57 3.612 2.08 6.996c-.048.144-.08.432-.08.592v5.01c-.601.558-.946 1.375-.946 2.287 0 .855.354 1.677.945 2.229l1.027 1.026a2.09 2.09 0 00.278 1.361l.556.911C5.085 22.56 6.503 23 8.255 23H9a3.006 3.006 0 002.829-2h.343a3.006 3.006 0 002.829 2h.743c1.751 0 3.169-.44 4.379-2.563l.574-.939c.248-.407.337-.888.277-1.359l1.003-1.002a3.092 3.092 0 00.969-2.252zM9 3h6a5.003 5.003 0 014.576 3H4.424A5.003 5.003 0 019 3zM4 8h16v5.095a1 1 0 00.501.866c.283.163.445.5.445.924 0 .304-.122.592-.359.814l-.816.816-5.992-3.082a3.945 3.945 0 00-3.559 0l-5.99 3.082-.84-.839a1.082 1.082 0 01-.335-.791c0-.424.162-.761.445-.924a1 1 0 00.5-.866V8zm14.4 11.422C17.625 20.78 16.982 21 15.743 21H15c-.551 0-1-.448-1-1a1 1 0 00-1-1h-2a1 1 0 00-1 1c0 .552-.449 1-1 1h-.745c-1.239 0-1.882-.22-2.672-1.604l-.571-.936c-.022-.037-.008-.089-.009-.093l6.132-3.155a1.9 1.9 0 011.729 0l6.125 3.245-.589.965z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18.222 12.341L19 10h-6l3.733 2.807a.96.96 0 001.489-.466z",
    })
  );
};

IconTwotoneUserStormtrooper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneUserStormtrooper.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneUserScream = function IconTwotoneUserScream(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M17 14c-1.486 1.33-1.872 8-5 8s-2.966-5.888-5-8c-1.173-1.017-3-1.966-3-4 0-.939.905-2.531 2-3 0 0 .916-5 6-5s6 5 6 5c1.017.391 2 2.061 2 3 0 2.112-1.905 2.983-3 4z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 23c-2.616 0-3.472-2.656-4.226-5-.417-1.296-.849-2.636-1.495-3.307-.14-.116-.368-.292-.602-.473C4.548 13.344 3 12.144 3 10c0-1.176.882-2.854 2.126-3.661C5.691 4.257 7.671 1 12 1c4.325 0 6.306 3.251 6.872 5.333C20.063 7.111 21 8.848 21 10c0 2.135-1.486 3.283-2.572 4.122-.267.207-.525.405-.747.61l-.014.013c-.346.31-.763 1.575-1.098 2.592C15.739 19.86 14.705 23 12 23zm0-20C7.798 3 7.015 7.01 6.983 7.181l-.096.527-.492.211C5.676 8.228 5 9.442 5 10c0 1.085.719 1.722 1.903 2.64.264.204.52.403.752.604 1.032 1.066 1.536 2.631 2.022 4.143C10.381 19.569 10.922 21 12 21c1.258 0 2.041-2.378 2.67-4.288.491-1.492.916-2.782 1.655-3.45.262-.242.565-.479.88-.722C18.322 11.677 19 11.075 19 10c0-.573-.772-1.841-1.358-2.066l-.524-.201-.101-.552C16.984 7.014 16.166 3 12 3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12.899 12.129c.469 0-.626-2.112-.94-2.112-.234 0-1.33 2.112-.938 2.112.469 0 .704-.469.939-.469s.627.469.939.469z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M8.001 11a1 1 0 01-.453-1.892C7.582 9.09 9 8.333 9 7a1 1 0 112 0c0 2.588-2.448 3.843-2.553 3.895a1.003 1.003 0 01-.446.105z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M15.997 11a.997.997 0 01-.444-.105C15.448 10.843 13 9.588 13 7a1 1 0 112 0c0 1.342 1.438 2.101 1.453 2.108A1.001 1.001 0 0115.997 11z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 20a1 1 0 01-1-1v-5a1 1 0 112 0v5a1 1 0 01-1 1z",
    })
  );
};

IconTwotoneUserScream.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneUserScream.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneUserAnonymousMask = function IconTwotoneUserAnonymousMask(
  props
) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 22h-.2C5.6 20.6 3 14.6 3 12.4V4.2l.5-.3C3.6 3.8 6.5 2 12 2s8.4 1.8 8.5 1.9l.5.3v8.3c0 2.2-2.6 8.2-8.8 9.5H12zM5 5.3v7.1c0 1.4 2.1 6.3 7 7.5 4.9-1.2 7-6.1 7-7.5V5.3C18 4.9 15.7 4 12 4s-6 .9-7 1.3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M12 3c5.3 0 8 1.7 8 1.7v7.7c0 1.9-2.5 7.3-8 8.6-5.5-1.2-8-6.7-8-8.6V4.7S6.8 3 12 3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M7 13c.5.2.9.4 1.4.7.5.3.7.4 1.1.4h.5c.2 0 .2-.1.3-.1.2-.1.5-.4.6-.6l.3-.4h1.6l.3.4c.1.2.4.5.6.6.1.1.2.1.3.1h.5c.4-.1.6-.1 1.1-.4.4-.2.9-.5 1.4-.7-.2.5-.4.9-.7 1.4-.2.4-.7 1-1.2 1.2l-.9.3c-.3 0-.8 0-1.1-.1-.7-.2-1.2-.6-1.6-1.2l.8.4h-.6l.8-.4c-.2.3-.4.5-.7.7-.3.2-.6.4-.9.5-.3.1-.8.2-1.1.1-.3 0-.6-.1-.9-.3-.6-.3-1-.8-1.2-1.2-.3-.5-.5-.9-.7-1.4zm8-4c-.8 0-1.5.4-2 1 .5.6 1.2 1 2 1s1.5-.4 2-1c-.5-.6-1.2-1-2-1zM9 9c-.8 0-1.5.4-2 1 .5.6 1.2 1 2 1s1.5-.4 2-1c-.5-.6-1.2-1-2-1zm2 9h2v2.8h-2V18zm3-12a1 1 0 100 2 1 1 0 000-2z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M13.3 6.3c.4-.3.8-.5 1.3-.6.4-.2.9-.3 1.4-.2.5.1.9.3 1.2.6.3.3.6.6.8.9-.3-.2-.7-.4-1-.5-.3-.1-.7-.1-1 0-.3.1-.5.3-.7.5-.2.2-.5.5-.6.7l-1.4-1.4zM10 6a1 1 0 100 2 1 1 0 000-2z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M9.3 7.7c-.1-.2-.4-.5-.6-.7-.2-.2-.4-.4-.7-.5-.3-.1-.6-.1-1 0-.3.1-.7.3-1 .5.2-.3.5-.6.8-.9.3-.3.7-.5 1.2-.6.5-.1 1 0 1.4.2.4.2.8.3 1.3.6L9.3 7.7z",
    })
  );
};

IconTwotoneUserAnonymousMask.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneUserAnonymousMask.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneUserKermitTheFrog = function IconTwotoneUserKermitTheFrog(
  props
) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M22 13.68C22 16.6 14.31 20 12 20c-2.31 0-10-3.4-10-6.32 0-1.05.99-2.46 2.37-3.84.18.41.45.8.79 1.16 4.22-.88 5.26-4.28 5.26-4.28s-.38-.37-.95-.77C10.51 5.36 11.42 5 12 5c.58 0 1.49.36 2.53.95-.57.4-.95.77-.95.77s1.04 3.4 5.26 4.28c.34-.36.61-.75.79-1.16 1.38 1.38 2.37 2.79 2.37 3.84z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 21c-2.464 0-11-3.544-11-7.315 0-1.248.896-2.779 2.661-4.551l1.416 1.411C3.546 12.083 3 13.175 3 13.685 3 15.645 9.639 19 12 19c2.361 0 9-3.355 9-5.315 0-.51-.546-1.602-2.077-3.14l1.416-1.411C22.104 10.906 23 12.437 23 13.685 23 17.456 14.464 21 12 21z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M14.045 6.817C12.655 6.04 12.098 6 12 6c-.098 0-.655.04-2.045.817l-.976-1.745C10.249 4.361 11.266 4 12 4s1.751.361 3.021 1.072l-.976 1.745z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M5.157 12a.999.999 0 01-.723-.309c-1.082-1.131-1.59-2.587-1.393-3.994.189-1.352 1.004-2.511 2.294-3.264 2.599-1.52 5.658 1.45 5.788 1.578a.998.998 0 01.253 1.004c-.05.162-1.268 3.971-6.015 4.964a.995.995 0 01-.204.021zM6.97 6.002c-.225 0-.437.047-.625.158-.761.444-1.218 1.071-1.323 1.815-.09.637.093 1.309.505 1.903C7.729 9.235 8.778 7.8 9.209 6.999c-.595-.458-1.484-.997-2.239-.997z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18.843 12c-.068 0-.137-.007-.205-.021-4.747-.993-5.965-4.802-6.015-4.964a.998.998 0 01.253-1.004c.13-.127 3.186-3.098 5.789-1.578 1.289.753 2.104 1.912 2.293 3.264.197 1.407-.311 2.863-1.393 3.994a.997.997 0 01-.722.309zm-4.052-5.001c.432.806 1.48 2.237 3.682 2.879.412-.594.595-1.266.505-1.903-.104-.744-.562-1.371-1.321-1.815-.828-.481-2.094.245-2.866.839zm-1.212-.277h.01-.01z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 17c-3.685 0-6.49-2.116-6.607-2.206l1.215-1.588C6.63 13.223 9.01 15 12 15c2.989 0 5.37-1.777 5.395-1.796l1.213 1.59C18.49 14.884 15.685 17 12 17z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 9a1 1 0 100-2 1 1 0 000 2z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 9a1 1 0 100-2 1 1 0 000 2z",
    })
  );
};

IconTwotoneUserKermitTheFrog.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneUserKermitTheFrog.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneSun = function IconTwotoneSun(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d: "M12 6a6 6 0 100 12 6 6 0 000-12z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 11h3v2h-3v-2zM0 11h3v2H0v-2zM11 0h2v3h-2V0zm0 21h2v3h-2v-3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17.622 19.07l1.414-1.415 2.122 2.122-1.415 1.414-2.12-2.121z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2.843 4.221l1.414-1.414L6.378 4.93 4.964 6.343 2.843 4.22z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17.657 4.963l2.121-2.121 1.414 1.414-2.12 2.121-1.415-1.414z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2.808 19.742L4.93 17.62l1.414 1.414-2.122 2.121-1.414-1.414z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 19c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm0-12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z",
    })
  );
};

IconTwotoneSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneSun.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneUpload = function IconTwotoneUpload(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M18.5 10c-.2 0-.4 0-.6.1C17.5 7.2 15 5 12 5 9.8 5 7.8 6.2 6.8 8h-.3C3.5 8 1 10.5 1 13.5S3.5 19 6.5 19h12c2.5 0 4.5-2 4.5-4.5S21 10 18.5 10z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 10l4 4h-3v5h-2v-5H8l4-4z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18.5 20h-12C2.9 20 0 17.1 0 13.5 0 10 2.8 7.1 6.3 7 7.6 5.1 9.7 4 12 4c3.1 0 5.8 2.1 6.7 5 2.9.1 5.3 2.5 5.3 5.5S21.5 20 18.5 20zM6.5 9C4 9 2 11 2 13.5S4 18 6.5 18h12c1.9 0 3.5-1.6 3.5-3.5S20.4 11 18.5 11h-.3l-1.1.1-.2-1C16.5 7.8 14.5 6 12 6c-1.8 0-3.4 1-4.3 2.5l-.3.5h-.9z",
    })
  );
};

IconTwotoneUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneUpload.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneBox = function IconTwotoneBox(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d: "M4 8v11c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V8H4z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19 21H5c-1.1 0-2-.9-2-2V7c0-.2 0-.4.1-.5l1.8-3c.2-.3.5-.5.9-.5h12.5c.4 0 .7.2.9.5l1.8 3V19c0 1.1-.9 2-2 2zM5 7.3V19h14V7.3L17.7 5H6.3L5 7.3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 7h16v2H4V7zm5 4h6v2H9v-2z",
    })
  );
};

IconTwotoneBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneBox.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneDownload = function IconTwotoneDownload(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M18.5 10c-.2 0-.4 0-.6.1C17.5 7.2 15 5 12 5 9.8 5 7.8 6.2 6.8 8h-.3C3.5 8 1 10.5 1 13.5S3.5 19 6.5 19h12c2.5 0 4.5-2 4.5-4.5S21 10 18.5 10z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 17l-4-4h3V9h2v4h3l-4 4z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18.5 20h-12C2.9 20 0 17.1 0 13.5 0 10 2.8 7.1 6.3 7 7.6 5.1 9.7 4 12 4c3.1 0 5.8 2.1 6.7 5 2.9.1 5.3 2.5 5.3 5.5S21.5 20 18.5 20zM6.5 9C4 9 2 11 2 13.5S4 18 6.5 18h12c1.9 0 3.5-1.6 3.5-3.5S20.4 11 18.5 11h-.3l-1.1.1-.2-1C16.5 7.8 14.5 6 12 6c-1.8 0-3.4 1-4.3 2.5l-.3.5h-.9z",
    })
  );
};

IconTwotoneDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneDownload.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotonePlus = function IconTwotonePlus(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d: "M12 3a9 9 0 100 18 9 9 0 000-18z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm0-18c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M11 7h2v10h-2V7z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 11h10v2H7v-2z",
    })
  );
};

IconTwotonePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotonePlus.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneIdea = function IconTwotoneIdea(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M18 12c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.6 1.7 4.8 4 5.7V21c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3.3c2.3-.9 4-3.1 4-5.7z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 11h3v2h-3v-2zM0 11h3v2H0v-2zM11 0h2v3h-2V0z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17.622 19.07l1.414-1.415 2.122 2.122-1.415 1.414-2.12-2.121z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2.843 4.221l1.414-1.414L6.378 4.93 4.964 6.343 2.843 4.22z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17.657 4.963l2.121-2.121 1.414 1.414-2.12 2.121-1.415-1.414z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2.808 19.742L4.93 17.62l1.414 1.414-2.122 2.121-1.414-1.414z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M13 23h-2c-1.1 0-2-.9-2-2v-2.7c-2.4-1.1-4-3.6-4-6.3 0-3.9 3.1-7 7-7s7 3.1 7 7c0 2.7-1.6 5.2-4 6.3V21c0 1.1-.9 2-2 2zM12 7c-2.8 0-5 2.2-5 5 0 2.1 1.3 4 3.3 4.7l.7.2V21h2v-4.1l.7-.2c2-.7 3.3-2.6 3.3-4.7 0-2.8-2.2-5-5-5zM0 11h3v2H0v-2z",
    })
  );
};

IconTwotoneIdea.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneIdea.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotonePuzzle = function IconTwotonePuzzle(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M20 11h-1V6c0-.6-.4-1-1-1h-5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1H4c-.6 0-1 .4-1 1v5h1c1.1 0 2 .9 2 2s-.9 2-2 2H3v5c0 .6.4 1 1 1h5v-1c0-1.1.9-2 2-2s2 .9 2 2v1h5c.6 0 1-.4 1-1v-5h1c1.1 0 2-.9 2-2s-.9-2-2-2z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18 22h-6v-2c0-.6-.4-1-1-1s-1 .4-1 1v2H4c-1.1 0-2-.9-2-2v-6h2c.6 0 1-.4 1-1s-.4-1-1-1H2V6c0-1.1.9-2 2-2h4c0-1.7 1.3-3 3-3s3 1.3 3 3h4c1.1 0 2 .9 2 2v4c1.7 0 3 1.3 3 3s-1.3 3-3 3v4c0 1.1-.9 2-2 2zm-4-2h4v-6h2c.6 0 1-.4 1-1s-.4-1-1-1h-2V6h-6V4c0-.6-.4-1-1-1s-1 .4-1 1v2H4v4c1.7 0 3 1.3 3 3s-1.3 3-3 3v4h4c0-1.7 1.3-3 3-3s3 1.3 3 3z",
    })
  );
};

IconTwotonePuzzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotonePuzzle.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneRemove = function IconTwotoneRemove(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3 3h18v2H3V3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M16.1 22H7.9c-1 0-1.9-.7-2-1.7L4 4.1l2-.2L7.9 20h8.2L18 3.9l2 .2-1.9 16.1c-.1 1.1-1 1.8-2 1.8z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d: "M5 4l1.9 16.1c.1.5.5.9 1 .9h8.2c.5 0 .9-.4 1-.9L19 4H5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M15 3v1H9V3l1-1h4l1 1z",
    })
  );
};

IconTwotoneRemove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneRemove.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneLockon = function IconTwotoneLockon(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M18 21H6c-.6 0-1-.4-1-1V10c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M14 15c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4-6h-2V7c0-2.2-1.8-4-4-4S8 4.8 8 7v2H6V7c0-3.4 2.6-6 6-6s6 2.6 6 6v2z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18 22H6c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2zM6 10v10h12V10H6z",
    })
  );
};

IconTwotoneLockon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneLockon.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneLockoff = function IconTwotoneLockoff(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M18 21H6c-.6 0-1-.4-1-1V10c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18 9h-2V7c0-2.2-1.8-4-4-4-1.9 0-3.5 1.3-3.9 3.2l-2-.4C6.7 3 9.2 1 12 1c3.4 0 6 2.6 6 6v2zm-4 6c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18 22H6c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2zM6 10v10h12V10H6z",
    })
  );
};

IconTwotoneLockoff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneLockoff.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneKey = function IconTwotoneKey(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d:
        "M12.7 10c-.8-2.3-3-4-5.7-4-3.3 0-6 2.7-6 6s2.7 6 6 6c2.6 0 4.8-1.7 5.7-4H17v3h4v-3h2v-4H12.7zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M7 19c-3.9 0-7-3.1-7-7s3.1-7 7-7c2.7 0 5.2 1.6 6.3 4H24v6h-2v3h-6v-3h-2.7c-1.1 2.4-3.6 4-6.3 4zM7 7c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.1 0 4-1.3 4.7-3.3l.2-.7H18v3h2v-3h2v-2H11.9l-.2-.7C11 8.3 9.1 7 7 7z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M7 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z",
    })
  );
};

IconTwotoneKey.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneKey.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneEmpty = function IconTwotoneEmpty(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".1",
      d: "M3.715 8.541l8.557-4.251 8.556 4.251-8.556 4.252L3.715 8.54z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".85",
      d: "M20.288 8.541L12.287 4.59l-.015 7.878 8.016-3.926z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      d: "M4.344 8.528l7.928-3.94v7.88l-7.928-3.94z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".25",
      d: "M15.44 2.69l7.999 3.53-2.61 2.308-8.557-4.238 3.169-1.6z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".25",
      d: "M12.21 12.833l8.556-4.265 2.61 2.585-8.98 4.527-2.186-2.847z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".25",
      d: "M9.368 2.69L1.59 6.997l2.125 1.545 8.572-4.251-2.919-1.6z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12.272 12.8L3.715 8.567h.054l8.503 4.225v.007zm0 .035l-1.765 3.354-6.792-3.39v4.259l8.53 4.251.027-.013v-8.46zM3.715 8.568z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".25",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M3.715 8.568L.562 11.225l1.165.582-.012.019 8.792 4.363 1.78-3.382-8.572-4.24z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".1",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12.272 12.913v8.383l.027.013 8.53-4.251v-4.62l-6.432 3.242-2.125-2.767zm8.556-4.284v-.061h-.053l-.006.003.06.058zm-2.777 1.293l-5.78 2.87v.01l5.78-2.88z",
    })
  );
};

IconTwotoneEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneEmpty.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneMaintenance = function IconTwotoneMaintenance(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M19.533 13.295c.68-.012 1.255.5 1.32 1.178.041.571-.305 1.1-.846 1.29a1.27 1.27 0 01-.635 1.906 1.27 1.27 0 01-.635 1.904 1.27 1.27 0 00.635-1.904 1.27 1.27 0 00.634-1.905c.541-.191.888-.72.847-1.291a1.303 1.303 0 00-1.32-1.178h-2.486s-2.887.067-3.079-.085c-.088-.193-.088-1.322-.088-2.288-.08-.302-.643-.484-.643-.484H12.23a1.16 1.16 0 00.001 0h1.007v-1.36a.932.932 0 00-.332-.72 3.49 3.49 0 01.84-5.88.317.317 0 01.444.29v3.067l.953.714.952-.714V2.768a.317.317 0 01.445-.29 3.49 3.49 0 01.839 5.88.932.932 0 00-.332.72v4.217h2.486zM9.49 12.66h-.696v-.635a.318.318 0 00-.317-.317H4.025h4.45c.176 0 .318.142.318.317v.635h.696zm-1.007 8.89a.318.318 0 00.312-.318v-.635h-.001v.635a.318.318 0 01-.311.317z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".1",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M20.847 14.424l.006.049c.04.571-.306 1.1-.846 1.29v.001a1.274 1.274 0 00.84-1.34zm-6.908-1.328c-.059-.359-.059-1.329-.059-2.173 0 .844 0 1.814.06 2.173zm-5.146-.436v7.937h.74a.32.32 0 01.191.063l.93.699c.166.123.366.19.572.19h6.456-6.456a.956.956 0 01-.571-.19l-.93-.698a.32.32 0 00-.191-.064h-.741v.635a.318.318 0 01-.317.318H4.03a.318.318 0 01-.317-.318v-9.206c0-.175.142-.318.317-.318h4.445c.175 0 .317.143.317.318v.634zm9.944 6.914zm.635-1.905z",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      opacity: ".85",
      cx: "6.285",
      cy: "19.051",
      r: ".857",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      d:
        "M20.099 15.014a.63.63 0 01-.449.186h-3.81a.318.318 0 000 .635h3.175a.635.635 0 110 1.27h-3.174a.318.318 0 000 .635h2.54a.635.635 0 010 1.27h-2.54a.317.317 0 100 .634h1.904a.635.635 0 010 1.27H11.29a.319.319 0 01-.19-.063l-.93-.699a.956.956 0 00-.572-.19h-.805v-6.667h.753c.253.001.495-.1.673-.279l1.85-1.85a.32.32 0 01.225-.093H13.3v1.905c0 .526.426.952.952.952h5.343a.676.676 0 01.689.588.637.637 0 01-.186.496z",
    })
  );
};

IconTwotoneMaintenance.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneMaintenance.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotonePermission = function IconTwotonePermission(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".2",
      d:
        "M2.229 7.742l8.556-4.252 8.557 4.252v.561l-8.557 4.252L2.23 8.317v-.575z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".1",
      d:
        "M2.229 7.742l8.556 4.251 8.557-4.251v8.516l-8.584 4.252-8.53-4.252V7.742z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      d: "M10.785 20.496v-8.503L2.282 7.768h-.053v8.49l8.53 4.252.026-.014z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      d: "M5.718 6.017l8.543 4.252L16 9.413 7.43 5.16l-1.711.856z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      d: "M14.261 10.269L16 9.413v2.674l-.468-.08-.494.601-.776-.053v-2.286z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".85",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M9.02 15.39l-2.887-1.445c-.16-.08-.295.014-.295.214v1.939c0 .2.134.428.295.508l2.9 1.444c.161.08.295-.014.295-.214v-1.952c-.014-.2-.147-.415-.308-.495zm-.655 1.59l-1.845-.922c-.08-.04-.147-.16-.147-.268 0-.107.067-.16.147-.12l1.845.922c.08.04.147.16.147.268 0 .107-.067.16-.147.12zM6.52 15.242l2.113 1.07c.08.04.147 0 .147-.12 0-.108-.067-.228-.147-.268l-2.113-1.07c-.08-.04-.147.014-.147.12 0 .108.067.228.147.268z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M21.343 15.438v-.548a2.145 2.145 0 00-2.143-2.143 2.145 2.145 0 00-2.143 2.143v.548a.854.854 0 00-.428.738v2.571c0 .473.384.858.857.858h3.428a.858.858 0 00.857-.858v-2.571a.854.854 0 00-.428-.738zM19.2 13.604c.71 0 1.286.577 1.286 1.286v.429h-2.572v-.429c0-.709.577-1.286 1.286-1.286zm.429 4.715v-.596a.643.643 0 10-.857 0v.596h.857z",
    })
  );
};

IconTwotonePermission.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotonePermission.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconPermissionDataerror = function IconPermissionDataerror(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".2",
      d:
        "M2.229 7.742l8.556-4.252 8.557 4.252v.561l-8.557 4.252L2.23 8.317v-.575z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".1",
      d:
        "M2.229 7.742l8.556 4.251 8.557-4.251v8.516l-8.584 4.252-8.53-4.252V7.742z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      d: "M10.785 20.496v-8.503L2.282 7.768h-.053v8.49l8.53 4.252.026-.014z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      d: "M5.718 6.017l8.543 4.252L16 9.413 7.43 5.16l-1.711.856z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      d: "M14.261 10.269L16 9.413v2.674l-.468-.08-.494.601-.776-.053v-2.286z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".85",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M9.02 15.39l-2.887-1.445c-.16-.08-.295.014-.295.214v1.939c0 .2.134.428.295.508l2.9 1.444c.161.08.295-.014.295-.214v-1.952c-.014-.2-.147-.415-.308-.495zm-.655 1.59l-1.845-.922c-.08-.04-.147-.16-.147-.268 0-.107.067-.16.147-.12l1.845.922c.08.04.147.16.147.268 0 .107-.067.16-.147.12zM6.52 15.242l2.113 1.07c.08.04.147 0 .147-.12 0-.108-.067-.228-.147-.268l-2.113-1.07c-.08-.04-.147.014-.147.12 0 .108.067.228.147.268z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M19.2 15.01a2.572 2.572 0 000 5.142 2.572 2.572 0 000-5.142zm0 2.828a.258.258 0 01-.257-.257v-1.028c0-.142.115-.257.257-.257.141 0 .257.115.257.257v1.028a.258.258 0 01-.257.257zm.257 1.029h-.514v-.514h.514v.514z",
    })
  );
};

IconPermissionDataerror.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconPermissionDataerror.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneDevelope = function IconTwotoneDevelope(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M8.337 17.93h-6.82a.593.593 0 000 1.186h18.087a.593.593 0 000-1.186h-6.82v.593H8.337v-.593z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".5",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M3.518 4.884a2 2 0 00-2 2v8.453a2 2 0 002 2h14.086a2 2 0 001.991-1.813h-1.25a1 1 0 01-.927.627H3.704a1 1 0 01-1-1V7.07a1 1 0 011-1h13.714a1 1 0 011 1v2.26h1.186V6.885a2 2 0 00-2-2H3.518z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".1",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M3.518 4.884a2 2 0 00-2 2v8.453a2 2 0 002 2h14.086a2 2 0 001.991-1.813h-3.928a.565.565 0 01-.563-.563v-1.56l-1.133-.978 1.133-.978v-1.55c0-.31.253-.563.563-.563h3.937V6.884a2 2 0 00-2-2H3.518z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M4.239 7.714h11.86v.563H4.239v-.563zm0 1.689h8.895v.563H4.239v-.563zm8.842 1.689H7.448v.563h5.633v-.563zM7.5 12.78h5.633v.563H7.5v-.563zm5.58 1.689H4.239v.563h8.842v-.563z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M15.667 15.524h6.845c.31 0 .563-.253.563-.563V9.895a.565.565 0 00-.563-.563h-6.845a.565.565 0 00-.563.563v1.55l-1.133.978 1.133.979v1.56c0 .309.253.562.563.562zm3.784-4.521a.258.258 0 00-.293.216l-.377 2.485a.257.257 0 10.508.077l.377-2.485a.257.257 0 00-.215-.293zm1.096.586l.625.746c.08.095.08.235 0 .33l-.625.746a.256.256 0 01-.363.032.257.257 0 01-.031-.363l.487-.58-.487-.58a.257.257 0 01.394-.331zm-2.74.911l.488.58a.257.257 0 01-.394.331l-.626-.746a.257.257 0 010-.33l.626-.746a.257.257 0 01.394.33l-.487.581z",
    })
  );
};

IconTwotoneDevelope.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneDevelope.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledList = function IconFilledList(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19 22H5a3 3 0 01-3-3V3a1 1 0 011-1h14a1 1 0 011 1v12h4v4a3 3 0 01-3 3zm-1-5v2a1 1 0 002 0v-2h-2zM6 7v2h8V7H6zm0 4v2h8v-2H6zm0 4v2h5v-2H6z",
    })
  );
};

IconFilledList.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledList.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledArrowdownright = function IconFilledArrowdownright(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M7.707 6.293a1 1 0 00-1.414 1.414L14.586 16H7a1 1 0 100 2h10.003a.996.996 0 00.71-.3.997.997 0 00.287-.697V7a1 1 0 10-2 0v7.586L7.707 6.293z",
    })
  );
};

IconFilledArrowdownright.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledArrowdownright.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledFilter = function IconFilledFilter(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M4.08 3.358h15.84a1 1 0 01.78 1.625l-6.48 8.101a1 1 0 00-.22.625v5.149a1 1 0 01-.4.8l-2 1.5a1 1 0 01-1.6-.8v-6.65a1 1 0 00-.22-.624L3.3 4.983a1 1 0 01.78-1.625z",
    })
  );
};

IconFilledFilter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledFilter.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSetting = function IconFilledSetting(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94 0 .31.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.61 3.61 0 018.4 12c0-1.98 1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
    })
  );
};

IconFilledSetting.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSetting.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledDelete = function IconFilledDelete(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z",
    })
  );
};

IconFilledDelete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledDelete.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSignMention = function IconFilledSignMention(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z",
    })
  );
};

IconFilledSignMention.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSignMention.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSignQuestion = function IconFilledSignQuestion(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0012 6.5a3.501 3.501 0 00-3.433 2.813l1.962.393A1.5 1.5 0 1112 11.5a1 1 0 00-1 1V14h2v-.645z",
    })
  );
};

IconFilledSignQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSignQuestion.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledPlusbg = function IconFilledPlusbg(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M13 13h4a1 1 0 000-2h-4V7a1 1 0 00-2 0v4H7a1 1 0 000 2h4v4a1 1 0 002 0v-4zM6 2h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4z",
    })
  );
};

IconFilledPlusbg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledPlusbg.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledPlus = function IconFilledPlus(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19.313 10.313h-5.625V4.686a1.687 1.687 0 00-3.376 0v5.625H4.689a1.687 1.687 0 000 3.376h5.625v5.624a1.687 1.687 0 103.374 0v-5.625h5.626a1.687 1.687 0 100-3.374z",
    })
  );
};

IconFilledPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledPlus.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledMinus = function IconFilledMinus(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M4.688 10h14.625c.447 0 .876.21 1.193.586.316.375.494.884.494 1.414 0 .53-.178 1.04-.494 1.414-.317.375-.746.586-1.194.586H4.688c-.447 0-.876-.21-1.193-.586A2.202 2.202 0 013 12c0-.53.178-1.04.494-1.414.317-.375.746-.586 1.193-.586z",
    })
  );
};

IconFilledMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledMinus.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledAccount = function IconFilledAccount(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 4a4 4 0 110 8 4 4 0 010-8zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z",
    })
  );
};

IconFilledAccount.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledAccount.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledCoin = function IconFilledCoin(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 11.729c4.971 0 9-1.732 9-3.865S16.971 4 12 4 3 5.731 3 7.864s4.029 3.865 9 3.865zm0 6.178c-3.435 0-6.472-.851-8.388-2.166-.39.435-.612.902-.612 1.395C3 19.269 7.029 21 12 21s9-1.731 9-3.864c0-.493-.221-.96-.612-1.391-1.916 1.311-4.953 2.162-8.388 2.162zm0-4.636c-3.435 0-6.472-.85-8.388-2.165-.39.434-.612.902-.612 1.394 0 2.133 4.029 3.864 9 3.864s9-1.73 9-3.864c0-.492-.221-.96-.612-1.39-1.916 1.31-4.953 2.161-8.388 2.161z",
    })
  );
};

IconFilledCoin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledCoin.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledReset = function IconFilledReset(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M8.223 2.133a.448.448 0 00-.636 0l-4.455 4.49a.456.456 0 000 .64l4.455 4.49c.176.177.46.177.636 0l1.273-1.283a.455.455 0 000-.641L7.982 8.303h5.368c1.313 0 2.572.526 3.5 1.461a5.008 5.008 0 011.45 3.527 5.008 5.008 0 01-1.45 3.527 4.931 4.931 0 01-3.5 1.461h-8.1a.452.452 0 00-.45.454v1.814c0 .25.201.453.45.453h8.1a7.62 7.62 0 005.41-2.258 7.74 7.74 0 002.24-5.45 7.74 7.74 0 00-2.24-5.452 7.62 7.62 0 00-5.41-2.258H7.982l1.514-1.526a.455.455 0 000-.64L8.223 2.132z",
    })
  );
};

IconFilledReset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledReset.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledShare = function IconFilledShare(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18 9.6a3.6 3.6 0 10-3.572-3.156L8.5 9.408a3.6 3.6 0 100 5.183l5.928 2.964a3.6 3.6 0 101.074-2.147l-5.928-2.964a3.632 3.632 0 000-.888l5.928-2.964A3.582 3.582 0 0018 9.6z",
    })
  );
};

IconFilledShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledShare.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledEdit = function IconFilledEdit(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
    })
  );
};

IconFilledEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledEdit.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSignRemove = function IconFilledSignRemove(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z",
    })
  );
};

IconFilledSignRemove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSignRemove.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSignWrong = function IconFilledSignWrong(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    })
  );
};

IconFilledSignWrong.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSignWrong.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledLock = function IconFilledLock(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
    })
  );
};

IconFilledLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledLock.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledAccountround = function IconFilledAccountround(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z",
    })
  );
};

IconFilledAccountround.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledAccountround.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledPin = function IconFilledPin(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z",
    })
  );
};

IconFilledPin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledPin.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledDropdown = function IconFilledDropdown(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M11.588 15.798a.49.49 0 00.18.149.529.529 0 00.463 0 .49.49 0 00.18-.149l4.5-6.066a.446.446 0 00.032-.482.481.481 0 00-.184-.183.526.526 0 00-.26-.067h-9a.528.528 0 00-.258.068.483.483 0 00-.184.183.442.442 0 00.03.481l4.501 6.066z",
    })
  );
};

IconFilledDropdown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledDropdown.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledWater = function IconFilledWater(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 3c4 5.481 6 9.38 6 11.7 0 .827-.155 1.647-.457 2.41a6.33 6.33 0 01-1.3 2.045 5.988 5.988 0 01-1.947 1.365A5.753 5.753 0 0112 21a5.753 5.753 0 01-2.296-.48 5.99 5.99 0 01-1.947-1.365 6.33 6.33 0 01-1.3-2.044A6.574 6.574 0 016 14.7C6 12.38 8 8.481 12 3z",
    })
  );
};

IconFilledWater.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledWater.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledPhone = function IconFilledPhone(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M22.694 19.294l-3.101 3.077c-.458.47-1.065.628-1.656.629-2.614-.078-5.085-1.362-7.113-2.68-3.33-2.423-6.385-5.427-8.303-9.056C1.786 9.742.923 7.799 1.005 6.1c.008-.64.18-1.267.63-1.679l3.102-3.1c.644-.548 1.267-.358 1.679.28l2.495 4.732c.263.56.112 1.16-.28 1.561L7.49 9.038a.561.561 0 00-.117.326c.438 1.696 1.766 3.26 2.939 4.335 1.172 1.076 2.433 2.534 4.07 2.88.201.056.45.075.594-.06l1.33-1.351c.457-.347 1.12-.517 1.608-.233h.024l4.5 2.657c.662.414.73 1.215.257 1.702z",
    })
  );
};

IconFilledPhone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledPhone.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledFax = function IconFilledFax(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M10.9 5.333h5.5v2.223h-5.5V5.333zM7.6 8.667V2h12.1v6.667c.875 0 1.715.35 2.334.976A3.35 3.35 0 0123 12v6.667h-3.3V22H7.6v-3.333H6.5v-10h1.1zm2.2-4.445v4.445h7.7V4.222H9.8zm0 11.111v4.445h7.7v-4.445H9.8zm9.9-4.444c-.292 0-.572.117-.778.325a1.117 1.117 0 000 1.572 1.095 1.095 0 001.556 0 1.117 1.117 0 000-1.572 1.095 1.095 0 00-.778-.325zM3.2 8.667h1.1c.292 0 .572.117.778.325.206.208.322.491.322.786v7.778c0 .294-.116.577-.322.785a1.094 1.094 0 01-.778.326H3.2a2.19 2.19 0 01-1.556-.651A2.234 2.234 0 011 16.444V10.89c0-.59.232-1.155.644-1.571.413-.417.973-.651 1.556-.651z",
    })
  );
};

IconFilledFax.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledFax.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledWhatsapp = function IconFilledWhatsapp(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.953 9.953 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231c.131-.067.259-.14.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.418 1.418 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.011 6.011 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.298 6.298 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249a4.439 4.439 0 00-.162-.016 3.385 3.385 0 00-.403.004v.001z",
    })
  );
};

IconFilledWhatsapp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledWhatsapp.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledCalculate = function IconFilledCalculate(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19.778 2H4.222C3 2 2 3 2 4.222v15.556C2 21 3 22 4.222 22h15.556C21 22 22 21 22 19.778V4.222C22 3 21 2 19.778 2zm-6.045 3.922a.838.838 0 011.178 0l.978.978.978-.978a.838.838 0 011.177 0 .838.838 0 010 1.178l-.977.978.977.978a.838.838 0 010 1.177.838.838 0 01-1.177 0l-.978-.966-.978.977a.838.838 0 01-1.178 0 .838.838 0 010-1.177l.978-.978-.978-.978a.832.832 0 010-1.189zM6.444 7.244h3.89a.84.84 0 01.833.834.84.84 0 01-.834.833H6.444a.84.84 0 01-.833-.833.84.84 0 01.833-.834zm4.167 9.2H9.222v1.39a.84.84 0 01-.833.833.84.84 0 01-.833-.834v-1.389h-1.39a.84.84 0 01-.833-.833.84.84 0 01.834-.833h1.389v-1.39a.84.84 0 01.833-.832.84.84 0 01.833.833v1.389h1.39a.84.84 0 01.832.833.84.84 0 01-.833.833zm7.222 1.39h-3.889a.84.84 0 01-.833-.834.84.84 0 01.833-.833h3.89a.84.84 0 01.833.833.84.84 0 01-.834.833zm0-2.778h-3.889a.84.84 0 01-.833-.834.84.84 0 01.833-.833h3.89a.84.84 0 01.833.833.84.84 0 01-.834.834z",
    })
  );
};

IconFilledCalculate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledCalculate.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledFb = function IconFilledFb(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z",
    })
  );
};

IconFilledFb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledFb.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledReddit = function IconFilledReddit(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M20.548 9.532c-.695 0-1.306.293-1.756.748-1.655-1.162-3.886-1.91-6.359-1.99l1.285-5.872 4.089.931c0 1.016.816 1.846 1.817 1.846 1.02 0 1.84-.852 1.84-1.868 0-1.017-.814-1.869-1.84-1.869-.713 0-1.33.438-1.636 1.035L13.47 1.478c-.227-.062-.45.103-.51.334l-1.41 6.474c-2.453.103-4.66.85-6.32 2.014a2.45 2.45 0 00-1.78-.768c-2.578 0-3.423 3.51-1.062 4.71a5.343 5.343 0 00-.121 1.162c0 3.943 4.377 7.138 9.751 7.138 5.397 0 9.775-3.195 9.775-7.138 0-.395-.042-.809-.143-1.181 2.312-1.205 1.46-4.689-1.103-4.69zm-14.414 4.96c0-1.035.816-1.869 1.84-1.869 1.002 0 1.819.828 1.819 1.869 0 1.016-.816 1.845-1.818 1.845a1.84 1.84 0 01-1.84-1.845zm9.936 4.398c-1.688 1.712-6.45 1.712-8.138 0-.186-.165-.186-.457 0-.645a.44.44 0 01.612 0c1.289 1.341 5.564 1.364 6.909 0a.44.44 0 01.612 0c.19.189.19.48.005.645zm-.038-2.55c-1 0-1.816-.827-1.816-1.843 0-1.035.815-1.868 1.816-1.868 1.02 0 1.841.828 1.841 1.868a1.847 1.847 0 01-1.84 1.843z",
    })
  );
};

IconFilledReddit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledReddit.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSend = function IconFilledSend(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M3.265 2.461l18.426 9.08a.6.6 0 010 1.076l-18.427 9.08a.6.6 0 01-.845-.692l1.825-6.894a.6.6 0 01.482-.438l8.257-1.377a.3.3 0 00.225-.175l.022-.072a.3.3 0 00-.18-.326l-.067-.02L4.68 10.32a.6.6 0 01-.48-.438L2.42 3.154a.6.6 0 01.844-.693h.001z",
    })
  );
};

IconFilledSend.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSend.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledLoad = function IconFilledLoad(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6 2v6l4 4-4 4v6h12v-6l-4-4 4-4V2H6z",
    })
  );
};

IconFilledLoad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledLoad.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledTwitter = function IconFilledTwitter(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M23.111 5.11a9.498 9.498 0 01-2.625.72A4.53 4.53 0 0022.49 3.31a9.105 9.105 0 01-2.889 1.103 4.554 4.554 0 00-7.88 3.115c0 .361.03.708.105 1.039-3.787-.185-7.139-2-9.39-4.765a4.587 4.587 0 00-.624 2.303c0 1.577.813 2.976 2.024 3.786a4.499 4.499 0 01-2.058-.561v.05a4.577 4.577 0 003.65 4.476 4.55 4.55 0 01-1.195.15c-.291 0-.586-.017-.862-.078.59 1.804 2.265 3.13 4.257 3.174a9.154 9.154 0 01-5.649 1.943 8.54 8.54 0 01-1.09-.063 12.826 12.826 0 006.989 2.045c8.383 0 12.966-6.945 12.966-12.964 0-.202-.007-.396-.016-.589A9.087 9.087 0 0023.11 5.11z",
    })
  );
};

IconFilledTwitter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledTwitter.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledYoutube = function IconFilledYoutube(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M22.775 6.376a2.819 2.819 0 00-1.983-1.983c-1.761-.482-8.804-.482-8.804-.482s-7.043 0-8.803.464a2.876 2.876 0 00-1.983 2.001C.738 8.137.738 11.788.738 11.788s0 3.67.464 5.412a2.82 2.82 0 001.983 1.983c1.779.482 8.803.482 8.803.482s7.043 0 8.804-.463a2.82 2.82 0 001.983-1.984c.463-1.76.463-5.411.463-5.411s.019-3.67-.463-5.43zm-13.03 8.785V8.415l5.857 3.373-5.856 3.373z",
    })
  );
};

IconFilledYoutube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledYoutube.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledMenu = function IconFilledMenu(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M3.6 6a1.2 1.2 0 011.2-1.2h14.4a1.2 1.2 0 110 2.4H4.8A1.2 1.2 0 013.6 6z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M3.6 12a1.2 1.2 0 011.2-1.2h14.4a1.2 1.2 0 110 2.4H4.8A1.2 1.2 0 013.6 12z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M3.6 18a1.2 1.2 0 011.2-1.2h14.4a1.2 1.2 0 110 2.4H4.8A1.2 1.2 0 013.6 18z",
    })
  );
};

IconFilledMenu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledMenu.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledMinusmini = function IconFilledMinusmini(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M14.66 12.57H9.34a.591.591 0 010-1.18h5.31a.591.591 0 01.01 1.18zM12.02 6C8.73 6 6 8.68 6 11.98 6 15.28 8.73 18 12.02 18c3.29 0 5.98-2.73 5.98-6.02C18 8.69 15.32 6 12.02 6z",
    })
  );
};

IconFilledMinusmini.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledMinusmini.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledPlusmini = function IconFilledPlusmini(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M14.66 12.57h-2.05v2.09a.591.591 0 01-1.18 0v-2.09H9.34a.591.591 0 010-1.18h2.09V9.34a.591.591 0 011.18 0v2.05h2.05c.32 0 .59.26.59.59-.01.32-.27.59-.59.59zM12.02 6C8.73 6 6 8.68 6 11.98 6 15.28 8.73 18 12.02 18c3.29 0 5.98-2.73 5.98-6.02C18 8.69 15.32 6 12.02 6z",
    })
  );
};

IconFilledPlusmini.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledPlusmini.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSharearrow = function IconFilledSharearrow(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M13 8.328V4l4.707 4.707 3.774 3.774-3.841 3.201L13 19.549v-4.235c-8.146-.614-11 4.1-11 4.1 0-2.937.242-5.985 2.551-8.293C7.235 8.436 11.122 8.246 13 8.328z",
    })
  );
};

IconFilledSharearrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSharearrow.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledDot = function IconFilledDot(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 15a3 3 0 100-6 3 3 0 000 6z",
    })
  );
};

IconFilledDot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledDot.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSubmitted = function IconFilledSubmitted(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm4.51-15.961c.12-.06.25-.05.36.03.08.06.13.16.14.26v.08l-1.27 8.84c-.01.1-.07.19-.16.25-.06.03-.12.05-.18.05h-.06l-.05-.01-4.8-1.71 4.72-5.94-6.11 5.45-2.87-1.02a.348.348 0 01-.23-.31c0-.12.04-.23.12-.3l.07-.05 10.32-5.62zm-6.49 10.6v-2.22l1.87.67-1.24 1.77c-.07.1-.17.15-.28.15-.033 0-.06-.007-.09-.015a1.117 1.117 0 00-.02-.005.39.39 0 01-.23-.27l-.01-.08z",
    })
  );
};

IconFilledSubmitted.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSubmitted.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledAccountmini = function IconFilledAccountmini(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 6l5 6H7l5-6z",
    })
  );
};

IconFilledAccountmini.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledAccountmini.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledFacebook = function IconFilledFacebook(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h7.621v-6.961h-2.343v-2.725h2.343V9.309c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43H16.78c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.351 2.725h-2.365V21H19a2 2 0 002-2V5a2 2 0 00-2-2z",
    })
  );
};

IconFilledFacebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledFacebook.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSkype = function IconFilledSkype(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M20.908 13.22c.054-.4.092-.805.092-1.22a9 9 0 00-9-9c-.415 0-.82.038-1.22.092A5.47 5.47 0 007.5 2 5.5 5.5 0 002 7.5a5.47 5.47 0 001.092 3.28C3.038 11.18 3 11.585 3 12a9 9 0 009 9c.415 0 .82-.038 1.22-.092A5.47 5.47 0 0016.5 22a5.5 5.5 0 005.5-5.5 5.47 5.47 0 00-1.092-3.28zM11.979 17c-2.782 0-4.381-1.458-4.381-2.89 0-.73.764-.963 1.07-.963.707 0 .942.577 1.07.841.717 1.476 1.407 1.282 2.087 1.346.601.057 2.011-.208 2.011-1.238 0-.098.155-.768-1.062-1.101-.778-.212-2.149-.473-3.278-.907-1.062-.408-1.684-1.25-1.684-2.334 0-.545.277-2.754 4.037-2.754 2.508 0 3.846 1.285 3.846 2.416 0 .26-.099.489-.298.696a1.092 1.092 0 01-1.376.115c-.155-.099-.282-.306-.436-.573-.184-.337-.486-.987-1.873-.987-1.347 0-1.72.643-1.72.91 0 .9 1.718 1.089 2.179 1.208 1.684.434 3.976.833 3.976 3.104C16.145 16.497 13.433 17 11.979 17z",
    })
  );
};

IconFilledSkype.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSkype.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledInstagram = function IconFilledInstagram(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M8 3a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5H8zm10 2a1 1 0 110 2 1 1 0 010-2zm-6 2a5 5 0 11-.001 10.001A5 5 0 0112 7zm0 2a3 3 0 100 6 3 3 0 000-6z",
    })
  );
};

IconFilledInstagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledInstagram.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledDiscord = function IconFilledDiscord(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement(
      "g",
      {
        clipPath: "url(#clip0)",
      },
      /*#__PURE__*/ React.createElement("path", {
        d:
          "M22.717 10.55c-.955-3.283-2.033-4.978-2.05-5.009-.061-.075-1.584-1.896-5.253-3.244l-.484 1.32c1.745.641 2.983 1.423 3.664 1.928-2.033-.607-4.452-.979-6.594-.979-2.142 0-4.561.372-6.594.98.68-.506 1.919-1.288 3.664-1.929l-.484-1.32c-3.67 1.348-5.192 3.17-5.253 3.244-.017.03-1.095 1.726-2.05 5.009C.363 13.712.013 18.174 0 18.353c.082.129 1.969 3.35 7.11 3.35l1.304-1.887a13.86 13.86 0 01-4.127-1.862l.78-1.17A12.473 12.473 0 0012 18.876c2.48 0 4.878-.724 6.934-2.092l.78 1.17a13.86 13.86 0 01-4.128 1.862l1.303 1.887c5.142 0 7.029-3.221 7.111-3.35-.013-.179-.362-4.64-1.283-7.803zM8.749 14.228H7.343v-2.343h1.406v2.343zm7.908 0h-1.406v-2.343h1.406v2.343z",
      })
    ),
    /*#__PURE__*/ React.createElement(
      "defs",
      null,
      /*#__PURE__*/ React.createElement(
        "clipPath",
        {
          id: "clip0",
        },
        /*#__PURE__*/ React.createElement("rect", {
          width: "24",
          height: "24",
        })
      )
    )
  );
};

IconFilledDiscord.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledDiscord.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledGithub = function IconFilledGithub(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement(
      "g",
      {
        clipPath: "url(#clip0)",
      },
      /*#__PURE__*/ React.createElement("path", {
        d:
          "M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z",
      })
    ),
    /*#__PURE__*/ React.createElement(
      "defs",
      null,
      /*#__PURE__*/ React.createElement(
        "clipPath",
        {
          id: "clip0",
        },
        /*#__PURE__*/ React.createElement("rect", {
          width: "24",
          height: "24",
        })
      )
    )
  );
};

IconFilledGithub.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledGithub.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpArrowleft = function IconSharpArrowleft(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",
    })
  );
};

IconSharpArrowleft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpArrowleft.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpArrowright = function IconSharpArrowright(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
    })
  );
};

IconSharpArrowright.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpArrowright.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpArrowdown = function IconSharpArrowdown(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
    })
  );
};

IconSharpArrowdown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpArrowdown.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpArrowup = function IconSharpArrowup(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
    })
  );
};

IconSharpArrowup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpArrowup.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpPlus = function IconSharpPlus(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    })
  );
};

IconSharpPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpPlus.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpMinus = function IconSharpMinus(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M13 13h6v-2H5v2h8z",
    })
  );
};

IconSharpMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpMinus.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpStaroff = function IconSharpStaroff(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
    })
  );
};

IconSharpStaroff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpStaroff.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpStaron = function IconSharpStaron(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z",
    })
  );
};

IconSharpStaron.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpStaron.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpStarhalf = function IconSharpStarhalf(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
    })
  );
};

IconSharpStarhalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpStarhalf.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightOut = function IconOutlineLightOut(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M16 7.25a.75.75 0 01.75.75v8a.75.75 0 01-1.5 0V9.81l-6.72 6.72a.75.75 0 01-1.06-1.06l6.72-6.72H8a.75.75 0 010-1.5h8z",
    })
  );
};

IconOutlineLightOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightOut.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightAnnounce = function IconOutlineLightAnnounce(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M18.517 2.55A.5.5 0 0118.8 3v4.04a3.2 3.2 0 010 6.32v4.04a.5.5 0 01-.812.39l-.003-.001-.008-.007-.037-.029-.143-.111a28.792 28.792 0 00-2.347-1.616c-.388-.24-.798-.477-1.215-.696-.163.774-.617 1.37-1.135 1.785-.544.435-1.194.7-1.735.768l1.103 2.941A.5.5 0 0112 21.5H8.4a.5.5 0 01-.468-.324l-2.626-7.004c-.58-.126-1.12-.357-1.574-.74C2.934 12.759 2.5 11.697 2.5 10.2s.434-2.559 1.232-3.232c.78-.66 1.82-.868 2.868-.868h4.5c.577 0 1.292-.196 2.07-.523.77-.324 1.562-.76 2.28-1.203a28.79 28.79 0 002.49-1.727l.037-.029.008-.007.002-.001a.5.5 0 01.53-.06zM6.6 13.3h4V7.1h-4c-.94 0-1.701.191-2.223.632C3.872 8.16 3.5 8.897 3.5 10.2s.372 2.041.877 2.468c.522.44 1.283.632 2.223.632zm5-6.232v6.264c.635.08 1.307.296 1.958.57.834.35 1.673.815 2.417 1.272.72.443 1.358.885 1.825 1.224V4.002c-.467.339-1.106.78-1.825 1.224-.744.458-1.583.921-2.417 1.272-.65.274-1.323.49-1.958.57zM8.954 14.3H6.42l2.325 6.2h2.532l-2.325-6.2zm1.067 0H11.1c.542 0 1.205.173 1.928.465l-2.06 2.06-.947-2.525zm8.779-1.958a2.2 2.2 0 000-4.284v4.284z",
    })
  );
};

IconOutlineLightAnnounce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightAnnounce.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightArrowright = function IconOutlineLightArrowright(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M10.36 6.57l.03.03 4.28 4.62c.14.15.2.35.18.55.02.19-.03.4-.18.55l-4.28 4.62c-.22.24-.59.25-.82.03l-.03-.03a.678.678 0 010-.92l3.93-4.25-3.93-4.24a.678.678 0 010-.92c.22-.24.59-.26.82-.04zm1.63-4.58c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10zm0-.99c6.06 0 10.99 4.93 10.99 10.99 0 6.06-4.93 10.99-10.99 10.99C5.93 22.98 1 18.05 1 11.99 1 5.93 5.93 1 11.99 1z",
    })
  );
};

IconOutlineLightArrowright.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightArrowright.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightFilter = function IconOutlineLightFilter(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18.41 7.31l-3.426 3.043a4.325 4.325 0 00-1.458 3.243v4.127l-3.043 2.031v-6.158a4.325 4.325 0 00-1.458-3.243L5.599 7.311a6.092 6.092 0 01-1.986-3.744h16.774A6.035 6.035 0 0118.41 7.31zM21.225 2H2.784A.783.783 0 002 2.783c0 2.178.93 4.255 2.56 5.703l3.426 3.042c.593.529.93 1.285.93 2.077v7.616a.78.78 0 001.211.647l4.61-3.07a.78.78 0 00.347-.647v-4.546c0-.792.337-1.548.93-2.077l3.425-3.042A7.626 7.626 0 0022 2.783.776.776 0 0021.226 2z",
    })
  );
};

IconOutlineLightFilter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightFilter.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightCoding = function IconOutlineLightCoding(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M13.662 3.84l.1.01c.432.065.729.47.663.902L12.1 19.958a.792.792 0 01-1.566-.24L12.86 4.513a.793.793 0 01.902-.663l-.099-.009zm3.158 2.645a.792.792 0 011.12.033l4.884 5.174a.792.792 0 010 1.087l-4.884 5.175a.79.79 0 01-1.12.032.792.792 0 01-.032-1.12l4.371-4.63-4.37-4.631a.792.792 0 01.031-1.12zm-9.8.032a.792.792 0 011.152 1.087l-4.37 4.631 4.37 4.631a.792.792 0 01-1.152 1.088l-4.884-5.175a.792.792 0 010-1.087L7.02 6.517z",
    })
  );
};

IconOutlineLightCoding.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightCoding.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightAccount = function IconOutlineLightAccount(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12.04 2.29c-1.12 0-2.04.38-2.83 1.17-.79.79-1.18 1.72-1.18 2.84 0 1.12.38 2.04 1.17 2.83.79.79 1.72 1.17 2.83 1.17 1.12 0 2.04-.38 2.83-1.17.79-.79 1.17-1.72 1.17-2.83 0-1.12-.38-2.04-1.17-2.83-.77-.8-1.7-1.18-2.82-1.18zm0-1.29c1.46 0 2.72.52 3.75 1.55 1.03 1.03 1.55 2.29 1.55 3.75s-.52 2.72-1.55 3.75c-1.03 1.03-2.29 1.55-3.75 1.55s-2.72-.52-3.75-1.55C7.26 9.02 6.74 7.75 6.74 6.3c0-1.46.52-2.72 1.55-3.75C9.32 1.52 10.59 1 12.04 1zm4.58 11.92c-.05.02-.13.07-.26.15-.27.17-.56.36-.91.59-.38.24-.87.46-1.46.65-.6.19-1.21.29-1.82.29-.61 0-1.22-.1-1.82-.29-.59-.19-1.08-.41-1.46-.65-.34-.22-.64-.41-.91-.59-.13-.08-.21-.13-.26-.15-.37.01-.71.08-1.02.2-.33.13-.61.3-.83.51-.24.23-.45.51-.64.83-.2.34-.35.7-.47 1.06-.12.38-.22.79-.3 1.23a12.985 12.985 0 00-.2 2.46c0 .79.22 1.39.68 1.83.47.45 1.09.66 1.91.66h10.63c.81 0 1.44-.22 1.91-.66.46-.44.68-1.04.68-1.83a12.985 12.985 0 00-.2-2.46c-.08-.44-.18-.86-.3-1.23-.12-.36-.27-.72-.47-1.06-.19-.33-.4-.61-.64-.83-.22-.21-.5-.38-.83-.51-.3-.13-.64-.19-1.01-.2zm-8.78-1.29c.22 0 .44.09.86.37.26.17.56.37.9.58.29.18.68.36 1.16.51.47.15.95.23 1.42.23s.95-.08 1.42-.23c.48-.16.87-.33 1.16-.51.34-.22.64-.41.9-.58.42-.27.64-.37.86-.37.57 0 1.11.1 1.59.29.48.19.9.45 1.24.78.33.31.62.69.87 1.13.24.42.43.86.57 1.3.14.43.25.9.34 1.4.09.49.15.96.18 1.39.03.42.04.86.04 1.3 0 1.15-.37 2.08-1.09 2.76-.7.68-1.64 1.02-2.78 1.02H6.88c-1.14 0-2.08-.34-2.8-1.02C3.36 21.29 3 20.36 3 19.22c0-.44.01-.88.04-1.3.03-.43.09-.9.18-1.39.09-.5.2-.97.34-1.4.14-.44.34-.88.57-1.3.25-.44.54-.82.87-1.13.34-.33.76-.59 1.24-.78.49-.2 1.03-.29 1.6-.29z",
    })
  );
};

IconOutlineLightAccount.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightAccount.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightList = function IconOutlineLightList(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M16.37 8.49c.38 0 .7.31.7.7 0 .38-.31.7-.7.7H9.41c-.38 0-.7-.31-.7-.7 0-.38.31-.7.7-.7h6.96zm0 2.79c.38 0 .7.31.7.7 0 .38-.31.7-.7.7H9.41c-.38 0-.7-.31-.7-.7 0-.38.31-.7.7-.7h6.96zm0 2.78c.38 0 .7.31.7.7 0 .39-.31.7-.7.7H9.41c-.38 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h6.96zm-.92-10.67h-7.9c-.64 0-1.16.52-1.16 1.16v15.22c0 .64.52 1.16 1.16 1.16h10.67c.64 0 1.16-.52 1.16-1.16V7.33c0-.56-.22-1.08-.61-1.48L16.92 4c-.38-.39-.92-.61-1.47-.61zm0-1.39c.92 0 1.81.37 2.46 1.02l1.85 1.85c.66.66 1.02 1.53 1.02 2.46v12.45c0 1.41-1.14 2.55-2.55 2.55H7.55C6.14 22.33 5 21.19 5 19.78V4.55C5 3.14 6.14 2 7.55 2h7.9z",
    })
  );
};

IconOutlineLightList.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightList.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightHierachyuser = function IconOutlineLightHierachyuser(
  props
) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M21.71 21.71h-6.45v-.64c0-1.78 1.45-3.22 3.22-3.22 1.78 0 3.22 1.45 3.22 3.22v.64h.01zM12 19.09c-3.72 0-6.78-2.86-7.1-6.49h4.48c.36 0 .64-.29.64-.64v-1.29c0-1.73-.98-3.24-2.42-4 .26-.22.48-.47.66-.76 1.07-.65 2.36-1 3.74-1 3.74 0 6.81 2.89 7.11 6.55a3.224 3.224 0 00-3.84 3.16c0 .98.44 1.86 1.13 2.45-.69.36-1.27.9-1.7 1.55-.78.31-1.71.47-2.7.47zm-9.71-7.78v-.64c0-1.78 1.45-3.22 3.22-3.22a3.23 3.23 0 013.22 3.22v.64H2.29zm3.22-9.02a1.931 1.931 0 010 3.86c-1.07 0-1.93-.87-1.93-1.93s.87-1.93 1.93-1.93zm14.91 12.33a1.931 1.931 0 01-3.86 0c0-1.06.87-1.93 1.93-1.93s1.93.86 1.93 1.93zm.16 2.45c.69-.59 1.13-1.47 1.13-2.45 0-1.05-.51-1.99-1.29-2.58 0-4.63-3.79-8.42-8.42-8.42-1.16 0-2.26.21-3.27.61v-.01C8.73 2.45 7.29 1 5.51 1a3.219 3.219 0 00-2.09 5.67 4.514 4.514 0 00-2.42 4v1.29c0 .36.29.64.64.64H3.6c.33 4.32 3.97 7.78 8.4 7.78.72 0 1.42-.08 2.07-.22-.06.29-.09.6-.09.91v1.29c0 .36.29.64.64.64h7.73c.36 0 .64-.29.64-.64v-1.29c.01-1.74-.97-3.24-2.41-4z",
    })
  );
};

IconOutlineLightHierachyuser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightHierachyuser.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightAdmin = function IconOutlineLightAdmin(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M2.72 9.55v5.5h1.72V23H2.72v-6.23H1V9.55c0-1.42 1.16-2.58 2.58-2.58h3.44c1.12 0 2.08.72 2.43 1.72H3.58c-.47 0-.86.39-.86.86zm17.7-2.58h-3.44c-1.12 0-2.08.72-2.43 1.72h5.87c.47 0 .86.39.86.86v5.5h-1.72V23h1.72v-6.23H23V9.55c0-1.42-1.16-2.58-2.58-2.58zm-9.82 6.4c-.2.28-.32.62-.32.99A1.72 1.72 0 1012 12.64c-.37 0-.71.12-.99.32l-.41.41zm4.36 2.74l1.09 1.09-1.22 1.22-1.09-1.09c-.27.16-.57.29-.89.37v1.53h-1.72V17.7c-.31-.08-.61-.21-.89-.37l-1.09 1.09-1.2-1.22 1.09-1.09c-.16-.27-.29-.57-.37-.89H7.13V13.5h1.54c.08-.31.21-.61.37-.89l-1.09-1.09 1.22-1.22 1.09 1.09c.27-.16.57-.29.89-.37V9.51h1.72v1.53c.31.08.61.21.89.37l1.09-1.09 1.22 1.22-1.09 1.09c.16.27.29.57.37.89h1.54v1.72h-1.54c-.1.3-.23.59-.39.87zm2.88-12.53c0 .47.39.86.86.86s.86-.39.86-.86-.39-.86-.86-.86a.86.86 0 00-.86.86zm-1.72 0C16.12 2.16 17.28 1 18.7 1c1.42 0 2.58 1.16 2.58 2.58 0 1.42-1.16 2.58-2.58 2.58-1.42 0-2.58-1.16-2.58-2.58zm-11.68 0c0 .47.39.86.86.86s.86-.39.86-.86-.39-.86-.86-.86a.86.86 0 00-.86.86zm-1.72 0C2.72 2.16 3.88 1 5.3 1c1.42 0 2.58 1.16 2.58 2.58C7.88 5 6.72 6.16 5.3 6.16 3.88 6.16 2.72 5 2.72 3.58zm13.4 15.9V23h1.72v-5.63c-.42.82-1.01 1.54-1.72 2.11zm-8.24 0V23H6.16v-5.63c.42.82 1.01 1.54 1.72 2.11z",
    })
  );
};

IconOutlineLightAdmin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightAdmin.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightDashboard = function IconOutlineLightDashboard(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M9.48 2.38H2.6c-.13 0-.23.1-.23.23v4.12c0 .13.1.23.23.23h6.88c.13 0 .23-.1.23-.23V2.6c0-.12-.1-.22-.23-.22zm0-1.38c.88 0 1.6.72 1.6 1.6v4.12c0 .88-.72 1.6-1.6 1.6H2.6C1.72 8.33 1 7.61 1 6.73V2.6C1 1.72 1.72 1 2.6 1h6.88zM21.4 2.38h-6.87c-.13 0-.23.1-.23.23v9.62c0 .13.1.23.23.23h6.87c.13 0 .23-.1.23-.23V2.6a.238.238 0 00-.23-.22zm0-1.38c.88 0 1.6.72 1.6 1.6v9.62c0 .88-.72 1.6-1.6 1.6h-6.87c-.88 0-1.6-.72-1.6-1.6V2.6c0-.88.72-1.6 1.6-1.6h6.87zm0 16.04h-6.87c-.13 0-.23.1-.23.23v4.12c0 .13.1.23.23.23h6.87c.13 0 .23-.1.23-.23v-4.12c-.01-.13-.11-.23-.23-.23zm-11.92-5.5H2.6c-.13 0-.23.1-.23.23v9.62c0 .13.1.23.23.23h6.88c.13 0 .23-.1.23-.23v-9.62c0-.13-.1-.23-.23-.23zm11.92 4.13c.88 0 1.6.72 1.6 1.6v4.12c0 .88-.72 1.6-1.6 1.6h-6.87c-.88 0-1.6-.72-1.6-1.6v-4.12c0-.88.72-1.6 1.6-1.6h6.87zm-11.92-5.5c.88 0 1.6.72 1.6 1.6v9.62c0 .88-.72 1.6-1.6 1.6H2.6C1.72 23 1 22.28 1 21.4v-9.62c0-.88.72-1.6 1.6-1.6h6.88v-.01z",
    })
  );
};

IconOutlineLightDashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightDashboard.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightBox = function IconOutlineLightBox(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M3.29 7.966l2.58 1.48v5.15l-2.58 1.47v-8.1zm7.74-5.19v3.01l-4.49 2.56-2.6-1.49 7.09-4.08zm.64 4.12l3.83 2.19-3.83 2.19-3.83-2.19 3.83-2.19zm.64-4.12l7.08 4.08-2.6 1.49-4.48-2.56v-3.01zm7.74 13.29l-2.58-1.47v-5.15l2.58-1.47v8.09zm-7.74.7v-4.37l3.87-2.21v4.37l-3.87 2.21zm0 4.49v-3.01l4.48-2.56 2.6 1.49-7.08 4.08zm-1.28-4.49l-3.87-2.21v-4.37l3.87 2.21v4.37zm0 4.48l-7.04-4.1 2.56-1.46 4.48 2.56v3zM2 6.856v10.33c0 .23.12.44.33.55l9.02 5.2c.34.19.65 0 .64 0 7.75-4.46 9.02-5.2 9.02-5.2s.32-.18.32-.55V6.856v-.01a.66.66 0 00-.31-.55s-.01 0-.01-.01l-9.02-5.2a.637.637 0 00-.64 0l-9.02 5.2a.69.69 0 00-.33.57z",
    })
  );
};

IconOutlineLightBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightBox.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightInterface = function IconOutlineLightInterface(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M3.93 7.45c.36 0 .64.29.64.64 0 .36-.29.64-.64.64-.36 0-.64-.29-.64-.64 0-.36.29-.64.64-.64zm6.45-5.16a1.931 1.931 0 011.82 2.57c-.27-.76-.98-1.28-1.8-1.29h-.02c-.84 0-1.56.54-1.82 1.29a1.931 1.931 0 011.82-2.57zm2.58 6.44c.36 0 .64.29.64.64v2.58c0 .36.29.64.64.64.36 0 .64-.29.64-.64V9.38c0-.36.29-.64.64-.64.36 0 .64.29.64.64v3.87c0 .36.29.64.64.64.36 0 .64-.29.64-.64v-2.58c0-.36.29-.64.64-.64.36 0 .64.29.64.64v4.92c0 .9-.21 1.79-.61 2.59-.03.08-.68 1.15-.68 2.72v.8h-7.7v-.42c0-2.4-1.72-3.49-2.01-3.88-.37-.37-.57-.85-.57-1.37v-4.09c0-.36.29-.64.64-.64.36 0 .64.29.64.64v2.58c0 .36.29.64.64.64.35 0 .64-.29.64-.64V5.51c0-.35.27-.63.62-.64l.22.03c.26.08.45.33.45.62v6.45c0 .36.29.64.64.64.36 0 .64-.29.64-.64V9.38c.03-.36.32-.65.68-.65zm7.73-3.86c.36 0 .64.29.64.64 0 .36-.29.64-.64.64-.36 0-.64-.29-.64-.64 0-.35.29-.64.64-.64zM3.93 10.02A1.931 1.931 0 005.82 7.7L8 6.4c.13.15.28.28.44.4v3.33a1.931 1.931 0 00-2.57 1.82v4.09c0 .86.34 1.67.94 2.28.34.43 1.63 1.2 1.63 2.97v1.06c0 .36.29.64.64.64h9.02c.36 0 .64-.29.64-.64V20.9c0-1.21.52-2.09.54-2.15.49-.98.75-2.08.75-3.17v-4.92c0-1.07-.87-1.93-1.93-1.93-.25 0-.49.05-.71.14-.22-.82-.98-1.43-1.87-1.43-.49 0-.95.19-1.29.49-.34-.31-.79-.49-1.29-.49-.23 0-.44.04-.64.11V6.8c.52-.39.91-.94 1.12-1.55l5.37.67a1.931 1.931 0 003.82-.41c0-1.06-.87-1.93-1.93-1.93-.76 0-1.41.44-1.73 1.07l-5.37-.67A3.21 3.21 0 0010.38 1a3.224 3.224 0 00-3.04 4.29L5.16 6.6c-.33-.28-.76-.44-1.23-.44a1.931 1.931 0 000 3.86z",
    })
  );
};

IconOutlineLightInterface.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightInterface.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightUsers = function IconOutlineLightUsers(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M21.74 17.98l-5.2-.04.02-2.58c.01-1.42 1.2-2.57 2.64-2.56 1.42.01 2.57 1.18 2.56 2.6l-.02 2.58zm-2.5-9.05a1.3 1.3 0 011.28 1.3 1.3 1.3 0 01-1.3 1.28 1.3 1.3 0 01-1.28-1.3 1.3 1.3 0 011.3-1.28zm-3.99 8.99l-6.45-.05c0-.34.02-2.9.03-3.22a3.227 3.227 0 013.25-3.2c1.78.01 3.21 1.47 3.2 3.25 0 .32-.02 2.89-.03 3.22zM12.13 6.3c1.07.01 1.93.88 1.92 1.95a1.933 1.933 0 01-1.95 1.92 1.933 1.933 0 01-1.92-1.95c.01-1.07.88-1.93 1.95-1.92zM7.52 17.86l-5.2-.04.02-2.58a2.586 2.586 0 012.6-2.56c1.45.01 2.61 1.18 2.6 2.6l-.02 2.58zM4.97 8.81a1.3 1.3 0 011.28 1.3 1.3 1.3 0 01-1.3 1.28 1.3 1.3 0 01-1.28-1.3 1.3 1.3 0 011.3-1.28zm16.11 3.2c.44-.46.72-1.08.72-1.77a2.58 2.58 0 10-5.16-.04c-.01.68.26 1.31.69 1.77-.32.17-.62.39-.88.64-.09.09-.18.18-.26.27a4.529 4.529 0 00-2.02-2.19c.7-.59 1.14-1.46 1.15-2.44A3.233 3.233 0 0012.12 5a3.233 3.233 0 00-3.25 3.2c-.01.98.42 1.86 1.11 2.46-.9.47-1.63 1.23-2.05 2.16-.08-.1-.16-.19-.25-.28-.26-.26-.56-.48-.87-.66.44-.46.71-1.08.72-1.76a2.58 2.58 0 00-2.56-2.6 2.574 2.574 0 00-2.6 2.56c-.01.69.26 1.31.69 1.78-1.2.65-2.01 1.91-2.03 3.37L1 18.45c0 .36.28.65.64.65.24 0 20.29.17 20.71.17.36 0 .65-.28.65-.64l.03-3.22c.04-1.45-.76-2.73-1.95-3.4z",
    })
  );
};

IconOutlineLightUsers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightUsers.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightBusiness = function IconOutlineLightBusiness(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M21.71 19.39c0 .36-.29.64-.64.64H2.93c-.36 0-.64-.29-.64-.64V9.19l1.03 3.09c.26.79 1 1.32 1.83 1.32h3.63v.64c0 .36.29.64.64.64h5.16c.36 0 .64-.29.64-.64v-.64h3.63c.83 0 1.57-.53 1.83-1.32l1.03-3.09v10.2zm-7.78-7.09v1.29h-3.87V12.3h3.87zm7.53-6.44l-2 6c-.09.26-.33.44-.61.44h-3.63v-.64c0-.36-.29-.64-.64-.64H9.42c-.36 0-.64.29-.64.64v.64H5.15c-.28 0-.52-.18-.61-.44l-2-6h18.92zM8.78 3.93c0-.36.29-.64.64-.64h5.16c.36 0 .64.29.64.64v.64H8.78v-.64zm13.58.64h-5.85v-.64c0-1.07-.87-1.93-1.93-1.93H9.42c-1.07 0-1.93.87-1.93 1.93v.64H1.64c-.35 0-.64.29-.64.64v14.18c0 1.07.87 1.93 1.93 1.93h18.13c1.07 0 1.93-.87 1.93-1.93V5.23c-.01-.43-.27-.66-.63-.66z",
    })
  );
};

IconOutlineLightBusiness.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightBusiness.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightFinancial = function IconOutlineLightFinancial(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M11.36 8.85c-.74.18-1.29.66-1.29 1.21 0 .55.55 1.03 1.29 1.21V8.85zm1.28 3.86v2.42c.74-.18 1.29-.66 1.29-1.21 0-.54-.54-1.02-1.29-1.21zM12 6.19c.36 0 .64.29.64.64v.7c.58.09 1.13.31 1.57.64.64.48 1.01 1.17 1.01 1.88 0 .36-.29.64-.64.64-.36 0-.64-.29-.64-.64 0-.55-.55-1.03-1.29-1.21v2.55c.58.09 1.13.31 1.57.64.64.48 1.01 1.17 1.01 1.88s-.37 1.4-1.01 1.88c-.44.33-.98.55-1.57.64v.7c0 .36-.29.64-.64.64-.35 0-.64-.29-.64-.64v-.7c-.58-.09-1.13-.31-1.57-.64-.64-.48-1.01-1.17-1.01-1.88 0-.36.29-.64.64-.64.35 0 .64.29.64.64 0 .55.55 1.03 1.29 1.21v-2.55c-.58-.09-1.13-.31-1.57-.64-.64-.48-1.01-1.17-1.01-1.88s.37-1.4 1.01-1.88c.44-.33.98-.55 1.57-.64v-.7c0-.35.28-.64.64-.64zm0-1.28c-3.91 0-7.09 3.18-7.09 7.09 0 3.91 3.18 7.09 7.09 7.09 3.91 0 7.09-3.18 7.09-7.09 0-3.91-3.18-7.09-7.09-7.09zm0-1.29c4.62 0 8.38 3.76 8.38 8.38 0 4.62-3.76 8.38-8.38 8.38-4.62 0-8.38-3.76-8.38-8.38 0-4.62 3.76-8.38 8.38-8.38zm0-1.33c-5.35 0-9.71 4.36-9.71 9.71 0 5.35 4.36 9.71 9.71 9.71 5.35 0 9.71-4.36 9.71-9.71 0-5.35-4.36-9.71-9.71-9.71zM12 1c2.93 0 5.69 1.15 7.77 3.23C21.85 6.31 23 9.07 23 12c0 2.93-1.15 5.69-3.23 7.77A10.925 10.925 0 0112 23c-2.93 0-5.69-1.15-7.77-3.23A10.925 10.925 0 011 12c0-2.93 1.15-5.69 3.23-7.77C6.31 2.15 9.07 1 12 1z",
    })
  );
};

IconOutlineLightFinancial.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightFinancial.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightReport = function IconOutlineLightReport(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M4.87 3.2L3.2 4.87h1.67V3.2zM6.2 8.78h1.29v1.94H6.2V8.78zm3.86-1.94v3.87H8.78V6.84h1.28zm2.58 2.58v1.29h-1.29V9.42h1.29zm6.41-5.79h-1.29v7.79c.45.04.88.14 1.29.28V3.63zm-8.34 1.92v.01H8.13c-.35 0-.64.28-.64.64v1.29H5.56c-.35 0-.64.28-.64.64v3.21c0 .35.28.64.64.64h7.72c.35 0 .64-.28.64-.64V8.76c0-.35-.28-.64-.64-.64h-1.93V6.19c0-.35-.28-.64-.64-.64zm6.46 8.39c.35 0 .64.28.64.63.23.07.45.19.62.35.26.24.28.65.04.91-.24.26-.65.28-.91.04-.11-.1-.43-.14-.57-.04-.1.06-.13.19-.1.25.14.25.85.33 1.39.75 1.1.86.72 2.41-.46 2.86v.06c0 .36-.29.64-.64.64-.36 0-.64-.29-.64-.64v-.01c-.29-.07-.56-.18-.77-.32a.644.644 0 01.7-1.08c.26.17.7.24.91.14.14-.07.25-.2.26-.34.03-.29-.42-.44-.68-.55-.4-.16-.91-.36-1.2-.89-.42-.75-.05-1.74.77-2.08v-.03c0-.36.29-.65.64-.65zm.03-1.25a4.511 4.511 0 000 9.02 4.511 4.511 0 000-9.02zm-.73-10.4H6.16v3.22c0 .36-.29.64-.64.64H2.29V21.7h11.27c-.47-.38-.88-.83-1.21-1.33H4.23c-.36 0-.64-.29-.64-.64 0-.35.29-.64.64-.64h7.49c-.14-.41-.24-.84-.29-1.29h-7.2c-.36 0-.64-.29-.64-.64 0-.35.29-.64.64-.64h7.21c.05-.45.16-.88.31-1.29H4.23c-.36 0-.64-.29-.64-.64 0-.35.29-.64.64-.64h8.18a5.812 5.812 0 014.07-2.49V2.29h-.01zM17.12 1c.36 0 .64.29.64.64v.7h1.93c.36 0 .64.29.64.64v9.34a5.788 5.788 0 012.66 4.87c0 3.14-2.52 5.8-5.85 5.8H1.64a.63.63 0 01-.64-.63V5.51c0-.17.07-.34.19-.46l3.87-3.87c.12-.11.28-.18.45-.18h11.61z",
    })
  );
};

IconOutlineLightReport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightReport.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLightWallet = function IconOutlineLightWallet(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M17.87 3.38H3.97c-.87 0-1.58.71-1.58 1.58v.12c.46-.29 1-.46 1.58-.46h15.45c-.16-.7-.79-1.24-1.55-1.24zm-.43 9.15c.4 0 .72.32.72.72 0 .4-.32.72-.72.72-.4 0-.72-.32-.72-.72 0-.4.33-.72.72-.72zm4.17-1.12h-4.42c-.99 0-1.79.8-1.79 1.79s.8 1.79 1.79 1.79h4.42v-3.58zm-1.58-5.4H3.97c-.87 0-1.58.71-1.58 1.58v11.12c0 .87.71 1.58 1.58 1.58h16.06c.87 0 1.58-.71 1.58-1.58v-2.34h-4.43c-1.75 0-3.18-1.43-3.18-3.18 0-1.75 1.43-3.18 3.18-3.18h4.43V7.6c0-.88-.71-1.59-1.58-1.59zM17.87 2c1.56 0 2.84 1.21 2.96 2.74C22.08 5.09 23 6.24 23 7.6v11.12a2.97 2.97 0 01-2.97 2.97H3.97A2.985 2.985 0 011 18.71V4.97A2.97 2.97 0 013.97 2h13.9z",
    })
  );
};

IconOutlineLightWallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLightWallet.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineTransparent = function IconOutlineTransparent(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M14.86 0C9.82 0 5.718 4.1 5.718 9.14a9.1 9.1 0 002.202 5.945l-.927.927L6 15.017l-6 6L2.983 24l6-6-.995-.994.927-.927a9.1 9.1 0 005.944 2.202c5.04 0 9.141-4.1 9.141-9.14C24 4.1 19.9 0 14.86 0zM2.982 22.011l-.994-.994 4.01-4.011.995.994-4.01 4.011zm11.876-5.136c-4.264 0-7.734-3.47-7.734-7.734 0-4.265 3.47-7.735 7.734-7.735 4.265 0 7.735 3.47 7.735 7.735 0 4.264-3.47 7.734-7.735 7.734zm0-9.844c-1.163 0-2.109.947-2.109 2.11 0 1.163.946 2.109 2.11 2.109 1.163 0 2.109-.946 2.109-2.11 0-1.162-.947-2.109-2.11-2.109zm0 2.813a.704.704 0 010-1.406.704.704 0 010 1.406zM8.631 8.78c.11-.186 2.763-4.561 6.228-4.561 3.466 0 6.118 4.375 6.23 4.561l.214.36-.215.361c-.111.186-2.763 4.562-6.229 4.562S8.742 9.686 8.631 9.5l-.215-.36.215-.36zm1.442.36c.658.961 2.61 3.516 4.786 3.516 1.878 0 3.732-1.97 4.787-3.515-.659-.962-2.61-3.516-4.787-3.516-1.877 0-3.73 1.97-4.786 3.515z",
    })
  );
};

IconOutlineTransparent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineTransparent.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineMore = function IconOutlineMore(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 14a2 2 0 100-4 2 2 0 000 4z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 14a2 2 0 100-4 2 2 0 000 4z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 14a2 2 0 100-4 2 2 0 000 4z",
    })
  );
};

IconOutlineMore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineMore.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowrightround = function IconOutlineArrowrightround(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M11.47 17.031a.751.751 0 001.061 0l4.5-4.5a.75.75 0 000-1.062l-4.5-4.5a.75.75 0 10-1.062 1.062l3.22 3.219H7.5a.75.75 0 100 1.5h7.19l-3.22 3.219a.75.75 0 000 1.062z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 23a11 11 0 100-22 11 11 0 000 22zm0-1.375a9.625 9.625 0 110-19.25 9.625 9.625 0 010 19.25z",
    })
  );
};

IconOutlineArrowrightround.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowrightround.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowlefttail = function IconOutlineArrowlefttail(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12.707 4.293a1 1 0 010 1.414L6.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z",
    })
  );
};

IconOutlineArrowlefttail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowlefttail.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowrighttail = function IconOutlineArrowrighttail(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M11.293 4.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L17.586 12l-6.293-6.293a1 1 0 010-1.414z",
    })
  );
};

IconOutlineArrowrighttail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowrighttail.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowuptail = function IconOutlineArrowuptail(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12.707 4.293a1 1 0 00-1.414 0l-7 7a1 1 0 101.414 1.414L11 7.414v11.711c0 .483.448.875 1 .875s1-.392 1-.875V7.415l5.293 5.292a1 1 0 001.414-1.414l-7-7z",
    })
  );
};

IconOutlineArrowuptail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowuptail.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowdowntail = function IconOutlineArrowdowntail(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M11 4.875c0-.483.448-.875 1-.875s1 .392 1 .875v11.71l5.293-5.292a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L11 16.586V4.875z",
    })
  );
};

IconOutlineArrowdowntail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowdowntail.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowleftround = function IconOutlineArrowleftround(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12.783 6.969a.752.752 0 010 1.062l-3.22 3.219H17a.75.75 0 110 1.5H9.562l3.22 3.219a.753.753 0 01-.53 1.282.75.75 0 01-.531-.22l-4.5-4.5a.75.75 0 010-1.062l4.5-4.5a.75.75 0 011.062 0z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 23a11 11 0 110-22 11 11 0 010 22zm0-1.375a9.625 9.625 0 100-19.25 9.625 9.625 0 000 19.25z",
    })
  );
};

IconOutlineArrowleftround.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowleftround.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineCross = function IconOutlineCross(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M13.59 12l4.454-4.453a1.126 1.126 0 00-1.59-1.594L12 10.406 7.547 5.953a1.127 1.127 0 10-1.594 1.594L10.406 12l-4.453 4.453a1.127 1.127 0 001.594 1.594L12 13.594l4.453 4.453a1.127 1.127 0 001.594-1.594L13.59 12z",
    })
  );
};

IconOutlineCross.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineCross.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineCheck = function IconOutlineCheck(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M20.048 6.352a1.2 1.2 0 010 1.696l-9.6 9.6a1.2 1.2 0 01-1.696 0l-4.8-4.8a1.2 1.2 0 011.696-1.696L9.6 15.103l8.752-8.751a1.2 1.2 0 011.696 0z",
    })
  );
};

IconOutlineCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineCheck.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineEdit = function IconOutlineEdit(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M19.4 7.34L16.66 4.6A2 2 0 0014 4.53l-9 9a2 2 0 00-.57 1.21L4 18.91A1 1 0 005 20h.09l4.17-.38a2 2 0 001.21-.57l9-9a1.92 1.92 0 00-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7-5.62 5.6zM16 10.68L13.32 8l1.95-2L18 8.73l-2 1.95z",
    })
  );
};

IconOutlineEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineEdit.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineCrossround = function IconOutlineCrossround(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M8.47 8.47a.75.75 0 011.06 0L12 10.94l2.47-2.47a.75.75 0 111.06 1.06L13.06 12l2.47 2.47a.75.75 0 11-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 01-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 010-1.06z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19.778 19.778A11 11 0 114.222 4.222a11 11 0 0115.556 15.556zm-.972-.972A9.625 9.625 0 105.194 5.194a9.625 9.625 0 0013.612 13.612z",
    })
  );
};

IconOutlineCrossround.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineCrossround.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineCopy = function IconOutlineCopy(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M8.4 8.4V4.8c0-.99.81-1.8 1.8-1.8h9A1.8 1.8 0 0121 4.8v9a1.8 1.8 0 01-1.8 1.8h-3.6v3.6a1.8 1.8 0 01-1.8 1.8h-9A1.8 1.8 0 013 19.2v-9c0-.99.81-1.8 1.8-1.8h3.6zm1.8 0h3.6a1.8 1.8 0 011.8 1.8v3.6h3.6v-9h-9v3.6zm-5.4 1.8v9h9v-9h-9z",
    })
  );
};

IconOutlineCopy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineCopy.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineCalendarweek = function IconOutlineCalendarweek(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 10v2h10V9H7v1z",
    })
  );
};

IconOutlineCalendarweek.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineCalendarweek.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineRefresh = function IconOutlineRefresh(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M6.109 7.808l1.594-.488a1 1 0 01.585 1.913l-3.825 1.17a1 1 0 01-1.25-.665l-1.17-3.825a1 1 0 011.914-.585l.44 1.441c2.408-3.709 7.185-5.304 11.426-3.566a9.381 9.381 0 015.38 5.831 1 1 0 11-1.905.608 7.38 7.38 0 00-13.19-1.834zm12.327 8.195l-1.775.443a.999.999 0 01-.846-1.778.999.999 0 01.362-.162l3.643-.909a.997.997 0 01.61-.08 1 1 0 01.84.75l.968 3.88a1 1 0 01-1.94.484l-.33-1.322a9.381 9.381 0 01-16.384-1.796l-.26-.634a1 1 0 011.85-.758l.26.633a7.38 7.38 0 0013.002 1.249z",
    })
  );
};

IconOutlineRefresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineRefresh.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineDashboard = function IconOutlineDashboard(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M9 3.8H4a.2.2 0 00-.2.2v5c0 .11.09.2.2.2h5a.2.2 0 00.2-.2V4a.2.2 0 00-.2-.2zM4 2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V4a2 2 0 00-2-2H4zm11 1.8h5c.11 0 .2.09.2.2v5a.2.2 0 01-.2.2h-5a.2.2 0 01-.2-.2V4c0-.11.09-.2.2-.2zM13 4a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V4zm2 10.8h5c.11 0 .2.09.2.2v5a.2.2 0 01-.2.2h-5a.2.2 0 01-.2-.2v-5c0-.11.09-.2.2-.2zm-2 .2a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5zm-9-.2h5c.11 0 .2.09.2.2v5a.2.2 0 01-.2.2H4a.2.2 0 01-.2-.2v-5c0-.11.09-.2.2-.2zM2 15a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z",
    })
  );
};

IconOutlineDashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineDashboard.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineList1 = function IconOutlineList1(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z",
    })
  );
};

IconOutlineList1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineList1.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineColumn = function IconOutlineColumn(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M5 4h13v2.444H5V4zm1 4.667H3V4.222C3 2.995 3.951 2 5.125 2h12.75C19.049 2 20 2.995 20 4.222v2.222c1.105 0 2 .995 2 2.223v2.222C22 12.116 21.105 13 20 13V19.444c0 1.228-.951 2.223-2.125 2.223H5.125C3.951 21.667 3 20.672 3 19.444V10.89h3V8.667zM8 13H5v2h13v-2H8zm0-4.333v2.222h12V8.667H8zm-3 8.555h13V19.5H5v-2.278z",
    })
  );
};

IconOutlineColumn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineColumn.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineAccount = function IconOutlineAccount(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12 2C6.579 2 2 6.579 2 12c0 3.189 1.592 6.078 4 7.924V20h.102C7.77 21.245 9.813 22 12 22s4.23-.755 5.898-2H18v-.076c2.408-1.846 4-4.734 4-7.924 0-5.421-4.579-10-10-10zM8.074 18.927A3.002 3.002 0 0111 16.573h2a3.003 3.003 0 012.926 2.354A7.82 7.82 0 0112 20a7.82 7.82 0 01-3.926-1.073zm9.536-1.286A5.007 5.007 0 0013 14.573h-2a5.007 5.007 0 00-4.61 3.068C4.923 16.182 4 14.176 4 12c0-4.337 3.663-8 8-8s8 3.663 8 8c0 2.176-.923 4.182-2.39 5.641z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12 6c-2.28 0-4 1.72-4 4 0 2.28 1.72 4 4 4 2.28 0 4-1.72 4-4 0-2.28-1.72-4-4-4zm0 6c-1.178 0-2-.822-2-2s.822-2 2-2 2 .822 2 2-.822 2-2 2z",
    })
  );
};

IconOutlineAccount.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineAccount.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineSetting = function IconOutlineSetting(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M11.293 4.293A1 1 0 0113 5c0 1.693 2.046 2.54 3.243 1.343a1 1 0 011.414 1.414C16.46 8.954 17.307 11 19 11a1 1 0 010 2c-1.693 0-2.54 2.046-1.343 3.243a1 1 0 11-1.414 1.414C15.046 16.46 13 17.308 13 19a1 1 0 01-2 0c0-1.693-2.046-2.54-3.243-1.343a1 1 0 01-1.414-1.414C7.54 15.046 6.692 13 5 13a1 1 0 110-2c1.693 0 2.54-2.046 1.343-3.243a1 1 0 111.414-1.414C8.954 7.54 11 6.692 11 5a1 1 0 01.293-.707zM9.957 2.799a3 3 0 00-.95 1.978 3 3 0 00-4.23 4.231 3 3 0 000 5.984 3 3 0 004.23 4.23 3 3 0 005.985 0 3 3 0 004.23-4.23 3 3 0 000-5.984 3 3 0 00-4.23-4.231 3 3 0 00-5.035-1.978zm.629 7.787a2 2 0 112.828 2.829 2 2 0 01-2.828-2.83zm-.116-2.31a4 4 0 103.158 7.35 4 4 0 00-3.158-7.35z",
    })
  );
};

IconOutlineSetting.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineSetting.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineNotice = function IconOutlineNotice(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M15.085 4.853a2.501 2.501 0 112.572 3.142A5.99 5.99 0 0118 10v6h2c.55 0 1 .45 1 1s-.45 1-1 1h-5v1a3 3 0 01-6 0v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h2v-6a6.002 6.002 0 015-5.917V3a1 1 0 012 0v1.083a5.961 5.961 0 012.085.77zM12 20a1 1 0 001-1v-1h-2v1a1 1 0 001 1zm-4-4h8v-6a4 4 0 10-8 0v6z",
    })
  );
};

IconOutlineNotice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineNotice.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineTimer = function IconOutlineTimer(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 3.75a9.375 9.375 0 109.375 9.375A9.385 9.385 0 0012 3.75zm0 16.5a7.125 7.125 0 117.125-7.125A7.133 7.133 0 0112 20.25zm3.977-11.102a1.125 1.125 0 010 1.59l-3.181 3.183a1.128 1.128 0 01-1.598.006 1.124 1.124 0 01.006-1.598l3.182-3.181a1.125 1.125 0 011.591 0zM8.625 1.125A1.125 1.125 0 019.75 0h4.5a1.125 1.125 0 110 2.25h-4.5a1.125 1.125 0 01-1.125-1.125z",
    })
  );
};

IconOutlineTimer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineTimer.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineMoneysend = function IconOutlineMoneysend(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M10.46 6l.54-.59V9a1 1 0 002 0V5.41l.54.55A1 1 0 0015 6a1.001 1.001 0 000-1.42l-2.29-2.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21L9 4.54A1.032 1.032 0 1010.46 6zM12 12a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 010 2zm-7-1a1 1 0 102 0 1 1 0 00-2 0zm14 0a1 1 0 10-2 0 1 1 0 002 0zm1-7h-4a1 1 0 100 2h4a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h4a1 1 0 100-2H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3v-8a3 3 0 00-3-3z",
    })
  );
};

IconOutlineMoneysend.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineMoneysend.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlinePiechart = function IconOutlinePiechart(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-3.032A5.013 5.013 0 0013 7.102V4.069A8.008 8.008 0 0119.931 11zM12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0 11c-4.411 0-8-3.589-8-8 0-4.072 3.061-7.436 7-7.931v3.032A5.009 5.009 0 007 12c0 2.757 2.243 5 5 5a5.006 5.006 0 004.898-4h3.032c-.494 3.939-3.858 7-7.93 7z",
    })
  );
};

IconOutlinePiechart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlinePiechart.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineHome = function IconOutlineHome(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12.223 4.112a.369.369 0 00-.446 0l-7.5 5.707a.343.343 0 00-.099.119.326.326 0 00-.035.147v9.537c0 .188.16.34.357.34h3.929v-7.133c0-.27.112-.53.313-.721a1.1 1.1 0 01.758-.298h5a1.1 1.1 0 01.758.298c.2.191.313.45.313.72v7.134H19.5a.366.366 0 00.253-.1.331.331 0 00.104-.24v-9.538a.324.324 0 00-.035-.147.343.343 0 00-.1-.118l-7.5-5.707zm-1.786-1.59A2.582 2.582 0 0112 2c.568 0 1.12.184 1.562.521l7.5 5.707c.593.451.939 1.135.939 1.857v9.537a2.32 2.32 0 01-.732 1.682A2.567 2.567 0 0119.5 22h-5a1.1 1.1 0 01-.758-.299.994.994 0 01-.313-.72v-7.133H10.57v7.133c0 .27-.112.53-.313.72A1.1 1.1 0 019.5 22h-5c-.663 0-1.299-.25-1.768-.696A2.32 2.32 0 012 19.622v-9.538c0-.721.346-1.405.939-1.856l7.5-5.707h-.002z",
    })
  );
};

IconOutlineHome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineHome.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineSearch = function IconOutlineSearch(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M21.407 19.753l-4.41-4.41a8.148 8.148 0 001.633-4.903c0-4.516-3.674-8.19-8.19-8.19s-8.19 3.674-8.19 8.19 3.674 8.19 8.19 8.19a8.148 8.148 0 004.902-1.633l4.41 4.41a1.171 1.171 0 001.655-1.654zM4.59 10.44a5.85 5.85 0 115.85 5.85 5.857 5.857 0 01-5.85-5.85z",
    })
  );
};

IconOutlineSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineSearch.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineUpload = function IconOutlineUpload(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M7.793 8.998a.94.94 0 01-.293-.679.94.94 0 01.293-.678l3.5-3.36C11.48 4.101 11.735 4 12 4c.265 0 .52.101.707.281l3.5 3.36a.94.94 0 01.287.677.94.94 0 01-.293.674c-.186.18-.439.28-.703.282a1.022 1.022 0 01-.705-.276L13 7.277v6.644a.941.941 0 01-.293.679c-.187.18-.442.28-.707.28-.265 0-.52-.1-.707-.28a.941.941 0 01-.293-.68V7.278L9.207 8.998c-.187.18-.442.281-.707.281-.265 0-.52-.101-.707-.281zM20 11.681c-.265 0-.52.101-.707.281a.94.94 0 00-.293.679v5.44H5v-5.44a.94.94 0 00-.293-.679 1.022 1.022 0 00-.707-.28c-.265 0-.52.1-.707.28a.94.94 0 00-.293.679v5.76c0 .423.176.83.489 1.13.312.3.736.469 1.178.469h14.666c.442 0 .866-.17 1.178-.47.313-.299.489-.706.489-1.13v-5.759a.94.94 0 00-.293-.679 1.022 1.022 0 00-.707-.28z",
    })
  );
};

IconOutlineUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineUpload.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineDownload = function IconOutlineDownload(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M20 11.681c-.265 0-.52.101-.707.281a.94.94 0 00-.293.679v5.44H5v-5.44a.94.94 0 00-.293-.679 1.022 1.022 0 00-.707-.28c-.265 0-.52.1-.707.28a.94.94 0 00-.293.679v5.76c0 .423.176.83.489 1.13.312.3.736.469 1.178.469h14.666c.442 0 .866-.17 1.178-.47.313-.299.489-.706.489-1.13v-5.759a.94.94 0 00-.293-.679 1.022 1.022 0 00-.707-.28z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M7.5 10.561a.94.94 0 01.293-.678c.187-.18.442-.281.707-.281.265 0 .52.1.707.28L11 11.605V4.96a.94.94 0 01.293-.679C11.48 4.101 11.735 4 12 4c.265 0 .52.101.707.281A.94.94 0 0113 4.96v6.644l1.793-1.721c.188-.178.442-.277.705-.276.264.001.517.102.703.281.187.18.292.422.293.675a.94.94 0 01-.287.677l-3.5 3.36c-.188.18-.442.28-.707.28-.265 0-.52-.1-.707-.28l-3.5-3.36a.94.94 0 01-.293-.679z",
    })
  );
};

IconOutlineDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineDownload.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlinelogout = function IconOutlinelogout(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M14.08 15.59L16.67 13H7v-2h9.67l-2.59-2.59L15.5 7l5 5-5 5-1.42-1.41zM19 3a2 2 0 012 2v4.67l-2-2V5H5v14h14v-2.67l2-2V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.11.89-2 2-2h14z",
    })
  );
};

IconOutlinelogout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlinelogout.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineEye = function IconOutlineEye(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12 10a2 2 0 100 4 2 2 0 000-4zm-2.828-.828a4 4 0 115.656 5.656 4 4 0 01-5.656-5.656z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M1.504 12v.3C2.905 16.762 7.074 20 12 20c4.927 0 9.095-3.239 10.496-7.7a1 1 0 000-.6C21.095 7.24 16.927 4 12 4 7.074 4 2.905 7.239 1.504 11.7v.3zm2.008 0a9.005 9.005 0 0016.976 0 9.004 9.004 0 00-16.976 0z",
    })
  );
};

IconOutlineEye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineEye.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineEyeoff = function IconOutlineEyeoff(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M2.293 2.293a1 1 0 011.414 0l3.041 3.04A10.953 10.953 0 0112.001 4c4.927 0 9.094 3.239 10.496 7.7a1 1 0 010 .601 11.025 11.025 0 01-3.552 5.23l2.762 2.762a1 1 0 11-1.414 1.414l-3.588-3.588h-.001l-3.263-3.264a.846.846 0 01-.027-.026L9.17 10.586a1.088 1.088 0 01-.026-.027L2.293 3.707a1 1 0 010-1.414zm11.12 12.536s.001 0 0 0zm2.033-.797l2.076 2.076a9.026 9.026 0 002.967-4.109A9.006 9.006 0 0012 6h-.001a8.953 8.953 0 00-3.762.823l1.731 1.731a4 4 0 015.478 5.478zm-1.514-1.514a1.998 1.998 0 00-2.45-2.45l2.45 2.45zm-9.98-4.545a1 1 0 01.775.29l9.855 9.855a1 1 0 01-.521 1.69c-.68.128-1.37.192-2.062.192-4.927 0-9.094-3.239-10.496-7.7a1 1 0 010-.6 10.97 10.97 0 011.72-3.333 1 1 0 01.728-.394zm.226 2.57A8.97 8.97 0 003.511 12a9.007 9.007 0 008.117 5.992l-7.45-7.449z",
    })
  );
};

IconOutlineEyeoff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineEyeoff.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineMessage = function IconOutlineMessage(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 001 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 9h10v2H7V9zm0 4h7v2H7v-2z",
    })
  );
};

IconOutlineMessage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineMessage.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineMail2 = function IconOutlineMail2(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M21.99 9c0-.72-.37-1.35-.94-1.7L12 2 2.95 7.3C2.38 7.65 2 8.28 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zm-2 0v.01L12 14 4 9l8-4.68L19.99 9zM4 19v-7.66l8 5.02 7.99-4.99L20 19H4z",
    })
  );
};

IconOutlineMail2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineMail2.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineCalendar = function IconOutlineCalendar(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z",
    })
  );
};

IconOutlineCalendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineCalendar.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineTime = function IconOutlineTime(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",
    })
  );
};

IconOutlineTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineTime.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLanguage = function IconOutlineLanguage(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",
    })
  );
};

IconOutlineLanguage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLanguage.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineCheckboxOff = function IconOutlineCheckboxOff(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    })
  );
};

IconOutlineCheckboxOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineCheckboxOff.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineCheckboxOn = function IconOutlineCheckboxOn(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.703 5.251c.218.176.35.424.367.688a.944.944 0 01-.276.723l-5.546 6.002c-.103.106-.23.19-.372.248a1.198 1.198 0 01-.904 0 1.103 1.103 0 01-.372-.248l-2.94-3a.94.94 0 01-.25-.714.97.97 0 01.366-.673c.214-.172.493-.262.779-.252.286.011.556.123.753.31l2.117 2.16 4.722-5.162A1.15 1.15 0 0116.5 8c.292-.015.578.075.797.251z",
    })
  );
};

IconOutlineCheckboxOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineCheckboxOn.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineRadioOff = function IconOutlineRadioOff(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    })
  );
};

IconOutlineRadioOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineRadioOff.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineRadioOn = function IconOutlineRadioOn(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    })
  );
};

IconOutlineRadioOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineRadioOn.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineInputconner = function IconOutlineInputconner(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "17",
      y: "21.243",
      width: "6",
      height: "1",
      transform: "rotate(-45 17 21.243)",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "12",
      y: "20.485",
      width: "12",
      height: "1",
      transform: "rotate(-45 12 20.485)",
    })
  );
};

IconOutlineInputconner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineInputconner.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineCn = function IconOutlineCn(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M22.07 17.84c.4 0 .65-.08.76-.23.11-.15.17-.32.17-.5V7.01c0-.22-.08-.41-.25-.59-.17-.17-.45-.26-.85-.26-.4 0-.68.09-.85.28-.17.18-.25.37-.25.57v6.66l-5.36-6.92c-.1-.13-.22-.26-.36-.39a.79.79 0 00-.55-.2c-.41 0-.67.08-.78.24-.11.16-.17.33-.17.53v10.06c0 .2.08.39.25.57.17.18.45.28.85.28.4 0 .68-.09.85-.26a.81.81 0 00.25-.59v-6.43l5.35 6.69c.1.13.23.26.38.39.14.13.33.2.56.2zM6.92 18c-.85 0-1.63-.14-2.37-.4-.73-.27-1.36-.67-1.89-1.19a5.4 5.4 0 01-1.24-1.9c-.29-.74-.43-1.59-.42-2.53.01-.95.16-1.79.45-2.53.29-.74.68-1.36 1.17-1.87.49-.51 1.08-.9 1.75-1.17.67-.27 1.4-.41 2.18-.41.55 0 1.06.07 1.53.2.46.13.86.3 1.2.5.34.21.61.42.8.64.19.22.3.42.32.58.02.14.01.26-.03.36-.04.1-.07.17-.09.21-.04.06-.1.12-.19.2-.09.08-.2.14-.32.18-.2.08-.4.08-.59-.02-.19-.1-.4-.22-.64-.37-.24-.14-.52-.28-.84-.42-.33-.13-.72-.2-1.2-.2-.53 0-1.01.11-1.4.34-.42.23-.76.54-1.04.92s-.49.82-.63 1.31a5.394 5.394 0 00.03 3.09c.15.5.39.95.7 1.34.31.39.7.71 1.16.94.46.23 1 .34 1.61.33.32-.02.59-.05.83-.11s.45-.13.63-.22c.18-.08.34-.18.49-.28l.44-.32c.28-.19.56-.23.83-.11.26.1.44.23.53.41.09.18.12.36.1.54-.03.13-.13.31-.31.53-.18.22-.43.44-.76.65-.33.22-.73.4-1.2.55-.47.15-1 .23-1.59.23z",
    })
  );
};

IconOutlineCn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineCn.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineEn = function IconOutlineEn(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M21.07 18c.4 0 .65-.08.76-.23.11-.15.17-.33.17-.52V6.87c0-.22-.08-.42-.25-.6-.17-.18-.46-.27-.85-.27-.4 0-.68.09-.85.28-.17.19-.25.38-.25.59v6.85L14.45 6.6c-.1-.13-.22-.27-.36-.4a.816.816 0 00-.56-.2c-.41 0-.67.08-.78.24-.11.16-.17.34-.17.54v10.34c0 .2.08.4.25.59.17.19.45.28.85.28.4 0 .68-.09.85-.27.17-.18.25-.38.25-.6v-6.61l5.33 6.88c.1.13.23.27.38.4.16.14.35.21.58.21zM8.3 17.83H3.09c-.34 0-.61-.06-.8-.19-.19-.13-.29-.37-.29-.73V7.09c0-.35.09-.59.27-.72.18-.13.45-.2.81-.2h5.23c.33 0 .58.07.74.21.17.14.25.38.26.72.02.35-.07.59-.25.73s-.43.21-.76.21H4.2v2.82h3.93c.36 0 .62.08.78.23.16.15.24.4.24.73 0 .33-.08.57-.24.71-.16.14-.42.21-.78.21H4.2v3.21h4.1c.42 0 .73.07.91.2.18.14.27.38.27.74s-.09.61-.27.74c-.18.13-.48.2-.91.2z",
    })
  );
};

IconOutlineEn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineEn.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineMail1 = function IconOutlineMail1(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M20 18H4V8.5l8 5 8-5V18zm0-12l-8 5-8-5h16zm2 0c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z",
    })
  );
};

IconOutlineMail1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineMail1.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineMouse = function IconOutlineMouse(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M13 2h-2C7.691 2 5 4.691 5 8v8c0 3.309 2.691 6 6 6h2c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-2 2v6H7V8c0-2.206 1.794-4 4-4zm6 12c0 2.206-1.794 4-4 4h-2c-2.206 0-4-1.794-4-4v-4h10v4zm-4-6V4c2.206 0 4 1.794 4 4v2h-4z",
    })
  );
};

IconOutlineMouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineMouse.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineShield = function IconOutlineShield(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M21.43 4.886l-9.075-3.814a.915.915 0 00-.71 0L2.57 4.886a.938.938 0 00-.57.866v3.637c0 6.385 3.811 11.129 9.65 13.541a.915.915 0 00.7 0C18.189 20.518 22 15.774 22 9.39V5.751a.938.938 0 00-.57-.866zM20.149 9.39c0 5.428-3.149 9.425-8.149 11.655-4.867-2.17-8.149-6.08-8.149-11.655V6.378L12 2.953l8.149 3.425v3.011zm-9.173 3.16l3.98-4.03a.918.918 0 011.31 0 .946.946 0 010 1.326l-4.635 4.693a.918.918 0 01-1.31 0l-2.587-2.62a.946.946 0 010-1.326.918.918 0 011.31 0l1.932 1.957z",
    })
  );
};

IconOutlineShield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineShield.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineLoading = function IconOutlineLoading(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M13.546 3.63a.901.901 0 011.13-.589C18.405 4.227 21 7.771 21 11.811 21 16.886 16.974 21 12 21c-4.975 0-9-4.115-9-9.188 0-1.58.393-3.101 1.12-4.451a.909.909 0 011.228-.36.902.902 0 01.36 1.227 7.427 7.427 0 00-.908 3.584c0 4.083 3.232 7.388 7.2 7.388s7.2-3.305 7.2-7.388c0-3.265-2.086-6.112-5.073-7.061a.878.878 0 01-.58-1.12z",
    })
  );
};

IconOutlineLoading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineLoading.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlinePending = function IconOutlinePending(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 5c3.864 0 7 3.136 7 7s-3.136 7-7 7-7-3.136-7-7 3.136-7 7-7zm0 12.6c3.094 0 5.6-2.506 5.6-5.6S15.094 6.4 12 6.4A5.598 5.598 0 006.4 12c0 3.094 2.506 5.6 5.6 5.6zm2.475-9.065l.99.99L12 12.99l-.99-.99 3.465-3.465z",
    })
  );
};

IconOutlinePending.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlinePending.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineMenu = function IconOutlineMenu(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M22.08 4c.51 0 .92.41.92.92s-.41.92-.92.92H1.92A.93.93 0 011 4.92c0-.51.41-.92.92-.92h20.16zm0 7.02c.51 0 .92.41.92.92s-.41.92-.92.92H1.92c-.51 0-.92-.41-.92-.92s.41-.92.92-.92h20.16zm0 7.03c.51 0 .92.41.92.92s-.41.92-.92.92H1.92a.933.933 0 01-.92-.93c0-.51.41-.92.92-.92h20.16v.01z",
    })
  );
};

IconOutlineMenu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineMenu.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineAnnounce = function IconOutlineAnnounce(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M21.06 3.468a2.63 2.63 0 00-2.28-.512L9.711 5.96H6.32a4.405 4.405 0 00-4.4 4.4 4.407 4.407 0 003.52 4.311v4.93c0 .97.79 1.76 1.76 1.76h1.76c.97 0 1.76-.79 1.76-1.76v-4.54l8.06 2.703.067.017a2.628 2.628 0 002.213-.529c.623-.503.98-1.252.98-2.053V5.521c0-.801-.357-1.55-.98-2.053zM3.68 10.36a2.643 2.643 0 012.64-2.64h2.64V13H6.32a2.643 2.643 0 01-2.64-2.64zM7.2 19.6v-4.84h1.76v4.84H7.2zm13.08-4.4a.877.877 0 01-1.036.865l-8.524-2.841V7.496l8.524-2.841a.88.88 0 011.036.866v9.678z",
    })
  );
};

IconOutlineAnnounce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineAnnounce.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowright = function IconOutlineArrowright(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M8.52 17.72l5.3-5.72-5.3-5.72a.83.83 0 010-1.12l.05-.06c.29-.32.78-.33 1.1-.04l.04.04 5.76 6.22c.17.19.24.44.21.67.03.24-.04.49-.21.68l-5.76 6.22c-.29.32-.78.33-1.1.04l-.04-.04-.05-.06a.817.817 0 010-1.11z",
    })
  );
};

IconOutlineArrowright.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowright.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowdown = function IconOutlineArrowdown(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M6.28 8.52a.817.817 0 00-1.11 0l-.06.05c-.02.02-.03.03-.04.05-.29.32-.28.81.04 1.1l6.22 5.75c.19.17.44.24.68.21.23.03.48-.04.67-.21l6.22-5.76.04-.04c.29-.32.28-.81-.04-1.1l-.06-.05a.83.83 0 00-1.12 0L12 13.82l-5.72-5.3z",
    })
  );
};

IconOutlineArrowdown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowdown.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowleft = function IconOutlineArrowleft(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M15.177 17.603l-5.3-5.97 5.3-5.968a.894.894 0 000-1.168l-.05-.063a.753.753 0 00-1.1-.042l-.04.042-5.76 6.49a.892.892 0 00-.22.71c-.03.25.04.511.21.71l5.76 6.49c.29.334.78.344 1.1.042l.04-.042.05-.063c.3-.334.3-.845.01-1.168z",
    })
  );
};

IconOutlineArrowleft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowleft.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineArrowup = function IconOutlineArrowup(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M6.43 15.837l5.72-5.53 5.72 5.53c.32.302.8.302 1.12 0l.06-.053c.32-.302.33-.814.04-1.147l-.04-.042-6.22-6.01a.81.81 0 00-.68-.23.835.835 0 00-.68.219l-6.22 6.01c-.32.303-.33.814-.04 1.148l.04.042.06.052c.32.313.81.313 1.12.01z",
    })
  );
};

IconOutlineArrowup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineArrowup.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineSignComplete = function IconOutlineSignComplete(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm14.664-3.247a1 1 0 01.083 1.411l-5.333 6a1 1 0 01-1.495 0l-2.666-3a1 1 0 011.494-1.328l1.92 2.159 4.586-5.16a1 1 0 011.411-.082z",
    })
  );
};

IconOutlineSignComplete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineSignComplete.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineBan = function IconOutlineBan(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.163 5.628a8 8 0 0111.21 11.209L7.162 5.627zm-1.73 1.804a8 8 0 0011.135 11.136L5.432 7.432z",
    })
  );
};

IconOutlineBan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineBan.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineSignSend = function IconOutlineSignSend(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M8 7.71L18 12 8 16.29v-3.34l7.14-.95L8 11.05V7.71zM12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16z",
    })
  );
};

IconOutlineSignSend.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineSignSend.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineSignWrong = function IconOutlineSignWrong(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    })
  );
};

IconOutlineSignWrong.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineSignWrong.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineSignInfo = function IconOutlineSignInfo(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    })
  );
};

IconOutlineSignInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineSignInfo.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlinePicture = function IconOutlinePicture(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M4 4c-1.093 0-2 .907-2 2v12c0 1.093.907 2 2 2h16c1.093 0 2-.907 2-2V6c0-1.093-.907-2-2-2H4zm0 2h16v12H4V6zm10.5 5L11 15l-2.5-2.5L5.777 16H18.25l-3.75-5z",
    })
  );
};

IconOutlinePicture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlinePicture.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineFolder = function IconOutlineFolder(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z",
    })
  );
};

IconOutlineFolder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineFolder.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineTrash = function IconOutlineTrash(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M10 2L9 3H4v2h1v15c0 .522.191 1.055.568 1.432.377.377.91.568 1.432.568h10c.522 0 1.055-.191 1.432-.568.377-.377.568-.91.568-1.432V5h1V3h-5l-1-1h-4zM7 5h10v15H7V5zm2 2v11h2V7H9zm4 0v11h2V7h-2z",
    })
  );
};

IconOutlineTrash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineTrash.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineShare = function IconOutlineShare(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M18 2c-1.645 0-3 1.355-3 3 0 .19.022.377.057.559L7.922 9.72A2.969 2.969 0 006 9c-1.645 0-3 1.355-3 3s1.355 3 3 3a2.97 2.97 0 001.922-.72l7.135 4.16A2.963 2.963 0 0015 19c0 1.645 1.355 3 3 3s3-1.355 3-3-1.355-3-3-3c-.733 0-1.398.28-1.922.723l-7.135-4.164C8.978 12.377 9 12.19 9 12c0-.191-.022-.377-.057-.559l7.135-4.162A2.97 2.97 0 0018 8c1.645 0 3-1.355 3-3s-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zM6 11c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zm12 7c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1z",
    })
  );
};

IconOutlineShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineShare.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineFlickr = function IconOutlineFlickr(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M5 2C3.348 2 2 3.348 2 5v14c0 1.652 1.348 3 3 3h14c1.652 0 3-1.348 3-3V5c0-1.652-1.348-3-3-3H5zm0 2h14c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zm3 5a3 3 0 10.002 6.002A3 3 0 008 9zm8 0a3 3 0 10.002 6.002A3 3 0 0016 9z",
    })
  );
};

IconOutlineFlickr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineFlickr.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineSkype = function IconOutlineSkype(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M7.5 2A5.5 5.5 0 002 7.5c0 1.231.409 2.362 1.092 3.28-.054.4-.092.805-.092 1.22a9 9 0 009 9c.415 0 .82-.038 1.22-.092A5.468 5.468 0 0016.5 22a5.5 5.5 0 005.5-5.5 5.468 5.468 0 00-1.092-3.28c.054-.4.092-.805.092-1.22a9 9 0 00-9-9c-.415 0-.82.038-1.22.092A5.468 5.468 0 007.5 2zm0 2c.753 0 1.475.24 2.086.695l.652.489.809-.11C11.42 5.024 11.724 5 12 5c3.86 0 7 3.14 7 7 0 .276-.023.578-.074.953l-.11.809.489.652A3.47 3.47 0 0120 16.5c0 1.93-1.57 3.5-3.5 3.5a3.47 3.47 0 01-2.086-.695l-.652-.489-.809.11c-.375.05-.677.074-.953.074-3.86 0-7-3.14-7-7 0-.276.023-.578.074-.953l.11-.809-.489-.652A3.471 3.471 0 014 7.5C4 5.57 5.57 4 7.5 4zm4.35 3C8.09 7 7.813 9.209 7.813 9.754c0 1.084.621 1.926 1.683 2.334 1.13.434 2.5.694 3.277.906 1.217.333 1.063 1.004 1.063 1.102 0 1.03-1.41 1.295-2.012 1.238-.68-.064-1.369.13-2.086-1.346-.128-.264-.363-.841-1.07-.841-.306 0-1.07.232-1.07.962 0 1.432 1.599 2.891 4.38 2.891 1.454 0 4.167-.503 4.168-3.111 0-2.271-2.29-2.67-3.974-3.104-.461-.119-2.18-.309-2.18-1.209 0-.267.374-.908 1.72-.908 1.388 0 1.69.65 1.874.986.154.267.28.474.435.573a1.091 1.091 0 001.375-.116c.2-.207.3-.435.3-.695C15.695 8.285 14.357 7 11.85 7z",
    })
  );
};

IconOutlineSkype.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineSkype.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconOutlineInstagram = function IconOutlineInstagram(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 100 2 1 1 0 000-2zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z",
    })
  );
};

IconOutlineInstagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconOutlineInstagram.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconSharpExchange = function IconSharpExchange(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z",
    })
  );
};

IconSharpExchange.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconSharpExchange.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledSunny = function IconFilledSunny(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z",
    })
  );
};

IconFilledSunny.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledSunny.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledMoon = function IconFilledMoon(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M12.569 22.588a10.31 10.31 0 009.458-5.967 8.083 8.083 0 01-3.409.673A8.328 8.328 0 0110.3 8.975a8.621 8.621 0 014.486-7.437 15.809 15.809 0 00-2.217-.125C6.72 1.413 1.98 6.153 1.98 12c0 5.848 4.74 10.588 10.588 10.588z",
    })
  );
};

IconFilledMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledMoon.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconTwotoneElectric = function IconTwotoneElectric(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      opacity: ".3",
      d: "M20 10h-6.857V2L4 14h6.857v8L20 10z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M13.463 1.053a1 1 0 01.68.947v7H20a1 1 0 01.795 1.606l-9.142 12A1 1 0 019.857 22v-7H4a1 1 0 01-.795-1.606l9.142-12a1 1 0 011.116-.341zM6.019 13h4.838a1 1 0 011 1v5.038L17.981 11h-4.838a1 1 0 01-1-1V4.963L6.019 13z",
    })
  );
};

IconTwotoneElectric.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconTwotoneElectric.defaultProps = {
  color: "currentColor",
  size: "24",
};

var IconFilledWeibo = function IconFilledWeibo(props) {
  var color = props.color,
    size = props.size,
    otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
      },
      otherProps
    ),
    /*#__PURE__*/ React.createElement("path", {
      d:
        "M16.281 3.813a5.1 5.1 0 00-.687.093.767.767 0 00.312 1.5A3.79 3.79 0 0119.5 6.563a3.772 3.772 0 01.781 3.687.775.775 0 00.5.969.777.777 0 00.969-.5c.563-1.742.219-3.703-1.094-5.156a5.356 5.356 0 00-3.718-1.75 5.255 5.255 0 00-.657 0zm-6.218 2.28c-1.395.15-3.364 1.239-5.094 2.97C3.082 10.949 2 12.957 2 14.687 2 17.997 6.227 20 10.375 20c5.438 0 9.063-3.18 9.063-5.688 0-1.515-1.258-2.363-2.407-2.718-.281-.086-.492-.13-.343-.5.32-.805.378-1.504.03-2-.648-.93-2.464-.883-4.5-.031 0 0-.632.289-.468-.22.313-1.007.27-1.855-.219-2.343-.344-.348-.836-.473-1.469-.406zm6.75.407a2.479 2.479 0 00-.657.063c-.355.074-.578.457-.5.812a.654.654 0 00.781.5c.426-.09.907.027 1.22.375.312.348.386.805.25 1.219-.114.347.058.73.405.844.348.109.735-.06.844-.407a2.59 2.59 0 00-.531-2.531 2.646 2.646 0 00-1.813-.875zm-6 4.406c2.769.098 5 1.473 5.187 3.375.215 2.176-2.281 4.203-5.594 4.531-3.312.329-6.191-1.171-6.406-3.343-.215-2.176 2.316-4.203 5.625-4.531.414-.04.793-.047 1.188-.032zM8.937 13c-1.132.102-2.203.75-2.687 1.688-.66 1.277-.008 2.69 1.5 3.156 1.559.48 3.39-.246 4.031-1.625.63-1.348-.176-2.746-1.719-3.125-.37-.094-.746-.13-1.124-.094zm-.718 2.063c.133.003.254.046.375.093.488.2.64.723.344 1.188-.305.46-.95.683-1.438.468-.48-.21-.617-.738-.313-1.187.227-.336.637-.566 1.032-.563z",
    })
  );
};

IconFilledWeibo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
IconFilledWeibo.defaultProps = {
  color: "currentColor",
  size: "24",
};

exports.IconFilledAccount = IconFilledAccount;
exports.IconFilledAccountmini = IconFilledAccountmini;
exports.IconFilledAccountround = IconFilledAccountround;
exports.IconFilledArrowdownright = IconFilledArrowdownright;
exports.IconFilledCalculate = IconFilledCalculate;
exports.IconFilledCoin = IconFilledCoin;
exports.IconFilledDelete = IconFilledDelete;
exports.IconFilledDiscord = IconFilledDiscord;
exports.IconFilledDot = IconFilledDot;
exports.IconFilledDropdown = IconFilledDropdown;
exports.IconFilledEdit = IconFilledEdit;
exports.IconFilledFacebook = IconFilledFacebook;
exports.IconFilledFax = IconFilledFax;
exports.IconFilledFb = IconFilledFb;
exports.IconFilledFilter = IconFilledFilter;
exports.IconFilledGithub = IconFilledGithub;
exports.IconFilledInstagram = IconFilledInstagram;
exports.IconFilledList = IconFilledList;
exports.IconFilledLoad = IconFilledLoad;
exports.IconFilledLock = IconFilledLock;
exports.IconFilledMenu = IconFilledMenu;
exports.IconFilledMinus = IconFilledMinus;
exports.IconFilledMinusmini = IconFilledMinusmini;
exports.IconFilledMoon = IconFilledMoon;
exports.IconFilledPhone = IconFilledPhone;
exports.IconFilledPin = IconFilledPin;
exports.IconFilledPlus = IconFilledPlus;
exports.IconFilledPlusbg = IconFilledPlusbg;
exports.IconFilledPlusmini = IconFilledPlusmini;
exports.IconFilledReddit = IconFilledReddit;
exports.IconFilledReset = IconFilledReset;
exports.IconFilledSend = IconFilledSend;
exports.IconFilledSetting = IconFilledSetting;
exports.IconFilledShare = IconFilledShare;
exports.IconFilledSharearrow = IconFilledSharearrow;
exports.IconFilledSignMention = IconFilledSignMention;
exports.IconFilledSignQuestion = IconFilledSignQuestion;
exports.IconFilledSignRemove = IconFilledSignRemove;
exports.IconFilledSignWrong = IconFilledSignWrong;
exports.IconFilledSkype = IconFilledSkype;
exports.IconFilledSubmitted = IconFilledSubmitted;
exports.IconFilledSunny = IconFilledSunny;
exports.IconFilledTwitter = IconFilledTwitter;
exports.IconFilledWater = IconFilledWater;
exports.IconFilledWeibo = IconFilledWeibo;
exports.IconFilledWhatsapp = IconFilledWhatsapp;
exports.IconFilledYoutube = IconFilledYoutube;
exports.IconOutlineAccount = IconOutlineAccount;
exports.IconOutlineAnnounce = IconOutlineAnnounce;
exports.IconOutlineArrowdown = IconOutlineArrowdown;
exports.IconOutlineArrowdowntail = IconOutlineArrowdowntail;
exports.IconOutlineArrowleft = IconOutlineArrowleft;
exports.IconOutlineArrowleftround = IconOutlineArrowleftround;
exports.IconOutlineArrowlefttail = IconOutlineArrowlefttail;
exports.IconOutlineArrowright = IconOutlineArrowright;
exports.IconOutlineArrowrightround = IconOutlineArrowrightround;
exports.IconOutlineArrowrighttail = IconOutlineArrowrighttail;
exports.IconOutlineArrowup = IconOutlineArrowup;
exports.IconOutlineArrowuptail = IconOutlineArrowuptail;
exports.IconOutlineBan = IconOutlineBan;
exports.IconOutlineCalendar = IconOutlineCalendar;
exports.IconOutlineCalendarweek = IconOutlineCalendarweek;
exports.IconOutlineCheck = IconOutlineCheck;
exports.IconOutlineCheckboxOff = IconOutlineCheckboxOff;
exports.IconOutlineCheckboxOn = IconOutlineCheckboxOn;
exports.IconOutlineCn = IconOutlineCn;
exports.IconOutlineColumn = IconOutlineColumn;
exports.IconOutlineCopy = IconOutlineCopy;
exports.IconOutlineCross = IconOutlineCross;
exports.IconOutlineCrossround = IconOutlineCrossround;
exports.IconOutlineDashboard = IconOutlineDashboard;
exports.IconOutlineDownload = IconOutlineDownload;
exports.IconOutlineEdit = IconOutlineEdit;
exports.IconOutlineEn = IconOutlineEn;
exports.IconOutlineEye = IconOutlineEye;
exports.IconOutlineEyeoff = IconOutlineEyeoff;
exports.IconOutlineFlickr = IconOutlineFlickr;
exports.IconOutlineFolder = IconOutlineFolder;
exports.IconOutlineHome = IconOutlineHome;
exports.IconOutlineInputconner = IconOutlineInputconner;
exports.IconOutlineInstagram = IconOutlineInstagram;
exports.IconOutlineLanguage = IconOutlineLanguage;
exports.IconOutlineLightAccount = IconOutlineLightAccount;
exports.IconOutlineLightAdmin = IconOutlineLightAdmin;
exports.IconOutlineLightAnnounce = IconOutlineLightAnnounce;
exports.IconOutlineLightArrowright = IconOutlineLightArrowright;
exports.IconOutlineLightBox = IconOutlineLightBox;
exports.IconOutlineLightBusiness = IconOutlineLightBusiness;
exports.IconOutlineLightCoding = IconOutlineLightCoding;
exports.IconOutlineLightDashboard = IconOutlineLightDashboard;
exports.IconOutlineLightFilter = IconOutlineLightFilter;
exports.IconOutlineLightFinancial = IconOutlineLightFinancial;
exports.IconOutlineLightHierachyuser = IconOutlineLightHierachyuser;
exports.IconOutlineLightInterface = IconOutlineLightInterface;
exports.IconOutlineLightList = IconOutlineLightList;
exports.IconOutlineLightOut = IconOutlineLightOut;
exports.IconOutlineLightReport = IconOutlineLightReport;
exports.IconOutlineLightUsers = IconOutlineLightUsers;
exports.IconOutlineLightWallet = IconOutlineLightWallet;
exports.IconOutlineList1 = IconOutlineList1;
exports.IconOutlineLoading = IconOutlineLoading;
exports.IconOutlineMail1 = IconOutlineMail1;
exports.IconOutlineMail2 = IconOutlineMail2;
exports.IconOutlineMenu = IconOutlineMenu;
exports.IconOutlineMessage = IconOutlineMessage;
exports.IconOutlineMoneysend = IconOutlineMoneysend;
exports.IconOutlineMore = IconOutlineMore;
exports.IconOutlineMouse = IconOutlineMouse;
exports.IconOutlineNotice = IconOutlineNotice;
exports.IconOutlinePending = IconOutlinePending;
exports.IconOutlinePicture = IconOutlinePicture;
exports.IconOutlinePiechart = IconOutlinePiechart;
exports.IconOutlineRadioOff = IconOutlineRadioOff;
exports.IconOutlineRadioOn = IconOutlineRadioOn;
exports.IconOutlineRefresh = IconOutlineRefresh;
exports.IconOutlineSearch = IconOutlineSearch;
exports.IconOutlineSetting = IconOutlineSetting;
exports.IconOutlineShare = IconOutlineShare;
exports.IconOutlineShield = IconOutlineShield;
exports.IconOutlineSignComplete = IconOutlineSignComplete;
exports.IconOutlineSignInfo = IconOutlineSignInfo;
exports.IconOutlineSignSend = IconOutlineSignSend;
exports.IconOutlineSignWrong = IconOutlineSignWrong;
exports.IconOutlineSkype = IconOutlineSkype;
exports.IconOutlineTime = IconOutlineTime;
exports.IconOutlineTimer = IconOutlineTimer;
exports.IconOutlineTransparent = IconOutlineTransparent;
exports.IconOutlineTrash = IconOutlineTrash;
exports.IconOutlineUpload = IconOutlineUpload;
exports.IconOutlinelogout = IconOutlinelogout;
exports.IconPermissionDataerror = IconPermissionDataerror;
exports.IconSharpArrowdown = IconSharpArrowdown;
exports.IconSharpArrowleft = IconSharpArrowleft;
exports.IconSharpArrowright = IconSharpArrowright;
exports.IconSharpArrowup = IconSharpArrowup;
exports.IconSharpExchange = IconSharpExchange;
exports.IconSharpMinus = IconSharpMinus;
exports.IconSharpPlus = IconSharpPlus;
exports.IconSharpStarhalf = IconSharpStarhalf;
exports.IconSharpStaroff = IconSharpStaroff;
exports.IconSharpStaron = IconSharpStaron;
exports.IconTwotoneBox = IconTwotoneBox;
exports.IconTwotoneDevelope = IconTwotoneDevelope;
exports.IconTwotoneDownload = IconTwotoneDownload;
exports.IconTwotoneElectric = IconTwotoneElectric;
exports.IconTwotoneEmpty = IconTwotoneEmpty;
exports.IconTwotoneIdea = IconTwotoneIdea;
exports.IconTwotoneKey = IconTwotoneKey;
exports.IconTwotoneLockoff = IconTwotoneLockoff;
exports.IconTwotoneLockon = IconTwotoneLockon;
exports.IconTwotoneMaintenance = IconTwotoneMaintenance;
exports.IconTwotonePermission = IconTwotonePermission;
exports.IconTwotonePlus = IconTwotonePlus;
exports.IconTwotonePuzzle = IconTwotonePuzzle;
exports.IconTwotoneRemove = IconTwotoneRemove;
exports.IconTwotoneSun = IconTwotoneSun;
exports.IconTwotoneUpload = IconTwotoneUpload;
exports.IconTwotoneUserAnonymousMask = IconTwotoneUserAnonymousMask;
exports.IconTwotoneUserKermitTheFrog = IconTwotoneUserKermitTheFrog;
exports.IconTwotoneUserNinjaTurtle = IconTwotoneUserNinjaTurtle;
exports.IconTwotoneUserScream = IconTwotoneUserScream;
exports.IconTwotoneUserStormtrooper = IconTwotoneUserStormtrooper;
