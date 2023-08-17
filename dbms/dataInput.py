from fastapi import FastAPI
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from urllib.parse import quote_plus
from config import conf


def insert_data():
    MONGODB_URL = conf["DB_URL"]
    password = quote_plus(conf["password"])
    MONGODB_URL = MONGODB_URL.replace("password", password)
    client = MongoClient(MONGODB_URL, server_api=ServerApi('1'))
    db = client["tonDB"]
    path = './blacklist.txt'
    with open(path, 'r') as mainconf:
        data = list(set(list(mainconf.read().split("\n"))))
        for i in data:
            input = {"address": i.strip()}
            db.blacklist.insert_one(input)
    print("Data inserted successfully")
    # 연결 종료
    client.close()

if __name__ == "__main__":
    insert_data()
