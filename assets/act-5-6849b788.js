const e=`#section Act 5
➞ {enter|1_5_1} #The Slave Pens
Find and kill {kill|Overseer Krow}
➞ {enter|1_5_town} #Overseer's Tower
Hand in {quest|a5q1b} #Return to Oriath
➞ {enter|1_5_2} #The Control Blocks
Find and take {quest_text|Miasmeter}
Find and kill {kill|Justicar Casticus}, take {quest_text|Eyes of Zeal}
➞ {enter|1_5_3} #Oriath Square
Head {dir|45} ➞ {enter|1_5_4} #The Templar Courts
Loop around clockwise ➞ {enter|1_5_5} #The Chamber of Innocence
Head {dir|315} counter-clockwise spiral
Get {crafting}
➞ {arena|Sanctum of Innocence}, kill {kill|High Templar Avarius}
{logout}
Hand in {quest|a5q2} #The Key to Freedom
Hand in {quest|a5q3} #In Service to Science
Hand in {quest|a5q4} #Death to Purity
{waypoint|1_5_5} #The Chamber of Innocence
➞ {enter|1_5_4b} #The Torched Courts
Loop around counter-clockwise ➞ {enter|1_5_3b} #The Ruined Square
Head {dir|315} get {waypoint_get}
➞ {enter|1_5_6} #The Ossuary
Find and take {quest_text|Sign of Purity}
Get {crafting}
{logout}
{waypoint|1_5_3b} #The Ruined Square
Head {dir|225} find the plaza
Head {dir|180} ➞ {enter|1_5_7} #The Reliquary
Find 3x{quest_text|Kitava's Torment}, search in the corners of the map
Get {crafting}
{logout}
Hand in {quest|a5q7} #Kitava's Torments
{waypoint|1_5_3b} #The Ruined Square
Head {dir|225} ➞ {enter|1_5_8} #The Cathedral Rooftop
➞ {arena|Cathedral Apex}, kill {kill|Kitava, the Insatiable}
Talk to {generic|Lilly Roth}, Sail to Wraeclast
`;export{e as default};
