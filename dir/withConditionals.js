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
function withConditionals(OriginalComponent) {
    return (props) => {
        const f = (0, jsx_runtime_1.jsx)(react_1.default.Fragment, {});
        const { renderIf, children = f, fallback: fallback_ = f, override: override_ = f, execludeChildren: execludeChildren_ } = props, originalProps = __rest(props, ["renderIf", "children", "fallback", "override", "execludeChildren"]);
        switch (true) {
            case execludeChildren_ === true:
                return children;
            case renderIf === true:
                return (0, jsx_runtime_1.jsx)(OriginalComponent, Object.assign({}, originalProps));
            case !!override_:
                return override_;
            default:
                return fallback_;
        }
    };
}
exports.default = withConditionals;
function main() {
    const ComponentC = withConditionals((p) => ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { children: p.name }) })));
    return (0, jsx_runtime_1.jsx)(ComponentC, { name: "ahmad" });
}
