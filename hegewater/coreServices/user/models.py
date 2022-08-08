from django.db import models
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.db import connection
from hegewater.utilityServices.convertListToJSONUtil import convertListToJSON
from rest_framework import status

def addUser(request_data):
    cursor = connection.cursor()
    sql = '''INSERT INTO USER(user_name,email_id,password) values(%s,%s,%s)'''
    param_list = [request_data['user_name'],request_data['email_id'],request_data['password']]
    cursor.execute(sql,param_list)
    data = cursor.fetchall()
    return data

def getUserById(request_data):
    cursor = connection.cursor()
    sql = '''SELECT * FROM USER WHERE user_id = %s'''
    param_list = [request_data['user_id']]
    cursor.execute(sql,param_list)
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

