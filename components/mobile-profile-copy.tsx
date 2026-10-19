const labelClass = 'mb-3 font-[var(--font-display)] text-[11px] tracking-[0.22em] text-[var(--color-fut-yellow)] uppercase';
const bodyClass = 'text-sm leading-6 text-gray-300 [text-wrap:pretty]';
const chipClass = 'rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80';

export function MobileProfileCopy() {
  return (
    <div className="mobile-profile-copy min-w-0 space-y-6 md:hidden">
      <div>
        <p className="border-l-2 border-[var(--color-fut-yellow)] pl-4 text-[clamp(1.25rem,5.5vw,1.375rem)] font-bold leading-snug text-white [text-wrap:pretty]">
          What draws me to software is the balance between systems thinking and design.
        </p>
        <p className={`mt-4 ${bodyClass}`}>
          I enjoy turning complex systems into experiences that feel clear, calm, and intentional.
        </p>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Education and employers">
          {['NUS', 'GovTech', 'ByteDance'].map((name) => (
            <span key={name} className={chipClass}>{name}</span>
          ))}
        </div>
      </div>

      <section className="border-t border-white/10 pt-6" aria-labelledby="mobile-profile-work">
        <h2 id="mobile-profile-work" className={labelClass}>Work</h2>
        <p className={bodyClass}>
          From software engineering at <strong className="font-semibold text-white">GovTech</strong> to network operations at <strong className="font-semibold text-white">ByteDance</strong>, I build for real users and operational constraints.
          {' '}Both roles have taught me the practical trade-offs that coursework rarely captures.
        </p>
      </section>

      <section className="border-t border-white/10 pt-6" aria-labelledby="mobile-profile-projects">
        <h2 id="mobile-profile-projects" className={labelClass}>Projects</h2>
        <p className={bodyClass}>
          I learn best by building. My passport photo pipeline grew out of a computer vision module, turning coursework into something that solves a real problem.
        </p>
      </section>

      <section className="border-t border-white/10 pt-6" aria-labelledby="mobile-profile-hobbies">
        <h2 id="mobile-profile-hobbies" className={labelClass}>Outside Work</h2>
        <div className="flex flex-wrap gap-2">
          {['Tennis', 'Football', 'Muay Thai', 'UI references'].map((hobby) => (
            <span key={hobby} className={chipClass}>{hobby}</span>
          ))}
        </div>
        <p className={`mt-4 ${bodyClass}`}>
          Collecting interface references and experimenting with them is how this site ended up looking like a FIFA menu.
        </p>
      </section>

    </div>
  );
}
