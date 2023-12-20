'use client'
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useMemo } from "react";
import {
    CollapsIcon,
    HomeIcon,
    LogoutIcon,
    BookIcon,
    UploadIcon,
    UserIcon
} from "./icons";


const menuItems = [
    { id: 1, label: "Dashboard", icon: HomeIcon, link: "/dashboard/author" },
    { id: 2, label: "Livros", icon: BookIcon, link: "/dashboard/author/books" },
    { id: 3, label: "Submissões", icon: UploadIcon, link: "/dashboard/author/submissions" },
    { id: 4, label: "Perfil", icon: UserIcon, link: "/dashboard/author/profile" },
];

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const pathname = usePathname()

    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === pathname),
        [pathname]
    );

    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
        {
            ["w-64"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
        }
    );

    const collapseIconClasses = classNames(
        "p-4 rounded bg-light-lighter absolute right-0",
        {
            "rotate-180": toggleCollapse,
        }
    );

    const getNavItemClasses = (menu: any) => {
        return classNames(
            "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
            {
                ["bg-light-lighter, text-decoration-line: underline"]: activeMenu?.id === menu.id,
            }
        );
    };

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    return (
        <div
            className={wrapperClasses}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <div className="flex flex-col">
                <div className="flex items-center justify-between relative">
                    <div className="pl-1 ">
                        <img src="/starbooks.svg" alt="logo" />
                        <span
                            className={classNames("text-blue-500 font-medium text-sm", {
                                hidden: toggleCollapse,
                            })}
                        >
                            User name
                        </span>
                    </div>
                    {isCollapsible && (
                        <button
                            className={collapseIconClasses}
                            onClick={handleSidebarToggle}
                        >
                            <CollapsIcon />
                        </button>
                    )}
                </div>

                <div className="flex flex-col items-start mt-20">
                    {menuItems.map(({ icon: Icon, ...menu }) => {
                        const classes = getNavItemClasses(menu);
                        return (
                            <div key={menu.id} className={classes}>
                                <Link legacyBehavior href={menu.link}>
                                    <a className="flex py-4 px-3 items-center w-full h-full">
                                        <div style={{ width: "2.5rem" }}>
                                            <Icon />
                                        </div>
                                        {!toggleCollapse && (
                                            <span
                                                className={classNames(
                                                    "text-md font-medium text-text-light"
                                                )}
                                            >
                                                {menu.label}
                                            </span>
                                        )}
                                    </a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={`${getNavItemClasses({})} px-3 py-4`}>
                <div style={{ width: "2.5rem" }}>
                    <LogoutIcon />
                </div>
                {!toggleCollapse && (
                    <span className={classNames("text-md font-medium text-text-light")}>
                        Logout
                    </span>
                )}
            </div>
        </div>
    );
};

export default Sidebar;