
type buttonProps = {
  children: string;
};
const Button = ({ children }: buttonProps) => {
  return <button className="py-2 px-4 bg-red-600 rounded">{children}</button>;
};

export default Button;
