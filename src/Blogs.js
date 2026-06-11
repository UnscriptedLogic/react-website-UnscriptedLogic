import BlogStructure from "./BlogStructure";
import ud_thumbnail from "/uidesign/unscriptedduels/UnscriptedDuelsThumbnail.png";
import ud_handtohand from "/uidesign/unscriptedduels/Video_HandToHand.mp4";
import ud_reconcile from "/uidesign/unscriptedduels/UD_Reconciliation.mp4";
import ud_aerialHook from "/uidesign/unscriptedduels/Video_AerialHook.mp4";
import ud_goodhook from "/uidesign/unscriptedduels/Video_GoodHook.mp4";

export const unscriptedDuelsBlog = new BlogStructure([
    BlogStructure.header("Inspiration"),
    "This game was primarily inspired by a game on Roblox called 'Duel Warriors'. The secondary inspirations were all the other slow paced, meticulous and strategic combat games that also existed on Roblox. I found this game to be particular fun, mainly because you could fight people with all sorts of doohickey, chaining stuns or controlling area, irritating and annoying both to them or to you when you inevitably encounter the same combo yourself. So with CodeMonkey's Multiplayer tutorial, I had a go at trying to make one myself. 'A simple version of this'.\n\nThis is where things like cheating and 'what can I trust' started entering my workflow. It's a tale as old as time that a lock only keeps and honest man out. So I kept things simple. Treat the client as untrustworthy and the server is the only source of truth. Understand that the client and server may never be 1:1, just try to get close to it without ruining the experience. Of course this is easier said than done and with only very little experience with networking under my belt, I attempted this behemoth of a topic.",
    BlogStructure.header("The Implementation"),
    BlogStructure.video(ud_handtohand, {
        caption:
            "A short clip of me and my dad playtesting the netcode of the game. Needless to say, it was a hot mess. Functional, but at most time unbearable.",
    }),
    BlogStructure.video(ud_reconcile, {
        caption: "Connected to Asia servers from my trip in Europe",
    }),
    "The red box is the client position they broadcasted to the server that cannot be trusted and the green box is the server position that can be trusted. The wire sphere around the boxes is the `margin of error` that scales with the ping of the client. The little white spheres are positions recording in space. \n\nTo a certain degree, it worked alright. A feeble yet modest attempt at a rather difficult topic altogether. Of course towards the later part of the video, you can clearly see some runner banding as the reconciliation and the current position kind of fight over where the player should be. Not to mention, I implemented the margin of error but forgot to also apply that leniency for dealing damage. At 0:43 of the video, you can clearly see me smacking my opponent on the client side but because the server side position (you can see the green box to the right) is offset so to the server, it appears I'm not actually smacking my opponent. \n\nThere were a lot of little things that kept on tripping me during this project. A lot of 'oh if I do this then I can't do this' or 'now because I don't have ownership, I have to route it this way' and it really got way bigger than me. There were times I had no clue why something was not working and eventually burnt out from the project and dropped it altogether.",
    BlogStructure.header("Closing"),
    BlogStructure.quote(
        "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
    ),
    "Although I was feeling down for a while, not being able to realize a decent gameplay that I can publish on ItchIO, I learned what it takes to get to this point. It's for sure no easy task to make a game, let alone a multiplayer game itself but I am definitely going to revisit making a multiplayer game again in the future. I have always loved the social aspect of video games. I grew up on Roblox. Shooting, building, surviving with or against other players online has always been a joy and one day I will make/be part of a team that makes a good multiplayer game that players can enjoy with their friends.",
    BlogStructure.header("More Footage"),
    BlogStructure.video(ud_goodhook, {
        caption:
            "The Claw Hook was the most difficult ability to program solely because of ownership and position manipulation. The opponent didn't move so the server still thinks that they are still at that position. It was tricky to get this to work.",
    }),
    BlogStructure.video(ud_aerialHook, {
        caption:
            "The Claw Hook was also the first ability to showcase some of the things I would have done differently from the inspirations of this game. Attributes like 'how high up you are in the air' could alter how some abilities performed. Normally the hook only flies parallel to the ground but if you pair it with the double jump and give yourself more vertical height, the hook can be aimed freely along with buffing it's flight speed, range and damage in return for a relatively difficult to land hook.",
    }),
]);
