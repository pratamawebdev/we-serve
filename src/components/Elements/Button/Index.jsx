const Button = (props) => {
  const { children, classname } = props;
  return (
    <a href="#" className={`text-base rounded-full font-semibold ${classname}`}>
      {children}
    </a>
  );
};

export default Button;
