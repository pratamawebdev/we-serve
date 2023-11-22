const FAQCard = (props) => {
  const { title, description, FAQEmail } = props;
  return (
    <>
      {FAQEmail ? (
        <div className="flex flex-row p-5 bg-[#080C2E] gap-x-6 card-faq rounded-2xl items-center justify-between">
          <a href="#" className="flex text-white gap-x-2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.9 22H15.1"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 18.3999V21.9999"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9955 7.25H19.0045"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.1957 7.25H16.2047"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3954 7.25H13.4044"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Send e-mail to us for other questions
          </a>
          <a href="#">
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="30"
                width="30"
                height="30"
                rx="15"
                transform="rotate(-90 0.5 30)"
                fill="white"
              />
              <path
                d="M13.2125 9.05994L18.1025 13.9499C18.68 14.5274 18.68 15.4724 18.1025 16.0499L13.2125 20.9399"
                stroke="#080C2E"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      ) : (
        <div className="flex flex-row p-5 bg-white gap-x-6 card-faq rounded-2xl">
          <div className="flex flex-col gap-y-5">
            <h3 className="text-xl font-bold text-indigo-950">{title}</h3>
            <p className="text-base leading-loose text-gray-500">
              {description}
            </p>
            <a href="#" className="flex font-semibold gap-x-2 text-violet-700">
              Learn More
            </a>
          </div>
          <a href="#">
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="30.5"
                y="30"
                width="30"
                height="30"
                rx="15"
                transform="rotate(-180 30.5 30)"
                fill="#080C2E"
              />
              <path
                d="M9.56 17.2876L14.45 12.3976C15.0275 11.8201 15.9725 11.8201 16.55 12.3976L21.44 17.2876"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      )}
    </>
  );
};

export default FAQCard;
