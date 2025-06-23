import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Image with animation */}
            <motion.img
              src="data:image/jpeg;base64,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"
              alt="About Us - Expense Manager"
              className="w-full lg:w-1/2 rounded-3xl shadow-sm object-cover"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Text with animation */}
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900">
                About Expense Manager
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Our Expense Manager System helps individuals and businesses track income, manage expenses, visualize financial data, and make informed decisions.
                <br /><br />
                We believe that financial clarity leads to better control over life’s choices. Our intuitive dashboards, charts, and real-time tracking empower users to stay on top of their financial goals. Designed with simplicity and functionality in mind, it’s your smart financial assistant.
              </p>
              <a
                href="/register"
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md text-sm font-semibold transition-all duration-300"
              >
                Get Started for Free
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
