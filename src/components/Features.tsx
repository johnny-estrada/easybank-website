const features = [
  {
    name: "Online Banking",
    description:
      " Online Banking Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    href: "#",
    icon: "./icons/icon-online.svg",
  },
  {
    name: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    href: "#",
    icon: "./icons/icon-budgeting.svg",
  },
  {
    name: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    href: "#",
    icon: "./icons/icon-onboarding.svg",
  },
  {
    name: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    href: "#",
    icon: "./icons/icon-api.svg",
  },
];

export default function Features() {
  return (
    <div className="relative z-0 bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-center lg:text-left mt-2 text-3xl tracking-tight text-slate-700 sm:text-4xl">
            Why choose Easybank?
          </p>
          <p className="text-center lg:text-left mt-6 text-lg leading-7">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center lg:items-start">
                <dt className="flex flex-col items-center lg:items-start gap-x-3 text-center lg:text-left font-semibold leading-7 text-slate-700">
                  <img src={feature.icon} alt="" className="mb-4" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-center lg:text-left leading-7">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
