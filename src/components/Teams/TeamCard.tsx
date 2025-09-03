"use client"
import { TeamMember } from "@/interface/team"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"




function useProgressiveImage(src: string) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    useEffect(() => {
        const img = new Image()

        img.onload = () => {
            setImageLoaded(true)
        }

        img.onerror = () => {
            setImageError(true)
        }

        img.src = src
    }, [src])

    return { imageLoaded, imageError }
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
    const [isHovered, setIsHovered] = useState(false)
    const [isOnMobile, setIsOnMobile] = useState(false)

    const cardRef = useRef<HTMLDivElement>(null)


    const { imageError } = useProgressiveImage(member.image)

    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case "linkedin":
                return <Linkedin className="w-4 h-4 sm:w-5 sm:h-5"/>
            case "github":
                return <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            case "twitter":
                return <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            case "email":
                return <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            default:
                return null
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
            setIsHovered(true)
            setIsOnMobile(true)
        }
    }, [])

 return (
        <div
            ref={cardRef}
            className="group overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full max-w-[320px] mx-auto"
            onMouseEnter={() => {
                if (!isOnMobile) setIsHovered(true);
            }}
            onMouseLeave={() => {
                if (!isOnMobile) setIsHovered(false);
            }}
        >
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <div
                    className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                    style={{
                        backgroundImage: `url(${member.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                
                {/* Image Error Fallback */}
                {imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <p className="text-xs sm:text-sm font-medium">Image unavailable</p>
                        </div>
                    </div>
                )}
                
                {/* Gradient overlay for better image contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-800">
                {/* Name */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-tight">
                    {member.name}
                </h3>
                
                {/* Designation */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 font-medium">
                    {member.designation}
                </p>

                {/* Social Media Links */}
                <div className={`flex gap-2 sm:gap-3 transition-all duration-500 ${
                    isHovered || isOnMobile 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-70 translate-y-0"
                }`}>
                    {Object.entries(member.social).map(([platform, url]) => (
                        <Link
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/social p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
                            aria-label={`Visit ${member.name}'s ${platform} profile`}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.currentTarget.style.transform = "scale(0.95)";
                                setTimeout(() => {
                                    if (e.currentTarget) {
                                        e.currentTarget.style.transform = "";
                                    }
                                }, 150);
                            }}
                        >
                            <div className="text-gray-600 dark:text-gray-400 group-hover/social:text-blue-600 dark:group-hover/social:text-blue-400 transition-colors duration-300">
                                {getSocialIcon(platform)}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}