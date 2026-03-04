import { useState, useEffect, useCallback } from 'react'
import { useLoaderData } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Breadcrumb from './components/Breadcrumb'
import MainContent from './components/MainContent'
import { RegionData, FilterState, Province, Regency, District } from './types'

const STORAGE_KEY = 'regionFilter'

function getInitialState(): FilterState {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      return JSON.parse(saved)
    } catch {
      return { province: '', regency: '', district: '' }
    }
  }
  return { province: '', regency: '', district: '' }
}

function App() {
  const data = useLoaderData() as RegionData
  const [filter, setFilter] = useState<FilterState>(getInitialState)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Save filter to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filter))
  }, [filter])

  // Get selected entities
  const selectedProvince: Province | undefined = data.provinces.find(
    (p) => p.id.toString() === filter.province
  )

  const selectedRegency: Regency | undefined = data.regencies.find(
    (r) => r.id.toString() === filter.regency
  )

  const selectedDistrict: District | undefined = data.districts.find(
    (d) => d.id.toString() === filter.district
  )

  // Get filtered regencies based on selected province
  const filteredRegencies = filter.province
    ? data.regencies.filter(
        (r) => r.province_id.toString() === filter.province
      )
    : []

  // Get filtered districts based on selected regency
  const filteredDistricts = filter.regency
    ? data.districts.filter((d) => d.regency_id.toString() === filter.regency)
    : []

  const handleProvinceChange = useCallback((value: string) => {
    setFilter({
      province: value,
      regency: '',
      district: '',
    })
  }, [])

  const handleRegencyChange = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      regency: value,
      district: '',
    }))
  }, [])

  const handleDistrictChange = useCallback((value: string) => {
    setFilter((prev) => ({
      ...prev,
      district: value,
    }))
  }, [])

  const handleReset = useCallback(() => {
    setFilter({ province: '', regency: '', district: '' })
  }, [])

  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen((prev) => !prev)
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        provinces={data.provinces}
        regencies={filteredRegencies}
        districts={filteredDistricts}
        filter={filter}
        onProvinceChange={handleProvinceChange}
        onRegencyChange={handleRegencyChange}
        onDistrictChange={handleDistrictChange}
        onReset={handleReset}
        isOpen={sidebarOpen}
        onToggle={handleSidebarToggle}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Breadcrumb */}
        <Breadcrumb
          selectedProvince={selectedProvince}
          selectedRegency={selectedRegency}
          selectedDistrict={selectedDistrict}
          isSidebarOpen={sidebarOpen}
          onToggleSidebar={handleSidebarToggle}
        />

        {/* Main Content */}
        <MainContent
          selectedProvince={selectedProvince}
          selectedRegency={selectedRegency}
          selectedDistrict={selectedDistrict}
        />
      </div>
    </div>
  )
}

export default App
