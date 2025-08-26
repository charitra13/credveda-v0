import { Database, BarChart3, RefreshCw, Target, Shield, Plug } from "lucide-react"

const BentoCard = ({ title, description, icon: Icon }) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-4 relative z-10">
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <h3 className="text-foreground text-lg font-semibold leading-7">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "Jurisdiction-Aware Analytics",
      description: "Get insights tailored to specific regulatory requirements and regional compliance standards.",
      icon: BarChart3,
    },
    {
      title: "Customizable Dashboards",
      description: "Create personalized views with drag-and-drop widgets for your specific business needs.",
      icon: Target,
    },
    {
      title: "30-Minute Data Refresh",
      description: "Stay current with efficient data updates every 30 minutes for real-time decision making.",
      icon: RefreshCw,
    },
    {
      title: "Departmental KPI Tracking",
      description: "Monitor performance metrics across Sales, Credit, Collections, and other departments.",
      icon: Database,
    },
    {
      title: "Zero Trust Network Integration",
      description: "Secure data access with advanced zero-trust security protocols and authentication.",
      icon: Shield,
    },
    {
      title: "SQL Database Connectivity",
      description: "Seamlessly connect to your existing SQL databases with native integration support.",
      icon: Plug,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Powerful Features for NBFCs
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Advanced analytics and AI-powered insights designed specifically for Non-Banking Financial Companies.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
