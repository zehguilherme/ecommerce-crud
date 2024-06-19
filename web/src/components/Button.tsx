type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  type,
  text,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`px-4 py-[17px] rounded-xl font-normal text-xl ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
