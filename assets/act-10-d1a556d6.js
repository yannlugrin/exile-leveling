const n=`#section Act 10
{waypoint|2_10_town} #Oriath Docks
➞ {enter|2_10_1} #The Cathedral Rooftop
Head {dir|0} ➞ {arena|Cathedral Apex}, kill {kill|Plaguewing}
➞ {enter|2_10_2} #The Ravaged Square
Place {portal|set} in the plaza
Head {dir|180} ➞ {enter|2_10_7} #The Control Blocks
{waypoint|2_10_town} #Oriath Docks
Hand in {quest|a10q1} #Safe Passage
Take {portal|use}
Head {dir|45} get {waypoint_get}
#ifdef LEAGUE_START
    ➞ {enter|2_10_9} #The Ossuary
    Get {crafting}
    Complete {trial}
#endif
{logout}
{waypoint|Labyrinth_Airlock}
{ascend|merciless}
Get {crafting|3_Labyrinth_boss_3}
{waypoint|2_10_7} #The Control Blocks
Find and kill {kill|Vilenta}
{logout}
Hand in {quest|a10q6} #Vilenta's Vengeance
{waypoint|2_10_2} #The Ravaged Square
Head {dir|135} ➞ {enter|2_10_3} #The Torched Courts
Loop around clockwise ➞ {enter|2_10_4} #The Desecrated Chambers
Head {dir|315} counter-clockwise spiral
Get {crafting}
➞ {arena|Sanctum of Innocence}, kill {kill|Avarius, Reassembled}, take {quest_text|The Staff of Purity}
{logout}
Talk to {generic|Bannon}
Hand in {quest|a10q2} #Death and Rebirth
{waypoint|2_10_2} #The Ravaged Square
Head {dir|45} talk to {generic|Innocence}
➞ {enter|2_10_5} #The Canals
➞ {enter|2_10_6} #The Feeding Trough
Get {crafting}
Talk to {generic|Sin}
➞ {arena|Altar of Hunger}, kill {kill|Kitava, the Insatiable}
Talk to {generic|Sin} ➞ {enter|2_10_town} #Oriath Docks
Talk to {generic|Lilly Roth}, Set Sail from Oriath
➞ {enter|2_11_endgame_town} #Karui Shores
Get {crafting}
Hand in {quest|a10q3} #An End to Hunger
`;export{n as default};
