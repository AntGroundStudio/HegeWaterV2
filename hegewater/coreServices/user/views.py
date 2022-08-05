from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from hegewater.utilityServices.convertListToJSON import convertListToJSON
from rest_framework import status
from . import models


@csrf_exempt
def signUp(request):
    if request.method == 'POST':
        try:
            result = models.addUser()
            return JsonResponse(result, status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            return JsonResponse("Something went wrong", e)

@csrf_exempt
def signIn(request):
    if request.method == 'POST':
        try:
            result = models.getUserById()
            return JsonResponse(result, status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            return JsonResponse("Something went wrong", e)

@csrf_exempt
def logOut(request):
    if request.method == 'POST':
        try:
            result = models.addUser()
            return JsonResponse(result, status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            return JsonResponse("Something went wrong", e)

# @csrf_exempt
# def getUserById(request):
#     if request.method == 'GET':
#         result = models.getUserById()
#         return JsonResponse(result, status=status.HTTP_200_OK, safe=False)

# @csrf_exempt
# def getAllUsers(request):
#     if request.method == 'GET':
#         try:
#             result = models.getAllUsers()
#             return JsonResponse(result, status=status.HTTP_200_OK, safe=False)
#         except Exception as e:
#             return JsonResponse("Something went wrong", e)

# @csrf_exempt
# def updateUser(request):
#     if request.method == 'GET':
#         return JsonResponse(result, status=status.HTTP_200_OK, safe=False)

# @csrf_exempt
# def deleteUser(request):
#     if request.method == 'GET':
#         return JsonResponse(result, status=status.HTTP_200_OK, safe=False)