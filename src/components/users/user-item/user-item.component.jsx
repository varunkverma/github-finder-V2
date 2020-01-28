import React, { Component } from "react";

class UserItem extends Component {
  //   state = {
  //     id: "1",
  //     login: "mojombo",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo"
  //   };

  render() {
    const { avatar_url, login, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            target="blank"
            className="btn btn-dark btn-sm my-1"
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
