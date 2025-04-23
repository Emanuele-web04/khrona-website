import Link from "next/link";
import Image from "next/image";
import { features } from "@/lib/features";
import { FiMail } from "react-icons/fi";
import { FaAppStore, FaApple } from "react-icons/fa";
import FAQItem from "@/components/FAQItem";
import FAQList from "@/components/FAQItem";
export default function Home() {
  return (
    <main className="min-h-screen text-zinc-900 font-sans flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center lg:min-h-screen text-center px-6 md:px-10 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col space-y-7 items-start">
            <div className="flex space-x-2 items-center">
              <Image
                alt="logo"
                src={"/k3dblack.png"}
                width={100}
                height={100}
                className="w-[30px] h-[30px] rounded-md"
              />
              <h6 className="font-bold text-lg tracking-wider">Khrona</h6>
            </div>
            <h1 className="md:text-left text-center text-5xl lg:text-6xl font-black tra mb-6 tracking-tight">
              <span className="text-gradient">Track your life.</span>{" "}
              <span className="text-gradient">Understand your</span>{" "}
              <span className="text-gradient">days.</span>
            </h1>
            <p className="md:text-base lg:pr-4 m-auto lg:text-lg font-geist tracking-tight max-w-xl mb-10 text-gray-600 md:text-left leading-relaxed">
              Track your days, mood, goals, and reflections — all in one place.
              Khrona helps you uncover patterns, build self-awareness, and stay
              aligned with what truly matters. Gain clarity, one day at a time.
            </p>
            <div className="flex flex-col gap-3 text-center items-center w-full justify-center md:justify-start md:flex-row ">
              <div className="flex">
                <Link
                  href={"mailto:manu.development.app@gmail.com"}
                  className="group flex ring-1 gap-2 items-center m-0 bg-gradient-to-b from-zinc-950 to-zinc-700 bg-zinc-900 text-white px-5 py-3 lg:px-6.5 lg:py-3.5 w-[200px] justify-center md:w-fit rounded-xl md:rounded-2xl hover:bg-zinc-800 transition-all duration-300"
                >
                  <FaApple className="md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">Download Now</span>
                </Link>
              </div>
              <div className="flex">
                <Link
                  href={"mailto:manu.development.app@gmail.com"}
                  className="group flex items-center gap-2 ring-1 ring-black bg-transparent text-black px-5 py-3 lg:px-6.5 lg:py-3.5 w-[200px] md:w-fit rounded-xl md:rounded-2xl justify-center hover:bg-zinc-800 transition-all duration-300"
                >
                  <FiMail className="w-4 h-4" />
                  <span className="text-sm md:text-base">Ask for support</span>
                </Link>
              </div>
            </div>
          </div>
          <Image
            width={1080}
            height={1080}
            alt="logo"
            src={"/hero-black.png"}
            className=" object-contain mt-10 md:mt-0 md:w-2/5 md:h-2/5 lg:w-1/2 lg:h-1/2"
          />
        </div>
      </section>

      {/* Features Block */}
      <section className="py-24 md:px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-gradient w-full m-auto font-black mb-6 tracking-tight">
          Features
        </h1>
        <p className="md:text-base lg:text-lg text-center font-geist tracking-tight m-auto max-w-xl  text-gray-600 leading-relaxed">
          Explore all the features. 35% more likely to reach personal goals with
          <span className="uppercase"> PRO</span> subscription. Embrace change.
        </p>
        <div className="container flex flex-col space-y-8 max-w-4xl px-4 py-16 mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="last:mb-0 bg-[url(/bg.png)] bg-center bg-cover bg-no-repeat rounded-3xl ring-2 ring-zinc-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`flex flex-col justify-between ${
                  i % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 p-2 md:p-6`}
              >
                <div className="md:w-1/4 flex justify-center">
                  <div className="relative p-2 rounded-2xl">
                    <Image
                      src={feature.image}
                      width={300}
                      height={600}
                      alt={feature.title}
                      className="rounded-xl object-contain max-h-[520px] w-auto"
                    />
                  </div>
                </div>

                <div className="md:w-3/5 flex flex-col p-4">
                  <h2 className="text-2xl md:text-4xl font-bold mb-1 text-zinc-800 tracking-tight">
                    {feature.title}
                  </h2>
                  <p className="text-sm md:text-base pr-4 lg:text-lg font-geist tracking-tight text-zinc-600 mb-6 font-medium">
                    {feature.desc}
                  </p>
                  <p className="text-sm md:text-base pr-4 lg:text-lg font-geist text-zinc-500 tracking-tight">
                    {feature.extendedDesc ||
                      `Experience how ${feature.title.toLowerCase()} can transform your daily routine and help you gain valuable insights into your life patterns. With intuitive interfaces and thoughtful design, Khrona makes tracking your life's journey effortless and meaningful.`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App Now Available Banner */}
      <section className="bg-gradient-to-br from-zinc-800 to-zinc-900 text-white text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
        <div className="max-w-4xl flex flex-col mx-auto relative z-10">
          <FaAppStore className="w-10 h-10 m-auto mb-5" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300">
            App Now Available
          </h2>
          <p className="text-zinc-300 font-geist tracking-tight font-light mb-10 max-w-xl mx-auto">
            Track your days, understand your life, and achieve your goals with
            Khrona.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={"#download-link"}
              className="group inline-flex items-center justify-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaApple className="w-5 h-5" />
              <span className="font-medium">Download Now</span>
            </Link>
            <Link
              href={"mailto:manu.development.app@gmail.com"}
              className="group inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <FiMail className="w-4 h-4" />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 px-4 border-t border-zinc-100">
        <div className="container flex flex-col space-y-8 max-w-4xl md:py-16 my-15 mx-auto">
          <FAQList />
        </div>
        <div className="flex items-center text-zinc-600 justify-center space-x-3 mb-2">
          <Link
            href={
              "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            }
            target="_blank"
            className="text-sm  hover:text-zinc-900 transition-colors"
          >
            Terms of Use
          </Link>
          <p className="text-4xl">•</p>
          <Link
            href={"https://khrona-pp-iosapp.netlify.app/"}
            target="_blank"
            className="text-sm hover:text-zinc-900 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="text-zinc-500">
          © {new Date().getFullYear()} Emanuele Di Pietro - Khrona
        </p>
      </footer>
    </main>
  );
}
