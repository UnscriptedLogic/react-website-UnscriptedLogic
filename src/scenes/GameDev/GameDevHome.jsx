import {
    EducationCard,
    GameCard,
    MajorGameCard,
    Navbar,
    Footer,
} from "../../ImportRoutes";
import { majorGames, minorGames } from "../../GameManager";
import { Tech } from "../../Manager";
import {
    Avatar,
    Box,
    Button,
    Chip,
    Container,
    Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import video from "/GameDevTrailer2.mp4";
import profilePic from "/bestpicResized.jpg";
import tpLogo from "/tpLogo.jpg";
import iteLogo from "/iteLogo.jpg";
import "./GameDevHome.css";

const specializations = [
    {
        label: "Gameplay Systems",
        title: "Readable mechanics with room to grow",
        body: "I enjoy building rules, feedback, and progression loops that players can understand quickly, then keep exploring through play.",
    },
    {
        label: "Rapid Prototyping",
        title: "Finding the fun under constraints",
        body: "Game jams and school projects helped me move fast, test ideas early, and focus each build around the strongest interaction.",
    },
    {
        label: "3D Implementation",
        title: "Connecting assets, code, and game feel",
        body: "I like the practical bridge between Unity, Blender, UI, and services where individual assets start feeling like a complete game.",
    },
];

const toolGroups = [
    {
        title: "Engines",
        tools: [Tech.Unity, Tech.UnrealEngine],
    },
    {
        title: "Art & Assets",
        tools: [Tech.Blender, Tech.Illustrator, Tech.Figma],
    },
    {
        title: "Services",
        tools: [Tech.PlayFab, Tech.AWS],
    },
    {
        title: "Workflow",
        tools: ["Game Jams", "Rapid Prototyping", "Case Studies", "Indie"],
    },
];

function GameDevHome() {
    const featuredGame = majorGames[0];

    return (
        <div className="GameDevHome">
            <Navbar></Navbar>
            <Box component="main" className="game-dev-page">
                <Box component="section" className="game-dev-hero">
                    <video
                        className="game-dev-hero-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                    <Box className="game-dev-hero-scrim" />
                    <Container maxWidth="lg" className="game-dev-hero-content">
                        <Typography className="game-dev-kicker">
                            Nathaniel Harold Alcala
                        </Typography>
                        <Typography
                            component="h1"
                            className="game-dev-hero-title"
                        >
                            Game Developer
                        </Typography>
                        <Typography className="game-dev-hero-copy">
                            I build playable systems, prototypes, and game
                            worlds with a focus on memorable mechanics and
                            hands-on technical craft.
                        </Typography>
                        <Box className="game-dev-hero-actions">
                            <Button
                                href="#projects"
                                variant="contained"
                                startIcon={<PlayArrowIcon />}
                            >
                                View Projects
                            </Button>
                            <Button
                                href="#specialize"
                                variant="outlined"
                                endIcon={<ArrowForwardIcon />}
                            >
                                Specializations
                            </Button>
                        </Box>
                    </Container>
                </Box>

                <Box
                    component="section"
                    id="specialize"
                    className="game-dev-specialize"
                >
                    <Container maxWidth="lg">
                        <Box className="game-dev-section-intro">
                            <Typography className="game-dev-kicker">
                                What I Specialize In
                            </Typography>
                            <Typography component="h2">
                                Gameplay systems with flexible architecture
                            </Typography>
                        </Box>
                        <Box className="game-dev-specialize-grid">
                            {specializations.map((item) => (
                                <Box
                                    className="game-dev-specialize-card"
                                    key={item.title}
                                >
                                    <Chip label={item.label} size="small" />
                                    <Typography component="h3">
                                        {item.title}
                                    </Typography>
                                    <Typography>{item.body}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </Box>

                <Box component="section" id="tools" className="game-dev-tools">
                    <Container maxWidth="lg" className="game-dev-tools-inner">
                        <Box className="game-dev-tools-copy">
                            <Typography className="game-dev-kicker">
                                Technologies and Softwares I've used
                            </Typography>
                            <Typography component="h2">Tools</Typography>
                            <Typography>
                                My work usually starts in Unity, then branches
                                into 3D assets, UI, backend services, and fast
                                iteration workflows depending on what the game
                                needs.
                            </Typography>
                        </Box>
                        <Box className="game-dev-tool-grid">
                            {toolGroups.map((group) => (
                                <Box
                                    className="game-dev-tool-group"
                                    key={group.title}
                                >
                                    <Typography component="h3">
                                        {group.title}
                                    </Typography>
                                    <Box>
                                        {group.tools.map((tool) => (
                                            <Chip
                                                label={tool.name ?? tool}
                                                key={tool.name ?? tool}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </Box>

                {/* <Box component="section" id="about" className="game-dev-about">
                    <Container maxWidth="lg" className="game-dev-about-inner">
                        <Box className="game-dev-about-media">
                            <Avatar src={profilePic} />
                        </Box>
                        <Box className="game-dev-about-copy">
                            <Typography className="game-dev-kicker">
                                About Me
                            </Typography>
                            <Typography component="h2">
                                Nathaniel Harold Alcala
                            </Typography>
                            <Typography>
                                An aspiring self-learned game developer from
                                Singapore, building the technologies, skillset,
                                and mindset to bring fun, unique, and memorable
                                games to the industry.
                            </Typography>
                        </Box>
                    </Container>
                </Box> */}

                <Box
                    component="section"
                    id="projects"
                    className="game-dev-projects"
                >
                    <Container maxWidth="lg">
                        <Box className="game-dev-section-intro">
                            <Typography className="game-dev-kicker">
                                Projects
                            </Typography>
                            <Typography component="h2">
                                Featured game development work
                            </Typography>
                        </Box>
                        <Box className="game-dev-feature-project">
                            <Box className="game-dev-feature-project-copy">
                                <Typography className="game-dev-kicker">
                                    Highlight
                                </Typography>
                                <Typography component="h3">
                                    {featuredGame.name}
                                </Typography>
                                <Typography>{featuredGame.desc}</Typography>
                                <Button
                                    href={`/blog/${featuredGame.blogLink}`}
                                    variant="contained"
                                    endIcon={<ArrowForwardIcon />}
                                >
                                    Open Case Study
                                </Button>
                            </Box>
                            <Box className="game-dev-feature-project-media">
                                <img
                                    src={featuredGame.thumbnail}
                                    alt={`${featuredGame.name} thumbnail`}
                                />
                            </Box>
                        </Box>
                        <Box className="game-dev-major-grid">
                            {majorGames.map((item) => (
                                <MajorGameCard
                                    key={item.name}
                                    image={item.thumbnail}
                                    title={item.name}
                                    desc={item.desc}
                                    year={item.year}
                                    status={item.gameStatus}
                                    genres={item.genres}
                                    techUsed={item.techUsed}
                                    blogLink={item.blogLink}
                                ></MajorGameCard>
                            ))}
                        </Box>
                    </Container>
                </Box>

                <Box component="section" id="jams" className="game-dev-jams">
                    <Container maxWidth="lg">
                        <Box className="game-dev-section-intro">
                            <Typography className="game-dev-kicker">
                                Smaller Builds
                            </Typography>
                            <Typography component="h2">
                                Game jam projects and compact experiments
                            </Typography>
                        </Box>
                        <Box className="game-dev-minor-grid">
                            {minorGames.map((item) => (
                                <GameCard
                                    key={item.name}
                                    image={item.thumbnail}
                                    title={item.name}
                                    desc={item.desc}
                                    year={item.year}
                                    genres={item.genres}
                                    techUsed={item.techUsed}
                                    blogLink={item.blogLink}
                                    submissionType={item.submissionTypes}
                                    submissionLink={item.submissionLink}
                                ></GameCard>
                            ))}
                        </Box>
                    </Container>
                </Box>

                <Box
                    component="section"
                    id="experience"
                    className="game-dev-experience"
                >
                    <Container maxWidth="lg">
                        <Box className="game-dev-section-intro">
                            <Typography className="game-dev-kicker">
                                Work Experience
                            </Typography>
                            <Typography component="h2">
                                Production and Collaboration
                            </Typography>
                        </Box>
                        <Box className="game-dev-card-stack">
                            <EducationCard
                                name="Smartli Pte Ltd"
                                study="Game Developer Internship"
                                studyRemarks="Self-secured internship with approval from the school"
                                year="26 June 2023 - 24 November 2023"
                                status="Internship"
                            ></EducationCard>
                        </Box>
                    </Container>
                </Box>

                <Box
                    component="section"
                    id="education"
                    className="game-dev-education"
                >
                    <Container maxWidth="lg">
                        <Box className="game-dev-section-intro">
                            <Typography className="game-dev-kicker">
                                Education
                            </Typography>
                            <Typography component="h2">schools</Typography>
                        </Box>
                        <Box className="game-dev-card-stack">
                            <EducationCard
                                name="Temasek Polytechnic"
                                study="Information Technology"
                                studyRemarks="Picked Up Backend and Web Frameworks. Complimented Game Dev"
                                year="2021 - 2024"
                                status="Graduated"
                                icon={tpLogo}
                            ></EducationCard>
                            <EducationCard
                                name="Institute of Technical Education"
                                study="Civil and Structural Engineering and Design"
                                studyRemarks="Picked Up 3D Modelling. Found Game Development Here"
                                year="2019 - 2021"
                                status="Graduated"
                                icon={iteLogo}
                            ></EducationCard>
                            <EducationCard
                                name="Bedok Town/Ping Yi Secondary School"
                                study="GCE 'N' Levels"
                                studyRemarks="Picked Up Design"
                                year="2015 - 2019"
                                status="Graduated"
                            ></EducationCard>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Footer></Footer>
        </div>
    );
}

export default GameDevHome;
