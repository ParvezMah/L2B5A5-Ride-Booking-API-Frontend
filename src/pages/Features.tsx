import { AdminFeatures } from '@/components/modules/Features/AdminFeatures'
import { DriverFeatures } from '@/components/modules/Features/DriverFeatures'
import { RiderFeatures } from '@/components/modules/Features/RiderFeatures'


export default function Features() {
  return (
    <div>
      <AdminFeatures/>
      <DriverFeatures/>
      <RiderFeatures/>
    </div>
  )
}
