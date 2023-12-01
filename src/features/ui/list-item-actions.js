export default function ListItemActions({actions}) {
  // const actions = [
  //   {
  //     label: 'Edit',
  //     fn: () => alert('AAA')
  //   }
  // ];

  return (
    <>
      {actions.map((item) => (
        <button onClick={item.fn}>{item.label}</button>
      ))}
    </>
  );
}