
import Link from "next/link";

type NavbarProps = {
  activePage: string;
};

export default function Navbar({ activePage }: NavbarProps) {
  const menuItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "Bio", href: "/bio", id: "bio" },
    { name: "Assignment", href: "/assignment", id: "assignment" },
  ];

  return (
    <header className="w-full px-6 py-5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between
        bg-white/80 backdrop-blur-lg border border-slate-200
        rounded-2xl px-6 py-4 shadow-sm">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Suphawich-W02
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`px-4 py-2 rounded-xl text-sm font-medium
                transition-all duration-300 ${
                  activePage === item.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}
