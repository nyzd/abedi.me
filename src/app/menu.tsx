"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "../components/ui/navigation-menu";

export default function Menu() {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger disabled>Posts</NavigationMenuTrigger>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger disabled>Projects</NavigationMenuTrigger>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger disabled>Contact</NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    );
}
