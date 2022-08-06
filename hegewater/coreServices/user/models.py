from django.db import models
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.db import connection
from hegewater.utilityServices.convertListToJSONUtil import convertListToJSON
from rest_framework import status

def addUser(user_request):
    cursor = connection.cursor()
    sql = '''INSERT INTO USER(user_name,email_id,password) values(%s,%s,%s)'''
    param_list = [user_request['user_name'],user_request['email_id'],user_request['password']]
    cursor.execute(sql,param_list)
    data = cursor.fetchall()
    return data

def getUserById():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM USER")
    data = cursor.fetchall()
    keys = ["user_id","user_name","email_id","password","user_creation_date"]
    result = convertListToJSON(data, keys)
    return result

def getAllUsers():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM USER")
    data = cursor.fetchall()
    keys = ["user_id","user_name","email_id","password","user_creation_date"]
    result = convertListToJSON(data, keys)
    return result

def updateUser():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM USER")
    data = cursor.fetchall()
    keys = ["user_id","user_name","email_id","password","user_creation_date"]
    result = convertListToJSON(data, keys)
    return result

def deleteUser():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM USER")
    data = cursor.fetchall()
    keys = ["user_id","user_name","email_id","password","user_creation_date"]
    result = convertListToJSON(data, keys)
    return result

