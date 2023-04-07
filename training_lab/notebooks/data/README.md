# Transposed Dataset

Transposed by hand using [abcjs](https://paulrosen.github.io/abcjs/examples/output-transpose.html).

## Folder Structure and File Description

- **original_dataset**
  - **clean_original_data.abc**: ABC TuneBook with all the songs together in order to transpose them more easily.
  - **clean_original_data.pkl**: DataFrame in pickle format with all the original data and cleaned data obtained from applying the preprocessing function for EDA.
  - **clean_original_training_data_song_examples.abc**: ABC TuneBook with some song examples of how the training data is generated.
  - **clean_original_training_data.pkl**: Same as `clean_original_data.pkl` but with the differences on the relevant columns that serve to generate the slightly modified header for training.
- **augmented_dataset**
  - **dataset_0.abc**: cleaned dataset from original dataset. Is essentially the same file as `clean_original_data.abc` but copied here for easier parsing.
  - **dataset_X.abc**: X number of semitones transposed **upwards**.
  - **dataset_minX.abc**: X number of semitones transposed **downwards**.
  - **clean_augmented_data.pkl**: Has the same kind of data as `clean_original_training_data.pkl` but extracted from all the transposed songs.
