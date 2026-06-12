import BlogStructure from "../BlogStructure";
import ud_thumbnail from "/uidesign/unscriptedduels/UnscriptedDuelsThumbnail.png";
import ud_handtohand from "/uidesign/unscriptedduels/Video_HandToHand.mp4";
import ud_reconcile from "/uidesign/unscriptedduels/UD_Reconciliation.mp4";
import ud_aerialHook from "/uidesign/unscriptedduels/Video_AerialHook.mp4";
import ud_goodhook from "/uidesign/unscriptedduels/Video_GoodHook.mp4";
import ud_image1 from "/uidesign/unscriptedduels/UD_Image1.png";
import ud_image2 from "/uidesign/unscriptedduels/UD_Image2.png";
import ud_video1 from "/uidesign/unscriptedduels/UD_Video1.mp4";

export const unscriptedDuelsBlog = new BlogStructure([
    BlogStructure.header("Inspiration"),
    "This game was primarily inspired by a game on Roblox called 'Duel Warriors'. The secondary inspirations were all the other slow paced, meticulous and strategic combat games that also existed on Roblox. I found this game to be particular fun, mainly because you could fight people with all sorts of doohickey, chaining stuns or controlling area, irritating and annoying both to them or to you when you inevitably encounter the same combo yourself. So with CodeMonkey's Multiplayer tutorial, I had a go at trying to make one myself. 'A simple version of this'.",
    BlogStructure.header("The Implementation"),
    BlogStructure.subheader("Problems"),
    "This is where things like cheating and 'what can I trust' started entering my workflow. It's a tale as old as time that a lock only keeps and honest man out. So to try to keep things simple I followed some standard rules:\n\n- Treat the client as untrustworthy\n- The server is the only source of truth\n- Understand that the client and server may or will never be 1:1, just try to get close to it without ruining the experience and fairness.\n\nOf course this is easier said than done and with only very little experience with networking under my belt, I attempted this behemoth of a topic.",
    BlogStructure.video(ud_reconcile, {
        caption: "Connected to Asia servers from my trip in Europe",
    }),
    "The red box is the client position they broadcasted to the server that cannot be trusted and the green box is the server position that can be trusted. The wire sphere around the boxes is the `margin of error` that scales with the ping of the client. The little white spheres are positions recording in space. \n\nTo a certain degree, it worked alright. A feeble yet modest attempt at a rather difficult topic altogether. Of course towards the later part of the video, you can clearly see some rubber banding as the reconciliation and the current position kind of fight over where the player should be. Not to mention, I implemented the margin of error but forgot to also apply that leniency for dealing damage. At 0:43 of the video, you can clearly see me smacking my opponent on the client side but because the server side position (you can see the green box to the right) is offset, to the server it appears that I'm not actually smacking my opponent.",
    BlogStructure.video(ud_handtohand, {
        caption:
            "A short clip of me and my dad playtesting the netcode of the game. Needless to say, it was a hot mess. Functional, but at most time unbearable.",
    }),
    "There were a lot of little things that kept on tripping me during this project. A lot of 'oh if I do this then I can't do this' or 'now because I don't have ownership, I have to route it this way' and it really got way bigger than me. There were times I had no clue why something was not working and eventually burnt out from the project and dropped it altogether. I could really have started out on probably a smaller scale project but I got further than I expected to be with this one. Still bummed out that it didn't become a project I could show on ItchIO.",
    BlogStructure.header("Reflections"),
    BlogStructure.quote(
        "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
    ),
    "All is not lost though. I'd say that I improved my rigging and animation skills with this stepped frame animations and over extending of limbs to exaggerate the flow. My VFX skills got a tiny upgrade from creating the shockwaves too. On top of that, my love for simple stylized UI started to blossom again with the good old 'scattered paper' thingamajig design. Some kind souls over at the Unity Discord came to also like what they saw.",
    BlogStructure.image(ud_image1),
    BlogStructure.image(ud_image2),
    "Although I was feeling down for a while, not being able to realize a decent gameplay that I can publish on ItchIO, I learned what it takes to get to this point. It's for sure no easy task to make a game, let alone a multiplayer game itself but I am definitely going to revisit making a multiplayer game again in the future. I have always loved the social aspect of video games. I grew up on Roblox. Shooting, building, surviving with or against other players online has always been a joy and one day I will make/be part of a team that makes a good multiplayer game that players can enjoy with their friends.",
    BlogStructure.subheader("More Footage"),
    BlogStructure.video(ud_goodhook, {
        caption:
            "The Claw Hook was the most difficult ability to program solely because of ownership and position manipulation. The opponent didn't move so the server still thinks that they are still at that position. It was tricky to get this to work.",
    }),
    BlogStructure.video(ud_aerialHook, {
        caption:
            "The Claw Hook was also the first ability to showcase some of the things I would have done differently from the inspirations of this game. Attributes like 'how high up you are in the air' could alter how some abilities performed. Normally the hook only flies parallel to the ground but if you pair it with the double jump and give yourself more vertical height, the hook can be aimed freely along with buffing it's flight speed, range and damage in return for a relatively difficult to land hook.",
    }),
    BlogStructure.video(ud_video1, {
        caption:
            "Inspired by Marvel Rivals, I made a little menu for swapping abilities. This too took a while to do because I had issues with syncing the right data across clients on who has what ability equipped.",
    }),
]);
