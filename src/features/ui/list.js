import ListItem from './list-item';
import ListItemActions from './list-item-actions';

export default function List({ data, error, isFetching, onSelectItem, actions }) {
  if (error) {
    return <p>Error while fetching data</p>;
  }

  let list;

  list = data.map((item) => {
    if (actions) {
      return (
        <ListItem key={item._id} id={item._id}>
          <span>{item.name}</span>
          <ListItemActions actions={actions} />
        </ListItem>
      );
    } else {
      return (
        <ListItem
          key={item._id}
          id={item._id}
          onClick={() => onSelectItem(item)}
        >
          <span>{item.name}</span>
        </ListItem>
      );
    }
  });

  return (
    <>
      {isFetching && <p>Fetching data...</p>}
      {!isFetching && <ul>{list}</ul>}
    </>
  );
}