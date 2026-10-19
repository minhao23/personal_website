import type { Certification } from './portfolio-types';

type CertificationListProps = {
  certifications: Certification[];
  className?: string;
  compactOnMobile?: boolean;
};

export function CertificationList({ certifications, className, compactOnMobile = false }: CertificationListProps) {
  return (
    <div className={`${className ?? ''}${compactOnMobile ? ' mobile-compact-certifications' : ''}`}>
      {compactOnMobile ? (
        <h2 className="mobile-certification-heading hidden">Certifications</h2>
      ) : null}
      {certifications.map((certification) => (
        <div
          key={`${certification.title}-${certification.issuer}`}
          className="certification-card rounded-[18px] border border-white/10 bg-black/22 px-4 py-4"
        >
          <p className="font-[var(--font-display)] text-[10px] tracking-[0.2em] text-[var(--color-fut-yellow)] uppercase">
            Certifications
          </p>
          <h3 className="mt-2 font-[var(--font-display)] text-[1rem] leading-[1.1] text-white">
            {certification.title}
          </h3>
          <p className="mt-2 text-[11px] tracking-[0.16em] text-white/55 uppercase">{certification.issuer}</p>
          <p className="mt-1 text-sm leading-6 text-white/74">{certification.issued}</p>
          {compactOnMobile ? (
            <p className="mobile-certification-meta hidden">
              {certification.issuer} &middot; {certification.issued.replace(/^Issued\s+/, '')}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
