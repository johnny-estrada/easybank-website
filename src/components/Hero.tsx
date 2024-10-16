import Button from "./ui/Button";
import BgImage from "../components/BgImage";
import BgImageMobile from "./BgImageMobile";

export default function Hero() {
  return (
    <div className="bg-zinc-50">
      <div>
        <div className="mx-auto max-w-7xl pb-6 pt-96 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="text-4xl text-center lg:text-left tracking-tight text-slate-700 sm:text-6xl">
                  Next generation digital banking
                </h1>
                <p className="text-center lg:text-left mt-6 text-lg leading-7 text-zinc-400">
                  Take your financial life online. Your Easybank account will be
                  a one-stop-shop for spending, saving, budgeting, investing,
                  and much more.
                </p>
                <div className="lg:block mt-10 flex justify-center items-center gap-x-6">
                  <a
                    href="/signup"
                    className="rounded-full bg-gradient-to-r from-green-500 to-sky-400 px-9 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                  >
                    Sign Up Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <BgImage />
            <img
              src="./public/bg-intro-mobile.svg"
              alt=""
              className="lg:hidden absolute -top-10 -right-0"
            />
            {/* <BgImageMobile /> */}
          </div>
        </div>
        <div className="absolute z-20 -top-[133px] lg:-top-[120px] lg:-right-[130px] ">
          <img
            src="./image-mockups.png"
            alt="Four phones displaying different screens for the easybank app."
          />
        </div>
      </div>
    </div>
  );
}
