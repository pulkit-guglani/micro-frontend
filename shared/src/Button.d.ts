import React from "react";
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};
export declare const Button: React.FC<ButtonProps>;
export {};
