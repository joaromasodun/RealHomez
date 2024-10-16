/* eslint-disable react/prop-types */
import img from '../assets/img.jpg'
import agent from '../assets/hero.jpg'
import { IoLocation } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa"

import PropertyInfo from "../UI/PropertyInfo"

export default function Property({property}) {
  return (
    <div className="shadow-box-shadow-4">
      <div className="thumbnail relative shadow-box-shadow-4">
        <img src={img} alt="" />
        <div className="absolute bottom-0 px-4 pb-2 w-full bg-gradient-color-5">
          <div className="text-white font-light text-sm flex items-center space-x-1">
            <i>
              <IoLocation className="text-lg" />
            </i>
            <span>{property?.address}, {property?.city}.</span>
          </div>
        </div>
      </div>
      <div className="card-body bg-white">
        <div className="px-5 pt-4">
          <h5 className="text-lg font-semibold mb-2">
            <span className="text-primary">${property?.price}</span>{" "}
            <label className="text-sm font-normal">/Month</label>
          </h5>
          <h4 className="text-lg font-semibold mb-2">
            {property?.propertyType}
          </h4>
          <p className="text-sm text-gray-600 mb-6">
            <span className="leading-5">
              Beautiful Huge 1 Family House In Heart Of Westbury. Newly
              Renovated With New Wood
            </span>
          </p>
          <div>
            <PropertyInfo numberOfBedroom={3} numberOfBathroom={4} feet={200} />
          </div>
        </div>
      </div>
      <div className="p-5 border-t flex space-between items-center justify-between">
        <div className="flex gap-x-4 items-center">
          <div className="h-10 w-10">
            <img src={agent} alt="" className="w-full h-full rounded-full" />
          </div>
          <div>
            <h4 className="text-sm font-semibold">William Gallas</h4>
            <span className="text-xs text-gray-500">Estate Agent</span>
          </div>
        </div>
        <div className="p-1 cursor-pointer">
          <FaRegHeart className="text-xl text-primary" />
        </div>
      </div>
    </div>
  );
}
