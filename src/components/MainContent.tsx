import { Province, Regency, District } from '../types'

interface MainContentProps {
  selectedProvince?: Province
  selectedRegency?: Regency
  selectedDistrict?: District
}

function MainContent({
  selectedProvince,
  selectedRegency,
  selectedDistrict,
}: MainContentProps) {
  const hasSelection = selectedProvince || selectedRegency || selectedDistrict

  if (!hasSelection) {
    return (
      <main className="flex-1 flex items-center justify-center bg-gray-50 relative overflow-hidden p-4 sm:p-8">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/5 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/5 rounded-full" />
        </div>

        <div className="text-center animate-fade-in relative z-10">
          <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-blue-100 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/10">
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">Selamat Datang!</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-sm mx-auto px-4">
            Pilih wilayah dari filter di sebelah kiri untuk melihat detail lokasi
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1 flex items-center justify-center bg-gray-50 p-4 sm:p-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/5 rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/3 rounded-full" />
      </div>

      <div className="text-center space-y-6 sm:space-y-8 max-w-2xl relative z-10 w-full">
        {/* Province Display */}
        {selectedProvince && (
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Provinsi
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 break-words">
              {selectedProvince.name}
            </h1>
          </div>
        )}

        {/* Arrow and Regency */}
        {selectedRegency && (
          <>
            <div className="flex justify-center animate-fade-in delay-75">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
            <div className="animate-fade-in delay-150">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Kota / Kabupaten
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 break-words">
                {selectedRegency.name}
              </h2>
            </div>
          </>
        )}

        {/* Arrow and District */}
        {selectedDistrict && (
          <>
            <div className="flex justify-center animate-fade-in delay-150">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
            <div className="animate-fade-in delay-225">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Kecamatan
              </div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 break-words">
                {selectedDistrict.name}
              </h3>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default MainContent
