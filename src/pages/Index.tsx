import { HomeIcon } from 'lucide-react'

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Template for your website</h1>
        <p className="text-muted-foreground">React + Vite + shadcn/ui + Lucide Icons</p>
        <div className="flex justify-center items-center">
          <HomeIcon className="w-12 h-12" />
        </div>
      </div>
    </div>
  )
}
