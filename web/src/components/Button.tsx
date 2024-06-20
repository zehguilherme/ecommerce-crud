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
      className={`rounded-xl px-4 py-[17px] text-xl font-normal ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
