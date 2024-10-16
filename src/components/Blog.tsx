const posts = [
  {
    id: 1,
    title: "Receive money in any currency with no fees",
    href: "#",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    imageUrl:
      "./src/assets/images/image-currency.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Claire Robinson",
    },
  },
  {
    id: 2,
    title: "Treat yourself without worrying about money",
    href: "#",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    imageUrl:
      "./src/assets/images/image-restaurant.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Wilson Hutton",
    },
  },
  {
    id: 3,
    title: "Take your Easybank card wherever you go",
    href: "#",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    imageUrl:
      "./src/assets/images/image-plane.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
    },
  },
  {
    id: 4,
    title: "Our invite-only Beta accounts are now live!",
    href: "#",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    imageUrl:
      "./src/assets/images/image-confetti.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Peter Moss",
    },
  },
];

export default function Blog() {
  return (
    <div className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-center lg:text-left text-3xl tracking-tight text-slate-700 sm:text-4xl">
            Latest Articles
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg bg-white px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                alt=""
                src={post.imageUrl}
                className="absolute inset-0 -z-10 h-1/2 w-full object-cover"
              />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-400">
                <p className="mr-8">
                  By {post.author.name}
                </p>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                 
                </div>
              </div>
              <h3 className="mt-3 text-lg leading-6 text-slate-700">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-3">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
