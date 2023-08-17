from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.server_api import ServerApi
from urllib.parse import quote_plus
from config import conf

def insert_data():
    # MongoDB 연결 설정
    MONGODB_URL = conf["DB_URL"]
    password = quote_plus(conf["password"])
    MONGODB_URL = MONGODB_URL.replace("password", password)
    client = AsyncIOMotorClient(MONGODB_URL, server_api=ServerApi('1'))
    db = client["tonDB"]  # 데이터베이스 선택
    # 데이터 입력
    data = {"name": "John", "age": 30}
    db.blacklist.insert_one(data)
    print("Data inserted successfully")
    # 연결 종료
    client.close()

if __name__ == "__main__":
    insert_data()
