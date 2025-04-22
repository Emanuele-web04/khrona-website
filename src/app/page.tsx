import Link from "next/link"
import Image from "next/image"
import { features } from "@/lib/features"
import { FiMail } from "react-icons/fi"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 max-w-4xl mx-auto">
        <Image width={100} height={100} alt="logo" src={"/k3dblack.png"} className="mb-3 rounded-2xl md:rounded-3xl" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Khrona</h1>
        <p className="text-lg md:text-xl max-w-xl mb-10 text-zinc-600 leading-relaxed">
          Track your days, mood, goals, and reflections. Understand how you're living, one moment at a time.
        </p>
        <Link
          href={"mailto:manu.development.app@gmail.com"}
          className="group flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-all duration-300"
        >
          <FiMail className="w-4 h-4" />
          <span>Ask for support</span>
        </Link>
      </section>

      {/* Features Block */}
      <section className="py-24 px-6">
        <div className="container w-fit mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="mb-32 last:mb-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
            >
              <div className="container max-w-3xl m-auto p-6 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative rounded-3xl w-full max-w-md aspect-[3/4]">
                    <Image
                      alt={feature.title}
                      src={feature.image || "/placeholder.svg"}
                      fill
                      className="object-contain overflow-hidden rounded-xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={i === 0}
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{feature.title}</h2>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">{feature.desc}</p>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {feature.extendedDesc || `Experience how ${feature.title.toLowerCase()} can transform your daily routine and help you gain valuable insights into your life patterns. With intuitive interfaces and thoughtful design, Khrona makes tracking your life's journey effortless and meaningful.`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="bg-zinc-900 text-white text-center py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">App is coming</h2>
          <Link
            href={"mailto:manu.development.app@gmail.com"}
            className="group inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300"
          >
            <span>Ask for support</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-zinc-500 py-10 border-t border-zinc-100">
        <Link href={"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"} target="_blank">Terms of Use</Link>
        <Link href={"https://khrona-pp-iosapp.netlify.app/"} target="_blank"> Privacy Policy</Link>
        <p>© {new Date().getFullYear()} Emanuele Di Pietro - Khrona</p>
      </footer>
    </main>
  )
}
