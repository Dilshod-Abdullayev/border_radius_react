import { TiDocumentText, TiVideo } from "react-icons/ti";
import { BiFontSize } from "react-icons/bi";
import { GrRobot } from "react-icons/gr";
import { RxFontStyle } from "react-icons/rx";
export const btn_items = [
  {
    id: 1,
    icon: <TiDocumentText />,
    text: "Document",
    path: "document",
  },
  {
    id: 2,
    icon: <TiVideo />,
    text: "Video tutorial",
    path: "video",
  },
  {
    id: 3,
    icon: <BiFontSize />,
    text: "Border Size",
    path: "size",
  },
  {
    id: 4,
    icon: <GrRobot />,
    text: "Border Generator",
    path: "generator",
  },
  {
    id: 5,
    icon: <RxFontStyle />,
    text: "Change Style",
    path: "styles",
  },
];
