export interface MenuItem {
  title: string;
  path: string;
  submenu?: MenuItem[];
}

export interface FooterSection {
  title: string;
  items: {
    title: string;
    path: string;
  }[];
}