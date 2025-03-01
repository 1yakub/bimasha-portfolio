'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'
import MotionLink from '@/components/ui/motion-link'
import MotionDiv from '@/components/ui/motion-div'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-navy-900 border-t border-gray-100 dark:border-navy-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Bimasha</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <MotionLink
                href="https://github.com/bimasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </MotionLink>
              
              <MotionLink
                href="https://linkedin.com/in/bimasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </MotionLink>
              
              <MotionLink
                href="https://twitter.com/bimasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </MotionLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <MotionLink
                  href="/projects"
                  className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
                  whileHover={{ x: 5 }}
                >
                  Projects
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="/case-studies"
                  className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
                  whileHover={{ x: 5 }}
                >
                  Case Studies
                </MotionLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <MotionLink
                  href="mailto:contact@bimasha.com"
                  className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
                  whileHover={{ x: 5 }}
                >
                  contact@bimasha.com
                </MotionLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to my newsletter for updates on my latest projects and tech insights.
            </p>
            <MotionLink
              href="/newsletter"
              className="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark dark:bg-accent-dark dark:hover:bg-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </MotionLink>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Bimasha. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <MotionLink
                href="/privacy"
                className="text-sm text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
                whileHover={{ x: 5 }}
              >
                Privacy Policy
              </MotionLink>
              <MotionLink
                href="/terms"
                className="text-sm text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent-dark"
                whileHover={{ x: 5 }}
              >
                Terms of Service
              </MotionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}