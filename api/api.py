import json

def find_db(db, address):
    print(address)
    result = db.blacklist.find_one({"address": address})
    print(result)
    if result is not None:
        return 1
    else:
        return 0