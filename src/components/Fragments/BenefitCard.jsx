const BenefitCard = (props) => {
  const { children, title, description } = props;
  return (
    <div className="flex flex-row items-center p-5 bg-white card-benefits rounded-2xl gap-x-3">
      {children}
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-indigo-950">{title}</h3>
        <p className="text-base leading-relaxed text-gray-500">{description}</p>
        <button>Tombol Tambah</button>
        <div>
          <a href="google.com">Google</a>
        </div>
        <p>Ini paragraf</p>
        <span>hello</span>
      </div>
    </div>
  );
};

export default BenefitCard;
