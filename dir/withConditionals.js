"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const flexifyparams_1 = require("flexifyparams");
function withConditionals(OriginalComponent) {
    return (props) => {
        const f = (0, jsx_runtime_1.jsx)(react_1.default.Fragment, {});
        const _a = (0, flexifyparams_1.flexifyParams)(props), { children = f, execludeChildren = false, fallback = f, override = f, renderIf = true } = _a, originalProps = __rest(_a, ["children", "execludeChildren", "fallback", "override", "renderIf"]);
        switch (true) {
            case execludeChildren === true:
                return children;
            case renderIf === true:
                return (0, jsx_runtime_1.jsx)(OriginalComponent, Object.assign({}, originalProps));
            case !!override:
                return override;
            default:
                return fallback;
        }
    };
}
exports.default = withConditionals;
