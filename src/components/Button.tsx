interface IButton {
  text: string;
  href: string;
}

const Button = ({ text, href }: IButton) => {
  return (
    <>
      <a
        href={href}
        className="rounded-full bg-gradient-to-r from-green-500 to-sky-400 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
      >
        {text}
      </a>
    </>
  );
};

export default Button;
