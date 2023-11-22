const ClosingCard = (props) => {
  const { children } = props;
  return (
    <div className="relative group hover:bg-[#080C2E] flex flex-col items-center justify-center p-5 bg-white gap-y-5 closing-card-feature rounded-2xl">
      <div className="absolute top-1 right-3">
        <svg
          className="hidden group-hover:block"
          width="92"
          height="126"
          viewBox="0 0 92 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_11_2611)">
            <ellipse
              cx="45.9017"
              cy="62.9834"
              rx="8.84722"
              ry="48.5082"
              transform="rotate(30 45.9017 62.9834)"
              fill="#424560"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_11_2611"
              x="0.459412"
              y="0.738525"
              width="90.8846"
              height="124.49"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_11_2611"
              />
            </filter>
          </defs>
        </svg>
      </div>
      {children}
    </div>
  );
};

export default ClosingCard;
