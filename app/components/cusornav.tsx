'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { MdOutlinePerson, MdOutlineHome, MdOutlineMailOutline, MdOutlineWorkspacePremium, MdWorkOutline } from "react-icons/md";

interface navItems {
  id: number;
  title: string;
  path: string;
  icon: IconType;
}


const navTabs: navItems[] = [
  { id: 1, title: "Home", path: "/", icon: MdOutlineHome },
  { id: 2, title: "About", path: "/about", icon: MdOutlinePerson },
  { id: 3, title: "Experience", path: "/experience", icon: MdWorkOutline },
  { id: 4, title: "Projects", path: "/projects", icon: MdOutlineWorkspacePremium },
  { id: 5, title: "Contact", path: "/contact", icon: MdOutlineMailOutline }

]

const NavBar = () => {
  const pathname = usePathname();
  const tabRef = useRef<HTMLDivElement | null>(null);
  const [tabSize, setTabSize] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);


  const updatewidth = () => {
    if (tabRef.current) {
      const parentW = tabRef.current?.getBoundingClientRect().height;
      const newTabW = (parentW / navTabs.length);
      setTabSize(newTabW);
    }
  }

  useEffect(() => {
    const resized = new ResizeObserver(updatewidth);
    if (tabRef.current) {
      resized.observe(tabRef.current);
    }

    return () => {
      if (tabRef.current) {
        resized.unobserve(tabRef.current);
      }
    }
  }, [navTabs.length])


  useEffect(

    () => {
      for (let i = 0; i < navTabs.length; i++) {
        if (pathname == navTabs[i].path)
          setCurrentTab(i);
      }
    },
    [pathname]
  )

  return (
    <div ref={tabRef} className={`relative h-[50%]  w-full flex flex-col items-center justify-center`}>


      <div className={`absolute  inset-0  border border-gray-900 border-l-0 rounded-r-2xl  duration-300 transition-all ease-in-out`} style={
        {
          height: tabSize - 5,
          translate: `0px ${currentTab * tabSize}px`
        }
      } />

      {
        navTabs.map(
          (t, i) => {
            return (
              <Link
               className={`duration-300 transition-all ease-in-out cursor-pointer flex flex-col items-center justify-center relative py-3 text-md font-semibold `} style={{ height: tabSize }} onClick={() => { setCurrentTab(i) }}
                href={t.path}
                key={t.id}>
                <t.icon className="w-10 h-max" />
                {t.title}
              </Link>
            );
          }
        )
      }



    </div>
  )
}

export default NavBar;