import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiAmazon, SiMedium } from "react-icons/si";

const publications = [
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

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Publications & Writing
        </h2>

        {/* Books Section */}
        <div className="mb-16 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold mb-8">Books</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {publications
              .filter((pub) => pub.type === "book")
              .map((publication) => (
                <div key={publication.title}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="grid md:grid-cols-[200px,1fr] gap-6">
                      <div
                        className="relative overflow-hidden"
                        style={{ width: "200px", height: "300px" }}
                      >
                        <img
                          src={publication.image}
                          alt={publication.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="200"
                          height="300"
                          style={{ aspectRatio: "3/4" }}
                        />
                      </div>
                      <div className="p-6">
                        <CardHeader className="p-0">
                          <CardTitle className="text-xl mb-2">
                            {publication.title}
                          </CardTitle>
                          <CardDescription>
                            {publication.subtitle}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
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
                            <SiAmazon className="h-5 w-5" />
                            <span>View on Amazon</span>
                          </a>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        </div>

        {/* Articles Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Articles & Blogs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications
              .filter((pub) => pub.type === "article")
              .map((publication) => (
                <div key={publication.title}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <div
                      style={{
                        width: "100%",
                        height: "192px",
                        position: "relative",
                      }}
                    >
                      <img
                        src={publication.image}
                        alt={publication.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                        width="400"
                        height="192"
                        style={{ aspectRatio: "2/1" }}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {publication.title}
                      </CardTitle>
                      <CardDescription>{publication.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {publication.desc}
                      </p>
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        aria-label={`Open ${publication.title}`}
                      >
                        {publication.subtitle
                          .toLowerCase()
                          .includes("medium") ? (
                          <SiMedium className="h-5 w-5" />
                        ) : (
                          <FaExternalLinkAlt className="h-4 w-4" />
                        )}
                        <span>Read Article</span>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
