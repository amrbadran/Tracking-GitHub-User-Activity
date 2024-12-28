function Activity(props) {
  return <li>{props.value}</li>;
}

function List(props) {
  const [listItems, setListItems] = props.listState;
  return (
    <ol>
      {listItems.map((elem) => (
        <Activity key={elem.key} value={elem.value} />
      ))}
    </ol>
  );
}

export default List;
