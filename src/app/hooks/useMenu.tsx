
const isRouteActive = (route: string) => {
  //   return true if the route is active
  const isActive =
    route === window.location.pathname ||
    window.location.pathname.includes(route);
  return isActive;
};
const homeRouteActive = (route: string) => {
  const isActive = route === window.location.pathname;
  return isActive;
};


const useMenu = () => {
  const menu = [
    {
      label: "Home",
      route: "/",
      active: homeRouteActive("/")
    },
    {
      label: "Campervans",
      route: "/campervans",
      active: isRouteActive("/campervans"),
    },
    {
      label: "Get Inspired",
      submenu: [
        {
          label: "Blog & News",
          route: "/get-inspired/blogNews",
          active: isRouteActive("/get-inspired/blogNews"),
        },
        {
          label: "Recipes On The Road",
          route: "/get-inspired/recipes",
          active: isRouteActive("/get-inspired/recipes"),
        },
      ],
    },
  ];

  // Render different menu when the member is logged in
  const memberMenu = [
    
        {
          label: "Bookings",
          route: "/member/bookings",
          active: isRouteActive("/member/bookings"),
        },
        {
          label: "Account",
          route: "/member/account",
          active: isRouteActive("/member/account"),
        },
        {
          label: "Logout",
          route: "/logout",
          active: isRouteActive("/member/account"),
        },
   

  ]
      

  return {menu, memberMenu};
};


export default useMenu;