## Use the script call: (switch_autoshadow) to enable/disable autoshadows.

#Credits for Abt Plouton
 $autoshadow_switch = true  #Default autoshadow - true means regular autoshadow
 
class Game_Map
  attr_writer :autoshadows
  def autoshadows
    # Set autoshadows to false if it is not yet defined
    @autoshadows = @autoshadows == nil ? false : @autoshadows
    return @autoshadows
  end
  alias ma_remove_auto_shadows_on_setup setup
  def setup(map_id)
    ma_remove_auto_shadows_on_setup(map_id)
    # Rather than repeatedly call a method, set a local variable to have it's data
    if $autoshadow_switch == false
      ma_data = data
      return if autoshadows
      # For all squares on the map
      for x in 0...ma_data.xsize
        for y in 0...ma_data.ysize
        # If there is an autoshadow on this tile
          if ma_data[x,y,2] == 0
          # Delete auto Shadow
            ma_data[x,y,2] = ma_data[x,y,0]
            ma_data[x,y,0] = 0
          end
        end
      end
    end
  end
end

class Game_Interpreter
  
  def switch_autoshadow
  if $autoshadow_switch == true
    $autoshadow_switch = false
  else
    $autoshadow_switch = true
  end
    $game_map.setup($game_map.map_id)
    $game_map.refresh
  end
  
end