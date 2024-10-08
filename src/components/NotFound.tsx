export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-slate-700">404</p>
          <h1 className="mt-4 text-3xl tracking-tight text-slate-700 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-zinc-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-full bg-gradient-to-r from-green-500 to-sky-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
