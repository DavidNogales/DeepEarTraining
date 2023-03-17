#FROM tensorflow/tensorflow:latest-gpu
FROM python:3.8.10

RUN apt-get update && apt-get upgrade -y

WORKDIR /server_code

COPY ./requirements.txt requirements.txt

RUN pip install -r requirements.txt


#CMD ["uvicorn", "main:main", "--host", "0.0.0.0", "--port", "80"]

EXPOSE 8000

#CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]

