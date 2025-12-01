import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface MenuProps {
  label: string;
  href: string;
  isActive: boolean;
  itemVariants?: Variants;
  onClick?: () => void;
}
export default function MenuItem({
  label,
  href,
  isActive,
  itemVariants,
  onClick,
}: MenuProps) {
  return (
    <motion.li
      variants={itemVariants}
      className="relative text-lg hover:text-[#A1C249]  transition-colors duration-300 group w-max "
    >
      <Link href={href} onClick={onClick}>
        {label}
        <span
          className={`absolute left-0 -bottom-1.5 w-0 h-2  bg-[#A1C249] rounded-md transition-all duration-300  ${
            isActive ? "w-full" : " group-hover:w-full"
          }`}
        ></span>
      </Link>
    </motion.li>
  );
}
