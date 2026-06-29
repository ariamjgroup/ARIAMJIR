export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          ARIAMJ.IR
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Enterprise B2B Marketplace Platform
        </p>

        <p className="mt-4 max-w-3xl text-gray-400">
          Industrial Marketplace • Business Directory • Classified Ads •
          Digital Services • AI Platform
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700">
            ورود به پلتفرم
          </button>

          <button className="rounded-xl border border-white px-6 py-3 hover:bg-white hover:text-black">
            درباره ما
          </button>
        </div>
      </section>
    </main>
  );
}