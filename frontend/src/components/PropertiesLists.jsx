import properties from '../data/propertiesData'
import Property from '../components/Property'

export default function PropertiesLists() {

  const propertyType = ['House', 'Single Family', 'Apartment', 'Office', 'Studio']

  return (
    <div className="container mx-auto p-10 grid lg:grid-cols-12 gap-8">
      <div className='lg:col-span-3'>
        <div className='border p-4 flex flex-col gap-4'>
          <h2 className="font-semibold mb-2 text-lg">Property Type</h2>
          {propertyType.map((property, index) => (
            <div key={index} className="flex space-x-4">
              <input type="checkbox" />
              <span className="text-sm">{property}</span>
            </div>
          ))}

          <div className='mt-8'>
            <h2 className="font-semibold mb-2 text-lg">Sort by price</h2>
            <div className="relative">
              <select className="w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-primary hover:border-primary shadow-sm focus:shadow-md appearance-none cursor-pointer md:py-3">
                <option>Lowest</option>
                <option>Highest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-9">
        <div className="grid lg:grid-cols-2 lg:gap-8">
          {properties.map((property, index) => (
            <Property key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
