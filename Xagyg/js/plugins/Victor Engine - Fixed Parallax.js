#==============================================================================
# ** Victor Engine - Fixed Parallax
#------------------------------------------------------------------------------
# Author : Victor Sant
#
# Version History:
#  v 1.00 - 2011.12.20 > First release
#  v 1.01 - 2011.12.30 > Faster Regular Expressions
#------------------------------------------------------------------------------
#  This script allows to fix the parallax in a way that it follows the
# tileset movement. Useful for parallax mapping
#------------------------------------------------------------------------------
# Compatibility
#   Requires the script 'Victor Engine - Basic Module'
# 
# * Alias methods (Default)
#    class Game_Map
#      def setup(map_id)
#      def parallax_ox(bitmap)
#      def parallax_oy(bitmap)
#
#------------------------------------------------------------------------------
# Instructions:
#  To instal the script, open you script editor and paste this script on
#  a new section on bellow the Materials section. This script must also
#  be bellow the script 'Victor Engine - Basic'
#
#------------------------------------------------------------------------------
# Maps note tags:
#   Tags to be used on the Maps note box in the database
#  
#   <fixed parallax>
#    Add this tag to the map note box to make the parallax fixed.
#
#==============================================================================

#==============================================================================
# ** Victor Engine
#------------------------------------------------------------------------------
#   Setting module for the Victor Engine
#==============================================================================

module Victor_Engine
  #--------------------------------------------------------------------------
  # * required
  #   This method checks for the existance of the basic module and other
  #   VE scripts required for this script to work, don't edit this
  #--------------------------------------------------------------------------
  def self.required(name, req, version, type = nil)
    if !$imported[:ve_basic_module]
      msg = "The script '%s' requires the script\n"
      msg += "'VE - Basic Module' v%s or higher above it to work properly\n"
      msg += "Go to http://victorenginescripts.wordpress.com/ to download this script."
      msgbox(sprintf(msg, self.script_name(name), version))
      exit
    else
      self.required_script(name, req, version, type)
    end
  end
  #--------------------------------------------------------------------------
  # * script_name
  #   Get the script name base on the imported value, don't edit this
  #--------------------------------------------------------------------------
  def self.script_name(name, ext = "VE")
    name = name.to_s.gsub("_", " ").upcase.split
    name.collect! {|char| char == ext ? "#{char} -" : char.capitalize }
    name.join(" ")
  end
end

$imported ||= {}
$imported[:ve_fixed_parallax] = 1.01
Victor_Engine.required(:ve_fixed_parallax, :ve_basic_module, 1.00, :above)

#==============================================================================
# ** Game_Map
#------------------------------------------------------------------------------
#  This class handles maps. It includes scrolling and passage determination
# functions. The instance of this class is referenced by $game_map.
#==============================================================================

class Game_Map
  #--------------------------------------------------------------------------
  # * Alias method: setup
  #--------------------------------------------------------------------------
  alias :setup_ve_fixed_parallax :setup
  def setup(map_id)
    setup_ve_fixed_parallax(map_id)
    @fixed_parallax = note =~ /<FIXED PARALLAX>/i
  end
  #--------------------------------------------------------------------------
  # * Alias method: parallax_ox
  #--------------------------------------------------------------------------
  alias :parallax_ox_ve_fixed_parallax :parallax_ox
  def parallax_ox(bitmap)
    if @fixed_parallax
      @parallax_x = $game_map.display_x * 32
    else
      parallax_ox_ve_fixed_parallax(bitmap)
    end
  end
  #--------------------------------------------------------------------------
  # * Alias method: parallax_oy
  #--------------------------------------------------------------------------
  alias :parallax_oy_ve_fixed_parallax :parallax_oy
  def parallax_oy(bitmap)
    if @fixed_parallax
      @parallax_y = $game_map.display_y * 32
    else
      parallax_oy_ve_fixed_parallax(bitmap)
    end
  end
end
