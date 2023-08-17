from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

class WalletConnectionRequest(BaseModel):
    accountNumber: str

@app.post("/connect_wallet")
async def root(wallet_request: WalletConnectionRequest):
    try:
        account_number = wallet_request.accountNumber
        is_account_found = True
        if is_account_found:
            return {"status": "found", "data": account_number}
        else: 
            return {"status" : "hello"}
    except Exception as e:
        return HTTPException(status_code=500, detail="Error connecting to wallet")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8080)
