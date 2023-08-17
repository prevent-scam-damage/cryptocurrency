from fastapi import FastAPI, HTTPException, Body
import logging
import json
from pydantic import BaseModel

class Account(BaseModel):
    accountNumber: str

app = FastAPI()
app.router.redirect_slashes = False

@app.get("/")
async def root():
    logging.info("Hello World")
    return {"message": "Hello World"}

@app.post("/checkAccount")
async def check_account(account: Account):  # `account`는 pydantic 모델의 인스턴스입니다.
    try:
        with open("index.json", "r") as file:
            accounts = json.load(file)
            
            for acc in accounts:
                if acc["accountNumber"] == account.accountNumber:  # `account.accountNumber`를 사용하여 값을 가져옵니다.
                    return {"status": 1}  # 계좌 번호가 존재하면 1 반환
            
            return {"status": 0}  # 계좌 번호가 존재하지 않으면 0 반환
    except Exception as e:
        logging.error(f"Error occurred: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

