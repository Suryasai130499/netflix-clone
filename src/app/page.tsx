import SignInForm from "../components/LandingPage/Form/form";
import Header from "@/components/LandingPage/Header/header";
import Cards from "@/components/LandingPage/Cards/cards";
import FAQ from "@/components/LandingPage/FAQ";
import Register from "@/components/LandingPage/Register";
import Footer from "@/components/LandingPage/Footer";

import styles from "./page.module.css";

export default function Home() {
  const FAQs = [
    {
      title: "What is Netflix?",
      description1:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      description2:
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      description1:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
      description2: null,
    },
    {
      title: "Where can I watch?",
      description1:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      description2:
        "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      description1:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      description2: null,
    },
    {
      title: "What Can I watch on Netflix?",
      description1:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      description2: null,
    },
    {
      title: "Is Netflix good for kids?",
      description1:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      description2:
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <main className={styles.main}>
      <Header />
      <SignInForm />
      <Cards />
      <FAQ faqs={FAQs} />
      <Register bottom={true} />
      <Footer />
    </main>
  );
}
