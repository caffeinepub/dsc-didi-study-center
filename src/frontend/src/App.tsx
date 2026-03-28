import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Banknote,
  BookOpen,
  Building2,
  CheckCircle,
  ChevronRight,
  DollarSign,
  Mail,
  MapPin,
  Menu,
  Phone,
  Smartphone,
  Star,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

type Page = "home" | "about" | "courses" | "admissions";

function Header({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: { label: string; value: Page }[] = [
    { label: "Home", value: "home" },
    { label: "About Us", value: "about" },
    { label: "Courses", value: "courses" },
    { label: "Admissions", value: "admissions" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-teal-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setPage("home")}
          data-ocid="nav.link"
          aria-label="Go to Home"
        >
          <img
            src="/assets/generated/dsc-logo-transparent.dim_300x300.png"
            alt="DSC Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="leading-tight">
            <div className="font-bold text-teal-500 text-base sm:text-lg">
              DSC
            </div>
            <div className="text-xs text-gray-500 font-medium -mt-0.5">
              Didi Study Center
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.value}
              onClick={() => setPage(link.value)}
              data-ocid={`nav.${link.value}.link`}
              className={`text-sm font-medium transition-colors ${
                page === link.value
                  ? "text-teal-500 border-b-2 border-teal-500 pb-0.5"
                  : "text-gray-600 hover:text-teal-500"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => setPage("admissions")}
            data-ocid="nav.enroll_button"
            className="hidden sm:inline-flex rounded-full bg-teal-500 hover:bg-teal-600 text-white px-5 text-sm font-semibold"
          >
            Enroll Now
          </Button>
          <button
            type="button"
            className="md:hidden p-1 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-teal-100"
          >
            <div className="px-4 py-3 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.value}
                  onClick={() => {
                    setPage(link.value);
                    setMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium py-1 ${
                    page === link.value ? "text-teal-500" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  setPage("admissions");
                  setMenuOpen(false);
                }}
                className="rounded-full bg-teal-500 hover:bg-teal-600 text-white w-full mt-1 text-sm font-semibold"
              >
                Enroll Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-gray-50 border-t border-teal-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/assets/generated/dsc-logo-transparent.dim_300x300.png"
              alt="DSC Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-teal-500">
              DSC Didi Study Center
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Quality education from Class 1 to 10. Shaping bright futures with
            care and dedication.
          </p>
          <p className="text-xs text-teal-600 font-medium mt-2">
            Run by Komal Didi ✨
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {(["home", "about", "courses", "admissions"] as Page[]).map((p) => (
              <li key={p}>
                <button
                  type="button"
                  onClick={() => setPage(p)}
                  className="text-sm text-gray-500 hover:text-teal-500 capitalize flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3" />
                  {p === "about"
                    ? "About Us"
                    : p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
              DSC Didi Study Center
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-500">
              <Mail className="w-4 h-4 text-teal-500 shrink-0" />
              dsc@example.com
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-500">
              <Phone className="w-4 h-4 text-teal-500 shrink-0" />
              +91 70704 96842
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-100 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} DSC Didi Study Center. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-teal-500 underline"
        >
          caffeine.ai
        </a>
      </div>
    </footer>
  );
}

/* ─────────────────── HOME PAGE ─────────────────── */
function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const features = [
    {
      icon: <Users className="w-7 h-7 text-teal-500" />,
      title: "Personal Attention",
      desc: "Small batches ensure every student gets individual focus and guidance.",
      bg: "bg-blue-50",
    },
    {
      icon: <Star className="w-7 h-7 text-teal-500" />,
      title: "Experienced Teaching",
      desc: "Komal Didi brings years of passion-driven teaching expertise.",
      bg: "bg-mint-50 bg-emerald-50",
    },
    {
      icon: <BookOpen className="w-7 h-7 text-teal-500" />,
      title: "Classes 1–10",
      desc: "A complete learning journey from foundation to high school.",
      bg: "bg-yellow-50",
    },
    {
      icon: <DollarSign className="w-7 h-7 text-teal-500" />,
      title: "Affordable Fees",
      desc: "Quality education that's accessible to every family.",
      bg: "bg-orange-50",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section
        data-ocid="home.section"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1F7A7A 0%, #2A8C8C 50%, #3AAEAE 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs font-medium">
              Run by Komal Didi ✨
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Welcome to
              <br />
              DSC Didi Study Center
            </h1>
            <p className="text-teal-100 text-base sm:text-lg mb-8 leading-relaxed">
              Quality education for Classes 1 to 10. Building strong
              foundations, nurturing curious minds, and guiding every child
              toward a bright future.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setPage("courses")}
                data-ocid="home.primary_button"
                className="rounded-full bg-white text-teal-600 hover:bg-teal-50 font-semibold px-6 py-2.5 text-sm"
              >
                Explore Courses
              </Button>
              <Button
                onClick={() => setPage("about")}
                data-ocid="home.secondary_button"
                variant="outline"
                className="rounded-full border-white/50 text-white hover:bg-white/10 font-semibold px-6 text-sm"
              >
                Meet Komal Didi
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why Choose DSC?
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Everything your child needs to excel academically
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${f.bg} rounded-2xl p-6 shadow-card flex flex-col gap-3`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Komal Didi */}
      <section className="bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-3xl bg-gradient-to-br from-teal-400 to-teal-600 flex flex-col items-center justify-center shadow-card gap-3">
              <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
                <span className="text-4xl">👩‍🏫</span>
              </div>
              <p className="text-white font-bold text-lg">Komal Didi</p>
              <p className="text-teal-100 text-xs text-center px-4">
                Educator & Mentor
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-teal-100 text-teal-700 border-0 mb-3 text-xs">
              Our Founder
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Meet Komal Didi
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
              With a heart full of dedication and years of teaching experience,
              Komal Didi founded DSC Didi Study Center with a single mission: to
              make quality education accessible and enjoyable for every child.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Covers Classes 1 to 10 comprehensively",
                "Focus on concept clarity over rote learning",
                "Warm, supportive learning environment",
                "Regular parent–teacher communication",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              onClick={() => setPage("about")}
              data-ocid="home.about_button"
              className="rounded-full bg-teal-500 hover:bg-teal-600 text-white px-6 text-sm font-semibold"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ─────────────────── ABOUT PAGE ─────────────────── */
function AboutPage({ setPage }: { setPage: (p: Page) => void }) {
  const values = [
    {
      emoji: "🏆",
      title: "Excellence",
      desc: "We set high standards and help every student reach their personal best through consistent effort and dedicated teaching.",
    },
    {
      emoji: "💛",
      title: "Care",
      desc: "Every child matters. We nurture emotional well-being alongside academics, creating a safe and inclusive space.",
    },
    {
      emoji: "🤝",
      title: "Community",
      desc: "We believe learning happens together. DSC builds a warm community of students, parents, and educators.",
    },
  ];

  return (
    <main>
      {/* Banner */}
      <section
        data-ocid="about.section"
        style={{
          background: "linear-gradient(135deg, #1F7A7A 0%, #2A8C8C 100%)",
        }}
        className="py-16 sm:py-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            About DSC Didi Study Center
          </h1>
          <p className="text-teal-100 mt-3 text-sm sm:text-base max-w-xl mx-auto px-4">
            Our story, mission, and the values that drive us every day.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 rounded-2xl p-7 shadow-card"
          >
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide accessible, high-quality education to children from
              Class 1 to 10, equipping them with the knowledge, skills, and
              confidence to thrive in life — beyond just passing exams.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-emerald-50 rounded-2xl p-7 shadow-card"
          >
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A future where every child in our community has access to a caring
              mentor, a structured curriculum, and the belief that they can
              achieve anything they set their mind to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Komal Didi */}
      <section className="bg-teal-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-card">
              <span className="text-4xl">👩‍🏫</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              About Komal Didi
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-7 sm:p-9 shadow-card text-gray-600 text-sm sm:text-base leading-relaxed space-y-4"
          >
            <p>
              Komal Didi is more than a teacher — she's a mentor, a guide, and a
              second family to hundreds of students. With a deep passion for
              education and an innate ability to connect with children, she
              founded DSC Didi Study Center to create a learning environment
              that truly puts students first.
            </p>
            <p>
              Her teaching philosophy is simple:{" "}
              <span className="text-teal-600 font-semibold">
                understand, not memorize.
              </span>{" "}
              She believes every child learns differently, and it's the
              teacher's responsibility to adapt, inspire, and encourage.
            </p>
            <p>
              Over the years, Komal Didi has helped hundreds of students improve
              their grades, build study habits, and — most importantly — develop
              a love for learning.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => setPage("courses")}
                data-ocid="about.courses_button"
                className="rounded-full bg-teal-500 hover:bg-teal-600 text-white px-6 text-sm font-semibold"
              >
                View Our Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-teal-100 rounded-2xl p-7 shadow-card text-center"
            >
              <div className="text-4xl mb-3">{v.emoji}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {v.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ─────────────────── COURSES PAGE ─────────────────── */
const courseData = {
  primary: [
    {
      class: "Class 1",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Environmental Studies",
        "Drawing",
      ],
    },
    {
      class: "Class 2",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Environmental Studies",
        "Drawing",
      ],
    },
    {
      class: "Class 3",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Environmental Studies",
        "General Knowledge",
      ],
    },
  ],
  middle: [
    {
      class: "Class 4",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Studies",
      ],
    },
    {
      class: "Class 5",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Studies",
      ],
    },
    {
      class: "Class 6",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Studies",
        "Sanskrit",
      ],
    },
    {
      class: "Class 7",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Studies",
        "Sanskrit",
      ],
    },
  ],
  high: [
    {
      class: "Class 8",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Science",
        "Sanskrit",
      ],
    },
    {
      class: "Class 9",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Social Science",
      ],
    },
    {
      class: "Class 10",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Social Science",
      ],
    },
  ],
};

