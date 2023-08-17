from fastapi import FastAPI
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from urllib.parse import quote_plus
from config import conf
import api


app = FastAPI()
MONGODB_URL = conf["DB_URL"]
password = quote_plus(conf["password"])
MONGODB_URL = MONGODB_URL.replace("password", password)
client = MongoClient(MONGODB_URL, server_api=ServerApi('1'))
db = client["tonDB"]



@app.on_event("shutdown")
async def shutdown_event():
    # 앱 종료시 MongoDB 연결 종료
    app.mongodb_client.close()



@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/find_black_list")
async def find_black_list(data: dict):

    address = data.get("address")
    return {"status" : str(api.find_db(db, address))}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)