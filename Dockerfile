FROM tensorflow/tensorflow:latest-gpu

WORKDIR /tf-env

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY overrides.json /usr/local/share/jupyter/lab/settings/

EXPOSE 8888

#ENTRYPOINT [ "jupyter", "lab", "--ip=0.0.0.0", "--allow-root", "--no-browser"]

