"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedButton = exports.formatDate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const formatDate = (date) => new Date(date).toLocaleDateString();
exports.formatDate = formatDate;
const SharedButton = ({ children, onClick, variant = "primary", className = "", }) => {
    const baseClasses = "px-4 py-2 rounded transition-colors font-medium";
    const variantClasses = variant === "primary"
        ? "bg-blue-500 text-white hover:bg-blue-600"
        : "bg-gray-500 text-white hover:bg-gray-600";
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: `${baseClasses} ${variantClasses} ${className}`, children: children }));
};
exports.SharedButton = SharedButton;
