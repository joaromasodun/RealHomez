/* eslint-disable react/prop-types */
import { IoBedOutline } from "react-icons/io5"
import { LuBath } from "react-icons/lu"
import { PiBoundingBoxBold } from "react-icons/pi"

export default function PropertyInfo ({numberOfBedroom, numberOfBathroom, feet}) {
  return (
    <ul className="flex space-x-3 mb-4 text-gray-500">
      <li className="border-r pr-4 border-primary">
        <div className="flex items-center space-x-1 ">
          <p className="font-semibold">{numberOfBedroom}</p>
          <i><IoBedOutline /></i>
        </div>
        <h6 className="text-xs">Bedroom</h6>
      </li>
      <li className="border-r pr-4 border-primary">
        <div className="flex items-center space-x-1 ">
          <p className="font-semibold">{numberOfBedroom}</p>
          <i><LuBath /></i>
        </div>
        <h6 className="text-xs">Bathroom</h6>
      </li>
      <li className="">
        <div className="flex items-center space-x-1 ">
          <p className="font-semibold">{numberOfBedroom}</p>
          <i><PiBoundingBoxBold /></i>
        </div>
        <h6 className="text-xs">Square ft.</h6>
      </li>
    </ul>
  )
}