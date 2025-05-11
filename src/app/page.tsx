"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, CheckCircle, Zap, Award, Code, Layers, Palette, Menu } from "lucide-react"
import { useState } from "react"
import GoogleLogo from "../logos/google.png"
import DisneyLogo from "../logos/disney.png"
import HubSpotLogo from "../logos/hubspot.png"
import YouTubeLogo from "../logos/youtube.png"
import SlackLogo from "../logos/slack.png"
import ShopifyLogo from "../logos/shopify.png"
import automatedTasks from "../logos/automatedTasks.png"
import boostProductivity from "../logos/boostProductivity.png"
import coffeecup from "../logos/coffeecup.png"
import fruitshop from "../logos/fruitshop.png"
import Cricketpana from "../logos/Cricket-pana.png"
import workstation from "../logos/workstation.jpeg"
import food from "../logos/food.jpg"
import book from "../logos/book.jpg"
import photo from "../logos/Photo.jpg"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { IoBasketballOutline } from "react-icons/io5"

const companyLogos = {
  Google: GoogleLogo,
  Disney: DisneyLogo,
  HubSpot: HubSpotLogo,
  YouTube: YouTubeLogo,
  Slack: SlackLogo,
  Shopify: ShopifyLogo,
}

const imageMap = {
  RESOURCES: coffeecup,
  LIFESTYLE: fruitshop,
  ENTERTAINMENT: Cricketpana,
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const images = [workstation, food, book]

  // Refs for scroll animations
  const heroRef = useRef(null)
  const trustedRef = useRef(null)
  const feature1Ref = useRef(null)
  const feature2Ref = useRef(null)
  const featuresGridRef = useRef(null)
  const teamRef = useRef(null)
  const blogRef = useRef(null)

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const trustedInView = useInView(trustedRef, { once: true, amount: 0.3 })
  const feature1InView = useInView(feature1Ref, { once: true, amount: 0.3 })
  const feature2InView = useInView(feature2Ref, { once: true, amount: 0.3 })
  const featuresGridInView = useInView(featuresGridRef, { once: true, amount: 0.2 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 })
  const blogInView = useInView(blogRef, { once: true, amount: 0.2 })
  const [randomColor, setRandomColor] = useState<String | null>(null);

useEffect(() => {
  setRandomColor(`hsl(${Math.random() * 360}, 100%, 85%)`);
}, []);

  // Parallax effect for hero section
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -100])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 md:px-20 py-4 md:py-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold relative group">
                nullbrains.
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Home", "Features", "Blog", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-base text-gray-500 font-medium relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              <motion.button
                className="text-base relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="text-gray-500 h-6 w-6" />
              </motion.button>
            </nav>

            {/* Right buttons */}
            <div className="flex items-center space-x-6">
              <Link href="/sign-in" className="text-gray-500 font-medium relative group hidden md:block">
                Sign In
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className=" hidden md:flex bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200/50 transition-all duration-300 text-base py-6 rounded-3xl">
                  Sign Up
                </Button>
              </motion.div>
              <motion.button className="md:hidden" whileTap={{ scale: 0.9 }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-7 w-7" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-6">
                {["Home", "Features", "Blog", "Contact", "Sign In"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                      className="text-lg font-medium block py-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center" ref={heroRef}>
          <motion.div
            style={{ y: heroY }}
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="space-y-10"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              Start Crafting Your <br />
              <span className="text-indigo-500 relative">
                Next Great Idea
                <motion.span
                  className="absolute -bottom-3 left-0 w-full h-1.5 bg-indigo-300"
                  initial={{ width: 0 }}
                  animate={heroInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                ></motion.span>
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-md mx-auto text-gray-500 text-base md:text-md mb-10 mt-10"
            >
              Simplifying the creation of landing pages, blog posts, application pages and so much more!
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col  items-center justify-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-6 text-base relative overflow-hidden group rounded-3xl">
                  <span className="relative z-10 ">Purchase Now</span>
                  <span className="absolute inset-0 bg-indigo-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
                <Link href="/learn-more" className="text-lg text-indigo-500 font-small relative group ">
                  Learn More
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Trusted By Section */}
        <section className="container mx-auto px-4 py-16" ref={trustedRef}>
          <motion.div variants={containerVariants} initial="hidden" animate={trustedInView ? "visible" : "hidden"}>
            <motion.h3
              variants={itemVariants}
              className="text-center text-base uppercase text-sm text-black font-bold mb-5"
            >
              Trusted by top-leading companies
            </motion.h3>
            <motion.div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16">
              {Object.entries(companyLogos).map(([name, logo], i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={trustedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={name}
                    width={100}
                    height={40}
                    className=" hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Features Highlight */}
        <section className="container mx-auto px-4 py-12 md:py-20" ref={feature1Ref}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mx-4 md:mx-10 lg:mx-20">
            {/* 🖼️ Image on the left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={feature1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <motion.div
                className="bg-yellow-100 rounded-full p-10 max-w-sm mx-auto"
                whileHover={{ scale: 1.05, rotate: 2 }}
                animate={
                  feature1InView
                    ? {
                        y: [0, -10, 0],
                        transition: {
                          y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
                        },
                      }
                    : {}
                }
              >
                <Image
                  src={boostProductivity || "/placeholder.svg"}
                  alt="Productivity illustration"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>

            {/* ✍️ Text on the right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={feature1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <h2 className="text-3xl font-bold mb-6">Boost Productivity</h2>
              <p className="text-gray-500 text-lg mb-8">
                Build an atmosphere that creates productivity in your organization and your customer culture.
              </p>
              <ul className="space-y-4">
                {["Maximize productivity and growth", "Speed your goal achievement", "Learn the top techniques"].map(
                  (item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={feature1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 text-base"
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="mt-0.5 flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-yellow-400" />
                      </motion.div>
                      <span>{item}</span>
                    </motion.li>
                  ),
                )}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-0" ref={feature2Ref}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mx-4 md:mx-10 lg:mx-20">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={feature2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <h2 className="text-3xl font-bold mb-6">Automated Tasks</h2>
              <p className="text-gray-500 text-lg mb-8">
                Save time and money with our revolutionary services. We are the leaders in the industry.
              </p>
              <ul className="space-y-4">
                {[
                  "Automated task management workflow",
                  "Detailed analytics for your data",
                  "Some awesome integrations",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={feature2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 text-base"
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: -5 }} className="mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-yellow-400" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={feature2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <motion.div
                className="bg-yellow-100 rounded-full p-10 max-w-sm mx-auto"
                whileHover={{ scale: 1.05, rotate: -2 }}
                animate={
                  feature2InView
                    ? {
                        y: [0, -10, 0],
                        transition: {
                          y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut", delay: 0.5 },
                        },
                      }
                    : {}
                }
              >
                <Image
                  src={automatedTasks || "/placeholder.svg"}
                  alt="Automated tasks illustration"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 md:px-10 lg:px-20 py-12 md:py-20" ref={featuresGridRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuresGridInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
              Our Features
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-500 text-lg">
              Check out our list of awesome features below.
            </motion.p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Award,
                title: "Certifications",
                description: "Each of our plan will provide you and your team with certifications.",
              },
              {
                icon: Zap,
                title: "Notifications",
                description: "Send out notifications to all your customers to keep them engaged.",
              },
              { icon: Award, title: "Bundles", description: "High-quality bundles of awesome tools to help you out." },
              {
                icon: Code,
                title: "Developer Tools",
                description: "Developer tools to help grow your application and keep it up-to-date.",
              },
              {
                icon: Layers,
                title: "Building Blocks",
                description: "The right kind of building blocks to take your company to the next level.",
              },
              {
                icon: Palette,
                title: "Coupons",
                description: "Coupons system to provide special offers and discounts for your app.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={featuresGridInView ? "visible" : "hidden"}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card className="bg-gray-50 border-none h-full transition-all duration-300 hover:bg-white">
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                    <motion.div
                      className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="h-7 w-7 text-white" />
                    </motion.div>

                    <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-base">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 md:pl-20 bg-gray-50 py-12 md:py-20" ref={teamRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            className="mb-16 flex items-center justify-between"
          >
            <div>
              <motion.span variants={itemVariants} className="text-base text-blue-500 uppercase">
                Our Team
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl font-semibold mt-3">
                An incredible team of
                <br />
                amazing individuals
              </motion.h2>
            </div>

            {/* Design element on the right side */}
            <div
              className="w-100 h-32 bg-light-blue-100 opacity-30 rounded-l-full rounded-none flex items-center justify-center ml-6 "
              style={{ backgroundColor: "hsl(210, 100%, 85%)" }} // You can change this to any light color
            ></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 md:mr-10 lg:mr-20">
            {[
              { name: "Freddy Smith", role: "CEO and Founder", image: "/placeholder.svg?height=150&width=150" },
              { name: "Carl Jones", role: "CTO and Co-founder", image: "/placeholder.svg?height=150&width=150" },
              { name: "Susan Peterson", role: "Marketing Directory", image: "/placeholder.svg?height=150&width=150" },
              { name: "Tommy Barnes", role: "Designer", image: "/placeholder.svg?height=150&width=150" },
              { name: "Ron Jenson", role: "Senior Developer", image: "/placeholder.svg?height=150&width=150" },
              { name: "Pete Tompkins", role: "Web Developer", image: "/placeholder.svg?height=150&width=150" },
              { name: "Kelly Richards", role: "Sales Manager", image: "/placeholder.svg?height=150&width=150" },
              { name: "Alexis Jordan", role: "Affiliate Manager", image: "/placeholder.svg?height=150&width=150" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.div
                  className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full flex items-center justify-center mx-auto mb-5 p-2 "
                 style={{ backgroundColor: `hsl(${Math.random() * 360}, 100%, 85%)` }} // Random light color
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden">
                    <Image
                      src={photo || "/placeholder.svg"}
                      alt={member.name}
                      width={130}
                      height={130}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>

                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-base text-blue-500">{member.role}</p>
                <div className="flex justify-center mt-3 space-x-3">
                  <motion.span className="w-6 h-6 rounded-full" whileHover={{ scale: 1.2 }}>
                    <FaTwitter className="text-gray-500" />
                  </motion.span>
                  <motion.span className="w-6 h-6 rounded-full" whileHover={{ scale: 1.2 }}>
                    <FaGithub className="text-gray-500" />
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="container mx-auto px-4 md:px-10 lg:px-20 py-12 md:py-20" ref={blogRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={blogInView ? "visible" : "hidden"}
            className=" mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-5xl font-bold mb-4">
              The Project Blog
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-500 text-lg">
              Designs and applications by our expert team
            </motion.p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                tag: "RESOURCES",
                title: "Refreshing Designs",
                description: "Quench satisfying designs to help you stir up emotion and tell a story.",
                bgColor: "bg-purple-500",
                IMGbgColor: "bg-purple-600",
                tagColor: "text-purple-600",
                contentBg: "bg-purple-100",
              },
              {
                tag: "LIFESTYLE",
                title: "Healthier Lifestyle",
                description: "Living a healthier lifestyle will help with your productivity and your mind-set.",
                bgColor: "bg-blue-500",
                IMGbgColor: "bg-blue-300",
                tagColor: "text-blue-600",
                contentBg: "bg-blue-100",
              },
              {
                tag: "ENTERTAINMENT",
                title: "Gaming Evolution",
                description: "Learn about the evolution of gaming and how it started a revolution.",
                bgColor: "bg-yellow-400",
                IMGbgColor: "bg-yellow-500",
                tagColor: "text-yellow-600",
                contentBg: "bg-yellow-100",
              },
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={blogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card className="overflow-hidden border border-gray-200 rounded-2xl shadow-md  p-0 gap-0">
                  {/* Image */}
                  <div className={`relative w-full h-80 ${post.IMGbgColor}`}>
                    <Image
                      src={imageMap[post.tag as keyof typeof imageMap] || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />

                    {/* Tag positioned at the edge between image and content */}
                    <div className="absolute left-4 bottom-0 translate-y-1/2 z-10">
                      <motion.span
                        className={`bg-white ${post.tagColor} text-xs px-3 py-1 rounded-full font-medium shadow-md`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {post.tag}
                      </motion.span>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className={`${post.bgColor} px-5 pt-6 pb-4`}>
                    <h3 className="text-white text-4xl font-semibold mb-1">{post.title}</h3>
                    <p className="text-sm text-white leading-relaxed">{post.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
            {[
              {
                title: "Best Workstations of the Year",
                description: "Check out these inspiring workstations to get ideas on how to level-up your workspace.",
                tag: "INSPIRATION",
                bgColor: "bg-violet-500",
              },
              {
                title: "Eating for Productivity",
                description:
                  "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
                tag: "FOOD",
                bgColor: "bg-pink-500",
              },
              {
                title: "A Design Mind-set",
                description: "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
                tag: "RESOURCES",
                bgColor: "bg-purple-500",
              },
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={blogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card className="relative border-none shadow-sm h-full overflow-visible gap-0 m-0 p-0">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <Image
                      src={images[i] || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Tag overlapping image and content */}
                  <div className="absolute left-5 top-[13rem] z-10">
                    <span className={`text-white ${post.bgColor} text-xs px-3 py-1 rounded-full font-medium shadow-md`}>
                      {post.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 pt-8">
                    <h3 className="font-bold text-xl mb-3">{post.title}</h3>
                    <p className="text-base text-gray-500">{post.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
          {/* Navigation Links */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 mb-8">
            {["About", "Blog", "Team", "Pricing", "Contact", "Terms"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-300 cursor-pointer relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center mb-6">
            <FaFacebook className="text-gray-500 hover:text-indigo-600 transition" />
            <FaInstagram className="text-gray-500 hover:text-indigo-600 transition" />
            <FaTwitter className="text-gray-500 hover:text-indigo-600 transition" />
            <FaGithub className="text-gray-500 hover:text-indigo-600 transition" />
            <IoBasketballOutline className="text-gray-500 hover:text-indigo-600 transition" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">© 2021 SomeCompany, Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
