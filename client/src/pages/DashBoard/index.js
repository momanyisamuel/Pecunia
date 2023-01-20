import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import applicant from "../../api/applicant";
import Records from "./Records";
import Pagination from "./Pagination";

function DashBoard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const getTableData = async () => {
    try {
      const applicants = await applicant.get("api/applicant/");
      setData(applicants.data.data);
      setLoading(false);
      console.log(applicants.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div>
      <Layout>
        <div className="body">
          <div className="applicants m-0 mx-auto w-10/12">
            <h3 className="mb-4 mt-5 text-3xl">List of applicants</h3>
            <Records data={currentRecords} />
            <div className="mt-4">
              <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default DashBoard;
