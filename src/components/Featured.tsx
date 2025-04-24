"use client"
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}


const Featured = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-2xl text-teal-400 font-semibold tracking-wide uppercase">Featured Courses</h2>
                    <p className="text-3xl capitalize font-extrabold tracking-wide sm:text-4xl">Learn with the best</p>
                </div>
            </div>
            <div className="mt-10 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col max-w-sm dark:bg-zinc-900 bg-white rounded-[22px]"
                            >
                                <div className="p-4 sm:p-6 flex flex-col flex-grow items-center text-center">
                                    <p className="text-lg sm:text-xl text-black dark:text-white mb-3">{course.title}</p>
                                    <p className="text-gray-400">{course.description}</p>
                                    <Link className="mt-4 mb-2 bg-teal-200 text-black px-4 py-1 rounded-4xl" href={`/courses/${course.slug}`}>
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                    className="bg-teal-200 py-3 px-5 text-black rounded-3xl hover:bg-teal-800 hover:text-white"
                >
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default Featured