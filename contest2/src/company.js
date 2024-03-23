import "./styles/company.css";

export const Company = (obj) => {
  let objFormat = obj.userData.company; // Note the change from Company to company
  return (
    <>
      <h3>Company Information</h3>
      <div className="company">
        <p>Company Name:{objFormat.name}</p>
        <p>Role:{objFormat.title}</p>
        <p>epartment Name:{objFormat.department}</p>
      </div>
    </>
  );
};
