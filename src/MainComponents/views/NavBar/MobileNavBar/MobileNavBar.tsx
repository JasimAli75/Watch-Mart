import {
  NavbarArray,
  NavbarItemType,
} from "@/MainComponents/uitls/NavBarTypes";
import Expand from "../../Categorylist/Expand";
const MobileNavBar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
      {NavbarArray.map((item: NavbarItemType, index: number) => {
        return <Expand key={index} item={item} />;
      })}
    </div>
  );
};

export default MobileNavBar;
