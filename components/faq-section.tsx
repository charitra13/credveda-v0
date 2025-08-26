"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What kind of databases can CredVeda connect to?",
    answer:
      "CredVeda is designed to seamlessly connect to most SQL-based databases that have a stable Python DB-API driver and a SQLAlchemy dialect. This includes popular databases like PostgreSQL, MySQL, and cloud-based data warehouses like AWS Redshift. We require dedicated, read-only access to ensure your source data integrity is always maintained.",
  },
  {
    question: "How does CredVeda ensure data security?",
    answer:
      "Security is our top priority. The platform is a desktop application to ensure a secure environment. We integrate with enterprise security managers like Instasafe, requiring users to connect through your company's secure network. All data access is strictly controlled through multi-layered Role-Based Access Control (RBAC) and Row-Level Security (RLS), ensuring users only see the data relevant to their specific role and jurisdiction.",
  },
  {
    question: "How is user access managed within the platform?",
    answer:
      "User access is tied directly to your organization's employee directory. An employee logs in with their company ID and password. Our system then verifies their designation (e.g., Branch Manager, Sales Officer) and automatically applies the correct data access permissions. A Sales Officer, for example, will not be able to see data from the credit or collection departments.",
  },
  {
    question: "How does the platform handle large datasets without slowing down our servers?",
    answer:
      "CredVeda is built on a modern data stack using PySpark for efficient, large-scale data processing. Our system is designed for incremental data refreshes. Every 30 minutes, it queries only for new or updated data, rather than re-fetching the entire dataset. This minimizes the load on your database servers while keeping the dashboards up-to-date.",
  },
  {
    question: "Can we customize the dashboards and reports?",
    answer:
      "Yes. Customization is a core feature. Users can arrange graphs, charts, and tables on their dashboards to suit their specific needs. You can create and save different views and generate reports on-demand directly from the application, streamlining the entire analytics workflow.",
  },
  {
    question: "What is the deployment process like?",
    answer:
      "We aim for a 'plug-and-play' deployment. Provided your organization meets the prerequisites—such as having a compatible SQL database, a structured employee directory, and defined data governance—our team can get you set up quickly. We work with your IT team to establish secure database connectivity and integrate with your identity management systems.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about CredVeda and how it can transform your NBFC analytics workflow
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
