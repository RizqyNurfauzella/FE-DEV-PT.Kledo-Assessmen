import { RegionData } from '../types'

export async function regionLoader(): Promise<RegionData> {
  const response = await fetch('/data/indonesia_regions.json')
  const data: RegionData = await response.json()
  return data
}
