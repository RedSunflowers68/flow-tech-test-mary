import "./Loader.css";

export const Loader = () => {
  return (
    <div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>is loading...</p>
    </div>
  );
};
