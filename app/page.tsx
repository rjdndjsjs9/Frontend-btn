"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-[#111214] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-16 md:pt-28 pb-8 sm:pb-12 md:pb-24 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[#111213] -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#05071A] via-[#0A1428] to-[#1A1510] opacity-80"></div>
          <div className="absolute inset-x-0 bottom-0 h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-t from-amber-900/20 via-amber-800/10 to-transparent"></div>
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mt-8 sm:mt-16 md:mt-[120px] mb-8 md:mb-16">
            <h1 className="font-bold mb-6 md:mb-8 leading-tight tracking-tight">
              <div className="text-center mb-6 md:mb-10 bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/15 text-transparent tracking-[-3%] bg-clip-text text-[#f1f1ef] text-2xl sm:text-3xl md:text-5xl lg:text-[68px] font-medium font-['Inter'] leading-tight md:leading-[75.14px] px-4">
                First Perpetual Prediction Market Don&apos;t Bet But Trade Your Country
              </div>
            </h1>
            <p className="text-center text-[#8b8b8b] text-sm sm:text-base lg:text-lg font-normal font-['Inter'] leading-6 md:leading-7 max-w-3xl mx-auto px-4">
              Unlock the power of perpetual contracts based on a country&apos;s progress, with predictions driven by key indicators such as GDP, inflation, currency rates and more. Trade long or short, with no time limits on your positions.
            </p>

            <div className="flex justify-center mt-8 md:mt-10 lg:mt-[80px] px-4">
              <button
                onClick={() => router.push("/dashboard")}
                className="text-white text-base sm:text-sm md:text-md lg:text-lg font-medium font-['Inter'] leading-loose px-4 sm:px-6 lg:px-[26px] py-3 md:py-4 lg:py-[16.25px] bg-gradient-to-br from-[#111214] to-[#22242a] rounded-[100px] shadow-[-12px_-12px_24px_0px_rgba(21,94,239,0.24)] shadow-[12px_12px_24px_0px_rgba(255,175,41,0.24)] outline outline-[3px] outline-[#155dee] inline-flex justify-center items-center gap-[13px] overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto"
              >
                Start Trading Now
              </button>
            </div>
          </div>

          <div className="relative mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mt-8 md:mt-10 lg:mt-20 px-4">
            <div className="absolute -inset-6 -rotate-180 bg-gradient-to-b from-[#ffaf29] to-[#155dee] outline outline-1 outline-offset-[-0.50px] outline-black blur-[200px]"></div>
            <div className="w-full aspect-[16.5/14.2] bg-gradient-to-b from-[#0A1428] via-[#1A2036] to-[#1A1510] rounded-xl overflow-hidden shadow-[0_0_100px_rgba(30,64,175,0.3)] border border-blue-900/40">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/BeTheNation3.png"
                  alt="Trading dashboard preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 mt-10 md:mt-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
            <div className="w-full lg:w-1/4 mb-8 lg:mb-0 flex flex-col justify-center">
              <h2 className="font-bold leading-tight">
                <span className="block w-full text-center lg:text-left bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/20 text-transparent bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[68px] font-medium font-['Inter'] tracking-[-3%] leading-tight md:leading-[75.14px]">
                  Why We&apos;re Different: A New Era of Trading
                </span>
              </h2>
            </div>

            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                {/* Card 1 */}
                <div className="w-full h-full p-4 md:p-6 bg-[#202122]/60 rounded-2xl shadow outline outline-1 outline-[#323232] flex flex-col gap-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-blue-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-blue-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg md:text-xl lg:text-2xl bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/20 text-transparent bg-clip-text font-medium leading-7">
                      Hold your position indefinitely
                    </div>
                    <div className="text-[#777777] text-sm md:text-base font-medium leading-6 md:leading-7 mt-2">
                      Say goodbye to traditional contract expirations! Our perpetual contracts allow you to trade long or short without worrying about expiry dates. Hold positions for as long as you want.
                    </div>
                  </div>
                </div>

                <div className="w-full h-full p-4 md:p-6 bg-[#202122]/60 rounded-2xl shadow outline outline-1 outline-[#323232] flex flex-col gap-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-blue-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-blue-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 2.25a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg md:text-xl lg:text-2xl bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/20 text-transparent bg-clip-text font-medium leading-7">
                      Trade based on key economic indicators.
                    </div>
                    <div className="text-[#777777] text-sm md:text-base font-medium leading-6 md:leading-7 mt-2">
                      Unlike traditional markets, BeTheNation.Fun lets you predict a country&apos;s future by evaluating key economic indicators such as GDP, inflation.
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-full h-full p-4 md:p-6 bg-[#202122]/60 rounded-2xl shadow outline outline-1 outline-[#323232] flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-blue-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-7 text-blue-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg md:text-xl lg:text-2xl bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/20 text-transparent bg-clip-text font-medium leading-7">
                      Maximize your potential returns
                    </div>
                    <div className="text-[#777777] text-sm md:text-base font-medium leading-6 md:leading-7 mt-2">
                      With leverage up to 5x, you can control a larger position with a smaller capital investment. Whether you&apos;re trading on economic growth or decline.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Ahead of the Market Section */}
      <section className="py-10 md:py-20 mt-20 md:mt-40 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/15 text-transparent tracking-[-3%] bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[68px] font-medium font-['Inter'] leading-tight md:leading-[75.14px]">
            Stay Ahead of the Market with Real-Time Data
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Live Leaderboard - Full width on mobile */}
          <div className="mb-8 bg-gradient-to-r from-black/0 to-black/20 rounded-2xl shadow outline outline-1 outline-[#323232] p-4 md:p-6 gap-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/15 text-transparent tracking-[-3%] bg-clip-text text-[#f1f1ef] text-2xl sm:text-3xl md:text-[40px] font-medium font-['Inter'] leading-tight">
                  Live<br />Leaderboard
                </div>
                <div className="mt-4 text-[#777777] text-sm md:text-base font-medium font-['Inter'] leading-7">
                  See how top traders are performing. Check out profit/loss rankings and accuracy rates of traders who have successfully predicted country trends.
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-[#1d1f22] rounded-2xl shadow outline outline-1 outline-[#202327] p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-base md:text-lg font-medium">Leaderboard</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#99a3b2]">
                      <path fillRule="evenodd" d="M12 6a2 2 0 11-4 0 2 2 0 014 0zM12 12a2 2 0 11-4 0 2 2 0 014 0zM12 18a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="text-[#676767] text-sm mb-2">You are ranked 167th in Indonesia</div>
                  <div className="divide-y divide-[#323232]">
                    {[
                      { rank: 1, name: "0xMeiline", amount: "$250,000", img: 1 },
                      { rank: 2, name: "0xClara", amount: "$12,000", img: 2 },
                      { rank: 3, name: "0xEdward", amount: "$10,000", img: 3 },
                      { rank: 167, name: "0xCeline", amount: "$1,000", img: 4, isUser: true }
                    ].map((user, index) => (
                      <div key={index} className="flex justify-between items-center py-2 text-xs sm:text-sm">
                        <span className={`${user.isUser ? 'text-white font-semibold' : 'text-[#697485]'}`}>
                          Rank #{user.rank}
                        </span>
                        <div className="flex items-center gap-2 flex-1 justify-center">
                          <Image
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                            src={`https://i.pravatar.cc/150?img=${user.img}`}
                            alt={`User ${user.img}`}
                            width={32}
                            height={32}
                          />
                          <span className={`${user.isUser ? 'text-white font-medium' : 'text-white'} text-xs sm:text-sm`}>
                            {user.name}
                          </span>
                        </div>
                        <span className="text-[#16b264] text-xs sm:text-sm">{user.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two column cards on larger screens, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Live Countryscore Data */}
            <div className="flex flex-col h-full bg-[#202122]/60 rounded-2xl shadow outline outline-1 outline-[#323232] p-4 md:p-6 gap-6">
              <div>
                <div className="bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/15 text-transparent tracking-[-3%] bg-clip-text text-[#f1f1ef] text-xl sm:text-2xl md:text-[32px] font-medium font-['Inter'] leading-tight">
                  Live Countryscore Data
                </div>
                <div className="mt-4 text-[#777777] text-sm md:text-base font-medium font-['Inter'] leading-7">
                  Track real-time GDP, inflation, and other key indicators for each country. See live updates for global economic performance and make smarter predictions.
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-sm bg-[#202327] rounded-xl p-4">
                  <div className="text-white text-xs mb-2">Live Countryscore</div>
                  <svg viewBox="0 0 300 100" className="w-full h-20 sm:h-24">
                    <polyline
                      fill="none"
                      stroke="#70E000"
                      strokeWidth="3"
                      points="0,80 40,60 80,65 120,20 160,40 200,10 240,30 280,20"
                    />
                    {[[0, 80], [40, 60], [80, 65], [120, 20], [160, 40], [200, 10], [240, 30], [280, 20]].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="4" fill="#70E000" />
                    ))}
                  </svg>
                  <div className="flex justify-between text-[#697485] text-[7px] sm:text-[8px] mt-2">
                    {["28 Apr", "29 Apr", "30 Apr", "1 May", "2 May", "3 May", "4 May", "5 May"].map(date => (
                      <span key={date}>{date}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Market Trends */}
            <div className="flex flex-col h-full bg-[#202122]/60 rounded-2xl shadow outline outline-1 outline-[#323232] p-4 md:p-6 gap-6">
              <div>
                <div className="bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/15 text-transparent tracking-[-3%] bg-clip-text text-[#f1f1ef] text-xl sm:text-2xl md:text-[32px] font-medium font-['Inter'] leading-tight">
                  Market Trends
                </div>
                <div className="mt-4 text-[#777777] text-sm md:text-base font-medium font-['Inter'] leading-7">
                  Interactive charts showing GDP progress, currency exchange rates, and market forecasts for the countries you&apos;re interested in.
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-sm bg-[#202326] rounded-2xl shadow outline outline-1 outline-[#202327] p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Image
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                      src="https://flagcdn.com/w80/us.png"
                      alt="USA Flag"
                      width={32}
                      height={32}
                    />
                    <span className="text-white text-base sm:text-lg font-medium">USA</span>
                    <span className="px-2 py-1 bg-[#068621] rounded-full text-white text-xs ml-auto">+2.5%</span>
                  </div>
                  <div className="space-y-1">
                    {[
                      { label: "Countryscore:", value: "1,839" },
                      { label: "24H Volume:", value: "$1,200,000" },
                      { label: "Index Price:", value: "$1,000,000" },
                      { label: "Market Sentiment:", value: "Bullish" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between text-xs sm:text-sm">
                        <span className="text-[#555]">{item.label}</span>
                        <span className="text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 px-4 sm:px-6 py-2 bg-[#155dee] rounded-full text-white font-medium text-sm sm:text-base">
                    Trade Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mt-20 md:mt-40 py-8 md:py-16 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          {/* Background glow effect */}
          <div className="absolute top-60 w-[1078px] h-[543px] bg-[radial-gradient(ellipse_62.33%_62.33%_at_50.00%_50.00%,_rgba(21,_94,_239,_0.60)_0%,_rgba(255,_175,_41,_0.60)_100%)] rounded-full blur-[150px]"></div>

          {/* Content with border and subtle glass effect */}
          <div className="relative bg-[#111214]/40 rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#323232] p-6 md:p-8 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
            <div className="text-center mb-6 md:mb-[40px] bg-gradient-to-b from-[#f1f1ef] to-[#f1f1ef]/15 text-transparent tracking-[-3%] bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[68px] font-medium font-['Inter'] leading-tight md:leading-[75.14px]">
              Join The Economic Revolution Today.
            </div>

            <p className="text-[#8b8b8b] mb-6 md:mb-10 max-w-[1027px] mx-auto text-sm md:text-base">
              Unlock the power of perpetual contracts based on a country&apos;s
              progress, with predictions driven by key indicators such as
              GDP, inflation, currency exchange, and more. Trade long or
              short, with no expiration on your positions.
            </p>

            <button
              onClick={() => router.push("/dashboard")}
              className="justify-center text-white text-base sm:text-sm md:text-md lg:text-lg font-sm font-['Inter'] leading-loose px-4 sm:px-6 lg:px-[28px] py-3 md:py-[12px] bg-gradient-to-br from-[#111214] to-[#22242a] rounded-[100px] shadow-[-12px_-12px_24px_0px_rgba(21,94,239,0.24)] shadow-[12px_12px_24px_0px_rgba(255,175,41,0.24)] outline outline-[2px] outline-[#155dee] inline-flex justify-center items-center gap-[13px] overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto"
            >
              Sign Up Now!
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-2 md:col-span-4">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                BeTheNation.Fun
              </h3>
              <p className="text-gray-400 text-xs md:text-sm max-w-xs">
                BeTheNation.Fun lets users trade GDP-based derivatives on
                the world&apos;s leading economies, with this proof-of-concept
                demo.
              </p>
            </div>

            {/* Links sections */}
            <div className="md:col-span-2">
              <div className="space-y-3">
                <a href="#" className="block text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-3">
                <a href="#" className="block text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="block text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  Telegram
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-3">
                <a href="#" className="block text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  Contact Support
                </a>
                <a href="#" className="block text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  Terms Of Service
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-3">
                <a href="#" className="block text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-8 md:mt-12 pt-6 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs md:text-sm">
              BeTheNation.Fun © 2025
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-2 md:mt-0">
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
