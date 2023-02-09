import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import applicant from "../../api/applicant";
import Layout from "../Layout";

function Applicant() {
  const [applicantDetails, setApplicantDetails] = useState();
  const { applicantId } = useParams();

  useEffect(() => {
    fetchApplicant();
  }, []);
  const fetchApplicant = async () => {
    try {
      const res = await applicant.get(`api/applicant/${applicantId}`);
      setApplicantDetails(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Layout>
        <div className="body">
          <div className="m-0 mx-auto w-10/12">
            <div className="heading py-4 border-b">
              <div className="breadcrumb font-semibold text-[#333]">
                <p>Applicant / {applicantDetails?.fullNames}</p>
              </div>
            </div>
            <div className="personal flex gap-3 mt-6 border rounded py-8 px-4">
                <div className="name flex-1">
                    <h3>Contact Info</h3>
                    <p>{applicantDetails?.personalContactInfo}</p>
                </div>
                <div className="name flex-1">
                    <h3>Registration Number</h3>
                    <p>{applicantDetails?.registrationNumber}</p>
                </div>
                <div className="name flex-1">
                    <h3>Division</h3>
                    <p>{applicantDetails?.division}</p>
                </div>
                <div className="name flex-1">
                    <h3>Location</h3>
                    <p>{applicantDetails?.location}</p>
                </div>
                <div className="name flex-1">
                    <h3>Sublocation</h3>
                    <p>{applicantDetails?.sublocation}</p>
                </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Applicant;
