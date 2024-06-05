import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const ProjectForm = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleCoverImageChange = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map(file => URL.createObjectURL(file)));
  };

  return (
    <div>
      <div className="flex justify-end pt-4 pr-4">
        <button className="text-gray-800 border-gray-800 border hover:scale-105 hover:ease-out duration-75 px-5 py-2 rounded-md font-medium">
          Create
        </button>
      </div>
      <div className="flex md:justify-around md:flex-row flex-col items-center">
        <div className="flex flex-col lg:flex-row sm:w-1/2">
          <div className="flex items-center flex-col lg:w-1/2 justify-center p-4">
            <div className="flex rounded justify-center flex-col items-center p-4 border w-40 border-dashed text-center border-zinc-900">
              <label className="cursor-pointer" htmlFor="cover-img">
                Upload Cover Image
              </label>
              <input
                className="hidden"
                type="file"
                name="cover-img"
                id="cover-img"
                onChange={handleCoverImageChange}
              />
            </div>

            <div className="h-[150px] sm:min-h-[100px] w-2/3 sm:w-[200px] border m-8">
              {coverImage ? (
                <img
                  className="object-contain h-full w-full"
                  src={coverImage}
                  alt="Cover"
                />
              ) : (
                <img
                  className=""
                  src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_1600%2Cc_limit/GettyImages-1143278588.jpg"
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="flex lg:w-1/2 items-center flex-col justify-center p-4">
            <p className="text-red-500 p-4">
              You can select a maximum of 6 images
            </p>
            <div className="flex rounded justify-center flex-col items-center p-4 border w-40 border-dashed text-center border-zinc-900">
              <label className="cursor-pointer" htmlFor="additional-imgs">
                Upload Images
              </label>
              <input
                className="hidden"
                type="file"
                multiple
                accept="image/*"
                required
                id="additional-imgs"
                onChange={handleImagesChange}
              />
            </div>

            <div className="flex flex-wrap gap-4 p-4">
              {images.map((image, index) => (
                <div key={index} className="h-24 w-36 border">
                  <img
                    className="object-contain h-24 w-36"
                    src={image}
                    alt={`Selected ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 flex justify-center px-6 w-full sm:p-0 mb-8">
          <div className="min-h-[350px] w-full sm:min-h-[450px] bg-zinc-800 sm:w-[370px] text-white p-6 rounded-md mt-12">
            {/* info div */}
            <div>
              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="client" className="text-white">
                  Category :
                </label>
               <select  className="text-gray-200 bg-zinc-700 border-0 rounded py-2 px-2" name="category" id="category">
                <option value="">Select Category</option>
                <option value="">Hospitals</option>
                <option value="">Hospitals</option>
               </select>
              </div>
              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="client" className="text-white">
                  Client :
                </label>
                <input
                  type="text"
                  id="client"
                  name="client"
                  className="text-gray-200 bg-zinc-700 border-0 rounded py-2 px-2"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="location" className="text-white">
                  Location :
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="text-gray-200 bg-zinc-700 border-0 rounded py-2 px-2"
                  placeholder="Mansarovar, Jaipur"
                />
              </div>
              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="builtUpArea" className="text-white">
                  Built Up Area :
                </label>
                <input
                  type="text"
                  id="builtUpArea"
                  name="builtUpArea"
                  className="text-gray-200 bg-zinc-700 border-0 rounded py-2 px-2"
                  placeholder="90000 Sq. M."
                />
              </div>
              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="status" className="text-white">
                  Status :
                </label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  className="text-gray-200 bg-zinc-700 border-0 rounded py-2 px-2"
                  placeholder="Under Construction"
                />
              </div>
              <div className="mb-4 flex flex-col gap-2">
                <label htmlFor="date" className="text-white">
                  Date :
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="text-gray-200 bg-zinc-700 border-0 rounded py-2 px-2"
                  placeholder="Date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
