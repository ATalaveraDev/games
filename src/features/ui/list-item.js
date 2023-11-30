export default function ListItem({ id, children, ...props }) {
  return (
    <li id={id} {...props}>{children}</li>
  );
}