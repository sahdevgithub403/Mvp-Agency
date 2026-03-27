import React from "react";
import { motion } from "framer-motion";

// Animation Variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const App = () => {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body antialiased scroll-smooth overflow-hidden">
      {/* TopAppBar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tighter text-slate-900">
            Velocity MVP
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {["Process", "Portfolio", "Services", "Testimonials"].map(
              (item) => (
                <a
                  key={item}
                  className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ),
            )}
          </nav>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-dim transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg">
            Start a Project
          </button>
        </div>
      </motion.header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="flex-1 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeInUp}
                className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]"
              >
                Get your app or website built in{" "}
                <span className="text-primary">7–10 days</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed"
              >
                We help founders turn ideas into working products quickly. Skip
                the fluff and launch your MVP with high-end architecture and
                speed.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
              >
                <button className="hero-gradient text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto">
                  Get Free Consultation
                </button>
                <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all duration-300 w-full sm:w-auto">
                  View Demo
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 w-full relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Velocity MVP Dashboard"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPHCjX7h0d-ddJy6Uw2yLwGipFXVSZjXac9YsP1TNUWg5LrFbu_yy6_pDq912tavGZPEymfa7wu8_m0L0xzD6gxYWV2nAeSdGQbFnN2pT9t6yXHgT4StmPgaQe62DrnWLFMRmYIRUv0gWgiuCgRNI529tm6tCNoNnloL0eVH5SXnsMZcqh5_qd34fl_305L1SLufpJJIZGksKecSyGAG-ZcNqwhG9FU9-UFF9htbMJYrIAfwcxa1JNW2jBA_92z3tlC72g91uGq_Q"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              {/* Decorative Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">
                      Launch Fast
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      MVP ready in 10 days
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 bg-surface-container-low px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">
                Struggling to build your idea?
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: "code_off",
                  title: "No technical skills",
                  desc: "Don't let a lack of coding knowledge stop your vision. We handle the heavy lifting while you focus on the business.",
                },
                {
                  icon: "payments",
                  title: "Too expensive developers",
                  desc: "Standard agencies charge six figures for simple MVPs. We offer transparent, founder-friendly pricing models.",
                },
                {
                  icon: "speed",
                  title: "Slow development process",
                  desc: "Traditional cycles take months. Our specialized workflow gets your product into users' hands in days.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-primary mb-6">
                    <span className="material-symbols-outlined text-4xl">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div
                className="lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInRight}
                  className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-8"
                >
                  We build fast, simple, and scalable MVPs
                </motion.h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: "schedule",
                      title: "Fast delivery (7–10 days)",
                      desc: "Our optimized component library and agile workflow ensure we hit your launch date without compromising quality.",
                    },
                    {
                      icon: "sell",
                      title: "Affordable pricing",
                      desc: "Fixed-price packages that fit early-stage budgets. No hidden fees or surprise maintenance costs.",
                    },
                    {
                      icon: "palette",
                      title: "Clean and modern UI",
                      desc: "Design that sells. We create interfaces that look like multi-million dollar products from day one.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInRight}
                      className="flex gap-6"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-on-primary shadow-md">
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                        <p className="text-on-surface-variant">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="lg:w-1/2 grid grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <div className="space-y-4 pt-12">
                  <motion.img
                    variants={fadeInUp}
                    alt="Coding"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT0xixp433zWiSQ8PIdgQH9dcXjX3gipq2O6G-Nheoq7efnClCCQXTZbeFM9uy5Z6dKWAcVyYrRSjA1ZbEW2S-kk7sY2zARBpUFfHvwefSHGhkCcm53mTZTOSmtHq2I0EQ8JmZdWMmAZvxrI_4Lzpe_J6SglYxnzSnibtrGMA97L0ii7jnHNKI4U4vGg8k7Jn7pOtrO-gJbH-w0Egm0ifQ0dlXoifNufP8G8Ilefy_yhTLdHSdy70uEmQQP9ShmLJK4fAI-jAo4Uw"
                  />
                  <motion.img
                    variants={fadeInUp}
                    alt="Design Tool"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAumiLZfd9QLIPzYGzTCdSX9KS25Q_CWdyy67c-GvmBKH7sqG8uDFTm5QpMLNIQH44xl4h14DFLgkjlpNVqyBaF91Pk4URbxqWQ5Tau8cZur_tnaz4qhnIaSKvA4hsF_nyzWKdgGEcSUI9N39MQ27UyeRqaTJAqQw8HHaSsYdhn3Zw-9Xf22fz2BfGKgS1yt-AEfTuX2WK-3qyyeS6-zW4TT3bYKkTIKHgg6UtbmVP-zX3xYN-sie4I2Oi647UzwlcPME8XwybMDeQ"
                  />
                </div>
                <div className="space-y-4">
                  <motion.img
                    variants={fadeInUp}
                    alt="Collaboration"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUYpKF1qVN4Ji3U7kH0mVAhvwUObdO35EO4-hGIJPyqTb11Wq5BPb7uhiVH9BXfPiFNwyKiuFm2kC49OVR-520naaC2GTG9kEtIWdKR0vzNd13PAluWRpYbtJUKEf8rDJSH05eZ5X4nzj5SgQVDNknNkcTAyUS2Sl0kQ5I9EFC_82KiEepV6VVUQVSSx9DocvPViBLE_XOvaXx-waS8kja1OnEwuUhOeYVOIYQswxP0OULDInTdryDybBhzo-v1ruMqqKNbEOxyn0"
                  />
                  <motion.img
                    variants={fadeInUp}
                    alt="Mobile App"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWWDH1XXk-cJlH-KzBrehc3fMT0oXul1aDVbDRL1ljeqC4Wbv6n_q6r_U_IEXzaKG4Iby_UFJUqRs9g4vVM2db4IRcTC0AiTGYNRiRwR109imMiyGioWIncBt5_sJOSiGoCV-lEm_A0pj35egkLb_7NZt1ZdR0B3HIh_4GvWDvJORic4qxHXuY0YeOnWyr6cPbchOHQ7bv5dtEJlGj_3UA5SdYuA0SjZdvBgLYb9gp3wAyCtHzHns_WtJ_V-CQSHSjJXOOs2_ZoeM"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-surface px-6" id="portfolio">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">
                Success Stories
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Explore some of the high-performance products we've launched in
                record time.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {[
                {
                  img: "5",
                  title: "Pulse Social CRM",
                  desc: "A comprehensive social media management tool built for a UK-based agency in 9 days.",
                },
                {
                  img: "6",
                  title: "LuxeCart Shop",
                  desc: "Minimalist e-commerce storefront with integrated Stripe checkout, delivered in 7 days.",
                },
                {
                  img: "7",
                  title: "Insight Flow",
                  desc: "SaaS analytics platform with real-time data streaming and custom reporting features.",
                },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden mb-6 bg-surface-container-highest shadow-md">
                    <img
                      alt={project.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src={`http://googleusercontent.com/profile/picture/${project.img}`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-sm">
                    {project.desc}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Live Demo{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto hero-gradient rounded-3xl p-12 md:p-20 text-center text-on-primary shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <span className="material-symbols-outlined text-[10rem]">
                rocket_launch
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8 relative z-10">
              Have an idea? Let’s build it
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto relative z-10">
              Stop overthinking and start launching. Talk to us today and have
              your MVP live by next week.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-10 py-5 rounded-xl font-extrabold text-xl shadow-lg flex items-center gap-3 mx-auto relative z-10"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                chat
              </span>
              Message on WhatsApp
            </motion.button>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-slate-900 mb-2">
              Velocity MVP
            </div>
            <p className="text-sm text-slate-500">
              © 2024 Velocity MVP Development. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
            {["LinkedIn", "Twitter", "Contact Us", "Privacy Policy"].map(
              (link) => (
                <a
                  key={link}
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  {link}
                </a>
              ),
            )}
          </div>
          <div className="text-sm text-slate-500">
            Email: hello@velocitymvp.io
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
