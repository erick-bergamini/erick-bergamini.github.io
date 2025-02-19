/*
 * Copyright (c) 2024 Vladimir Skrypnikov (Pheonix KageDesu)
 * <http://kdworkshop.net/>
 *

 * License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial

 */

/*:
 * @plugindesc (v.1.0)[BASIC] Minimap
 * @author Pheonix KageDesu
 * @target MZ MV
 * @url https://kdworkshop.net/plugins/simple-minimap
 *
 * @help
 * ---------------------------------------------------------------------------
 * Minimap image is created automatically, but only on RPG Maker MZ 
 *
 * = How setup image as minimap:
 *      Add <minimapImage:NAME> in Map Note section,
            where NAME image name in img/pSimpleMinimap folder
 *
 * = How configurate event icon:
 *      Add next COMMENTS on event page (all comments are optional)
 *  
 *  iconOnMinimap:X
        where X image name from img/pSimpleMinimap or icon index
 *  scaleOnMinimap:X
        where X scale from 0.1 to 1.0
 *  priorityOnMinimap:X
        where X any number from 0 to 1000 (the higher the value, the higher
                the icon of others)
 *  distanceOnMinimap:X
        where X - distance from the player at which the icon
                will be visible (0 - always visible)
 *  showOnMinimapEdge - show icon on minimap edge (default)
 *  hideOnMinimapEdge - hide icon on minimap edge
 *
 *  EXAMPLE:
        iconOnMinimap:myIcon
        scaleOnMinimap:0.5
        priorityOnMinimap:10
        distanceOnMinimap:10
        showOnMinimapEdge
 *
 * = How configurate character icon:
 *      Same as event icon, but you need write commands to Actor's Note section
 *      Commands should be enclosed in <>
 *      All commands is optional
 *  
 * EXAMPLE:
        <iconOnMinimap:harold>
        <scaleOnMinimap:0.8>
        <priorityOnMinimap:100>
 *
 *
 * = How configurate Minimap for certain Map:
 *      Add next commands to Map Note section
 *      (all commands are optional)
 *
 *  <minimapOff> - disable minimap on this Map
 *  <minimapImage:NAME> - external minimap image from img/pSimpleMinimap folder
 *  <imageScale:X> - minimap source image scale (more value, more memory you
            need to store image)
 *  <minimapScale:X> - minimap content scale (minmap image (and icons)
        scale inside minimap)
 *
 * = Script calls
 *
 * PMM.AddMinimap(); - add minimap to scene
 * PMM.ReloadMinimapImage(); - reload (create again) minimap image
 * PMM.RefreshMinimapItems(); - create again all icons on minimap
 * PMM.HideMinimap();
 * PMM.ShowMinimap();
 * PMM.MoveMinimap(X,Y);
 * PMM.ScaleMinimapContent(X); - scale content inside minimap, from 0.1 to 1.0
 * PMM.ScaleMinimapImage(X); - scale minimap itself, from 0.1 to 1.0
 * PMM.ChangeMinimapOpacity(X); - from 0 (not visible) to 255 (visible)
 * PMM.SetPlayerMinimapIcon(NAME); - image name (in quotes) or icon index
 * PMM.SaveMinimapToFile(X); - X optional, scale from 0.1 to 1.0
 *
 * EXAMPLES:
 *      PMM.SaveMinimapToFile(); save image with default scale
 *      PMM.ScaleMinimapContent(0.5);
 *      PMM.SetPlayerMinimapIcon("player"); "player" filename
            from img/pSimpleMinimap
 *      PMM.SetPlayerMinimapIcon(43); 43 icon index from IconSet
 *
 *
 * = How keep Event graphics on minimap image
 * 
 *   Add comment KEEP_ON_MINIMAP to Event page
 *
 *
 * = How change minimap image (shape, size)
 *
 * Change image: img/pSimpleMinimap/minimap.png
 * Don't forget change size (shape) of images as well:
 *        minimapBack.png
 *         minimapForeground.png
 *
 * ===========================================================================
 
 * This is BASIC plugin version and have some restrictions:
 *    - No animated minimap icons (only static)
 *    - Max of 16 icons on the minimap at the same time
 *    - Obfuscated code
 *    - Plugin usage allowed only in Non-Commercial project
 * 
 *  PRO version of plugin don't have this restrictions!
 
 * ---------------------------------------------------------------------------
 * If you like my Plugins, want more and offten updates,
 * please support me on Boosty or Patreon!
 * 
 * Boosty Page:
 *      https://boosty.to/kagedesu
 * Patreon Page:
 *      https://www.patreon.com/KageDesu
 * YouTube Channel:
 *      https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 *
 * You can use this plugin in your game thanks to all who supports me!
 * 

 * License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial

 *
 *
 * @requiredAssets img/pSimpleMinimap/minimapBack
* @requiredAssets img/pSimpleMinimap/minimap
* @requiredAssets img/pSimpleMinimap/minimapForeground
* @requiredAssets img/pSimpleMinimap/minimapIcon_reid
* @requiredAssets img/pSimpleMinimap/minimapIcon_door
* @requiredAssets img/pSimpleMinimap/minimapIcon_gate
* @requiredAssets img/pSimpleMinimap/minimapIcon_chest
* @requiredAssets img/pSimpleMinimap/minimapIcon_priscilla
* @requiredAssets img/pSimpleMinimap/minimapIcon_kasey
* @requiredAssets img/pSimpleMinimap/minimapIcon_gale
* @requiredAssets img/pSimpleMinimap/minimapIcon_michelle
* @requiredAssets img/pSimpleMinimap/minimapIcon_albert
* @requiredAssets img/pSimpleMinimap/minimapIcon_switch
* @requiredAssets img/pSimpleMinimap/minimapIcon_switch2
* @requiredAssets img/pSimpleMinimap/minimapIcon_teleport
* @requiredAssets img/pSimpleMinimap/minimapIcon_crystal
* @requiredAssets img/pSimpleMinimap/minimapIcon_boat
* @requiredAssets img/pSimpleMinimap/minimapIcon_ship
* @requiredAssets img/pSimpleMinimap/minimapIcon_airship
* @requiredAssets img/pSimpleMinimap/minimapIcon_dog
* @requiredAssets img/pSimpleMinimap/minimapIcon_cat
* @requiredAssets img/pSimpleMinimap/minimapIcon_pig
* @requiredAssets img/pSimpleMinimap/minimapIcon_fox
* @requiredAssets img/pSimpleMinimap/minimapIcon_natureA
* @requiredAssets img/pSimpleMinimap/minimapIcon_natureB
* @requiredAssets img/pSimpleMinimap/minimapIcon_natureC
* @requiredAssets img/pSimpleMinimap/minimapIcon_natureD
* @requiredAssets img/pSimpleMinimap/minimapIcon_battle
* @requiredAssets img/pSimpleMinimap/minimapIcon_event
* @requiredAssets img/pSimpleMinimap/minimapIcon_abs
* @requiredAssets img/pSimpleMinimap/minimapForeground2
* @requiredAssets img/pSimpleMinimap/minimapForeground3
* @requiredAssets img/pSimpleMinimap/minimapIcon_event2
* @requiredAssets img/pSimpleMinimap/minimapIcon_star
* @requiredAssets img/pSimpleMinimap/minimapIcon_question
* @requiredAssets img/pSimpleMinimap/minimapIcon_!
* @requiredAssets img/pSimpleMinimap/minimapIcon_square
* @requiredAssets img/pSimpleMinimap/minimapIcon_x
* @requiredAssets img/pSimpleMinimap/minimapIcon_shield
* @requiredAssets img/pSimpleMinimap/minimapIcon_!2
* @requiredAssets img/pSimpleMinimap/minimapIcon_shop
* @requiredAssets img/pSimpleMinimap/minimapIcon_battle2
* @requiredAssets img/pSimpleMinimap/minimapIcon_player
* @requiredAssets img/pSimpleMinimap/animatedIconExample(9,5)
* @requiredAssets img/pSimpleMinimap/minimapIcon_harold
* @requiredAssets img/pSimpleMinimap/minimapIcon_Evil2
* @requiredAssets img/pSimpleMinimap/minimapIcon_Evil3
* @requiredAssets img/pSimpleMinimap/minimapIcon_Evil4
* @requiredAssets img/pSimpleMinimap/minimapIcon_Evil5
* @requiredAssets img/pSimpleMinimap/minimapIcon_Evil6
* @requiredAssets img/pSimpleMinimap/minimapIcon_Evil7
* @requiredAssets img/pSimpleMinimap/minimapIcon_Monster0
* @requiredAssets img/pSimpleMinimap/minimapIcon_Monster1
* @requiredAssets img/pSimpleMinimap/minimapIcon_Monster2
* @requiredAssets img/pSimpleMinimap/minimapIcon_Monster3
* @requiredAssets img/pSimpleMinimap/minimapIcon_Monster4
* @requiredAssets img/pSimpleMinimap/minimapIcon_Monster5
* @requiredAssets img/pSimpleMinimap/minimapIcon_Monster6
* @requiredAssets img/pSimpleMinimap/minimapIcon_Monster7
* @requiredAssets img/pSimpleMinimap/minimapIcon_People4_0
* @requiredAssets img/pSimpleMinimap/minimapIcon_People4_1
* @requiredAssets img/pSimpleMinimap/minimapIcon_People4_2
* @requiredAssets img/pSimpleMinimap/minimapIcon_People4_3
* @requiredAssets img/pSimpleMinimap/minimapIcon_People4_4
* @requiredAssets img/pSimpleMinimap/minimapIcon_People4_5
* @requiredAssets img/pSimpleMinimap/minimapIcon_People4_6
* @requiredAssets img/pSimpleMinimap/minimapIcon_People4_7
* @requiredAssets img/pSimpleMinimap/minimapIcon_People3_0
* @requiredAssets img/pSimpleMinimap/minimapIcon_People3_1
* @requiredAssets img/pSimpleMinimap/minimapIcon_People3_2
* @requiredAssets img/pSimpleMinimap/minimapIcon_People3_3
* @requiredAssets img/pSimpleMinimap/minimapIcon_People3_4
* @requiredAssets img/pSimpleMinimap/minimapIcon_People3_5
* @requiredAssets img/pSimpleMinimap/minimapIcon_People3_6
* @requiredAssets img/pSimpleMinimap/minimapIcon_People3_7
* @requiredAssets img/pSimpleMinimap/minimapIcon_People2_0
* @requiredAssets img/pSimpleMinimap/minimapIcon_People2_1
* @requiredAssets img/pSimpleMinimap/minimapIcon_People2_2
* @requiredAssets img/pSimpleMinimap/minimapIcon_People2_3
* @requiredAssets img/pSimpleMinimap/minimapIcon_People2_4
* @requiredAssets img/pSimpleMinimap/minimapIcon_People2_5
* @requiredAssets img/pSimpleMinimap/minimapIcon_People2_6
* @requiredAssets img/pSimpleMinimap/minimapIcon_People2_7
* @requiredAssets img/pSimpleMinimap/minimapIcon_People1_0
* @requiredAssets img/pSimpleMinimap/minimapIcon_People1_1
* @requiredAssets img/pSimpleMinimap/minimapIcon_People1_2
* @requiredAssets img/pSimpleMinimap/minimapIcon_People1_3
* @requiredAssets img/pSimpleMinimap/minimapIcon_People1_4
* @requiredAssets img/pSimpleMinimap/minimapIcon_People1_5
* @requiredAssets img/pSimpleMinimap/minimapIcon_People1_6
* @requiredAssets img/pSimpleMinimap/minimapIcon_People1_9
* @requiredAssets img/pSimpleMinimap/minimapIcon_Evil0
* @requiredAssets img/pSimpleMinimap/minimapIcon_Evil1
 * 
 * @param PKD_SimpleMiniMap
 * @text ‏‏‎ ‎
 * 
 * @param minimapSettingsGroup
 * @text Minimap Settings
 * 
 * @param minimapConfig:struct
 * @parent minimapSettingsGroup
 * @text Configuration
 * @type struct<MinimapConfig>
 * @default {"isActive:bool":"true","srcImageScale:int":"0.5","minimapScale:int":"0.4","scaleItemsWithMinimap:bool":"false","itemsScaleWithFactor:int":"1.5","limitMinimap:bool":"true","limitMargin:int":"0","edgeIconShowMargin:int":"0.5","opacity:int":"255","position:struct":"{\"x:e\":\"Graphics.width - 150\",\"y:e\":\"110\"}"}
 * 
 * @param minimapCreateProcessDelay:int
 * @parent minimapSettingsGroup
 * @text Auto Create Delay
 * @type number
 * @default 300
 * @desc Delay before game will try create minimap image, in milliseconds
 * 
 *  @param minimapRefreshDealy:int
 *  @parent minimapSettingsGroup
 *  @text Refresh Delay
 *  @type number
 *  @default 10
 *  @desc Delay before minimap refresh all icons, in FRAMES (each X frames)
 * 
 *  @param transparencyWhenMsg:int
 *  @parent minimapSettingsGroup
 *  @text Opacity when messages
 *  @type number
 *  @default 0
 *  @desc Minimap opacity (from 0 to 255) when message appears
 * 
 *  @param transparencyWhenAbovePlayer:int
 *  @parent minimapSettingsGroup
 *  @text Opacity above player
 *  @type number
 *  @default 120
 *  @desc Minimap opacity (from 0 to 255) when player below minimap
 * 
 *  @param recreateMinimapPerScene:bool
 *  @parent minimapSettingsGroup
 *  @text Recreate per Scene?
 *  @type boolean
 *  @default false
 *  @desc Recreate the minimap image every time the scene changes
 * 
 *  @param recreateMinimapPerMap:bool
 *  @parent minimapSettingsGroup
 *  @text Recreate per Map?
 *  @type boolean
 *  @default true
 *  @desc Recreate the minimap image every time the map changes
 * 
 *  @param isShowObjectsOnMinimap:bool
 *  @parent minimapSettingsGroup
 *  @text Is draw objects?
 *  @type boolean
 *  @default false
 *  @desc Draw events with object graphics on minimap
 * 
 *  @param isShowTileEventsOnMinimap:bool
 *  @parent minimapSettingsGroup
 *  @text Is draw tiles?
 *  @type boolean
 *  @default true
 *  @desc Draw events with tileset tile graphics on minimap
 * 
 *  
 * 
 * 
 * @param spacer|DisplayRules @text‏‏‎ ‎@desc ===============================================
 * 
 * 
 *  @param displayRulesForIconsGroup
 *  @text Display rules for Icons
 * 
 *  @param minimapIconConfig:struct
 *  @parent displayRulesForIconsGroup
 *  @text Minimap Icon Config
 *  @type struct<MinimapItemConfig>
 *  @default {"scale:int":"0.8","minDist:int":"0","isShowOnEdge:bool":"true","priority:int":"0"}
 *  @desc Default settings for icons for all events
 * 
 *  @param minimapIconForActorConfig:struct
 *  @parent displayRulesForIconsGroup
 *  @text Icon for Actors Config
 *  @type struct<MinimapItemConfig>
 *  @default {"scale:int":"0.8","minDist:int":"0","isShowOnEdge:bool":"true","priority:int":"10"}
 *  @desc Default settings for icons for all characters (Actors)
 * 
 *  @param playerIconConfig:struct
 *  @parent displayRulesForIconsGroup
 *  @text Player Icon
 *  @type struct<MinimapRule>
 *  @default {"minimapIcon:str":"minimapIcon_player","config:struct":"{\"scale:int\":\"0.9\",\"minDist:int\":\"0\",\"isShowOnEdge:bool\":\"false\",\"priority:int\":\"100\"}"}
 *  @desc Default settings for player minimap icon
 *  
 *  @param isShowFollowersIconsOnMinmap:bool
 *  @parent displayRulesForIconsGroup
 *  @text Is show party members?
 *  @type boolean
 *  @default true
 *  @desc Show party members icons on minimap?
 * 
 *  @param isShowNetCharsIconsOnMinmap:bool
 *  @parent displayRulesForIconsGroup
 *  @text Is show network members?
 *  @type boolean
 *  @default true
 *  @desc Show network players icons on minimap? Require Alpha NET Z plugin.
 * 
 *  @param isShowIconsForEvents:bool
 *  @parent displayRulesForIconsGroup
 *  @text Icons for Events?
 *  @type boolean
 *  @default true
 *  @desc Show default icons for all events
 * 
 *  @param anyEventsIconRule:struct
 *  @parent isShowIconsForEvents:bool
 *  @text Icon settings
 *  @type struct<MinimapRule>
 *  @default {"minimapIcon:str":"minimapIcon_event2","config:struct":""}
 * 
 *  @param isShowIconsForBattle:bool
 *  @parent displayRulesForIconsGroup
 *  @text Icons for Battles?
 *  @type boolean
 *  @default true
 *  @desc Show default icons for all events with first Battle Processing command
 * 
 *  @param battleEventsIconRule:struct
 *  @parent isShowIconsForBattle:bool
 *  @text Icon settings
 *  @type struct<MinimapRule>
 *  @default {"minimapIcon:str":"minimapIcon_battle2","config:struct":""}
 * 
 *  @param isShowIconsForShop:bool
 *  @parent displayRulesForIconsGroup
 *  @text Icons for Shops?
 *  @type boolean
 *  @default true
 *  @desc Show default icons for all events with first Shop Processing command
 * 
 *  @param shopEventsIconRule:struct
 *  @parent isShowIconsForShop:bool
 *  @text Icon settings
 *  @type struct<MinimapRule>
 *  @default {"minimapIcon:str":"minimapIcon_shop","config:struct":""}
 * 
 *  @param isShowIconsForABS:bool
 *  @parent displayRulesForIconsGroup
 *  @text Icons for ABS enemies?
 *  @type boolean
 *  @default true
 *  @desc Show default icons for all ABS enemies (required AABS (or AABSZ))
 * 
 *  @param absEventsIconRule:struct
 *  @parent isShowIconsForABS:bool
 *  @text Icon settings
 *  @type struct<MinimapRule>
 *  @default {"minimapIcon:str":"minimapIcon_abs","config:struct":""}
 * 
 *  @param vehicleGroup
 *  @parent displayRulesForIconsGroup
 *  @text Vehicles
 * 
 *  @param vehRuleBoat:struct
 *  @parent vehicleGroup
 *  @text Boat
 *  @type struct<MinimapRule>
 *  @default {"minimapIcon:str":"minimapIcon_boat","config:struct":""}
 * 
 *  @param vehRuleShip:struct
 *  @parent vehicleGroup
 *  @text Ship
 *  @type struct<MinimapRule>
 *  @default {"minimapIcon:str":"minimapIcon_ship","config:struct":""}
 * 
 *  @param vehRuleAirship:struct
 *  @parent vehicleGroup
 *  @text Airship
 *  @type struct<MinimapRule>
 *  @default {"minimapIcon:str":"minimapIcon_airship","config:struct":""}
 * 
 * @param spacer|CustomAutoRules @text‏‏‎ ‎@desc ===============================================
 * 
 * 
 * 
 *  @param customIconsAutoRules
 *  @text Custom Icons Auto Rules
 * 
 *  @param customAutoIconsEventRules:structA
 *  @parent customIconsAutoRules
 *  @text Custom Rules
 *  @type struct<MinimapEventCustomAutoRule>[]
 *  @default ["{\"contentString:str\":\"Nature\",\"characterIndex:int\":\"0\",\"minimapIcon:str\":\"minimapIcon_dog\",\"config:struct\":\"\"}","{\"contentString:str\":\"Nature\",\"characterIndex:int\":\"1\",\"minimapIcon:str\":\"minimapIcon_cat\",\"config:struct\":\"\"}","{\"contentString:str\":\"Nature\",\"characterIndex:int\":\"2\",\"minimapIcon:str\":\"minimapIcon_pig\",\"config:struct\":\"\"}","{\"contentString:str\":\"Nature\",\"characterIndex:int\":\"3\",\"minimapIcon:str\":\"minimapIcon_fox\",\"config:struct\":\"\"}","{\"contentString:str\":\"Nature\",\"characterIndex:int\":\"4\",\"minimapIcon:str\":\"minimapIcon_natureA\",\"config:struct\":\"\"}","{\"contentString:str\":\"Nature\",\"characterIndex:int\":\"5\",\"minimapIcon:str\":\"minimapIcon_natureB\",\"config:struct\":\"\"}","{\"contentString:str\":\"Nature\",\"characterIndex:int\":\"6\",\"minimapIcon:str\":\"minimapIcon_natureC\",\"config:struct\":\"\"}","{\"contentString:str\":\"Nature\",\"characterIndex:int\":\"7\",\"minimapIcon:str\":\"minimapIcon_natureD\",\"config:struct\":\"\"}","{\"contentString:str\":\"Door1\",\"characterIndex:int\":\"-1\",\"minimapIcon:str\":\"minimapIcon_door\",\"config:struct\":\"\"}","{\"contentString:str\":\"Door2\",\"characterIndex:int\":\"-1\",\"minimapIcon:str\":\"minimapIcon_teleport\",\"config:struct\":\"\"}","{\"contentString:str\":\"Chest\",\"characterIndex:int\":\"-1\",\"minimapIcon:str\":\"minimapIcon_chest\",\"config:struct\":\"\"}","{\"contentString:str\":\"Crystal\",\"characterIndex:int\":\"-1\",\"minimapIcon:str\":\"minimapIcon_crystal\",\"config:struct\":\"\"}","{\"contentString:str\":\"Switch1\",\"characterIndex:int\":\"-1\",\"minimapIcon:str\":\"minimapIcon_switch\",\"config:struct\":\"\"}","{\"contentString:str\":\"Switch2\",\"characterIndex:int\":\"-1\",\"minimapIcon:str\":\"minimapIcon_switch2\",\"config:struct\":\"\"}","{\"contentString:str\":\"Evil\",\"characterIndex:int\":\"0\",\"minimapIcon:str\":\"minimapIcon_Evil0\",\"config:struct\":\"\"}","{\"contentString:str\":\"Evil\",\"characterIndex:int\":\"1\",\"minimapIcon:str\":\"minimapIcon_Evil1\",\"config:struct\":\"\"}","{\"contentString:str\":\"Evil\",\"characterIndex:int\":\"2\",\"minimapIcon:str\":\"minimapIcon_Evil2\",\"config:struct\":\"\"}","{\"contentString:str\":\"Evil\",\"characterIndex:int\":\"3\",\"minimapIcon:str\":\"minimapIcon_Evil3\",\"config:struct\":\"\"}","{\"contentString:str\":\"Evil\",\"characterIndex:int\":\"4\",\"minimapIcon:str\":\"minimapIcon_Evil4\",\"config:struct\":\"\"}","{\"contentString:str\":\"Evil\",\"characterIndex:int\":\"5\",\"minimapIcon:str\":\"minimapIcon_Evil5\",\"config:struct\":\"\"}","{\"contentString:str\":\"Evil\",\"characterIndex:int\":\"6\",\"minimapIcon:str\":\"minimapIcon_Evil6\",\"config:struct\":\"\"}","{\"contentString:str\":\"Evil\",\"characterIndex:int\":\"7\",\"minimapIcon:str\":\"minimapIcon_Evil7\",\"config:struct\":\"\"}","{\"contentString:str\":\"Monster\",\"characterIndex:int\":\"0\",\"minimapIcon:str\":\"minimapIcon_Monster0\",\"config:struct\":\"\"}","{\"contentString:str\":\"Monster\",\"characterIndex:int\":\"1\",\"minimapIcon:str\":\"minimapIcon_Monster1\",\"config:struct\":\"\"}","{\"contentString:str\":\"Monster\",\"characterIndex:int\":\"2\",\"minimapIcon:str\":\"minimapIcon_Monster2\",\"config:struct\":\"\"}","{\"contentString:str\":\"Monster\",\"characterIndex:int\":\"3\",\"minimapIcon:str\":\"minimapIcon_Monster3\",\"config:struct\":\"\"}","{\"contentString:str\":\"Monster\",\"characterIndex:int\":\"4\",\"minimapIcon:str\":\"minimapIcon_Monster4\",\"config:struct\":\"\"}","{\"contentString:str\":\"Monster\",\"characterIndex:int\":\"5\",\"minimapIcon:str\":\"minimapIcon_Monster5\",\"config:struct\":\"\"}","{\"contentString:str\":\"Monster\",\"characterIndex:int\":\"6\",\"minimapIcon:str\":\"minimapIcon_Monster6\",\"config:struct\":\"\"}","{\"contentString:str\":\"Monster\",\"characterIndex:int\":\"7\",\"minimapIcon:str\":\"minimapIcon_Monster7\",\"config:struct\":\"\"}","{\"contentString:str\":\"People1\",\"characterIndex:int\":\"0\",\"minimapIcon:str\":\"minimapIcon_People1_0\",\"config:struct\":\"\"}","{\"contentString:str\":\"People1\",\"characterIndex:int\":\"1\",\"minimapIcon:str\":\"minimapIcon_People1_1\",\"config:struct\":\"\"}","{\"contentString:str\":\"People1\",\"characterIndex:int\":\"2\",\"minimapIcon:str\":\"minimapIcon_People1_2\",\"config:struct\":\"\"}","{\"contentString:str\":\"People1\",\"characterIndex:int\":\"3\",\"minimapIcon:str\":\"minimapIcon_People1_3\",\"config:struct\":\"\"}","{\"contentString:str\":\"People1\",\"characterIndex:int\":\"4\",\"minimapIcon:str\":\"minimapIcon_People1_4\",\"config:struct\":\"\"}","{\"contentString:str\":\"People1\",\"characterIndex:int\":\"5\",\"minimapIcon:str\":\"minimapIcon_People1_5\",\"config:struct\":\"\"}","{\"contentString:str\":\"People1\",\"characterIndex:int\":\"6\",\"minimapIcon:str\":\"minimapIcon_People1_6\",\"config:struct\":\"\"}","{\"contentString:str\":\"People1\",\"characterIndex:int\":\"7\",\"minimapIcon:str\":\"minimapIcon_People1_9\",\"config:struct\":\"\"}","{\"contentString:str\":\"People2\",\"characterIndex:int\":\"0\",\"minimapIcon:str\":\"minimapIcon_People2_0\",\"config:struct\":\"\"}","{\"contentString:str\":\"People2\",\"characterIndex:int\":\"1\",\"minimapIcon:str\":\"minimapIcon_People2_1\",\"config:struct\":\"\"}","{\"contentString:str\":\"People2\",\"characterIndex:int\":\"2\",\"minimapIcon:str\":\"minimapIcon_People2_2\",\"config:struct\":\"\"}","{\"contentString:str\":\"People2\",\"characterIndex:int\":\"3\",\"minimapIcon:str\":\"minimapIcon_People2_3\",\"config:struct\":\"\"}","{\"contentString:str\":\"People2\",\"characterIndex:int\":\"4\",\"minimapIcon:str\":\"minimapIcon_People2_4\",\"config:struct\":\"\"}","{\"contentString:str\":\"People2\",\"characterIndex:int\":\"5\",\"minimapIcon:str\":\"minimapIcon_People2_5\",\"config:struct\":\"\"}","{\"contentString:str\":\"People2\",\"characterIndex:int\":\"6\",\"minimapIcon:str\":\"minimapIcon_People2_6\",\"config:struct\":\"\"}","{\"contentString:str\":\"People2\",\"characterIndex:int\":\"7\",\"minimapIcon:str\":\"minimapIcon_People2_7\",\"config:struct\":\"\"}","{\"contentString:str\":\"People3\",\"characterIndex:int\":\"0\",\"minimapIcon:str\":\"minimapIcon_People3_0\",\"config:struct\":\"\"}","{\"contentString:str\":\"People3\",\"characterIndex:int\":\"1\",\"minimapIcon:str\":\"minimapIcon_People3_1\",\"config:struct\":\"\"}","{\"contentString:str\":\"People3\",\"characterIndex:int\":\"2\",\"minimapIcon:str\":\"minimapIcon_People3_2\",\"config:struct\":\"\"}","{\"contentString:str\":\"People3\",\"characterIndex:int\":\"3\",\"minimapIcon:str\":\"minimapIcon_People3_3\",\"config:struct\":\"\"}","{\"contentString:str\":\"People3\",\"characterIndex:int\":\"4\",\"minimapIcon:str\":\"minimapIcon_People3_4\",\"config:struct\":\"\"}","{\"contentString:str\":\"People3\",\"characterIndex:int\":\"5\",\"minimapIcon:str\":\"minimapIcon_People3_5\",\"config:struct\":\"\"}","{\"contentString:str\":\"People3\",\"characterIndex:int\":\"6\",\"minimapIcon:str\":\"minimapIcon_People3_6\",\"config:struct\":\"\"}","{\"contentString:str\":\"People3\",\"characterIndex:int\":\"7\",\"minimapIcon:str\":\"minimapIcon_People3_7\",\"config:struct\":\"\"}","{\"contentString:str\":\"People4\",\"characterIndex:int\":\"0\",\"minimapIcon:str\":\"minimapIcon_People4_0\",\"config:struct\":\"\"}","{\"contentString:str\":\"People4\",\"characterIndex:int\":\"1\",\"minimapIcon:str\":\"minimapIcon_People4_1\",\"config:struct\":\"\"}","{\"contentString:str\":\"People4\",\"characterIndex:int\":\"2\",\"minimapIcon:str\":\"minimapIcon_People4_2\",\"config:struct\":\"\"}","{\"contentString:str\":\"People4\",\"characterIndex:int\":\"3\",\"minimapIcon:str\":\"minimapIcon_People4_3\",\"config:struct\":\"\"}","{\"contentString:str\":\"People4\",\"characterIndex:int\":\"4\",\"minimapIcon:str\":\"minimapIcon_People4_4\",\"config:struct\":\"\"}","{\"contentString:str\":\"People4\",\"characterIndex:int\":\"5\",\"minimapIcon:str\":\"minimapIcon_People4_5\",\"config:struct\":\"\"}","{\"contentString:str\":\"People4\",\"characterIndex:int\":\"6\",\"minimapIcon:str\":\"minimapIcon_People4_6\",\"config:struct\":\"\"}","{\"contentString:str\":\"People4\",\"characterIndex:int\":\"7\",\"minimapIcon:str\":\"minimapIcon_People4_7\",\"config:struct\":\"\"}"]
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 * @command EMPTY_HOLDER
 * @text ‏
 * @desc
 * @default
 */
/*~struct~XY2:
 * @param x:e
 * @text X
 * @type text
 * @default 0
 * @desc Number or script (example: Graphics.width / 2)
 *
 * @param y:e
 * @text Y
 * @type text
 * @default 0
 * @desc Number or script (example: $gameVariables.value(12) * 2)
 */

/*~struct~MinimapItemConfig:

 * @param scale:int
 * @text Scale
 * @type number
 * @decimals 1
 * @default 0.8

 * @param minDist:int
 * @text Distance
 * @type number
 * @default 0
 * @desc Minimum distance (from player) for appear on minimap.

 * @param isShowOnEdge:bool
 * @text Is Show On Edge?
 * @type boolean
 * @default true

 * @param priority:int
 * @text Priority
 * @type number
 * @default 0
 * @desc The icon with a higher value will be higher than the others

*/

/*~struct~MinimapRule:

 @param minimapIcon:str
 @text Minimap Icon
 @type file
 @dir img\pSimpleMinimap\
 @require 1
 @desc Minimap icon image or IconIndex (number)
 @default

 @param config:struct
 @text Settings
 @type struct<MinimapItemConfig>
 @desc Settings
 @default

*/

/*~struct~MinimapEventCustomAutoRule:

 @param contentString:str
 @text Filter Text
 @desc Substring in the name of the event (character graphics) image
 @default

 @param characterIndex:int
 @text Character Index
 @desc Character Index (-1 or emtpy - any character index)
 @default -1

 @param minimapIcon:str
 @text Minimap Icon
 @type file
 @dir img\pSimpleMinimap\
 @require 1
 @desc Minimap icon image or IconIndex (number)
 @default

 @param config:struct
 @text Settings
 @type struct<MinimapItemConfig>
 @desc Settings
 @default

*/


/*~struct~MinimapConfig:

 * @param isActive:bool
 * @text Is Enabled?
 * @type boolean
 * @default true
 * @desc If true - minimap will appears automatically when map is loaded

 * @param srcImageScale:int
 * @text Image Scale
 * @type number
 * @decimals 1
 * @default 0.5
 * @desc Source image scale (affects the resolution of the captured map image)

 * @param minimapScale:int
 * @text Minimap Scale
 * @type number
 * @decimals 1
 * @default 0.4
 * @desc Minimap content scale (image inside minimap)

 * @param scaleItemsWithMinimap:bool
 * @parent minimapScale:int
 * @text Is scale items with?
 * @type boolean
 * @default false
 * @desc If true - minimap icons will be scaled with minimap as well

 * @param itemsScaleWithFactor:int
 * @parent scaleItemsWithMinimap:bool
 * @text Scale ratio
 * @type number
 * @decimals 1
 * @default 1.5
 * @desc Minimap items scale change ration

 * @param limitMinimap:bool
 * @text Is have limits?
 * @type boolean
 * @default true
 * @desc If true - minimap stops moving when player is close to the map borders

 * @param limitMargin:int
 * @parent limitMinimap:bool
 * @text Margins
 * @type number
 * @default 0
 * @desc Extra margins (in pixels) from map borders

 * @param edgeIconShowMargin:int
 * @text Edge Icons Margins
 * @type number
 * @decimals 1
 * @default 0.5
 * @desc How far from the edges of the minimap will the edge icons be
 
 * @param opacity:int
 * @text Opacity
 * @type number
 * @default 255
 * @desc Minimap default opaticty. From 0 (not visible) to 255

  @param position:struct
  @text Position
  @type struct<XY2>
  @desc Default position on screen
  @default

*/



var Imported = Imported || {};
Imported.PKD_SimpleMiniMap = true;

var PKD_SimpleMiniMap = {};
PKD_SimpleMiniMap.Version = 100;

//?VERSION
PKD_SimpleMiniMap.isPro = function() { return false; };

PKD_SimpleMiniMap.PP = {};
PKD_SimpleMiniMap.Utils = {};

// * Загрзука параметров
PKD_SimpleMiniMap.LoadPluginSettings = () => {
    PKD_SimpleMiniMap.PP._loader = new KDCore.ParamLoader('PKD_SimpleMiniMap');
};

//?VERSION
function pkd_download_minimap_as_png() {}

//%[I] Для обновлений
// Русский язык
// Учитывать параметр pkdmmPriority (Game_Character)
// Добавить проверку наличия команды внутри события (правила авто-иконки)
// Icons opacity change over distance to player
// Icons scale change over distance to player (more close -> more bigger icon)
// Маленькие карты - центрирование, из-за limits, они сдвинуты не правильно
// Custom Minimap Items
// RPG Maker MV - automatic Minimap Creation on Scene Load (Not working yet)



/*
# ==========================================================================
# ==========================================================================
#
#   EMBEDDED PHEONIX KAGEDESU PLUGINS CORE LIBRARY
#   (This plugin may not use the entire code of this library)
#
# ==========================================================================
# ==========================================================================
 * 
 * 
 */



// Generated by CoffeeScript 2.6.1
// ==========================================================================
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ KDCore.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
// * LIBRARY WITH MZ AND MZ SUPPORT
//! {OUTER FILE}

//?rev 20.12.23
var KDCore;

window.Imported = window.Imported || {};

Imported.KDCore = true;

KDCore = KDCore || {};

// * Двузначные числа нельзя в версии, сравнение идёт по первой цифре поулчается (3.43 - нельзя, можно 3.4.3)
//%[МЕНЯТЬ ПРИ ИЗМЕНЕНИИ]
KDCore._fileVersion = '3.3.1';

// * Методы и библиотеки данной версии
KDCore._loader = 'loader_' + KDCore._fileVersion;

KDCore[KDCore._loader] = [];

// * Добавить библиотеку на загрузку
KDCore.registerLibraryToLoad = function(lib) {
  return KDCore[KDCore._loader].push(lib);
};

