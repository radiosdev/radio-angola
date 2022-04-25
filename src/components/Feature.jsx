import { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import CenteredModal from "./Modal";

function Feature({ icon, title }) {
  const [modalShow, setModalShow] = useState(false);

  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <>
      
        <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
          {/* icon */}
          <motion.div
            variants={variant}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            animate={`${elementIsVisible}`}
            className="icon bg-[#081730] rounded-2xl p-4"
          >
            <img
              src={require(`../img/${icon}.png`)}
              alt=""
              className="w-[3rem]"
            />
          </motion.div>

          <span className="mt-5">{title}</span>

          <span className="text-[#707070] mt-4">
            Encontre rapidamente as estações que transmitem seus estilos de
            música favoritos
          </span>

          <span onClick={() => setModalShow(true)} className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">
            Ler Mais
          </span>
        </div>      
      <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Feature;
