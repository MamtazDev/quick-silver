import React from "react";
import "./Inspection.css";

const Search = () => {
  return (
    <div className="search_form">
      <form>
        <div className="d-flex align-items-center gap-4 mb-4">
          <div className="w-100">
            <label className="fs-6" htmlFor="name">
              Enter the insured’s name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type here..."
            />
          </div>
          <div className="w-100">
            <label className="fs-6" htmlFor="assign">
              Assigned to
            </label>
            <select id="assign">
              <option selected disabled>
              Assigned to
              </option>
              <option value="">A</option>
              <option value="">B</option>
            </select>
          </div>
          <div className="w-100">
            <label className="fs-6" htmlFor="status">
              Status
            </label>
            <select id="assign">
              <option selected disabled>
                Status
              </option>
              <option value="">Status A</option>
              <option value="">Status B</option>
            </select>
          </div>
        </div>
        <button className="fs-3">Search</button>
      </form>
    </div>
  );
};

export default Search;
