import pandas as pd
import pickle,random, json
class SongGenerator:

    def __init__(self):
        #self.db = self.load_dataframe()
        self.db = self.load_dict()


    def load_dict(self):
        with open('data.pkl', 'rb') as f:
            loaded_data = pickle.load(f)
            return loaded_data
        
    #def load_dataframe(self):
    #    df = pd.read_pickle('small_db.pkl') 
    #    return df

    def get_random_song(self,song_key,song_meter):
        #current_key = song_key
        #mask = self.db['sample_name'].str.contains(current_key,case=True)
        #new_song = list(self.db[mask]['song_formatted'].sample(1))
        #return new_song[0]
        meter = song_meter
        current_key = song_key
        song_key = (meter,current_key)
        random_element = random.choice(self.db[song_key])
        return random_element

    def get_keys(self):
        return self.db.keys()

    def get_all_songs(self):
        formatted_songs = []
        song_id = 0
        for (meter, key), songs in self.db.items():
            for song in songs:
                is_major = 'm' not in key
       	        formatted_song = {
		   "id":song_id,
		   "body":song,
		   "key":key[0],
		   "meter":meter,
		   "mode": "Major" if is_major else "Minor",
                }
                formatted_songs.append(formatted_song)
                song_id +=1
        return formatted_songs
if __name__=="__main__":
	print("song generator")
	song_gen =SongGenerator()
	#print(song_gen.get_random_song("C","4/4"))
	#print(song_gen.get_keys())
	songs = song_gen.get_all_songs()
	with open("songs.json","w") as songs_file:
                data = json.dumps(songs, indent=4)
                songs_file.write(data)

	df = pd.DataFrame.from_dict(songs)
	df.to_parquet("songs.parquet")
	
