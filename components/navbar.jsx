// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import Image from "next/image"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

// const tutors = [
//   {
//     name: "Dr. Emma",
//     style: "Analytical",
//     description: "Structured learning with data-driven insights",
//     avatar: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     name: "Professor Leo",
//     style: "Creative",
//     description: "Innovative approaches to complex concepts",
//     avatar: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     name: "Ms. Sophia",
//     style: "Supportive",
//     description: "Patient guidance with personalized feedback",
//     avatar: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     name: "Coach Marcus",
//     style: "Motivational",
//     description: "Goal-oriented learning with positive reinforcement",
//     avatar: "/placeholder.svg?height=80&width=80",
//   },
// ]

// const features = [
//   {
//     title: "Personalized Learning",
//     description: "Adapts to individual learning styles and preferences",
//     icon: "🧠",
//   },
//   {
//     title: "Multi-Style Tutor Engine",
//     description: "25+ learning modes including Storyteller, Simulation Master, and Feynman Explainer",
//     icon: "🧩",
//   },
//   {
//     title: "Adaptive Study Plans",
//     description: "Generates smart, modular learning roadmaps",
//     icon: "📚",
//   },
//   {
//     title: "Intelligent Content Summarization",
//     description: "Summarizes text, video transcripts, and PDFs into digestible formats",
//     icon: "🔍",
//   },
// ]

// export default function NavBar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState(null)
//   const [hoveredItem, setHoveredItem] = useState(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleMouseEnter = (item) => {
//     setHoveredItem(item)
//   }

//   const handleMouseLeave = () => {
//     setHoveredItem(null)
//   }

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? "bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-800/50" 
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex h-20 items-center justify-between">
//           <Link href="/" className="flex items-center space-x-2 group">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative h-10 w-10 rounded-lg overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
//               <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
//                 E
//               </div>
//             </motion.div>
//             <span className="font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
//               ELARA
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <NavigationMenu>
//               <NavigationMenuList className="space-x-6">
//                 <NavigationMenuItem>
//                   <Link href="/" legacyBehavior passHref>
//                     <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white hover:text-cyan-300 relative group`}>
//                       Home
//                       <motion.div 
//                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
//                         initial={{ scaleX: 0 }}
//                         whileHover={{ scaleX: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
                
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className="text-white hover:text-cyan-300 relative group">
//                     Features
//                     <motion.div 
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
//                       initial={{ scaleX: 0 }}
//                       whileHover={{ scaleX: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </NavigationMenuTrigger>
//                   <div className="absolute left-0 top-[100%] mt-2 z-[100]">
//                     <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] bg-slate-900/95 backdrop-blur-md border border-slate-800/50 rounded-lg shadow-xl">
//                       <div className="grid grid-cols-2 gap-3">
//                         {features.map((feature, index) => (
//                           <Link
//                             key={index}
//                             href={`/features#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
//                             className="group grid grid-cols-[20px_1fr] items-start gap-3 rounded-lg p-3 hover:bg-slate-800/50 transition-colors"
//                           >
//                             <div className="mt-1">{feature.icon}</div>
//                             <div>
//                               <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
//                                 {feature.title}
//                               </div>
//                               <div className="text-sm text-slate-300">
//                                 {feature.description}
//                               </div>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </NavigationMenuItem>
                
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className="text-white hover:text-cyan-300 relative group">
//                     Tutors
//                     <motion.div 
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
//                       initial={{ scaleX: 0 }}
//                       whileHover={{ scaleX: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </NavigationMenuTrigger>
//                   <div className="absolute left-0 top-[100%] mt-2 z-[100]">
//                     <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] bg-slate-900/95 backdrop-blur-md border border-slate-800/50 rounded-lg shadow-xl">
//                       <div className="grid grid-cols-2 gap-3">
//                         {tutors.map((tutor, index) => (
//                           <Link
//                             key={index}
//                             href={`/tutors#${tutor.name.toLowerCase().replace(/\s+/g, '-')}`}
//                             className="group grid grid-cols-[80px_1fr] items-start gap-3 rounded-lg p-3 hover:bg-slate-800/50 transition-colors"
//                           >
//                             <div className="relative h-16 w-16 rounded-full overflow-hidden">
//                               <Image
//                                 src={tutor.avatar}
//                                 alt={tutor.name}
//                                 fill
//                                 className="object-cover"
//                               />
//                             </div>
//                             <div>
//                               <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
//                                 {tutor.name}
//                               </div>
//                               <div className="text-sm text-cyan-300">
//                                 {tutor.style}
//                               </div>
//                               <div className="text-xs text-slate-300">
//                                 {tutor.description}
//                               </div>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </NavigationMenuItem>
                
//                 <NavigationMenuItem>
//                   <Link href="/pricing" legacyBehavior passHref>
//                     <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white hover:text-cyan-300 relative group`}>
//                       Pricing
//                       <motion.div 
//                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
//                         initial={{ scaleX: 0 }}
//                         whileHover={{ scaleX: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
                
//                 <NavigationMenuItem>
//                   <Link href="/about" legacyBehavior passHref>
//                     <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white hover:text-cyan-300 relative group`}>
//                       About
//                       <motion.div 
//                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
//                         initial={{ scaleX: 0 }}
//                         whileHover={{ scaleX: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
            
