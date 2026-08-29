import Image from "next/image";
import PricingGrids from "./PricingGrids";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 scroll-mt-17 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        {/* <!-- bg circles --> */}
        <div className="relative top-18">
          <div className="pointer-events-none absolute inset-0 -z-10 -my-55 overflow-hidden">
            <div className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[925px] -translate-x-1/2">
              <Image
                src="/images/blur/blur-13.svg"
                alt="blur-sm"
                fill
                className="max-w-none"
              />
            </div>
            <div className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[778px] -translate-x-1/2">
              <Image
                src="/images/blur/blur-14.svg"
                alt="blur-sm"
                fill
                className="max-w-none"
              />
            </div>
            <div className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[584px] -translate-x-1/2">
              <Image
                src="/images/blur/blur-15.svg"
                alt="blur-sm"
                fill
                className="max-w-none"
              />
            </div>
          </div>
          <div className="pricing-circle absolute left-1/2 top-0 h-[830px] w-full max-w-[830px] -translate-x-1/2 rounded-full bg-dark"></div>

          <div className="absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
        </div>

        {/* <!-- grid row --> */}
        <div className="relative -z-1 flex justify-center gap-7.5">
          <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
          <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
        </div>

        <PricingGrids />
      </div>
    </section>
  );
};

export default Pricing;
