import "./write.css";
// import Sidebar from "../../components/Sidebar/Sidebar";

import React, { useState, useRef} from 'react';
import JoditEditor from "jodit-react"
import { Card,Label} from "reactstrap"

function Write() {
  const editor = useRef(null);
	const [content, setContent] = useState('');
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.unsplash.com/photo-1666694421187-75957423ee77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeText">
          <Label for="content" className="fontBlog"><i class="fa-solid fa-pen-to-square"></i>&nbsp;Write your blog below:</Label>
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => {}} />
          <button className="writeSubmit" type="submit">
          Publish
        </button>
        </div>
      </form>
      </div> 
  );
}

export default Write;