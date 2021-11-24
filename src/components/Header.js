function Header(props) {
  const { name } = props;
  return <h1 className="header">{`Welcome to ${name}`} </h1>;
}
export default Header;
