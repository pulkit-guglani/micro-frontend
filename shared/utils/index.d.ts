export declare const formatDate: (date: string) => string;
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    className?: string;
}
export declare const SharedButton: React.FC<ButtonProps>;
export {};
