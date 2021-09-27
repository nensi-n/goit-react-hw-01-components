import PropTypes from "prop-types";

export default function Statistics({ title, stats }) {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  function getRandomColor() {
    return `rgb(${randomIntegerFromInterval(
      0,
      255
    )}, ${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(
      0,
      255
    )})`;
  }
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map((data) => (
          <li
            key={data.id}
            className="item"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: "Upload stats",
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
