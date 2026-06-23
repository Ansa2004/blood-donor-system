import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function MainLayout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="main-content">
        <Topbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;

// The MainLayout component provides a common structure for all pages in the Blood Donor Management System.
//  Instead of writing the Sidebar and Topbar on every page, I created this reusable layout component.