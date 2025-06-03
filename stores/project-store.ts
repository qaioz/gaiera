import { create } from "zustand"

export interface Project {
  id: string
  name: string
  description: string
  status: "draft" | "published"
  lastEdited: string
  initial: string
}

interface ProjectState {
  projects: Project[]
  selectedProject: Project | null
  isLoading: boolean
  createProject: (data: { name: string; description: string }) => void
  updateProject: (id: string, data: Partial<Project>) => void
  deleteProject: (id: string) => void
  selectProject: (project: Project | null) => void
  loadProjects: () => void
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [
    {
      id: "shashki",
      name: "Shashki",
      description: "Chess game website",
      status: "draft",
      lastEdited: "5/31/2025",
      initial: "S",
    },
    {
      id: "hackathons1",
      name: "Hackathons",
      description: "Hackathon platform",
      status: "draft",
      lastEdited: "5/30/2025",
      initial: "H",
    },
    {
      id: "hackathons2",
      name: "Hackathos",
      description: "Another hackathon site",
      status: "draft",
      lastEdited: "5/20/2025",
      initial: "H",
    },
  ],
  selectedProject: null,
  isLoading: false,

  createProject: (data) => {
    const newProject: Project = {
      id: `project-${Date.now()}`,
      name: data.name,
      description: data.description,
      status: "draft",
      lastEdited: new Date().toLocaleDateString(),
      initial: data.name.charAt(0).toUpperCase(),
    }

    set((state) => ({
      projects: [...state.projects, newProject],
      selectedProject: newProject,
    }))
  },

  updateProject: (id, data) => {
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id ? { ...project, ...data, lastEdited: new Date().toLocaleDateString() } : project,
      ),
    }))
  },

  deleteProject: (id) => {
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
      selectedProject: state.selectedProject?.id === id ? null : state.selectedProject,
    }))
  },

  selectProject: (project) => {
    set({ selectedProject: project })
  },

  loadProjects: () => {
    set({ isLoading: true })
    // Simulate API call
    setTimeout(() => {
      set({ isLoading: false })
    }, 500)
  },
}))
