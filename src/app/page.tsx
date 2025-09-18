import { Button } from "@/components/ui/button";
// const bocorFont = Bokor({
//   variable: "--font-bokor",
//   subsets: ['latin'],
//   weight: ['400']
// })

// ${bocorFont.className}
export default function Home() {
  return (
    <div className=" text-secondaryx">
      {/* <h1 className={`font-bold text-primary bg-primaryx`}>Jensy Ecommerce</h1>
      <h1 className="font-bold text-blue-500 --font-barlow">Jensy Ecommerceb b b b b b b b b b b </h1>
      <h1 className="font-bold text-blue-500 xfocnt-barlow">Jensy Ecommerce</h1>
      <h1 className={`font-bold text-blue-500 font-bokor`}>Jensy Ecommerce 2 2 2 2</h1>
      <Button variant={"destructive"}>Jensy santana qui</Button> */}

      Jenys, santana
      <p className="p-7 xs:text-sm font-barlow">
        Manuel sanchez yerma miane
      </p>

      <p className="mybreakpoint:text-sm mybreakpoint:font-bold mybreakpoint:text-blue-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt delectus cumque magnam quisquam molestiae, in distinctio quasi obcaecati enim qui numquam aliquid quo? Eveniet soluta ipsam doloremque quidem ad.</p>

      {/* Arbitary values */}
      <h2
        className="text-[58px]
        p-[50px]
        mb-4
        "
      // bg-[#000]
      // bg-secondary

      >Using arbitrary Value</h2>
      <a href="#">Home AAAAAAAAAAAAAAAAAAAAA</a>

      {/* Layer base style */}
      <h3 className="mb-4">Layer base styling H333 3 3 </h3>

      {/* @layer components */}
      <button className="btn">My Button ************</button>
      <button className="btn btn-primary">My Button 22222</button>
      <span className="mt-4">jensjdbjsbd</span>
      <button className="btn btn-primary">Color Full Button</button>

      {/* utilities class */}
      <p className="my-text-shadow">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim eaque animi repudiandae quam sint aut rerum quia, ex impedit hic neque iste. Rem iusto doloribus quia. Hic, maiores quam.</p>
    </div>
  );
}
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { Bokor } from "next/font/google";

// const bocorFont = Bokor({
//   variable: "--font-bokor",
//   subsets: ['latin'],
//   weight: ['400']
// })

// // ${bocorFont.className}
// export default function Home() {
//   return (
//     <div className={`${bocorFont.variable}`}>
//       {/* <div> */}
//       {/* <h1 className={`font-bold text-blue-500 `}>Jensy Ecommerce</h1> */}
//       <h1 className={`font-bold text-blue-500 ${bocorFont.className}`}>Jensy Ecommerce</h1>
//       <h1 className="font-bold text-blue-500 xfont-barlow">Jensy Ecommerce</h1>
//       <h1 className="font-bold text-blue-500 xfont-barlow">Jensy Ecommerce</h1>




//       <h1 className={`font-bold text-blue-500 font-boko`}>Jensy Ecommerce</h1>
//       <Button variant={"destructive"}>Jensy santana qui</Button>
//     </div>
//   );
// }
