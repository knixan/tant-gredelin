export default function FindUs() {
	return (
		<section id="hittahit" className="max-w-7xl mx-auto px-4 py-20">
			<h2 className="font-heading text-black text-3xl text-center mb-10 text-warmbrown">Hitta hit</h2>
			<div className="w-full h-96 border border-midgray">
				<iframe
					className="w-full h-full"
					src="https://www.google.com/maps?q=sweden&output=embed"
					loading="lazy"
				></iframe>
			</div>
		</section>
	);
}
