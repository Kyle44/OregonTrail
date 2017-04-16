// Author: David Leiberg
// Temporary file containing info on landmarks from trail;
//  includes supply prices (where available), "talk to
//  people" scripts, and distances to landmarks that follow.

{

    name : "Independence" ;

    prices : {
        ox : 20 ;
        clothing : 10 ;
        ammo : 2 ;
        wheel : 10 ;
        axle : 10 ;
        tongue : 10 ;
        food : 0.20 ;
    } ;

    people : [
        {
            intro : "A trader named Jim tells you:" ;
            script: "Better take extra sets of clothing. Trade 'em to Indians for fresh vegetables, fish, or meat. It's well worth hiring an Indian guide at river crossings. Expect to pay them! They're sharp traders, not easily cheated." ;
        } ,

        {
            intro : "A traveler, Miles Hendricks, tells you:" ;
            script : "Did you read the Missouri Republican today? --Says some folk start for Oregon without carrying spare parts, not even an extra wagon axle. Must think they grow on trees! Hope they're luck enough to find an abandoned wagon." ;
        } ,

        {
            intro : "A town resident tells you:" ;
            script : "Some folks seem to think that two oxen are enough to get them to Oregon! Two oxen can barely move a fully loaded wagon, and if one of them gets sick or dies, you won't be going anywhere. I wouldn't go overland with less than six." ;
        }
    ] ;

    nextLandmarks : ["the Kansas River crossing"] ;
    distances : [102] ;
}

{

    name : "the Kansas River crossing" ;

    prices : null ;

    people : [
        {
            intro : "Aunt Rebecca Sims tells you:" ;
            script: "With the crowds of people waiting to get on the ferry, we could be stranded here for days! Hope there's enough graze for all those animals -- not many people carry feed! I'd rather wait, though, than cross in a rickety wagon boat!" ;
        }
        ,
        {
            intro : "A stranger tells you:" ;
            script : "Can't afford to take a ferry. We're making our wagon into a boat. We'll turn it over, caulk the bottom and sides with pitch, and use it to float our goods across. Have to swim the animals. Hope it doesn't rain -- the river's high enough!" ;
        }
        ,
        {
            intro : "A ferry operator tells you:" ;
            script : "Don't try to ford any river deeper than the wagon bed -- about two and a half feet. You'll swamp your wagon and lose your supplies. You can caulk the wagon bed and float it -- or be smart and hire me to take your wagon on my ferry!" ;
        }
    ] ;

    nextLandmarks : ["the Big Blue River crossing"] ;
    distances : [82] ;
}

{

    name : "the Big Blue River crossing" ;

    prices : null ;

   people : [
       {
           intro : "A party leader heading east tells you:" ;
           script: "We've had enough! Pesky flies all day and mosquitoes all night! It's either baking sun or oceans of mud -- and sometimes both. Worry over Indians attacking -- haven't seen any yet, but still a worry." ;
       }
       ,
       {
           intro : "A lady, Marnie Stewart, tells you:" ;
           script : "This prarie is might pretty with all the wild flowers and tall grasses. But there's too much of it! I miss not having a town nearby. I wonder how many days until I see a town -- a town with real shops, a church, people ..." ;
       }
       ,
       {
           intro : "Big Louie, a trail driver, tells you:" ;
           script : "Be careful you don't push those animals too hard! Kepp 'em moving but set them a fair pace. Can't keep driving 'em so fast or you'll end up with lame-footed animals. A lame ox is about as good to you as a dead one!" ;
       }
   ] ;


   nextLandmarks : ["Fort Kearney"] ;
   distances : [118] ;
}

{

   name : "Fort Kearney" ;

   prices : {
       ox : 25 ;
       clothing : 12.50 ;
       ammo : 2.50 ;
       wheel : 12.50 ;
       axle : 12.50 ;
       tongue : 12.50 ;
       food : 0.25 ;
   } ;

   people : [
       {
           intro : "A fort soldier tells you:" ;
           script: "The trails from the jumping off places -- Independence, St. Joseph, Council Bluffs -- come together at Fort Kearney. This new fort was built by the U.S. Army to protect those bound for California and Oregon." ;
       }
       ,
       {
           intro : "Big Louie tells you:" ;
           script : "The Platte River valley forms a natural roadway from Fort Kearney to Fort Laramie. Travelers bound for California, Utah, and Oregon all take this road. Could be the easiest stretch of the whole trip. Should see antelope and plenty of buffalo." ;
       }
       ,
       {
           intro : "A Fort Kearney scout tells you:" ;
           script : "The game is still plentiful along here, but gettin' harder to find. With so many overlanders, I don't expect it to last more'n a few years. Folks shoot the game for sport, take a small piece, and let the rest rot in the sun." ;
       }
   ] ;

    nextLandmarks : ["Chimney Rock"] ;
    distances : [250] ;
}