if ((KDCore.Version != null) && KDCore.Version >= KDCore._fileVersion) {
  // * ПРОПУСКАЕМ ЗАГРУЗКУ, так как уже загруженна более новая
  console.log('XDev KDCore ' + KDCore._fileVersion + ' skipped by new or exists version');
  KDCore._requireLoadLibrary = false;
} else {
  KDCore.Version = KDCore._fileVersion;
  KDCore.LIBS = KDCore.LIBS || {};
  KDCore.register = function(library) {
    return this.LIBS[library.name] = library;
  };
  window.KDCore = KDCore;
  // * ТРЕБУЕТСЯ ЗАГРУЗКА БИБЛИОТЕК
  KDCore._requireLoadLibrary = true;
}


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Array.prototype.delete = function() {
    var L, a, ax, what;
    what = void 0;
    a = arguments;
    L = a.length;
    ax = void 0;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  Array.prototype.sample = function() {
    if (this.length === 0) {
      return [];
    }
    return this[KDCore.SDK.rand(0, this.length - 1)];
  };
  Array.prototype.first = function() {
    return this[0];
  };
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  Array.prototype.shuffle = function() {
    var k, n, v;
    n = this.length;
    while (n > 1) {
      n--;
      k = KDCore.SDK.rand(0, n + 1);
      v = this[k];
      this[k] = this[n];
      this[n] = v;
    }
  };
  Array.prototype.count = function() {
    return this.length;
  };
  Array.prototype.isEmpty = function() {
    return this.length === 0;
  };
  // * Ищет элемент, у которого поле ID == id
  Array.prototype.getById = function(id) {
    return this.getByField('id', id);
  };
  // * Ищет элемент, у которого поле FIELD (имя поля) == value
  Array.prototype.getByField = function(field, value) {
    var e;
    try {
      return this.find(function(item) {
        return item[field] === value;
      });
    } catch (error) {
      e = error;
      console.warn(e);
      return null;
    }
  };
  Object.defineProperty(Array.prototype, "delete", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "max", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "min", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "sample", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "first", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "last", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "shuffle", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "count", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "isEmpty", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "getById", {
    enumerable: false
  });
  return Object.defineProperty(Array.prototype, "getByField", {
    enumerable: false
  });
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Number.prototype.do = function(method) {
    return KDCore.SDK.times(this, method);
  };
  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
  return Number.prototype.any = function(number) {
    return (number != null) && number > 0;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  String.prototype.toCss = function() {
    return KDCore.Color.FromHex(this).CSS;
  };
  String.prototype.toCSS = function() {
    return this.toCss();
  };
  String.prototype.isEmpty = function() {
    return this.length === 0 || !this.trim();
  };
  String.isNullOrEmpty = function(str) {
    if (str != null) {
      return str.toString().isEmpty();
    } else {
      return true;
    }
  };
  String.any = function(str) {
    return !String.isNullOrEmpty(str);
  };
  return String.prototype.replaceAll = function(search, replacement) {
    var target;
    target = this;
    return target.split(search).join(replacement);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.isMV = function() {
    return Utils.RPGMAKER_NAME.contains("MV");
  };
  KDCore.isMZ = function() {
    return !KDCore.isMV();
  };
  KDCore.warning = function(msg, error) {
    if (msg != null) {
      console.warn(msg);
    }
    if (error != null) {
      console.warn(error);
    }
  };
  KDCore.makeid = function(length) {
    var characters, charactersLength, i, result;
    result = '';
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    charactersLength = characters.length;
    i = 0;
    while (i < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      i++;
    }
    return result;
  };
  return KDCore.makeId = function() {
    return KDCore.makeid(...arguments);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var SDK;
  //?[DEPRECATED]
  // * SDK
  //------------------------------------------------------------------------------
  SDK = function() {
    throw new Error('This is a static class');
  };
  SDK.rand = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };
  SDK.setConstantToObject = function(object, constantName, constantValue) {
    object[constantName] = constantValue;
    if (typeof object[constantName] === 'object') {
      Object.freeze(object[constantName]);
    }
    Object.defineProperty(object, constantName, {
      writable: false
    });
  };
  SDK.convertBitmapToBase64Data = function(bitmap) {
    return bitmap._canvas.toDataURL('image/png');
  };
  SDK.times = function(times, method) {
    var i, results;
    i = 0;
    results = [];
    while (i < times) {
      method(i);
      results.push(i++);
    }
    return results;
  };
  SDK.toGlobalCoord = function(layer, coordSymbol = 'x') {
    var node, t;
    t = layer[coordSymbol];
    node = layer;
    while (node) {
      t -= node[coordSymbol];
      node = node.parent;
    }
    return (t * -1) + layer[coordSymbol];
  };
  SDK.canvasToLocalX = function(layer, x) {
    while (layer) {
      x -= layer.x;
      layer = layer.parent;
    }
    return x;
  };
  SDK.canvasToLocalY = function(layer, y) {
    while (layer) {
      y -= layer.y;
      layer = layer.parent;
    }
    return y;
  };
  SDK.isInt = function(n) {
    return Number(n) === n && n % 1 === 0;
  };
  SDK.isFloat = function(n) {
    return Number(n) === n && n % 1 !== 0;
  };
  SDK.checkSwitch = function(switchValue) {
    if (switchValue === 'A' || switchValue === 'B' || switchValue === 'C' || switchValue === 'D') {
      return true;
    }
    return false;
  };
  SDK.toNumber = function(string, none = 0) {
    var number;
    if (string == null) {
      return none;
    }
    number = Number(string);
    if (isNaN(number)) {
      return none;
    }
    return number;
  };
  SDK.isString = function(value) {
    return typeof value === "string";
  };
  SDK.isArray = function(value) {
    return Array.isArray(value);
  };
  //@[EXTEND]
  return KDCore.SDK = SDK;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var __alias_Bitmap_blt_kdCore, __alias_Bitmap_fillAll_kdCore;
  //@[ALIAS]
  __alias_Bitmap_fillAll_kdCore = Bitmap.prototype.fillAll;
  Bitmap.prototype.fillAll = function(color) {
    if (color instanceof KDCore.Color) {
      return this.fillRect(0, 0, this.width, this.height, color.CSS);
    } else {
      return __alias_Bitmap_fillAll_kdCore.call(this, color);
    }
  };
  //@[ALIAS]
  __alias_Bitmap_blt_kdCore = Bitmap.prototype.blt;
  Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (this._needModBltDWH > 0) {
      dh = dw = this._needModBltDWH;
      __alias_Bitmap_blt_kdCore.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
      this._needModBltDWH = null;
    } else {
      __alias_Bitmap_blt_kdCore.call(this, ...arguments);
    }
  };
  Bitmap.prototype.drawIcon = function(x, y, icon, size = 32, noSmoth = false) {
    var bitmap;
    bitmap = null;
    if (icon instanceof Bitmap) {
      bitmap = icon;
    } else {
      bitmap = KDCore.BitmapSrc.LoadFromIconIndex(icon).bitmap;
    }
    this._context.imageSmoothingEnabled = !noSmoth;
    this.drawOnMe(bitmap, x, y, size, size);
    this._context.imageSmoothingEnabled = true;
  };
  Bitmap.prototype.drawOnMe = function(bitmap, x = 0, y = 0, sw = 0, sh = 0) {
    if (sw <= 0) {
      sw = bitmap.width;
    }
    if (sh <= 0) {
      sh = bitmap.height;
    }
    this.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, sw, sh);
  };
  Bitmap.prototype.drawInMe = function(bitmap) {
    return Bitmap.prototype.drawOnMe(bitmap, 0, 0, this.width, this.height);
  };
  return Bitmap.prototype.drawTextFull = function(text, position = 'center') {
    return this.drawText(text, 0, 0, this.width, this.height, position);
  };
});


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  // * Нахожусь ли Я в точке по диагонале (рядом), относительно char
  _.kdInDiagonalPointRelativeTo = function(char) {
    var e, x, y;
    try {
      if (char == null) {
        return false;
      }
      ({x, y} = char);
      if (x === this.x - 1 && ((y === this.y - 1) || (y === this.y + 1))) {
        return true; // * left up or down
      }
      if (x === this.x + 1 && (y === this.y - 1 || y === this.y + 1)) {
        return true; // * right up or down
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * В MZ нету данной функции, а она часто используется в моих плагинах
  if (!KDCore.isMZ()) {
    return;
  }
  //?[NEW] (from MV)
  return ImageManager.loadEmptyBitmap = function() {
    if (this._emptyBitmap != null) {
      return this._emptyBitmap;
    } else {
      return new Bitmap();
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var _input_onKeyDown, _input_onKeyUp, i, j, k, l;
  Input.KeyMapperPKD = {};
//Numbers
  for (i = j = 48; j <= 57; i = ++j) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i);
  }
//Letters Upper
  for (i = k = 65; k <= 90; i = ++k) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
//Letters Lower (for key code events)
  for (i = l = 97; l <= 122; i = ++l) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
  
  //@[ALIAS]
  _input_onKeyDown = Input._onKeyDown;
  Input._onKeyDown = function(event) {
    _input_onKeyDown.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode);
  };
  //@[ALIAS]
  _input_onKeyUp = Input._onKeyUp;
  Input._onKeyUp = function(event) {
    _input_onKeyUp.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode, false);
  };
  //?NEW
  Input._setStateWithMapperPKD = function(keyCode, state = true) {
    var symbol;
    symbol = Input.KeyMapperPKD[keyCode];
    if (symbol != null) {
      return this._currentState[symbol] = state;
    }
  };
  //?NEW
  Input.isCancel = function() {
    return Input.isTriggered('cancel') || TouchInput.isCancelled();
  };
  //?NEW
  return TouchInput.toPoint = function() {
    return new KDCore.Point(TouchInput.x, TouchInput.y);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  PluginManager.getPluginParametersByRoot = function(rootName) {
    var pluginParameters, property;
    for (property in this._parameters) {
      if (this._parameters.hasOwnProperty(property)) {
        pluginParameters = this._parameters[property];
        if (PluginManager.isPluginParametersContentKey(pluginParameters, rootName)) {
          return pluginParameters;
        }
      }
    }
    return PluginManager.parameters(rootName);
  };
  return PluginManager.isPluginParametersContentKey = function(pluginParameters, key) {
    return pluginParameters[key] != null;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ___Sprite_alias_Move_KDCORE_2;
  Sprite.prototype.moveToCenter = function(dx = 0, dy = 0) {
    return this.move(-this.bitmap.width / 2 + dx, -this.bitmap.height / 2 + dy);
  };
  Sprite.prototype.setStaticAnchor = function(floatX = 1, floatY = 1) {
    this.x -= Math.round(this.width * floatX);
    this.y -= Math.round(this.height * floatY);
  };
  Sprite.prototype.moveToParentCenter = function() {
    if (!this.parent) {
      return;
    }
    return this.move(this.parent.width / 2, this.parent.height / 2);
  };
  ___Sprite_alias_Move_KDCORE_2 = Sprite.prototype.move;
  Sprite.prototype.move = function(x, y) {
    if (x instanceof Array) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x[0], x[1]);
    } else if (x instanceof KDCore.Point || ((x != null ? x.x : void 0) != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x.x, x.y);
    } else if ((x != null) && (x._x != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x._x, x._y);
    } else {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x, y);
    }
  };
  Sprite.prototype.isContainsPoint = function(point) {
    var rect, rx, ry;
    if (this.width === 0 || this.height === 0) {
      return false;
    }
    rx = KDCore.SDK.toGlobalCoord(this, 'x');
    ry = KDCore.SDK.toGlobalCoord(this, 'y');
    rect = this._getProperFullRect(rx, ry);
    return rect.contains(point.x, point.y);
  };
  // * Возвращает Rect с учётом Scale и Anchor спрайта
  Sprite.prototype._getProperFullRect = function(rx, ry) {
    var height, width, x, y;
    width = this.width * Math.abs(this.scale.x);
    height = this.height * Math.abs(this.scale.y);
    x = rx - this.anchor.x * width;
    y = ry - this.anchor.y * height;
    if (this.anchor.x === 0 && this.scale.x < 0) {
      x += this.width * this.scale.x;
    }
    if (this.anchor.y === 0 && this.scale.y < 0) {
      y += this.height * this.scale.y;
    }
    return new PIXI.Rectangle(x, y, width, height);
  };
  Sprite.prototype.fillAll = function(color) {
    if (color != null) {
      return this.bitmap.fillAll(color);
    } else {
      return this.fillAll(KDCore.Color.WHITE);
    }
  };
  return Sprite.prototype.removeFromParent = function() {
    if (this.parent != null) {
      return this.parent.removeChild(this);
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return TouchInput.toMapPoint = function() {
    return this.toPoint().convertToMap();
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.Utils = KDCore.Utils || {};
  return (function() {
    var _;
    _ = KDCore.Utils;
    _.getJDataById = function(id, source) {
      var d, j, len;
      for (j = 0, len = source.length; j < len; j++) {
        d = source[j];
        if (d.id === id) {
          return d;
        }
      }
      return null;
    };
    _.hasMeta = function(symbol, obj) {
      return (obj != null) && (obj.meta != null) && (obj.meta[symbol] != null);
    };
    _.getValueFromMeta = function(symbol, obj) {
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      return obj.meta[symbol];
    };
    _.getNumberFromMeta = function(symbol, obj) {
      var value;
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      if (obj.meta[symbol] === true) {
        return 0;
      } else {
        value = KDCore.SDK.toNumber(obj.meta[symbol], 0);
      }
      return value;
    };
    _.isSceneMap = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Map;
      } catch (error) {
        return false;
      }
    };
    _.isMapScene = function() {
      return this.isSceneMap();
    };
    _.isSceneBattle = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Battle;
      } catch (error) {
        return false;
      }
    };
    _.isBattleScene = function() {
      return this.isSceneBattle();
    };
    _.getEventCommentValue = function(commentCode, list) {
      var comment, e, i, item;
      try {
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                return comment;
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return null;
    };
    _.getEventCommentValueArray = function(commentCode, list) {
      var comment, comments, e, i, item;
      try {
        comments = [];
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                comments.push(comment);
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return comments;
    };
    _.getPositionPointFromJSON = function(jsonSettings) {
      return _.convertPositionPointFromJSON(jsonSettings.position);
    };
    _.convertPositionPointFromJSON = function(position) {
      var e, x, y;
      try {
        x = position[0];
        y = position[1];
        if (!KDCore.SDK.isInt(x)) {
          x = eval(x);
        }
        if (!KDCore.SDK.isInt(y)) {
          y = eval(y);
        }
        return new KDCore.Point(x, y);
      } catch (error) {
        e = error;
        console.warn('Utils.getPositionPointFromJSON', e);
        return KDCore.Point.Empty;
      }
    };
    _.jsonPos = function(jsonPosition) {
      return _.convertPositionPointFromJSON(jsonPosition);
    };
    _.jsonPosXY = function(jsonPosition) {
      var e, x, y;
      try {
        ({x, y} = jsonPosition);
        return new KDCore.Point(eval(x), eval(y));
      } catch (error) {
        e = error;
        console.warn('Utils.jsonPosXY', e);
        return KDCore.Point.Empty;
      }
    };
    _.getVar = function(id) {
      return $gameVariables.value(id);
    };
    _.setVar = function(id, value) {
      return $gameVariables.setValue(id, value);
    };
    _.addToVar = function(id, value) {
      var prevVal;
      prevVal = _.getVar(id);
      return _.setVar(id, prevVal + value);
    };
    _.playSE = function(seFileName, pitch = 100, volume = 100) {
      var sound;
      if (seFileName == null) {
        return;
      }
      if (seFileName === "") {
        return;
      }
      sound = {
        name: seFileName,
        pan: 0,
        pitch: pitch,
        volume: volume
      };
      AudioManager.playStaticSe(sound);
    };
    _.getItemTypeId = function(item) {
      if (DataManager.isWeapon(item)) {
        return 1;
      } else if (DataManager.isArmor(item)) {
        return 2;
      }
      return 0;
    };
    _.getItemByType = function(itemId, typeId) {
      var data, e;
      try {
        if ((typeId != null) && !isFinite(typeId) && KDCore.SDK.isString(typeId) && String.any(typeId)) {
          if (typeId[0] === "w") {
            typeId = 1;
          } else if (typeId[0] === "a") {
            typeId = 2;
          } else {
            typeId = 0;
          }
        }
        data = [$dataItems, $dataWeapons, $dataArmors];
        return data[typeId][itemId];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    _.loadFont = function(name) {
      if (typeof FontManager === "undefined" || FontManager === null) {
        return;
      }
      if (String.isNullOrEmpty(name)) {
        return;
      }
      if (FontManager._states[name] != null) {
        return;
      }
      FontManager.load(name, name + ".ttf");
    };
    _.convertTimeShort = function(seconds) {
      var e;
      try {
        if (seconds > 59) {
          return Math.floor(seconds / 60) + 'm';
        } else {
          return seconds;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        return seconds;
      }
    };
    _.isPointInScreen = function(point, margin = 10) {
      var maxH, maxW, screenMargin, x, y;
      ({x, y} = point);
      maxW = Graphics.width;
      maxH = Graphics.height;
      // * Граница от краёв экрана
      screenMargin = margin;
      if (x < screenMargin) {
        return false;
      }
      if (y < screenMargin) {
        return false;
      }
      if (x > (maxW - screenMargin)) {
        return false;
      }
      if (y > (maxH - screenMargin)) {
        return false;
      }
      return true;
    };
    // * Ассинхронная загрузка изображения, возвращает bitmap, когда загружен
    // * Пример использования loadImageAsync(a, b).then(метод)
    // в метод будет передан bitmap первым аргументом
    _.loadImageAsync = async function(folder, filename) {
      var promise;
      promise = new Promise(function(resolve, reject) {
        var b;
        b = ImageManager.loadBitmap("img/" + folder + "/", filename);
        return b.addLoadListener(function() {
          return resolve(b);
        });
      });
      return (await promise);
    };
    // * Преобразовать расширенное значение
    // * Значение может быть X -> X
    // * "X" -> X (цифра)
    // * "X,Y,Z,..." -> [X, Y, Z]
    // * "[X, Y, Z,...]" -> [X, Y, Z]
    // * "X|V" -> из переменной X
    // * [Y] -> случайное число из массива (рекурсивно)
    //@[2.8.1] since
    _.getEValue = function(value) {
      var e, items, randomValue, variableId;
      try {
        if (value == null) {
          return null;
        }
        if (KDCore.SDK.isString(value)) {
          if (isFinite(value)) { // * Число представленно строкой
            return Number(value);
          }
          // * Массив представлен строкой (может быть без квадратных скобок)
          if (value.contains(',') || (value.contains("[") && value.contains("]"))) {
            value = value.replace("[", "");
            value = value.replace("]", "");
            // * Преобразуем в число или строку (например если extended |V)
            items = value.split(",").map(function(item) {
              var itemT;
              itemT = item.trim();
              if (isFinite(itemT)) {
                return Number(itemT);
              } else {
                return itemT;
              }
            });
            // * Вызываем снова эту функцию, но уже с массивом
            return KDCore.Utils.getEValue(items);
          }
          if (value.contains("|V")) {
            variableId = parseInt(value);
            return $gameVariables.value(variableId);
          }
          return value; // * Просто значение в итоге
        } else if (KDCore.SDK.isArray(value)) {
          randomValue = value.sample();
          return KDCore.Utils.getEValue(randomValue);
        } else {
          return value;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return value;
      }
    };
    //@[2.8.2] since
    _.isChanceIsGood = function(chance) {
      var e;
      try {
        if (chance > 1) {
          chance /= 100;
        }
        return chance > Math.random();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    //@[2.8.2] since
    //KEY:w:3:1:50 , KEY:i:10:2:1|V
    //OUTPUT: [GameItem, COUNT]
    _.parseItemFromConditionStr = function(conditionLine) {
      var amount, e, itemChance, itemId, parts, typeId;
      try {
        if (!conditionLine.contains(":")) {
          return null;
        }
        parts = conditionLine.split(":");
        typeId = parts[1];
        itemId = KDCore.Utils.getEValue(parts[2]);
        amount = KDCore.Utils.getEValue(parts[3]);
        if (amount <= 0) {
          return null;
        }
        try {
          itemChance = String.any(parts[4]) ? parts[4] : 100;
          itemChance = KDCore.Utils.getEValue(itemChance) / 100;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          itemChance = 0;
        }
        if (itemChance <= 0) {
          return null;
        }
        if (KDCore.Utils.isChanceIsGood(itemChance)) {
          return [KDCore.Utils.getItemByType(itemId, typeId), amount];
        } else {
          return null;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    //@[3.2.1] since
    _.isValidCE = function(commonEventId) {
      var e;
      try {
        return commonEventId > 0 && ($dataCommonEvents[commonEventId] != null);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    //@[3.2.1] since
    _.startCE = function(commonEventId) {
      var e;
      try {
        if (this.isValidCE(commonEventId)) {
          return $gameTemp.reserveCommonEvent(commonEventId);
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    //@[3.2.1] since
    _.checkSwitch = function(value) {
      if (value == null) {
        return false;
      }
      if (isFinite(value)) {
        return false;
      }
      return KDCore.SDK.checkSwitch(value);
    };
    //@[3.2.1] since
    // * Вызвать с задержкой в time миллисекунд
    // * Не забываем про bind
    _.callDelayed = function(method, time = 1) {
      var e;
      try {
        if (method == null) {
          return;
        }
        setTimeout((function() {
          var e;
          try {
            return method();
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }), time);
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    //@[3.2.1] since
    //<meta:1,2,3,4> -> [1,2,3,4]
    _.getArrayOfNumbersFromMeta = function(symbol, obj) {
      var e, values;
      try {
        values = this.getArrayOfValuesFromMeta(symbol, obj);
        return values.map(function(v) {
          return Number(v);
        });
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return [];
      }
    };
    //@[3.2.1] since
    //<meta:a,b,c> -> ["a", "b", "c"]
    //<meta:a> -> ["a"]
    _.getArrayOfValuesFromMeta = function(symbol, obj) {
      var e, items, values;
      try {
        values = this.getValueFromMeta(symbol, obj);
        if (String.any(values)) {
          if (values.contains(',')) {
            items = values.split(',');
            return items || [];
          } else {
            return [values];
          }
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return [];
      }
    };
    //@[3.2.1] since
    // * Когда содержит одинаковый набор ключей
    //<meta:value1>
    //<meta:value2>
    //...
    // -> [value1,value2,...]
    _.getArrayOfValuesOfSameMeta = function(symbol, obj) {
      var e, j, len, line, lines, result;
      try {
        if (!this.hasMeta(symbol, obj)) {
          return [];
        }
        lines = obj.note.split("\n").filter(function(l) {
          return l.contains(symbol);
        });
        result = [];
        for (j = 0, len = lines.length; j < len; j++) {
          line = lines[j];
          try {
            line = line.replace("<" + symbol + ":", "");
            line = line.replace(">", "");
            result.push(line);
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
        }
        return result;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return [];
    };
    //@[3.2.7] since
    _.getIndexIn2DArrayByIJ = function(row, col, cols) {
      return row * cols + col;
    };
    //@[3.2.7] since
    // * row - строка
    // * col - столбец
    _.getIJByIndexIn2DArray = function(index, cols) {
      var col, e, row;
      try {
        row = Math.floor(index / cols);
        col = index % cols;
        return [row, col];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return [0, 0];
      }
    };
    //@[3.2.7] since
    _.isSwitchIsTRUE = function(switchId) {
      var e;
      if (switchId == null) {
        return true;
      }
      if (switchId <= 0) {
        return true;
      }
      try {
        return $gameSwitches.value(switchId) === true;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return false;
    };
    //@[2.9.7] since
    // * Shrink number 100000 to "100k" and ect, returns STRING
    _.formatNumberToK = function(num) {
      var e;
      try {
        if (num >= 1000000000) {
          return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
          return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
          return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return num;
      }
    };
  })();
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return Window_Base.prototype.drawFaceWithCustomSize = function(faceName, faceIndex, x, y, finalSize) {
    this.contents._needModBltDWH = finalSize;
    this.drawFace(faceName, faceIndex, x, y);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return (function() {    // * Input Extension: KDGamepad
    //------------------------------------------------------------------------------
    // * Поддержка расширенного управления через геймпад (свой модуль)
    var ALIAS___updateGamepadState, _;
    //@[DEFINES]
    _ = Input;
    // * Активировать работу модуля KDGamepad
    _.activateExtendedKDGamepad = function() {
      return _._kdIsGamepadExtended = true;
    };
    //@[ALIAS]
    ALIAS___updateGamepadState = _._updateGamepadState;
    _._updateGamepadState = function(gamepad) {
      if (Input._kdIsGamepadExtended === true) {
        KDGamepad.update();
      }
      if ((typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp.__kdgpStopDefaultGamepad : void 0) === true) {
        return;
      }
      // * Режим перемещения без DPad
      // * В оригинале игрок также ходит по DPad клавишам, что может быть не удобно
      // * например при работе с инвентарём
      if (KDGamepad.isNoDPadMoving()) {
        if (KDGamepad.isDPadAny()) {
          Input.clear();
          return;
        }
      }
      ALIAS___updateGamepadState.call(this, gamepad);
    };
    window.KDGamepad = function() {
      return new Error("This is static class");
    };
    window.addEventListener("gamepadconnected", function(event) {
      var e;
      try {
        return KDGamepad.refresh();
      } catch (error) {
        // * Можно напрямую
        //unless KDGamepad.isExists()
        //    if event.gamepad? and event.gamepad.mapping == 'standard'
        //        KDGamepad.init(event.gamepad)
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    window.addEventListener("gamepaddisconnected", function(event) {
      var e;
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        if ((event.gamepad != null) && event.gamepad === KDGamepad.gamepad) {
          return KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    KDGamepad.stopDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = true;
    };
    KDGamepad.resumeDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = null;
    };
    // * Ссылка на геймпад
    KDGamepad.gamepad = null;
    // * Подключён ли Gamepad ?
    KDGamepad.isExists = function() {
      return KDGamepad.gamepad != null;
    };
    // * Инициализация состояния кнопок
    // * Этот метод вызывается автоматически из Refresh или при подключении Gamepad
    KDGamepad.init = function(gamepad) {
      KDGamepad.gamepad = gamepad;
      this._isActive = true;
      this.buttonNames = [
        'A', // 0
        'B', // 1
        'X', // 2
        'Y', // 3
        'LB', // 4
        'RB', // 5
        'LTrigger', // 6
        'RTrigger', // 7
        'Back', // 8
        'Start', // 9
        'LStick', // 10
        'RStick', // 11
        'dUp', // 12
        'dDown', // 13
        'dLeft', // 14
        'dRight' // 15
      ];
      this.reset();
    };
    // * Аналог Input.clear
    KDGamepad.clear = function() {
      return KDGamepad.reset();
    };
    // * Сбросить состояние кнопок
    KDGamepad.reset = function() {
      this.leftStick = {
        x: 0,
        y: 0
      };
      this.rightStick = {
        x: 0,
        y: 0
      };
      this.buttons = {};
      this.buttonsPressed = {};
      this.prevButtons = {};
    };
    
    // * Остановить учёт геймпада
    KDGamepad.stop = function() {
      KDGamepad.reset();
      KDGamepad.gamepad = null;
    };
    // * Функция проверки что нажата кнопка на геймпаде
    KDGamepad._buttonPressed = function(gamepad, index) {
      var b, e;
      try {
        if (!gamepad || !gamepad.buttons || index >= gamepad.buttons.length) {
          return false;
        }
        b = gamepad.buttons[index];
        if (b == null) {
          return false;
        }
        if (typeof b === 'object') {
          // * Можно упростить
          return b.pressed;
        }
        return b === 1.0;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    // * Каждый кадр (обновление состояний)
    KDGamepad.update = function() {
      var e, gp, i, isDown, j, len, name, ref;
      if (!KDGamepad.isActive()) {
        return;
      }
      KDGamepad.refresh();
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        gp = KDGamepad.gamepad;
        ref = this.buttonNames;
        // * Проверка состояний кнопок
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          name = ref[i];
          this.buttons[name] = false;
          isDown = KDGamepad._buttonPressed(gp, i);
          if (isDown === true) {
            this.prevButtons[name] = true;
          } else {
            // * Срабатываение только при нажал - отпустил
            if (this.prevButtons[name] === true) {
              this.buttons[name] = true;
              this.prevButtons[name] = false;
            }
          }
        }
        // * Проверка стиков
        this.leftStick.x = gp.axes[0];
        this.leftStick.y = gp.axes[1];
        this.rightStick.x = gp.axes[2];
        this.rightStick.y = gp.axes[3];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Обновить и проверить состояние Gamepad
    // * Надо каждый раз это вызывать
    KDGamepad.refresh = function() {
      var e, gamepads, gp, i, isGamepadRefreshed, j, ref;
      try {
        isGamepadRefreshed = false;
        if (navigator.getGamepads) {
          gamepads = navigator.getGamepads();
        } else if (navigator.webkitGetGamepads) {
          gamepads = navigator.webkitGetGamepads();
        }
        if (gamepads != null) {
          for (i = j = 0, ref = gamepads.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
            gp = gamepads[i];
            if ((gp != null) && gp.mapping === 'standard') {
              isGamepadRefreshed = true;
              if (KDGamepad.buttonNames != null) {
                KDGamepad.gamepad = gp;
              } else {
                KDGamepad.init(gp);
              }
              break;
            }
          }
        }
        if (!isGamepadRefreshed) {
          // * Если не был найден не один gamepad - отключаем систему
          KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Любое нажатие кнопки
    KDGamepad.isKeyAny = function(name) {
      return KDGamepad.isKey(name) || KDGamepad.isKeyPressed(name);
    };
    // * Нажата ли кнопка (trigger нажал - отпустил)
    KDGamepad.isKey = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.buttons[name] === true;
    };
    // * Нажата ли кнопка (continues зажата)
    KDGamepad.isKeyPressed = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.prevButtons[name] === true;
    };
    KDGamepad.isDPadAny = function() {
      return KDGamepad.isKeyAny("dLeft") || KDGamepad.isKeyAny("dRight") || KDGamepad.isKeyAny("dUp") || KDGamepad.isKeyAny("dDown");
    };
    KDGamepad.isActive = function() {
      return this._isActive === true;
    };
    // * Временно отключить обработку KDGamepad
    KDGamepad.setActive = function(_isActive) {
      this._isActive = _isActive;
      if (KDGamepad.isActive()) {
        KDGamepad.refresh();
      } else {
        KDGamepad.stop();
      }
    };
    // * Отключить перемещение игрока на DPad
    KDGamepad.setNoDPadMovingMode = function(_noDpadMoving) {
      this._noDpadMoving = _noDpadMoving;
    };
    return KDGamepad.isNoDPadMoving = function() {
      return this._noDpadMoving === true;
    };
  })();
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var BitmapSrc;
  BitmapSrc = (function() {
    //?[DEPRECATED]
    class BitmapSrc {
      constructor() {
        this.bitmap = null;
      }

      static LoadFromIconIndex(iconIndex) {
        var bs, icon_bitmap, iconset, ph, pw, sx, sy;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[iconIndex] == null) {
          iconset = ImageManager.loadSystem('IconSet');
          if (KDCore.isMV()) {
            pw = Window_Base._iconWidth;
            ph = Window_Base._iconHeight;
          } else {
            pw = ImageManager.iconWidth;
            ph = ImageManager.iconHeight;
          }
          sx = iconIndex % 16 * pw;
          sy = Math.floor(iconIndex / 16) * ph;
          icon_bitmap = new Bitmap(pw, ph);
          icon_bitmap.addLoadListener(function() {
            icon_bitmap.blt(iconset, sx, sy, pw, ph, 0, 0);
          });
          BitmapSrc.CACHE[iconIndex] = icon_bitmap;
        }
        bs.bitmap = BitmapSrc.CACHE[iconIndex];
        return bs;
      }

      static LoadFromImageFolder(filename) {
        var bs;
        bs = new BitmapSrc();
        bs.bitmap = ImageManager.loadPicture(filename);
        return bs;
      }

      static LoadFromBase64(data, name) {
        var bs;
        bs = new BitmapSrc();
        if (name != null) {
          if (BitmapSrc.CACHE[name] != null) {
            bs.bitmap = BitmapSrc.CACHE[name];
          } else {
            BitmapSrc.CACHE[name] = Bitmap.load(data);
            bs.bitmap = BitmapSrc.CACHE[name];
          }
        } else {
          bs.bitmap = Bitmap.load(data);
        }
        return bs;
      }

      static LoadFromMemory(symbol) {
        var bs;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[symbol] != null) {
          bs.bitmap = BitmapSrc.CACHE[symbol];
        } else {
          bs.bitmap = ImageManager.loadEmptyBitmap();
        }
        return bs;
      }

    };

    BitmapSrc.CACHE = {};

    return BitmapSrc;

  }).call(this);
  //@[EXTEND]
  return KDCore.BitmapSrc = BitmapSrc;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Changer;
  // * Класс который может плавно изменять какой-либо параметр
  // * Работает в стиле chain методов

    // * ------------------ ПРИМЕР ----------------------------------

    // * Меняем прозрачность 4 раза, туда-сюда, затем выводим done в консоль

    //@changer = new AA.Changer(someSprite)
  //@changer.change('opacity').from(255)
  //            .to(0).step(5).speed(1).delay(30).repeat(4).reverse()
  //            .start().done(() -> console.log('done'))
  //@changer.update()

    // * -------------------------------------------------------------
  Changer = class Changer {
    constructor(obj) {
      this.obj = obj;
      // * Количество кадров, в которые будет обновление
      this._field = null; // * название поля
      this._speed = 1; // * frames
      this._step = 1; // * шаг изменения значения
      this._from = 0; // * Начальное значение
      this._to = 0; // * Конечное значение
      this._thread = null;
      this._orienation = true; // * Направление + или - step (true = +)
      this._delay = 0; // * Задержка старта
      this._changer = null; // * Ссылка на следующий changer
      this._isRepeat = false; // * Надо ли поторить себя снова
      this._onDoneMethod = null; // * Метод будет выполнен в конце (при завершении)
      this._isPrepared = false; // * Элемента был подготовлен (установлено значение from)
    }

    start() {
      if (this._field == null) {
        return;
      }
      if (this._from === this._to) {
        return;
      }
      if (this._delay > 0) {
        this._delayThread = new KDCore.TimedUpdate(this._delay, this._startThread.bind(this));
        this._delayThread.once();
      } else {
        this._startThread();
      }
      return this;
    }

    isStarted() {
      return (this._thread != null) || (this._delayThread != null);
    }

    from(_from) {
      this._from = _from;
      return this;
    }

    to(_to) {
      this._to = _to;
      return this;
    }

    step(_step) {
      this._step = _step;
      return this;
    }

    speed(_speed) {
      this._speed = _speed;
      return this;
    }

    change(_field) {
      this._field = _field;
      return this;
    }

    // * Снова повторить (не совместим с then)
    // * Если ничего не указать, или <= 0 -> то бескончно
    repeat(_repeatCount = 0) {
      this._repeatCount = _repeatCount;
      if (this._repeatCount <= 0) {
        this._repeatCount = null;
      }
      this._isRepeat = true;
      this._changer = null;
      return this;
    }

    // * Снова повторить, но поменять местами to и from (работает только с repeat >= 2)
    reverse() {
      this._isReverse = true;
      return this;
    }

    isDone() {
      if (!this._isPrepared) {
        // * Чтобы не было выхода пока ждёт Delay
        return false;
      }
      // * Если от 255 до 0 (например)
      if (this._orienation === false) {
        // * То может быть меньше нуля (т.к. @step динамический)
        return this.value() <= this._to;
      } else {
        return this.value() >= this._to;
      }
    }

    value() {
      return this.obj[this._field];
    }

    stop() {
      this._thread = null;
      this._delayThread = null;
      if (this._changer == null) {
        // * Если есть связанный Changer, то не выполняем метод завршения
        return this._callDoneMethod();
      }
    }

    // * При ожидании, значения устанавливаются не сразу
    delay(_delay) {
      this._delay = _delay;
      return this;
    }

    // * Выполнить другой Changer после этого
    // * Не совместим с Repeat
    // * НЕЛЬЗЯ зацикливать, не будет работать
    // * Соединённый не надо обновлять вне, он обновляется в этом
    then(_changer) {
      this._changer = _changer;
      this._isRepeat = false;
      return this;
    }

    // * Этот метод будт выполнене в конце
    done(_onDoneMethod) {
      this._onDoneMethod = _onDoneMethod;
      return this;
    }

    // * Шаг можно выполнить и в ручную
    makeStep() {
      if (!this.isStarted()) {
        this._prepare();
      }
      this._makeStep();
      return this;
    }

    update() {
      var ref;
      if (this.isStarted()) {
        if (this._delay > 0) {
          if ((ref = this._delayThread) != null) {
            ref.update();
          }
        }
        if (this._thread != null) {
          this._updateMainThread();
        }
      } else {
        // * Если хоть раз был запущен
        if (this._isBeenStarted === true) {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
        }
      }
    }

    static CreateForOpacityUp(sprite, step = 35, onDone = null, isAutoStart = true) {
      var changer;
      changer = new Changer(sprite);
      changer.change('opacity').from(0).to(255).step(step);
      changer.done(function() {
        sprite.opacity = 255;
        if (onDone != null) {
          return onDone();
        }
      });
      if (isAutoStart) {
        changer.start();
      }
      return changer;
    }

    static CreateForOpacityDown(sprite, step = 35, onDone = null, isAutoStart = true) {
      var changer;
      changer = new Changer(sprite);
      changer.change('opacity').from(sprite.opacity).to(0).step(step);
      changer.done(function() {
        sprite.opacity = 0;
        if (onDone != null) {
          return onDone();
        }
      });
      if (isAutoStart) {
        changer.start();
      }
      return changer;
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Changer.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Changer.prototype;
    _._prepare = function() {
      if (this._field == null) {
        return;
      }
      this._orienation = this._from < this._to;
      if (!this._orienation) {
        this._step *= -1;
      }
      // * Устанавливаем начальное значение
      this.obj[this._field] = this._from;
      this._isPrepared = true;
    };
    _._makeStep = function() {
      var value;
      if (this.isDone()) {
        return;
      }
      value = this.value();
      value += this._step;
      this.obj[this._field] = value;
    };
    _._startThread = function() {
      this._prepare();
      if (this.isDone()) {
        return;
      }
      this._thread = new KDCore.TimedUpdate(this._speed, this._makeStep.bind(this));
      return this._isBeenStarted = true;
    };
    _._updateChainedChanger = function() {
      if (this._changer.isStarted()) {
        this._changer.update();
        if (this._changer.isDone()) {
          this._callDoneMethod();
          this._changer.stop();
          return this._changer = null;
        }
      } else {
        return this._changer.start();
      }
    };
    _._restart = function() {
      if (!this._isCanRepeatMore()) {
        return;
      }
      if (this._repeatCount == null) {
        // * Если указано! число повторений, то onDone метод не вызываем
        this._callDoneMethod();
      }
      if (this._isReverse === true) {
        this._swapFromTo();
      }
      this._prepare();
      return this.start();
    };
    _._swapFromTo = function() {
      var t;
      t = this._from;
      this._from = this._to;
      this._to = t;
      // * Инвентируем число step
      this._step *= -1;
    };
    _._callDoneMethod = function() {
      if (this._onDoneMethod != null) {
        return this._onDoneMethod();
      }
    };
    _._isCanRepeatMore = function() {
      if (this._repeatCount == null) {
        return true;
      }
      this._repeatCount--;
      if (this._repeatCount <= 0) {
        this.stop();
        return false;
      }
      return true;
    };
    _._updateMainThread = function() {
      this._thread.update();
      if (this.isDone()) {
        if (this._isRepeat === true) {
          this._restart();
        } else {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
          this.stop();
        }
      }
    };
  })();
  // ■ END Changer.coffee
  //---------------------------------------------------------------------------

  //@[EXTEND]
  return KDCore.Changer = Changer;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color;
  Color = (function() {
    class Color {
      constructor(r1 = 255, g1 = 255, b1 = 255, a1 = 255) {
        this.r = r1;
        this.g = g1;
        this.b = b1;
        this.a = a1;
      }

      getLightestColor(lightLevel) {
        var bf, newColor, p;
        bf = 0.3 * this.R + 0.59 * this.G + 0.11 * this.B;
        p = 0;
        newColor = [0, 0, 0, 0];
        if (bf - lightLevel >= 0) {
          if (bf >= 0) {
            p = Math.abs(bf - lightLevel) / lightLevel;
          }
          newColor = this.ARR.map(function(c) {
            return c - (p * c);
          });
        } else {
          if (bf >= 0) {
            p = (lightLevel - bf) / (255 - bf);
          }
          newColor = this.ARR.map(function(c) {
            return [(255 - c) * p + c, 255].min();
          });
        }
        return new Color(newColor[0], newColor[1], newColor[2], newColor[3]);
      }

      clone() {
        return this.reAlpha(this.a);
      }

      reAlpha(newAlpha) {
        return new Color(this.r, this.g, this.b, newAlpha || 255);
      }

      static AddConstantColor(name, color) {
        color.toHex();
        color.toArray();
        color.toCSS();
        KDCore.SDK.setConstantToObject(Color, name, color);
      }

      toHex() {
        var b, g, r;
        if (this._colorHex != null) {
          return this._colorHex;
        }
        r = Math.floor(this.r).toString(16).padZero(2);
        g = Math.floor(this.g).toString(16).padZero(2);
        b = Math.floor(this.b).toString(16).padZero(2);
        return this._colorHex = '#' + r + g + b;
      }

      toArray() {
        if (this._colorArray != null) {
          return this._colorArray;
        }
        return this._colorArray = [this.r, this.g, this.b, this.a];
      }

      toCSS() {
        var na, nb, ng, nr;
        if (this._colorCss != null) {
          return this._colorCss;
        }
        nr = Math.round(this.r);
        ng = Math.round(this.g);
        nb = Math.round(this.b);
        na = this.a / 255;
        return this._colorCss = `rgba(${nr},${ng},${nb},${na})`;
      }

      toNumber() {
        return Number(this.toHex().replace("#", "0x"));
      }

      static Random() {
        var a, b, c;
        a = KDCore.SDK.rand(1, 254);
        b = KDCore.SDK.rand(1, 254);
        c = KDCore.SDK.rand(1, 254);
        return new Color(a, b, c, 255);
      }

      static FromHex(hexString) {
        var color, result;
        result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
        color = null;
        if (result != null) {
          color = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          };
        }
        if (color != null) {
          return new Color(color.r, color.g, color.b, 255);
        } else {
          return Color.NONE;
        }
      }

    };

    Object.defineProperties(Color.prototype, {
      R: {
        get: function() {
          return this.r;
        },
        configurable: true
      },
      G: {
        get: function() {
          return this.g;
        },
        configurable: true
      },
      B: {
        get: function() {
          return this.b;
        },
        configurable: true
      },
      A: {
        get: function() {
          return this.a;
        },
        configurable: true
      },
      ARR: {
        get: function() {
          return this.toArray();
        },
        configurable: true
      },
      CSS: {
        get: function() {
          return this.toCSS();
        },
        configurable: true
      },
      HEX: {
        get: function() {
          return this.toHex();
        },
        configurable: true
      },
      OX: {
        get: function() {
          return this.toNumber();
        },
        configurable: true
      }
    });

    Color.AddConstantColor('NONE', new Color(0, 0, 0, 0));

    Color.AddConstantColor('BLACK', new Color(0, 0, 0, 255));

    Color.AddConstantColor('WHITE', new Color(255, 255, 255, 255));

    Color.AddConstantColor('RED', new Color(255, 0, 0, 255));

    Color.AddConstantColor('GREEN', new Color(0, 255, 0, 255));

    Color.AddConstantColor('BLUE', new Color(0, 0, 255, 255));

    Color.AddConstantColor('AQUA', new Color(128, 255, 255, 255));

    Color.AddConstantColor('MAGENTA', new Color(128, 0, 128, 255));

    Color.AddConstantColor('YELLOW', new Color(255, 255, 0, 255));

    Color.AddConstantColor('ORANGE', new Color(255, 128, 0, 255));

    return Color;

  }).call(this);
  //@[EXTEND]
  return KDCore.Color = Color;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color, DevLog, __TMP_LOGS__;
  Color = KDCore.Color;
  __TMP_LOGS__ = [];
  DevLog = class DevLog {
    constructor(prefix = "") {
      this.prefix = prefix;
      this._isShow = typeof DEV !== 'undefined';
      this._color = Color.BLACK;
      this._backColor = Color.WHITE;
      __TMP_LOGS__.push(this);
    }

    on() {
      this._isShow = true;
      return this;
    }

    off() {
      this._isShow = false;
      return this;
    }

    applyRandomColors() {
      this.applyRandomWithoutBackgroundColors();
      this.setBackColor(Color.Random());
      return this;
    }

    applyRandomWithoutBackgroundColors() {
      this.setColor(Color.Random());
      return this;
    }

    setColor(color) {
      this._color = color;
      return this;
    }

    setBackColor(backColor) {
      this._backColor = backColor;
      return this;
    }

    applyLibraryColors() {
      this.setColors(new Color(22, 120, 138, 0), Color.BLACK);
      return this;
    }

    setColors(color, backColor) {
      this.setColor(color);
      this.setBackColor(backColor);
      return this;
    }

    applyExtensionColors() {
      this.setColors(new Color(22, 143, 137, 0), Color.BLACK.getLightestColor(60));
      return this;
    }

    applyWarningColors() {
      this.setColors(Color.ORANGE, Color.BLACK.getLightestColor(100));
      return this;
    }

    p(text) {
      if (!this._isShow) {
        return;
      }
      if (text == null) {
        console.log("");
      }
      this._printText(text);
    }

    _printText(text) {
      text = this.prefix + " : " + text;
      if (this._isUsingColor()) {
        return this._printTextWithColors(text);
      } else {
        return console.log(text);
      }
    }

    _isUsingColor() {
      return this._color !== Color.BLACK || this._backColor !== Color.WHITE;
    }

    _printTextWithColors(text) {
      var args;
      args = ['%c' + text, `color: ${this._color.HEX} ; background: ${this._backColor.HEX};`];
      return window.console.log.apply(console, args);
    }

    static CreateForLib(library) {
      var dlog;
      dlog = new DevLog(library.name);
      dlog.applyLibraryColors();
      return dlog;
    }

    static EnableAllLogs() {
      return __TMP_LOGS__.forEach(function(log) {
        return log.on();
      });
    }

  };
  //@[EXTEND]
  return KDCore.DevLog = DevLog;
});


// Generated by CoffeeScript 2.6.1
// * Класс для глобального события игры (НЕ события на карте)
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.GEvent = class GEvent {
    constructor(name) {
      this.name = name;
      this.clear();
    }

    addListener(listener, isSingle = false) {
      if (listener == null) {
        return;
      }
      if (isSingle === true) {
        this.listeners = [listener];
      } else {
        this.listeners.push(listener);
      }
    }

    removeListener(listener) {
      if (listener == null) {
        return;
      }
      return this.listener.delete(listener);
    }

    call() {
      var i, l, len, ref;
      ref = this.listeners;
      for (i = 0, len = ref.length; i < len; i++) {
        l = ref[i];
        l();
      }
    }

    clear() {
      return this.listeners = [];
    }

  };
});


// Generated by CoffeeScript 2.6.1
// * Менеджер для управления глобальными событиями игры (GEvent) (НЕ события на карте)
KDCore.registerLibraryToLoad(function() {
  var GEventsManager;
  // * Данный менеджер глобальный, т.е. с ним работают ВСЕ плагины, которые его используют!
  GEventsManager = function() {};
  (function() {
    var _;
    _ = GEventsManager;
    // * Существует ли событие с данным именем
    _.isEventExists = function(gEventName) {
      return this._getEventByName(gEventName) != null;
    };
    // * Получить список всех зарегестрированных событий (имён)
    _.getAllEvents = function() {
      if (this.events == null) {
        return [];
      }
      return this.events.map(function(ev) {
        return ev.name;
      });
    };
    // * Зарегестрировать событие (используется только имя события)
    _.register = function(gEventName) {
      if (this.events == null) {
        this.events = [];
      }
      this.events.push(new KDCore.GEvent(gEventName));
    };
    // * Подписаться на событие (имя события) и слушатель
    // * если isSingle == true - то у события может быть только один исполнитель
    _.subscribeFor = function(evName, listener, isSingle = false) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.addListener(listener, isSingle) : void 0;
    };
    // * Подписаться на событие (уникально) для объекта
    // * Т.е. при вызове этого метода ещё раз, если объект
    // * уже подписан на событие, ничего не будет (без дубликатов)
    //? ВНИМАНИЕ ! Если объект подписался через subscribeForX, то
    // выполнив clear по данному evName, он уже не подпишится!
    _.subscribeForX = function(context, evName, listener) {
      var e, key;
      try {
        key = "__kdCoreGEvent_" + evName;
        if (context[key] == null) {
          this.subscribeFor(evName, listener);
          return context[key] = true;
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    // * Вызвать событие (по имени)
    _.call = function(evName) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.call() : void 0;
    };
    _.clear = function(evName) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.clear() : void 0;
    };
    _._getEventByName = function(name) {
      if (!this.events) {
        return null;
      }
      return this.events.find(function(ev) {
        return ev.name === name;
      });
    };
  })();
  //@[EXTEND]
  return KDCore.GEventsManager = GEventsManager;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  //?[DEPRECATED]
  return KDCore.ParametersManager = class ParametersManager {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this._cache = {};
      this._parameters = PluginManager.getPluginParametersByRoot(this.pluginName);
    }

    isLoaded() {
      return (this._parameters != null) && this._parameters.hasOwnProperty(this.pluginName);
    }

    isHasParameter(name) {
      return this._parameters[name] != null;
    }

    getString(name) {
      return this._parameters[name];
    }

    convertField(object, fieldName) {
      var e;
      try {
        object[fieldName] = JSON.parse(object[fieldName] || 'false');
      } catch (error) {
        e = error;
        console.error('Error while convert field ' + e.name);
        object[fieldName] = false;
      }
      return object;
    }

    convertImage(object, fieldName) {
      return object[fieldName] = this.loadImage(object[fieldName]);
    }

    loadImage(filename, smooth) {
      var e, path;
      try {
        if (filename) {
          path = filename.split('/');
          filename = path.last();
          path = path.first() + '/';
          return ImageManager.loadBitmap('img/' + path, filename, 0, smooth || true);
        } else {
          return ImageManager.loadEmptyBitmap();
        }
      } catch (error) {
        e = error;
        console.error(e);
        return ImageManager.loadEmptyBitmap();
      }
    }

    getFromCacheOrInit(name, func) {
      var object;
      if (!this.isInCache(name)) {
        if (func != null) {
          object = func.call(this);
          this.putInCache(name, object);
        }
      }
      return this.getFromCache(name);
    }

    isInCache(name) {
      return this._cache.hasOwnProperty(name);
    }

    putInCache(name, object) {
      return this._cache[name] = object;
    }

    getFromCache(name) {
      return this._cache[name];
    }

    getNumber(name) {
      var number;
      number = this.getObject(name);
      if (KDCore.SDK.isInt(number)) {
        return number;
      }
      return 0;
    }

    getObject(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || '{}');
      } else {
        return {};
      }
    }

    getBoolean(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || false);
      } else {
        return false;
      }
    }

    getBooleanFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getBooleanFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getNumberFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getNumberFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getStringFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getStringFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getBooleanFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getBoolean(name);
      });
    }

    getNumberFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getNumber(name);
      });
    }

    getStringFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getString(name);
      });
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.ParamLoader = class ParamLoader {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this.paramsRaw = PluginManager.getPluginParametersByRoot(this.pluginName);
      this.params = this.parseParameters(this.paramsRaw);
    }

    parseParameters(paramSet) {
      var clearKey, key, params, typeKey, value;
      params = {};
      for (key in paramSet) {
        value = paramSet[key];
        KDCore.__ppNameToParseNext = key;
        clearKey = this.parseKey(key);
        typeKey = this.parseKeyType(key);
        params[clearKey] = this.parseParamItem(typeKey, value);
      }
      return params;
    }

    parseKey(keyRaw) {
      return keyRaw.split(":")[0];
    }

    parseKeyType(keyRaw) {
      return keyRaw.split(":")[1];
    }

    writeDetailedError() {
      var e;
      try {
        if (!String.any(KDCore.__ppNameToParseNext)) {
          return;
        }
        return console.warn("Please, check Plugin Parameter " + KDCore.__ppNameToParseNext + " in plugin " + this.pluginName);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    }

    // * Проверка, загружены ли параметры плагина
    isLoaded() {
      return (this.paramsRaw != null) && this.paramsRaw.hasOwnProperty(this.pluginName);
    }

    // * Имя параметра без ключа
    isHasParameter(paramName) {
      return this.params[paramName] != null;
    }

    
      // * Возвращает значение параметра (def - по умолчанию, если не найден)
    getParam(paramName, def) {
      var value;
      if (this.isHasParameter(paramName)) {
        value = this.params[paramName];
        if (value != null) {
          return value;
        }
      }
      return def;
    }

    // * Данные ключи должны идти после названия параметра через :
    // * Пример: @param ShowDelay:int, @param TestBool:bool
    // * Текстовые параметры, которые надо вернуть как есть, можно без типа (text, file, combo, ...)
    parseParamItem(type, item) {
      var e;
      if (type == null) {
        return item;
      }
      try {
        switch (type) {
          case "int":
          case "i":
            return Number(item);
          case "intA":
            return this.parseArray(item, "int");
          case "bool":
          case "b":
          case "e":
            return eval(item);
          case "struct":
          case "s":
            return this.parseStruct(item);
          case "structA":
            return this.parseStructArray(item);
          case "str":
            return item;
          case "strA":
            return this.parseArray(item, "str");
          case "note":
            return this.parseNote(item);
          case "css":
            return item.toCss();
          case "color":
            return KDCore.Color.FromHex(item);
          case "json":
          case "j":
            return this.parseJson(item);
          case "jA":
            return this.parseArray(item, 'json');
          default:
            return item;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
        return item;
      }
    }

    parseArray(items, type) {
      var e, elements, i, len, p, parsed;
      try {
        elements = [];
        parsed = JsonEx.parse(items);
        for (i = 0, len = parsed.length; i < len; i++) {
          p = parsed[i];
          try {
            elements.push(this.parseParamItem(type, p));
          } catch (error) {
            e = error;
            console.warn(e);
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
      }
      return elements;
    }

    parseStruct(item) {
      var e, parsed;
      try {
        if (item == null) {
          return null;
        }
        if (!String.any(item)) {
          return null;
        }
        parsed = JsonEx.parse(item);
        if (parsed != null) {
          return this.parseParameters(parsed);
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
      }
      return null;
    }

    parseStructArray(items) {
      var e, elements, i, len, p, parsed;
      try {
        elements = [];
        parsed = JsonEx.parse(items);
        for (i = 0, len = parsed.length; i < len; i++) {
          p = parsed[i];
          try {
            elements.push(this.parseStruct(p));
          } catch (error) {
            e = error;
            console.warn(e);
            this.writeDetailedError();
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
      }
      return elements;
    }

    parseNote(item) {
      var e, parsed;
      try {
        parsed = JsonEx.parse(item);
        if (parsed != null) {
          return parsed;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
      }
      return item;
    }

    parseJson(item) {
      var cx, e, element, elements, i, json, key, len, parsed, value;
      try {
        json = {};
        parsed = JsonEx.parse(item);
        elements = parsed.split('\n');
        for (i = 0, len = elements.length; i < len; i++) {
          element = elements[i];
          cx = "{" + element + "}";
          try {
            item = JsonEx.parse(cx);
            for (key in item) {
              value = item[key];
              json[key] = value;
            }
          } catch (error) {
            e = error;
            KDCore.warning("Parameter " + element + " have syntax errors, ignored");
          }
        }
        return json;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        this.writeDetailedError();
        return null; // * Чтобы default value был возвращён
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Point;
  Point = (function() {
    class Point {
      constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
      }

      clone() {
        return new Point(this._x, this._y);
      }

      toString() {
        return "[" + this._x + " ; " + this._y + "]";
      }

      isSame(anotherPoint) {
        return this.x === anotherPoint.x && this.y === anotherPoint.y;
      }

      convertToCanvas() {
        return new Point(Graphics.pageToCanvasX(this._x), Graphics.pageToCanvasY(this._y));
      }

      convertToMap() {
        return new Point($gameMap.canvasToMapX(this._x), $gameMap.canvasToMapY(this._y));
      }

      convertToScreen() {
        return new Point(this.screenX(), this.screenY());
      }

      screenX() {
        var t, tw;
        t = $gameMap.adjustX(this._x);
        tw = $gameMap.tileWidth();
        return Math.round(t * tw + tw / 2);
      }

      screenY() {
        var t, th;
        t = $gameMap.adjustY(this._y);
        th = $gameMap.tileHeight();
        return Math.round(t * th + th);
      }

      round() {
        return new Point(Math.round(this._x), Math.round(this._y));
      }

      floor() {
        return new Point(Math.floor(this._x), Math.floor(this._y));
      }

      mapPointOnScreen() {
        var nx, ny;
        nx = (this._x * $gameMap.tileWidth()) - ($gameMap.displayX() * $gameMap.tileWidth());
        ny = (this._y * $gameMap.tileHeight()) - ($gameMap.displayY() * $gameMap.tileHeight());
        return new Point(nx, ny);
      }

      multiplyBy(val) {
        return new Point(this._x * val, this._y * val);
      }

      simple() {
        return new PIXI.Point(this.x, this.y);
      }

      delta(point) {
        var dx, dy;
        dx = point.x - this._x;
        dy = point.y - this._y;
        return new KDCore.Point(dx, dy);
      }

      static _getEmpty() {
        if (Point._emptyPoint == null) {
          Point._emptyPoint = new Point(0, 0);
        }
        return Point._emptyPoint;
      }

    };

    Object.defineProperties(Point.prototype, {
      x: {
        get: function() {
          return this._x;
        },
        configurable: true
      },
      y: {
        get: function() {
          return this._y;
        },
        configurable: true
      }
    });

    Object.defineProperties(Point, {
      Empty: {
        get: function() {
          return Point._getEmpty();
        },
        configurable: false
      }
    });

    Array.prototype.toPoint = function() {
      return new Point(this[0], this[1]);
    };

    Object.defineProperty(Array.prototype, "toPoint", {
      enumerable: false
    });

    Sprite.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    Game_CharacterBase.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    return Point;

  }).call(this);
  //@[EXTEND]
  return KDCore.Point = Point;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return KDCore.Sprite = (function(superClass) {
    //@[AUTO EXTEND]
    class Sprite extends superClass {
      constructor() {
        super(...arguments);
      }

      appear(step, delay = 0) {
        this.opacity = 0;
        this._opChanger = KDCore.Changer.CreateForOpacityUp(this, step, () => {
          this._opChanger = null;
          return this._updateOpChanger = function() {}; // * EMPTY
        }, false); // * Not autostart for Delay
        if (delay > 0) {
          this._opChanger.delay(delay);
        }
        this._opChanger.start();
        this._updateOpChanger = () => {
          var ref;
          return (ref = this._opChanger) != null ? ref.update() : void 0;
        };
      }

      disapper(step, delay = 0) {
        this._opChanger = KDCore.Changer.CreateForOpacityDown(this, step, () => {
          this._opChanger = null;
          return this._updateOpChanger = function() {}; // * EMPTY
        }, false); // * Not autostart for Delay
        if (delay > 0) {
          this._opChanger.delay(delay);
        }
        this._opChanger.start();
        this._updateOpChanger = () => {
          var ref;
          return (ref = this._opChanger) != null ? ref.update() : void 0;
        };
      }

      moveWithAnimation(dx, dy, duration = 30, easingType = 2) {
        var e;
        try {
          this._moveAnimationItem = new Game_Picture();
          this._moveAnimationItem._x = this.x;
          this._moveAnimationItem._y = this.y;
          this._moveAnimationItem.move(0, this.x + dx, this.y + dy, 1, 1, 255, 0, duration, easingType);
          this.updateMovingAnimation = this.updateMovingAnimationBody;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
      }

      assignTooltip(content, params) {
        if (this._tooltip != null) {
          this.removeChild(this._tooltip);
        }
        this._tooltip = new KDCore.UI.Sprite_UITooltip(params);
        this._tooltip.addContent(content);
        this.updateTooltip = this.updateTooltipBody;
      }

      destroyTooltip() {
        if (this._tooltip == null) {
          return;
        }
        this.hideTooltip();
        this.removeChild(this._tooltip);
        this._tooltip = null;
        return this.updateTooltip = function() {}; // * EMPTY
      }

      showTooltip() {
        if (this._tooltip == null) {
          return;
        }
        // * Position 0, 0, becouse cursorRelative by default
        this._tooltip.activateTooltip(0, 0, this);
      }

      hideTooltip() {
        if (this._tooltip == null) {
          return;
        }
        this._tooltip.deactivateTooltip();
      }

      //@[DYNAMIC]
      updateTooltip() {} // * EMPTY

      updateTooltipBody() {
        if (this.isUnderMouse()) {
          if (this._tooltip.isTooltipActive()) {

          } else {
            if (this.isReady() && this.visible === true && this.opacity >= 255) {
              return this.showTooltip();
            }
          }
        } else {
          if (this._tooltip.isTooltipActive()) {
            return this.hideTooltip();
          }
        }
      }

      //@[DYNAMIC]
      updateMovingAnimation() {} // * EMPTY

      updateMovingAnimationBody() {
        var e;
        try {
          if (this._moveAnimationItem == null) {
            return;
          }
          this._moveAnimationItem.update();
          this.x = this._moveAnimationItem._x;
          this.y = this._moveAnimationItem._y;
          if (this._moveAnimationItem._duration <= 0) {
            this._moveAnimationItem = null;
            this.updateMovingAnimation = function() {};
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          this.updateMovingAnimation = function() {};
        }
      }

      update() {
        super.update();
        this._updateOpChanger();
        this.updateTooltip();
        if (this.updateMovingAnimation != null) {
          this.updateMovingAnimation();
        }
      }

      //@[DYNAMIC]
      _updateOpChanger() {} // * EMPTY

      b() {
        return this.bitmap;
      }

      clear() {
        return this.bitmap.clear();
      }

      add(child) {
        return this.addChild(child);
      }

      bNew(w, h) {
        if (h == null) {
          h = w;
        }
        return this.bitmap = new Bitmap(w, h);
      }

      bImg(filename, sourceFolder) {
        var getterFunc;
        getterFunc = function(filename) {
          return ImageManager.loadPicture(filename);
        };
        if (sourceFolder != null) {
          getterFunc = function(filename) {
            return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
          };
        }
        return this.bitmap = getterFunc(filename);
      }

      onReady(method) {
        if (method != null) {
          return this.bitmap.addLoadListener(method);
        }
      }

      drawText() {
        return this.bitmap.drawText(...arguments);
      }

      drawTextFull(text, position = "center") {
        if (this.textSettingsPosition != null) {
          position = this.textSettingsPosition;
        }
        return this.bitmap.drawTextFull(text, position);
      }

      //?DEPRECATED
      drawTextWithSettings(text) {
        this.clear();
        this.drawTextFull(text, this.textSettingsPosition);
      }

      //? x, y, icon, size
      drawIcon() {
        return this.bitmap.drawIcon(...arguments);
      }

      moveByJson(settings) {
        var pos;
        pos = KDCore.Utils.getPositionPointFromJSON(settings);
        return this.move(pos.x, pos.y);
      }

      applyTextSettingsByJson(sprite, settings) {
        this.applyTextSettingsByExtraSettings(sprite, settings.text);
      }

      applyTextSettingsByExtraSettings(sprite, s) {
        sprite.move(s.marginX, s.marginY);
        sprite.b().fontSize = s.fontSize;
        sprite.b().textColor = KDCore.Color.FromHex(s.textColor).CSS;
        sprite.b().outlineWidth = s.outlineWidth;
        if (s.outlineColor != null) {
          sprite.b().outlineColor = KDCore.Color.FromHex(s.outlineColor).CSS;
        }
        if (s.fontFace != null) {
          sprite.b().fontFace = s.fontFace;
        }
        sprite.b().fontItalic = s.fontItalic;
        sprite.visible = s.visible;
      }

      isReady() {
        var i, j, ref;
        if (this.bitmap != null) {
          if (!this.bitmap.isReady()) {
            return false;
          }
        }
        for (i = j = 0, ref = this.children.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
          if (!this.children[i].bitmap.isReady()) {
            return false;
          }
        }
        return true;
      }

      isCheckAlpha() {
        return false;
      }

      inPosition(point) {
        var e, gx, gy, pixel, result, x, y;
        result = this.isContainsPoint(point);
        if (result && this.isCheckAlpha()) {
          try {
            ({x, y} = point);
            gx = KDCore.SDK.toGlobalCoord(this, 'x');
            gy = KDCore.SDK.toGlobalCoord(this, 'y');
            pixel = this.bitmap.getAlphaPixel(x - gx, y - gy);
            result = pixel > 100;
          } catch (error) {
            e = error;
            KDCore.warning(e);
            result = true; // * ignor Alpha if error
          }
        }
        return result;
      }

      isUnderMouse() {
        return this.inPosition(TouchInput);
      }

      // * Из параметров плагина
      applyFontParam(font) {
        var b;
        if (font == null) {
          return;
        }
        b = this.b();
        if (font.size != null) {
          b.fontSize = font.size;
        }
        if (!String.isNullOrEmpty(font.face)) {
          b.fontFace = font.face;
        }
        if (font.italic != null) {
          b.fontItalic = font.italic;
        }
      }

      applyOutlineParam(outline) {
        var b;
        if (outline == null) {
          return;
        }
        b = this.b();
        if (outline.width != null) {
          b.outlineWidth = outline.width;
        }
        if (!String.isNullOrEmpty(outline.color)) {
          b.outlineColor = outline.color;
        }
      }

      static FromImg(filename, sourceFolder) {
        var s;
        s = new KDCore.Sprite();
        s.bImg(filename, sourceFolder);
        return s;
      }

      static FromBitmap(w, h) {
        var s;
        s = new KDCore.Sprite();
        s.bNew(w, h);
        return s;
      }

      static FromTextSettings(settings) {
        var s;
        s = KDCore.Sprite.FromBitmap(settings.textBoxWidth, settings.textBoxHeight);
        s.applyTextSettingsByExtraSettings(s, settings);
        s.textSettingsPosition = settings.position;
        return s;
      }

      // * Загрузчик из параметров плагина (безопасный)
      static FromParams(pluginParams) {
        var e, h, margins, s, size, w;
        try {
          size = pluginParams.size;
          ({w, h} = size);
          try {
            if (String.any(w)) {
              if (isFinite(w)) {
                w = Number(w);
              } else {
                w = eval(w);
              }
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            w = 100;
          }
          try {
            if (String.any(h)) {
              if (isFinite(h)) {
                h = Number(h);
              } else {
                h = eval(h);
              }
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            h = 100;
          }
          s = KDCore.Sprite.FromBitmap(w, h);
          s.textSettingsPosition = pluginParams.alignment;
          margins = pluginParams.margins;
          if (margins != null) {
            s.move(margins.x, margins.y);
          }
          s.applyFontParam(pluginParams.font);
          s.applyOutlineParam(pluginParams.outline);
          if (!String.isNullOrEmpty(pluginParams.textColor)) {
            s.b().textColor = pluginParams.textColor;
          }
          if (pluginParams.visible != null) {
            s.visible = pluginParams.visible;
          }
          return s;
        } catch (error) {
          e = error;
          console.warn('Something wrong with Text Settings!', e);
          return KDCore.Sprite.FromBitmap(60, 30);
        }
      }

    };

    return Sprite;

  }).call(this, Sprite);
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.TimedUpdate = class TimedUpdate {
    constructor(interval, method) {
      this.interval = interval;
      this.method = method;
      this._timer = 0;
      this._once = false;
    }

    update() {
      if (this.interval == null) {
        return;
      }
      if (this._timer++ >= this.interval) {
        this.call();
        this._timer = 0;
        if (this._once === true) {
          return this.stop();
        }
      }
    }

    once() {
      return this._once = true;
    }

    onUpdate(method) {
      this.method = method;
    }

    stop() {
      return this.interval = null;
    }

    isAlive() {
      return this.interval != null;
    }

    // * Рандомизировать интервал @interval (-min, +max)
    applyTimeRange(min, max) {
      var value;
      if (!this.isAlive()) {
        return;
      }
      value = KDCore.SDK.rand(min, max);
      return this.interval += value;
    }

    call() {
      if (this.method != null) {
        return this.method();
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  
    // * Button (Sprite_XButton)

    //@[AUTO EXTEND]
  //?DEPRECATED
  return KDCore.Button = class Button extends Sprite {
    constructor() {
      super();
      this._mouseIn = false;
      this._touching = false;
      this._slowUpdateActive = false;
      this._localMode = false;
      this._images = [];
      this._checkAlpha = false;
      this._textSprite = null;
      this._textPosition = 0;
      this._override = false; // * TouchClick in game messages not work anymore if TRUE
      this._clickHandlers = [];
      this._manualHided = false;
      this._manualDisabled = false;
      this._condition = null; // * Условие для Visible
      this._condition2 = null; // * Условие для Enable \ Disable
      this._disabled = false;
      this._infoData = null;
      this._isNeedShowText = false;
      return;
    }

    isMouseInButton() {
      return this._mouseIn === true;
    }

    isActive() {
      return this.visible === true;
    }

    activateSlowUpdate() {
      return this._slowUpdateActive = true;
    }

    setLocalMode() {
      this._realX = this.x;
      this._realY = this.y;
      return this._localMode = true;
    }

    setAlphaMode() {
      return this._checkAlpha = true;
    }

    // * above, below
    setTextPosition(position) {
      return this._textPosition = position;
    }

    setHelpText(text, size) {
      return this._createText(text, size);
    }

    setInfoData(data) {
      return this._infoData = data;
    }

    setOverrideMode() {
      return this._override = true;
    }

    isOverride() {
      return this._override === true && this.isActive() && this.touchInButton();
    }

    isDisabled() {
      return this._disabled === true;
    }

    isEnabled() {
      return !this.isDisabled();
    }

    isNeedShowText() {
      return this._isNeedShowText === true;
    }

    addClickHandler(method) {
      return this._clickHandlers.push(method);
    }

    clearClickHandlers() {
      return this._clickHandlers = [];
    }

    isLocalMode() {
      return this._localMode === true;
    }

    setCondition(method) {
      return this._condition = method;
    }

    setConditionForDisable(method) {
      return this._condition2 = method;
    }

    getInfoData() {
      return this._infoData;
    }

    simulateClick() { //?NEW
      return this.applyClickedState();
    }

    simulateClickManual() { //?NEW
      this.simulateClick();
      return setTimeout((() => {
        try {
          return this.applyNormalState();
        } catch (error) {

        }
      }), 50);
    }

    prepare() { //?NEW
      return this.slowUpdate();
    }

    realX() {
      if (this.isLocalMode()) {
        return this._realX;
      } else {
        return this.x;
      }
    }

    realY() {
      if (this.isLocalMode()) {
        return this._realY;
      } else {
        return this.y;
      }
    }

    show() {
      this.visible = true;
      return this._manualHided = false;
    }

    hide() {
      this.visible = false;
      return this._manualHided = true;
    }

    disable() {
      this._disabled = true;
      this._manualDisabled = true;
      this.refreshEnDisState();
      return this._mouseIn = false;
    }

    enable() {
      this._disabled = false;
      this._manualDisabled = false;
      return this.refreshEnDisState();
    }

    update() {
      super.update();
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseClick();
      this.updatePosition();
      if (!this._slowUpdateActive) {
        this.slowUpdate();
      }
      return this.updateComplexTextVisible();
    }

    slowUpdate() {
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseTracking();
      this.updateConditionForVisible();
      return this.updateConditionForEnabling();
    }

    updateMouseTracking() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.cursorInButton()) {
        this._onMouseEnter();
        return this._mouseIn = true;
      } else {
        this._onMouseLeave();
        return this._mouseIn = false;
      }
    }

    // * In MZ TouchInput always have X,Y
    cursorInButton() {
      return this.touchInButton();
    }

    xyInButton(x, y) {
      var inRect, rect, rx, ry;
      rx = KDCore.SDK.toGlobalCoord(this, 'x');
      ry = KDCore.SDK.toGlobalCoord(this, 'y');
      rect = new PIXI.Rectangle(rx, ry, this._realWidth(), this._realHeight());
      inRect = rect.contains(x, y);
      if (inRect === true && this._checkAlpha === true) {
        return this._checkAlphaPixel(x - rx, y - ry);
      } else {
        return inRect;
      }
    }

    _realWidth() {
      if (this._hasImage()) {
        return this._mainImage().width;
      } else {
        return this.width;
      }
    }

    _hasImage() {
      return this._mainImage() != null;
    }

    _mainImage() {
      return this._images[0];
    }

    _realHeight() {
      if (this._hasImage()) {
        return this._mainImage().height;
      } else {
        return this.height;
      }
    }

    _checkAlphaPixel(x, y) {
      var pixel;
      pixel = this._hasImage() ? this._mainImage().bitmap.getAlphaPixel(x, y) : this.bitmap.getAlphaPixel(x, y);
      return pixel >= 200;
    }

    _onMouseEnter() {
      if (this._mouseIn === true) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyCoverState();
      }
      this._showText();
      if (this.getInfoData() != null) {
        return this._startComplexTimer();
      }
    }

    _onMouseLeave() {
      if (this._mouseIn === false) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyNormalState();
      }
      this._hideText();
      return this._stopComplexTimer();
    }

    _showText() {
      if (this._textSprite == null) {
        return;
      }
      this._updateTextPosition();
      return this._textSprite.visible = true;
    }

    _hideText() {
      if (this._textSprite == null) {
        return;
      }
      return this._textSprite.visible = false;
    }

    _startComplexTimer() {
      this._stopComplexTimer();
      return this._cTimer = setTimeout((() => {
        if (this._mouseIn === true) {
          return this._isNeedShowText = true;
        }
      }), 1000);
    }

    _stopComplexTimer() {
      if (this._cTimer != null) {
        clearTimeout(this._cTimer);
      }
      return this._isNeedShowText = false;
    }

    updateMouseClick() {
      if (!this.isActive()) {
        this._unTouch();
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.touchInButton()) {
        this._touching = true;
        this.applyClickedState();
      }
      if (this._touching === true) {
        if (TouchInput.isReleased() || !this.touchInButton()) {
          this._unTouch();
          if (TouchInput.isReleased()) {
            return this.callClickHandler();
          }
        }
      }
    }

    _unTouch() {
      this._touching = false;
      if (this.touchInButton()) {
        return this.applyCoverState();
      } else {
        return this.applyNormalState();
      }
    }

    touchInButton() {
      return this.xyInButton(TouchInput.x, TouchInput.y);
    }

    callClickHandler() {
      if (this._clickHandlers.length > 0) {
        return this._clickHandlers.forEach(function(method) {
          return method();
        });
      }
    }

    updatePosition() {
      var p;
      if (!this._localMode) {
        return;
      }
      p = new KDCore.Point(this._realX, this._realY);
      return this.move(p.screenX(), p.screenY());
    }

    updateConditionForVisible() {
      var result;
      if (this._condition == null) {
        return;
      }
      if (this._manualHided === true) {
        return;
      }
      try {
        result = this._condition();
        return this.visible = !result;
      } catch (error) {
        console.warn('wrong condition in button');
        return this.visible = true;
      }
    }

    updateConditionForEnabling() {
      if (!this._condition2) {
        return;
      }
      if (this._manualDisabled === true) {
        return;
      }
      try {
        this._disabled = this._condition2();
        return this.refreshEnDisState();
      } catch (error) {
        console.warn('wrong condition in button for enable state');
        return this.disable();
      }
    }

    setButtonImages(img1, img2, img3, img4) {
      if (this._images != null) {
        this._images.forEach(function(img) {
          if (img != null) {
            return img.parent.removeChild(img);
          }
        });
      }
      this._images = [new Sprite(img1), img2 != null ? new Sprite(img2) : void 0, img3 != null ? new Sprite(img3) : void 0, img4 != null ? new Sprite(img4) : void 0];
      this._images.forEach((img) => {
        if (img != null) {
          return this.addChild(img);
        }
      });
      return this.applyNormalState();
    }

    applyNormalState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[0]) != null ? ref.visible = true : void 0;
    }

    refreshImages() {
      return this._images.forEach(function(img) {
        return img != null ? img.visible = false : void 0;
      });
    }

    applyCoverState() {
      this.refreshImages();
      if (this._images[1] != null) {
        return this._images[1].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    applyClickedState() {
      this.refreshImages();
      if (this._images[2] != null) {
        return this._images[2].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    _createText(text, size) {
      var h, w;
      if (this._textSprite) {
        this.removeChild(this._textSprite);
      }
      w = Math.round(((size / 10) + 1) * 5 * text.length);
      h = size + 4;
      this._textSprite = new Sprite(new Bitmap(w, h));
      this._textSprite.bitmap.fontSize = size;
      this._textSprite.bitmap.drawText(text, 0, h / 2, w, 1, 'center');
      this._textSprite.visible = false;
      return this.addChild(this._textSprite);
    }

    _updateTextPosition() {
      var nx, ny;
      if (!this._textSprite) {
        return;
      }
      nx = this._realWidth() / 2 - this._textSprite.width / 2;
      if (this._textPosition === 0) {
        ny = -this._textSprite.height;
      } else {
        ny = this._realHeight() + this._textSprite.height / 2;
      }
      return this._textSprite.move(nx, ny);
    }

    applyDisableState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[3]) != null ? ref.visible = true : void 0;
    }

    refreshEnDisState() {
      if (this.isDisabled()) {
        this.applyDisableState();
        return this._hideText();
      } else {
        if (this._mouseIn === false) {
          return this.applyNormalState();
        }
      }
    }

    //else
    //    do @applyCoverState
    updateComplexTextVisible() {}

    applyScale(mod) {
      var i, img, len, ref;
      ref = this._images;
      for (i = 0, len = ref.length; i < len; i++) {
        img = ref[i];
        if (img != null) {
          img.scale.x = mod;
          img.scale.y = mod;
        }
      }
    }

    static FromSet(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img0, img0);
      return button;
    }

    static FromSetFull(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1, img2, img3;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      img2 = getterFunc(imgName + "_02");
      img3 = getterFunc(imgName + "_03");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img2, img3);
      return button;
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_ButtonsGroup;
  // * Класс для реализации набора кнопок переключателей (Tabs)
  // * Когда только одна кнопка может быть нажата (выбрана)

    //rev 07.10.21
  Sprite_ButtonsGroup = class Sprite_ButtonsGroup extends KDCore.Sprite {
    // buttonsArray = [
    //       {image: NAME, position: [X,Y]}, ...
    //    ]
    constructor(buttonsArray, activeIndex, clickCallback) {
      var button, i, len;
      super();
      this.clickCallback = clickCallback;
      this._buttons = [];
      for (i = 0, len = buttonsArray.length; i < len; i++) {
        button = buttonsArray[i];
        this._createButton(button);
      }
      this._onButtonClick(activeIndex);
      return;
    }

    getSelectedIndex() {
      return this._buttons.findIndex(function(btn) {
        return !btn.isEnabled();
      });
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Sprite_ButtonsGroup.prototype;
    _._createButton = function({image, position}) {
      var btn, index, method;
      // * Так как кнопки работают как переключатели, то 03 должен быть всегда
      index = this._buttons.length;
      btn = new KDCore.ButtonM(image, true, "Alpha");
      btn.move(position);
      method = () => {
        return this._onButtonClick(index);
      };
      btn.addClickHandler(method);
      this._buttons.push(btn);
      this.add(btn);
    };
    _._onButtonClick = function(index = 0) {
      var ref;
      this._resetAllButtons();
      if ((ref = this._buttons[index]) != null) {
        ref.disable(); // * Нажата
      }
      if (this.clickCallback != null) {
        this.clickCallback(index);
      }
    };
    _._resetAllButtons = function() {
      var btn, i, len, ref;
      ref = this._buttons;
      for (i = 0, len = ref.length; i < len; i++) {
        btn = ref[i];
        if (btn != null) {
          btn.enable();
        }
      }
    };
  })();
  // ■ END PRIVATE
  //---------------------------------------------------------------------------
  return KDCore.Sprite_ButtonsGroup = Sprite_ButtonsGroup;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_ButtonsGroupHandler;
  // * Класс для реализации набора кнопок переключателей (Tabs)
  // * Когда только одна кнопка может быть нажата (выбрана)
  // * В отличии от Sprite_ButtonsGroup, принимает массив
  // * уже созданных кнопок

    //rev 10.07.22
  Sprite_ButtonsGroupHandler = class Sprite_ButtonsGroupHandler extends KDCore.Sprite {
    // _buttons = [Button object with enable, disable, isEnable, addClickHandler methods]
    constructor(_buttons, clickCallback, activeIndex = 0) {
      var button, i, index, len, ref;
      super();
      this._buttons = _buttons;
      this.clickCallback = clickCallback;
      ref = this._buttons;
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        button = ref[index];
        this._processButton(button, index);
      }
      this._onButtonClick(activeIndex);
      return;
    }

    getSelectedIndex() {
      return this._buttons.findIndex(function(btn) {
        return !btn.isEnabled();
      });
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Sprite_ButtonsGroupHandler.prototype;
    _._processButton = function(btn, index) {
      var method;
      // * Так как кнопки работают как переключатели, то 03 должен быть всегда
      method = () => {
        return this._onButtonClick(index);
      };
      btn.addClickHandler(method);
      this.add(btn);
    };
    _._onButtonClick = function(index = 0) {
      var ref;
      this._resetAllButtons();
      if ((ref = this._buttons[index]) != null) {
        ref.disable(); // * Нажата
      }
      if (this.clickCallback != null) {
        this.clickCallback(index);
      }
    };
    _._resetAllButtons = function() {
      var btn, i, len, ref;
      ref = this._buttons;
      for (i = 0, len = ref.length; i < len; i++) {
        btn = ref[i];
        if (btn != null) {
          btn.enable();
        }
      }
    };
  })();
  // ■ END PRIVATE
  //---------------------------------------------------------------------------
  return KDCore.Sprite_ButtonsGroupHandler = Sprite_ButtonsGroupHandler;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad((function() {
  var Sprite_TilingFrame;
  Sprite_TilingFrame = class Sprite_TilingFrame extends KDCore.Sprite {
    constructor(width, height, skinBitmap) {
      super();
      this.width = width;
      this.height = height;
      this.skinBitmap = skinBitmap;
      this._createParts();
      this._refreshAll();
    }

    _createParts() {
      var i, j;
      this.backSprite = new Sprite();
      this.addChild(this.backSprite);
      this.content = new Sprite();
      this.addChild(this.content);
      this._outFrame = new Sprite();
      for (i = j = 0; j < 8; i = ++j) {
        this._outFrame.addChild(new Sprite());
      }
      return this.addChild(this._outFrame);
    }

    // * Отступ, чтобы за рамку не выходить
    _fillPadding() {
      return 2;
    }

    // * Размер частей на картинке
    _fillImagePartWidth() {
      return 96;
    }

    _fillImagePartHeight() {
      return 96;
    }

    // * Толщина рамки
    _frameThickness() {
      return 12;
    }

    _refreshAll() {
      this._refreshBack();
      return this._refreshTFrame();
    }

    _refreshBack() {
      var fh, fw, h, m, sprite, w;
      m = this._fillPadding();
      w = Math.max(0, this.width - m * 2);
      h = Math.max(0, this.height - m * 2);
      sprite = this.backSprite;
      sprite.bitmap = this.skinBitmap;
      // * Координаты фона из картинки
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      sprite.setFrame(0, 0, fw, fh);
      sprite.move(m, m);
      sprite.scale.x = w / fw;
      return sprite.scale.y = h / fh;
    }

    _refreshTFrame() {
      var drect, fh, fw, j, len, m, ref, spr, srect;
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      // * Положение назначения
      drect = {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      };
      // * Координаты рамки на картинке
      srect = {
        x: fw,
        y: 0,
        width: fw,
        height: fh
      };
      m = this._frameThickness(); // * Толщина
      ref = this._outFrame.children;
      for (j = 0, len = ref.length; j < len; j++) {
        spr = ref[j];
        spr.bitmap = this.skinBitmap;
      }
      if (KDCore.isMZ()) {
        Window.prototype._setRectPartsGeometry.call(this, this._outFrame, srect, drect, m);
      } else {
        this._setRectPartsGeometry(this._outFrame, srect, drect, m);
      }
    }

    // * Этот метод существует в MZ, но нет в MV
    //? From MZ
    _setRectPartsGeometry(sprite, srect, drect, m) {
      var child, children, dh, dmh, dmw, dw, dx, dy, j, len, sh, smh, smw, sw, sx, sy;
      sx = srect.x;
      sy = srect.y;
      sw = srect.width;
      sh = srect.height;
      dx = drect.x;
      dy = drect.y;
      dw = drect.width;
      dh = drect.height;
      smw = sw - m * 2;
      smh = sh - m * 2;
      dmw = dw - m * 2;
      dmh = dh - m * 2;
      children = sprite.children;
      sprite.setFrame(0, 0, dw, dh);
      sprite.move(dx, dy);
      // corner
      children[0].setFrame(sx, sy, m, m);
      children[1].setFrame(sx + sw - m, sy, m, m);
      children[2].setFrame(sx, sy + sw - m, m, m);
      children[3].setFrame(sx + sw - m, sy + sw - m, m, m);
      children[0].move(0, 0);
      children[1].move(dw - m, 0);
      children[2].move(0, dh - m);
      children[3].move(dw - m, dh - m);
      // edge
      children[4].move(m, 0);
      children[5].move(m, dh - m);
      children[6].move(0, m);
      children[7].move(dw - m, m);
      children[4].setFrame(sx + m, sy, smw, m);
      children[5].setFrame(sx + m, sy + sw - m, smw, m);
      children[6].setFrame(sx, sy + m, m, smh);
      children[7].setFrame(sx + sw - m, sy + m, m, smh);
      children[4].scale.x = dmw / smw;
      children[5].scale.x = dmw / smw;
      children[6].scale.y = dmh / smh;
      children[7].scale.y = dmh / smh;
      // center
      if (children[8] != null) {
        children[8].setFrame(sx + m, sy + m, smw, smh);
        children[8].move(m, m);
        children[8].scale.x = dmw / smw;
        children[8].scale.y = dmh / smh;
      }
      for (j = 0, len = children.length; j < len; j++) {
        child = children[j];
        child.visible = dw > 0 && dh > 0;
      }
    }

  };
  return KDCore.Sprite_TilingFrame = Sprite_TilingFrame;
}));


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Window_ExtTextLineBase;
  // * Данное окно используется как основа для Sprite_UITextExt
  //rev 07.10.21
  Window_ExtTextLineBase = class Window_ExtTextLineBase extends Window_Base {
    constructor(rect, fontSettings) {
      super(rect);
      this.fontSettings = fontSettings;
      this.createContents();
      // * Всегда прозрачное окно
      this.setBackgroundType(2);
    }

    // * Нет отступов
    updatePadding() {
      return this.padding = 0;
    }

    // * Нет отступов
    itemPadding() {
      return 0;
    }

    textPadding() {
      return 0;
    }

    standardPadding() {
      return 0;
    }

    contentsWidth() {
      return this.width;
    }

    contentsHeight() {
      return this.height;
    }

    // * Более гибкая настройка размера текста при { }
    makeFontBigger() {
      return this.contents.fontSize += 1;
    }

    makeFontSmaller() {
      if (this.contents.fontSize > 1) {
        return this.contents.fontSize -= 1;
      }
    }

    // * Применение своих шрифта и размера текста
    resetFontSettings() {
      super.resetFontSettings();
      if (this.fontSettings == null) {
        return;
      }
      if (String.any(this.fontSettings.face)) {
        this.contents.fontFace = this.fontSettings.face;
      }
      if (this.fontSettings.size > 0) {
        this.contents.fontSize = this.fontSettings.size;
      }
      if (this.fontSettings.italic != null) {
        this.contents.fontItalic = this.fontSettings.italic;
      }
    }

  };
  return KDCore.Window_ExtTextLineBase = Window_ExtTextLineBase;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button M
  //------------------------------------------------------------------------------
  //@[AUTO EXTEND]
  // * Button Mini - упрощённый класс Sprite_XButton (KDCore.Button)

    // * Принимает название файла изображения кнопки без _00
  // * Названия изображения должны быть в стандартном формате _00, _01, [_03]
  // * _02 - не используются в этом классе

    // * Класс использует глобальную временную переменную для определения находится ли мышь в зоне кнопки

    //TODO: ADD ALPHA CHECK!

    // * Если isFull - true, значит нужен _03
  KDCore.ButtonM = class ButtonM extends KDCore.Sprite {
    constructor(filename, isFull = false, sourceFolder = null) {
      super();
      this._bitmaps = [];
      this._disabled = false;
      this._isTriggered = false;
      // * Когда произошло нажатие на кнопку
      this._handler = null;
      this._isCanBeClicked = true;
      this._isManualHoverMode = false;
      this._isManualSelected = false;
      this._loadBitmaps(filename, isFull, sourceFolder);
      this._setImageState(0);
      this._createThread();
    }

    setManualHover() {
      return this._isManualHoverMode = true;
    }

    disableManualHover() {
      return this._isManualHoverMode = false;
    }

    setManualSelected(_isManualSelected) {
      this._isManualSelected = _isManualSelected;
    }

    enableClick() {
      return this._isCanBeClicked = true;
    }

    disableClick() {
      return this._isCanBeClicked = false;
    }

    desaturate() {
      this.filters = [new PIXI.filters.ColorMatrixFilter()];
      this.filters[0].desaturate();
    }

    isMouseIn() {
      if (this._isManualHoverMode === true) {
        return this._isManualSelected;
      } else {
        return this.isUnderMouse() && this.visible === true;
      }
    }

    isActive() {
      if (this._isCanBeClicked === false) {
        return false;
      }
      if (this.parent != null) {
        return this.parent.visible === true && this.visible === true;
      } else {
        return this.visible === true;
      }
    }

    isDisabled() {
      return this._disabled === true;
    }

    addClickHandler(_handler) {
      this._handler = _handler;
    }

    clearClickHandler() {
      return this._handler = null;
    }

    // * Воспроизводит визуальный эффект нажатия
    simulateClick() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.isMouseIn()) {
        return;
      }
      this._startSimulation();
    }

    isEnabled() {
      return !this.isDisabled();
    }

    refreshState(isEnable = true) {
      if (isEnable === true) {
        if (this.isDisabled()) {
          this.enable();
        }
      } else {
        if (this.isEnabled()) {
          this.disable();
        }
      }
    }

    disable() {
      this._disabled = true;
      return this._setImageState(2);
    }

    enable() {
      this._disabled = false;
      return this._setImageState(0);
    }

    click() {
      if (this._handler != null) {
        return this._handler();
      }
    }

    update() {
      super.update();
      return this._updateMain();
    }

  };
  return (function() {    
    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ ButtonM Implementation
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _, alias_SM_isAnyButtonPressed, alias_SM_onMapLoaded;
    //@[DEFINES]
    _ = KDCore.ButtonM.prototype;
    _._loadBitmaps = function(filename, isFull = false, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(filename + '_00'));
      this._bitmaps.push(getterFunc(filename + '_01'));
      if (isFull) {
        this._bitmaps.push(getterFunc(filename + '_03'));
      }
    };
    _._getGetter = function(sourceFolder = null) {
      var getterFunc;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder !== null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap('img/' + sourceFolder + '/', filename);
        };
      }
      return getterFunc;
    };
    _._setImageState = function(index = 0) {
      if (this._bitmaps[index] == null) {
        index = 0;
      }
      this.bitmap = this._bitmaps[index];
      this._lastState = index;
    };
    _._createThread = function() {
      this.hoverThread = new KDCore.TimedUpdate(3, this._updateHover.bind(this));
      this.hoverThread.applyTimeRange(-1, 1);
      this.hoverThread.call();
    };
    //?[DYNAMIC]
    _._updateMain = function() {
      this._updateMouseLogic();
      if (!this.isActive()) {
        if (($gameTemp.kdButtonUnderMouse != null) && $gameTemp.kdButtonUnderMouse === this) {
          return $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseLogic = function() {
      this.hoverThread.update();
      return this._updateMouseClick();
    };
    _._updateHover = function() {
      if (!this.isActive()) {
        return;
      }
      // * чтобы эффект нажатия не прекратить
      if (this._isTriggered === true) {
        return;
      }
      if (this.isMouseIn()) {
        if (this._lastState !== 1) {
          if (!this.isDisabled()) {
            this._setImageState(1);
          }
          $gameTemp.kdButtonUnderMouse = this;
        }
      } else {
        if (this._lastState !== 0) {
          if (!this.isDisabled()) {
            this._setImageState(0);
          }
          if ($gameTemp.kdButtonUnderMouse === this) {
            $gameTemp.kdButtonUnderMouse = null;
          }
        } else if ($gameTemp.kdButtonUnderMouse === this) {
          $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseClick = function() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.isUnderMouse()) {
        this._isTriggered = true;
        this._setImageState(0);
      }
      if (this._isTriggered === true) {
        if (TouchInput.isReleased()) {
          this._isTriggered = false;
          if (this.isMouseIn()) {
            this.click();
          }
        }
      }
    };
    _._startSimulation = function() {
      this._setImageState(1);
      this._simulateThread = new KDCore.TimedUpdate(10, () => {
        return this._setImageState(0);
      });
      this._simulateThread.once();
      return this._updateMain = this._updateMouseClickSimulated;
    };
    _._updateMouseClickSimulated = function() {
      this._simulateThread.update();
      if (!this._simulateThread.isAlive()) {
        this._simulateThread = null;
        this._updateMain = this._updateMouseLogic;
      }
    };
    // * Теперь при нажатии на любую кнопку, игрок не будет ходить по карте

    //@[ALIAS]
    alias_SM_isAnyButtonPressed = Scene_Map.prototype.isAnyButtonPressed;
    Scene_Map.prototype.isAnyButtonPressed = function() {
      if ($gameTemp.kdButtonUnderMouse != null) {
        return true;
      } else {
        return alias_SM_isAnyButtonPressed.call(this);
      }
    };
    //TODO: Добавить доп. проверку?
    //@[ALIAS]
    alias_SM_onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function() {
      $gameTemp.kdButtonUnderMouse = null;
      setTimeout((function() {
        return $gameTemp.kdButtonUnderMouse = null;
      }), 50);
      return alias_SM_onMapLoaded.call(this);
    };
  })();
});

// ■ END ButtonM Implementation
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button Mini User - класс с определением файла каждого состояния отдельно
  // * Принимает теже аргументы, только заместо имени файла, три изображения (имени)
  // ? states = { main, hover, disabled }
  return KDCore.ButtonMU = class ButtonMU extends KDCore.ButtonM {
    constructor() {
      super(...arguments);
    }

    //$[OVER]
    _loadBitmaps(states, isFull = true, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(states.main));
      this._bitmaps.push(getterFunc(states.hover));
      // * Optional 03
      if (String.any(states.disabled)) {
        this._bitmaps.push(getterFunc(states.disabled));
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_TilingLine;
  Sprite_TilingLine = class Sprite_TilingLine extends KDCore.Sprite_TilingFrame {
    constructor() {
      super(...arguments);
    }

    //$[OVER BASE ALL BELOW]
    _fillPadding() {
      return 0;
    }

    _refreshTFrame() {} // * EMPTY

    _fillImagePartWidth() {
      return 4;
    }

    _fillImagePartHeight() {
      return 26;
    }

  };
  return KDCore.Sprite_TilingLine = Sprite_TilingLine;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Пространство имён для всех UIElements
  KDCore.UI = KDCore.UI || {};
  (function() {    // * Общий класс для всех UI элементов
    //?rev 13.10.20
    var Sprite_UIElement;
    Sprite_UIElement = (function() {
      // * ABSTRACT значит что класс сам по себе ничего не создаёт, не хранит данные
      //@[ABSTRACT]
      class Sprite_UIElement extends KDCore.Sprite {
        constructor(params) {
          super();
          this.params = params;
          this._init();
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true
          };
        }

        // * Общий метод (есть у всех элементов)
        // * По умолчанию вызывает drawText, но потомки могут переопределить
        draw() {
          return this.drawText(...arguments);
        }

        // * Общий метод
        drawText() {} // * EMPTY

        
          // * Если изначально невидимый (из параметров), то не активный вообще
        isActive() {
          return this.params.visible === true;
        }

        rootImageFolder() {
          if (String.any(this.params.rootImageFolder)) {
            return this.params.rootImageFolder;
          } else {
            return Sprite_UIElement.RootImageFolder;
          }
        }

        // * Сделать чёрно белым
        desaturate() {
          this.filters = [new PIXI.filters.ColorMatrixFilter()];
          this.filters[0].desaturate();
        }

        clearFilters() {
          return this.filters = [];
        }

        // * Общий метод (можно ли редактировать визуально)
        isCanBeEdited() {
          return false;
        }

        // * Общий метод (надо ли скрывать при игровом сообщнии)
        isHaveHideWithMessageFlag() {
          return false;
        }

        // * Общий метод (находится ли объект под мышкой)
        isUnderMouse() {
          var ref;
          return ((ref = this.zeroChild()) != null ? ref.isUnderMouse() : void 0) && this.isFullVisible();
        }

        // * Полностью ли виден объект? (включае всех его родителей)
        isFullVisible() {
          return this.visible === true && this.allParentsIsVisible();
        }

        // * Все ли родители объекта видимы
        allParentsIsVisible() {
          var e, p;
          if (!this.visible) {
            return false;
          }
          try {
            if (this.parent != null) {
              p = this.parent;
              while (p != null) {
                if (p.visible === true) {
                  p = p.parent;
                } else {
                  return false;
                }
              }
              return true;
            } else {
              return this.visible === true;
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            return true;
          }
        }

        // * Параметры первого элемента (если он есть)
        realWidth() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realWidth();
            } else {
              return child.width;
            }
          }
          return 0;
        }

        realHeight() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realHeight();
            } else {
              return child.height;
            }
          }
          return 0;
        }

        // * Первый "физический" элемент (спрайт)
        zeroChild() {
          return this.children[0];
        }

        // * Метод восстановления значения на стандартные настройки
        reset(property) {
          var e;
          try {
            switch (property) {
              case "position":
                this._resetPosition();
                break;
              default:
                this[property] = this.params[property];
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
        }

      };

      // * Корневая директория для изображений
      Sprite_UIElement.RootImageFolder = "Alpha";

      return Sprite_UIElement;

    }).call(this);
    KDCore.UI.Sprite_UIElement = Sprite_UIElement;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIElement.prototype;
    _._init = function() {
      var e;
      this._prepare();
      try {
        return this._createContent();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        // * Если при создании произошла ошибка, отключаем элемент
        return this.isActive = function() {
          return false;
        };
      }
    };
    
    // * Подготовка элемента (проверка параметров)
    _._prepare = function() {
      if (this.params == null) {
        this.params = this.defaultParams();
      }
      if (this.params.visible != null) {
        this.visible = this.params.visible;
      }
    };
    // * Наследники создают свои элементы в этом методе
    _._createContent = function() {}; // * EMPTY
    
    // * Сброс позиции
    _._resetPosition = function() {
      var e, x, y;
      if (this.params.position == null) {
        return;
      }
      try {
        ({x, y} = this.params.position);
        if (isFinite(x) && isFinite(y)) {
          x = Number(x);
          y = Number(y);
        } else {
          x = Number(eval(x));
          y = Number(eval(y));
        }
        this.move(x, y);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        this.move(0, 0);
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIButton;
    // * Кнопка на экране, можно нажимать
    Sprite_UIButton = class Sprite_UIButton extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: "Button_Inventory",
          isHaveDisabled: true,
          rootImageFolder: null, //?optional
          click: "console.log('click')" // * число или код
        };
      }

      // * Кнопка не поддерживает перерисовку
      draw() {} // * EMPTY

      disable() {
        var ref;
        return (ref = this.button) != null ? ref.disable() : void 0;
      }

      enable() {
        var ref;
        return (ref = this.button) != null ? ref.enable() : void 0;
      }

      setState(isEnabled) {
        if (isEnabled) {
          return this.enable();
        } else {
          return this.disable();
        }
      }

      
        // * Просто вызов метода
      call() {
        var ref;
        return (ref = this.button) != null ? ref.click() : void 0;
      }

      // * Вызов метода с симуляцией нажатия
      click() {
        var ref, ref1;
        if ((ref = this.button) != null) {
          ref.click();
        }
        return (ref1 = this.button) != null ? ref1.simulateClick() : void 0;
      }

    };
    KDCore.UI.Sprite_UIButton = Sprite_UIButton;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIButton.prototype;
    //$[OVER]
    _._createContent = function() {
      if (this.params.image.isEmpty()) {
        KDCore.warning('You try create Button without image');
        return;
      }
      this.button = new KDCore.ButtonM(this.params.image, this.params.isHaveDisabled, this.rootImageFolder());
      this.add(this.button);
      return this._registerClickMethod();
    };
    _._registerClickMethod = function() {
      var commonEventId, e, method, ref, script;
      if (!String.any(this.params.click)) {
        return;
      }
      method = null;
      try {
        // * Если число, то значит общее событие
        if (isFinite(this.params.click)) {
          commonEventId = parseInt(this.params.click);
          if (commonEventId > 0) {
            method = function() {
              return $gameTemp.reserveCommonEvent(commonEventId);
            };
          }
        } else {
          // * Иначе скрипт
          script = this.params.click;
          method = function() {
            return eval(script);
          };
        }
        return this.button.addClickHandler(method);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return (ref = this.button) != null ? ref.clearClickHandler() : void 0;
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    // * Рисует лицо персонажа (из папки Faces)
    var Sprite_UIFace;
    Sprite_UIFace = class Sprite_UIFace extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          faceName: "Actor1",
          faceIndex: 0,
          mirror: false,
          size: 144
        };
      }

      draw() {
        return this.drawFace(...arguments);
      }

      drawFace(faceName, faceIndex) {
        return this._drawFaceWhenReady(faceName, faceIndex);
      }

    };
    KDCore.UI.Sprite_UIFace = Sprite_UIFace;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIFace.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._createFaceSprite();
    };
    _._createFaceSprite = function() {
      this._faceSpr = KDCore.Sprite.FromBitmap(this.params.size);
      if (this.params.mirror === true) {
        this._flipFaceSpr();
      }
      this.add(this._faceSpr);
      this._drawFaceWhenReady(this.params.faceName, this.params.faceIndex);
    };
    _._flipFaceSpr = function() {
      this._faceSpr.scale.x = -1;
      this._faceSpr.x = this.params.size;
    };
    _._drawFaceWhenReady = function(name, index = 0) {
      var ref;
      if ((ref = this._faceSpr) != null) {
        ref.clear();
      }
      if (!String.any(name)) {
        return;
      }
      if (index < 0) {
        return;
      }
      this._drawOnReady = {name, index};
      this._faceSourceBitmap = ImageManager.loadFace(name);
      this._faceSourceBitmap.addLoadListener(this._drawFace.bind(this));
      this._drawFace();
    };
    _._drawFace = function() {
      var fh, fw, size, sx, sy;
      if (this._faceSpr == null) {
        return;
      }
      this._faceSpr.clear();
      if (!String.any(this._drawOnReady.name)) {
        return;
      }
      if (KDCore.isMZ()) {
        fw = ImageManager.faceWidth;
        fh = ImageManager.faceHeight;
      } else {
        fw = Window_Base._faceWidth;
        fh = Window_Base._faceHeight;
      }
      size = this.params.size;
      sx = (this._drawOnReady.index % 4) * fw;
      sy = Math.floor(this._drawOnReady.index / 4) * fh;
      this._faceSpr.bitmap.blt(this._faceSourceBitmap, sx, sy, fw, fh, 0, 0, size, size);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIGauge;
    Sprite_UIGauge = class Sprite_UIGauge extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          fill: "",
          foreground: "",
          mask: "",
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false,
          rootImageFolder: null //?optional
        };
      }

      draw() {
        return this.drawGauge(...arguments);
      }

      drawGauge(percent = 1) {
        this._lastValue = percent;
        return this._drawGauge(percent);
      }

      isVertical() {
        return this.params.vertical === true;
      }

    };
    KDCore.UI.Sprite_UIGauge = Sprite_UIGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIGauge.prototype;
    //$[OVER]
    _._createContent = function() {
      // * Загружается главное изображение, затем уже все остальные, т.к. нужны размеры
      return this._loadFillImage();
    };
    _._loadFillImage = function() {
      // * Главное изображение, поэтому если не указано, то ничего
      if (this.params.fill.isEmpty()) {
        KDCore.warning('You try create Gauge without fill image');
        return;
      }
      KDCore.Utils.loadImageAsync(this.rootImageFolder(), this.params.fill).then(this._createParts.bind(this));
    };
    // * Получаем изображение заполнения и создаём части (т.к. есть размеры)
    _._createParts = function(fillBitmap) {
      this.fillBitmap = fillBitmap;
      this._createBackground();
      this._createFillLayer();
      this._loadForeground();
      this._loadMask();
      return this._onReady();
    };
    _._createBackground = function() {
      this.background = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      this.background.b().fillAll(this.params.backColor);
      this.background.opacity = this.params.backOpacity;
      return this.add(this.background);
    };
    _._createFillLayer = function() {
      this.fillLayer = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      return this.add(this.fillLayer);
    };
    _._loadForeground = function() {
      var fore;
      if (String.isNullOrEmpty(this.params.foreground)) {
        return;
      }
      fore = KDCore.Sprite.FromImg(this.params.foreground, this.rootImageFolder());
      return this.add(fore);
    };
    _._loadMask = function() {
      var mask;
      if (String.isNullOrEmpty(this.params.mask)) {
        return;
      }
      mask = KDCore.Sprite.FromImg(this.params.mask, this.rootImageFolder());
      this.mask = mask;
      return this.add(mask);
    };
    // * Если что-то было до готовности, нарисовать
    _._onReady = function() {
      this.drawGauge(this._lastValue);
    };
    _._drawGauge = function(percent) {
      if (this.fillLayer == null) {
        return;
      }
      this.fillLayer.clear();
      if (this.isVertical()) {
        return this._drawVerGauge(percent);
      } else {
        return this._drawHorGauge(percent);
      }
    };
    _._drawHorGauge = function(percent) {
      var w;
      w = this.fillBitmap.width * percent;
      return this.fillLayer.b().blt(this.fillBitmap, 0, 0, w, this.fillLayer.height, 0, 0);
    };
    _._drawVerGauge = function(percent) {
      var h, hy;
      h = this.fillBitmap.height * percent;
      hy = this.fillBitmap.height - h;
      this.fillLayer.b().blt(this.fillBitmap, 0, 0, this.fillLayer.width, h, 0, hy);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIIcon;
    Sprite_UIIcon = class Sprite_UIIcon extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          index: 0,
          size: 32,
          rootImageFolder: null //?optional
        };
      }

      draw() {
        return this.drawIcon(...arguments);
      }

      drawIcon(index = 0, noSmoth = false) {
        this._lastValue = index;
        return this._drawIcon(index, noSmoth);
      }

    };
    KDCore.UI.Sprite_UIIcon = Sprite_UIIcon;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIIcon.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createIcon();
      return this._drawIcon(this.params.index);
    };
    _._createIcon = function() {
      this._icon = KDCore.Sprite.FromBitmap(this.params.size, this.params.size);
      this.add(this._icon);
      return this._onReady();
    };
    _._onReady = function() {
      return this.drawIcon(this._lastValue);
    };
    _._drawIcon = function(index, noSmoth = false) {
      this._icon.clear();
      if (KDCore.SDK.isString(index)) {
        this._drawImageIcon(index, noSmoth);
      } else {
        if (index <= 0) {
          return;
        }
        this._icon.drawIcon(0, 0, index, this.params.size, noSmoth);
      }
    };
    _._drawImageIcon = function(imageName, noSmoth = false) {
      return KDCore.Utils.loadImageAsync(this.rootImageFolder(), imageName).then((bitmap) => {
        return this._icon.drawIcon(0, 0, bitmap, this.params.size, noSmoth);
      });
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIImage;
    Sprite_UIImage = class Sprite_UIImage extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: "",
          rootImageFolder: null //?optional
        };
      }

      draw() {
        return this.drawImage(...arguments);
      }

      drawImage(image) {
        return this._drawImage(image);
      }

    };
    KDCore.UI.Sprite_UIImage = Sprite_UIImage;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIImage.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._drawImage(this.params.image);
    };
    _._drawImage = function(image) {
      this._clearImage();
      if (!String.isNullOrEmpty(image)) {
        this._image = KDCore.Sprite.FromImg(image, this.rootImageFolder());
        this.add(this._image);
      }
    };
    _._clearImage = function() {
      if (this._image == null) {
        return;
      }
      this._image.visible = false;
      this.removeChild(this._image);
      return this._image = null;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIRect;
    Sprite_UIRect = class Sprite_UIRect extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          fillColor: "#FFFFFF".toCss(),
          fillOpacity: 255,
          borderColor: "#000000".toCss(),
          borderThickness: 1,
          borderOpacity: 255
        };
      }

      draw() {
        return this.fill(...arguments);
      }

      fill(color, opacity = 255) {
        return this._fill(color, opacity);
      }

      drawBorder(color, thickness = 1, opacity = 255) {
        return this._drawBorder(color, thickness, opacity);
      }

    };
    KDCore.UI.Sprite_UIRect = Sprite_UIRect;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIRect.prototype;
    //$[OVER]
    _._createContent = function() {
      if (String.any(this.params.fillColor)) {
        this._createFill();
        this.fill(this.params.fillColor, this.params.fillOpacity);
      }
      if (String.any(this.params.borderColor) && this.params.borderThickness > 0) {
        this._createBorder();
        return this.drawBorder(this.params.borderColor, this.params.borderThickness, this.params.borderOpacity);
      }
    };
    _._createFill = function() {
      this._fillSpr = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._fillSpr);
    };
    _._createBorder = function() {
      this._borderSprite = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._borderSprite);
    };
    _._fill = function(color, opacity) {
      if (this._fillSpr == null) {
        return;
      }
      this._fillSpr.fillAll(color);
      this._fillSpr.opacity = opacity;
    };
    _._drawBorder = function(color, thickness, opacity) {
      var b;
      if (this._borderSprite == null) {
        return;
      }
      this._borderSprite.clear();
      b = this._borderSprite.b();
      // * Top line
      b.fillRect(0, 0, b.width, thickness, color);
      // * Bottom line
      b.fillRect(0, b.height - thickness, b.width, thickness, color);
      // * Left line
      b.fillRect(0, 0, thickness, b.height, color);
      // * Right line
      b.fillRect(b.width - thickness, 0, thickness, b.height, color);
      return this._borderSprite.opacity = opacity;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 17.11.22
    var Sprite_UIText;
    Sprite_UIText = class Sprite_UIText extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          alignment: "center",
          font: {
            face: null,
            size: 18,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          outline: {
            color: null,
            width: 2
          },
          textColor: "#FFFFFF".toCss(),
          // ? can be Null or not exists
          shadow: {
            color: "#000",
            opacity: 200,
            margins: {
              x: 1,
              y: 1
            }
          }
        };
      }

      //?DYNAMIC
      // * Сперва рисуем по готовности, а как загрузился спрайт, меняем
      drawText(text) {
        return this._drawTextWhenReady(text);
      }

      // * Сборка текста с учётом формата
      // * Заменить вхождения %1, %2 на значения параметров
      drawTextWithFormat(/*format string, arguments parameters... */) {
        var text;
        text = this._convertFormatedString(...arguments);
        this.drawText(text);
      }

      // * Пишет текст с определённым цветом (один раз)
      drawTextColor(text, colorCss) {
        if (this._textSpr == null) {
          return;
        }
        this._textSpr.b().textColor = colorCss;
        this.drawText(text);
        this._textSpr.b().textColor = this.params.textColor;
      }

    };
    KDCore.UI.Sprite_UIText = Sprite_UIText;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIText.prototype;
    //$[OVER]
    _._createContent = function() {
      if (this.params.shadow != null) {
        this._createShadow();
      }
      return this._createTextSprite();
    };
    _._createTextSprite = function() {
      this._textSpr = KDCore.Sprite.FromParams(this.params);
      this._textSpr.onReady(this._onReady.bind(this));
      return this.add(this._textSpr);
    };
    // * Выполнить по готовности
    _._onReady = function() {
      // * Переключить метод, так как уже готов
      this.drawText = this._drawText;
      // * Написать то что нужно было до готовности (если есть)
      if (this._drawOnReady == null) {
        return;
      }
      this.drawText(this._drawOnReady);
      this._drawOnReady = null;
    };
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.clear();
      if (text != null) {
        this._textSpr.drawTextFull(text);
      }
      if (this._shadowSpr != null) {
        this._shadowSpr.clear();
        if (text != null) {
          this._shadowSpr.drawTextFull(text);
        }
      }
    };
    // * Написать текст когда будет готов
    _._drawTextWhenReady = function(text) {
      this._drawOnReady = text;
      return this._drawText(text);
    };
    
    // * Заменить вхождения %1, %2 на значения параметров
    _._convertFormatedString = function(/*text, args...*/) {
      var e, i, j, ref, text;
      try {
        text = arguments[0];
        for (i = j = 1, ref = arguments.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
          try {
            if (arguments[i] == null) {
              continue;
            }
            text = text.replace("%" + i, arguments[i]);
          } catch (error) {
            e = error;
            KDCore.warning(e);
            text = "[wrong format text input]";
          }
        }
        return text;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return "[wrong format text input]";
      }
    };
    _._createShadow = function() {
      this._shadowSpr = KDCore.Sprite.FromParams(this.params);
      this._shadowSpr.bitmap.textColor = this.params.shadow.color;
      this._shadowSpr.opacity = this.params.shadow.opacity;
      this._shadowSpr.x += this.params.shadow.margins.x;
      this._shadowSpr.y += this.params.shadow.margins.y;
      return this.add(this._shadowSpr);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 30.12.21
    var Sprite_UITextExt;
    Sprite_UITextExt = class Sprite_UITextExt extends KDCore.UI.Sprite_UIText {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 200,
            h: 60
          },
          font: {
            face: null,
            size: 14,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          // * новые параметры (KDCore 2.7)
          //?null могут быть
          singleLine: false,
          forceCentered: false
        };
      }

      //$[OVER]
      // * Данный метод не поддерживается, так как тут основа не Sprite, а Window
      drawTextColor() {
        return this.drawText(...arguments);
      }

    };
    KDCore.UI.Sprite_UITextExt = Sprite_UITextExt;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextExt.prototype;
    //$[OVER]
    _._createTextSprite = function() {
      var rect;
      rect = new Rectangle(0, 0, this.params.size.w, this.params.size.h);
      this._textSpr = new KDCore.Window_ExtTextLineBase(rect, this.params.font);
      this._textSpr.x = this.params.margins.x || 0;
      this._textSpr.y = this.params.margins.y || 0;
      this.add(this._textSpr);
      // * На следующий кадр, чтобы не было потери текста (опасно)
      //setTimeout (=> @_onReady() ), 10
      this._onReady(); // * Сразу
    };
    
    //$[OVER]
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.contents.clear();
      if (this.params.forceCentered === true) {
        this._textSpr.drawTextExInCenter(text, 0, 0, this._textSpr.width, this._textSpr.height);
      } else {
        if (this.params.singleLine === true) {
          this._textSpr.drawTextEx(text, 0, 0, this._textSpr.width);
        } else {
          // * По умолчанию
          this._textSpr.drawTextExWithWordWrap(text, 0, 0, this._textSpr.width);
        }
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UITextWithBack;
    Sprite_UITextWithBack = class Sprite_UITextWithBack extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          text: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            alignment: "center",
            font: {
              face: null,
              size: 18,
              italic: false
            },
            margins: {
              x: 0,
              y: 0
            },
            outline: {
              color: null,
              width: 2
            },
            textColor: "#000000".toCss()
          },
          rect: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            fillColor: "#FFFFFF".toCss(),
            fillOpacity: 255,
            borderColor: "#000000".toCss(),
            borderThickness: 1,
            borderOpacity: 255
          },
          textMargins: {
            x: 0,
            y: 0
          }
        };
      }

      draw() {
        return this.drawText(...arguments);
      }

      // * Aргументы смотри в Sprite_UIText
      drawText() {
        return this.text.draw(...arguments);
      }

      drawTextColor() {
        return this.text.drawTextColor(...arguments);
      }

      // * Аргументы смотри в Sprite_UIRect
      fill() {
        return this.rect.fill(...arguments);
      }

      drawBorder() {
        return this.rect.drawBorder(...arguments);
      }

      //$[OVER]
      isUnderMouse() {
        return this.rect.isUnderMouse();
      }

    };
    KDCore.UI.Sprite_UITextWithBack = Sprite_UITextWithBack;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextWithBack.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createRect();
      return this._createText();
    };
    _._createRect = function() {
      this.rect = new KDCore.UI.Sprite_UIRect(this.params.rect);
      return this.addChild(this.rect);
    };
    _._createText = function() {
      var x, y;
      this.text = new KDCore.UI.Sprite_UIText(this.params.text);
      ({x, y} = this.params.textMargins);
      this.text.move(x, y);
      return this.addChild(this.text);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIColorGauge;
    Sprite_UIColorGauge = class Sprite_UIColorGauge extends KDCore.UI.Sprite_UIGauge {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 100,
            h: 40
          },
          fill: "#FFFFFF", // * В отличии от Gauge, тут цвет, а не картинка
          foreground: "", // картинка
          mask: "", // картинка
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false,
          rootImageFolder: null //?optional
        };
      }

    };
    KDCore.UI.Sprite_UIColorGauge = Sprite_UIColorGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIColorGauge.prototype;
    //$[OVER]
    // * Заместо изображения используем простой Bitmap с заливкой цвета
    _._loadFillImage = function() {
      var fillBitmap;
      fillBitmap = new Bitmap(this.params.size.w, this.params.size.h);
      fillBitmap.fillAll(this.params.fill);
      this._createParts(fillBitmap);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    // * Данный UI Элемент является только контейнером
    // * Он ничего не рисует, нужно добавлять в него
    // * контент методом addContent

    //rev 17.11.22
    var Sprite_UITooltip;
    Sprite_UITooltip = class Sprite_UITooltip extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
        this.opacity = 0;
      }

      isTooltipActive() {
        return (this._opThread != null) || (this._opChanger != null) || this.opacity > 0;
      }

      activateTooltip(x, y, parent) {
        if (this.isTooltipActive()) {
          return;
        }
        this.deactivateTooltip();
        this.move(x, y);
        this._opThread = new KDCore.TimedUpdate(this.params.delay, this.showTooltip.bind(this));
        if (!this.params.isGlobal && (parent != null)) {
          parent.addChild(this);
        } else {
          // * Always on Top on Scene  (if Global)
          SceneManager._scene.addChild(this);
        }
      }

      deactivateTooltip() {
        this._opThread = null;
        this._opChanger = null;
        return this.opacity = 0;
      }

      showTooltip() {
        this._opThread = null;
        this.appear(this.params.opacityChangeStep);
        if (this.params.cursorRelative === true) {
          return this.toCursor();
        }
      }

      update() {
        var ref;
        super.update();
        if ((ref = this._opThread) != null) {
          ref.update();
        }
        if (this.isTooltipActive() && this.params.cursorRelative === true) {
          return this.toCursor();
        }
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          delay: 30,
          opacityChangeStep: 35,
          margins: {
            x: 8,
            y: 8
          },
          isGlobal: true,
          cursorRelative: true
        };
      }

      toCursor() {
        var x, y;
        ({x, y} = this.params.margins);
        return this.move(TouchInput.x + x, TouchInput.y + y);
      }

      // * Основной метод, нужно добавить контент
      addContent(content) {
        return this.add(content);
      }

    };
    KDCore.UI.Sprite_UITooltip = Sprite_UITooltip;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITooltip.prototype;
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__processEscapeCharacter, _;
  //@[DEFINES]
  _ = Window_Base.prototype;
  //@[ALIAS]
  ALIAS__processEscapeCharacter = _.processEscapeCharacter;
  _.processEscapeCharacter = function(code, textState) {
    switch (code) {
      case 'CHEX':
        this.pProcessColorChangeHex(this.pObtainEscapeParamHexColor(textState));
        break;
      case 'ISZ':
        this.pProcessDrawIconSized(this.pObtainEscapeParamIconArr(textState), textState);
        break;
      case 'PSZ':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, false);
        break;
      case 'PSB':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, true);
        break;
      default:
        ALIAS__processEscapeCharacter.call(this, code, textState);
    }
  };
  //?NEW
  _.pObtainEscapeParamHexColor = function(textState) {
    var arr, regExp, textPart;
    regExp = /^\[(#?([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      return arr[1];
    } else {
      return "";
    }
  };
  //?NEW
  _.pObtainEscapeParamIconArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          return parseInt(i.trim());
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pObtainEscapeParamImgArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\w+,\s*\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          if (isFinite(i)) {
            return parseInt(i.trim());
          } else {
            return i;
          }
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pProcessColorChangeHex = function(colorHex) {
    var e;
    try {
      this.changeTextColor(colorHex);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this.resetTextColor();
    }
  };
  //?NEW
  //?params: [INDEX, SIZE, DX, DY]
  _.pProcessDrawIconSized = function(params, textState) {
    var dx, dy, e, iconIndex, size, staticMargin, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      size = params[1];
      if (params[1] == null) {
        if (KDCore.isMZ()) {
          size = ImageManager.iconWidth;
        } else {
          size = Window_Base._iconWidth;
        }
      }
      if (params[2] == null) {
        params[2] = 0;
      }
      if (params[3] == null) {
        params[3] = 0;
      }
      iconIndex = params[0];
      dx = params[2];
      dy = params[3];
      staticMargin = 2;
      x = textState.x + staticMargin + dx;
      y = textState.y + staticMargin + dy;
      if (KDCore.isMZ()) {
        if (textState.drawing === true) {
          // * Только в режиме рисования
          this.contents.drawIcon(x, y, iconIndex, size);
        }
      } else {
        this.contents.drawIcon(x, y, iconIndex, size);
      }
      textState.x += size + (staticMargin * 2) + dx;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  //?NEW
  //?params: [NAME, W, H, DX, DY]
  _.pProcessDrawPictureSized = function(params, textState, isUnderText = false) {
    var drawBitmap, drawProcess, e, height, name, source, width, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      name = params[0];
      if (!String.any(name)) {
        return;
      }
      width = params[1];
      height = params[2];
      if (params[3] == null) {
        params[3] = 0;
      }
      if (params[4] == null) {
        params[4] = 0;
      }
      x = textState.x + 2 + params[3];
      y = textState.y + 2 + params[4];
      drawBitmap = this.contents;
      source = this.pGetSourceImageForDrawPictureSized(name);
      if ((KDCore.isMZ() && textState.drawing === true) || KDCore.isMV()) {
        drawProcess = function() {
          var e;
          try {
            if (drawBitmap == null) {
              return;
            }
            return drawBitmap.drawOnMe(source, x, y, width, height);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        };
        source.addLoadListener(drawProcess);
      }
      if (isUnderText !== true) {
        // * Вариант, что текст не будет "перескакивать" за ширину картинки а пойдёт поверх (т.е. фоновая картинка)
        // * Если картине не preload, то может "вылезти" на текст потом, так как рисоваться будет позже
        textState.x += width + 4 + params[3];
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  // * Данный метод вынесен отдельно, чтобы можно было переопределять папки
  return _.pGetSourceImageForDrawPictureSized = function(name) {
    return ImageManager.loadPicture(name);
  };
});


// Generated by CoffeeScript 2.6.1



// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var FloatingWindow;
  
    // * Общий класс для всех окон на карте
  /*parameters
      {
          draggable: true,
          closeButton: true,
          moveToCenter: true,
          alwaysOnTop: true,
          header: true
      }
  */
  FloatingWindow = class FloatingWindow extends KDCore.Sprite {
    constructor(mainParent, windowW, windowH, parameters) {
      super();
      this.mainParent = mainParent;
      this.windowW = windowW;
      this.windowH = windowH;
      this.parameters = parameters;
      this._init();
      return;
    }

    static StaticSettings() {
      return {
        draggable: false,
        closeButton: false,
        moveToCenter: false,
        alwaysOnTop: false,
        header: false
      };
    }

    // * Статическое окно с дочерним
    static StaticWindow(parent, sub) {
      var p, w;
      p = KDCore.FloatingWindow.StaticSettings();
      w = new KDCore.FloatingWindow(parent, sub.width, sub.height, p);
      w.setSubWindow(sub);
      w.open();
      return w;
    }

    isActive() {
      return this.visible === true;
    }

    isReady() {
      return this._isReady === true;
    }

    isMouseIn() {
      return this.inPosition(TouchInput);
    }

    isOpen() {
      return this.isActive();
    }

    // * Дочернее окно (если есть)
    sub() {
      return this._subw;
    }

    setOnReadyHandler(_readyHandler) {
      this._readyHandler = _readyHandler;
      if ((this._readyHandler != null) && this._isReady === true) {
        return this._readyHandler();
      }
    }

    isDraggable() {
      return this._isDraggable === true && (this._headerSpr != null) && this._headerSpr.visible === true && this.isOpen();
    }

    setCloseHandler(_closeHandler) {
      this._closeHandler = _closeHandler;
    }

    callCloseHandler() {
      if (this._closeHandler != null) {
        return this._closeHandler();
      }
    }

    setDraggingHandler(_dragHandler) {
      this._dragHandler = _dragHandler;
    }

    setDragEndHandler(_dragEndHandler) {
      this._dragEndHandler = _dragEndHandler;
    }

    hideHeader() {} //TODO:

    hideCloseButton() {} //TODO:

    
      // * Сдвиг заголовка по X, чтобы рамку не задевал
    headerMarginX() {
      return 2;
    }

    // * Сдвиг заголовка по Y, чтобы рамку не задевал
    headerMarginY() {
      return 0;
    }

    // * Стандартная позиция кнопки "закрыть"
    closeButtonPosition() {
      return {
        x: this.width - 24,
        y: 4
      };
    }

    open() {
      if (this.isOpen()) {
        return;
      }
      this._open();
      this._afterOpen();
    }

    close() {
      if (!this.isOpen()) {
        return;
      }
      this._close();
      this._afterClose();
    }

    rootImageFolder() {
      return "Alpha/Windows";
    }

    update() {
      super.update();
      this._updateMouseCheckThread();
      this._updateDragging();
    }

    // * Добавить спрайт на специальный слой контента
    addContent(sprite) {
      return this._contentLayer.addChild(sprite);
    }

    // * Добавить дочернее окно
    setSubWindow(w) {
      this._subw = w;
      this.addContent(w);
    }

    destroy() {
      this._close();
      return Sprite.prototype.destroy.call(this);
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = FloatingWindow.prototype;
    _._init = function() {
      var ref;
      // * Окно всегда закрыто
      this.visible = false;
      // * Контент прогрузился?
      this._isReady = false;
      this._applyParameters();
      if (this._isAlwaysOnTop === false) {
        // * Если не всегда поверх окон, то добавляем сразу к родителю (один раз)
        if ((ref = this.mainParent) != null) {
          ref.addChild(this);
        }
      }
      this._initFloatingSystem();
      this._createLayers();
      this._loadWindowFrame();
    };
    // * Тут ничего не создавать, не двигать, так как
    // * конент создаётся Async, см. метод _createCustomElements
    _._applyParameters = function() {
      var p;
      this._applyDefaults();
      if (this.parameters == null) {
        return;
      }
      p = this.parameters;
      if (p.draggable != null) {
        this._isDraggable = p.draggable;
      }
      if (p.moveToCenter != null) {
        this._isMoveToCenter = p.moveToCenter;
      }
      if (p.header != null) {
        this._isHeaderVisible = p.header;
      }
      if (p.closeButton != null) {
        this._isHaveCloseButton = p.closeButton;
      }
      if (p.alwaysOnTop != null) {
        this._isAlwaysOnTop = p.alwaysOnTop;
      }
    };
    _._applyDefaults = function() {
      // * Окно можно перетаскивать мышкой (по умолчанию - да)
      this._isDraggable = true;
      this._isMoveToCenter = true;
      this._isHeaderVisible = true;
      this._isHaveCloseButton = true;
      this._isAlwaysOnTop = true;
    };
    _._initFloatingSystem = function() {
      if ($gameTemp._floatingWindows == null) {
        // * Создаём массив окон, он нужен для правильного
        // закрытия окон (по очереди) и перемещения drag and drop
        // с учётом верхнего окна
        $gameTemp._floatingWindows = [];
      }
      // * Вспомогательная переменная, чтобы не вызывать методы каждый кадр
      this._mouseIn = false;
      // * Тоже вспомогательная переменная
      this._dragging = false;
    };
    _._moveToStartPosition = function() {
      if (this._isMoveToCenter === true) {
        return this.moveToCenter(Graphics.width / 2, Graphics.height / 2);
      }
    };
    _._closeButtonClick = function() {
      // * При исчезании, кнопка не успевает себя "удалить"
      $gameTemp.kdButtonUnderMouse = null;
      this.callCloseHandler();
      return this.close();
    };
    (function() {      // * DRAGGING
      // -----------------------------------------------------------------------
      _._updateDragging = function() {
        if (!this.isDraggable()) {
          return;
        }
        // * Если мы уже двигаем окно, но мышка вышла за границы, то можно дальше двигать
        // * Только если мышка не в окне и не двигали ранее, то не проверяем
        if (this._mouseIn === false && this._dragging === false) {
          return;
        }
        // * Если существует объект который сейчас dragging
        if ($gameTemp.pkdDraggableInstance != null) {
          // * Если этот объект не этот объект, то выходим из метода
          if ($gameTemp.pkdDraggableInstance !== this) {
            return;
          }
        }
        if (TouchInput.isLongPressed()) {
          if (this._dragging === false) {
            this._onDragStart();
          } else {
            this._onDragging();
          }
        } else {
          this._stopDragging();
        }
      };
      _._onDragStart = function() {
        // * Проверка, в области Header или нет
        if (!this._isMouseInHeader()) {
          return;
        }
        // * Разница в координатах курсора и объекта, чтобы убрать эффект "прыжка"
        this.opacity = 200;
        this._deltaXY = this.getDeltaXY();
        this._dragging = true;
        // * Устанавливаем глобальную ссылку на объект перемещения
        $gameTemp.pkdDraggableInstance = this;
      };
      _.getDeltaXY = function() {
        var p;
        p = new KDCore.Point(this.x, this.y);
        return p.delta(TouchInput);
      };
      _._onDragging = function() {
        // * Защита от перетаскивания за края экрана
        if (!this._isNewMousePositionOnScreen()) {
          return;
        }
        this.move(TouchInput.x - this._deltaXY.x, TouchInput.y - this._deltaXY.y);
        if (this._dragHandler != null) {
          return this._dragHandler();
        }
      };
      _._stopDragging = function() {
        if (this._dragging === true) {
          this._dragging = false;
          this.opacity = 255;
          this._clearDraggableGlocalInstance();
          if (this._dragEndHandler != null) {
            this._dragEndHandler();
          }
        }
      };
      // * Освобождаем глобальную ссылку
      _._clearDraggableGlocalInstance = function() {
        if ($gameTemp.pkdDraggableInstance === this) {
          return $gameTemp.pkdDraggableInstance = null;
        }
      };
      _._isMouseInHeader = function() {
        if (this._headerSpr == null) {
          return false;
        }
        return this._headerSpr.isContainsPoint(TouchInput);
      };
      _._isNewMousePositionOnScreen = function() {
        return KDCore.Utils.isPointInScreen(TouchInput, 10);
      };
    })();
    (function() {      // -----------------------------------------------------------------------

      // * CREATE ELEMENTS
      // -----------------------------------------------------------------------
      
      // * Слои нужны, так как изображения загружаються асинхронно
      _._createLayers = function() {
        this._mainLayer = new Sprite();
        this._contentLayer = new Sprite();
        this._headerLayer = new Sprite();
        this._closeButtonLayer = new Sprite();
        this.addChild(this._mainLayer);
        this.addChild(this._contentLayer);
        this.addChild(this._headerLayer);
        this.addChild(this._closeButtonLayer);
      };
      _._loadWindowFrame = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "windowFrame").then(this._createWindow.bind(this));
      };
      _._createWindow = function(frameImage) {
        this.bitmap = new Bitmap(this.windowW, this.windowH);
        this.wFrame = new KDCore.Sprite_TilingFrame(this.windowW, this.windowH, frameImage);
        this._mainLayer.addChild(this.wFrame);
        this._createParts();
      };
      _._createParts = function() {
        this._loadHeader();
        if (this._isHaveCloseButton === true) {
          this._createCloseButton();
        }
        this._moveToStartPosition();
        this._createCustomElements();
        // * Окно готово
        this._isReady = true;
        if (this._readyHandler != null) {
          this._readyHandler();
        }
      };
      _._loadHeader = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "headerLine").then(this._createHeader.bind(this));
      };
      _._createHeader = function(headerLineImage) {
        var w;
        w = this.windowW - (this.headerMarginX() * 2);
        this._headerSpr = new KDCore.Sprite_TilingLine(w, headerLineImage.height, headerLineImage);
        this._headerSpr.x = this.headerMarginX();
        this._headerSpr.y = this.headerMarginY();
        this._headerLayer.addChild(this._headerSpr);
        if (this._isHeaderVisible === true) {
          // * Сдвигаем контент, чтобы было начало под заголовком
          this._contentLayer.y += headerLineImage.height + this.headerMarginY();
        } else {
          this._headerSpr.visible = false;
        }
      };
      _._createCloseButton = function() {
        this._closeButton = new KDCore.ButtonM("windowCloseButton", false, this.rootImageFolder());
        this._closeButtonLayer.addChild(this._closeButton);
        this._closeButton.move(this.closeButtonPosition());
        this._closeButton.addClickHandler(this._closeButtonClick.bind(this));
      };
      //%[FOR CHILDRENS]
      // * Наследники создают свои элементы в этом методе
      // * Есть специальный метод addContent()
      _._createCustomElements = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * MOUSE
      // -----------------------------------------------------------------------
      
      // * Определение если мышка в области окна
      //TODO: Есть проблема при открытии окна сразу под курсором
      _._registerMouseInOut = function() {
        if (!this.isOpen()) {
          return;
        }
        if (this.isMouseIn()) {
          if (this._mouseIn === false) {
            this._mouseIn = true;
            this._onMouseIn();
          }
        } else {
          if (this._mouseIn === true) {
            this._mouseIn = false;
            this._onMouseOut();
          }
        }
      };
      // * Используется похожая система что и в KDCore.ButtonM
      _._onMouseIn = function() {
        return $gameTemp.floatingWindowUnderMouse = this;
      };
      _._onMouseOut = function() {
        if ($gameTemp.floatingWindowUnderMouse === this) {
          return $gameTemp.floatingWindowUnderMouse = null;
        }
      };
      // * Будем проверять мышка ли в окне только при открытом окне
      _._createMouseCheckThread = function() {
        this._mouseCheckThread = new KDCore.TimedUpdate(1, this._registerMouseInOut.bind(this));
        this._updateMouseCheckThread = () => {
          return this._mouseCheckThread.update();
        };
        return this._mouseCheckThread.call();
      };
      // * Когда окно закрывается, никаких проверок, обнуляем метод
      _._destroyMouseCheckThread = function() {
        this._mouseCheckThread = null;
        return this._updateMouseCheckThread = function() {};
      };
      //?DYNAMIC
      _._updateMouseCheckThread = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * OPEN OR CLOSE
      // -----------------------------------------------------------------------
      _._open = function() {
        var ref, ref1;
        this.visible = true;
        if ((ref = $gameTemp._floatingWindows) != null) {
          ref.push(this);
        }
        if (this._isAlwaysOnTop === true) {
          // * Окно, которое открывается, всегда снова выше остальных (опция)
          if ((ref1 = this.mainParent) != null) {
            ref1.addChild(this);
          }
        }
        return this._createMouseCheckThread();
      };
      _._afterOpen = function() {}; // * EMPTY
      _._close = function() {
        this.visible = false;
        if (this._isAlwaysOnTop === true) {
          this.removeFromParent();
        }
        this._clearDraggableGlocalInstance();
        $gameTemp._floatingWindows.delete(this);
        this._onMouseOut();
        return this._destroyMouseCheckThread();
      };
      _._afterClose = function() {}; // * EMPTY
    })();
  })();
  (function() {    // ■ END PRIVATE.coffee
    //---------------------------------------------------------------------------

    // * Если окно под курсором, нельзя нажимать на карте для движения игрока
    // -----------------------------------------------------------------------
    (function() {      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Scene_Map.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__isAnyButtonPressed, ALIAS__processMapTouch, _;
      
      //@[DEFINES]
      _ = Scene_Map.prototype;
      if (KDCore.isMZ()) {
        //@[ALIAS]
        ALIAS__isAnyButtonPressed = _.isAnyButtonPressed;
        _.isAnyButtonPressed = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return true;
          } else {
            return ALIAS__isAnyButtonPressed.call(this);
          }
        };
      } else {
        //@[ALIAS]
        ALIAS__processMapTouch = _.processMapTouch;
        _.processMapTouch = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return;
          }
          return ALIAS__processMapTouch.call(this);
        };
      }
    })();
  })();
  //@[EXTEND]
  // ■ END Scene_Map.coffee
  //---------------------------------------------------------------------------
  return KDCore.FloatingWindow = FloatingWindow;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var HUI;
  // * Html UI Manager
  // * Набор инструментов для работы с HTML элементами интерфейса
  HUI = function() {};
  (function() {
    var _;
    //@[DEFINES]
    _ = HUI;
    _.init = function() {
      // * Данный набор инструментов могут использовать многие плагины, поэтому проверка
      if (this.isInited()) {
        return;
      }
      this._createMainParentInHtml();
      this._extendGraphicsClass();
      this.refresh();
    };
    // * Был ли создан (инициализирован) основной элемент
    _.isInited = function() {
      return this.parent() != null;
    };
    // * Основной элемент родитель для всех элементов UI
    _.parent = function() {
      return this._parent;
    };
    _.refresh = function() {
      if (!this.isInited()) {
        return;
      }
      Graphics._centerElement(this._parent);
      this._parent.style.zIndex = 2;
      this._parent.style.width = Graphics._canvas.style.width;
      this._parent.style.height = Graphics._canvas.style.height;
    };
    _.initReactComponents = function(withBabel = true) {
      var e;
      try {
        if (withBabel) {
          this._loadBabel();
        }
        return this._loadReact();
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._loadBabel = function() {
      var e;
      try {
        return this._loadScript('https://unpkg.com/babel-standalone@6/babel.min.js');
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._loadReact = function() {
      var e;
      try {
        this._loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
        return this._loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._loadScript = function(src, isReact = false) {
      var e, script;
      try {
        script = document.createElement("script");
        if (isReact === true) {
          script.type = "text/babel";
        } else {
          script.type = "text/javascript";
          script.crossorigin = true;
        }
        script.src = src;
        script.async = false;
        script.defer = true;
        script.onerror = function(e) {
          KDCore.warning('HUI: Failed to load script');
          return KDCore.warning(e);
        };
        document.body.appendChild(script);
        if (isReact === true) {
          return window.dispatchEvent(new Event('DOMContentLoaded'));
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.loadReactComponent = function(componentName, folder = 'data/uiComponents') {
      var e, src;
      try {
        src = folder + "/" + componentName + ".js";
        return this._loadScript(src, true);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.addReactComponent = function(componentName, props, uniqueId = null) {
      var e, element, reactElement, root;
      try {
        if (window[componentName] == null) {
          KDCore.warning("Cant find " + componentName + ", make sure to load it first");
          return null;
        }
        if (uniqueId == null) {
          uniqueId = componentName;
        }
        // * Создаём отдельный DIV для каждого элемента (чтобы можно было удалять)
        element = this._getElementForReactComponent(uniqueId);
        root = ReactDOM.createRoot(element);
        reactElement = React.createElement(window[componentName], props);
        root.render(reactElement);
        return KDCore.HUI.getElement(uniqueId);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    // * Simple React Component (without JSX!)
    _.loadReactComponentFromFile = function(filename, props, uniqueId, handler, folder = "data/uiComponents") {
      var e, url, xhr;
      try {
        xhr = new XMLHttpRequest();
        url = folder + "/" + filename + ".js";
        xhr.open("GET", url);
        xhr.overrideMimeType("plain/text");
        xhr.onload = function() {
          var e, element;
          eval(xhr.responseText);
          element = KDCore.HUI.addReactComponent(filename, props, uniqueId);
          try {
            if (handler != null) {
              return handler(element, filename);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        };
        return xhr.send();
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._getElementForReactComponent = function(componentId) {
      var e, element;
      try {
        this.removeElementById(componentId);
        element = this.addElement(componentId, '', null);
        return element;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return null;
    };
    _.loadElementFromFile = function(filename, handler, folder = "data/uiComponents") {
      var e, url, xhr;
      try {
        xhr = new XMLHttpRequest();
        url = folder + "/" + filename + ".html";
        xhr.open("GET", url);
        xhr.overrideMimeType("plain/text");
        xhr.onload = function() {
          var e, element, htmlElementText;
          // * Хотел отдельные данные передавать и заменять в HTML текст
          // * Но если у нас есть React компоненты, то это не надо
          //htmlElementText = @convertDataKeys(xhr.responseText, dataKeys)
          htmlElementText = xhr.responseText;
          element = KDCore.HUI.addElement(filename, htmlElementText, null);
          try {
            if (handler != null) {
              return handler(element, filename);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        };
        return xhr.send();
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.addCSS = function(name, folder = "css") {
      var head;
      if (!this.isInited()) {
        this.init();
      }
      head = document.getElementsByTagName("head")[0];
      if (head != null) {
        head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"$0/$1.css\" />".replace("$0", folder).replace("$1", name));
      }
    };
    _.addElement = function(id, html, classes = null) {
      var cls, element, i, len;
      if (!this.isInited()) {
        this.init();
      }
      element = document.createElement("div");
      element.id = id;
      element.innerHTML = html;
      if (classes != null) {
        for (i = 0, len = classes.length; i < len; i++) {
          cls = classes[i];
          element.classList.add(cls);
        }
      }
      this._parent.appendChild(element);
      return element;
    };
    _.appendElement = function(element) {
      var e;
      try {
        return this._parent.appendChild(element);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    // * Может быть NULL
    _.getElement = function(id) {
      return document.getElementById(id);
    };
    _.removeElement = function(element) {
      if (element == null) {
        return;
      }
      if (KDCore.SDK.isString(element)) {
        this.removeElementById(element);
      } else {
        this.removeElementById(element.id);
      }
    };
    _.removeElementById = function(elementId) {
      var element;
      if (!this.isInited()) {
        return;
      }
      element = this.getElement(elementId);
      if (element != null) {
        this._parent.removeChild(element);
      }
    };
    // * PRIVATE ------------------------------------------------------------------
    _._createMainParentInHtml = function() {
      this._parent = document.createElement("div");
      this._parent.id = "KDCoreMain";
      document.body.appendChild(this._parent);
    };
    _._extendGraphicsClass = function() {
      var ALIAS___updateCanvas;
      //@[ALIAS]
      ALIAS___updateCanvas = Graphics._updateCanvas;
      Graphics._updateCanvas = function() {
        ALIAS___updateCanvas.call(this);
        return KDCore.HUI.refresh();
      };
    };
  })();
  //@[EXTEND]
  return KDCore.HUI = HUI;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS___onMouseUp, ALIAS___onRightButtonDown, ALIAS__clear, ALIAS__update, _;
  // * Right mouse pressed
  // * Определение когда правая (вторая) кнопка мыши зажата и удерживается

  //@[DEFINES]
  _ = TouchInput;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    this._kdMousePressed2 = false;
    this._kdPressedTime2 = 0;
  };
  //@[ALIAS]
  ALIAS___onRightButtonDown = _._onRightButtonDown;
  _._onRightButtonDown = function(event) {
    var check;
    ALIAS___onRightButtonDown.call(this, event);
    // * Это значит что ALIAS метод прошёл (верные X и Y в Canvas)
    if (KDCore.isMZ()) {
      check = this._newState.cancelled === true;
    } else {
      check = this._events.cancelled === true;
    }
    if (check === true) {
      this._kdMousePressed2 = true;
      this._kdPressedTime2 = 0;
    }
  };
  //@[ALIAS]
  ALIAS___onMouseUp = _._onMouseUp;
  _._onMouseUp = function(event) {
    ALIAS___onMouseUp.call(this, event);
    if (event.button === 2) {
      this._kdMousePressed2 = false;
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this.kdIsPressed2()) {
      return this._kdPressedTime2++;
    }
  };
  //?[NEW]
  return _.kdIsPressed2 = function() {
    return this._kdMousePressed2 === true;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Методы из RPG Maker MZ которых нет в RPG Maker MV
  if (KDCore.isMZ()) {
    return;
  }
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Scene_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Scene_Base.prototype;
    _.calcWindowHeight = function(numLines, selectable) {
      if (selectable === true) {
        return Window_Selectable.prototype.fittingHeight(numLines);
      } else {
        return Window_Base.prototype.fittingHeight(numLines);
      }
    };
  })();
  (function() {    // ■ END Scene_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Selectable.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Window_Selectable.prototype;
    _.itemLineRect = function(index) {
      return this.itemRect(index);
    };
  })();
  (function() {    // ■ END Window_Selectable.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var ALIAS__initialize, ALIAS__processEscapeCharacter, _;
    //@[DEFINES]
    _ = Window_Base.prototype;
    // * Чтоб можно было Rectangle принимать в конструктор
    //@[ALIAS]
    ALIAS__initialize = _.initialize;
    _.initialize = function(x, y, w, h) {
      if (x instanceof PIXI.Rectangle || x instanceof Rectangle) {
        return ALIAS__initialize.call(this, x.x, x.y, x.width, x.height);
      } else {
        return ALIAS__initialize.call(this, ...arguments);
      }
    };
    
    // * В MZ используется FS для изменения размера шрифта в тексте
    //@[ALIAS]
    ALIAS__processEscapeCharacter = _.processEscapeCharacter;
    _.processEscapeCharacter = function(code, textState) {
      if (code === "FS") {
        this.contents.fontSize = this.obtainEscapeParam(textState);
      } else {
        ALIAS__processEscapeCharacter.call(this, code, textState);
      }
    };
  })();
  (function() {    // ■ END Window_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Spriteset_Map.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Spriteset_Map.prototype;
    _.findTargetSprite = function(target) {
      return this._characterSprites.find(function(sprite) {
        return sprite.checkCharacter(target);
      });
    };
  })();
  return (function() {    // ■ END Spriteset_Map.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Sprite_Character.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Sprite_Character.prototype;
    _.checkCharacter = function(character) {
      return this._character === character;
    };
  })();
});

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_SM_processMapTouch, alias_TIOMM;
  //?SMouse better alternative
  if (KDCore.isMZ()) {
    return;
  }
  // * Для ButtonM
  //@[ALIAS]
  alias_SM_processMapTouch = Scene_Map.prototype.processMapTouch;
  Scene_Map.prototype.processMapTouch = function() {
    if ($gameTemp.kdButtonUnderMouse != null) {
      if ($gameTemp.kdButtonUnderMouse.parent == null) {
        return $gameTemp.kdButtonUnderMouse = null;
      } else {

      }
    } else {
      return alias_SM_processMapTouch.call(this);
    }
  };
  //@[ALIAS]
  alias_TIOMM = TouchInput._onMouseMove;
  TouchInput._onMouseMove = function(event) {
    var x, y;
    alias_TIOMM.call(this, event);
    x = Graphics.pageToCanvasX(event.pageX);
    y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
      return this._onHover(x, y);
    }
  };
  
  //?NEW, from MZ
  return TouchInput._onHover = function(_x, _y) {
    this._x = _x;
    this._y = _y;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__clear, ALIAS__update, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Input;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    return this._virtualButton = null;
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this._virtualButton == null) {
      return;
    }
    this._latestButton = this._virtualButton;
    this._pressedTime = 0;
    return this._virtualButton = null;
  };
  return _.virtualClick = function(buttonName) {
    return this._virtualButton = buttonName;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS___startLoading, _;
  // * В версии RPG Maker MZ 1.5.0 появился баг что картинки не успевают прогрузится
  // * Данный фикс, возвращает старое поведение
  if (!KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Bitmap.prototype;
  //@[ALIAS]
  ALIAS___startLoading = _._startLoading;
  return _._startLoading = function() {
    if (Utils.hasEncryptedImages()) {
      ALIAS___startLoading.call(this, ...arguments);
    } else {
      // * Это из RPG Maker MZ до версии 1.5
      this._image = new Image();
      this._image.onload = this._onLoad.bind(this);
      this._image.onerror = this._onError.bind(this);
      this._destroyCanvas();
      this._loadingState = "loading";
      this._image.src = this._url;
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_WBDTEX_KDCore29122021;
  // * <center>, для RPG Maker MZ и если нету Visu Message Core
  if (KDCore.isMZ()) {
    alias_WBDTEX_KDCore29122021 = Window_Base.prototype.drawTextEx;
    Window_Base.prototype.drawTextEx = function(text, x, y, width) {
      var e, newText;
      try {
        if (Imported.VisuMZ_1_MessageCore !== true) { // * В Visu уже есть <center>
          if (String.any(text) && text.contains("<center>")) {
            if (text[0] === "<" && text[1] === "c") { // * Должен быть в начале строки
              newText = text.replace("<center>", "");
              return this.drawTextExInCenter(newText, x, y, width);
            }
          }
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return alias_WBDTEX_KDCore29122021.call(this, ...arguments);
    };
  }
  //?NEW
  Window_Base.prototype.drawTextExInCenter = function(text, x, y, width, height) {
    var e, newX, newY, textSize;
    try {
      if (KDCore.isMV()) { // * В MV нет поддержки данного метода
        this.drawTextEx(...arguments);
        return;
      }
      textSize = this.textSizeEx(text);
      newX = x + width / 2 - textSize.width / 2;
      if ((height != null) && height > 0) {
        newY = y + height / 2 - textSize.height / 2;
      } else {
        newY = y;
      }
      return this.drawTextEx(text, newX, newY, width);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return this.drawTextEx(text, x, y, width);
    }
  };
  //?NEW
  Window_Base.prototype.drawTextExWithWordWrap = function(text, x, y, width, maxLines) {
    var maxWidth, wrappedText;
    this.drawTextEx("", 0, 0, 100);
    maxWidth = this.contentsWidth();
    wrappedText = Window_Message.prototype.pWordWrap.call(this, text, width || maxWidth, maxLines);
    return this.drawTextEx(wrappedText, x, y, width);
  };
  //?NEW
  return Window_Message.prototype.pWordWrap = function(text, maxWidth, maxLines) {
    var i, j, k, l, line, lines, newLines, ref, ref1, result, spaceLeft, spaceWidth, wordWidth, wordWidthWithSpace, words;
    lines = text.split('\n');
    maxWidth = maxWidth;
    spaceWidth = this.contents.measureTextWidth(' ');
    result = '';
    newLines = 1;
    for (i = k = 0, ref = lines.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
      spaceLeft = maxWidth;
      line = lines[i];
      words = line.split(' ');
      for (j = l = 0, ref1 = words.length; (0 <= ref1 ? l < ref1 : l > ref1); j = 0 <= ref1 ? ++l : --l) {
        wordWidth = this.contents.measureTextWidth(words[j].replaceAll(/\\C\[\d+\]/g, ""));
        wordWidthWithSpace = wordWidth + spaceWidth;
        if (j === 0 || wordWidthWithSpace > spaceLeft) {
          if (j > 0) {
            if (maxLines === newLines) {
              return result;
            }
            result += '\n';
            newLines++;
          }
          result += words[j];
          spaceLeft = maxWidth - wordWidth;
          if (j === 0 && line.match(/\\n\w*\s*<\s*\\n\[\w*\s*\]\s*>*/gi)) {
            spaceLeft += 200;
          }
        } else {
          spaceLeft -= wordWidthWithSpace;
          result += ' ' + words[j];
        }
      }
      if (i < lines.length - 1) {
        result += '\n';
      }
    }
    return result;
  };
});


// Generated by CoffeeScript 2.6.1
// * Последний файл (после всех классов)
// * Загружает библиотеки
var i, len, lib, ref, text;

if (KDCore._requireLoadLibrary === true) {
  ref = KDCore[KDCore._loader];
  for (i = 0, len = ref.length; i < len; i++) {
    lib = ref[i];
    lib();
  }
  KDCore[KDCore._loader] = [];
  text = "%c  KDCore is loaded " + KDCore.Version;
  console.log(text, 'background: #222; color: #82b2ff');
}

// ==========================================================================
// ==========================================================================

//   END OF PLUGINS CORE LIBRARY
//   (Next code is this plugin code)

// ==========================================================================
// ==========================================================================

//Plugin KDCore builded by PKD PluginBuilder 2.2 - 20.12.2023

function pkd_download_minimap_as_png(renderer, sprite, fileName) {
	renderer.extract.canvas(sprite).toBlob(function(b){
		var a = document.createElement('a');
		document.body.append(a);
		a.download = fileName;
		a.href = URL.createObjectURL(b);
		a.click();
		a.remove();
	}, 'image/png');
}

// Generated by CoffeeScript 2.6.1
window.PMM = {};

(function() {
  var _;
  _ = window.PMM;
  _.AddMinimap = function() {
    var delay, e, isNeedRecreate;
    try {
      PKD_Sprite_Minimap.Create();
      isNeedRecreate = PKD_SimpleMiniMap.PP.isAlwaysRecreateMinimapOnSceneChange();
      delay = PKD_SimpleMiniMap.PP.minimapCreateProcessDelay();
      return PKD_SimpleMiniMap.Utils.refreshMinimapImageForMap(isNeedRecreate, delay);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.ReloadMinimapImage = function() {
    var e;
    try {
      $gameTemp.pkdClearMiniMapImageInCache($gameMap.mapId());
      return this.AddMinimap();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.RefreshMinimapItems = function() {
    var e, ref;
    try {
      return (ref = PKD_Sprite_Minimap.Instance()) != null ? ref.reCreateAllItems() : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.HideMinimap = function() {
    var e, ref, ref1;
    try {
      if ((ref = PKD_GameMinimap.Instance()) != null) {
        ref.setMinimapState(false);
      }
      return (ref1 = PKD_Sprite_Minimap.Instance()) != null ? ref1.refreshState() : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.ShowMinimap = function() {
    var e, ref, ref1;
    try {
      if ((ref = PKD_GameMinimap.Instance()) != null) {
        ref.setMinimapState(true);
      }
      return (ref1 = PKD_Sprite_Minimap.Instance()) != null ? ref1.refreshState() : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.MoveMinimap = function(x, y) {
    var e, ref, ref1;
    try {
      if ((ref = PKD_GameMinimap.Instance()) != null) {
        ref.setPosition(x, y);
      }
      return (ref1 = PKD_Sprite_Minimap.Instance()) != null ? ref1.move(x, y) : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.ScaleMinimapContent = function(scaleFactor) {
    var e, ref, ref1;
    try {
      if ((ref = PKD_GameMinimap.Instance()) != null) {
        ref.setScale(scaleFactor);
      }
      if ((ref1 = PKD_Sprite_Minimap.Instance()) != null ? ref1.isActive() : void 0) {
        return PMM.AddMinimap();
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.ChangeMinimapOpacity = function(opacity) {
    var e, ref, ref1;
    try {
      if ((ref = PKD_GameMinimap.Instance()) != null) {
        ref.setOpacity(opacity);
      }
      return (ref1 = PKD_Sprite_Minimap.Instance()) != null ? ref1.opacity = opacity : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.ScaleMinimapImage = function(scale) {
    var e, ref, ref1;
    try {
      if ((ref = PKD_GameMinimap.Instance()) != null) {
        ref.setMinimapItselfScale(scale);
      }
      return (ref1 = PKD_Sprite_Minimap.Instance()) != null ? ref1.scale.set(scale) : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.SetPlayerMinimapIcon = function(imageOrIconIndex) {
    var e, ref;
    try {
      return (ref = PKD_GameMinimap.Instance()) != null ? ref.setPlayerMinimapIcon(imageOrIconIndex) : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.AddCustomMinimapIcon = function(x, y, iconName, priority, scale, minDist, isShowOnEdge) {
    var config, e;
    try {
      if (!PKD_SimpleMiniMap.isPro()) {
        return;
      }
      if (!String.any(iconName)) {
        return;
      }
      config = {};
      if (priority != null) {
        config.priority = priority;
      }
      if (scale != null) {
        config.scale = scale;
      }
      if (minDist != null) {
        config.minDist = minDist;
      }
      if (isShowOnEdge != null) {
        config.isShowOnEdge = isShowOnEdge;
      }
      return PKD_GameMinimap.Instance().addCustomIcon(x, y, iconName, config);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.RemoveCustomMinimapIcon = function(x, y) {
    var e;
    try {
      return PKD_GameMinimap.Instance().removeCustomIcon(x, y);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.SaveMinimapToFile = function(scaleFactor = null) {
    var e;
    try {
      if ($gameTemp.__pkdMinimapMVProcess === true) {
        return;
      }
      if (!KDCore.Utils.isSceneMap()) {
        console.warn("SaveMinimapToFile: Map Scene is Required!");
        return;
      }
      /*if !PKD_SimpleMiniMap.isPro()
      console.warn("
          SaveMinimapToFile: You need PRO version of plugin!"
      )
      window.alert("PRO version of plugin is required for this action!")
      return*/
      $gameTemp.__pkdMinimapShouldSaveInFile = true;
      if (scaleFactor != null) {
        $gameTemp.__pkdMinimapImageForceScale = scaleFactor;
      }
      if (KDCore.isMV()) {
        return PKD_SimpleMiniMap.Utils.startSaveMVMinimapToFileProcess();
      } else {
        SceneManager._scene._spriteset.pkdCreateMiniMapImage();
        $gameTemp.__pkdMinimapShouldSaveInFile = null;
        return $gameTemp.__pkdMinimapImageForceScale = null;
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();


// Generated by CoffeeScript 2.6.1
PKD_SimpleMiniMap.EXTEND_NETZ = function() {
  var e;
  try {
    if (!Imported.Alpha_NETZ) {
      return;
    }
    return (function() {      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ NETCharacter.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__pkdIsExistsOnMinimap, ALIAS__refresh, _;
      
      //@[DEFINES]
      _ = NETCharacter.prototype;
      //@[ALIAS]
      ALIAS__refresh = _.refresh;
      _.refresh = function() {
        ALIAS__refresh.call(this, ...arguments);
        this._pkdMinimapConfig = null;
      };
      //@[ALIAS]
      ALIAS__pkdIsExistsOnMinimap = _.pkdIsExistsOnMinimap;
      _.pkdIsExistsOnMinimap = function() {
        var e, result;
        try {
          result = ALIAS__pkdIsExistsOnMinimap.call(this, ...arguments);
          return result && $gameMap.netChars().contains(this);
        } catch (error) {
          e = error;
          KDCore.warning(e);
          return false;
        }
      };
      _.pkdGetMinimapId = function() {
        var e;
        try {
          if (this.actor() == null) {
            return null;
          }
          return this.id;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
        return null;
      };
      _.pkdGetMinimapConfig = function() {
        return Game_Follower.prototype.pkdGetMinimapConfig.call(this);
      };
      _._pkdLoadFollowerCharacterConfig = function() {
        return Game_Follower.prototype._pkdLoadFollowerCharacterConfig.call(this);
      };
      _._pkdApplyCustomSettingsFromActorsNotes = function(config) {
        return Game_Follower.prototype._pkdApplyCustomSettingsFromActorsNotes.call(this, config);
      };
    })();
  } catch (error) {
    // ■ END NETCharacter.coffee
    //---------------------------------------------------------------------------
    e = error;
    return KDCore.warning(e);
  }
};


// Generated by CoffeeScript 2.6.1
(function() {
  var _;
  //@[DEFINES]
  _ = PKD_SimpleMiniMap.PP;
  
  // * paramName, defaultValue
  _.getLoaderParam = function() {
    var e;
    try {
      if (this._loader == null) {
        PKD_SimpleMiniMap.LoadPluginSettings();
      }
      return this._loader.getParam(...arguments);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  // * Нужно ли каждый раз при загрузке Сцены карты, пересоздавать миникарту?
  _.isAlwaysRecreateMinimapOnSceneChange = function() {
    return this.getLoaderParam('recreateMinimapPerScene', false);
  };
  // * Пересоздавать миникарту при смене карты
  _.isAlwaysRecreateMinimapOnMapChange = function() {
    return this.getLoaderParam('recreateMinimapPerMap', true);
  };
  // * Задержка перед созданием карты
  _.minimapCreateProcessDelay = function() {
    return this.getLoaderParam('minimapCreateProcessDelay', 300);
  };
  // * Задержка между обновлением миникарты (значков)
  _.minimapRefreshDealy = function() {
    return this.getLoaderParam('minimapRefreshDealy', 10);
  };
  // * Показывать события с графикой объектов
  _.isShowObjectsOnMinimap = function() {
    return this.getLoaderParam('isShowObjectsOnMinimap', false);
  };
  // * Показывать события с графикой из Tileset
  _.isShowTileEventsOnMinimap = function() {
    return this.getLoaderParam('isShowTileEventsOnMinimap', true);
  };
  // * Показывать сопартийцев (иконки) на миникарте?
  _.isShowFollowersIconsOnMinmap = function() {
    return this.getLoaderParam('isShowFollowersIconsOnMinmap', true);
  };
  // * Показывать других игроков на миникарте
  _.isShowNetworkFollowersIconsOnMinimap = function() {
    return this.getLoaderParam('isShowNetCharsIconsOnMinmap', true);
  };
  _.minimapTransparencyLevelWhenMessage = function() {
    return this.getLoaderParam('transparencyWhenMsg', 0);
  };
  _.minimapTransparencyLevelAbovePlayer = function() {
    return this.getLoaderParam('transparencyWhenAbovePlayer', 120);
  };
  _.getMinimapSettings = function() {
    return this.getLoaderParam('minimapConfig', {
      isActive: true,
      srcImageScale: 0.5,
      minimapScale: 0.4,
      limitMinimap: true,
      limitMargin: 0, // * How long to out of edge minimap can move with limits
      edgeIconShowMargin: 0.5,
      scaleItemsWithMinimap: false,
      itemsScaleWithFactor: 1.5,
      opacity: 255,
      position: {
        x: eval("Graphics.width - 150"),
        y: 110
      }
    });
  };
  _.getAutoIconByImageRules = function() {
    return this.getLoaderParam('customAutoIconsEventRules', []);
  };
  // * Стандартные настройки для всех ИКОНОК на миникарте
  _.getMinimapIconDefaultConfig = function() {
    return this.getLoaderParam('minimapIconConfig', {
      "scale": 0.8,
      "minDist": 0,
      "isShowOnEdge": true,
      "priority": 0
    });
  };
  // * Стандартные настройки для иконок ПЕРСОНАЖЕЙ
  _.getMinimapIconForActorsDefaultConfig = function() {
    return this.getLoaderParam('minimapIconForActorConfig', {
      "scale": 0.8,
      "minDist": 0,
      "isShowOnEdge": true,
      "priority": 10
    });
  };
  // * Стандрантные настройки иконки ИГРОКА
  _.getMinimapPlayerIconDefaultConfig = function() {
    return this.getLoaderParam('playerIconConfig', {
      "minimapIcon": "minimapIcon_player",
      "config": {
        "scale": 0.9,
        "minDist": 0,
        "isShowOnEdge": false,
        "priority": 100
      }
    });
  };
  _.isUseEventRule = function() {
    return this.getLoaderParam('isShowIconsForEvents', true);
  };
  _.isUseFightRule = function() {
    return this.getLoaderParam('isShowIconsForBattle', true);
  };
  _.isUseShopRule = function() {
    return this.getLoaderParam('isShowIconsForShop', true);
  };
  _.isUseAutoABSRule = function() {
    return this.getLoaderParam('isShowIconsForABS', true);
  };
  _.getAutoIconByABSRule = function() {
    return this.getLoaderParam('absEventsIconRule', {
      "minimapIcon": "minimapIcon_abs",
      "config": null
    });
  };
  _.getAutoIconByEventRule = function() {
    return this.getLoaderParam('anyEventsIconRule', {
      "minimapIcon": "minimapIcon_event2",
      "config": null
    });
  };
  _.getAutoIconByFightRule = function() {
    return this.getLoaderParam('battleEventsIconRule', {
      "minimapIcon": "minimapIcon_battle2",
      "config": null
    });
  };
  _.getAutoIconByShopRule = function() {
    return this.getLoaderParam('shopEventsIconRule', {
      "minimapIcon": "minimapIcon_shop",
      "config": null
    });
  };
  _.getIconForVehicleBoat = function() {
    return this.getLoaderParam('vehRuleBoat', {
      "minimapIcon": "minimapIcon_boat",
      "config": null
    });
  };
  _.getIconForVehicleShip = function() {
    return this.getLoaderParam('vehRuleShip', {
      "minimapIcon": "minimapIcon_ship",
      "config": null
    });
  };
  _.getIconForVehicleAirship = function() {
    return this.getLoaderParam('vehRuleAirship', {
      "minimapIcon": "minimapIcon_airship",
      "config": null
    });
  };
})();


// Generated by CoffeeScript 2.6.1
(function() {
  var _;
  //@[DEFINES]
  _ = PKD_SimpleMiniMap.Utils;
  _.ICON_CMD = 'iconOnMinimap';
  _.SCALE_CMD = 'scaleOnMinimap';
  _.PRIORITY_CMD = 'priorityOnMinimap';
  _.DIST_CMD = 'distanceOnMinimap';
  _.HIDE_ON_EDGE_CMD = 'hideOnMinimapEdge';
  _.SHOW_ON_EDGE_CMD = 'showOnMinimapEdge';
  _.convertMapPointToMinimapPoint = function(mx, my) {
    var e, mmx, mmy, scaleFactor;
    try {
      mmx = mx * $gameMap.tileWidth();
      mmy = my * $gameMap.tileHeight();
      // * Map Point Center
      mmx += $gameMap.tileWidth() / 2;
      mmy += $gameMap.tileHeight() / 2;
      scaleFactor = PKD_GameMinimap.Instance().mapPointScaleFactor() || 0;
      mmx *= scaleFactor;
      mmy *= scaleFactor;
      return {
        x: mmx,
        y: mmy
      };
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return {
      x: 0,
      y: 0
    };
  };
  _.getMinimapItemDefaultConfig = function() {
    var e;
    try {
      return this.cloneJsonObject(PKD_SimpleMiniMap.PP.getMinimapIconDefaultConfig());
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _.cloneJsonObject = function(obj) {
    var e, newObj;
    try {
      newObj = JsonEx.parse(JsonEx.stringify(obj));
      return newObj;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  //@[MV ONLY]
  _.startSaveMVMinimapToFileProcess = function() {
    var e, ph, pw;
    try {
      if (KDCore.isMZ()) {
        return;
      }
      $gameTemp.__pkdMinimapMVProcess = true;
      pw = Graphics.width;
      ph = Graphics.height;
      Graphics.width = $gameMap.tileWidth() * $gameMap.width();
      Graphics.height = $gameMap.tileHeight() * $gameMap.height();
      SceneManager.goto(Scene_Map);
      return setTimeout((function() {
        SceneManager._scene._spriteset.pkdCreateMiniMapImage();
        Graphics.width = pw;
        Graphics.height = ph;
        SceneManager.goto(Scene_Map);
        $gameTemp.__pkdMinimapMVProcess = false;
        $gameTemp.__pkdMinimapShouldSaveInFile = null;
        return $gameTemp.__pkdMinimapImageForceScale = null;
      }), 200);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  //@[SLOW]
  _.refreshMinimapImageForMap = function(makeAgain = false, delay = 100) {
    var cachedMiniMapImage, e, mapId, minimapImage, ref;
    try {
      if (!KDCore.Utils.isSceneMap()) {
        return;
      }
      mapId = $gameMap.mapId();
      if (makeAgain === true) {
        $gameTemp.pkdClearMiniMapImageInCache(mapId);
      }
      cachedMiniMapImage = $gameTemp.pkdGetMiniMapImageFromCache(mapId);
      if (cachedMiniMapImage != null) {
        return (ref = PKD_Sprite_Minimap.Instance()) != null ? ref.setupMinimapImage(cachedMiniMapImage) : void 0;
      } else {
        if ($gameMap.pkdIsHaveExternalMinimapImage()) {
          minimapImage = $gameMap.pkdLoadExternalMinimapImage();
          return minimapImage.addLoadListener(function() {
            var ref1;
            $gameTemp.pkdPutMiniMapImageToCache(minimapImage, mapId);
            return (ref1 = PKD_Sprite_Minimap.Instance()) != null ? ref1.setupMinimapImage(minimapImage) : void 0;
          });
        } else {
          return setTimeout((function() {
            var ref1;
            minimapImage = SceneManager._scene._spriteset.pkdCreateMiniMapImage();
            $gameTemp.pkdPutMiniMapImageToCache(minimapImage, mapId);
            return (ref1 = PKD_Sprite_Minimap.Instance()) != null ? ref1.setupMinimapImage(minimapImage) : void 0;
          }), delay);
        }
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.getPointDistance = function(p1, p2) {
    var e;
    try {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    } catch (error) {
      e = error;
      KDCore.warning('PKD_SimpleMiniMap.Utils.getPointDistance', e);
      return 0;
    }
  };
  _.getEventCommentContent = function(commentLine, list) {
    var comment, e;
    try {
      if (list == null) {
        return null;
      }
      comment = KDCore.Utils.getEventCommentValue(commentLine, list);
      if (comment == null) {
        return null;
      }
      return comment.replace(commentLine + ":", "");
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _.readEventMinimapNumberValue = function(valueName, list, defaultValue) {
    var e, value;
    try {
      value = this.getEventCommentContent(valueName, list);
      if ((value != null) && isFinite(value)) {
        return Number(value);
      } else {
        return defaultValue;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return defaultValue;
  };
  _.getRuleByImage = function(characterName, characterIndex) {
    var e, i, len, r, rules;
    try {
      rules = PKD_SimpleMiniMap.PP.getAutoIconByImageRules();
      for (i = 0, len = rules.length; i < len; i++) {
        r = rules[i];
        if (r == null) {
          continue;
        }
        if (String.any(r.contentString) && characterName.contains(r.contentString)) {
          if ((r.characterIndex != null) && r.characterIndex >= 0) {
            if (r.characterIndex === characterIndex) {
              return r;
            }
          } else {
            return r;
          }
        }
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _.isValidConfigValue = function(value) {
    var e;
    try {
      if (value == null) {
        return false;
      }
      if (value === "") {
        return false;
      }
      return true;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
  _.createMiniMapImage = function(sprite) {
    var _needPostSave, bitmap, e, outputSprite, scaleFactor;
    try {
      if (!KDCore.Utils.isMapScene()) {
        return;
      }
      if (sprite == null) {
        return;
      }
      // * Для инструмента создания картинки (можно любой размер)
      if ($gameTemp.__pkdMinimapImageForceScale != null) {
        scaleFactor = $gameTemp.__pkdMinimapImageForceScale;
      } else {
        scaleFactor = PKD_GameMinimap.Instance().getConfig().srcImageScale;
      }
      // * Чтобы не сохранять изначальный SCALE 1 вариант
      if (scaleFactor !== 1 && $gameTemp.__pkdMinimapShouldSaveInFile === true) {
        _needPostSave = true;
        $gameTemp.__pkdMinimapShouldSaveInFile = false;
      }
      bitmap = this._extractBitmapFromTexture(sprite, 1);
      if (scaleFactor === 1) {
        return bitmap;
      } else {
        outputSprite = new Sprite(bitmap);
        if (_needPostSave === true) {
          $gameTemp.__pkdMinimapShouldSaveInFile = true;
        }
        return this._extractBitmapFromTexture(outputSprite, scaleFactor);
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return new Bitmap(Graphics.width, Graphics.height);
  };
  _._extractBitmapFromTexture = function(sprite, scaleFactor = 1) {
    var bitmap, canvas, e, height, renderTexture, renderer, width;
    try {
      if (sprite == null) {
        return;
      }
      width = $gameMap.tileWidth() * $gameMap.width() * scaleFactor;
      height = $gameMap.tileHeight() * $gameMap.height() * scaleFactor;
      bitmap = new Bitmap(width, height);
      renderTexture = PIXI.RenderTexture.create(width, height);
      if (KDCore.isMZ()) {
        renderer = Graphics.app.renderer;
      } else {
        renderer = Graphics._renderer;
      }
      if (scaleFactor !== 1) {
        sprite.scale.set(scaleFactor);
      }
      renderer.render(sprite, renderTexture, true);
      sprite.scale.set(1);
      sprite.worldTransform.identity();
      if ($gameTemp.__pkdMinimapShouldSaveInFile === true) {
        pkd_download_minimap_as_png(renderer, renderTexture, 'minimapCapture');
      }
      if (KDCore.isMZ()) {
        canvas = renderer.extract.canvas(renderTexture);
      } else {
        if (Graphics.isWebGL()) {
          canvas = renderer.extract.canvas(renderTexture);
        } else {
          // * ???
          canvas = renderTexture.baseTexture._canvasRenderTarget.canvas;
        }
      }
      bitmap.context.drawImage(canvas, 0, 0);
      canvas.width = 0;
      canvas.height = 0;
      renderTexture.destroy({
        destroyBase: true
      });
      bitmap.baseTexture.update();
      if (KDCore.isMV()) {
        bitmap._setDirty();
      }
      return bitmap;
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return new Bitmap(1, 1);
    }
  };
  // * Найти точку на краю миникарты
  _.findPointC = function(pointA, pointB, distanceD) {
    var diffX, diffY, lengthAB, pointC;
    diffX = pointB.x - pointA.x;
    diffY = pointB.y - pointA.y;
    lengthAB = Math.sqrt(diffX * diffX + diffY * diffY);
    pointC = {
      x: pointA.x + (diffX * distanceD) / lengthAB,
      y: pointA.y + (diffY * distanceD) / lengthAB
    };
    return pointC;
  };
  _.getFramesAndSpeed = function(imageName) {
    var e, items, result;
    result = {
      f: 1,
      s: 1
    };
    if (!String.any(imageName)) {
      return result;
    }
    try {
      items = imageName.match(/\((.*)\)/i);
      if (items != null) {
        items = items[1].split(',');
        result.f = Number(items[0]);
        result.s = Number(items[1]);
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return result;
  };
  _.makeCustomMinimapIconId = function(x, y) {
    var e, mapId;
    try {
      mapId = $gameMap.mapId();
      return "map_" + mapId + "_" + x + "_" + y;
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return "unknownId";
    }
  };
})();


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Actor.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Actor.prototype;
  _.pkdGetMinimapCustomNotes = function() {
    var autoIcon, config, e;
    try {
      if (this.actor() == null) {
        return {};
      }
      config = PKD_SimpleMiniMap.Utils.cloneJsonObject(PKD_SimpleMiniMap.PP.getMinimapIconForActorsDefaultConfig());
      config = this.pkdGetMinimapCustomUserNotes(config);
      if (config.minimapIcon == null) {
        autoIcon = this.pkdGetMinimapAutoIconForActor();
        if (String.any(autoIcon)) {
          config.minimapIcon = autoIcon;
        }
      }
      return config;
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return {};
    }
  };
  _.pkdGetMinimapCustomUserNotes = function(config) {
    var U, e, meta;
    try {
      if (this.actor() == null) {
        return config;
      }
      meta = this.actor().meta;
      U = PKD_SimpleMiniMap.Utils;
      if (meta[U.SCALE_CMD] != null) {
        config.scale = Number(meta[U.SCALE_CMD]);
      }
      if (meta[U.DIST_CMD] != null) {
        config.minDist = Number(meta[U.DIST_CMD]);
      }
      if (meta[U.PRIORITY_CMD] != null) {
        config.priority = parseInt(meta[U.PRIORITY_CMD]);
      }
      if (meta[U.ICON_CMD] != null) {
        if (isFinite(meta[U.ICON_CMD])) {
          config.minimapIcon = parseInt(meta[U.ICON_CMD]);
        } else {
          config.minimapIcon = meta[U.ICON_CMD];
        }
      }
      if (meta[U.SHOW_ON_EDGE_CMD] != null) {
        config.isShowOnEdge = true;
      }
      if (meta[U.HIDE_ON_EDGE_CMD] != null) {
        config.isShowOnEdge = false;
      }
      return config;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdGetMinimapAutoIconForActor = function() {
    var actor, e, name;
    try {
      if (this.actor() == null) {
        return null;
      }
      actor = this.actor();
      name = actor.name.toLowerCase();
      if (['reid', 'priscilla', 'gale', 'michelle', 'kasey', 'albert', 'harold'].contains(name)) {
        return "minimapIcon_" + name;
      } else {
        return null;
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Game_Actor.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Character.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Character.prototype;
  _.pkdGetPosForMinimap = function() {
    return {
      x: this._realX,
      y: this._realY
    };
  };
  // * Используется для "запекания" карты, если TRUE, то персонаж будет на изображении миникарты
  _.pkdIsShouldStayOnMinimap = function() {
    return false;
  };
  _.pkdGetPositionOnMinimap = function() {
    var e, pos;
    try {
      pos = this.pkdGetPosForMinimap();
      return PKD_SimpleMiniMap.Utils.convertMapPointToMinimapPoint(pos.x, pos.y);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return {
      x: 0,
      y: 0
    };
  };
  _.pkdGetMinimapId = function() {
    return null;
  };
  _.pkdIsExistsOnMinimap = function() {
    return (this.pkdGetMinimapId() != null) && this.pkdIsHaveAnyMinimapImage() && !this.isTransparent();
  };
  _.pkdClearMinimapPointerData = function() {
    var e;
    try {
      return this._pkdMinimapConfig = null;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdGetMinimapConfig = function() {
    var e;
    try {
      if (this._pkdMinimapConfig == null) {
        this._pkdMinimapConfig = PKD_SimpleMiniMap.Utils.getMinimapItemDefaultConfig();
      }
      return this._pkdMinimapConfig;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _.pkdIsHaveAnyMinimapImage = function() {
    var config, e, icon;
    try {
      config = this.pkdGetMinimapConfig();
      if (config == null) {
        return false;
      }
      if (config.minimapIcon == null) {
        return false;
      }
      icon = config.minimapIcon;
      if (isFinite(icon) && icon <= 0) {
        return false;
      }
      if (String.any(icon)) {
        return true;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
  _.pkdSetMinimapIcon = function(minimapIconName) {
    var config, e;
    try {
      config = this.pkdGetMinimapConfig();
      return config.minimapIcon = minimapIconName;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdApplyRuleConfig = function(ruleConfig) {
    var config, e;
    try {
      if (ruleConfig == null) {
        return;
      }
      config = this.pkdGetMinimapConfig();
      if (config == null) {
        return;
      }
      if (PKD_SimpleMiniMap.Utils.isValidConfigValue(ruleConfig.scale)) {
        config.scale = Number(ruleConfig.scale);
      }
      if (PKD_SimpleMiniMap.Utils.isValidConfigValue(ruleConfig.minDist)) {
        config.minDist = Number(ruleConfig.minDist);
      }
      if (PKD_SimpleMiniMap.Utils.isValidConfigValue(ruleConfig.isShowOnEdge)) {
        return config.isShowOnEdge = eval(ruleConfig.isShowOnEdge);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Game_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__setupPage, _;
  //@[DEFINES]
  _ = Game_Event.prototype;
  //@[ALIAS]
  ALIAS__setupPage = _.setupPage;
  _.setupPage = function() {
    var e;
    ALIAS__setupPage.call(this, ...arguments);
    try {
      try {
        if (this._pkdMinimapConfig != null) {
          PKD_Sprite_Minimap.DisposeMinimapItemForEvent(this);
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      this.pkdClearMinimapPointerData();
      this.pkdPrepareMinimapItem();
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
})();

// ■ END Game_Event.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Event.prototype;
  // * Просто событие, имеет графику и какие-то команды внутри
  // (не приминимо для Parallel и Autorun)
  _.pkdTryApplyMinimapIconEventRule = function() {
    var e, ruleConfig;
    try {
      ruleConfig = PKD_SimpleMiniMap.PP.getAutoIconByEventRule();
      return this.pkdTryApplyRuleConfig(ruleConfig);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  // * Событие, у которого первая команда "БОЙ"
  _.pkdTryApplyMinimapIconFightRule = function() {
    var e, l, ruleConfig;
    try {
      l = this.list();
      if (l == null) {
        return;
      }
      if (l[0].code === 301) {
        ruleConfig = PKD_SimpleMiniMap.PP.getAutoIconByFightRule();
        return this.pkdTryApplyRuleConfig(ruleConfig);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  // * Событие, у которого первая команда "Shop"
  _.pkdTryApplyMinimapIconShopRule = function() {
    var e, l, ruleConfig;
    try {
      l = this.list();
      if (l == null) {
        return;
      }
      if (l[0].code === 302) {
        ruleConfig = PKD_SimpleMiniMap.PP.getAutoIconByShopRule();
        return this.pkdTryApplyRuleConfig(ruleConfig);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdTryApplyMinimapIconImageAutoRule = function() {
    var characterIndex, characterName, e, ruleConfig;
    try {
      ({characterName, characterIndex} = this.page().image);
      ruleConfig = PKD_SimpleMiniMap.Utils.getRuleByImage(characterName, characterIndex);
      if (ruleConfig == null) {
        return;
      }
      return this.pkdTryApplyRuleConfig(ruleConfig);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdTryApplyMinimapIconABSAutoRule = function() {
    var e, isABS, ruleConfig;
    try {
      if (!PKD_SimpleMiniMap.PP.isUseAutoABSRule()) {
        return;
      }
      if (Imported.Alpha_ABSZ) {
        isABS = KDCore.Utils.getEventCommentValue('<ABS', this.list());
        if (!String.any(isABS)) {
          return;
        }
      } else if (Imported.AlphaABS) {
        isABS = this.event().note.contains("<ABS");
        if (!isABS) { // * Not have any ABS plugin connected
          return;
        }
      } else {
        return;
      }
      ruleConfig = PKD_SimpleMiniMap.PP.getAutoIconByABSRule();
      return this.pkdTryApplyRuleConfig(ruleConfig);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdTryApplyRuleConfig = function(ruleConfig) {
    var e;
    try {
      if (ruleConfig == null) {
        return;
      }
      if (ruleConfig.minimapIcon != null) {
        this.pkdSetMinimapIcon(ruleConfig.minimapIcon);
        return this.pkdApplyRuleConfig(ruleConfig.config);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Game_Event.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Event.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Event.prototype;
  _.pkdGetMinimapId = function() {
    return this.eventId();
  };
  _.pkdIsShouldStayOnMinimap = function() {
    return this.pkdIsHaveCommentOnPage("KEEP_ON_MINIMAP");
  };
  _.pkdPrepareMinimapItem = function() {
    var e, page;
    try {
      page = this.page();
      if (page == null) {
        return;
      }
      this.pkdTryReadMinimapIconName();
      return this.pkdTryReadMinimapIconSetting();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdTryReadMinimapIconName = function() {
    var e, minimapIconName;
    try {
      minimapIconName = PKD_SimpleMiniMap.Utils.getEventCommentContent('iconOnMinimap', this.list());
      if (minimapIconName != null) {
        this.pkdSetMinimapIcon(minimapIconName);
      } else {
        this.pkdTryGetAutoMinimapIcon();
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _.pkdTryReadMinimapIconSetting = function() {
    var U, config, e, hideOnEdge, showOnEdge;
    try {
      config = this.pkdGetMinimapConfig();
      if (config == null) {
        return;
      }
      U = PKD_SimpleMiniMap.Utils;
      config.scale = PKD_SimpleMiniMap.Utils.readEventMinimapNumberValue(U.SCALE_CMD, this.list(), config.scale);
      config.priority = PKD_SimpleMiniMap.Utils.readEventMinimapNumberValue(U.PRIORITY_CMD, this.list(), config.priority);
      config.minDist = PKD_SimpleMiniMap.Utils.readEventMinimapNumberValue(U.DIST_CMD, this.list(), config.minDist);
      try {
        hideOnEdge = KDCore.Utils.getEventCommentValue(U.HIDE_ON_EDGE_CMD, this.list());
        if (String.any(hideOnEdge)) {
          config.isShowOnEdge = false;
        }
        showOnEdge = KDCore.Utils.getEventCommentValue(U.SHOW_ON_EDGE_CMD, this.list());
        if (String.any(showOnEdge)) {
          return config.isShowOnEdge = true;
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdIsHaveCommentOnPage = function(comment) {
    var e;
    try {
      if (this.page() == null) {
        return false;
      }
      if (this.list() == null) {
        return false;
      }
      return KDCore.Utils.getEventCommentValue(comment, this.list()) != null;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
  _.pkdTryGetAutoMinimapIcon = function() {
    var e;
    try {
      if (this.page() == null) {
        return;
      }
      // * не приминимо для Parallel и Autorun
      if (this.pkdIsAutorunOrParallelEvent()) {
        return;
      }
      // * не приминимо для событий БЕЗ какой-либо графики
      if (!this.pkdIsEventHaveAnyImage()) {
        return;
      }
      // * не приминимо для пустых событий
      if (this.pkdIsEmptyEventForMinimap()) {
        // * Alpha ABS (mv) может иметь события врагов без какого-либо тела
        this.pkdTryApplyMinimapIconABSAutoRule();
        return;
      }
      if (PKD_SimpleMiniMap.PP.isUseEventRule()) {
        this.pkdTryApplyMinimapIconEventRule();
      }
      if (PKD_SimpleMiniMap.PP.isUseFightRule()) {
        this.pkdTryApplyMinimapIconFightRule();
      }
      if (PKD_SimpleMiniMap.PP.isUseShopRule()) {
        this.pkdTryApplyMinimapIconShopRule();
      }
      this.pkdTryApplyMinimapIconImageAutoRule();
      return this.pkdTryApplyMinimapIconABSAutoRule();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdIsEmptyEventForMinimap = function() {
    var e, l;
    try {
      l = this.list();
      if (l == null) {
        return true;
      }
      return l.length === 1 && l[0].code === 0;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return true;
  };
  _.pkdIsAutorunOrParallelEvent = function() {
    var e;
    try {
      return this._trigger >= 3;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
  _.pkdIsEventHaveAnyImage = function() {
    var e, imageData;
    try {
      if (this.page() == null) {
        return false;
      }
      imageData = this.page().image;
      if (imageData == null) {
        return false;
      }
      if (String.any(imageData.characterName)) {
        return true;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
})();

// ■ END Game_Event.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Follower.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Follower.prototype;
  _.pkdGetMinimapId = function() {
    var e;
    try {
      if (!this.isVisible()) {
        return null;
      }
      if (this.__pkdMinimapId == null) {
        this.__pkdMinimapId = "follower_" + this._memberIndex;
      }
      return this.__pkdMinimapId;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _.pkdRefreshMinimapConfig = function() {
    return this._pkdMinimapConfig = null;
  };
  _.pkdGetMinimapConfig = function() {
    var e;
    try {
      if (this._pkdMinimapConfig == null) {
        this._pkdMinimapConfig = this._pkdLoadFollowerCharacterConfig();
      }
      return this._pkdMinimapConfig;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _._pkdLoadFollowerCharacterConfig = function() {
    var config, e;
    try {
      config = PKD_SimpleMiniMap.Utils.cloneJsonObject(PKD_SimpleMiniMap.PP.getMinimapIconForActorsDefaultConfig());
      config = this._pkdApplyCustomSettingsFromActorsNotes(config);
      return config;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._pkdApplyCustomSettingsFromActorsNotes = function(config) {
    var e, key, notes, value;
    try {
      if (this.actor() == null) {
        return {};
      }
      notes = this.actor().pkdGetMinimapCustomNotes();
      for (key in notes) {
        value = notes[key];
        config[key] = value;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return config;
  };
})();

// ■ END Game_Follower.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__setup, _;
  //@[DEFINES]
  _ = Game_Map.prototype;
  //@[ALIAS]
  ALIAS__setup = _.setup;
  _.setup = function(mapId) {
    var e, isNeedRecreate;
    try {
      isNeedRecreate = PKD_SimpleMiniMap.PP.isAlwaysRecreateMinimapOnMapChange();
      if (isNeedRecreate === true) {
        if (typeof $gameTemp !== "undefined" && $gameTemp !== null) {
          $gameTemp.pkdClearMiniMapImageInCache(mapId);
        }
      }
      this.pkdUpdateMinimapConfig();
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    ALIAS__setup.call(this, ...arguments);
  };
})();

// ■ END Game_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Map.prototype;
  _.pkdGetVehiclesForMap = function() {
    var e, mapId, vehicles;
    try {
      mapId = this.mapId();
      vehicles = this.vehicles().filter(function(v) {
        return v._mapId === mapId;
      });
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return [];
    }
    return vehicles;
  };
  _.pkdIsMinimapAllowed = function() {
    var e;
    try {
      return $dataMap.meta.minimapOff == null;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return true;
  };
  _.pkdIsHaveExternalMinimapImage = function() {
    var e;
    try {
      return String.any($dataMap.meta.minimapImage);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
  _.pkdLoadExternalMinimapImage = function() {
    var e;
    try {
      return ImageManager.loadPictureFor_PKD_SimpleMiniMap($dataMap.meta.minimapImage);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return new Bitmap(1, 1);
    }
  };
  _.pkdUpdateMinimapConfig = function() {
    var config, e, meta;
    try {
      config = {};
      meta = $dataMap.meta;
      if (meta.minimapScale != null) {
        config.minimapScale = Number(meta.minimapScale);
      }
      if (meta.srcImageScale != null) {
        config.srcImageScale = Number(meta.srcImageScale);
      }
      if (meta.onMinmapLimits != null) {
        config.limitMinimap = true;
      }
      if (meta.offMinimapLimits != null) {
        config.limitMinimap = false;
      }
      return PKD_GameMinimap.Instance().updateMinimapSettings(config);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Game_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__refresh, _;
  //@[DEFINES]
  _ = Game_Player.prototype;
  //@[ALIAS]
  ALIAS__refresh = _.refresh;
  _.refresh = function() {
    var e;
    ALIAS__refresh.call(this, ...arguments);
    try {
      return this.pkdRefreshMinimapConfig();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Game_Player.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Player.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Player.prototype;
  _.pkdGetMinimapId = function() {
    return "player";
  };
  _.pkdRefreshMinimapConfig = function() {
    var e, f, followers, i, len;
    try {
      this._pkdMinimapConfig = null;
      if (KDCore.isMZ()) {
        followers = this.followers().data();
      } else {
        followers = this.followers()._data;
      }
      for (i = 0, len = followers.length; i < len; i++) {
        f = followers[i];
        if (f == null) {
          continue;
        }
        f.pkdRefreshMinimapConfig();
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _.pkdGetMinimapConfig = function() {
    var e;
    try {
      if (this._pkdMinimapConfig == null) {
        this._pkdMinimapConfig = this._pkdLoadPlayerCharacterConfig();
      }
      return this._pkdMinimapConfig;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _._pkdLoadPlayerCharacterConfig = function() {
    var config, configData, customImage, e, playerPriority;
    try {
      configData = PKD_SimpleMiniMap.Utils.cloneJsonObject(PKD_SimpleMiniMap.PP.getMinimapPlayerIconDefaultConfig());
      config = configData.config;
      config.minimapIcon = configData.minimapIcon;
      playerPriority = config.priority;
      config = this._pkdApplyCustomSettingsFromActorsNotes(config);
      config.priority = playerPriority;
      customImage = PKD_GameMinimap.Instance().getCustomPlayerIcon();
      if (customImage != null) {
        config.minimapIcon = customImage;
      }
      return config;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _._pkdApplyCustomSettingsFromActorsNotes = function(config) {
    var actor, e, key, notes, value;
    try {
      if ($gameParty.leader() == null) {
        return null;
      }
      actor = $gameParty.leader();
      notes = actor.pkdGetMinimapCustomNotes();
      for (key in notes) {
        value = notes[key];
        config[key] = value;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return config;
  };
})();

// ■ END Game_Player.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_System.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_System.prototype;
  _.pGetMinimap = function() {
    var e;
    try {
      if (this._pkdGameMiniMapObj == null) {
        this._pkdGameMiniMapObj = new PKD_GameMinimap();
      }
      return this._pkdGameMiniMapObj;
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return null;
    }
  };
})();

// ■ END Game_System.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  _._pkdInitMiniMapImagesCache = function() {
    var e;
    try {
      if (this._pkdMMICache == null) {
        this._pkdMMICache = {};
      }
      return this._pkdMMICache;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _.pkdGetMiniMapImageFromCache = function(mapId) {
    var cache, e;
    try {
      cache = this._pkdInitMiniMapImagesCache();
      if (cache == null) {
        return null;
      }
      return cache[mapId];
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _.pkdClearMiniMapImageInCache = function(mapId) {
    var cache, e;
    try {
      cache = this._pkdInitMiniMapImagesCache();
      cache[mapId] = null;
      return delete cache[mapId];
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pkdPutMiniMapImageToCache = function(image, mapId) {
    var cache, e;
    try {
      cache = this._pkdInitMiniMapImagesCache();
      if (cache == null) {
        return;
      }
      return cache[mapId] = image;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Vehicle.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Vehicle.prototype;
  _.pkdGetMinimapConfig = function() {
    var e;
    try {
      if (!String.any(this._type)) {
        return null;
      }
      if (this._pkdMinimapConfig == null) {
        if (this.isBoat()) {
          this._pkdMinimapConfig = this._pkdMakeVehicleMinimapConfigFrom(PKD_SimpleMiniMap.PP.getIconForVehicleBoat());
        }
        if (this.isShip()) {
          this._pkdMinimapConfig = this._pkdMakeVehicleMinimapConfigFrom(PKD_SimpleMiniMap.PP.getIconForVehicleShip());
        }
        if (this.isAirship()) {
          this._pkdMinimapConfig = this._pkdMakeVehicleMinimapConfigFrom(PKD_SimpleMiniMap.PP.getIconForVehicleAirship());
        }
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return this._pkdMinimapConfig;
  };
  _._pkdMakeVehicleMinimapConfigFrom = function(parameters) {
    var config, e;
    try {
      if (parameters == null) {
        return null;
      }
      config = PKD_SimpleMiniMap.Utils.cloneJsonObject(parameters.config);
      config.minimapIcon = parameters.minimapIcon;
      return config;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _.pkdGetMinimapId = function() {
    return this._type;
  };
})();

// ■ END Game_Vehicle.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ImageManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = ImageManager;
  _.loadPictureFor_PKD_SimpleMiniMap = function(filename) {
    return this.loadBitmap('img/pSimpleMinimap/', filename);
  };
})();

// ■ END ImageManager.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//@[STORABLE]
var PKD_GameMinimap;

PKD_GameMinimap = class PKD_GameMinimap {
  constructor() {
    this._customMMItems = [];
    this._customPlayerMinimapImage = null;
    this._configPerMap = {};
    return;
  }

  getConfig() {
    if (this._mmConfig == null) {
      this._mmConfig = this._loadDefaultConfig();
    }
    return this._mmConfig;
  }

  setPlayerMinimapIcon(_customPlayerMinimapImage) {
    var e;
    this._customPlayerMinimapImage = _customPlayerMinimapImage;
    try {
      return typeof $gamePlayer !== "undefined" && $gamePlayer !== null ? $gamePlayer.pkdRefreshMinimapConfig() : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  getCustomPlayerIcon() {
    return this._customPlayerMinimapImage;
  }

  // * Сбросить настройки миникарты до базовых (при смене карты)
  resetMinimapSettings() {
    var config, defConfig, e;
    try {
      this.resetConfigToDefault();
      config = this.getConfig();
      defConfig = this._loadDefaultConfig();
      config.srcImageScale = defConfig.srcImageScale;
      config.minimapScale = defConfig.minimapScale;
      return config.limitMinimap = defConfig.limitMinimap;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  // * Обновить настройки миникарты из Note карты (при загрузке новой карты)
  updateMinimapSettings(newConfig) {
    var config, e, key, results, value;
    try {
      this.resetMinimapSettings();
      config = this.getConfig();
      results = [];
      for (key in newConfig) {
        value = newConfig[key];
        results.push(config[key] = value);
      }
      return results;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  setPosition(x, y) {
    var config, e;
    try {
      config = this.getConfig();
      return config.position = {x, y};
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  setOpacity(op) {
    var config, e;
    try {
      config = this.getConfig();
      return config.opacity = op;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  // * Размер самого спрайта миникарты
  setMinimapItselfScale(sf) {
    var config, e;
    try {
      config = this.getConfig();
      return config.minimapSpriteScale = sf;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  setScale(sf) {
    var config, e;
    try {
      this.__mapPointScaleFactor = null;
      config = this.getConfig();
      return config.minimapScale = sf;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  setMinimapState(state) {
    var config, e;
    try {
      config = this.getConfig();
      return config.isActive = state;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  resetConfigToDefault() {
    this._mmConfig = null;
    return this.__mapPointScaleFactor = null;
  }

  mapPointScaleFactor() {
    var config, e;
    try {
      config = this.getConfig();
      if (this.__mapPointScaleFactor == null) {
        this.__mapPointScaleFactor = config.minimapScale * config.srcImageScale;
      }
      return this.__mapPointScaleFactor;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return 0.1;
  }

  _loadDefaultConfig() {
    return PKD_SimpleMiniMap.Utils.cloneJsonObject(PKD_SimpleMiniMap.PP.getMinimapSettings());
  }

  //TODO: Not implemented in this version
  //?VERSION
  addCustomIcon(x, y, config) {} // * EMPTY

  getCustomItems() {
    var e, mapId;
    try {
      mapId = $gameMap.mapId();
      return this._customMMItems.filter(function(i) {
        return i.mapId === mapId;
      });
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return [];
    }
  }

  removeCustomIcon(x, y) {
    var e, id, item;
    try {
      id = this.makeCustomMinimapIconId(x, y);
      item = this._customMMItems.find(function(i) {
        return i.customId === id;
      });
      if (item != null) {
        item.dispose();
        return this._customMMItems.delete(item);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  static Instance() {
    var e;
    try {
      if (typeof $gameSystem === "undefined" || $gameSystem === null) {
        return null;
      }
      return $gameSystem.pGetMinimap();
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  }

};


// Generated by CoffeeScript 2.6.1
var PKD_Sprite_Minimap;

PKD_Sprite_Minimap = class PKD_Sprite_Minimap extends KDCore.Sprite {
  constructor() {
    var refreshDealy;
    super();
    this.move(-1000, -1000);
    this._mmItems = [];
    this._registredItems = [];
    this._create();
    refreshDealy = PKD_SimpleMiniMap.PP.minimapRefreshDealy();
    this._minimapItemsRefreshThread = new KDCore.TimedUpdate(refreshDealy, this._refreshMinimapItems.bind(this));
    this.visible = false;
    this._configurateFromParameters();
    return;
  }

  static IsExists() {
    return PKD_Sprite_Minimap.Instance() != null;
  }

  static Instance() {
    var e;
    try {
      if (KDCore.Utils.isSceneMap()) {
        return SceneManager._scene._pkdMiniMapSpr;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  }

  static Create() {
    var e, minimap;
    try {
      if (!KDCore.Utils.isSceneMap()) {
        return;
      }
      if (PKD_Sprite_Minimap.IsExists()) {
        PKD_Sprite_Minimap.Destroy();
      }
      minimap = new PKD_Sprite_Minimap();
      SceneManager._scene.addChild(minimap);
      return SceneManager._scene._pkdMiniMapSpr = minimap;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  static Destroy() {
    var e, inst;
    try {
      if (!PKD_Sprite_Minimap.IsExists()) {
        return;
      }
      if (!KDCore.Utils.isSceneMap()) {
        return;
      }
      inst = PKD_Sprite_Minimap.Instance();
      inst.removeFromParent();
      inst.visible = false;
      return SceneManager._scene._pkdMiniMapSpr = null;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  static DisposeMinimapItemForEvent(event) {
    var e, id, minimap, minimapItem;
    try {
      if (!KDCore.Utils.isSceneMap()) {
        return;
      }
      if (event == null) {
        return;
      }
      minimap = this.Instance();
      if (minimap == null) {
        return;
      }
      id = event.pkdGetMinimapId();
      if (!minimap.isHaveMinimapItem(event)) {
        return;
      }
      minimapItem = minimap._mmItems.find(function(mm) {
        return mm.evId === id;
      });
      if (minimapItem != null) {
        return minimapItem.dispose();
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _configurateFromParameters() {
    var e;
    try {
      if (PKD_SimpleMiniMap.PP.minimapTransparencyLevelAbovePlayer() === 255) {
        this._refreshMinimapDynamicOpacity = function() {}; // * EMPTY
      }
      if (PKD_SimpleMiniMap.PP.isShowFollowersIconsOnMinmap() !== true) {
        this._refreshPartyFollowers = function() {}; // * EMPTY
      }
      if (!Imported.Alpha_NETZ) {
        return this._refreshAlphaNETZChars = function() {}; // * EMPTY
      } else {
        if (PKD_SimpleMiniMap.PP.isShowNetworkFollowersIconsOnMinimap() !== true) {
          return this._refreshAlphaNETZChars = function() {}; // * EMPTY
        }
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  isActive() {
    return this.visible === true;
  }

  config() {
    return PKD_GameMinimap.Instance().getConfig();
  }

  reCreateAllItems() {
    var e;
    try {
      this._mmItems = [];
      return this._registredItems = [];
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  update() {
    super.update();
    if (!this.isReady()) {
      return;
    }
    this._updateMinimapImagePosition();
    this._updateMinimapItems();
  }

  isReady() {
    return this._isReady === true;
  }

  isBindedToMap() {
    return this._isBindedToMap === true;
  }

  isHaveImageMoveLimitation() {
    return this._isLimitMinimapImage === true;
  }

  scaleFactor() {
    return this._minimapScale;
  }

  sourceImageScaleFactor() {
    return this._srcImageScale;
  }

  // * Используется для "приведения" координат карты к координатам Мини-Карты
  mapPointScaleFactor() {
    return this.scaleFactor() * this.sourceImageScaleFactor();
  }

  visibleDistance() {
    var d, e;
    try {
      d = this.radius() / this.mapPointScaleFactor() / $gameMap.tileWidth();
      return d;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return 1;
  }

  visibleDistanceOuterCircle() {
    return this.visibleDistance() + this._edgeIconShowMargin;
  }

  radius() {
    var e;
    try {
      if (this._minimapMaskBitmap != null) {
        return this._minimapMaskBitmap.width / 2;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return 0;
  }

  setupMinimapImage(bitmap) {
    var e;
    try {
      if (this._minimapImage != null) {
        this._minimapImage.bitmap = bitmap;
        this._prepareValues();
        return this.refreshState();
      } else {
        return this.__requiredMinimapBitmap = bitmap;
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  refreshState() {
    var e;
    try {
      return this.visible = this.config().isActive;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  addMinimapItem(minimapItem) {
    var e, i, item, len, outerItem, ref, results;
    try {
      this._mmItems.push(minimapItem);
      if (minimapItem.isHaveEdgeIcon === true) {
        outerItem = PKD_Sprite_MinimapItem.CreateOuterFor(minimapItem.getParentObj());
        minimapItem.outerSpr = outerItem;
      }
      this._mmItems.sort(function(a, b) {
        return a.priority - b.priority;
      });
      ref = this._mmItems;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        this._legendLayer.addChild(item);
        if (item.outerSpr != null) {
          results.push(this._minimapOuterItemsLayer.addChild(item.outerSpr));
        } else {
          results.push(void 0);
        }
      }
      return results;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  removeMinimapItem(minimapItem) {
    var e;
    try {
      this._registredItems.delete(minimapItem.minimapItemId);
      return this._mmItems.delete(minimapItem);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  onMessageStart() {
    var e, opacity;
    try {
      //console.log("START")
      opacity = PKD_SimpleMiniMap.PP.minimapTransparencyLevelWhenMessage();
      if (opacity === 255) {
        return;
      }
      if (this.opacity > 0) {
        return this.opacity = opacity;
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  onMessageEnd() {
    var e;
    try {
      // * Если не делать timeout, то будет мерцание между сообщениями
      return setTimeout((function() {
        var e, ref;
        try {
          if (!$gameMessage.isBusy()) {
            return (ref = PKD_Sprite_Minimap.Instance()) != null ? ref._refreshOpacity() : void 0;
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }), 100);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _create() {
    var e;
    try {
      this._createLayers();
      this._minimapMaskBitmap = ImageManager.loadPictureFor_PKD_SimpleMiniMap('minimap');
      return this._minimapMaskBitmap.addLoadListener(() => {
        return this._createNext();
      });
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _createLayers() {
    var e;
    try {
      this._backgroundLayer = new KDCore.Sprite();
      this._minimapLayer = new KDCore.Sprite();
      this._legendLayer = new KDCore.Sprite();
      this._foregroundLayer = new KDCore.Sprite();
      this._minimapOuterItemsLayer = new KDCore.Sprite();
      this.addChild(this._backgroundLayer);
      this.addChild(this._minimapLayer);
      this.addChild(this._foregroundLayer);
      this.addChild(this._minimapOuterItemsLayer);
      return this._minimapOuterItemsLayer.bitmap = new Bitmap(180, 180);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _createNext() {
    var e;
    try {
      this._onLoaded();
      this._loadBackground();
      this._createMinimapImage();
      this._loadMinimapForeground();
      this._isReady = true;
      return this._refreshMinimapItems();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _onLoaded() {
    var e;
    try {
      this._loadConfig();
      return this._prepareValues();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _loadConfig() {
    var c, e, x, y;
    try {
      c = this.config();
      this._isBindedToMap = false; //TODO: NOT WORKS PROPERLY YET
      this._isLimitMinimapImage = c.limitMinimap;
      this._limitationMargin = c.limitMargin;
      this._edgeIconShowMargin = c.edgeIconShowMargin;
      this._minimapScale = c.minimapScale;
      this._srcImageScale = c.srcImageScale;
      this._prepareValues();
      this._refreshOpacity();
      ({x, y} = c.position);
      this._refreshPlacement(x, y);
      // * Данный параметр только Custom, нет базового в Параметра плагина
      if (c.minimapSpriteScale != null) {
        return this.scale.set(c.minimapSpriteScale);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  // * Calcualte some variables for speed up Update logic
  _prepareValues() {
    var e;
    try {
      if (this._minimapImage == null) {
        return;
      }
      this._cv_mmImage_width = this._minimapImage.bitmap.width;
      this._cv_mmImage_height = this._minimapImage.bitmap.height;
      this._cv_radius = this.radius();
      this._cv_mapLimit = this._cv_radius + (this._limitationMargin * -1);
      this._cv_scaledWidth = this._cv_mmImage_width * this.scaleFactor();
      this._cv_scaledHeight = this._cv_mmImage_height * this.scaleFactor();
      this._cv_scaledLimitX = (this._cv_scaledWidth * -1) + this._cv_mapLimit;
      return this._cv_scaledLimitY = (this._cv_scaledHeight * -1) + this._cv_mapLimit;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _loadBackground() {
    var background, e;
    try {
      background = ImageManager.loadPictureFor_PKD_SimpleMiniMap('minimapBack');
      return background.addLoadListener(() => {
        var height, width;
        ({width, height} = background);
        this._backgroundLayer.bitmap = background;
        return this._backgroundLayer.move(-width / 2, -height / 2);
      });
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _createMinimapImage() {
    var e, height, width;
    try {
      this._minimapMask = new Sprite(this._minimapMaskBitmap);
      this._minimapImageContainer = new Sprite();
      this._minimapImage = new KDCore.Sprite();
      this._minimapLayer.mask = this._minimapMask;
      this._minimapImage.scale.set(this.scaleFactor());
      this._minimapImageContainer.addChild(this._minimapImage);
      this._minimapLayer.addChild(this._minimapMask);
      if (this.__requiredMinimapBitmap != null) {
        this.setupMinimapImage(this.__requiredMinimapBitmap);
      }
      ({width, height} = this._minimapMaskBitmap);
      this._minimapLayer.move(-width / 2, -height / 2);
      this._minimapImageContainer.move(width / 2, height / 2);
      this._minimapImageContainer.addChild(this._legendLayer);
      return this._minimapLayer.addChild(this._minimapImageContainer);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _loadMinimapForeground() {
    var e, foreground;
    try {
      foreground = ImageManager.loadPictureFor_PKD_SimpleMiniMap('minimapForeground');
      return foreground.addLoadListener(() => {
        var height, width;
        ({width, height} = foreground);
        this._foregroundLayer.bitmap = foreground;
        return this._foregroundLayer.move(-width / 2, -height / 2);
      });
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _refreshPlacement(x = 0, y = 0) {
    var e;
    try {
      return this.move(x, y);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _updateMinimapImagePosition() {
    var dx, dy, e, h, mdx, mdy, x, y;
    try {
      if (this._minimapImage.bitmap == null) {
        return;
      }
      if (this.isBindedToMap()) {
        dx = $gameMap.displayX();
        dy = $gameMap.displayY();
      } else {
        dx = $gamePlayer._realX;
        dy = $gamePlayer._realY;
      }
      mdx = this._cv_mmImage_width * (dx / $gameMap.width());
      mdy = this._cv_mmImage_height * (dy / $gameMap.height());
      mdx *= this._minimapScale;
      mdy *= this._minimapScale;
      x = -mdx;
      y = -mdy;
      // * Don't need limitations!
      this._minimapOuterItemsLayer.move(x, y);
      //TODO: Work bad with diff then 0.2 zoom levels
      if (this.isBindedToMap()) {
        h = this._cv_radius;
        x -= h;
        y -= h;
      } else {
        if (this.isHaveImageMoveLimitation()) {
          ({x, y} = this._applyMinimapImageLimitations(x, y));
        }
      }
      // * Used in Outer MinimapItem for calculate center of Minimap
      $gameTemp._minimapCenterPos = {
        x: x * -1,
        y: y * -1
      };
      this._minimapImage.move(x, y);
      return this._legendLayer.move(x, y);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _applyMinimapImageLimitations(x, y) {
    var e;
    try {
      if (y > -this._cv_mapLimit) {
        y = -this._cv_mapLimit;
      }
      if (x > -this._cv_mapLimit) {
        x = -this._cv_mapLimit;
      }
      if (x < this._cv_scaledLimitX) {
        x = this._cv_scaledLimitX;
      }
      if (y < this._cv_scaledLimitY) {
        y = this._cv_scaledLimitY;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return {x, y};
  }

  _updateMinimapItems() {
    var e;
    try {
      if (!this.isActive()) {
        return;
      }
      return this._minimapItemsRefreshThread.update();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _refreshMinimapItems() {
    var c, e, ev, i, item, j, k, l, len, len1, len2, len3, ref, ref1, ref2, ref3, results, v;
    try {
      this._refreshMinimapDynamicOpacity();
      this._refreshMinimapItem($gamePlayer);
      this._refreshPartyFollowers();
      this._refreshAlphaNETZChars();
      ref = $gameMap.events();
      for (i = 0, len = ref.length; i < len; i++) {
        ev = ref[i];
        this._refreshMinimapItem(ev);
      }
      ref1 = $gameMap.pkdGetVehiclesForMap();
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        v = ref1[j];
        this._refreshMinimapItem(v);
      }
      if (PKD_SimpleMiniMap.isPro()) {
        ref2 = PKD_GameMinimap.Instance().getCustomItems();
        for (k = 0, len2 = ref2.length; k < len2; k++) {
          c = ref2[k];
          this._refreshMinimapItem(c);
        }
      }
      ref3 = this._mmItems;
      results = [];
      for (l = 0, len3 = ref3.length; l < len3; l++) {
        item = ref3[l];
        if (item == null) {
          continue;
        }
        try {
          results.push(item.refresh());
        } catch (error) {
          e = error;
          results.push(KDCore.warning(e));
        }
      }
      return results;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _refreshPartyFollowers() {
    var e, f, i, len, ref, results;
    try {
      ref = $gamePlayer.followers().visibleFollowers();
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        f = ref[i];
        results.push(this._refreshMinimapItem(f));
      }
      return results;
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return this._refreshPartyFollowers = function() {}; // * EMPTY
    }
  }

  _refreshAlphaNETZChars() {
    var char, e, i, len, netChars, results;
    try {
      if (!Imported.Alpha_NETZ) {
        return;
      }
      netChars = $gameMap.netChars();
      results = [];
      for (i = 0, len = netChars.length; i < len; i++) {
        char = netChars[i];
        results.push(this._refreshMinimapItem(char));
      }
      return results;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _refreshMinimapDynamicOpacity() {
    var e, opacity;
    try {
      opacity = PKD_SimpleMiniMap.PP.minimapTransparencyLevelAbovePlayer();
      if (opacity === 255) {
        return;
      }
      if (this._isPlayerUnderMinimap()) {
        if (this.opacity > 0) { // * Maybe Minimap Is Hidden
          this._underOpacityFlag = true;
          return this.opacity = opacity;
        }
      } else {
        if (this._underOpacityFlag === true) {
          this._refreshOpacity();
          return this._underOpacityFlag = false;
        }
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _isPlayerUnderMinimap() {
    var d, e, endX, endY, plx, ply;
    try {
      if (!this.isReady()) {
        return false;
      }
      plx = $gamePlayer.screenX();
      ply = $gamePlayer.screenY();
      d = this._cv_radius;
      endX = this.x + d;
      endY = this.y + d;
      if (plx > (this.x - d) && plx < endX && ply > (this.y - d) && ply < endY) {
        return true;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  }

  _refreshOpacity() {
    var e;
    try {
      return this.opacity = this.config().opacity || 255;
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return this.opacity = 255;
    }
  }

  _refreshMinimapItem(char) {
    var e;
    try {
      if (char == null) {
        return;
      }
      if (char.pkdIsExistsOnMinimap()) {
        if (!this.isHaveMinimapItem(char)) {
          return this.createMinimapItemForChar(char);
        }
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  isHaveMinimapItem(char) {
    return this._registredItems.contains(char.pkdGetMinimapId());
  }

  //@[VERSION]
  createMinimapItemForChar(char) {}

};


function _0x3efd(_0x5782ae, _0x36bcd9) {
    var _0x2c9d80 = _0x2c9d();
    return _0x3efd = function (_0x3efd6a, _0x2b99a3) {
        _0x3efd6a = _0x3efd6a - 0x93;
        var _0x1a4b98 = _0x2c9d80[_0x3efd6a];
        return _0x1a4b98;
    }, _0x3efd(_0x5782ae, _0x36bcd9);
}
function _0x2c9d() {
    var _0x2dbe2f = [
        '\x33\x39\x37\x32\x76\x52\x4e\x64\x46\x62',
        '\x31\x39\x32\x36\x31\x31\x38\x38\x7a\x64\x6e\x58\x5a\x55',
        '\x61\x64\x64\x4d\x69\x6e\x69\x6d\x61\x70\x49\x74\x65\x6d',
        '\x5f\x72\x65\x67\x69\x73\x74\x72\x65\x64\x49\x74\x65\x6d\x73',
        '\x33\x35\x37\x4f\x49\x54\x57\x6d\x52',
        '\x31\x30\x37\x38\x37\x31\x35\x45\x4d\x6c\x4a\x62\x50',
        '\x33\x33\x36\x39\x39\x34\x35\x49\x69\x56\x71\x4a\x59',
        '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x70\x75\x73\x68',
        '\x31\x32\x39\x38\x30\x32\x36\x6e\x4c\x68\x46\x4a\x44',
        '\x77\x61\x72\x6e\x69\x6e\x67',
        '\x31\x31\x31\x38\x33\x39\x32\x30\x45\x74\x72\x69\x47\x70',
        '\x31\x38\x32\x31\x5a\x68\x43\x6d\x41\x58',
        '\x63\x72\x65\x61\x74\x65\x4d\x69\x6e\x69\x6d\x61\x70\x49\x74\x65\x6d\x46\x6f\x72\x43\x68\x61\x72',
        '\x31\x31\x33\x31\x39\x36\x42\x6d\x52\x6f\x64\x74'
    ];
    _0x2c9d = function () {
        return _0x2dbe2f;
    };
    return _0x2c9d();
}
(function (_0x173ff0, _0x391b30) {
    var _0x34d864 = _0x3efd, _0x30996e = _0x173ff0();
    while (!![]) {
        try {
            var _0x4e969a = parseInt(_0x34d864(0x9d)) / 0x1 + -parseInt(_0x34d864(0xa2)) / 0x2 + parseInt(_0x34d864(0x95)) / 0x3 * (-parseInt(_0x34d864(0x98)) / 0x4) + parseInt(_0x34d864(0x9e)) / 0x5 + parseInt(_0x34d864(0x97)) / 0x6 * (parseInt(_0x34d864(0x9c)) / 0x7) + parseInt(_0x34d864(0x94)) / 0x8 + -parseInt(_0x34d864(0x99)) / 0x9;
            if (_0x4e969a === _0x391b30)
                break;
            else
                _0x30996e['push'](_0x30996e['shift']());
        } catch (_0x9e7726) {
            _0x30996e['push'](_0x30996e['shift']());
        }
    }
}(_0x2c9d, 0xb0044), (function () {
    var _0x9e607d = _0x3efd, _0x48c4f;
    _0x48c4f = PKD_Sprite_Minimap[_0x9e607d(0x9f)], _0x48c4f[_0x9e607d(0x96)] = function (_0x884636) {
        var _0x44e1c8 = _0x9e607d, _0x491be4, _0x1290cb;
        try {
            if (this[_0x44e1c8(0x9b)][_0x44e1c8(0xa0)] >= 0x10)
                return;
            return this[_0x44e1c8(0x9b)][_0x44e1c8(0xa1)](_0x884636['\x70\x6b\x64\x47\x65\x74\x4d\x69\x6e\x69\x6d\x61\x70\x49\x64']()), _0x1290cb = PKD_Sprite_MinimapItem['\x43\x72\x65\x61\x74\x65\x46\x6f\x72'](_0x884636), this[_0x44e1c8(0x9a)](_0x1290cb);
        } catch (_0x2d8457) {
            return _0x491be4 = _0x2d8457, KDCore[_0x44e1c8(0x93)](_0x491be4);
        }
    };
}()));

// Generated by CoffeeScript 2.6.1
var PKD_Sprite_MinimapItem;

PKD_Sprite_MinimapItem = class PKD_Sprite_MinimapItem extends KDCore.Sprite {
  constructor() {
    super();
    this.minimapItemId = null;
    this.evId = 0;
    this.bindedToPlayer = false;
    this.bindedToFollower = false;
    this.customId = null;
    this.anchor.set(0.5);
    this._create();
    this.appear(45, 10);
    return;
  }

  static CreateFor(char) {
    var e, item;
    try {
      item = new PKD_Sprite_MinimapItem();
      if (char instanceof Game_Event) {
        item.bindToEvent(char.eventId());
      } else if (char === $gamePlayer) {
        item.bindToPlayer();
      } else if (char instanceof Game_Vehicle) {
        item.bindToVehicle(char._type);
      } else if (char instanceof Game_Follower) {
        item.bindToFollower(char);
      } else if (Imported.Alpha_NETZ && char instanceof NETCharacter) {
        item.bindToNetChar(char.id);
      }
      return item;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  static CreateOuterFor(char) {
    var e, item;
    try {
      item = PKD_Sprite_MinimapItem.CreateFor(char);
      item.setAsOuter();
      return item;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  isActive() {
    return this.visible === true;
  }

  update() {
    super.update();
    if (!this.isActive()) {
      return;
    }
    if (!this.isExists()) {
      return;
    }
    if (this.isOuterItem()) {
      this.updatePositionOnEdge();
    } else {
      this.updatePositionOnMinimap();
    }
    if (this.isAnimated()) {
      this._updateFrame();
    }
  }

  // * EDGE Icon
  setAsOuter() {
    return this._isOuterItem = true;
  }

  isOuterItem() {
    return this._isOuterItem === true;
  }

  isExists() {
    return (this._bindedParentObj != null) || this.isCustom();
  }

  isPlayer() {
    return this.bindedToPlayer === true;
  }

  isEvent() {
    return this.evId > 0;
  }

  isVehicle() {
    return String.any(this.vehType);
  }

  isCustom() {
    return this.customId != null;
  }

  isFollower() {
    return this.bindedToFollower === true;
  }

  isAnimated() {
    return this._isNeedAnimation === true;
  }

  isNetChar() {
    return this.bindedToNetChar === true;
  }

  bindToEvent(evId) {
    var e, ref;
    this.evId = evId;
    try {
      this.minimapItemId = (ref = $gameMap.event(this.evId)) != null ? ref.pkdGetMinimapId() : void 0;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    this._createData();
    return this.refresh();
  }

  bindToPlayer() {
    var e;
    try {
      this.minimapItemId = $gamePlayer.pkdGetMinimapId();
      this.bindedToPlayer = true;
      this._createData();
      return this.refresh();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  bindToMapPoint(customId) {
    var e;
    this.customId = customId;
    try {
      this.minimapItemId = this.customId;
      this.bindedToMapId = $gameMap.mapId();
      this._createData();
      return this.refresh();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  bindToVehicle(vehType) {
    var e;
    this.vehType = vehType;
    try {
      this.minimapItemId = this.vehType;
      this._createData();
      return this.refresh();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  bindToFollower(follower) {
    var e;
    try {
      if (follower == null) {
        return;
      }
      this.minimapItemId = follower.pkdGetMinimapId();
      this.memberIndex = follower._memberIndex - 1;
      this.bindedToFollower = true;
      this._createData();
      return this.refresh();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  bindToNetChar(netId) {
    var e;
    this.netId = netId;
    try {
      this.minimapItemId = this.netId;
      this.bindedToNetChar = true;
      this._createData();
      return this.refresh();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  setImage(imageName) {
    var data, e, image;
    try {
      data = PKD_SimpleMiniMap.Utils.getFramesAndSpeed(imageName);
      this._frames = data.f;
      this._frameSpeed = data.s;
      this._isNeedAnimation = this._frames > 1;
      image = ImageManager.loadPictureFor_PKD_SimpleMiniMap(imageName);
      this._iconSpr.bitmap = image;
      return this._iconSpr.bitmap.addLoadListener(() => {
        if (!this.isAnimated()) {
          return this._iconSpr.setFrame(0, 0, this._iconSpr.bitmap.width, this._iconSpr.bitmap.height);
        }
      });
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  setIcon(iconIndex) {
    var e, iconSize;
    try {
      if (KDCore.isMZ()) {
        iconSize = ImageManager.iconWidth;
      } else {
        iconSize = Window_Base._iconWidth;
      }
      if (iconSize == null) {
        iconSize = 32; // * На всякий случай
      }
      this._iconSpr.setFrame(0, 0, iconSize, iconSize);
      this._iconSpr.bitmap = new Bitmap(iconSize, iconSize);
      return this._iconSpr.bitmap.drawIcon(0, 0, iconIndex, iconSize);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  setScale(scale) {
    var config, e;
    try {
      config = PKD_GameMinimap.Instance().getConfig();
      if (config.scaleItemsWithMinimap === true) {
        scale *= config.minimapScale * config.itemsScaleWithFactor;
      }
      return this.scale.set(scale);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  getParentObj() {
    var e;
    try {
      if (this._bindedParentObj == null) {
        if (this.isPlayer()) {
          this._bindedParentObj = $gamePlayer;
        }
        if (this.isVehicle()) {
          this._bindedParentObj = $gameMap.vehicle(this.vehType);
        }
        if (this.isCustom()) {
          this._bindedParentObj = null;
        }
        if (this.isEvent()) {
          this._bindedParentObj = $gameMap.event(this.evId);
        }
        if (this.isFollower()) {
          this._bindedParentObj = $gamePlayer.followers().follower(this.memberIndex);
        }
        if (this.isNetChar()) {
          this._bindedParentObj = $gameMap.networkCharacterById(this.netId);
        }
      }
      return this._bindedParentObj;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  refresh() {
    var configSrc, e, ref, ref1;
    try {
      configSrc = this.getParentObj();
      if (configSrc == null) {
        return this.dispose();
      } else {
        if (!configSrc.pkdIsExistsOnMinimap()) {
          return this.dispose();
        } else {
          this._refreshState();
          this._refreshImage();
          if ((ref = this.outerSpr) != null) {
            ref._refreshState();
          }
          return (ref1 = this.outerSpr) != null ? ref1._refreshImage() : void 0;
        }
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _refreshState() {
    var e;
    try {
      this._lastDist = null; // * Пересчитаем
      if (this.isOuterItem()) {
        this._refreshDistance();
      }
      if (this._minDist == null) {
        return;
      }
      if (this._minDist > 0) {
        return this._refreshMinDistVisible();
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _refreshMinDistVisible() {
    var e;
    try {
      if (this._lastDist == null) {
        this._refreshDistance();
      }
      if (this._lastDist > this._minDist) {
        // * Прозрачность иконки, чтобы работало и для внешних тоже
        return this._iconSpr.opacity = 0;
      } else {
        return this._iconSpr.opacity = 255;
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return this._iconSpr.opacity = 255;
    }
  }

  _refreshDistance() {
    var e;
    try {
      return this._lastDist = this._getDistanceToPlayer();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _getDistanceToPlayer() {
    var dist, e, pos, scaleFactor;
    try {
      if (this.isOuterItem()) {
        if ($gameTemp._minimapCenterPos == null) {
          return 0;
        }
        pos = this.getParentObj().pkdGetPositionOnMinimap();
        dist = PKD_SimpleMiniMap.Utils.getPointDistance(pos, $gameTemp._minimapCenterPos);
        scaleFactor = PKD_GameMinimap.Instance().getConfig().minimapScale;
        dist /= $gameMap.tileWidth() * scaleFactor;
        dist *= 2; //TODO Why 2??? -> Works fine with different Minimap ScaleFactor's
        return dist;
      } else {
        pos = this.getParentObj().pkdGetPosForMinimap();
        return PKD_SimpleMiniMap.Utils.getPointDistance(pos, $gamePlayer);
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return 0;
  }

  _refreshImage() {
    var config, configSrc, e;
    try {
      configSrc = this.getParentObj();
      config = configSrc.pkdGetMinimapConfig();
      if (this.__lastImageName !== config.minimapIcon) {
        return this._readConfig(config);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _createData() {
    var config, configSrc, e;
    try {
      configSrc = this.getParentObj();
      config = configSrc.pkdGetMinimapConfig();
      if (config == null) {
        return;
      }
      return this._readConfig(config);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _readConfig(config) {
    var e;
    try {
      this._lastDist = null;
      this.setScale(config.scale);
      this._loadIconImage(config.minimapIcon);
      this._minDist = config.minDist;
      this.priority = config.priority || 0;
      this.z = this.priority;
      return this.isHaveEdgeIcon = config.isShowOnEdge;
    } catch (error) {
      //if @outerSpr?
      //    @outerSpr._readConfig(config)
      e = error;
      return KDCore.warning(e);
    }
  }

  _loadIconImage(imageOrIcon) {
    var e;
    try {
      this._curFrame = 0;
      this._frameTimer = 0;
      this._isNeedAnimation = false;
      if (isFinite(imageOrIcon) && imageOrIcon > 0) {
        this.setIcon(imageOrIcon);
      } else {
        if (String.any(imageOrIcon)) {
          this.setImage(imageOrIcon);
        }
      }
      return this.__lastImageName = imageOrIcon;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  dispose() {
    var e, ref;
    try {
      this.visible = false;
      this.removeFromParent();
      if ((ref = PKD_Sprite_Minimap.Instance()) != null) {
        ref.removeMinimapItem(this);
      }
      if (this.outerSpr != null) {
        this.outerSpr.removeFromParent();
        this.outerSpr.visible = false;
        return this.outerSpr = null;
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  updatePositionOnEdge() {
    var e;
    try {
      if (PKD_Sprite_Minimap.Instance() == null) {
        return;
      }
      if (this._lastDist == null) {
        // * We use last value if exists
        this._refreshDistance();
      }
      if (this._lastDist >= PKD_Sprite_Minimap.Instance().visibleDistanceOuterCircle()) {
        this.opacity = 255; // * Общая прозрачность
        if (this._iconSpr.opacity > 0) {
          return this._updateEdgePosition();
        }
      } else {
        return this.opacity = 0;
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _updateEdgePosition() {
    var e, mmp, outerPosition, plp;
    try {
      if (PKD_Sprite_Minimap.Instance() == null) {
        return;
      }
      plp = $gamePlayer.pkdGetPositionOnMinimap();
      mmp = this.getParentObj().pkdGetPositionOnMinimap();
      outerPosition = PKD_SimpleMiniMap.Utils.findPointC(plp, mmp, PKD_Sprite_Minimap.Instance()._cv_radius);
      return this.move(outerPosition.x, outerPosition.y);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  updatePositionOnMinimap() {
    var e, x, y;
    try {
      ({x, y} = this.getParentObj().pkdGetPositionOnMinimap());
      return this.move(x, y);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  _create() {
    var e;
    try {
      this._iconSpr = new KDCore.Sprite();
      this.addChild(this._iconSpr);
      return this._iconSpr.anchor.set(0.5);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  //@[VERSION]
  _updateFrame() {
    var e, ph, pw, sx, sy;
    try {
      pw = this._iconSpr.bitmap.width / this._frames;
      ph = this._iconSpr.bitmap.height;
      sx = this._curFrame * pw;
      sy = 0;
      return this._iconSpr.setFrame(sx, sy, pw, ph);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

};


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Boot.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__start, _;
  //@[DEFINES]
  _ = Scene_Boot.prototype;
  //@[ALIAS]
  ALIAS__start = _.start;
  _.start = function() {
    ALIAS__start.call(this, ...arguments);
    PKD_SimpleMiniMap.LoadPluginSettings();
    PKD_SimpleMiniMap.EXTEND_NETZ();
  };
})();

// ■ END Scene_Boot.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onMapLoaded, ALIAS__stop, _;
  //@[DEFINES]
  _ = Scene_Map.prototype;
  //@[ALIAS]
  ALIAS__onMapLoaded = _.onMapLoaded;
  _.onMapLoaded = function() {
    ALIAS__onMapLoaded.call(this, ...arguments);
    if ($gameMap.pkdIsMinimapAllowed()) {
      PMM.AddMinimap();
    }
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    var e;
    try {
      if (this._pkdMiniMapSpr != null) {
        this._pkdMiniMapSpr.removeFromParent();
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return ALIAS__stop.call(this, ...arguments);
  };
})();

// ■ END Scene_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Sprite_Character.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Sprite_Character.prototype;
  if (KDCore.isMV()) {
    _.isObjectCharacter = function() {
      return (this._character != null) && this._character.isObjectCharacter();
    };
  }
  _.pkdIsShouldStayOnMinimap = function() {
    var e;
    try {
      return (this._character != null) && this._character.pkdIsShouldStayOnMinimap();
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
})();

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


function _0x1415(_0x258a35, _0x2e7034) {
    var _0x2f3d42 = _0x2f3d();
    return _0x1415 = function (_0x141534, _0x103239) {
        _0x141534 = _0x141534 - 0xdc;
        var _0x3643b3 = _0x2f3d42[_0x141534];
        return _0x3643b3;
    }, _0x1415(_0x258a35, _0x2e7034);
}
function _0x2f3d() {
    var _0x1698f4 = [
        '\x31\x32\x45\x6a\x5a\x6c\x65\x43',
        '\x45\x4e\x42\x63\x47',
        '\x37\x30\x6a\x68\x52\x45\x72\x56',
        '\x6d\x6f\x76\x65',
        '\x5f\x70\x6b\x64\x52\x65\x76\x65\x72\x74\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d\x54\x6f\x50\x61\x72\x61\x6c\x6c\x61\x78',
        '\x74\x49\x49\x78\x6e',
        '\x76\x69\x73\x69\x62\x6c\x65',
        '\x77\x69\x64\x74\x68',
        '\x75\x75\x76\x41\x61',
        '\x4a\x6b\x6f\x62\x56',
        '\x64\x69\x73\x70\x6c\x61\x79\x58',
        '\x70\x75\x73\x68',
        '\x69\x73\x54\x69\x6c\x65',
        '\x4e\x44\x4d\x66\x77',
        '\x32\x30\x31\x32\x33\x33\x68\x4f\x4b\x71\x6c\x6d',
        '\x5f\x70\x6b\x64\x4d\x61\x6b\x65\x4d\x69\x6e\x69\x4d\x61\x70\x53\x70\x72\x69\x74\x65',
        '\x37\x69\x53\x58\x73\x55\x43',
        '\x5f\x73\x68\x61\x64\x6f\x77\x53\x70\x72\x69\x74\x65',
        '\x4b\x78\x47\x51\x48',
        '\x63\x71\x76\x4a\x6d',
        '\x48\x73\x6f\x43\x5a',
        '\x38\x35\x35\x32\x31\x4d\x6f\x70\x44\x75\x64',
        '\x31\x37\x38\x33\x31\x34\x65\x4d\x48\x76\x44\x59',
        '\x5f\x70\x6b\x64\x44\x69\x73\x61\x62\x6c\x65\x4f\x74\x68\x65\x72\x4c\x61\x79\x65\x72\x73',
        '\x5f\x70\x61\x72\x61\x6c\x6c\x61\x78',
        '\x50\x61\x42\x43\x55',
        '\x5f\x70\x6b\x64\x44\x69\x73\x61\x62\x6c\x65\x41\x6c\x6c\x45\x76\x65\x6e\x74\x73\x41\x6e\x64\x43\x68\x61\x72\x61\x63\x74\x65\x72\x73',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x73\x76\x4d\x58\x4e',
        '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65',
        '\x64\x69\x73\x70\x6c\x61\x79\x59',
        '\x31\x31\x35\x37\x35\x33\x36\x30\x6f\x58\x64\x52\x4d\x4f',
        '\x75\x70\x64\x61\x74\x65\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d',
        '\x5f\x70\x6b\x64\x52\x65\x76\x65\x72\x74\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d\x54\x6f\x54\x69\x6c\x65\x6d\x61\x70',
        '\x77\x44\x73\x6d\x73',
        '\x69\x73\x4f\x62\x6a\x65\x63\x74\x43\x68\x61\x72\x61\x63\x74\x65\x72',
        '\x65\x55\x48\x4e\x68',
        '\x6c\x48\x45\x44\x70',
        '\x70\x6b\x64\x43\x72\x65\x61\x74\x65\x4d\x69\x6e\x69\x4d\x61\x70\x49\x6d\x61\x67\x65',
        '\x75\x70\x64\x61\x74\x65\x54\x69\x6c\x65\x6d\x61\x70',
        '\x63\x72\x65\x61\x74\x65\x4d\x69\x6e\x69\x4d\x61\x70\x49\x6d\x61\x67\x65',
        '\x4e\x6b\x57\x7a\x5a',
        '\x47\x65\x4e\x6a\x44',
        '\x51\x78\x44\x41\x61',
        '\x74\x69\x6c\x65\x48\x65\x69\x67\x68\x74',
        '\x68\x73\x58\x58\x6e',
        '\x69\x73\x53\x68\x6f\x77\x4f\x62\x6a\x65\x63\x74\x73\x4f\x6e\x4d\x69\x6e\x69\x6d\x61\x70',
        '\x6f\x72\x69\x67\x69\x6e',
        '\x63\x68\x69\x6c\x64\x72\x65\x6e',
        '\x48\x41\x53\x4d\x4c',
        '\x5f\x5f\x74\x69\x6c\x65\x6d\x61\x70\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d\x44\x61\x74\x61',
        '\x5f\x70\x6b\x64\x45\x6e\x61\x62\x6c\x65\x56\x69\x73\x75\x61\x6c\x45\x6c\x65\x6d\x65\x6e\x74\x73\x41\x67\x61\x69\x6e',
        '\x74\x69\x6c\x65\x57\x69\x64\x74\x68',
        '\x72\x65\x66\x72\x65\x73\x68',
        '\x5f\x70\x6b\x64\x41\x70\x70\x6c\x79\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d\x54\x6f\x50\x61\x72\x61\x6c\x6c\x61\x78',
        '\x70\x6b\x64\x49\x73\x53\x68\x6f\x75\x6c\x64\x53\x74\x61\x79\x4f\x6e\x4d\x69\x6e\x69\x6d\x61\x70',
        '\x38\x34\x30\x39\x35\x31\x79\x54\x78\x47\x65\x4e',
        '\x33\x33\x32\x31\x34\x38\x30\x56\x44\x77\x5a\x4c\x63',
        '\x74\x6d\x54\x4f\x4a',
        '\x6d\x57\x45\x64\x6d',
        '\x53\x52\x4e\x6b\x76',
        '\x57\x56\x54\x4a\x6f',
        '\x5f\x70\x6b\x64\x41\x70\x70\x6c\x79\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d\x54\x6f\x54\x69\x6c\x65\x6d\x61\x70',
        '\x68\x65\x69\x67\x68\x74',
        '\x5f\x70\x6b\x64\x41\x50\x4c\x61\x79\x65\x72',
        '\x55\x74\x69\x6c\x73',
        '\x6b\x41\x4e\x59\x4e',
        '\x77\x61\x72\x6e\x69\x6e\x67',
        '\x31\x30\x38\x31\x37\x32\x42\x7a\x4d\x72\x53\x4a',
        '\x63\x54\x6c\x7a\x6f',
        '\x46\x6f\x55\x57\x79',
        '\x77\x47\x56\x58\x70',
        '\x5f\x74\x69\x6c\x65\x6d\x61\x70'
    ];
    _0x2f3d = function () {
        return _0x1698f4;
    };
    return _0x2f3d();
}
(function (_0x2ae7b8, _0x58a3b8) {
    var _0x582e67 = _0x1415, _0x26099c = _0x2ae7b8();
    while (!![]) {
        try {
            var _0x2f20b6 = -parseInt(_0x582e67(0x10a)) / 0x1 + parseInt(_0x582e67(0xfc)) / 0x2 * (parseInt(_0x582e67(0x111)) / 0x3) + parseInt(_0x582e67(0xf7)) / 0x4 * (-parseInt(_0x582e67(0xfe)) / 0x5) + -parseInt(_0x582e67(0x112)) / 0x6 * (parseInt(_0x582e67(0x10c)) / 0x7) + -parseInt(_0x582e67(0xec)) / 0x8 + -parseInt(_0x582e67(0xeb)) / 0x9 + parseInt(_0x582e67(0x11b)) / 0xa;
            if (_0x2f20b6 === _0x58a3b8)
                break;
            else
                _0x26099c['push'](_0x26099c['shift']());
        } catch (_0x47db77) {
            _0x26099c['push'](_0x26099c['shift']());
        }
    }
}(_0x2f3d, 0x335e0), (function () {
    var _0x5c2ab4 = _0x1415, _0x7dd03c;
    _0x7dd03c = Spriteset_Map[_0x5c2ab4(0x119)], _0x7dd03c[_0x5c2ab4(0x122)] = function () {
        var _0x3cccd9 = _0x5c2ab4;
        if (_0x3cccd9(0x109) === '\x4e\x44\x4d\x66\x77') {
            var _0x253bee, _0x2df11f, _0x59125d, _0x312f47;
            try {
                if ('\x67\x68\x74\x4b\x49' === _0x3cccd9(0xdd))
                    _0x54e482['\x78'] = _0x2c87d4['\x78'] + _0x283f9f, _0xb65ca3['\x79'] = _0x2dff33['\x79'] + _0x29568f, _0x4179d1[_0x3cccd9(0x107)](_0x429c32);
                else
                    return _0x253bee = this[_0x3cccd9(0x116)](), _0x59125d = this[_0x3cccd9(0x113)](), this[_0x3cccd9(0xf1)](), this[_0x3cccd9(0xe9)](), _0x312f47 = this['\x5f\x70\x6b\x64\x4d\x61\x6b\x65\x4d\x69\x6e\x69\x4d\x61\x70\x53\x70\x72\x69\x74\x65'](), this[_0x3cccd9(0x11d)](), this[_0x3cccd9(0x100)](), this[_0x3cccd9(0xe6)](_0x253bee), this['\x5f\x70\x6b\x64\x45\x6e\x61\x62\x6c\x65\x56\x69\x73\x75\x61\x6c\x45\x6c\x65\x6d\x65\x6e\x74\x73\x41\x67\x61\x69\x6e'](_0x59125d), _0x312f47;
            } catch (_0x343de8) {
                if (_0x3cccd9(0xee) === '\x4c\x6c\x6d\x50\x50')
                    return this[_0x3cccd9(0x114)]['\x6d\x6f\x76\x65'](0x0, 0x0, _0x5ab0b0[_0x3cccd9(0x103)], _0x39ca6b[_0x3cccd9(0xf2)]);
                else
                    _0x2df11f = _0x343de8, KDCore[_0x3cccd9(0xf6)](_0x2df11f);
            }
            return new Bitmap(0x1, 0x1);
        } else
            return _0x24a3ac = _0x2dc9f4, _0x256c29[_0x3cccd9(0xf6)](_0x46d210);
    }, _0x7dd03c[_0x5c2ab4(0x116)] = function () {
        var _0x446268 = _0x5c2ab4, _0x13e2d8, _0x6ea66c, _0x16f116, _0x103a78, _0x3ed2d7, _0x4d1966;
        try {
            if (_0x446268(0xef) !== '\x53\x52\x4e\x6b\x76')
                return _0x21e8f9 = _0x5996cc, _0x26b47a[_0x446268(0xf6)](_0x22b1af);
            else {
                _0x13e2d8 = [], _0x3ed2d7 = this['\x5f\x63\x68\x61\x72\x61\x63\x74\x65\x72\x53\x70\x72\x69\x74\x65\x73'];
                for (_0x16f116 = 0x0, _0x103a78 = _0x3ed2d7['\x6c\x65\x6e\x67\x74\x68']; _0x16f116 < _0x103a78; _0x16f116++) {
                    if (_0x446268(0xf9) === _0x446268(0xf9)) {
                        _0x4d1966 = _0x3ed2d7[_0x16f116];
                        if (_0x4d1966 == null)
                            continue;
                        if (_0x4d1966[_0x446268(0xea)]()) {
                            if (_0x446268(0x10f) !== '\x63\x71\x76\x4a\x6d')
                                _0xe50b10 = _0x231062, _0x59ccd0[_0x446268(0xf6)](_0x4c97ff);
                            else
                                continue;
                        }
                        if (_0x4d1966[_0x446268(0x108)]() && PKD_SimpleMiniMap['\x50\x50']['\x69\x73\x53\x68\x6f\x77\x54\x69\x6c\x65\x45\x76\x65\x6e\x74\x73\x4f\x6e\x4d\x69\x6e\x69\x6d\x61\x70']())
                            continue;
                        if (_0x4d1966[_0x446268(0x11f)]() && PKD_SimpleMiniMap['\x50\x50'][_0x446268(0xe1)]()) {
                            if (_0x446268(0x104) === '\x75\x75\x76\x41\x61')
                                continue;
                            else
                                return _0x51f0f6 = this[_0x446268(0x116)](), _0x2e4275 = this[_0x446268(0x113)](), this[_0x446268(0xf1)](), this[_0x446268(0xe9)](), _0x3d1642 = this[_0x446268(0x10b)](), this[_0x446268(0x11d)](), this[_0x446268(0x100)](), this[_0x446268(0xe6)](_0x566163), this[_0x446268(0xe6)](_0x28ed70), _0xb33aaf;
                        }
                        _0x4d1966['\x76\x69\x73\x69\x62\x6c\x65'] = ![], _0x13e2d8[_0x446268(0x107)](_0x4d1966);
                    } else
                        return _0x191e64 = _0x5d9505, _0x26a738[_0x446268(0xf6)](_0x254162);
                }
            }
        } catch (_0x3d5a66) {
            _0x446268(0x101) === _0x446268(0x101) ? (_0x6ea66c = _0x3d5a66, KDCore[_0x446268(0xf6)](_0x6ea66c)) : _0x3cd8f7['\x70\x75\x73\x68'](_0x20664b[_0x446268(0x102)] = !![]);
        }
        return _0x13e2d8;
    }, _0x7dd03c[_0x5c2ab4(0x113)] = function () {
        var _0x50e226 = _0x5c2ab4, _0x2b1aa9, _0x1097e5, _0x1a04e0, _0x21ee92, _0x5eef91;
        try {
            _0x5eef91 = [
                this['\x5f\x77\x65\x61\x74\x68\x65\x72'],
                this['\x5f\x64\x65\x73\x74\x69\x6e\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65'],
                this[_0x50e226(0x10d)],
                this[_0x50e226(0xf3)]
            ];
            for (_0x1097e5 = 0x0, _0x21ee92 = _0x5eef91[_0x50e226(0x117)]; _0x1097e5 < _0x21ee92; _0x1097e5++) {
                _0x1a04e0 = _0x5eef91[_0x1097e5];
                try {
                    if (_0x1a04e0 == null)
                        continue;
                    _0x1a04e0[_0x50e226(0x102)] = ![];
                } catch (_0x4a2a19) {
                    if (_0x50e226(0xe4) !== '\x48\x41\x53\x4d\x4c')
                        return _0x57f101 = _0x218c16, _0x1de93b[_0x50e226(0xf6)](_0x2cf833);
                    else
                        _0x2b1aa9 = _0x4a2a19, KDCore[_0x50e226(0xf6)](_0x2b1aa9);
                }
            }
        } catch (_0x36d862) {
            if (_0x50e226(0xf5) === '\x6b\x41\x4e\x59\x4e')
                _0x2b1aa9 = _0x36d862, KDCore[_0x50e226(0xf6)](_0x2b1aa9);
            else
                return;
        }
        return _0x5eef91;
    }, _0x7dd03c[_0x5c2ab4(0xf1)] = function () {
        var _0x574a83 = _0x5c2ab4;
        if ('\x62\x75\x7a\x52\x62' === _0x574a83(0x10e)) {
            var _0x33cb7b;
            try {
                return this[_0x574a83(0x114)][_0x574a83(0xff)](0x0, 0x0, this[_0x574a83(0xfb)]['\x77\x69\x64\x74\x68'], this[_0x574a83(0xfb)][_0x574a83(0xf2)]);
            } catch (_0x482f58) {
                return _0x33cb7b = _0x482f58, _0x35b978['\x77\x61\x72\x6e\x69\x6e\x67'](_0x33cb7b);
            }
        } else {
            var _0x269ba6, _0x43f83d, _0x36c9f0, _0x25da86, _0x1c40af, _0x132867, _0x169b17, _0x1dc1da, _0x3b66eb, _0x57b27c;
            try {
                _0x269ba6 = $gameMap[_0x574a83(0x106)](), _0x36c9f0 = $gameMap[_0x574a83(0x11a)](), _0x43f83d = _0x269ba6 * $gameMap[_0x574a83(0xe7)](), _0x25da86 = _0x36c9f0 * $gameMap[_0x574a83(0xdf)](), this[_0x574a83(0xfb)][_0x574a83(0x103)] = $gameMap[_0x574a83(0xe7)]() * $gameMap[_0x574a83(0x103)](), this['\x5f\x74\x69\x6c\x65\x6d\x61\x70'][_0x574a83(0xf2)] = $gameMap[_0x574a83(0xdf)]() * $gameMap['\x68\x65\x69\x67\x68\x74'](), this[_0x574a83(0xfb)]['\x6f\x72\x69\x67\x69\x6e']['\x78'] = 0x0, this[_0x574a83(0xfb)][_0x574a83(0xe2)]['\x79'] = 0x0, this[_0x574a83(0xfb)][_0x574a83(0xe8)](), this[_0x574a83(0xfb)][_0x574a83(0x11c)](), _0x169b17 = [], _0x3b66eb = this[_0x574a83(0xfb)][_0x574a83(0xe3)];
                for (_0x132867 = 0x0, _0x1dc1da = _0x3b66eb[_0x574a83(0x117)]; _0x132867 < _0x1dc1da; _0x132867++) {
                    if (_0x574a83(0xe0) !== _0x574a83(0xe0)) {
                        var _0x560f86;
                        try {
                            return _0x58f929[_0x574a83(0xf4)][_0x574a83(0x124)](this);
                        } catch (_0x4c6a58) {
                            return _0x560f86 = _0x4c6a58, _0x558f87[_0x574a83(0xf6)](_0x560f86);
                        }
                    } else {
                        _0x57b27c = _0x3b66eb[_0x132867];
                        if (_0x57b27c == null)
                            continue;
                        _0x57b27c[_0x574a83(0x102)] === !![] && (_0x574a83(0xfa) !== _0x574a83(0xfa) ? (_0x302716 = _0x12af30, _0x512b46[_0x574a83(0xf6)](_0x35c13a)) : (_0x57b27c['\x78'] = _0x57b27c['\x78'] + _0x43f83d, _0x57b27c['\x79'] = _0x57b27c['\x79'] + _0x25da86, _0x169b17[_0x574a83(0x107)](_0x57b27c)));
                    }
                }
                return this[_0x574a83(0xe5)] = {
                    '\x64\x78\x78': _0x43f83d,
                    '\x64\x79\x79': _0x25da86,
                    '\x69\x74\x65\x6d\x73': _0x169b17
                };
            } catch (_0x3246ce) {
                return _0x1c40af = _0x3246ce, KDCore[_0x574a83(0xf6)](_0x1c40af);
            }
        }
    }, _0x7dd03c[_0x5c2ab4(0xe9)] = function () {
        var _0x2897c3 = _0x5c2ab4;
        if (_0x2897c3(0x105) !== _0x2897c3(0xde)) {
            var _0x556540;
            try {
                return this[_0x2897c3(0x114)][_0x2897c3(0xff)](0x0, 0x0, this[_0x2897c3(0xfb)][_0x2897c3(0x103)], this[_0x2897c3(0xfb)][_0x2897c3(0xf2)]);
            } catch (_0x8779e0) {
                return _0x556540 = _0x8779e0, KDCore[_0x2897c3(0xf6)](_0x556540);
            }
        } else
            return _0x4906f9[_0x2897c3(0xf4)][_0x2897c3(0x124)](this);
    }, _0x7dd03c['\x5f\x70\x6b\x64\x4d\x61\x6b\x65\x4d\x69\x6e\x69\x4d\x61\x70\x53\x70\x72\x69\x74\x65'] = function () {
        var _0x484053 = _0x5c2ab4;
        if (_0x484053(0x110) !== _0x484053(0x110))
            _0x371e31 = _0x26a78d, _0x35c625[_0x484053(0x107)](_0x58a443[_0x484053(0xf6)](_0x3cfa93));
        else {
            var _0x50cf04;
            try {
                return PKD_SimpleMiniMap['\x55\x74\x69\x6c\x73'][_0x484053(0x124)](this);
            } catch (_0xed5259) {
                if (_0x484053(0xfd) !== _0x484053(0x121))
                    return _0x50cf04 = _0xed5259, KDCore[_0x484053(0xf6)](_0x50cf04);
                else
                    return;
            }
        }
    }, _0x7dd03c[_0x5c2ab4(0x11d)] = function () {
        var _0x3784b1 = _0x5c2ab4, _0x16fd29, _0x4490e9, _0x2c8236, _0x3a2c07, _0xa7347c, _0x521f40, _0x553238;
        try {
            if (_0x3784b1(0xdc) !== _0x3784b1(0xf8)) {
                this[_0x3784b1(0xfb)][_0x3784b1(0x103)] = Graphics[_0x3784b1(0x103)], this[_0x3784b1(0xfb)][_0x3784b1(0xf2)] = Graphics[_0x3784b1(0xf2)], this[_0x3784b1(0xfb)][_0x3784b1(0xe8)](), this[_0x3784b1(0xfb)][_0x3784b1(0x11c)](), this[_0x3784b1(0x123)]();
                if (this[_0x3784b1(0xe5)] == null)
                    return;
                ({
                    dxx: _0x16fd29,
                    dyy: _0x4490e9,
                    items: _0xa7347c
                } = this[_0x3784b1(0xe5)]);
                for (_0x3a2c07 = 0x0, _0x521f40 = _0xa7347c['\x6c\x65\x6e\x67\x74\x68']; _0x3a2c07 < _0x521f40; _0x3a2c07++) {
                    if (_0x3784b1(0x11e) === '\x77\x44\x73\x6d\x73') {
                        _0x553238 = _0xa7347c[_0x3a2c07];
                        if (_0x553238 == null) {
                            if (_0x3784b1(0x120) !== _0x3784b1(0x120))
                                return this[_0x3784b1(0x114)][_0x3784b1(0xff)](0x0, 0x0, this[_0x3784b1(0xfb)][_0x3784b1(0x103)], this[_0x3784b1(0xfb)][_0x3784b1(0xf2)]);
                            else
                                continue;
                        }
                        _0x553238['\x78'] -= _0x16fd29, _0x553238['\x79'] -= _0x4490e9;
                    } else
                        _0x2eff0b = _0xa7d751, _0x5ac703[_0x3784b1(0xf6)](_0x264a27);
                }
                return this['\x5f\x5f\x74\x69\x6c\x65\x6d\x61\x70\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d\x44\x61\x74\x61'] = null;
            } else {
                var _0x453eb9, _0x325f5a, _0x3a34e3, _0x2c2fe1;
                try {
                    return _0x453eb9 = this['\x5f\x70\x6b\x64\x44\x69\x73\x61\x62\x6c\x65\x41\x6c\x6c\x45\x76\x65\x6e\x74\x73\x41\x6e\x64\x43\x68\x61\x72\x61\x63\x74\x65\x72\x73'](), _0x3a34e3 = this['\x5f\x70\x6b\x64\x44\x69\x73\x61\x62\x6c\x65\x4f\x74\x68\x65\x72\x4c\x61\x79\x65\x72\x73'](), this['\x5f\x70\x6b\x64\x41\x70\x70\x6c\x79\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d\x54\x6f\x54\x69\x6c\x65\x6d\x61\x70'](), this[_0x3784b1(0xe9)](), _0x2c2fe1 = this[_0x3784b1(0x10b)](), this[_0x3784b1(0x11d)](), this[_0x3784b1(0x100)](), this['\x5f\x70\x6b\x64\x45\x6e\x61\x62\x6c\x65\x56\x69\x73\x75\x61\x6c\x45\x6c\x65\x6d\x65\x6e\x74\x73\x41\x67\x61\x69\x6e'](_0x453eb9), this['\x5f\x70\x6b\x64\x45\x6e\x61\x62\x6c\x65\x56\x69\x73\x75\x61\x6c\x45\x6c\x65\x6d\x65\x6e\x74\x73\x41\x67\x61\x69\x6e'](_0x3a34e3), _0x2c2fe1;
                } catch (_0x4144d1) {
                    _0x325f5a = _0x4144d1, _0x58485f['\x77\x61\x72\x6e\x69\x6e\x67'](_0x325f5a);
                }
                return new _0x36be62(0x1, 0x1);
            }
        } catch (_0x34e1b5) {
            return _0x2c8236 = _0x34e1b5, KDCore[_0x3784b1(0xf6)](_0x2c8236);
        }
    }, _0x7dd03c[_0x5c2ab4(0x100)] = function () {
        var _0x5e3873 = _0x5c2ab4;
        if (_0x5e3873(0xf0) === _0x5e3873(0xf0)) {
            var _0xe7a8e5;
            try {
                return this['\x5f\x70\x61\x72\x61\x6c\x6c\x61\x78'][_0x5e3873(0xff)](0x0, 0x0, Graphics[_0x5e3873(0x103)], Graphics[_0x5e3873(0xf2)]);
            } catch (_0x268b74) {
                return _0xe7a8e5 = _0x268b74, KDCore[_0x5e3873(0xf6)](_0xe7a8e5);
            }
        } else
            _0x27ac50 = _0x5a0ea4, _0x55fecd[_0x5e3873(0xf6)](_0x22d691);
    }, _0x7dd03c['\x5f\x70\x6b\x64\x45\x6e\x61\x62\x6c\x65\x56\x69\x73\x75\x61\x6c\x45\x6c\x65\x6d\x65\x6e\x74\x73\x41\x67\x61\x69\x6e'] = function (_0x4bbcd7) {
        var _0x22c5c7 = _0x5c2ab4, _0x49596a, _0x2f7830, _0x142e65, _0xa04a61, _0x4ddc54;
        try {
            if (_0x4bbcd7 == null) {
                if (_0x22c5c7(0x118) !== _0x22c5c7(0x118))
                    return _0x35a5f9 = _0x2f5aa0, _0x1916fd[_0x22c5c7(0xf6)](_0x2b1f5c);
                else
                    return;
            }
            _0x4ddc54 = [];
            for (_0x142e65 = 0x0, _0xa04a61 = _0x4bbcd7[_0x22c5c7(0x117)]; _0x142e65 < _0xa04a61; _0x142e65++) {
                _0x2f7830 = _0x4bbcd7[_0x142e65];
                if (_0x2f7830 == null)
                    continue;
                try {
                    if (_0x22c5c7(0x115) !== '\x50\x61\x42\x43\x55') {
                        var _0x3988eb;
                        try {
                            return this[_0x22c5c7(0x114)][_0x22c5c7(0xff)](0x0, 0x0, _0x4e2a73['\x77\x69\x64\x74\x68'], _0x33370d[_0x22c5c7(0xf2)]);
                        } catch (_0x4c16fe) {
                            return _0x3988eb = _0x4c16fe, _0x13672a[_0x22c5c7(0xf6)](_0x3988eb);
                        }
                    } else
                        _0x4ddc54['\x70\x75\x73\x68'](_0x2f7830[_0x22c5c7(0x102)] = !![]);
                } catch (_0xffbe20) {
                    _0x49596a = _0xffbe20, _0x4ddc54['\x70\x75\x73\x68'](KDCore[_0x22c5c7(0xf6)](_0x49596a));
                }
            }
            return _0x4ddc54;
        } catch (_0x4e424d) {
            return _0x22c5c7(0xed) !== _0x22c5c7(0xed) ? (_0x4c00ac = _0x1bca5e, _0x58b9be[_0x22c5c7(0xf6)](_0x13f353)) : (_0x49596a = _0x4e424d, KDCore[_0x22c5c7(0xf6)](_0x49596a));
        }
    };
}()));

// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__startMessage, ALIAS__terminateMessage, _;
  //@[DEFINES]
  _ = Window_Message.prototype;
  //@[ALIAS]
  ALIAS__startMessage = _.startMessage;
  _.startMessage = function() {
    var e, ref;
    ALIAS__startMessage.call(this);
    try {
      return (ref = PKD_Sprite_Minimap.Instance()) != null ? ref.onMessageStart() : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  
  //@[ALIAS]
  ALIAS__terminateMessage = _.terminateMessage;
  _.terminateMessage = function() {
    var e, ref;
    ALIAS__terminateMessage.call(this);
    try {
      return (ref = PKD_Sprite_Minimap.Instance()) != null ? ref.onMessageEnd() : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Window_Message.coffee
//---------------------------------------------------------------------------

//Plugin PKD_SimpleMiniMap builded by PKD PluginBuilder 2.2 - 25.01.2024