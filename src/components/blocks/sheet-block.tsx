import { Separator } from "@radix-ui/react-separator";
import { MotionDiv } from "../ui/motion-div";

const data = [
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fugiat dolorum vitae. Eos, quae ea?",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fugiat dolorum vitae. Eos, quae ea?",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fugiat dolorum vitae. Eos, quae ea?",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fugiat dolorum vitae. Eos, quae ea?",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fugiat dolorum vitae. Eos, quae ea?",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fugiat dolorum vitae. Eos, quae ea?",
  },
];

const SheetBlock = () => {
  return (
    <section
      id="sheet"
      className="hidden lg:flex justify-evenly py-32 w-full container py-20 lg:grid grid-rows-2 grid-cols-3 gap-10 text-white text-xl relative"
    >
      {data.map((el, i) => {
        return (
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i / 10 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            key={el.text}
            className="w-full bg-gradient-to-b from-pink-500 to-pink-700 rounded-lg p-8"
          >
            {el.text}
          </MotionDiv>
        );
      })}

      <Separator className="absolute bottom-0 bg-pink-300 h-[0.1px] w-full" />
    </section>
  );
};

export default SheetBlock;
