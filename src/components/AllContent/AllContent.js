import React from "react";
import "./AllContent.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../../images/user.jpg";
import {
  faBars,
  faCommentDots,
  faEllipsis,
  faEllipsisVertical,
  faImage,
  faMagnifyingGlass,
  faMicrophone,
  faTrophy,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const AllContent = () => {
  return (
    <main id="all-content">
      <header>
        <div className="top_header">
          <div className="container-fluid mx-3">
            <div className="row">
              <div className="col-lg-2">
                <a href="/">
                  <img src={logo} className="img-fluid" alt="" />
                </a>
              </div>
              <div className="col-lg-6">
                <div className="search_area">
                  <form>
                    <button type="submit">
                      <FontAwesomeIcon
                        className="search_icon"
                        icon={faMagnifyingGlass}
                      ></FontAwesomeIcon>
                    </button>
                    <input
                      type="text"
                      className="search_bar"
                      placeholder="Ask me Anything..."
                    />
                    <FontAwesomeIcon
                      className="mx-1"
                      icon={faXmark}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="mx-1 micro_icon"
                      icon={faMicrophone}
                    >
                      {" "}
                    </FontAwesomeIcon>
                    <FontAwesomeIcon className="mx-1 img_icon" icon={faImage}>
                      {" "}
                    </FontAwesomeIcon>
                  </form>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-2 text-right">
                <div className="res_menu d-flex justify-content-between align-items-center">
                  <button>Sign in</button>
                  <div className="reward">
                    <span>48</span>
                    <span className="trophy">
                      <FontAwesomeIcon
                        className="main_trophy"
                        icon={faTrophy}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      className="bar"
                      icon={faBars}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="search_menu">
            <ul>
              <li>
                <a href="/" className="active">
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faMagnifyingGlass}
                  ></FontAwesomeIcon>
                  All
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faCommentDots}
                  ></FontAwesomeIcon>
                  CHAT
                </a>
              </li>
              <li>
                <a href="/">IMAGES</a>
              </li>
              <li>
                <a href="/">VIDEOS</a>
              </li>
              <li>
                <a href="/">NEWS</a>
              </li>
              <li>
                <a href="/">MAPS</a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon
                    className="me-3"
                    icon={faEllipsisVertical}
                  ></FontAwesomeIcon>
                  MORE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* search result */}
      <section className="all_search_result">
        <div className="search_results_few">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="total_search_result">
                  <p className="ms-5 mt-2">About 2,100,000 results</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ">
                <div className="user_info">
                  <a href="/" className="d-flex">
                    <img src={user} alt="" />
                    <div className="about_user">
                      <h3>Elon Musk</h3>
                      <p>American business magnate</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about_user_tag">
                  <a href="/">Biography</a>
                  <a href="/">TV shows</a>
                  <a href="/">Podcast</a>
                  <a href="/">Quotes</a>
                  <a href="/">Interviews</a>
                  <a href="/">Speeches</a>
                  <a href="/">Net worth</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllContent;
