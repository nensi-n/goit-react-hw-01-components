import PropTypes from "prop-types";
import styles from "./statistical.module.css";

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
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.stat_list}>
        {stats.map((data) => (
          <li
            key={data.id}
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{data.label}</span>
            <span className={styles.percentage}>{data.percentage}%</span>
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
