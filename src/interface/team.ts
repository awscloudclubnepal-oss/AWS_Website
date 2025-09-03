export interface TeamMember {
    id: number
    name: string
    designation: string
    image: string
    teamTag:string
    social: {
        linkedin?: string
        github?: string
        twitter?: string
        email?: string
    }
}

