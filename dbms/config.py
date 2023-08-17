import json
path = '../conf/conf.json'
with open(path, 'r') as mainconf:
    conf = json.load(mainconf)