//=============================================================================
// Yanfly Engine Plugins - Region Events
// YEP_RegionEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_RegionEvents = true;

var Yanfly = Yanfly || {};
Yanfly.RCE = Yanfly.RCE || {};

//=============================================================================
 /*:
 * @plugindesc v1.01a Faz com que toda hora que um jogador pisar em certos
 * ID's de Regiões, o jogo irá executar certos eventos comuns.
 * @author Yanfly Engine Plugins
 *
 * @param Region 1
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 2
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 3
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 4
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 5
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 6
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 7
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 8
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 9
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 10
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 11
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 12
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 13
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 14
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 15
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 16
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 17
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 18
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 19
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 20
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 21
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 22
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 23
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 24
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 25
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 26
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 27
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 28
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 29
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 30
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 31
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 32
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 33
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 34
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 35
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 36
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 37
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 38
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 39
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 40
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 41
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 42
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 43
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 44
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 45
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 46
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 47
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 48
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 49
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 50
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 51
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 52
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 53
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 54
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 55
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 56
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 57
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 58
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 59
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 60
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 61
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 62
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 63
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 64
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 65
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 66
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 67
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 68
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 69
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 70
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 71
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 72
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 73
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 74
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 75
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 76
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 77
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 78
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 79
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 80
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 81
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 82
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 83
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 84
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 85
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 86
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 87
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 88
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 89
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 90
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 91
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 92
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 93
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 94
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 95
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 96
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 97
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 98
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 99
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 100
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 101
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 102
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 103
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 104
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 105
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 106
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 107
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 108
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 109
 * @desc O evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 110
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 111
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 112
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 113
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 114
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 115
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 116
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 117
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 118
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 119
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 120
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 121
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 122
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 123
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 124
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 125
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 126
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 127
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 128
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 129
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 130
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 131
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 132
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 133
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 134
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 135
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 136
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 137
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 138
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 139
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 140
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 141
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 142
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 143
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 144
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 145
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 146
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 147
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 148
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 149
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 150
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 151
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 152
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 153
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 154
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 155
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 156
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 157
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 158
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 159
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 160
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 161
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 162
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 163
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 164
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 165
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 166
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 167
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 168
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 169
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 170
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 171
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 172
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 173
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 174
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 175
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 176
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 177
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 178
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 179
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 180
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 181
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 182
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 183
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 184
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 185
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 186
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 187
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 188
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 189
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 190
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 191
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 192
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 193
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 194
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 195
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 196
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 197
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 198
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 199
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 200
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 201
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 202
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 203
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 204
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 205
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 206
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 207
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 208
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 209
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 210
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 211
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 212
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 213
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 214
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 215
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 216
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 217
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 218
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 219
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 220
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 221
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 222
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 223
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 224
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 225
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 226
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 227
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 228
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 229
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 230
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 231
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 232
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 233
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 234
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 235
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 236
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 237
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 238
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 239
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 240
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 241
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 242
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 243
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 244
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 245
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 246
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 247
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 248
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 249
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 250
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 251
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 252
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 253
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 254
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @param Region 255
 * @desc Qual evento comum a ser executado para essa região quando pisado nela.
 * Use 0 para fazer aquela região não iniciar um evento comum.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introdução e Instruções
 * ============================================================================
 *
 * Há 255 Regiões que você pode marcar no seu mapa. Você pode estabelecer que
 * quando jogadores pisem nessas Regiões específicas, um Evento Comum irá ser
 * executado cada vez que eles pisarem nela. Para fazer isso, vincule o ID de
 * um Evento Comum com o número da Região nos parâmetros desse plugin. Isso
 * fará com que qualquer tile com aquele específico ID de Região inicie um
 * evento de toque de jogador usando o ID do Evento Comum que você marcou pra
 * ele.
 *
 * Tenha em mente que se qualquer evento comum ocorrer durante o input de
 * um toque, ele irá limpar o touch input como intencionado pelo mecanismo do
 * jogo.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Você pode usar esse notetag dentro de seus mapas.
 *
 * Map Notetags:
 *   <Region x Event: y>
 *   Se um jogador pisar em um tile marcada pela Região x, ele irá executar
 *   o evento comum y. Isso irá sobrepor as configurações padrões marcadas
 *   no editor especificamente para aquele mapa.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01a:
 * - Fixed a bug with region event notetags that stopped working if it was used
 * to teleport onto the same map.
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_RegionEvents');
Yanfly.Param = Yanfly.Param || {};

Yanfly.RCE.RegionEvents = {};
for (Yanfly.i = 1; Yanfly.i <= 255; ++Yanfly.i) {
  Yanfly.line = "Number(Yanfly.Parameters['Region " + Yanfly.i + "'] || 0)";
  Yanfly.RCE.RegionEvents[Yanfly.i] = eval(Yanfly.line);
};

//=============================================================================
// DataManager
//=============================================================================

DataManager.processRECNotetags = function() {
  if (!$dataMap) return;
  if (!$dataMap.note) return;
  var notedata = $dataMap.note.split(/[\r\n]+/);
  $dataMap.regionCommonEvents = {};
  for (var i = 0; i < notedata.length; i++) {
    var line = notedata[i];
    if (line.match(/<(?:REGION)[ ](\d+)[ ](?:EVENT):[ ](\d+)>/i)) {
      $dataMap.regionCommonEvents[parseInt(RegExp.$1)] = parseInt(RegExp.$2);
    }
  }
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.RCE.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    if ($dataMap) DataManager.processRECNotetags();
    Yanfly.RCE.Game_Map_setup.call(this, mapId);
};

Game_Map.prototype.isRegionEvent = function(mx, my) {
    return (this.isValid(mx, my) && this.regionEventTag(mx, my));
};

Game_Map.prototype.getUniqueRegionCommonEvent = function(regionId) {
    if ($dataMap.regionCommonEvents === undefined) {
      DataManager.processRECNotetags();
    }
    if ($dataMap.regionCommonEvents && $dataMap.regionCommonEvents[regionId]) {
      return $dataMap.regionCommonEvents[regionId];
    }
    return 0;
};

Game_Map.prototype.regionEventTag = function(mx, my) {
    if (this.regionId(mx, my) <= 0) return false;
    var regionId = this.regionId(mx, my);
    if (this.getUniqueRegionCommonEvent(regionId) > 0) return true;
    return Yanfly.RCE.RegionEvents[regionId] > 0;
};

Game_Map.prototype.moveAfterCommonEvent = function() {
    var interpreter = $gameMap._interpreter;
    if (!interpreter._list) return false;
    if (interpreter.eventId() > 0) return false;
    var list = interpreter._list;
    if ($gameTemp.destinationX() === $gamePlayer.x &&
      $gameTemp.destinationY() === $gamePlayer.y) {
        $gameTemp.clearDestination();
    }
    for (var i = 0; i < list.length; ++i) {
      var code = list[i].code;
      if ([201, 205, 230, 232, 261, 301].contains(code)) return false;
    }
    return true;
};

//=============================================================================
// Game_Player
//=============================================================================

Yanfly.RCE.Game_Player_checkEventTriggerHere =
    Game_Player.prototype.checkEventTriggerHere;
Game_Player.prototype.checkEventTriggerHere = function(triggers) {
    if (!this.canStartLocalEvents()) return;
    this.processRegionEvent();
    Yanfly.RCE.Game_Player_checkEventTriggerHere.call(this, triggers);
};

Game_Player.prototype.processRegionEvent = function() {
    if (!$gameMap.isRegionEvent(this.x, this.y)) return;
    if (Input.isTriggered('ok')) return;
    if (TouchInput.isPressed()) return;
    var regionId = $gameMap.regionId(this.x, this.y)
    if ($gameMap.getUniqueRegionCommonEvent(regionId) > 0) {
      var commonEventId = $gameMap.getUniqueRegionCommonEvent(regionId);
    } else {
      var commonEventId = Yanfly.RCE.RegionEvents[regionId];
    }
    $gameTemp.reserveCommonEvent(commonEventId);
};

Yanfly.RCE.Game_Player_canMove = Game_Player.prototype.canMove;
Game_Player.prototype.canMove = function() {
    if ($gameMessage.isBusy()) {
      return false;
    }
    if (this.isMoveRouteForcing() || this.areFollowersGathering()) {
        return false;
    }
    if (this._vehicleGettingOn || this._vehicleGettingOff) {
        return false;
    }
    if (this.isInVehicle() && !this.vehicle().canMove()) {
        return false;
    }
    if ($gameMap.isEventRunning() && $gameMap.moveAfterCommonEvent()) {
      return true;
    }
    return Yanfly.RCE.Game_Player_canMove.call(this);
};


//=============================================================================
// End of File
//=============================================================================