{

   name : "Chimney Rock" ;

   prices : null ;

   people : [
       {
           intro : "Aunt Rebecca Sims tells you:" ;
           script: "I hear terrible stores about wagon parties running out of food before Oregon -- the whole party starving to death. We must check our supplies often; we might not get there as soon as we think. Always plan for the worst, I say." ;
       }
       ,
       {
           intro : "Celinda Hines tells you:" ;
           script : "Chimney Rock by moonlight is awfully sublime. Many Indians came to our wagon with fish to exchange for clothing. We bought a number. They understand 'swap' and 'no swap.' Seem most anxious to get shirts and socks." ;
       }
       ,
       {
           intro : "Alonzo Delano tells you:" ;
           script : "About noon yesterday we came in sight of Chimney Rock looming up in the distance like the lofty tower of some town. We did not tire gazing on it. It was about 20 miles from us, and stayed in sight 'til we reached it today." ;
       }
   ] ;

    nextLandmarks : ["Fort Laramie"] ;
    distances : [86] ;
}

{

   name : "Fort Laramie" ;

   prices : {
       ox : 30 ;
       clothing : 15 ;
       ammo : 3 ;
       wheel : 15 ;
       axle : 15 ;
       tongue : 15 ;
       food : 0.30 ;
   } ;

   people : [
       {
           intro : "A Sioux brave tells you:" ;
           script: "The Pawnee are the mortal enemies of the Sioux. I would not hesitate to kill any Pawnee I met. But I have never killed a white man. All I ask from the white man is to leave me alone, and to leave my buffalo alone." ;
       }
       ,
       {
           intro : "A woman traveler tells you:" ;
           script : "Be warned, stranger. Don't dig a water hole! Drink only river water. Salty as the Platte River is -- it's better than the cholera. We buried my husband last week. Could use some help with this harness, if you can spare the time." ;
       }
       ,
       {
           intro : "A mountain man tells you:" ;
           script : "These greenhorns heading across the Rockies know nothing about surviving in the mountains. It gets awful cold up there, even in the summer. Many a traveler crossing the mountains too late in the year has gotten snowbound and died!" ;
       }
   ] ;

    nextLandmarks : ["Independence Rock"] ;
    distances : [190] ;
}

{

   name : "Independence Rock" ;

   prices : null ;

   people : [
       {
           intro : "Aunt Rebecca Sims tells you:" ;
           script: "No butter or cheese or fresh fruit since Fort Laramie! Bless me, but I'd rather have my larder full of food back East than have our names carved on that rock! Well, tis a sight more cheery than all the graves we passed." ;
       }
       ,
       {
           intro : "Big Louie tells you:" ;
           script : "Goodbye Platte River! Goodbye sand hills and white buffalo skulls! Now we climb the Sweetwater valley to cross the Continental Divide at South Pass. Once across the Rockies, we'll make a steep descent into the Green River valley." ;
       }
       ,
       {
           intro : "A young boy tells you:" ;
           script : "I carved my name way up the side of Independence Rock, near the top. There are hundreds of names up there! The oldest ones were carved by mountain men and fur trappers -- famous names like Fremont, Bonneville, and DeSmet!" ;
       }
   ] ;

    nextLandmarks : ["South Pass"] ;
    distances : [102] ;
}

{

   name : "South Pass" ;

   prices : null ;

   people : [
       {
           intro : "A Mormon traveler tells you:" ;
           script: "My family and I travel with 40 other families t the valley of the Great Salt Lake to seek religious freedom. Back east, Mormons are persecuted. In Utah, we'll join together to build a new community, changing desert into farm land." ;
       }
       ,
       {
           intro : "An Arapaho Indian tells you:" ;
           script : "When the white man first crossed our lands their wagons were few. Now they crowd the trail in great numbers. The land is overgrazed with their many animals. Do any white men still live in the East? My people talk of moving." ;
       }
       ,
       {
           intro : "A young girl tells you:" ;
           script : "My father is very sick and we are resting here until he gets better. We have been pushing too hard and our health has suffered. When my father is able to travel again, we will go at a slower pace." ;
       }
   ] ;

    nextLandmarks : ["Green River crossing", "Fort Bridger"] ;
    distances : [57, 125] ;
}

/**** Template  *****
{

   name : "" ;

   prices : {
       ox :  ;
       clothing :  ;
       ammo :  ;
       wheel :  ;
       axle :  ;
       tongue :  ;
       food :  ;
   } ;

   people : [
       {
           intro : "" ;
           script: "" ;
       }
       ,
       {
           intro : "" ;
           script : "" ;
       }
       ,
       {
           intro : "" ;
           script : "" ;
       }
   ] ;

    nextLandmarks : [] ;
    distances : [] ;
}
*/
