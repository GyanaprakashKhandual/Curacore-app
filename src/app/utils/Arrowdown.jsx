const ArrowDown = ({ size = 24, color = "currentColor" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
};

export default ArrowDown;