export default function PrimaryButton({ className, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `  rounded-lg bg-summer font-bold tracking-wider hover:bg-summer/80 ` + className
            }
        >
            {children}
        </button>
    );
}
