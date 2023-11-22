import { dataShowcase } from "../../utils/data";

const ShowcaseLayouts = () => {
  return (
    <section className="py-12 mx-auto showcases">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col text-center gap-y-2">
          <h1 className="text-indigo-950 font-['Clash_Display'] text-5xl">
            Our Showcase
          </h1>
          <p className="text-base leading-loose text-gray-500">
            They built amazing website to help more people around the world
            <br />
            by using our recommendation services and products
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-10">
          {dataShowcase.map((v, i) => (
            <>
              <div key={i} className="relative group">
                <div className="absolute flex justify-center w-full transition-all duration-100 ease-in-out opacity-0 group-hover:opacity-100 bottom-8">
                  <a
                    href="#"
                    className="hover:bg-[#080C2E] py-3 font-semibold transition-all duration-500 ease-in-out text-white rounded-full shadow-2xl px-7 shadow-violet-700 bg-violet-700"
                  >
                    View Details
                  </a>
                </div>
                <img
                  src={v.url}
                  alt={v.name}
                  className="transition-all duration-100 ease-in-out w-[320px] h-[220px] rounded-2xl group-hover:border-4 border-violet-700"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseLayouts;
