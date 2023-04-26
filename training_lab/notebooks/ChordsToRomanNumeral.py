import re
from music21 import harmony,key,roman,chord

def chord2roman(chord_name,song_key):
    flat_symbol = 'b'
    flat_symbol_music21 = '-'
    if flat_symbol in chord_name:
        chord_name = chord_name.replace(flat_symbol,flat_symbol_music21)
    chord_symb = harmony.ChordSymbol(chord_name)
    chord_symb.key = key.Key(song_key)
    #roman_numeral = chord_symb.romanNumeral.figure
    chord_obj = chord.Chord(chord_symb.pitches)
    key_obj = key.Key(song_key)
    roman_numeral  = roman.romanNumeralFromChord(chord_obj, key_obj)
    return roman_numeral.romanNumeralAlone

def roman2chord(chord_roman_num,song_key):
    rn = roman.RomanNumeral(chord_roman_num, song_key)
    chord_name = rn.pitchedCommonName.split(' ')[0]
    #chord_name = rn.figure
    return chord_name

def chord2notation(match,song_key,to_roman_notation):
    #print('current_song:',match.group(1))
    answer=''
    if(to_roman_notation):
        answer = '"' + chord2roman(match.group(1),song_key) + '"'
    else:
        answer = '"' + roman2chord(match.group(1),song_key) + '"'
    return answer 

def replace_chords(song,song_key,to_roman_notation):
    new_song = re.sub(r'"(.*?)"',lambda chord: chord2notation(chord,song_key,to_roman_notation), song)
    return new_song