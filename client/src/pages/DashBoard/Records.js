import React from "react";

function Records({ data }) {
  return (
    <div>
      <div className="table w-full">
        <table className="w-full border rounded">
          <thead className="w-full text-left text-gray-900 text-base">
            <tr className="w-full border-b">
              <th className="pl-4 py-4">Name</th>
              <th className="py-4">Location</th>
              <th className="py-4">Institution</th>
              <th className="py-4">Application status</th>
              <th className="py-4">Year of completion</th>
              <th className="py-4">Outstanding Balance</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data?.map((item, value) => (
              <>
                <tr className="border-b" key={item._id}>
                  <td className="pl-4 py-4">
                    <a href={`/admin/applicant/${item._id}`}>
                      {item.fullNames}
                    </a>
                  </td>
                  <td className="py-4">{item.location}</td>
                  <td className="py-4">{item.institutionName}</td>
                  <td className="py-4">
                    <span className="border p-1 border-red-400 text-red-400">
                      {item.applicationStatus}
                    </span>
                  </td>
                  <td className="py-4">{item.yearOfCompletion}</td>
                  <td className="py-4">{item.outstandingFees}</td>
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
