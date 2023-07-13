export interface NavbarItemType {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?: Array<NavbarItemType>;
}

export const NavbarArray: Array<NavbarItemType> = [
  {
    label: "Men",
    href: "/men/men",
    isDropDown: true,
    dropDownData: [
      {
        label: "Chronograph",
        href: "/men/chronograph",
        isDropDown: false,
      },
      {
        label: "Automatic",
        href: "/men/automatic",
        isDropDown: false,
      },
      {
        label: "Sports-Watch",
        href: "/men/sports-watch",
        isDropDown: false,
      },
      {
        label: "Digital-Watch",
        href: "/men/digital-watch",
        isDropDown: false,
      },
      {
        label: "Smart-Watch",
        href: "/men/smart-watch",
        isDropDown: false,
      },
      {
        label: "Fitness-Watch",
        href: "/men/fitness-watch",
        isDropDown: false,
      },
    ],
  },
  {
    label: "Women",
    href: "/women/women",
    isDropDown: true,
    dropDownData: [
      {
        label: "Casual-Watch",
        href: "/women/casual-watches",
        isDropDown: false,
      },
      {
        label: "Luxury-Watch",
        href: "/women/luxury-watches",
        isDropDown: false,
      },
      {
        label: "Dress-Watch",
        href: "/women/dress-watches",
        isDropDown: false,
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids/kids",
    isDropDown: true,
    dropDownData: [
      {
        label: "Fitness-Watch",
        href: "/kids/fitness-watches",
        isDropDown: false,
      },
      {
        label: "Smart-Watch",
        href: "/kids/smart-watches",
        isDropDown: false,
      },
    ],
  },
  {
    label: "More",
    href: "/products",
    isDropDown: false,
  },
];
