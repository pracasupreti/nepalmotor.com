import { DropdownField } from "@/components/DropdownField";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-center text-6xl font-bold mt-10">Exchange to EV</h1>

      <h3 className="text-center text-lg font-semibold mt-4">
        Your one-stop destination for electric vehicle exchange
      </h3>

      <div className="flex justify-center mt-8">
        <form className="w-full max-w-md">
          <h2 className="text-lg font-semibold mb-4">1. Owner Details</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="City"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <h2 className="text-lg font-semibold mt-4  mt-8">
            2. Vehicle Details
          </h2>
          <input
            type="text"
            placeholder="Vehicle Model"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Vehicle Type"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Make year"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Vehicle Color"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="KM driven"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Expected Valuation amount (in NPR)"
            className="w-full my-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="my-4 flex">
            <label className="text-lg font-semibold w-[50%]">
              Features:
            </label>
            <div className="flex flex-col ml-4">
              <div className="flex">
                <input
                  type="radio"
                  name="features"
                  value="full option"
                  className="mt-0"
                />
                <label className="ml-2">Full Option</label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="features"
                  value="mid option"
                  className="mt-0"
                />
                <label className="ml-2">Mid Option</label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="features"
                  value="dont know"
                  className="mt-0"
                />
                <label className="ml-2">I don't know</label>
              </div>
            </div>
          </div>

          <div className="my-4 flex gap-4">
            <label>Fuel type:</label>
            <select
              id="fuel"
              name="fuel"
              className="ml-4 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <hr />
          <div className="my-4 flex">
            <label className="text-lg font-semibold w-[50%]">
              Vehicle Condition:
            </label>
            <div className="flex flex-col ml-4">
              <div className="flex">
                <input
                  type="radio"
                  name="condition"
                  value="new"
                  className="mt-0"
                />
                <label className="ml-2">Like New</label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="condition"
                  value="minimal damage"
                  className="mt-0"
                />
                <label className="ml-2">Minimal damage</label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="condition"
                  value="mechanical issues"
                  className="mt-0"
                />
                <label className="ml-2">Mechanical Issues</label>
              </div>
            </div>
          </div>
          <hr />
          <div className="my-4 flex">
            <label className="text-lg font-semibold w-[50%]">Accidents:</label>
            <div className="flex flex-col ml-4">
              <div className="flex">
                <input
                  type="radio"
                  name="accidents"
                  value="yes"
                  className="mt-0"
                />
                <label className="ml-2">Yes</label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="accidents"
                  value="no"
                  className="mt-0"
                />
                <label className="ml-2">No</label>
              </div>
            </div>
          </div>

          <textarea
            placeholder="Additional Information if any accidents or damages"
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            cols={50}
          />
          <hr />
          <div className="my-4 flex">
            <label className="text-lg font-semibold w-[50%]">
              Transmission:
            </label>
            <div className="flex flex-col ml-4">
              <div className="flex">
                <input
                  type="radio"
                  name="transmission"
                  value="manual"
                  className="mt-0"
                />
                <label className="ml-2">Manual</label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="transmission"
                  value="automatic"
                  className="mt-0"
                />
                <label className="ml-2">Automatic</label>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4 mt-8">
            3. New Vehicle Details
          </h2>
          <input
            type="text"
            placeholder="Vehicle Brand (Leave empty if not applicable)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Vehicle Model (Leave empty if not applicable)"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-4 flex">
            <input
              type="number"
              placeholder="Minimum Price range"
              className="w-full mr-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Maximum Price range"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="my-4 flex">
            <label className="text-lg font-semibold w-[50%]">
              Looking to Finance? :
            </label>
            <div className="flex flex-col ml-4">
              <div className="flex">
                <input
                  type="radio"
                  name="finance"
                  value="yes"
                  className="mt-0"
                />
                <label className="ml-2">Yes</label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="finance"
                  value="no"
                  className="mt-0"
                />
                <label className="ml-2">No</label>
              </div>
            </div>
          </div>
          <input
            type="number"
            placeholder="Downpayment amount (If you are looking to finance)"
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Additional Information"
            className="w-full my-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            cols={50}
          />
            <input
              type="submit"
              value="Submit"
              className="cursor-pointer text-black mr-4 font-medium border-2 border-gray-500 py-2 px-6 focus:outline-none focus:ring-2 focus:ring-black hover:bg-gray-100"
            />
            <input
              type="reset"
              value="Reset"
              className="cursor-pointer text-gray-600 font-medium border-2 border-gray-400 py-2 px-6 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-50"
            />
        </form>
      </div>
    </>
  );
};

export default page;
