import "./Widgets.css";

const TextWidget = ({ text }) => {
  return (
    <div className="widget text-widget">
      <span className="text">{text}</span>
    </div>
  );
};

export default TextWidget;
