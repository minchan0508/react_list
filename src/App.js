import List from "./List";

function App() {
  const list_data = List.data;
  console.log(List.data);

  const Test = list_data.map((item) => {
    return (
      <li>
        이름 :{item.name}{" "}
        <span>level : {item.level == undefined ? "측정불가" : item.level}</span>
      </li>
    );
  });
  console.log(list_data);
  return Test;
}

export default App;
