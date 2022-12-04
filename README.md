#DeepEarTraining

A Deep Learning Based Tool for Ear Training

## Project Objective

1. Train a model that generates a meaningful exercise of melodic dictation
    - A meaningful exercise should follow basic harmony rules, a basic chord progession and be 8 bars long.

    - The exercise should have a predetermined complexity (easy, medium, hard) in order to provide some sort of progression.

2. Develop a web interface to interact with the model



## Training the model


1. Choose dataset: 
    - Bach Chorales
    - ABC folk dataset(repository)
    - Make own dataset
    - Other


2. Choose dataset representation:
    - data is only symbolic:
        - intermediate:
            - NoteSeq
            - ABC notation
        - final:
            - one-hot encoding
3. Choose arquitecture:
    - Simple model:
        - RNN
        - LSTM
        - Transformer
    - Complex model:
        - MidiNet: CNN-GAN
        - Anticipation-RNN: Constraint and Token RNN
        - RL-Tuner: RNN-RL
    - Also reuse other trained models? (Transfer Learning)

    - Explore a "new" method?


4. Experimentation:
    - Experiment on several models at once or focus on a single one?
    - Model evaluation
        - Initial -> Automatic
        - Final   -> Music Teachers
5. Deploy model


## Developing the Interface

1. Figma prototype
2. Research technology stacks
3. ????

