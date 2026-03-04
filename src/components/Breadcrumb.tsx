import { Province, Regency, District } from '../types'

interface BreadcrumbProps {
  selectedProvince?: Province
  selectedRegency?: Regency
  selectedDistrict?: District
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

function Breadcrumb({
  selectedProvince,
  selectedRegency,
  selectedDistrict,
  isSidebarOpen,
  onToggleSidebar,
}: BreadcrumbProps) {
  return (
    <nav className="breadcrumb bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 animate-fade-in">
      <div className="flex items-center gap-3">
        {/* Toggle Button - Show when sidebar is closed */}
        {!isSidebarOpen && (
          <button
            onClick={onToggleSidebar}
            className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200"
            aria-label="Buka sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        <ol className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap">
          {/* Indonesia - Home */}
          <li>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-500 cursor-pointer transition-all duration-200">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="hidden sm:inline">Indonesia</span>
            </span>
          </li>

          {selectedProvince && (
            <>
              <li className="text-gray-300">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 ${
                    selectedRegency
                      ? 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-500 cursor-pointer'
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  }`}
                >
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
                  <span className="truncate max-w-[100px] sm:max-w-none">{selectedProvince.name}</span>
                </span>
              </li>
            </>
          )}

          {selectedRegency && (
            <>
              <li className="text-gray-300">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 ${
                    selectedDistrict
                      ? 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-500 cursor-pointer'
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  }`}
                >
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
                  <span className="truncate max-w-[100px] sm:max-w-none">{selectedRegency.name}</span>
                </span>
              </li>
            </>
          )}

          {selectedDistrict && (
            <>
              <li className="text-gray-300">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/25">
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
                  <span className="truncate max-w-[100px] sm:max-w-none">{selectedDistrict.name}</span>
                </span>
              </li>
            </>
          )}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
