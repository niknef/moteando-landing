export default function ButtonPrincipal({ children, href, onClick, className = "" }) {
    const baseClasses =
      "inline-block bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded-xl transition";
  
    if (href) {
      return (
        <a href={href} className={`${baseClasses} ${className}`}>
          {children}
        </a>
      );
    }
  
    return (
      <button onClick={onClick} className={`${baseClasses} ${className}`}>
        {children}
      </button>
    );
  }
  