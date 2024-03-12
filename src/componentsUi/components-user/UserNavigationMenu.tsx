import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components-ui/ui/navigation-menu";

const UserNavigationMenu = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col px-[8.9em]">
                <NavigationMenuLink>92Link</NavigationMenuLink>
                <NavigationMenuLink>85Link</NavigationMenuLink>
                <NavigationMenuLink>45Link</NavigationMenuLink>
                <NavigationMenuLink>50Link</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col px-[8.9em]">
                <NavigationMenuLink>59Link</NavigationMenuLink>
                <NavigationMenuLink>27Link</NavigationMenuLink>
                <NavigationMenuLink>45Link</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col px-[8.9em]">
                <NavigationMenuLink>30Link</NavigationMenuLink>
                <NavigationMenuLink>38Link</NavigationMenuLink>
                <NavigationMenuLink>66Link</NavigationMenuLink>
                <NavigationMenuLink>54Link</NavigationMenuLink>
                <NavigationMenuLink>96Link</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default UserNavigationMenu;
