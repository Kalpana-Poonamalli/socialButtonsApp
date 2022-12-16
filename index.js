const Button = (props) => {
  //  Write your code here.
  const { className, button } = props;
  return <button className={className}>{button}</button>;
};

const element = (
  //  Write your code here.

  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons">
      <Button className="btn button1" button="Like" />
      <Button className="btn button2" button="Comment" />
      <Button className="btn button3" button="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
