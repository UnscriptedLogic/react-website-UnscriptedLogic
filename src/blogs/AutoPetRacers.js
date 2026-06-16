import BlogStructure, { BlogTopic } from "../BlogStructure";

export const AutoPetRacersBlogData = new BlogStructure(
    [
        BlogStructure.quote(
            "The players should feel about the game what the developers felt themselves.",
        ),
        "Would you believe this was my first Unreal Engine 5 project. This project was never meant to take off. It was never meant to be a full project to begin with. It was just a silly little project that I created to escape my burnout from Unity and making games there.\n\nAll I wanted to do, was to recreate the AI running logic from UmaMusume. I noticed that the runners had overtaking, blocking and track awareness logic. I thought 'oh hey there's actually some reasoning behind their pathing, lets try to recreate this one thing and just be done with it. Something to get me started and back into the groove of making stuff again.'\n\nI made a video about my results and called it a day.",
        BlogStructure.youtube("https://www.youtube.com/watch?v=ydZ-1HQMMmQ"),
        "I checked back after a week and-holy balls of tungsten steel. 12 thousand views, 90 comments and 800 likes. For reference, my average video has 100 views and 2 likes at the most.\n\n'Well I can't stop now'\n\nThere and then, the spark returned and off I went, unbeknownst to me that this would be a game that would end up selling 450 copies on Steam and my first few Youtuber coverages. I was not in a state of mind to make full games right after coming out of burn out but I had to jump on this spark before it faded out.",
        BlogStructure.header("Inspiration"),
        "You wouldn't believe what the inspirations for this game was.\n\n- Funny anime girl horse racing game from CyGames: UmaMusume\n- Ultimately sweaty auto chess game from Riot Games: TeamFight Tactics\n- Cute pet team combat manager from TeamWood: Super Auto Pets (I think this is the only obvious one)",
        BlogStructure.subheader("Super Auto Pets"),
        "'Infinite Depth with Infinite Breadth'\n\nThat's what I would call Super Auto Pets and is one of the many games I look back on for the sole reason of it's primary game design principle: 'Complexity in Simplicity'\nFor the uninformed, it's a game about forming a team of 5 emoji pets with each pet having of 1 unique ability. 10 round and 5 lives. Last 10 rounds with the team you enlist and you are victorious. Deceptively simple, surpringly deep. I'll admit that I was told to play this game sooner by my friends but passed on it based on first expectations. I guess it's true that we never really do know what we really want.",
        BlogStructure.subheader("UmaMusume: Pretty Derby"),
        "Okay now hear me out. 'Training cute anime horse girls to take part in derbies' was not on my bingo card of games I would play but here we are. I would sometimes try to avoid playing this game publicly due to the aforementioned 'first expectations' principle. This game had no right being this addictive. A roguelite visual novel style game where you manage your anime horse girl's (UmaMusume or Uma for short) stats and energy. The beauty of it came from training other horses to train your other horses. Get it? That's gamification of horse gene manipulation or in layman terms: Horse Seggs.\n\nAnyway the point was that it too was a simple game. It was virtually just pressing buttons and staring at the cute anime girl. What more could a weeb really ask for?",
        BlogStructure.subheader("TeamFight Tactics"),
        "By the nine realms, this game confounding. \nThis was if gambling slots and bank interests decided to have a child and it secretly strangles you to death as you watch your opponents break free from the child's grasp because lady luck decided to suddenly pay childcare support, grab the child and book it down to the 100 yard line with no one else to stop them. (Set 16)\n\nOkay okay I know it's not entirely luck, and the game is about the manipulation of luck and giving yourself room for error as you navigate the choices of other opponents as well but god damn is it addicting and infuriating at the same time.",
        "By some sheer miracle, I was introduced/re-introduced to these games around roughly the same time which gave birth to Auto Pet Racers, allowing me to design one of my better games as I write this blog.\n\nThank you Siddaarth Vader for introducing me to TFT.",
        BlogStructure.header("The Gateway of Debuffs"),
        "Talk about the problems you had",
        "- Learning UE5, rewriting the codebase\n- Opinionated workflow meant that there was a specific way to do this\n- GameplayTags and the great game design refactor",
        BlogStructure.header("The Grand Terraformation"),
        "- Better Game Design\n- Better UI\n- Better Abilities\n- Better production",
        BlogStructure.header("And there it goes..."),
        "- Days that led up to early access\n- The small hype it garnered\n- Was it really worth this price?",
        BlogStructure.header("Looking back"),
        "- This project had to happen\n- Out of the limelight\n- Techniques gained\n- What it meant to finish a game",
    ],
    {
        tags: [
            BlogTopic.SOLO_GAME_DEVELOPMENT,
            BlogTopic.GAME_DESIGN,
            BlogTopic.GAME_PROGRAMMING,
            BlogTopic.AI_PROGRAMMING,
            BlogTopic.UNREAL_ENGINE,
            BlogTopic.GAME_PRODUCTION,
        ],
    },
);
