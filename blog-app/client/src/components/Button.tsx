function Button({ children, type }) {
  return (
    <button
      className="mx-2 border-2 border-violet-800 rounded-2xl p-2 hover:bg-stone-600"
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}

export default Button;
