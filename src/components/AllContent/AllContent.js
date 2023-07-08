import React from "react";
import "./AllContent.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../../images/user.jpg";
import wikipedia from "../../images/w.svg";
import elon1 from "../../images/eleon1.jpg";
import elon2 from "../../images/eleon2.jpg";
import xdop from "../../images/xdop.jpg";
import elon3 from "../../images/elon3.jpg";
import grap from "../../images/grap.jpg";
import {
  faAngleRight,
  faBars,
  faCommentDots,
  faEllipsis,
  faEllipsisVertical,
  faImage,
  faLightbulb,
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
                  <a href="/" className="d-flex justify-content-around">
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
        <div className="search_content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 order-md-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                eligendi natus harum dolore vero tempora molestias possimus sed
                ab quis earum ad, quos quisquam adipisci exercitationem
                voluptates beatae voluptatibus sapiente. Iure adipisci,
                reprehenderit possimus corrupti similique quam necessitatibus
                qui deleniti blanditiis repellat fuga, consectetur magnam, non
                amet provident labore veniam assumenda ad illum recusandae odio
                nisi! Vero, deleniti? Fugiat, recusandae provident tempora
                asperiores, ratione necessitatibus nemo voluptates doloribus
                quis atque odit similique obcaecati neque voluptatibus
                repudiandae! Cumque nisi unde tenetur praesentium nesciunt
                excepturi corporis. Debitis officiis aliquid saepe adipisci,
                repudiandae velit dolorum nihil voluptas excepturi ea error qui
                dolore optio aperiam, sequi eligendi placeat nemo numquam animi.
                Beatae magni blanditiis vero ducimus facere quam perspiciatis
                voluptatum nisi inventore, deleniti, vel rem eos laboriosam
                incidunt laudantium cupiditate repudiandae optio! Voluptatem ea
                unde atque, eveniet suscipit vero dolorem officiis. Numquam,
                perferendis porro ut rerum eum voluptatum error asperiores sunt!
                Itaque, omnis nisi nemo vitae quo laboriosam porro unde repellat
                consequuntur ipsum inventore laborum reprehenderit, odio eaque
                nobis, optio dolor illum ratione explicabo fugiat praesentium
                enim nulla dolore sequi. Nesciunt, laudantium vero vel magni
                modi exercitationem eos a maiores quae, tenetur possimus animi
                nobis, eveniet velit beatae libero aut sapiente laboriosam!
                Enim, obcaecati?
              </div>
              <div className="col-lg-8">
                <ul>
                  <li className="about_search">
                    <a href="/">
                      <div className="search_result_link d-flex justify-content-between">
                        <div className="">
                          <h3>
                            <a href="/">Elon Musk</a>
                          </h3>
                          <p>https://en.wikipedia.org/wiki/Elon_Musk</p>
                        </div>
                        <div className="wikipedia_logo d-flex align-items-center">
                          <div className="wiki_logo">
                            <img src={wikipedia} alt="" />
                          </div>
                          <div className="bulb">
                            <FontAwesomeIcon
                              className="bulb_icon"
                              icon={faLightbulb}
                            ></FontAwesomeIcon>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="search_paragaph">
                      <p>
                        Elon Reeve Musk is
                        <strong>a business magnate and investor</strong> . He is
                        the founder, CEO and chief engineer of SpaceX; angel
                        investor, CEO and product architect of Tesla, Inc.;
                        founder, owner, CTO and chairman of X Corp. and Twitter;
                        founder of the Boring Company; co-founder of Neuralink
                        and OpenAI; and president of ...
                        <a href="/">see more</a>
                      </p>
                    </div>

                    <div className="content">
                      <div className="row elon_some">
                        <div className="col-lg-6">
                          <div className="early_life" id="early-life">
                            <a href="">
                              <h4>Early life</h4>
                            </a>

                            <h6>Childhood and family</h6>
                            <p>
                              Childhood and family Elon Reeve Musk was born on
                              June 28, 1971, in Pretoria, one of South Africa's
                              capital cities. Musk has British and Pennsylvania
                              Dutch ancestry. His mother is ...{" "}
                              <a href="/">see more</a>
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <a href="/">
                            <img src={elon1} alt="" />
                          </a>
                        </div>
                        <div className="col-lg-3">
                          <a href="/">
                            <img src={elon2} alt="" />
                          </a>
                        </div>

                        <div className="col-lg-6 mt-2">
                          <a href="">
                            <img className="xdop" src={xdop} alt="" />
                          </a>
                        </div>
                        <div className="col-lg-6">
                          <div className="business_career" id="business-career">
                            <a href="/">
                              <h4>Business career</h4>
                            </a>

                            <h6>ZIP2</h6>
                            <p>
                              In 1995, Musk, his brother Kimbal, and Greg Kouri
                              founded Zip2. Errol Musk provided them with
                              $28,000 in funding. The company developed an
                              Internet city guide with maps, directions, and
                              yellow pages ...
                              <a href="/">see more</a>
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-2">
                          <div
                            className="other_activities"
                            id="other-activities"
                          >
                            <a href="/">
                              <h4>Other Activies</h4>
                            </a>

                            <h6>Musk Foundation</h6>
                            <p>
                              Musk is president of the Musk Foundation, whose
                              stated purpose is to provide solar-power energy
                              ...
                              <a href="/">see more</a>
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 mt-2">
                          <a href="/">
                            <img className="img_border" src={elon3} alt="" />
                          </a>
                        </div>
                        <div className="col-lg-3 mt-2">
                          <a href="/">
                            <img className="img_border" src={grap} alt="" />
                          </a>
                        </div>
                        <div className="col-lg-6 mt-2">
                          <div className="welth" id="welth">
                            <a href="/">
                              <h4>Welth</h4>
                            </a>

                            <h6>Net Worth</h6>
                            <p>
                              Musk made $175.8 million when PayPal was sold to
                              eBay in 2002. He was first listed on the Forbes
                              Billionaires List in 2012, with a net worth of $2
                              billion. At the start of 2020, Musk had a net
                              worth of $27 billion. By ...
                              <a href="/">see more</a>
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 ">
                          <div className="personal_view" id="personal_view">
                            <a href="/">
                              <h4>Personal views and Twitter usage</h4>
                            </a>
                            <p>
                              Since joining Twitter in 2009, Musk has been an
                              active user and has over 100 million followers as
                              of June 2022 . He posts memes, promotes business
                              interests, and comments on contemporary political
                              and cultural issues. Musk's statements have ...
                              <a href="/">see more</a>
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-2">
                          <div className="personal_life" id="personal_life">
                            <a href="/">
                              <h4>Personal life</h4>
                            </a>
                            <p>
                              From the early 2000s until late 2020, Musk resided
                              in California, where both Tesla and SpaceX were
                              founded. In 2020, he moved to Texas, saying that
                              California had become
                              <a href="/">see more</a>
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-2">
                          <div
                            className="public_presception"
                            id="public_presception"
                          >
                            <a href="/">
                              <h4>Public perception</h4>
                            </a>
                            <p>
                              Though Musk's ventures were influential within
                              their own industries in the 2000s, Musk only
                              became a public figure in the early 2010s. He is
                              <a href="/">see more</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <a href="/" className="see_wiki">
                        see all on wikipedia
                        <FontAwesomeIcon
                          className="angle_right"
                          icon={faAngleRight}
                        ></FontAwesomeIcon>
                      </a>
                    </div>
                    <div className="content_menu">
                      <small>From Wikipedia</small>
                      <h3>Content</h3>
                      <ul className="content_main_menu">
                        <li>
                          <a href="/">Early Life</a>
                        </li>
                        <li>
                          <a href="/">Business Career</a>
                        </li>
                        <li>
                          <a href="/">Other activities</a>
                        </li>
                        <li>
                          <a href="/">Welth</a>
                        </li>
                        <li>
                          <a href="/">Personal View</a>
                        </li>
                        <li>
                          <a href="/">Public perception</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllContent;
