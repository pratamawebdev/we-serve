import FAQCard from "../Fragments/FAQCard";

const FAQLayouts = () => {
  return (
    <section className="max-w-6xl py-12 mx-auto faq-wrapper">
      <h1 className="text-indigo-950 font-['Clash_Display'] text-5xl text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col parent-cards-faq gap-y-6">
          <FAQCard
            title="Why do we need to use Kapp?"
            description="Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments"
          />
          <FAQCard
            title="Why do we need to use Kapp?"
            description="Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments"
          />
          <FAQCard
            title="Why do we need to use Kapp?"
            description="Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments"
          />
        </div>
        <div className="flex flex-col parent-cards-faq gap-y-6">
          <FAQCard
            title="Why do we need to use Kapp?"
            description="Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments"
          />
          <FAQCard
            title="Why do we need to use Kapp?"
            description="Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments"
          />
          <FAQCard FAQEmail={true} />
        </div>
      </div>
    </section>
  );
};

export default FAQLayouts;
