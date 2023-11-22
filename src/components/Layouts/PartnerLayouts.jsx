import { dataPartners } from "../../utils/data";

const PartnerLayout = () => {
  return (
    <section className="max-w-6xl py-12 mx-auto partners">
      <div className="flex flex-row items-center justify-center gap-x-10">
        {dataPartners.map((v, i) => (
          <img key={i} src={v.url} alt={v.name} />
        ))}
      </div>
    </section>
  );
};

export default PartnerLayout;
