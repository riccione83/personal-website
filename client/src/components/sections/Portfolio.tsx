import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiAmazon, SiMedium } from "react-icons/si";

type PublicationType = "book" | "article";

interface Publication {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  date: string;
  desc: string;
  type: PublicationType;
}

const publications: Publication[] = [
  {
    title: "La Sicurezza Informatica",
    subtitle: "2017 Amazon",
    link: "https://www.amazon.co.uk/Sicurezza-Informatica-Riccardo/dp/8826491836/ref=sr_1_1?crid=LC5BKRYYZ2ZQ&keywords=riccardo+rizzo&qid=1697874527&sprefix=riccardo+rizzo%2Caps%2C70&sr=8-1",
    image: "https://m.media-amazon.com/images/I/41yzrRyk1cL._SY522_.jpg",
    date: "2017-10-25",
    desc: "This book offers insights and reflections to help the reader embark on a career in one of the most important fields of the 21st century. Topics related to information security are covered, starting from IT security up to the security of code and mobile devices.",
    type: "book",
  },
  {
    title: "Intelligenza Artificiale",
    subtitle: "2017 Amazon",
    link: "https://www.amazon.co.uk/Intelligenza-Artificiale-Riccardo-Rizzo/dp/8822899202/ref=sr_1_16?dib=eyJ2IjoiMSJ9.qNr_VMpifyavjzetkoBJj0Xbydm-jOA_Kx9KCQPMFsWf3z7Dl90gcVxdq2t-hYiVoxRN5RgwLRzAaxvCtMJpN0PwI_x22Efk01gFs2Bbe5JL73TBfRptKjCt5eRbfoJfCU9vFNe34ShBNVFDLm0Mpn3dk4143l7C6C3RmhLiyxGfVJ41uP9ClYEE0JKM2woafiYIHcd60C4MwBWtmrjqvuR7O-FZZ2eC9M3BcA0G_rU.U8BlSI3QB1573P5r9WNfrYOOJWH7uCeAUEXgN1_-ajc&dib_tag=se&qid=1739529783&refinements=p_27%3ARiccardo+Rizzo&s=books&sr=1-16&text=Riccardo+Rizzo",
    image: "https://m.media-amazon.com/images/I/51WM7tU03qL._SY522_.jpg",
    date: "2017-11-04",
    desc: "Processing information has become a compelling challenge for the contemporary world where knowledge has become a fundamental part of our lives. This book explains how modern artificial intelligence works, avoiding complicated mathematics.",
    type: "book",
  },
  {
    title: "Easy use of realm in swift",
    subtitle: "Medium.com",
    link: "https://bit.ly/2v2ocXp",
    image: "/images/medium/swift-realm.jpeg",
    date: "2017-07-15",
    desc: "Tutorial on how to implement a high-speed and robust support for persistent data in a mobile application",
    type: "article",
  },
  {
    title: "Swift Extension",
    subtitle: "Medium.com",
    link: "https://bit.ly/2trpWct",
    image: "/images/medium/swift-extension.jpeg",
    date: "2017-07-15",
    desc: "Tutorial about Swift extensions",
    type: "article",
  },
  {
    title: "iOS Protocols",
    subtitle: "Medium.com",
    link: "https://bit.ly/2tswO9w",
    image: "/images/medium/swift-extension.jpeg",
    date: "2017-07-15",
    desc: "Tutorial about iOS protocols",
    type: "article",
  },
  {
    title: "Blogs about React and typescript",
    subtitle: "machinemax.com",
    link: "https://machinemax.com/pages/blog",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    date: "2018",
    desc: "Various articles about React & Typescript",
    type: "article",
  },
];

const FILTERS: Array<{ label: string; value: "all" | PublicationType }> = [
  { label: "All", value: "all" },
  { label: "Books", value: "book" },
  { label: "Articles", value: "article" },
];

function getTimestamp(date: string) {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? Date.parse(`${date}-01-01`) || 0 : parsed;
}

export function Portfolio() {
  const [filter, setFilter] = useState<"all" | PublicationType>("all");

  const visiblePublications = useMemo(
    () =>
      publications
        .filter((publication) =>
          filter === "all" ? true : publication.type === filter
        )
        .sort((a, b) => getTimestamp(b.date) - getTimestamp(a.date)),
    [filter]
  );

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Publications & Writing
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl">
          Books, technical articles, and long-form writing on software
          engineering, AI, and product development.
        </p>

        <div className="mt-8 mb-10 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === item.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-primary/20 bg-primary/[0.03] hover:bg-primary/[0.08]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2">
          {visiblePublications.map((publication) => (
            <Card
              key={publication.title}
              className="overflow-hidden h-full border-primary/10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-52 bg-muted/40">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="640"
                  height="320"
                />
                <div className="absolute top-3 left-3 rounded-full border border-primary/20 bg-background/90 px-2.5 py-1 text-xs font-medium">
                  {publication.type === "book" ? "Book" : "Article"}
                </div>
              </div>
              <CardHeader>
                <p className="text-xs uppercase tracking-wide text-primary/70">
                  {publication.subtitle} • {publication.date.slice(0, 4)}
                </p>
                <CardTitle className="text-xl leading-snug">
                  {publication.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {publication.desc}
                </p>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  aria-label={`Open ${publication.title}`}
                >
                  {publication.subtitle.toLowerCase().includes("amazon") ? (
                    <SiAmazon className="h-5 w-5" />
                  ) : publication.subtitle.toLowerCase().includes("medium") ? (
                    <SiMedium className="h-5 w-5" />
                  ) : (
                    <FaExternalLinkAlt className="h-4 w-4" />
                  )}
                  <span>
                    {publication.type === "book" ? "View Book" : "Read Article"}
                  </span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
