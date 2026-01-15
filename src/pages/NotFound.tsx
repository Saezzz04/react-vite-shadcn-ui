import { useLocation, Link } from 'react-router'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <Button asChild>
          <Link to="/">Back</Link>
        </Button>
      </div>
    </div>
  )
}
