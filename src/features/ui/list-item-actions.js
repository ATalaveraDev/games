export default function ListItemActions({actions}) {
  return (
    <>
      {actions.map((item) => (
        <button key={item.label} onClick={item.fn}>{item.label}</button>
      ))}
    </>
  );
}