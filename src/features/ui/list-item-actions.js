export default function ListItemActions({itemId, actions}) {
  return (
    <>
      {actions.map((item) => (
        <button key={item.label} onClick={() => item.fn(itemId)}>{item.label}</button>
      ))}
    </>
  );
}