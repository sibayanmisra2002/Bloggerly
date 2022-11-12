import "./setting.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Setting() {
    return (
      <div className="settings">
        <Sidebar />
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-upload"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
              />
            </div>
            <label>Username</label>
            <input type="text" placeholder="John" name="name" />
            <label>Email</label>
            <input type="email" placeholder="johncena@gmail.com" name="email" />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
            <label>University</label>
            <input type="text" placeholder="University of Engineering and Management" name="university" />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
  );
}

export default Setting;