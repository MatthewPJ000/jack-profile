import Image from 'next/image';

const Certifications = () => {
  return (
    <section
      id="certification"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Certifications"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Certifications
        </h2>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="w-1/2 p-2">
          <Image
            alt="HackerRank Javascript Basic Certificate"
            src="/images/javascript-basic.png"
            width={300}
            height={500}
            className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="w-1/2 p-2">
          <Image
            alt="HackerRank React Basic Certificate"
            src="/images/react-basic.png"
            width={300}
            height={500}
            className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="w-1/2 p-2">
          <Image
            alt="HackerRank C# Certificate"
            src="/images/csharpe.png"
            width={300}
            height={500}
            className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;