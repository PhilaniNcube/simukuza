import Image from "next/image";

const WorkWithUsHero = () => {
  return (
    <div className="pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 @container">
        <div className="grid @md:grid-cols-2 @lg:grid-cols-3 gap-6">
          <div className="@lg:col-span-2 h-[60vh]">
            <Image
              src="https://utfs.io/f/84aXfFFbF7G07EnBzr6rSPDRLtyE6JYV4FAq7Z5jwWozHnxk"
              alt="FAQ Hero"
              width={1920}
              height={1280}
              className="w-full h-full object-cover aspect-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl @lg font-light text-accent mb-4">
              Work With Us
            </h1>
            <p className="text-lg text-darkgrey">
              Join our team and help us build the future of automotive retail in
              Zimbabwe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkWithUsHero;
