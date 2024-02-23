import ModuleList from "../Modules/list";
import "./index.css";

function Home() {
  return (
    <div className="wrapper">
      <div className="modules">
        <ModuleList />
      </div>
      <div className="container">
        <div className="published-buttons">
          <button className="list-group-item list-group-item-action course-status-button">
            <i className="fas fa-times-circle"></i> Unpublished
          </button>
          <button className="list-group-item list-group-item-action course-status-button published-button">
            <i className="fas fa-check-circle"></i> Published
          </button>
        </div>

        <div className="list-group">
          <button className="list-group-item list-group-item-action course-status-button">
            <i className="fas fa-file-import"></i> Import Existing Content
          </button>
          <button className="list-group-item list-group-item-action course-status-button">
            <i className="fas fa-cloud-download-alt"></i> Import from Commons
          </button>
          <button className="list-group-item list-group-item-action course-status-button">
            <i className="fas fa-home"></i> Choose Home Page
          </button>
          <button className="list-group-item list-group-item-action course-status-button">
            <i className="fas fa-stream"></i> View Course Stream
          </button>
          <button className="list-group-item list-group-item-action course-status-button">
            <i className="fas fa-bullhorn"></i> New Announcement
          </button>
          <button className="list-group-item list-group-item-action course-status-button">
            <i className="fas fa-chart-bar"></i> View Analytics
          </button>
          <button className="list-group-item list-group-item-action course-status-button">
            <i className="fas fa-bell"></i> View Course Notifications
          </button>
        </div>
        <div className="to-do-list">
          <div className="to-do-list-header">To Do</div>
          <div className="to-do-list-item">
            <i className="fas fa-calendar"></i> Grade A1 - ENV + HTML
            <span>200 points • Sep 18 at 11:59pm</span>
          </div>
        </div>
        <div className="coming-up-list">
          <div className="coming-up-headers">
            <div className="coming-up-list-header">Coming Up</div>
            <div className="calendar-header">
              <i className="fas fa-calendar"></i>
              <a href="#" className="view-calendar-link">
                View Calendar
              </a>
            </div>
          </div>

          <div className="coming-up-list-item">
            <i className="fas fa-calendar"></i> CS50 18.01x 2023 Lecture
            <span>Sep 11 at 11:45am</span>
          </div>
          <div className="coming-up-list-item">
            <i className="fas fa-calendar"></i> CS50 18.02x 2023 Lecture
            <span>Sep 11 at 1pm</span>
          </div>
          <div className="coming-up-list-item">
            <i className="fas fa-calendar"></i> CS50 Web - Lecture
            <span>Summer 2 2023 - LECTURE</span>
          </div>
          <div className="coming-up-list-item">
            <i className="fas fa-calendar"></i> CS50 18.01x 2023 Lecture
            <span>Sep 11 at 7pm</span>
          </div>
          <div className="coming-up-list-item">
            <span>12 more in the next week...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
