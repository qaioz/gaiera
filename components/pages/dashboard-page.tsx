import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectGrid } from "@/components/dashboard/project-grid"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { AccountModal } from "@/components/modals/account-modal"
import { useUIStore } from "@/stores/ui-store"

export function DashboardPage() {
  const { isAccountModalOpen, setAccountModalOpen } = useUIStore()

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">All Projects</h1>
              <ProjectGrid />
            </div>
          </main>
        </div>
      </div>

      {/* Account Modal */}
      <Dialog open={isAccountModalOpen} onOpenChange={setAccountModalOpen}>
        <DialogContent className="sm:max-w-4xl" style={{ zIndex: 10000 }}>
          <AccountModal />
        </DialogContent>
      </Dialog>
    </>
  )
}
