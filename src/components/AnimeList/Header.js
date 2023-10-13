import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="text-lg underline hover:text-indigo-400">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
