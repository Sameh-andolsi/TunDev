import React from "react";
import { useSelector, useDispatch } from "react-redux";

import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import LoadIcon from "../../images/loading.gif";
import { getSuggestions } from "../../redux/actions/suggestionsAction";

const RightSideBar = () => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="mt-3 rightside">
      <UserCard user={auth.user} />

      <div className="d-flex justify-content-between align-items-center my-2">
        <h5
          style={{ color: "crimson ", fontSize: "18px", textAlign: "center" }}
        >
          Suggestions for you
        </h5>
        {!suggestions.loading && (
          <i
            className="fas fa-redo"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(getSuggestions(auth.token))}
          />
        )}
      </div>

      {suggestions.loading ? (
        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user) => (
            <UserCard key={user._id} user={user}>
              <FollowBtn user={user} />
            </UserCard>
          ))}
        </div>
      )}

      <div style={{ opacity: 0.5 }} className="my-2">
        <a
          href="https://www.linkedin.com/in/samehlandolsi/"
          target="_blank"
          rel="noreferrer"
          style={{
            wordBreak: "break-all",
            color: "blue ",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          https://www.linkedin.com/in/samehlandolsi/
        </a>
        <small className="d-block">Welcome to our World</small>

        <small>&copy; 2023 TunDev HARDCODE OFFICIAL</small>
      </div>
    </div>
  );
};

export default RightSideBar;
