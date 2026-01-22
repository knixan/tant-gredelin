
export default function Navbar() {
	return (
		<header className="border-b border-midgray">
			<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
				<div className="flex items-center text-black text-3xl gap-3">
					Tant Gredelin
				</div>
				<nav className="hidden md:flex text-gray-700 hover:text-black gap-6 font-heading text-lg">
					<a href="#hem" className="hover:text-warmbrown">Hem</a>
					<a href="#produkter" className="hover:text-warmbrown">Produkter</a>
					<a href="#omoss" className="hover:text-warmbrown">Om oss</a>
					<a href="#hittahit" className="hover:text-warmbrown">Hitta hit</a>
					<a href="#kontakt" className="hover:text-warmbrown">Kontakt</a>
				</nav>
				<button className="md:hidden text-2xl" aria-label="Öppna meny">☰</button>
			</div>
		</header>
	);
}
