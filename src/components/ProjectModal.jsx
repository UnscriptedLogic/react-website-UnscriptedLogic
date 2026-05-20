import React from "react";
import { Box, Fade, Modal } from "@mui/material";

const ProjectModal = ({ open, onClose, children, sx }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropProps={{
                timeout: 500,
                sx: {
                    bgcolor: "rgba(0, 0, 0, 0.78)",
                    backdropFilter: "blur(2px)",
                },
            }}
        >
            <Fade in={open} timeout={500}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "calc(100vw - 2rem)", md: "min(68rem, 82vw)" },
                        maxHeight: "84vh",
                        overflowY: "auto",
                        bgcolor: "#171717",
                        color: "white",
                        border: "0.4rem solid #d8d8d8",
                        borderBottomWidth: "0.9rem",
                        boxShadow: "0 2rem 4rem rgba(0,0,0,0.5)",
                        outline: "none",
                        p: { xs: "1.25rem", md: "2rem" },
                        boxSizing: "border-box",
                        ...sx,
                    }}
                >
                    {children}
                </Box>
            </Fade>
        </Modal>
    );
};

export default ProjectModal;
