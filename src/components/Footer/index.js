import Link from "next/link";

const date = new Date;
const year = date.getFullYear();

const Footer = () => {
    return (
        <footer className="bg-base-200 p-4 shadow-sm rounded-xl">
            <p className="text-center">&copy; {year} ~ Created by <Link href="https://instagram.com/mahadisptr" target="_blank" className="underline hover:text-indigo-400">@mahadisptr</Link></p>
        </footer>
    )
}

export default Footer;