const Menus: any[] = [
  { 
    title: "Features",
    id: "features",
    link: "",
    children: [
      { title: "Dashboard", id: "dashboard", link: "/dashboard" },
      { title: "Layout Builder", id: "layoutBuilder", link: "/builder" },
      {
        title: "Apps",
        id: "apps",
        link: "/apps",
        children: [
          {
            title: "Chat",
            id: "chat",
            link: "/apps/chat",
            icon: "/media/icons/duotune/communication/com012.svg",
            hasArrow: true,
            children: [
              {
                title: "Private Chat",
                id: "privateChat",
                link: "/apps/chat/private-chat",
                hasBullet: true,
              },
              {
                title: "Group Chat",
                id: "groupChat",
                link: "/apps/chat/group-chat",
                hasBullet: true,
              },
              {
                title: "Drawer Chat",
                id: "drawerChat",
                link: "/apps/chat/drawer-chat",
                hasBullet: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Main",
    id: "main",
    link: "",
  },
  {
    title: "Tools",
    id: "tools",
    link: "",
  },
  {
    title: "Leads",
    id: "leads",
    link: "",
  },
  {
    title: "Admin",
    id: "admin",
    link: "/admin",
    children: [{ title: "Admin", id: "agent-roster", link: "/admin" }],
  },
  {
    title: "Transactions",
    id: "transactions",
    link: "",
    children: [
      { title: "Listings", id: "listings", link: "/transactions/listings" },
    ],
  },
  {
    title: "Comms",
    id: "comms",
    link: "",
  },
  {
    title: "Knowledgebase",
    id: "knowledgebase",
    link: "",
  },
];

export default Menus;
