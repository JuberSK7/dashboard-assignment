/* eslint-disable react/prop-types */
import AdminSideBar from "../components/AdminSideBar";
import { LiaEyeSolid } from "react-icons/lia";
import { IoMdThumbsUp } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { LiaComments } from "react-icons/lia";

const Dashboard = ({ searchTerm }) => {
  const articles = [
    { id: 73, views: "2.9k", comments: 210, status: "Published" },
    { id: 72, views: "1.5k", comments: 360, status: "Published" },
    { id: 71, views: "1.1k", comments: 150, status: "Published" },
    { id: 70, views: "1.2k", comments: 420, status: "Published" },
    { id: 69, views: "2.6k", comments: 190, status: "Published" },
    { id: 68, views: "1.9k", comments: 390, status: "Published" },
    { id: 67, views: "1.2k", comments: 580, status: "Published" },
  ];
  const filteredArticles = articles.filter((article) =>
    `Article${article.id}`
      .toLowerCase()
      .includes(searchTerm.replace(/\s+/g, "").toLowerCase())
  );

  return (
    <div className="admin_container">
      <AdminSideBar />
      <main className="dashboard" >
        <section className="box_container">
          <BoxContainer
            index={1}
            value={60.5}
            heading="Articles Views"
            Icon={LiaEyeSolid}
          />
          <BoxContainer
            index={2}
            value={150}
            heading="Likes"
            Icon={IoMdThumbsUp}
          />
          <BoxContainer
            index={3}
            value={320}
            heading="Comments"
            Icon={LiaComments}
          />
          <BoxContainer
            index={4}
            value={70}
            heading="Published"
            Icon={FiCheckCircle}
          />
        </section>
        <section className="table_wrapper">
          <div className="table_container">
            <div className="header">
              <h2>Recent Articles</h2>
              <button className="view-all">View All</button>
            </div>
            <div className="divider"></div>
            <table className="article-table">
              <thead>
                <tr>
                  <th>Article</th>
                  <th>Views</th>
                  <th>Comments</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredArticles?.map((article) => (
                  <tr key={article.id}>
                    <td>Article {article.id}</td>
                    <td>{article.views}</td>
                    <td>{article.comments}</td>
                    <td>
                      <span className="status published">{article.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const BoxContainer = ({ index, value, heading, Icon }) => {
  const bgColorClass = index % 2 === 0 ? "bg-color-1" : "bg-color-2";
  return (
    <div className={`box ${bgColorClass}`}>
      <div className="box_right">
        <h4>{value}k</h4>
        <p>{heading}</p>
      </div>
      <div className="box_left">
        <span>
          <Icon size={40} />
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
