from fastapi import FastAPI
from pydantic import BaseModel
import pymongo


class loginItems(BaseModel):
    Name: str
    password: str


app = FastAPI()

client = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
mydb = client['ADD']
info = mydb.logins

@app.post("/login")

def login(items: loginItems):
    name = items.Name
    password = items.password
    a = info.find_one({"name":name,"password":password})
    if(a != None):
        a = "authenticate"
    else:
        a="acess deny"
    return a