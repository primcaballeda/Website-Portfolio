"use client"

import React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronRight, ChevronLeft, ExternalLink, GitlabIcon as GitHub } from "lucide-react"
import Readify from "../assets/readify.png"
import Pokedex from "../assets/Pokedex.png"
import VittleVault from "../assets/vittlevault.png"
import Transpove from "../assets/transpove.png"
import RentS from "../assets/rents.png"
import ToDoList from "../assets/todolist.png"
import FitApp from "../assets/FitApp.jpg"
import OmniFlux from "../assets/Omniflux.png"

const projects = [
	{
		id: 1,
		title: "Readify: A Book Review App",
		description:
			"An app where users can review books, leave ratings, and favorite titles. It features user authentication for Android, sleek UI, and push notifications. The app integrates with Firebase for backend services, uses asynchronous data fetching in Flutter, and retrieves book information and details through an external API.",
		image: Readify,
		tags: ["Dart", "Flutter", "Firebase"],
		github: "https://github.com/primcaballeda/readify",
		category: "Mobile App",
	},
	{
		id: 2,
		title: "Fitness Tracking App",
		description:
			"A mobile fitness app that supports personalized workout plans, weight tracking, and progress monitoring. Backend is handled by a Flask API with MySQL (XAMPP). Users can log daily activities, set fitness goals, and visualize progress through interactive charts.",
		image: FitApp,
		tags: ["Python", "ReactNative", "MYSQL (via XAMPP)"],
		github: "https://github.com/primcaballeda/FitApp",
		category: "Mobile App",
	},
	{
		id: 3,
		title: "Rent.S - A Rental Management System",
		description:
			"A CRUD (Create, Read, Update, and Delete) system built to help property managers or landlords manage tenants, units, and rental payments. The system includes automated reminders for due payments and a dashboard for analytics.",
		image: RentS,
		tags: ["TypeScript", "Supabase"],
		github: "https://github.com/primcaballeda/Rent.S",
		category: "Web App",
	},
	{
		id: 4,
		title: "Pokedex",
		description:
			"A simple Pokedex app that fetches data from the PokeAPI and displays information about various Pokémon. It demonstrates API integration and basic UI design using JavaScript and CSS.",
		image: Pokedex,
		tags: ["JavaScript", "API Integration", "CSS"],
		github: "https://github.com/primcaballeda/pokedex-prim",
		category: "Web App",
	},
	{
		id: "5",
		title: "To-Do List App",
		description:
			"A Basic To-Do List App where users can add, edit, and delete tasks. The app supports task prioritization, due dates, and a simple drag-and-drop interface for reordering tasks.",
		image: ToDoList,
		tags: ["React", "Javascript"],
		github: "https://github.com/primcaballeda/list_todo",
		category: "Web App",
	},
	{
		id: 6,
		title: "OmniFlux: Expense Tracker",
		description:
			"A simple expense tracker that allows users to track their expenses and income. It includes features for adding, and editing transactions. The app also provides monthly summaries and visualizations.",
		image: OmniFlux,
		tags: ["Java", "MYSQL"],
		github: "https://github.com/primcaballeda/ExpenseTracker",
		category: "Desktop App",
	},
	{
		id: 7,
		title: "VittleVault: A Food Recipe App",
		description:
			"A food recipe app that allows users to search for recipes, save favorites, and share their own recipes. It features a user-friendly interface, ingredient-based search, and the ability to rate and comment on recipes.",
		image: VittleVault,
		tags: ["PHP", "CSS"],
		github: "https://github.com/famiramei/gobble",
		category: "Web App",
	},
	{
		id: 8,
		title: "Transpove - Transportation App",
		description:
			"A transportation app that allows users to book rides, track drivers, and manage their trips. The prototype demonstrates a seamless booking flow and real-time driver tracking using Figma's interactive features.",
		image: Transpove,
		tags: ["Figma"],
		github: "https://www.figma.com/proto/rN04Gch9WyuFwcbT24ru2B/Transpove-Prototype?node-id=1-4&p=f&t=QkEF9PssmEEQp6Hj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1",
		category: "UI/UX",
	},
]

const Projects = () => {
	const [selectedCategory] = useState("All")

	const filteredProjects =
		selectedCategory === "All"
			? projects
			: projects.filter((project) => project.category === selectedCategory)

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const item = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1 },
	}

	return (
		<div className="py-12 px-8 min-h-screen">
			<div className="max-w-6xl mx-auto">
				<motion.h1
					className="text-3xl font-bold mb-8"
					initial={{ x: -20, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Projects
				</motion.h1>

				{filteredProjects.length === 0 ? (
					<p className="text-center text-gray-500 my-12">No projects found in this category.</p>
				) : (
					<motion.div
						className="grid grid md:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2"
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						{filteredProjects.map((project) => (
							<motion.a
								key={project.id}
								href={project.github}
								className="block h-full"
								variants={item}
								whileHover={{ y: -5 }}
							>
								<div className="relative group">
									<div className="h-full flex flex-col rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 bg-gray-100">
										<div className="h-40 p-4 flex items-center justify-center bg-gray-50">
											<img
												src={project.image}
												alt={project.title}
												className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
											/>
										</div>

										<div className="p-6 flex-grow flex flex-col">
											<h3 className="text-lg font-semibold mb-3 text-gray-800">{project.title}</h3>

											<p className="text-gray-600 text-justify leading-relaxed mb-4 flex-grow">
												{project.description}
											</p>

											<div className="mt-auto pt-2 border-t border-gray-300 border-opacity-20"></div>
										</div>
									</div>

									<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<a
											href={project.github}
											className="bg-white text-black px-4 py-2 rounded-md flex items-center"
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink size={16} className="mr-2" /> View More
										</a>
									</div>
								</div>
							</motion.a>
						))}
					</motion.div>
				)}
			</div>
		</div>
	)
}

export default Projects
