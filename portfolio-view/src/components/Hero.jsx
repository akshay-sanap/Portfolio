import React from 'react';





const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box h-9 w-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="Akshay Sanap Portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-sm tracking-wide text-zinc-400">
              <span className="relative h-2 w-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
              </span>
              Available for Work
            </div>
          </div>
          <h2 className="headline-1 mb-8 mt-5 max-w-[15ch] sm:max-w-[20ch] lg:mb-10 lg:max-w-[15ch]">
            Bulding Scalable Websites For the Future
          </h2>
          <div className="flex items-center gap-3">
            ButtonPrimary ButtonOutline
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="ml-auto w-full max-w-[480px] overflow-hidden rounded-[60px] bg-gradient-to-t from-sky-400 via-sky-400/40 via-25% to-65%">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Akshay Sanap"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
