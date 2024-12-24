'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <form className="space-y-6">
      <div>
        <Input 
          placeholder="Name"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>
      <div>
        <Input 
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>
      <div>
        <Textarea 
          placeholder="Message"
          value={formData.message}
          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>
      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  )
}