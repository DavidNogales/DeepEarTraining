#import pandas as pd
import pickle,random
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