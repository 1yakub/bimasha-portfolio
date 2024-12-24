'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function NewsletterSidebar() {
  const [email, setEmail] = useState('')

  return (
    <Card className="fixed right-4 bottom-4 w-80">
      <CardHeader>
        <CardTitle>Subscribe to Newsletter</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="w-full">Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  )
}