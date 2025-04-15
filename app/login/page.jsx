// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import Link from "next/link"
// import Image from "next/image"
// import { motion } from "framer-motion"

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 p-4">
//       <motion.div 
//         className="w-full max-w-md"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="border-none shadow-xl bg-white/90 backdrop-blur-sm">
//           <CardHeader className="space-y-1 text-center">
//             <div className="flex justify-center mb-4">
//               <Image 
//                 src="/placeholder.svg?height=64&width=64" 
//                 alt="ELARA Logo" 
//                 width={64} 
//                 height={64} 
//                 className="rounded-full"
//               />
//             </div>
//             <CardTitle className="text-2xl font-bold gradient-text">Welcome to ELARA</CardTitle>
//             <CardDescription className="text-gray-600">
//               Sign in to your account to continue
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email" className="text-gray-700">Email</Label>
//               <Input 
//                 id="email" 
//                 type="email" 
//                 placeholder="name@example.com" 
//                 className="border-gray-300 focus:ring-blue-500"
//               />
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="password" className="text-gray-700">Password</Label>
//                 <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
//                   Forgot password?
//                 </Link>
//               </div>
//               <Input 
//                 id="password" 
//                 type="password" 
//                 className="border-gray-300 focus:ring-blue-500"
//               />
//             </div>
//             <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
//               Sign In
//             </Button>
//           </CardContent>
//           <CardFooter className="flex flex-col space-y-4">
//             <div className="relative w-full">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t border-gray-300"></span>
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-white px-2 text-gray-500">Or continue with</span>
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
//                 Google
//               </Button>
//               <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
//                 Microsoft
//               </Button>
//             </div>
//             <p className="text-center text-sm text-gray-600">
//               Don't have an account?{" "}
//               <Link href="/signup" className="text-blue-600 hover:underline font-medium">
//                 Sign up
//               </Link>
//             </p>
//           </CardFooter>
//         </Card>
//       </motion.div>
//     </div>
//   )
// } 