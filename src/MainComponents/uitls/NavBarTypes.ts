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
        label: "Sports",
        href: "/men/sports-watch",
        isDropDown: false,
      },
      {
        label: "Smart",
        href: "/men/smart-watch",
        isDropDown: false,
      },
      {
        label: "Fitness",
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
        label: "Casual",
        href: "/women/casual-watches",
        isDropDown: false,
      },
      {
        label: "Luxury",
        href: "/women/luxury-watches",
        isDropDown: false,
      },
      {
        label: "Dress",
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
        label: "Fitness",
        href: "/kids/fitness-watches",
        isDropDown: false,
      },
      {
        label: "Smart",
        href: "/kids/smart-watches",
        isDropDown: false,
      },
    ],
  },
  {
    label: "More",
    href: "/more/more",
    isDropDown: true,
    dropDownData: [
      {
        label: "NewArrivals",
        href: "/more/new-arrivals",
        isDropDown: false,
      },
      {
        label: "HotDeals",
        href: "/more/hot-deals",
        isDropDown: false,
      },
      {
        label: "Summer-Collection",
        href: "/more/summer-collection",
        isDropDown: false,
      },
    ],
  },
];
