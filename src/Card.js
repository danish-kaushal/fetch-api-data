import React from "react";

const Card = ({ curr }) => {
  const { first_name, last_name, avatar, email, id } = curr;
  return (
    <>
      <div className="col-10 col-md-6 col-lg-4 mt-5 ">
        <div className="d-flex gx-5 " style={{ width: "18rem" }} key={id}>
          <img
            src={avatar}
            className="card-img-top rounded-circle"
            alt={avatar}
            style={{height: "8rem"}}
          />
          <div className="card-body">
            <p className="card-title">
              <strong>First_Name:  </strong> 
              {first_name}
            </p>
            <p className="card-title">
              <strong>Last_Name:  </strong>
              {last_name}
            </p>
            <p className="card-title">
              <strong>Email:  </strong>
              {email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
