import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Workout from "../pages/Workout";
import Trainers from "../pages/Trainers";
import Pricing from "../pages/Pricing";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";

export default function MainLayout() {
  return (
    <div>
      {/* Navbar */}
      <Navbar
        links={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Workouts", href: "#workouts" },
          { label: "Trainers", href: "#trainers" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
          { label: "Contact", href: "#contact" },
        ]}
      />

      {/* Sections */}
      <section id="home" className="h-screen">
        <Home />
      </section>

      <section id="about" className="h-screen">
        <About />
      </section>

      <section id="workouts" className="h-screen">
        <Workout />
      </section>

      <section id="trainers" className="h-screen">
        <Trainers />
      </section>

      <section id="pricing" className="h-fit">
        <Pricing />
      </section>

      <section id="faq" className="h-fit">
        <Faq />
      </section>

      <section id="contact" className="h-screen">
        <Contact />
      </section>
    </div>
  );
}

