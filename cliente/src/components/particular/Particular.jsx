import './Particular.css';
import React from 'react'

const Particular = () => {
    return (
        <div className="featuredTitle">
        <h1>Servicios Particulares</h1>
        <div className="particular">
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1593914370442-49d414beca24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                alt=""
              />
            </div>
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1607588330193-d0fb508bba95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1535655685871-dc8158ff167e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <div className="col">
                <div className="row">
                  <img
                    src="https://images.unsplash.com/photo-1549194898-60fd030ecc0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <div className="row">
                  {" "}
                  <img
                    src="https://images.unsplash.com/photo-1617061173934-a5d236662193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1513074340248-9782372e097d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>
      );
    };
export default Particular