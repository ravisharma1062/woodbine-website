export default function PageHero({ title, text }: { title: string; text?: string }) {
  return (
    <section className="leaf-pattern relative overflow-hidden bg-gradient-to-br from-brand-800 to-brand-600 text-white">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/20" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h1 className="fade-up text-4xl font-bold sm:text-5xl">{title}</h1>
        {text && <p className="fade-up-2 mt-4 max-w-2xl text-lg text-brand-100">{text}</p>}
      </div>
    </section>
  );
}
