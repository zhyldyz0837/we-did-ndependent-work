import "./GreenLink.css";
function GreenLink(props) {
  return (
    <a href={props.to} className="GreenLink">
      {props.children}
    </a>
  );
}

export default GreenLink;
