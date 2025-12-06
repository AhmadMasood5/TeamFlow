"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  PortalLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { CreditCard, LogOut, User } from "lucide-react";
import { Portal } from "vaul";

const user = {
  picture: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
  given_name: "Ahmad",
  email: "ahmadmasoodpk0@gmail.com",
};

export function UserNav() {
  return (
    <TooltipProvider>
      <Tooltip>
        {/* Hover shows tooltip */}
        <TooltipTrigger asChild>
          <DropdownMenu>
            {/* Click opens dropdown */}
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full size-12 hover:rounded-lg transition-all duration-200 bg-background/50 border-border/50 hover:bg-accent hover:text-accent-foreground"
              >
                <Avatar>
                  <AvatarImage
                    src={user.picture}
                    alt="user Image"
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {user.given_name.slice(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              side="right"
              sideOffset={8}
              className="w-[200px]"
            >
              <DropdownMenuLabel className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src={user.picture}
                    alt="user Image"
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {user.given_name.slice(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-xs leading-tight">
                  <p className="truncate font-medium">{user.given_name}</p>
                  <p className="text-muted-foreground truncate text-xs">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
               <PortalLink>
                 <User />
                Account
               </PortalLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
               <PortalLink>
                 <CreditCard />
                Billings
               </PortalLink>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipTrigger>

        {/* Tooltip content shown on hover */}
        <TooltipContent side="right">
          <p>{user.given_name}</p>
          <p className="text-muted-foreground text-xs">{user.email}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
