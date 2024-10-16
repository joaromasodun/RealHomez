/* eslint-disable react/prop-types */
export default function SectionHeader({subText, mainHeader}) {
  return(
    <div className="text-center my-2">
      <span className="inline bg-secondary text-white py-1 px-2 rounded-full text-sm font-normal">{subText}</span>
      <h2 className="mt-2 font-bold text-2xl md:text-3xl md:mt-4 lg:text-4xl lg:mt-6 bg-opacity-10">{mainHeader}</h2>
    </div>
  )
}
