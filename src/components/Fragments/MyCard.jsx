const MyCard = (props) => {
  const { title, description, children, highlight } = props;
  return (
    <>
      {highlight ? (
        <div className="flex flex-col relative px-5 py-8 gap-y-8 my-card rounded-2xl bg-[#080C2E]">
          <div className="absolute top-5 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="178"
              height="221"
              viewBox="0 0 178 221"
              fill="none"
            >
              <g filter="url(#filter0_f_1_371)">
                <ellipse
                  cx="97.65"
                  cy="102.527"
                  rx="32.0478"
                  ry="76.7916"
                  transform="rotate(30 97.65 102.527)"
                  fill="#424560"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1_371"
                  x="0.27005"
                  y="-15.8951"
                  width="194.76"
                  height="236.845"
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
                    stdDeviation="25"
                    result="effect1_foregroundBlur_1_371"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="z-10 flex flex-col gap-y-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="46"
              viewBox="0 0 47 46"
              fill="none"
            >
              <path
                d="M13.6867 34.7875V30.82"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M23.5 34.7875V26.8525"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M33.3133 34.7875V22.8658"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M33.3133 11.2125L32.4317 12.2475C27.5442 17.9592 20.9892 22.0034 13.6867 23.8242"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M27.6975 11.2125H33.3133V16.8092"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.75 42.1666H29.25C38.8333 42.1666 42.6667 38.3333 42.6667 28.75V17.25C42.6667 7.66665 38.8333 3.83331 29.25 3.83331H17.75C8.16667 3.83331 4.33334 7.66665 4.33334 17.25V28.75C4.33334 38.3333 8.16667 42.1666 17.75 42.1666Z"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-xl font-bold text-white">AI Automation</h3>
              <p className="text-base leading-relaxed text-[#8D90A8]">
                Decide the business flow based on latest reports
              </p>
            </div>
            <a href="#" className="font-semibold text-white">
              Learn More
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-5 py-8 bg-white gap-y-8 my-card rounded-2xl">
          {children}
          <div className="flex flex-col gap-y-1">
            <h3 className="text-xl font-bold ext-indigo-950">{title}</h3>
            <p className="text-base leading-relaxed text-gray-500">
              {description}
            </p>
          </div>
          <a href="#" className="font-semibold text-violet-700">
            Learn More
          </a>
        </div>
      )}
    </>
  );
};

export default MyCard;
