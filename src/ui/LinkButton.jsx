import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, className, to }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`
    rounded-full
    bg-[#27374D]
    px-3 py-1 
    text-lg font-semibold text-[#DDE6ED]
    shadow-md
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-[#526D82]
    hover:shadow-xl
    active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
export default LinkButton;
