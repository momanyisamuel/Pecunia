import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import applicant from "../../api/applicant";


function DashBoard() {


  return (
    <div>
      <Layout>
        <div className="body">
          <div className="applicants m-0 mx-auto w-10/12">
            <h3 className="mb-4 mt-5 text-3xl">Dashboard</h3>
            
            <div className="mt-4">
              
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default DashBoard;
