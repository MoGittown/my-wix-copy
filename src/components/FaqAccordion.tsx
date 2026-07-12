import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FaqItem {
  q: string;
  a: string;
}

export const faqJsonLd = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const FaqAccordion = ({ items }: { items: FaqItem[] }) => (
  <Accordion type="single" collapsible className="w-full">
    {items.map((item, i) => (
      <AccordionItem key={i} value={`item-${i}`}>
        <AccordionTrigger className="font-display text-left text-base md:text-lg">{item.q}</AccordionTrigger>
        <AccordionContent className="font-serif text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqAccordion;