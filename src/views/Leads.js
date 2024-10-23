import React,{useState} from "react";


const Leads = () => {
  // Dummy lead data
  const leadData = [
    {
      name: "Ritwik Tat",
      leadStage: "Demo",
      mobile: "123-456-7890",
      email: "ritwik@example.com",
      source: "Referral",
    },
    {
      name: "Ritesh Thakare",
      leadStage: "Interested",
      mobile: "987-654-3210",
      email: "ritesh@example.com",
      source: "Website",
    },
    {
      name: "Abhishek Dhanve",
      leadStage: "Contacted",
      mobile: "555-123-4567",
      email: "abhi@example.com",
      source: "Social Media",
    },
    {
      name: "Vinayak Sutar",
      leadStage: "Unqualified",
      mobile: "444-987-6543",
      email: "vinayak@example.com",
      source: "Email Campaign",
    },
    {
      name: "Sangram Tat",
      leadStage: "Demo",
      mobile: "444-987-6543",
      email: "sangram@example.com",
      source: "Referral",
    },
    {
      name: "Vishal Bhat",
      leadStage: "Under Review",
      mobile: "444-987-6543",
      email: "vishal@example.com",
      source: "Email Campaign",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 3; // Number of leads per page

  // Calculate the index of the last lead on the current page
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leadData.slice(indexOfFirstLead, indexOfLastLead);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(leadData.length / leadsPerPage);

  return (
    <div className="leads-container">
      <div className="leads-card">
        <h2 className="leads-title">Lead Management</h2>
        <table className="leads-table">
          <thead>
            <tr className="table-header">
              <th className="table-header-cell">Name</th>
              <th className="table-header-cell">Lead Stage</th>
              <th className="table-header-cell">Mobile</th>
              <th className="table-header-cell">Email</th>
              <th className="table-header-cell">Source</th>
            </tr>
          </thead>
          <tbody>
            {currentLeads.map((lead, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell name">{lead.name}</td>
                <td className="table-cell">{lead.leadStage}</td>
                <td className="table-cell">{lead.mobile}</td>
                <td className="table-cell">{lead.email}</td>
                <td className="table-cell">{lead.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leads;