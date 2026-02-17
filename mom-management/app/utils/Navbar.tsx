'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { logout, getSession } from "@/app/actions/auth";

type ChildNav = { href: string; label: string };
type NavItem = {
    href?: string;
    label: string;
    children?: ChildNav[];
    adminOnly?: boolean;
    userOnly?: boolean;
};

const navItems: NavItem[] = [
    { href: "/", label: "Dashboard", adminOnly: true },
    { href: "/user-dashboard", label: "Dashboard", adminOnly: false },
    {
        href: "/meetings",
        label: "Meetings",
        children: [
            { href: "/meetings", label: "All Meetings" },
            { href: "/meetings/new", label: "New Meeting" },
        ],
    },
    {
        href: "/attendance",
        label: "Attendance",
        adminOnly: true,
        children: [
            { href: "/attendance", label: "Attendance List" },
        ],
    },
    {
        href: "/master",
        label: "Master",
        adminOnly: true,
        children: [
            { href: "/master", label: "Dashboard" },
            { href: "/master/meeting_types", label: "Meeting Types" },
            { href: "/master/staff", label: "Staff" },
            { href: "/master/departments", label: "Departments" },
            { href: "/master/venues", label: "Venues" },
        ],
    },
    {
        href: "/reports",
        label: "Reports",
        adminOnly: true,
        children: [
            { href: "/reports", label: "Dashboard" },
            { href: "/reports/summary", label: "Meeting Summary" },
            { href: "/reports/meeting_wise", label: "Meeting Wise" },
        ],
    },
    { href: "/about", label: "About", userOnly: true },
    { href: "/services", label: "Services", userOnly: true },
    { href: "/contact", label: "Contact", userOnly: true },
    { href: "/privacy", label: "Privacy Policy", userOnly: true },
];

export default function Navbar() {
    const pathname = usePathname() ?? "";
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [user, setUser] = useState<{ name: string; role: string; initials: string } | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const session = await getSession();
            if (session) {
                setUser({
                    name: session.name,
                    role: session.role || 'USER',
                    initials: session.initials
                });
            }
        };
        fetchUser();
    }, []);

    const isAdmin = user?.role === 'ADMIN';

    const filteredItems = navItems.filter(item => {
        // Handle User-only items (hide for Admins)
        if (item.userOnly && isAdmin) return false;

        // Handle Admin-only items
        if (item.adminOnly && !isAdmin) return false;

        // Handle Dashboard link (show / for admin, /user-dashboard for user)
        if (item.href === "/" && !isAdmin) return false;
        if (item.href === "/user-dashboard" && isAdmin) return false;

        // Special case for Meetings: filter children for non-admins
        if (item.label === "Meetings" && !isAdmin && item.children) {
            item.children = item.children.filter(child => child.href === "/meetings");
        }

        return true;
    });

    return (
        <nav
            className="sticky-top"
            style={{
                background: "#ffffff",
                borderBottom: "1px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(15,23,42,0.08)",
                zIndex: 1030
            }}
        >
            <div className="container d-flex align-items-center justify-content-between" style={{ height: 68 }}>

                {/* ================= LOGO ================= */}
                <Link href={isAdmin ? "/" : "/user-dashboard"} className="d-flex align-items-center text-decoration-none btn-smooth">
                    <div
                        className="d-flex align-items-center justify-content-center fw-bold me-2"
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            background: "linear-gradient(135deg, #0f172a, #1d4ed8)",
                            color: "#facc15",
                            fontSize: 18,
                            boxShadow: "0 6px 16px rgba(29,78,216,0.2)"
                        }}
                    >
                        M
                    </div>

                    <div className="d-flex flex-column lh-1">
                        <span className="fw-bold fs-5">
                            <span style={{ color: "#1d4ed8" }}>MoM</span>
                            <span style={{ color: "#facc15" }}>enta</span>
                        </span>
                        <small style={{ fontSize: 11, color: "#64748b" }}>
                            Meetings into Momentum
                        </small>
                    </div>
                </Link>

                {/* ================= NAV LINKS ================= */}
                <div className="d-none d-md-flex align-items-center gap-1">
                    {filteredItems.map((item, index) => {
                        const active = item.href
                            ? pathname === item.href || pathname.startsWith(item.href + "/")
                            : item.children?.some(child =>
                                pathname === child.href || pathname.startsWith(child.href + "/")
                            );

                        if (item.children && item.children.length > 0) {
                            // If only one child after filtering, don't show dropdown
                            if (item.children.length === 1 && !isAdmin) {
                                const child = item.children[0];
                                return (
                                    <Link
                                        key={child.href}
                                        href={child.href}
                                        className={`btn btn-sm fw-medium nav-link-smooth ${pathname === child.href ? 'active-link' : ''}`}
                                        style={{
                                            borderRadius: 10,
                                            padding: "6px 14px",
                                            background: pathname === child.href ? "#eff6ff" : "transparent",
                                            color: pathname === child.href ? "#1d4ed8" : "#475569"
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }

                            return (
                                <div
                                    key={item.label}
                                    className="position-relative"
                                    onMouseEnter={() => setOpenDropdown(index)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    {/* Trigger - Made clickable as per user request */}
                                    <Link
                                        href={item.href || (item.children && item.children[0]?.href) || "#"}
                                        className={`btn btn-sm nav-link-smooth btn-smooth d-inline-flex align-items-center text-decoration-none ${active
                                            ? "active-link fw-bold"
                                            : "border-0 text-secondary"
                                            }`}
                                        style={{
                                            padding: "6px 14px",
                                            color: active ? "#1d4ed8" : "#64748b",
                                            background: active ? "#eff6ff" : "transparent"
                                        }}
                                    >
                                        {item.label}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div
                                        className={`dropdown-menu shadow-lg border-0 nav-dropdown-menu ${openDropdown === index ? 'dropdown-show' : ''}`}
                                        style={{
                                            minWidth: "220px",
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            borderRadius: "12px",
                                            padding: "8px",
                                            zIndex: 2000,
                                            background: "rgba(255, 255, 255, 0.95)",
                                            backdropFilter: "blur(8px)",
                                            marginTop: "5px"
                                        }}
                                    >
                                        {item.children.map((child) => {
                                            const childActive =
                                                pathname === child.href ||
                                                pathname.startsWith(child.href + "/");

                                            return (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className={`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mb-1 ${childActive
                                                        ? "bg-primary text-white"
                                                        : "text-dark"
                                                        }`}
                                                    onClick={() => setOpenDropdown(null)}
                                                    style={{ transition: 'all 0.2s ease' }}
                                                >
                                                    {child.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        }

                        if (!item.href) return null;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`btn btn-sm fw-medium nav-link-smooth btn-smooth ${active ? 'active-link' : ''}`}
                                style={{
                                    borderRadius: 10,
                                    padding: "6px 14px",
                                    background: active ? "#eff6ff" : "transparent",
                                    color: active ? "#1d4ed8" : "#475569"
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* ================= USER SECTION ================= */}
                <div className="d-flex align-items-center gap-3">
                    <Link href="/profile" className="d-flex align-items-center text-decoration-none btn-smooth">
                        <div
                            className="d-flex align-items-center justify-content-center fw-bold text-white shadow-sm"
                            style={{
                                width: 34,
                                height: 34,
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #1d4ed8, #0f172a)",
                                fontSize: 12
                            }}
                        >
                            {user?.initials || '??'}
                        </div>
                        <span className="ms-2 small fw-bold text-dark d-none d-lg-inline">
                            {user?.name || 'Loading...'}
                        </span>
                    </Link>

                    <form action={logout}>
                        <button
                            type="submit"
                            className="btn btn-sm btn-smooth"
                            style={{
                                borderRadius: 10,
                                padding: "6px 14px",
                                border: "1px solid #e5e7eb",
                                color: "#dc2626",
                                fontWeight: '600',
                                background: '#fff'
                            }}
                        >
                            Logout
                        </button>
                    </form>
                </div>

            </div>
        </nav>
    );
}

