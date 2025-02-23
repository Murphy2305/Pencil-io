import React from 'react'

function Hero() {
  return (
    <section className="relative bg-white dark:bg-black min-h-screen flex flex-col items-center">
      {/* Centering content using absolute positioning */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        
        {/* AI Diagram Text - Reduced Boldness */}
        <div className="flex items-center justify-center w-full">
          <h2 className="text-gray-900 dark:text-white border px-4 py-2 rounded-full text-center border-gray-900 dark:border-white text-base sm:text-lg font-medium">
            See What's New | <span className="text-blue-700 dark:text-sky-400 font-normal">AI Diagram</span>
          </h2>
        </div>

        {/* Main Content - Reduced Gap */}
        <div className="mx-auto max-w-screen-xl px-4 py-6 flex items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-2xl text-blue-700 dark:text-sky-400 font-bold sm:text-4xl whitespace-nowrap">
              Documents & diagrams
              <strong className="font-bold text-gray-900 dark:text-white sm:block">
                for engineering teams.
              </strong>
            </h1>

            <p className="mt-3 text-sm sm:text-lg text-gray-900 dark:text-gray-200 sm:max-w-lg mx-auto leading-relaxed">
              All-in-one markdown editor, collaborative canvas, and diagram-as-code builder.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-gray-900 dark:bg-white text-white dark:text-black px-12 py-3 text-xs font-medium shadow hover:bg-gray-700 dark:hover:bg-gray-300 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
