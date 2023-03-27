#FROM tensorflow/tensorflow:latest-gpu
#FROM huggingface/transformers-tensorflow-gpu:4.27.3
FROM huggingface/transformers-pytorch-gpu:4.27.3
RUN apt-get update && apt-get upgrade -y

#WORKDIR /tf-env
WORKDIR /pt-env

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY overrides.json /usr/local/share/jupyter/lab/settings/

EXPOSE 8888

#ENTRYPOINT [ "jupyter", "lab", "--ip=0.0.0.0", "--allow-root", "--no-browser"]

