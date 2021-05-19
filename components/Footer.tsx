import Link from "next/link";
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 gap-10 m-11">
        <div className="grid grid-row-2 gap-4">
          <h3 className="lg:text-3xl sm:text-base">Developed By</h3>
          <a
            href="https://sagnikbiswas.tech"
            title="Check some of my other projects"
          >
            <p className="lg:text-2xl sm:text-lg">Sagnik Biswas 🤘 2021</p>
          </a>
        </div>
        <div className="lg:grid grid-cols-3 gap-4 sm:grid grid-rows-3">
          <a href="https://www.linkedin.com/in/sbiswas2209/" target="_blank">
            <p className="text-gray-700 text-lg">LinkedIn</p>
          </a>
          <a href="https://www.github.com/sbiswas2209/" target="_blank">
            <p className="text-gray-700 text-lg">Github</p>
          </a>
          <a href="https://www.instagram.com/_its_sagnik" target="_blank">
            <p className="text-gray-700 text-lg">Instagram</p>
          </a>
        </div>
      </div>
      <div className="text-lg text-center pb-4 px-2">
        <Link href="/license">📜 LICENSE</Link>
        <p>
          Built using the amazing{" "}
          <a href="https://nextjs.org/" className="text-blue-800">
            Next.js 🔥
          </a>{" "}
          &{" "}
          <a href="https://tailwindcss.com/" className="text-blue-800">
            TailwindCSS💄
          </a>
        </p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
