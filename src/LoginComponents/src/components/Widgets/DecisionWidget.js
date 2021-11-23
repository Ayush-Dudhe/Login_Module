import "./Widgets.css";

const DecisionWidget = ({ text }) => {
  return (
    <div className="widget decision-widget">
      <span className="text dw-text">{text}</span>
    </div>
  );
};

export default DecisionWidget;
