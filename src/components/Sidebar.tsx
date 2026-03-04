import { Province, Regency, District, FilterState } from '../types'

interface SidebarProps {
  provinces: Province[]
  regencies: Regency[]
  districts: District[]
  filter: FilterState
  onProvinceChange: (value: string) => void
  onRegencyChange: (value: string) => void
  onDistrictChange: (value: string) => void
  onReset: () => void
  isOpen: boolean
  onToggle: () => void
}

function Sidebar({
  provinces,
  regencies,
  districts,
  filter,
  onProvinceChange,
  onRegencyChange,
  onDistrictChange,
  onReset,
  isOpen,
  onToggle,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-sm"
          onClick={onToggle}
        />
      )}

      {/* Sidebar Container - maintains space in layout */}
      <div
        className={`transition-all duration-300 ease-out ${
          isOpen ? 'w-72' : 'w-0'
        }`}
      >
        {/* Sidebar */}
        <aside
          className={`fixed lg:fixed z-50 top-0 left-0 h-full w-72 bg-white border-r border-gray-200 p-6 flex flex-col shadow-xl transition-transform duration-300 ease-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          style={{ willChange: 'transform' }}
        >
          {/* Header with Logo and Toggle */}
          <div className="flex items-center justify-between mb-10 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-semibold text-gray-800">Frontend Assessment</span>
            </div>
            {/* Close Button inside sidebar */}
            <button
              onClick={onToggle}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Tutup sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Filter Section */}
          <div className="flex-1 overflow-y-auto">
            <h3 className="text-xs font-medium text-gray-400 tracking-wider mb-6 uppercase animate-fade-in delay-75">
              Filter Wilayah
            </h3>

            {/* Province Select */}
            <div className="mb-5 animate-fade-in delay-75">
              <label className="block text-xs font-medium text-gray-400 tracking-wider mb-2 uppercase">
                Provinsi
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-blue-500"
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
              </div>
              <select
                name="province"
                value={filter.province}
                onChange={(e) => onProvinceChange(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all duration-200"
              >
                <option value="">Pilih Provinsi</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id.toString()}>
                    {province.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Regency Select */}
          <div className="mb-5 animate-fade-in delay-150">
            <label className="block text-xs font-medium text-gray-400 tracking-wider mb-2 uppercase">
              Kota/Kabupaten
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className={`w-5 h-5 transition-colors duration-200 ${filter.province ? 'text-blue-500' : 'text-gray-300'}`}
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
              </div>
              <select
                name="regency"
                value={filter.regency}
                onChange={(e) => onRegencyChange(e.target.value)}
                disabled={!filter.province}
                className="block w-full pl-10 pr-10 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:border-gray-200 disabled:hover:shadow-none"
              >
                <option value="">Pilih Kota/Kabupaten</option>
                {regencies.map((regency) => (
                  <option key={regency.id} value={regency.id.toString()}>
                    {regency.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className={`w-4 h-4 transition-colors duration-200 ${filter.province ? 'text-gray-400 group-hover:text-blue-500' : 'text-gray-300'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* District Select */}
          <div className="mb-8 animate-fade-in delay-225">
            <label className="block text-xs font-medium text-gray-400 tracking-wider mb-2 uppercase">
              Kecamatan
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className={`w-5 h-5 transition-colors duration-200 ${filter.regency ? 'text-blue-500' : 'text-gray-300'}`}
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
              </div>
              <select
                name="district"
                value={filter.district}
                onChange={(e) => onDistrictChange(e.target.value)}
                disabled={!filter.regency}
                className="block w-full pl-10 pr-10 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:border-gray-200 disabled:hover:shadow-none"
              >
                <option value="">Pilih Kecamatan</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id.toString()}>
                    {district.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className={`w-4 h-4 transition-colors duration-200 ${filter.regency ? 'text-gray-400 group-hover:text-blue-500' : 'text-gray-300'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 mb-6" />

          {/* Reset Button */}
          <button
            onClick={onReset}
            className="w-full py-3 px-4 border-2 border-blue-500 text-blue-500 rounded-xl font-medium hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            RESET
          </button>
        </div>
      </aside>
    </div>
    </>
  )
}

export default Sidebar
