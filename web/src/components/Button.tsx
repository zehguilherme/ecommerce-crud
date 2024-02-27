type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
  className?: string;
  onClick: () => void;
};

export function Button({ type, text, className, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      className={`px-4 py-[17px] rounded-xl font-normal text-xl ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
