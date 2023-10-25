import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export default roboto;
