"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
	{
		id: "q1",
		question: "What kinda stuff counts as empties?",
		answer:
			"Empties adalah wadah kosong dari berbagai produk perawatan tubuh seperti skincare, body care, hair care, perfume yang berbentuk botol, kaca, maupun kaleng.",
	},
	{
		id: "q2",
		question: "Why can’t empties go in the regular trash?",
		answer:
			"Limbah empties sering kali masih mengandung sisa bahan kimia aktif seperti alkohol, aerosol, atau bahan beracun lainnya. Jika dibuang bersama sampah rumah tangga, zat tersebut dapat mencemari air tanah, udara, dan membahayakan petugas kebersihan. Karena itu, empties perlu dikelola secara terpisah agar lebih aman dan ramah lingkungan.",
	},
	{
		id: "q3",
		question: "How to return your empties?",
		answer:
			"Simple banget kok!!! kosongin dulu wadahnya, bilas dengan air, terus taruh di box Empties Corner di sekitar FISIP UB.",
	},
	{
		id: "q4",
		question: "Is it only for FISIP?",
		answer:
			"Nggak dong!!! Selama kamu bagian dari UB kamu bisa banget join gerakan ini.",
	},
]

export default function FAQSection() {
	return (
		<section id="faq" className="py-20">
			<div className="container-custom">
				<div className="mb-12 text-center">
					<div>
						<h2 className="text-foreground">Everything You Need to Know About Corner of Change 🌱</h2>
					</div>
				</div>

				<div className="flex justify-center">
					<div className="space-y-3 w-full max-w-2xl">
						{faqs.map((item) => (
							<FAQCard key={item.id} faq={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

function FAQCard({ faq }: { readonly faq: (typeof faqs)[0] }) {
	const [isOpen, setIsOpen] = React.useState(false)
	const contentRef = React.useRef<HTMLDivElement>(null)
	const [height, setHeight] = React.useState<number | undefined>(0)

	React.useEffect(() => {
		if (contentRef.current) {
			setHeight(isOpen ? contentRef.current.scrollHeight : 0)
		}
	}, [isOpen])

	return (
		<div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 ease-out">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-start justify-between px-6 py-5 text-left hover:bg-muted/50 focus:bg-muted/50 focus:outline-none transition-all duration-250 ease-out gap-4 group"
			>
				<h3 className="font-medium text-foreground text-sm sm:text-base leading-snug flex-1 group-hover:text-primary transition-colors duration-250 ease-out">{faq.question}</h3>
				<ChevronDown
					size={20}
					className={`text-primary shrink-0 mt-0.5 transition-all duration-400 ease-in-out transform ${isOpen ? "rotate-180" : ""} group-hover:scale-110`}
				/>
			</button>

			<div 
				style={{ height: `${height}px` }}
				className="transition-all duration-500 ease-in-out overflow-hidden"
			>
				<div 
					ref={contentRef}
					className={`border-t border-border px-6 py-5 bg-background/50 transition-all duration-300 ease-out ${
						isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
					}`}
				>
					<p className="text-foreground/75 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
				</div>
			</div>
		</div>
	)
}

