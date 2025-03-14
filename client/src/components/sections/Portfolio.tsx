import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiAmazon, SiMedium } from "react-icons/si";
import { motion } from "framer-motion";

const publications = [
  {
    title: "La Sicurezza Informatica",
    subtitle: "2017 Amazon",
    link: "https://www.amazon.co.uk/Sicurezza-Informatica-Riccardo/dp/8826491836/ref=sr_1_1?crid=LC5BKRYYZ2ZQ&keywords=riccardo+rizzo&qid=1697874527&sprefix=riccardo+rizzo%2Caps%2C70&sr=8-1",
    image: "https://m.media-amazon.com/images/I/41yzrRyk1cL._SY522_.jpg",
    date: "2017-25-10",
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
    link: "http://bit.ly/2v2ocXp",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*fSGayL9fUzK5hdhg5r7Nxw.jpeg",
    date: "2017-07-15",
    desc: "Tutorial on how to implement a high-speed and robust support for persistent data in a mobile application",
    type: "article",
  },
  {
    title: "Swift Extension",
    subtitle: "Medium.com",
    link: "http://bit.ly/2trpWct",
    image:
      "https://miro.medium.com/v2/resize:fit:300/1*QJDPy8b4NnzYKvjs9Jh0lA.jpeg",
    date: "2017-07-15",
    desc: "Tutorial about Swift extensions",
    type: "article",
  },
  {
    title: "iOS Protocols",
    subtitle: "Medium.com",
    link: "http://bit.ly/2tswO9w",
    image:
      "https://miro.medium.com/v2/resize:fit:300/1*QJDPy8b4NnzYKvjs9Jh0lA.jpeg",
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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Publications
        </motion.h2>

        {/* Books Section */}
        <div className="mb-16 w-full max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            Books
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {publications
              .filter((pub) => pub.type === "book")
              .map((publication) => (
                <motion.div key={publication.title} variants={item}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="grid md:grid-cols-[200px,1fr] gap-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative aspect-[3/4] overflow-hidden"
                      >
                        <img
                          src={publication.image}
                          alt={publication.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="200"
                          height="300"
                        />
                      </motion.div>
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
                          <motion.a
                            href={publication.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            <SiAmazon className="h-5 w-5" />
                            <span>View on Amazon</span>
                          </motion.a>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* Articles Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            Articles & Blogs
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {publications
              .filter((pub) => pub.type === "article")
              .map((publication) => (
                <motion.div key={publication.title} variants={item}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={publication.image}
                        alt={publication.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                        width="400"
                        height="192"
                      />
                    </motion.div>
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
                      <motion.a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {publication.subtitle
                          .toLowerCase()
                          .includes("medium") ? (
                          <SiMedium className="h-5 w-5" />
                        ) : (
                          <FaExternalLinkAlt className="h-4 w-4" />
                        )}
                        <span>Read Article</span>
                      </motion.a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
