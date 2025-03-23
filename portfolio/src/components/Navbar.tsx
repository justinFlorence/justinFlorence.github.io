import Link from 'next/link';
import JFLogo from './JFLogo';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <JFLogo />
        <div className="flex gap-6 items-center text-white">
          <Link href="/blog" className="hover:text-blue-400 transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="/resume" className="hover:text-blue-400 transition-colors">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
