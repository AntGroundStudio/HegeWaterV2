from django.db import models
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.db import connection
from hegewater.utilityServices.convertListToJSON import convertListToJSON
from rest_framework import status

def addUser():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM USER")
    data = cursor.fetchall()
    keys = ["user_id","user_name","email_id","password","user_creation_date"]
    result = convertListToJSON(data, keys)
    return result

def getUserById():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM USER")
    data = cursor.fetchall()
    keys = ["user_id","user_name","email_id","password","user_creation_date"]
    result = convertListToJSON(data, keys)
    return result

# def getUserById():
#     cursor = connection.cursor()
#     cursor.execute("SELECT * FROM USER")
#     data = cursor.fetchall()
#     keys = ["user_id","user_name","email_id","password","user_creation_date"]
#     result = convertListToJSON(data, keys)
#     return result

# def getAllUsers():
#     cursor = connection.cursor()
#     cursor.execute("SELECT * FROM USER")
#     data = cursor.fetchall()
#     keys = ["user_id","user_name","email_id","password","user_creation_date"]
#     result = convertListToJSON(data, keys)
#     return result
