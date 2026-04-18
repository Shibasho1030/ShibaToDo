function Button({ children, className, onSubmit, type }) {
  return (
    <button
      className={`rounded-full bg-[#27374D] px-3 py-1.5 text-sm font-semibold text-[#DDE6ED] shadow-md transition-all duration-300
         hover:bg-[#526D82] hover:shadow-xl hover:-translate-y-0.5 active:scale-95 ${className}`}
      onClick={onSubmit}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
