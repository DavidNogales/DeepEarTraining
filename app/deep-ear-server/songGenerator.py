import pandas as pd
class SongGenerator:

    def __init__(self):
        self.db = self.load_dataframe()

    def load_dataframe(self):
        df = pd.read_pickle('small_db.pkl') 
        return df

    def get_random_song(self,song_key):
        current_key = song_key
        mask = self.db['sample_name'].str.contains(current_key,case=True)
        new_song = list(self.db[mask]['song_formatted'].sample(1))
        return new_song[0]