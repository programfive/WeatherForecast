import { motion } from "framer-motion";
import { animationFooter } from "../../animation/footer";
export function SocialNetworks({ children, href }) {
  const { SocialNetworksVariant } = animationFooter();
  return (
    <motion.a
      href={href}
      whileHover="whileHover"
      whileTap="whileTap"
      variants={SocialNetworksVariant}
    >
      {children}
    </motion.a>
  );
}
