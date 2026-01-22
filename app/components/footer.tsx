export default function Footer() {
	return (
		<footer id="kontakt" className="bg-blackpure text-whitepure">
			<div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
				<div>
					<h3 className="font-heading text-xl mb-3 text-blush">Kontakt</h3>
					<p>Tant Gredelin</p>
					<p>Telefon:
						<a href="tel:0700000000" className="hover:text-blush">070-000 00 00</a>
					</p>
					<p>E-post:
						<a href="mailto:info@tantgredelin.se" className="hover:text-blush">
							info@tantgredelin.se
						</a>
					</p>
				</div>
				<div>
					<h3 className="font-heading text-xl mb-3 text-blush">Följ oss</h3>
					<div className="flex gap-4">
						<a href="#" className="hover:text-blush">Facebook</a>
						<a href="#" className="hover:text-blush">Instagram</a>
					</div>
				</div>
				<div className="md:text-right text-midgray text-sm">
					© 2026 Tant Gredelin<br />
					Kod och Design av
					<a href="https://kodochdesign.se" target="_blank" className="hover:text-blush">
						Josefine Eriksson
					</a>
				</div>
			</div>
		</footer>
	);
}
