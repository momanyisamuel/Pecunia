import React from "react";

function Records({ data }:any) {
  return (
    <div>
      <div className="table border w-full">
        <table className="w-full rounded">
          <thead className="w-full text-left text-gray-600 text-base">
            <tr className="w-full border-b">
              <th className="pl-4 py-2 text-xs font-semibold text-gray-600">
                <div className="flex items-center">
                  Application
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 fill-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th className="py-2 text-xs font-semibold text-gray-600">
                <div className="flex items-center">
                  Status
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 fill-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th className="py-2 text-xs font-semibold text-gray-600">
                <div className="flex items-center">
                  Program
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 fill-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th className="py-2 text-xs font-semibold text-gray-600">
                <div className="flex items-center">
                  Requested
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 fill-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th className="py-2 text-xs font-semibold text-gray-600">
                <div className="flex items-center">
                  Date received
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 fill-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th className="py-2 text-xs font-semibold text-gray-600">
                <div className="flex items-center">
                  Tags
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 fill-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data?.map((item:any, value:any) => (
              <>
                <tr className="border-b w-full" key={item._id}>
                  <td className="pl-4 py-4 text-[14px] break-all max-w-[180px] pr-2">
                    <p className="break-all">
                      <a href={`/applications/applicant/${item._id}`}>
                        International Conference on Science Health and Medicine
                        (ICSHM) for {item.fullNames}
                      </a>
                    </p>
                  </td>
                  <td className="py-4 text-[14px]">
                    <span className="px-2 py-1 bg-[#FFF7D9] text-[#6B7280] rounded">
                      {item.applicationStatus}
                    </span>
                  </td>
                  <td className="py-4 text-[14px]">{item.location}</td>
                  <td className="py-4 text-[14px]">{item.institutionName}</td>
                  <td className="py-4 text-[14px]">{item.yearOfCompletion}</td>
                  <td className="py-1 max-w-[100px]">
                    <div className="flex h-full flex-wrap gap-1">
                      <span className="inline-block py-1 px-2 bg-gray-100 text-[#6B7280] p-2 rounded-2xl text-xs">
                        {item.applicationStatus}
                      </span>
                      <span className="inline-block py-1 px-2 bg-gray-100 text-[#6B7280] p-2 rounded-2xl text-xs">
                        {item.applicationStatus}
                      </span>
                      <span className="inline-block py-1 px-2 bg-gray-100 text-[#6B7280] p-2 rounded-2xl text-xs">
                        {item.applicationStatus}
                      </span>
                      <span className="inline-block py-1 px-2 bg-gray-100 text-[#6B7280] p-2 rounded-2xl text-xs">
                        {item.outstandingFees}
                      </span>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Records;
