import { format } from "date-fns";
import style from "./Table.module.css";
import { Link } from "react-router-dom";
const Table = ({ data }) => {
  // const [headElements] =useState(Object.keys(data.slice(2)[0]))
  const headElements = ["Title", "Date", "Duration"];
  return (
    <div className={style.TableContainer}>
      <table cellSpacing={0}>
        <thead>
          <tr>
            {headElements.map((el, index) => {
              return <th key={index}>{el}</th>;
            })}
          </tr>
          <tr style={{ boxShadow: "none", height: 15 }}></tr>
        </thead>
        <tbody>
          {data.map((podcastData, index) => {
            return <Row key={podcastData.trackId} dataRow={podcastData} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const Row = ({ dataRow }) => {
  return (
    <tr>
      <td>
        <Link
          to={`/podcast/${dataRow.collectionId}/episode/${dataRow.trackId}`}
        >
          {dataRow.trackName}
        </Link>
      </td>
      <td>{formatDate(dataRow.releaseDate)}</td>
      <td>{milisecondsToMinutes(dataRow.trackTimeMillis)}</td>
    </tr>
  );
};

const milisecondsToMinutes = (miliseconds) => {
  return format(new Date(miliseconds), "hh:mm:ss");
};

const formatDate = (date) => {
  return format(new Date(date), "dd/MM/yyyy");
};
export default Table;
