function Button(props) {
  function ascending_order() {}

  return (
    <>
      <button onClick={ascending_order}>오름차순</button>
      <button onClick={descending_order}>내림차순</button>
      <button onClick={level_order}>level기준</button>
    </>
  );
}

export default Button;
