
import { useEffect, useState } from "react";
import Container from "../components/Container"
import logo from "../images/Coder.png"
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  const [them, setThem] = useState(false);

  useEffect(() => {
    if (them) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [them]);


  return (
    <div className="py-4 border-b-2">
        <Container className="flex justify-between items-center">
            <img className="w-[180px] h-[40px]" src={logo} alt="" />
            <MdOutlineLightMode className={` ${them && "text-white"}`} onClick={() => setThem(!them)} />
        </Container>
    </div>
  )
}

export default Header