//             <div className="flex items-center space-x-4">
//               <Link href="/login">
//                 <Button variant="ghost" className="text-white hover:text-cyan-300 hover:bg-slate-800/50">
//                   Log In
//                 </Button>
//               </Link>
//               <Link href="/signup">
//                 <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
//                   Sign Up
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50"
//           >
//             <div className="container mx-auto px-4 py-4 space-y-4">
//               <Link href="/" className="block py-2 text-white hover:text-cyan-300">
//                 Home
//               </Link>
              
//               <div>
//                 <button
//                   className="flex items-center justify-between w-full py-2 text-white hover:text-cyan-300"
//                   onClick={() => setActiveDropdown(activeDropdown === "features" ? null : "features")}
//                 >
//                   Features
//                   <ChevronRight
//                     className={`h-4 w-4 transition-transform ${
//                       activeDropdown === "features" ? "rotate-90" : ""
//                     }`}
//                   />
//                 </button>
//                 <AnimatePresence>
//                   {activeDropdown === "features" && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="pl-4 space-y-2"
//                     >
//                       {features.map((feature, index) => (
//                         <Link 
//                           key={index}
//                           href={`/features#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="flex items-center py-2 text-slate-300 hover:text-cyan-300"
//                         >
//                           <span className="mr-2">{feature.icon}</span>
//                           {feature.title}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               <div>
//                 <button
//                   className="flex items-center justify-between w-full py-2 text-white hover:text-cyan-300"
//                   onClick={() => setActiveDropdown(activeDropdown === "tutors" ? null : "tutors")}
//                 >
//                   Tutors
//                   <ChevronRight
//                     className={`h-4 w-4 transition-transform ${
//                       activeDropdown === "tutors" ? "rotate-90" : ""
//                     }`}
//                   />
//                 </button>
//                 <AnimatePresence>
//                   {activeDropdown === "tutors" && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="pl-4 space-y-2"
//                     >
//                       {tutors.map((tutor, index) => (
//                         <Link 
//                           key={index}
//                           href={`/tutors#${tutor.name.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="flex items-center py-2 text-slate-300 hover:text-cyan-300"
//                         >
//                           <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
//                             <Image
//                               src={tutor.avatar}
//                               alt={tutor.name}
//                               fill
//                               className="object-cover"
//                             />
//                           </div>
//                           <div>
//                             <div className="font-medium">{tutor.name}</div>
//                             <div className="text-xs text-cyan-300">{tutor.style}</div>
//                           </div>
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               <Link href="/pricing" className="block py-2 text-white hover:text-cyan-300">
//                 Pricing
//               </Link>
              
//               <Link href="/about" className="block py-2 text-white hover:text-cyan-300">
//                 About
//               </Link>
              
//               <div className="pt-4 border-t border-slate-800 space-y-2">
//                 <Link href="/login" className="block w-full">
//                   <Button variant="outline" className="w-full border-cyan-500 text-cyan-300 hover:bg-slate-800/50">
//                     Log In
//                   </Button>
//                 </Link>
//                 <Link href="/signup" className="block w-full">
//                   <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
//                     Sign Up
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const tutors = [
  {
    name: "Dr. Emma",
    style: "Analytical",
    description: "Structured learning with data-driven insights",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Professor Leo",
    style: "Creative",
    description: "Innovative approaches to complex concepts",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ms. Sophia",
    style: "Supportive",
    description: "Patient guidance with personalized feedback",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Coach Marcus",
    style: "Motivational",
    description: "Goal-oriented learning with positive reinforcement",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center h-20 justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative h-10 w-10 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
          </div>
          <span className="font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
            ELARA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-cyan-300">
            Home
          </Link>

          {/* Tutors dropdown */}
          <div className="relative inline-block group">
            <button
              aria-haspopup="true"
              className="px-4 py-2 text-white hover:text-cyan-300 focus:outline-none"
            >
              Tutors
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block group-focus-within:block w-64 bg-slate-800 rounded-lg shadow-lg dropdown">
              {tutors.map((tutor) => (
                <Link
                  key={tutor.name}
                  href={`/tutors#${tutor.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center px-4 py-3 hover:bg-slate-700 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={tutor.avatar}
                      alt={tutor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white">{tutor.name}</p>
                    <p className="text-xs text-cyan-300">{tutor.style}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/pricing" className="text-white hover:text-cyan-300">
            Pricing
          </Link>
          <Link href="/about" className="text-white hover:text-cyan-300">
            About
          </Link>

          <Link href="/login">
            <Button variant="ghost" className="text-white hover:text-cyan-300">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
              Sign Up
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" className="block text-white hover:text-cyan-300">
              Home
            </Link>

            {/* Tutors accordion for mobile */}
            <details className="group">
              <summary className="flex justify-between items-center text-white cursor-pointer">
                Tutors
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                {tutors.map((tutor) => (
                  <Link
                    key={tutor.name}
                    href={`/tutors#${tutor.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-slate-300 hover:text-cyan-300"
                  >
                    <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src={tutor.avatar}
                        alt={tutor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>{tutor.name}</span>
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/pricing" className="block text-white hover:text-cyan-300">
              Pricing
            </Link>
            <Link href="/about" className="block text-white hover:text-cyan-300">
              About
            </Link>
            <Link href="/login" className="block">
              <Button variant="outline" className="w-full text-cyan-300 border-cyan-500">
                Log In
              </Button>
            </Link>
            <Link href="/signup" className="block">
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
