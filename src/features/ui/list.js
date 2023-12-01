import ListItem from './list-item';
import ListItemActions from './list-item-actions';

export default function List({ data, error, isFetching, onSelectItem, actions }) {
  if (error) {
    return <p>Error while fetching data</p>;
  }

  return (
    <>
      {isFetching && <p>Fetching data...</p>}
      {!isFetching && (
        <ul>
          {data.map((item) => (
            <ListItem key={item.id} onClick={() => onSelectItem(item)}>
              <span>{item.name}</span>
              {actions && <ListItemActions actions={actions} />}
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
}