const groupMeta = {
  primary: {
    label: "🌱 Primary Level",
    sub: "Classes 1 – 3",
    headerBg: "bg-blue-500",
  },
  middle: {
    label: "📘 Middle Level",
    sub: "Classes 4 – 7",
    headerBg: "bg-teal-500",
  },
  high: {
    label: "🎓 High School",
    sub: "Classes 8 – 10",
    headerBg: "bg-indigo-500",
  },
};

function CoursesPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <main>
      {/* Banner */}
      <section
        data-ocid="courses.section"
        style={{
          background: "linear-gradient(135deg, #1F7A7A 0%, #2A8C8C 100%)",
        }}
        className="py-16 sm:py-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Courses
          </h1>
          <p className="text-teal-100 mt-3 text-sm sm:text-base max-w-xl mx-auto px-4">
            Comprehensive curriculum for Classes 1 to 10 — designed to build
            confidence and knowledge.
          </p>
        </motion.div>
      </section>

      {/* Course Groups */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 space-y-14">
        {(Object.keys(courseData) as (keyof typeof courseData)[]).map(
          (group, gi) => (
            <section key={group}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="mb-6"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {groupMeta[group].label}
                </h2>
                <p className="text-gray-500 text-sm">{groupMeta[group].sub}</p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {courseData[group].map((c, i) => (
                  <motion.div
                    key={c.class}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    data-ocid={`courses.item.${gi * 4 + i + 1}`}
                    className="rounded-2xl overflow-hidden shadow-card border border-teal-100"
                  >
                    <div className={`${groupMeta[group].headerBg} px-5 py-4`}>
                      <h3 className="text-white font-bold text-lg">
                        {c.class}
                      </h3>
                      <p className="text-white/70 text-xs">
                        {c.subjects.length} Subjects
                      </p>
                    </div>
                    <div className="bg-white px-5 py-4">
                      <ul className="space-y-1.5">
                        {c.subjects.map((s) => (
                          <li
                            key={s}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ),
        )}
      </div>

      {/* CTA */}
      <section className="bg-teal-50 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Ready to Join DSC?
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            Get in touch with Komal Didi today and enroll your child.
          </p>
          <Button
            onClick={() => setPage("admissions")}
            data-ocid="courses.enroll_button"
            className="rounded-full bg-teal-500 hover:bg-teal-600 text-white px-8 text-sm font-semibold"
          >
            Apply for Admission
          </Button>
        </motion.div>
      </section>
    </main>
  );
}

/* ─────────────────── ADMISSIONS PAGE ─────────────────── */
const feeRows = [
  { classes: "Class 1 – 3", fee: "₹900", period: "per month" },
  { classes: "Class 4 – 5", fee: "₹1200", period: "per month" },
  { classes: "Class 6 – 7", fee: "₹1500", period: "per month" },
  { classes: "Class 8 – 10", fee: "₹2000", period: "per month" },
];

function AdmissionsPage() {
  const [studentName, setStudentName] = useState("");
  const [classApplying, setClassApplying] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!studentName || !classApplying || !parentName || !phone) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    toast.success(
      `Thank you! We've received ${studentName}'s inquiry. Komal Didi will contact you at ${phone} shortly.`,
      { duration: 5000 },
    );
    setStudentName("");
    setClassApplying("");
    setParentName("");
    setPhone("");
  }

  return (
    <main>
      {/* Banner */}
      <section
        data-ocid="admissions.section"
        style={{
          background: "linear-gradient(135deg, #1F7A7A 0%, #2A8C8C 100%)",
        }}
        className="py-16 sm:py-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs font-medium inline-flex">
            Admissions Open 2024–25
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Admissions Open
          </h1>
          <p className="text-teal-100 mt-3 text-sm sm:text-base max-w-xl mx-auto px-4">
            Join DSC Didi Study Center – Classes 1 to 10
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-14">
        {/* Fee Structure */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Fee Structure
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Transparent, affordable pricing for all classes
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-card border border-teal-100 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-teal-500 hover:bg-teal-500">
                  <TableHead className="text-white font-semibold text-sm py-4 pl-6">
                    Class
                  </TableHead>
                  <TableHead className="text-white font-semibold text-sm py-4">
                    Monthly Fee
                  </TableHead>
                  <TableHead className="text-white font-semibold text-sm py-4 pr-6">
                    Notes
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeRows.map((row, i) => (
                  <TableRow
                    key={row.classes}
                    data-ocid={`admissions.item.${i + 1}`}
                    className={i % 2 === 0 ? "bg-teal-50/60" : "bg-white"}
                  >
                    <TableCell className="font-semibold text-gray-800 pl-6 py-4">
                      {row.classes}
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-teal-600 font-bold text-lg">
                        {row.fee}
                      </span>
                      <span className="text-gray-400 text-xs ml-1">
                        {row.period}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-500 text-sm pr-6 py-4">
                      All subjects included
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="px-6 py-3 bg-amber-50 border-t border-amber-100 flex items-center gap-2">
              <span className="text-amber-600 text-sm">📌</span>
              <p className="text-amber-700 text-sm font-medium">
                One-time registration fee: <strong>₹200</strong> (paid at the
                time of enrollment)
              </p>
            </div>
          </div>
        </motion.section>

        {/* Payment Methods */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Payment Methods
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Pay at the center or transfer online — your choice
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Cash */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              className="bg-green-50 rounded-2xl p-6 border border-green-100 text-center flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow">
                <Banknote className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Cash</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Pay directly at the center. Visit us during working hours.
              </p>
              <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                Accepted at Center
              </Badge>
            </motion.div>

            {/* UPI */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-purple-50 rounded-2xl p-6 border border-purple-100 text-center flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center shadow">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">UPI Payment</h3>
              <img
                src="/assets/uploads/qr-payment.png-019d33a8-3112-77b8-87f1-cdc20c53f812-1.jpg"
                alt="UPI QR Code"
                className="w-32 h-32 object-contain rounded-xl border-2 border-purple-200"
              />
              <p className="text-purple-700 font-semibold text-sm">
                komal.dsc@upi
              </p>
              <p className="text-gray-500 text-xs">Scan QR or use UPI ID</p>
            </motion.div>

            {/* Bank Transfer */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-blue-50 rounded-2xl p-6 border border-blue-100 text-center flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Bank Transfer</h3>
              <div className="text-left w-full bg-white rounded-xl border border-blue-100 px-4 py-3 space-y-1">
                <p className="text-xs text-gray-500">Account Name</p>
                <p className="text-sm font-semibold text-gray-800">
                  Komal DSC Center
                </p>
                <p className="text-xs text-gray-500 mt-1">Bank</p>
                <p className="text-sm font-semibold text-gray-800">
                  State Bank of India
                </p>
              </div>
              <Badge className="bg-blue-100 text-blue-700 border-0 text-xs">
                NEFT / IMPS / RTGS
              </Badge>
            </motion.div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            💳 Pay at the center or transfer online. Share the payment
            screenshot with Komal Didi for confirmation.
          </p>
        </motion.section>

        {/* Admission Inquiry Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Admission Inquiry
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Fill in the form and we'll get back to you
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-card border border-teal-100 p-6 sm:p-9 max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              data-ocid="admissions.modal"
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <Label
                  htmlFor="student-name"
                  className="text-gray-700 font-medium text-sm"
                >
                  Student Name
                </Label>
                <Input
                  id="student-name"
                  data-ocid="admissions.input"
                  placeholder="Enter student's full name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="rounded-xl border-teal-200 focus-visible:ring-teal-400"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="class-applying"
                  className="text-gray-700 font-medium text-sm"
                >
                  Class Applying For
                </Label>
                <Select value={classApplying} onValueChange={setClassApplying}>
                  <SelectTrigger
                    id="class-applying"
                    data-ocid="admissions.select"
                    className="rounded-xl border-teal-200 focus:ring-teal-400"
                  >
                    <SelectValue placeholder="Select a class" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((cls) => (
                      <SelectItem key={cls} value={String(cls)}>
                        Class {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="parent-name"
                  className="text-gray-700 font-medium text-sm"
                >
                  Parent / Guardian Name
                </Label>
                <Input
                  id="parent-name"
                  data-ocid="admissions.input"
                  placeholder="Enter parent or guardian's name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="rounded-xl border-teal-200 focus-visible:ring-teal-400"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="phone"
                  className="text-gray-700 font-medium text-sm"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  data-ocid="admissions.input"
                  placeholder="+91 XXXXX XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl border-teal-200 focus-visible:ring-teal-400"
                />
              </div>
              <Button
                type="submit"
                data-ocid="admissions.submit_button"
                className="w-full rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5"
              >
                Submit Inquiry
              </Button>
            </form>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 sm:p-10 text-center shadow-card"
        >
          <div className="text-4xl mb-3">📞</div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Ready to Enroll?
          </h3>
          <p className="text-teal-100 text-sm mb-4 max-w-md mx-auto">
            Visit us or call to complete your admission. We'd love to welcome
            your child into the DSC family!
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-teal-600 rounded-full px-6 py-2.5 font-bold text-sm shadow">
            <Phone className="w-4 h-4" />
            +91 70704 96842
          </div>
        </motion.section>
      </div>
    </main>
  );
}

/* ─────────────────── APP ROOT ─────────────────── */
export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Toaster richColors position="top-right" />
      <Header page={page} setPage={setPage} />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {page === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage setPage={setPage} />
            </motion.div>
          )}
          {page === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage setPage={setPage} />
            </motion.div>
          )}
          {page === "courses" && (
            <motion.div
              key="courses"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CoursesPage setPage={setPage} />
            </motion.div>
          )}
          {page === "admissions" && (
            <motion.div
              key="admissions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AdmissionsPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}
