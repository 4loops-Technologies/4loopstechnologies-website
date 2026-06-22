import Image from "next/image"

const STYLES = `
  @keyframes scroll-ltr {
    from { transform: translateX(-50%); }
    to   { transform: translateX(0%); }
  }
  .marquee-track {
    animation: scroll-ltr 28s linear infinite;
    will-change: transform;
  }
`

type Partner = { name: string; src: string; remote?: boolean }

const partners: Partner[] = [
  { name: "Microsoft Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", remote: true },
  { name: "Ethiopian Artificial Intelligence Institute", src: "/partners/eai.png" },
  { name: "Temar Lije", src: "/partners/temar-lije.png" },
  { name: "Yeggi", src: "/partners/yeggi.png" },
  { name: "ECCO", src: "/partners/ecco.png" },
  { name: "Neovend", src: "/partners/neovend.png" },
  { name: "Buna Bello", src: "https://bunabello.com/wp-content/uploads/2025/02/We-Mean-Coffee1.png", remote: true },
  { name: "ERPNext", src: "/partners/erpnext.png" },
]

function LogoTile({ partner }: { partner: Partner }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" title={partner.name}>
      {partner.remote ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.src}
          alt={partner.name}
          width={64}
          height={64}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      ) : (
        <Image
          src={partner.src}
          alt={partner.name}
          width={64}
          height={64}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      )}
    </div>
  )
}

export function Partnerships() {
  const track = [...partners, ...partners]

  return (
    <section
      aria-label="Trusted partners and platforms — Microsoft Azure, ERPNext, and Ethiopian technology partners"
      className="relative py-20 sm:py-24 bg-background"
    >
      <style>{STYLES}</style>

      <div className="text-center px-4 mb-12">
        <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-muted-foreground/55 mb-2.5">
          Trusted by
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground/85">
          The platforms and partners we build with
        </h2>
        <div className="mt-4 mx-auto h-px w-14 rounded-full bg-gradient-to-r from-neon-blue/60 via-light-blue/80 to-forest-green/60" />
      </div>

      <div className="mx-auto max-w-3xl px-0">
        <div
          className="overflow-hidden py-5"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        >
          <div className="marquee-track flex items-center gap-10 sm:gap-14 w-max">
            {track.map((p, i) => (
              <LogoTile key={`${p.name}-${i}`} partner={p} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/30 mt-12" />
      </div>
    </section>
  )
}
