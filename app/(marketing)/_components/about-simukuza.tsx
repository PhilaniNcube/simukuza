import Link from "next/link";

const AboutSimukuza = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-500 font-extralight text-balance leading-4 text-center">
          About{" "}
          <span className="italic text-accent font-extrabold">
            Simukuza Auto
          </span>
        </h2>
      </div>
      <div className="bg-slate-300 w-full py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-600 text-lg md:text-xl lg:text-2xl font-light">
            With thousands of new and used makes and models to choose from,{" "}
            <span className="font-bold italic">Simukuza</span> is{" "}
            <span className="font-bold italic">Zimbabwe&apos;s</span> trusted marketplace for buying new and used cars, bakkies and SUVs. Our website makes buying and selling cars fast, intuitive and reliable.
          </p>
          <p className="text-slate-600 text-lg md:text-xl lg:text-2xl font-light mt-5">
           Buying your ideal car has never been easier.
            <span className="font-bold italic">Simukuza</span> allows you to search and compare cars to ensure you find a carthat meets your needs and fits your budget.
          </p>
          <Link href="/about-us" className="text-blue-500 mt-8 text-2xl">
           More about <span className="font-bold">Simukuza Auto</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AboutSimukuza;
