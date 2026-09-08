import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Code2,
  ShoppingBag,
} from "lucide-react";

interface ChildLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: ChildLink[];
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
    children: [
      {
        label: "Company",
        href: "#about",
        description: "Who we are and what we do",
      },
      {
        label: "Our Team",
        href: "#teams",
        description: "Meet the people behind Sajims",
      },
      {
        label: "Careers",
        href: "#careers",
        description: "Open roles and how we hire",
      },
      {
        label: "How We Work",
        href: "#how-we-work",
        description: "Our process, from kickoff to ship",
      },
    ],
  },
  {
    label: "What we do",
    href: "#what-we-do",
  },
  {
    label: "Services",
    href: "#services",
    children: [
      {
        label: "Software Development",
        href: "#services",
        icon: <Code2 size={18} />,
        description: "Custom software, web & mobile apps",
      },
      {
        label: "Visit TechHub Store",
        href: "#techstore",
        icon: <ShoppingBag size={18} />,
        description: "Computer gadgets & software products",
      },
    ],
  },
  {
    label: "Teams",
    href: "#teams",
  },
  {
    label: "TechStore",
    href: "#techstore",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    if (!mobileOpen) setMobileDropdown(null);
  }, [mobileOpen]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(e.target as Node)
      ) {
        setDropdown(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdown(null);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching products for:", searchQuery);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-gradient-to-r from-[#0c2622] via-[#0a1e1b] to-[#050505] shadow-lg shadow-black/20 backdrop-blur-md"
            : "border-white/5 bg-gradient-to-r from-[#0c2622]/95 via-[#0a1e1b]/95 to-[#050505]/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex shrink-0 items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 shadow-md backdrop-blur-sm transition duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="/logo.jpeg"
                alt="Sajims Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-white">
                SAJIMS
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
                Tech Company
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav ref={desktopNavRef} className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="relative flex items-center">
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-[15px] font-medium text-slate-200 transition hover:text-cyan-300"
                >
                  {item.label}
                </a>

                {item.children && (
                  <button
                    type="button"
                    onClick={() =>
                      setDropdown(dropdown === item.label ? null : item.label)
                    }
                    aria-expanded={dropdown === item.label}
                    aria-haspopup="true"
                    className="rounded-full p-1 text-slate-400 transition hover:text-cyan-300"
                  >
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${
                        dropdown === item.label ? "rotate-180 text-cyan-300" : ""
                      }`}
                    />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {dropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 top-full z-50 mt-1 w-80 rounded-xl border border-white/10 bg-[#0b1f1c]/95 p-3 shadow-xl shadow-black/40 backdrop-blur-xl"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setDropdown(null)}
                            className="flex items-start gap-3 rounded-lg p-3 transition hover:bg-white/5"
                          >
                            {child.icon && (
                              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                                {child.icon}
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-medium text-white">
                                {child.label}
                              </p>
                              {child.description && (
                                <p className="mt-0.5 text-xs text-slate-400">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Search + Contact */}
          <div className="hidden items-center gap-3 lg:flex">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products"
                  className="w-64 rounded-full border border-white/15 bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 outline-none backdrop-blur-md transition focus:border-cyan-300/50 focus:bg-white/15 focus:ring-2 focus:ring-cyan-300/20 xl:w-80"
                />
              </div>
            </form>

            <a
              href="#contact"
              className="rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-yellow-500"
            >
              Contact us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="rounded-md p-2 text-white hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gradient-to-b from-[#0c2622] via-[#0a1e1b] to-[#050505]"
          >
            <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/20">
                  <img
                    src="/logo.jpeg"
                    alt="Sajims"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-white">SAJIMS</span>
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-2 text-white hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            <div className="h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6">
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products"
                    className="w-full rounded-full border border-white/15 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 outline-none backdrop-blur-md focus:border-cyan-300/50 focus:bg-white/15 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </div>
              </form>

              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        )
                      }
                      className="flex w-full items-center justify-between py-4 text-base font-medium text-white"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform duration-300 ${
                          mobileDropdown === item.label
                            ? "rotate-180 text-cyan-300"
                            : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileDropdown === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-1 pb-4 pl-2">
                            {item.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 rounded-lg py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                              >
                                {child.icon && (
                                  <span className="text-cyan-300">
                                    {child.icon}
                                  </span>
                                )}
                                <div>
                                  <p className="font-medium">{child.label}</p>
                                  {child.description && (
                                    <p className="text-xs text-slate-500">
                                      {child.description}
                                    </p>
                                  )}
                                </div>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-4 text-base font-medium text-white"
                  >
                    {item.label}
                  </a>
                )
              )}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 flex w-full items-center justify-center rounded-md bg-yellow-400 py-3.5 text-base font-semibold text-slate-900"
              >
                Contact us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}