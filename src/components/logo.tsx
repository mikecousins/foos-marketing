'use client'

import { RocketLaunchIcon } from '@heroicons/react/24/outline'

export function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <RocketLaunchIcon className="h-8 w-8 text-cyan-500" />
      <span className="text-3xl">Foos</span>
    </div>
  )
}
