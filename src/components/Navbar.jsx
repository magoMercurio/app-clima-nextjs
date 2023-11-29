import Link from "next/link"

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rauldavilaf/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5"/><path d="M16 16v-3a2 2 0 0 0-4 0"/></g></svg> },
  { label: "Github", href: "https://github.com/magoMercurio", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/></svg> },
  { label: "Twitter", href: "https://twitter.com/mago_d_Mercurio", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"/></svg> },
]

export default function Navbar() {
  return (
    <header className=" h-10 flex flex-row justify-between items-center gap-4">
      <h1 className="text-md md:text-2xl w-1/4 ">Weather App</h1> {/* cambiar por logo */}
      <nav className="flex justify-around w-3/4">
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="https://rauldavila-portfolio.vercel.app" target="_blank" className="text-md md:text-xl capitalize" >mi portofolio</Link> 
            </li>         
        </ul>
        <ul className="flex flex-row gap-4">
          {socialLinks.map((Link) => {
            return (
              <li key={Link.label} className="bg-slate-700 rounded-lg w-7 h-7 flex items-center justify-center cursor-pointer " >
                <a href={Link.href} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-300" >
                  {Link.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      {/* <div>

        <ul className="flex flex-row gap-2">
          <li>X</li>
          <li>LinkedIn</li>
          <li>Github</li>
          
        </ul>
      </div> */}
    </header>
  )
}

