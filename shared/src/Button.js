"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = ({ children, onClick, className, }) => {
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, style: {
            background: "blue",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
        }, children: children }));
};
exports.Button = Button;
