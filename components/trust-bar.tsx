"use client"

const cities = [
  "Berlin", "Hamburg", "Wien", "Frankfurt", "München", "Zürich",
  "New York", "Miami", "Boston", "Atlanta", "Philadelphia", "Washington DC",
]

export function TrustBar() {
  const items = [...cities, ...cities]

  return (
    <div className="overflow-hidden bg-cream py-4">
      <div className="animate-scroll-left flex w-max items-center gap-6">
        {items.map((city, i) => (
          <span key={i} className="flex items-center gap-6 whitespace-nowrap">
            <span className="text-sm font-medium tracking-wide text-navy/60">{city}</span>
            <span className="text-gold text-xs">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
