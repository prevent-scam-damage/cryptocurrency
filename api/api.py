import json

def find_db(db, address):
    result = db.blacklist.find_one({"crypto_address": address})
    print(result)
    if result is not None:
        return 1
    else:
        return 0