const isRouteActive = (route: string) => {
  //   return true if the route is active
  const isActive =
    route === window.location.pathname ||
    window.location.pathname.includes(route);
  return isActive;
};

const useMenu = () => {
  const menu = [
    { label: "Home", route: "/home", active: isRouteActive("/home") },
    {
      label: "Campervans",
      route: "/campervans",
      active: isRouteActive("/campervans"),
    },
    {
      label: "Get Inspired",
      submenu: [{
        label: "Popular Routes",
        route: "/get-inspired/popular-routes",
        active: isRouteActive("/get-inspired/popular-routes"),
      },
      {
        label: "Blog & News",
        route: "/get-inspired/blog",
        active: isRouteActive("/get-inspired/blog"),
      },
      {
        label: "Recipes On The Road",
        route: "/get-inspired/recipes",
        active: isRouteActive("/get-inspired/recipes"),
      }
    ]
    },
    {
      label: "Contact",
      route: "/contact",
      active: isRouteActive("/contact"),
    },
  ];
  return menu;
};

export default useMenu;
