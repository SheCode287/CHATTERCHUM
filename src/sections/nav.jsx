import logo from '../assets/chatter logo.png'
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "dashboard", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


function Nav() {
 return (
  <>
    <nav class="bg-gray-100 m-6 rounded " >
        <div className="relative flex h-16 items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className=" px-0 py-2 flex h-16 items-center justify-between">
              <div><img className="block h-14 w-14" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" src={logo} alt="Logo"/></div>
              <div><h4 className="text-purple-900  rounded-md  py-2 text-xl font-bold">Chatterchums</h4></div>
            </div>
      
            <div className="flex space-x-16">
               {/* navigation to sections in the landing page*/}
              <a href='#section1' class="text-black hover:bg-purple-800 hover:text-white rounded-md px-3 py-2 text-xl font-bold">Home</a>
              <a href="#testimonials" class="text-black hover:bg-purple-800 hover:text-white rounded-md px-3 py-2 text-xl font-bold">Testimonials</a>
              <a href="#faq" class="text-black hover:bg-purple-800 hover:text-white rounded-md px-3 py-2 text-xl font-bold">FAQ</a>
              <a href="#contacts" class="text-black hover:bg-purple-800 hover:text-white rounded-md px-3 py-2 text-xl font-bold">Contact us</a>
              <button type="button"  className="rounded bg-purple-800  py-2 px-3 text-white tx-xl hover:text-black">Get Started</button>

              {/* Naviagation to the Dashboard */}
            {navigation.map((item) => (
                  <Link
                   key={item.name}
                   to={item.href}
                   className={classNames(
                  item.current
                  ? "text-black  px-3 py-2 text-xl font-bold"
                  : "text-black", "hover:text-purple-800 hover:text-2xl ",
      
                   )}
                   aria-current={item.current ? "page" : undefined}
  >
                   {item.name}
                   </Link>
                    ))}

            </div>
        </div>
    </nav>
  
  </>
)
}

export default Nav














