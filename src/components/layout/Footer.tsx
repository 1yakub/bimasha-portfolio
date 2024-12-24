export default function Footer() {
    return (
      <footer className="bg-background py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-muted-foreground">email@example.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Social</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary">GitHub</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">LinkedIn</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">Subscribe for updates</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }