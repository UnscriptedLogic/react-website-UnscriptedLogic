import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Navbar = ({ sx }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const changePage = (pageName) => {
        navigate(`/${pageName}`);
    };

    const navItems = [
        {
            label: "Gameplay Programmer",
            page: "gsdesigner",
            align: "right",
        },
        {
            label: "Game Developer",
            page: "gamedev",
            align: "center",
            isCore: true,
        },
        {
            label: "Game UI Designer",
            page: "uidesigner",
            align: "left",
        },
        {
            label: "3D Modeller",
            page: "modeller",
            align: "left",
        },
    ];

    const isActive = (page) => {
        if (page === "gamedev" && location.pathname === "/") {
            return true;
        }

        return location.pathname === `/${page}`;
    };

    const renderNavButton = ({ label, page, isCore }) => {
        const active = isActive(page);

        return (
            <Button
                key={page}
                onClick={() => changePage(page)}
                sx={{
                    borderRadius: "0px",
                    minWidth: isCore ? "12rem" : "10rem",
                    height: "100%",
                    px: isCore ? "1.35rem" : "1rem",
                    bgcolor: active
                        ? "rgba(99, 173, 255, 0.2)"
                        : "rgba(255,255,255,0.04)",
                    boxShadow: active
                        ? "0 0 0 1px rgba(99,173,255,0.35), 0 0 18px rgba(99,173,255,0.28)"
                        : "none",
                    color: active ? "#ffffff" : "#d8d8d8",
                    textTransform: "none",
                    transition:
                        "background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease",
                    "&:hover": {
                        bgcolor: active
                            ? "rgba(99, 173, 255, 0.28)"
                            : "rgba(255,255,255,0.1)",
                        borderColor: active
                            ? "#8cc4ff"
                            : "rgba(255,255,255,0.46)",
                        transform: "translateY(-1px)",
                        boxShadow: active
                            ? "0 0 0 1px rgba(99,173,255,0.45), 0 0 22px rgba(99,173,255,0.34)"
                            : "0 8px 18px rgba(0,0,0,0.3)",
                    },
                }}
            >
                <Typography
                    fontFamily="PointRegular"
                    sx={{
                        fontSize: isCore ? "1.05rem" : "0.95rem",
                        color: "inherit",
                        whiteSpace: "nowrap",
                    }}
                >
                    {label}
                </Typography>
            </Button>
        );
    };

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)",
                alignItems: "center",
                gap: "1rem",
                backgroundColor: "rgba(0,0,0,0.92)",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                boxSizing: "border-box",
                ...sx,
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {navItems
                    .filter((item) => item.align === "right")
                    .map(renderNavButton)}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {navItems
                    .filter((item) => item.align === "center")
                    .map(renderNavButton)}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                {navItems
                    .filter((item) => item.align === "left")
                    .map(renderNavButton)}
            </Box>
        </Box>
    );
};

export default Navbar;
