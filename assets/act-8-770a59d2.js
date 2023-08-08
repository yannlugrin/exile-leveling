const e=`#section Act 8
➞ {enter|2_8_1} #The Sarn Ramparts
➞ {enter|2_8_town} #The Sarn Encampment
Head {dir|270} ➞ {enter|2_8_2_1} #The Toxic Conduits
➞ {enter|2_8_2_2} #Doedre's Cesspool
➞ {arena|The Cauldron}, kill {kill|Doedre the Vile}
➞ {arena|Sewer Outlet}
Get {crafting}
Head {dir|45} ➞ {enter|2_8_8} #The Quay
Follow {dir|270} wall, find and take {quest_text|Ankh of Eternity}
Head {dir|135} ➞ {arena|Resurrection Site}
Talk to {generic|Clarissa}, kill {kill|Tolman}
➞ {enter|2_8_9} #The Grain Gate
Follow the dead guards by entrances
Find and kill {kill|Gemling Legionnaires}
➞ {enter|2_8_10} #The Imperial Fields
Follow the road until {waypoint}
Head {dir|315} ➞ {enter|2_8_12_1} #The Solaris Temple Level 1
Get {waypoint_get}
➞ {enter|2_8_12_2} #The Solaris Temple Level 2
Find and kill {kill|Dawn, Harbinger of Solaris}, take {quest_text|Sun Orb}
Get {crafting}
{logout}
Hand in {quest|a8q1} #Essence of the Hag
Hand in {quest|a8q7} #The Gemling Legion
Hand in {quest|a8q6} #Love is Dead
{waypoint|2_8_12_1} #The Solaris Temple Level 1
➞ {enter|2_8_11} #The Solaris Concourse
Head {dir|225} ➞ {enter|2_8_13} #The Harbour Bridge
➞ {enter|2_8_6} #The Lunaris Concourse
Head {dir|315} get {waypoint_get}
➞ {enter|2_8_7_1_} #The Lunaris Temple Level 1
➞ {enter|2_8_7_2} #The Lunaris Temple Level 2
Find and kill {kill|Dusk, Harbinger of Lunaris}, take {quest_text|Moon Orb}
Get {crafting}
{logout}
{waypoint|2_8_6} #The Lunaris Concourse
Head {dir|135} ➞ {enter|2_8_13} #The Harbour Bridge
➞ {arena|The Sky Shrine}, activate {generic|Statue of the Sisters}
Kill {kill|Lunaris, Eternal Moon} & {kill|Solaris, Eternal Sun}
➞ {enter|2_9_1} #The Blood Aqueduct
Farm till lvl ~62
➞ {enter|2_9_town} #Highgate
{waypoint|2_8_6} #The Lunaris Concourse
Head {dir|180} ➞ {enter|2_8_5} #The Bath House
#ifdef LEAGUE_START
    Search {dir|270} side, complete {trial}
    Get {crafting}
#endif
Search {dir|270} side ➞ {enter|2_8_4} #The High Gardens
➞ {arena|The Pools of Terror}, kill {kill|Yugul, Reflection of Terror}
{portal|use}
Hand in {quest|a8q4} #Reflection of Terror
`;export{e as default};
