{/* Right: profile cards */ }
<ScrollReveal delay={200}>
  <div className="lg:sticky lg:top-28 space-y-6">

    {/* Enes Haziri */}
    <div className="rounded-sm bg-navy p-8 lg:p-10">
      <div className="mb-8">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <span className="font-serif text-2xl font-bold text-gold">EH</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-cream">Enes Haziri</h3>
        <p className="mt-1 text-sm text-gold">
          {t("Gründer & CEO", "Founder & CEO")}
        </p>
      </div>

      <div className="border-t border-white/10">
        {profileStats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-white/10 py-3.5"
          >
            <span className="text-sm text-cream/50">{stat.label}</span>
            <span className="text-sm font-medium text-cream">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Ardit Tahiri */}
    <div className="rounded-sm bg-navy p-8 lg:p-10">
      <div className="mb-8">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <span className="font-serif text-2xl font-bold text-gold">AT</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-cream">Ardit Tahiri</h3>
        <p className="mt-1 text-sm text-gold">
          {t("Mitgründer & COO", "Co-Founder & COO")}
        </p>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="text-sm text-cream/70 leading-relaxed">
          {t(
            "Ardit verantwortet operative Abläufe und stellt sicher, dass alle Back-Office Prozesse effizient und strukturiert umgesetzt werden.",
            "Ardit oversees operational execution and ensures all back-office processes are delivered efficiently and in a structured manner."
          )}
        </p>
      </div>

      <a
        href="https://linkedin.com"
        target="_blank"
        className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </a>
    </div>

    <a
      href="#contact"
      className="block rounded-sm bg-gold px-6 py-3 text-center text-sm font-semibold text-navy transition-all hover:bg-gold-light"
    >
      {t("Kontakt aufnehmen", "Get in Touch")}
    </a>

  </div>
</ScrollReveal>